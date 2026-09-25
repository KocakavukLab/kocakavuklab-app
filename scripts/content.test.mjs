import assert from 'node:assert/strict';
import fs from 'node:fs';
import { date, asset, parseNews, loadContent, generate, records } from './content.mjs';
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
