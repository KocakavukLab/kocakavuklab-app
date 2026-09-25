import assert from 'node:assert/strict';
import fs from 'node:fs';
import { date, asset, parseNews, loadContent, generate, records, parseMetadata } from './content.mjs';
const sample = fs.readFileSync(new URL('../content/news/map-2026-london.md', import.meta.url),'utf8');
assert.equal(parseNews(sample,'map-2026-london.md').photoPair.length, 2);
assert.throws(()=>date('2026-02-30','date'), /invalid calendar/);
assert.throws(()=>date('September 11','date'), /YYYY-MM-DD/);
assert.throws(()=>asset('src/assets/missing.png','image'), /missing/);
assert.throws(()=>asset('src/assets/../../package.json','image'), /image path/);
assert.throws(()=>parseNews(sample.replace('"general"','"unknown"'),'map-2026-london.md'), /category/);
assert.throws(()=>parseNews(sample+'\n<script>alert(1)</script>','map-2026-london.md'), /HTML/);
assert.throws(()=>parseNews(sample,'different-id.md'), /filename/);
assert.throws(()=>parseNews(sample.replace('"title":','"titel":'),'map-2026-london.md'), /unknown field/);
assert.throws(()=>parseNews(sample.replace('2026-09-11','2026-13-11'),'map-2026-london.md'), /calendar/);
assert.throws(()=>records([{id:'same'},{id:'same'}], ['id'], ['id'], 'items'), /duplicate/);
loadContent(); generate(true);
console.log('Content regression checks passed.');

// Exercise real file edits and generation for all six supported collections.
const { createContentFixture } = await import('./content-fixture.mjs');
const fixture = createContentFixture();
try {
  const expected = { people: 'Fixture Researcher', publications: 'Fixture Publication', network: 'Fixture Partner', jobs: 'Fixture Position', moments: 'Fixture Moment', news: 'Fixture News' };
  for (const [name, marker] of Object.entries(expected)) {
    assert.ok(fs.readFileSync(`${fixture.outputDir}/${name}.js`, 'utf8').includes(marker), name);
  }
  const before = fs.readFileSync(`${fixture.outputDir}/people.js`, 'utf8');
  const file = `${fixture.contentDir}/people.json`;
  const people = JSON.parse(fs.readFileSync(file, 'utf8'));
  people.activeOrder.push('missing-person');
  fs.writeFileSync(file, JSON.stringify(people));
  assert.throws(() => generate(false, fixture), /active member/);
  assert.equal(fs.readFileSync(`${fixture.outputDir}/people.js`, 'utf8'), before, 'failed validation must not overwrite generated content');
} finally { fixture.cleanup(); }
console.log('All six content additions generated; invalid edit preserved prior output.');

// YAML and JSON must generate identical data; malformed edits must fail closed.
const yamlFixture = createContentFixture({ yaml: true });
const jsonFixture = createContentFixture();
try {
  assert.deepEqual(yamlFixture.content, jsonFixture.content);
  for (const [file, module, marker] of [
    ['people.yaml', 'people', 'Fixture Researcher'],
    ['publications.yaml', 'publications', 'Fixture Publication'],
    ['network.yaml', 'network', 'Fixture Partner'],
    ['jobs.yaml', 'jobs', 'Fixture Position'],
    ['moments.yaml', 'moments', 'Fixture Moment'],
    ['news/test-news.md', 'news', 'Fixture News'],
  ]) {
    const source = `${yamlFixture.contentDir}/${file}`;
    fs.writeFileSync(source, fs.readFileSync(source, 'utf8').replace(marker, `${marker} Updated`));
    generate(false, yamlFixture);
    assert.ok(fs.readFileSync(`${yamlFixture.outputDir}/${module}.js`, 'utf8').includes(`${marker} Updated`), `${file} edit reaches generated output`);
  }

  assert.throws(() => parseMetadata('title: First\ntitle: Second', 'duplicate.yaml'), /unique/);
  assert.throws(() => parseMetadata('title: [unfinished', 'broken.yaml'), /flow sequence/i);
  assert.throws(() => parseMetadata('title: !unsupported value', 'tag.yaml'), /tag/);
  assert.throws(() => parseMetadata('title: &title value\ncopy: *title', 'alias.yaml'), /alias/i);
  fs.writeFileSync(`${yamlFixture.contentDir}/people.json`, '{}');
  assert.throws(() => generate(false, yamlFixture), /exactly one source/);
  fs.unlinkSync(`${yamlFixture.contentDir}/people.json`);
  const file = `${yamlFixture.contentDir}/people.yaml`;
  const before = fs.readFileSync(`${yamlFixture.outputDir}/people.js`, 'utf8');
  fs.writeFileSync(file, 'groups: [unfinished');
  assert.throws(() => generate(false, yamlFixture));
  assert.equal(fs.readFileSync(`${yamlFixture.outputDir}/people.js`, 'utf8'), before);
} finally { yamlFixture.cleanup(); jsonFixture.cleanup(); }
console.log('YAML parity, duplicate sources, syntax, tags and aliases checked.');

