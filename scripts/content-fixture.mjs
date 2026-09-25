// Test-only content additions. No fixture is written to the website's content/.
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { stringify } from 'yaml';
import { generate, loadContent } from './content.mjs';

export function createContentFixture({ yaml = false } = {}) {
  const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
  const temp = fs.mkdtempSync(path.join(os.tmpdir(), 'lab-content-test-'));
  const contentDir = path.join(temp, 'content');
  const outputDir = path.join(temp, 'generated');
  try {
    fs.cpSync(path.join(root, 'content'), contentDir, { recursive: true });
    const update = (name, mutate) => {
      const file = path.join(contentDir, `${name}.json`);
      const data = JSON.parse(fs.readFileSync(file, 'utf8'));
      mutate(data);
      fs.writeFileSync(file, JSON.stringify(data, null, 2));
    };
    const image = 'src/assets/members/Emre.optimized.webp';
    update('people', data => {
      data.groups[0].members.push({ id: 'test-member', name: 'Fixture Researcher', image, role: 'Test role', description: 'Test biography updated through content.', email: 'mailto:researcher@example.org', website: 'https://example.org/researcher' });
      data.activeOrder.push('test-member');
    });
    update('publications', data => data.push({ title: 'Fixture Publication', journal: 'Test Journal', doi: 'https://example.org/test-paper', authors: 'Test Author', date: '12/2099', status: 'Published', image: 'src/assets/pubs/cell-22.optimized.webp' }));
    update('publications', data => data.push({ title: 'Fixture Hidden Publication', journal: 'Test Journal', doi: 'https://example.org/hidden-paper', authors: 'Test Author', date: '11/2099', status: 'Preprint', hidden: true }));
    update('network', data => data[0].items.push({ id: 'test-partner', title: 'Fixture Partner', logo: image, url: 'https://example.org/partner' }));
    update('jobs', data => data[0].jobs.push({ id: 'test-job', title: 'Fixture Position', description: 'Test job description.', status: 'Open', applyLink: 'https://example.org/apply' }));
    update('jobs', data => data[0].jobs.push({ id: 'test-closed-job', title: 'Fixture Closed Position', description: 'Closed test job.', status: 'Closed', applyLink: 'https://example.org/closed' }));
    update('moments', data => data.unshift({ year: 2099, events: [{ id: 'test-event', date: '2099-12-01', title: 'Fixture Event', description: 'Test event.', photos: [{ id: 'test-photo', src: 'src/assets/moments/Labouting_Jul2026_moment5.optimized.webp', alt: 'Fixture Moment' }, { id: 'test-photo-2', src: 'src/assets/moments/grugalauf_2026.optimized.webp', alt: 'Fixture second photo' }] }] }));
    fs.writeFileSync(path.join(contentDir, 'news/test-news.md'), `---\n${JSON.stringify({ id: 'test-news', title: 'Fixture News', date: '2099-12-01', dateDisplay: 'December 2099', category: 'general', image, shortDescription: 'Test news summary.' })}\n---\nFixture article body.\n\n[Sample source](https://example.org/research)\n`);
    if (yaml) {
      for (const name of ['people', 'publications', 'network', 'jobs', 'moments']) {
        const file = path.join(contentDir, `${name}.json`);
        fs.writeFileSync(path.join(contentDir, `${name}.yaml`), stringify(JSON.parse(fs.readFileSync(file, 'utf8'))));
        fs.unlinkSync(file);
      }
      const file = path.join(contentDir, 'news/test-news.md');
      const source = fs.readFileSync(file, 'utf8');
      const [, metadata, body] = source.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
      fs.writeFileSync(file, `---\n${stringify(JSON.parse(metadata))}---\n${body}`);
    }
    generate(false, { contentDir, outputDir });
    generate(true, { contentDir, outputDir });
    return { content: loadContent(contentDir), contentDir, outputDir, cleanup: () => fs.rmSync(temp, { recursive: true, force: true }) };
  } catch (error) {
    fs.rmSync(temp, { recursive: true, force: true });
    throw error;
  }
}
