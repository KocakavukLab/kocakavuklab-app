import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const fail = (where, message) => { throw new Error(`${where}: ${message}`); };
const text = (value, where) => { if (typeof value !== 'string' || !value.trim()) fail(where, 'required nonempty text'); };
const list = (value, where) => { if (!Array.isArray(value)) fail(where, 'expected an array'); };
export function date(value, where) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) fail(where, 'use YYYY-MM-DD');
  const parsed = new Date(`${value}T12:00:00Z`);
  if (!Number.isFinite(+parsed) || parsed.toISOString().slice(0, 10) !== value) fail(where, 'invalid calendar date');
}
export function asset(value, where) {
  text(value, where);
  if (!/^src\/assets\/[\w /()+.-]+\.(png|jpe?g|webp|svg)$/i.test(value) || value.split('/').includes('..')) fail(where, 'use an image path under src/assets');
  const target = path.resolve(root, value);
  if (!fs.existsSync(target) || !fs.realpathSync(target).startsWith(fs.realpathSync(root + '/src/assets') + path.sep)) fail(where, `image missing or outside assets: ${value}`);
}
function url(value, where) {
  text(value, where);
  if (value === '#') return; // Existing partner placeholder; preserve baseline.
  if (!/^(https?:\/\/|mailto:)/i.test(value)) fail(where, 'use https:// or mailto:');
  try { new URL(value); } catch { fail(where, 'invalid URL'); }
}
export function records(items, required, allowed, where, key = 'id') {
  list(items, where); const ids = new Set();
  items.forEach((item, i) => {
    const at = `${where}[${i}]`;
    if (!item || typeof item !== 'object' || Array.isArray(item)) fail(at, 'expected an object');
    for (const field of Object.keys(item)) if (!allowed.includes(field)) fail(at, `unknown field: ${field}`);
    for (const field of required) text(item[field], `${at}.${field}`);
    if (key) { text(item[key], `${at}.${key}`); if (ids.has(item[key])) fail(at, `duplicate ${key}: ${item[key]}`); ids.add(item[key]); }
    for (const [field, value] of Object.entries(item)) {
      if (['image', 'logo', 'src', 'journalLogo'].includes(field)) asset(value, `${at}.${field}`);
      if (['url', 'doi', 'applyLink', 'email', 'bsky', 'scholar', 'linkedin', 'github', 'website', 'twitter', 'researchgate'].includes(field)) url(value, `${at}.${field}`);
    }
  });
}
export function parseNews(source, filename) {
  const match = source.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
  if (!match) fail(filename, 'expected JSON metadata between --- lines, followed by Markdown');
  const entry = { ...JSON.parse(match[1]), fullContent: match[2].replace(/\r?\n$/, '') };
  records([entry], ['id','title','date','dateDisplay','category','shortDescription','fullContent'], ['id','title','date','dateDisplay','category','image','shortDescription','fullContent','tags','photoPair','memberImages'], filename);
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(entry.id) || filename !== `${entry.id}.md`) fail(filename, 'filename must match lowercase hyphenated id');
  date(entry.date, filename);
  if (!['grant','award','new_member','publication','general'].includes(entry.category)) fail(filename, 'unknown category');
  if (entry.memberImages !== undefined) { list(entry.memberImages, filename); entry.memberImages.forEach(image => asset(image, filename)); }
  if (entry.tags !== undefined) { list(entry.tags, filename); entry.tags.forEach(tag => text(tag, filename)); }
  if (entry.photoPair !== undefined) { list(entry.photoPair, filename); if (entry.photoPair.length !== 2) fail(filename, 'photoPair needs exactly two images'); entry.photoPair.forEach(image => asset(image, filename)); }
  // News renderer supports raw HTML for legacy content. New content must be plain Markdown.
  if (/<\/?[a-z!][^>]*>/i.test(entry.fullContent + entry.shortDescription) || /(?:javascript|data|vbscript)\s*:/i.test(entry.fullContent + entry.shortDescription)) fail(filename, 'HTML and executable links are not allowed; use Markdown');
  return entry;
}
export function loadContent(contentDir = path.join(root, 'content')) {
  const read = name => JSON.parse(fs.readFileSync(path.join(contentDir, `${name}.json`), 'utf8'));
  const people = read('people'), jobs = read('jobs'), network = read('network'), moments = read('moments'), publications = read('publications');
  records([people], [], ['principalInvestigator','groups','activeOrder'], 'people', null);
  const personFields = ['id','name','image','role','description','email','bsky','scholar','linkedin','github','website','twitter','researchgate'];
  records([people.principalInvestigator], ['id','name','image','role','description'], personFields, 'people.principalInvestigator');
  records(people.groups, ['id','title'], ['id','title','members','layout'], 'people.groups');
  const members = people.groups.flatMap(group => { list(group.members, group.id); return group.members; });
  records(members, ['id','name','image','role','description'], personFields, 'people.members');
  const groupIds = ['postdocs','clinician-scientists','lab-management','phd-students','masters-md-bachelors','alumni'];
  if (JSON.stringify(people.groups.map(g => g.id)) !== JSON.stringify(groupIds)) fail('people.groups', 'keep existing group ids and order');
  list(people.activeOrder, 'people.activeOrder');
  const activeIds = people.groups.slice(0,4).flatMap(g => g.members.map(m => m.id));
  if (new Set(people.activeOrder).size !== people.activeOrder.length || JSON.stringify([...activeIds].sort()) !== JSON.stringify([...people.activeOrder].sort())) fail('people.activeOrder', 'list every active member id exactly once');
  records(jobs, ['id','title'], ['id','title','jobs'], 'jobs');
  if (JSON.stringify(jobs.map(g=>g.id)) !== JSON.stringify(['phd','postdoc','minijob'])) fail('jobs', 'keep existing group ids and order');
  jobs.forEach(g => list(g.jobs, g.id));
  records(jobs.flatMap(g=>g.jobs), ['id','title','description','status','applyLink'], ['id','title','description','status','applyLink'], 'jobs.items');
  jobs.flatMap(g=>g.jobs).forEach(j => { if (!['Open','Closed'].includes(j.status)) fail(j.id, 'status must be Open or Closed'); });
  records(network, ['id','title'], ['id','title','items'], 'network');
  if (JSON.stringify(network.map(g=>g.id)) !== JSON.stringify(['network'])) fail('network', 'keep existing group ids and order');
  network.forEach(g => list(g.items, g.id));
  records(network.flatMap(g=>g.items), ['id','title','logo','url'], ['id','title','logo','url'], 'network.items');
  list(moments, 'moments');
  const years = new Set();
  moments.forEach(g => { if (!Number.isInteger(g.year) || g.year < 1900 || g.year > 2200 || years.has(g.year)) fail('moments', 'invalid or duplicate year'); years.add(g.year); list(g.events, 'moments.events'); });
  const events = moments.flatMap(g => g.events);
  records(events, ['id','date','title','description'], ['id','date','title','description','photos'], 'moments.events');
  events.forEach(e=> { list(e.photos,e.id); if (!e.photos.length) fail(e.id, 'add at least one photo'); });
  records(events.flatMap(e=>e.photos), ['id','src','alt'], ['id','src','alt'], 'moments.photos');
  records(publications, ['title','journal','doi','authors','date','status'], ['title','journal','doi','authors','date','status','image','journalLogo','hidden'], 'publications', 'doi');
  publications.forEach(p=> { if (p.hidden !== undefined && typeof p.hidden !== 'boolean') fail(p.title, 'hidden must be true or false'); if (!/^(0[1-9]|1[0-2])\/\d{4}$/.test(p.date)) fail(p.title, 'date must be MM/YYYY'); if (!['Published','Preprint','In-review','Submitted'].includes(p.status)) fail(p.title, 'unknown publication status'); });
  const news = fs.readdirSync(path.join(contentDir, 'news')).filter(f=>f.endsWith('.md')).sort().map(f=>parseNews(fs.readFileSync(path.join(contentDir, 'news', f),'utf8'),f)).sort((a,b)=>b.date.localeCompare(a.date));
  records(news, ['id'], ['id','title','date','dateDisplay','category','image','shortDescription','fullContent','tags','photoPair','memberImages'], 'news');
  return { people, jobs, network, moments, publications, news };
}
function moduleText(data, outputDir) {
  const assets = new Map();
  const walk = value => {
    if (Array.isArray(value)) return '['+value.map(walk).join(',')+']';
    if (value && typeof value === 'object') return '{'+Object.entries(value).map(([k,v])=>JSON.stringify(k)+':'+walk(v)).join(',')+'}';
    if (typeof value === 'string' && value.startsWith('src/assets/')) { if (!assets.has(value)) assets.set(value, `asset${assets.size}`); return assets.get(value); }
    return JSON.stringify(value);
  };
  const body = walk(data);
  return '// Generated by npm run content:generate. Edit content/ instead.\n'+[...assets].map(([p,id])=>`import ${id} from ${JSON.stringify('./' + path.relative(outputDir, path.join(root, p)).split(path.sep).join('/'))};`).join('\n')+'\nconst content = '+body+';\nexport default content;\n';
}
export function generate(check = false, { contentDir, outputDir = root + "/src/data/generated" } = {}) {
  const content = loadContent(contentDir);
  for (const [name, data] of Object.entries(content)) {
    const file = path.join(outputDir, `${name}.js`), expected = moduleText(data, outputDir);
    if (check) { if (!fs.existsSync(file) || fs.readFileSync(file,'utf8') !== expected) fail(file, 'outdated; run npm run content:generate'); }
    else { fs.mkdirSync(path.dirname(file),{recursive:true}); fs.writeFileSync(file, expected); }
  }
  console.log(`Content valid: ${content.news.length} news stories, ${content.publications.length} publications; people, jobs, network and moments checked.`);
}
if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  try { generate(process.argv.includes('--check')); } catch(error) { console.error(error.message); process.exitCode = 1; }
}