// Real maintainer mistakes must fail before touching any generated module.
const { parse, stringify } = await import('yaml');
const scenario = createContentFixture({ yaml: true });
try {
  const snapshot = () => Object.fromEntries(fs.readdirSync(scenario.outputDir).map(name => [name, fs.readFileSync(`${scenario.outputDir}/${name}`, 'utf8')]));
  const before = snapshot();
  for (const [name, edit, error] of [
    ['publications', data => { data[0].hidden = 'false'; }, /hidden must/],
    ['publications', data => { data[0].date = '13\/2099'; }, /MM\/YYYY/],
    ['publications', data => { data.push({ ...data[0] }); }, /duplicate/],
    ['moments', data => { data[0].events[0].photos = []; }, /at least one photo/],
    ['moments', data => { data[0].events[0].photos[0].src = 'src/assets/missing.webp'; }, /missing/],
    ['moments', data => { data[0].events[0].photos.push({ ...data[0].events[0].photos[0] }); }, /duplicate/],
    ['network', data => { data[0].items[0].url = 'javascript:alert(1)'; }, /https/],
    ['jobs', data => { data[0].jobs[0].status = 'Maybe'; }, /Open or Closed/],
    ['people', data => { data.activeOrder.pop(); }, /active member/],
  ]) {
    const file = `${scenario.contentDir}/${name}.yaml`;
    const original = fs.readFileSync(file, 'utf8');
    const data = parse(original); edit(data); fs.writeFileSync(file, stringify(data));
    assert.throws(() => generate(false, scenario), error, name);
    assert.deepEqual(snapshot(), before, `${name}: invalid edits preserve every output`);
    fs.writeFileSync(file, original);
  }
  // Remove each sample again: deletion is an ordinary supported content update.
  for (const [name, remove, marker] of [
    ['people', data => { data.groups[0].members = data.groups[0].members.filter(p => p.id !== 'test-member'); data.activeOrder = data.activeOrder.filter(id => id !== 'test-member'); }, 'Fixture Researcher'],
    ['publications', data => { data.splice(data.findIndex(p => p.title === 'Fixture Publication'), 1); }, 'Fixture Publication'],
    ['network', data => { data[0].items = data[0].items.filter(p => p.id !== 'test-partner'); }, 'Fixture Partner'],
    ['jobs', data => { data[0].jobs = data[0].jobs.filter(p => p.id !== 'test-job'); }, 'Fixture Position'],
    ['moments', data => { data.splice(data.findIndex(p => p.year === 2099), 1); }, 'Fixture Moment'],
  ]) {
    const file = `${scenario.contentDir}/${name}.yaml`;
    const data = parse(fs.readFileSync(file, 'utf8')); remove(data); fs.writeFileSync(file, stringify(data));
    generate(false, scenario);
    assert.ok(!fs.readFileSync(`${scenario.outputDir}/${name}.js`, 'utf8').includes(marker));
  }
  fs.unlinkSync(`${scenario.contentDir}/news/test-news.md`); generate(false, scenario);
  assert.ok(!fs.readFileSync(`${scenario.outputDir}/news.js`, 'utf8').includes('Fixture News'));
} finally { scenario.cleanup(); }
console.log('Real-world invalid edits and removal of all six sample collections passed.');
