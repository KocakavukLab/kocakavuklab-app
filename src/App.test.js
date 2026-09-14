import { newsItems, getNewsById, getSortedNews, getNewsGroupedByYear } from './data/newsData';
import { members, memberTwo, alumni, principalInvestigator } from './data/membersData';
import { jobPositions } from './data/jobsData';

// Replace the inherited CRA placeholder (no assertions, incompatible ESM page imports)
// with checks for the content contracts consumed by the existing pages.
test('news routes resolve and dates survive content generation', () => {
  for (const item of newsItems) {
    expect(getNewsById(item.id)).toBe(item);
    expect(item.date).toBeInstanceOf(Date);
    expect(Number.isFinite(item.date.getTime())).toBe(true);
  }
  expect(getNewsById('missing-story')).toBeUndefined();
  const sorted = getSortedNews();
  for (let i = 1; i < sorted.length; i++) expect(+sorted[i-1].date).toBeGreaterThanOrEqual(+sorted[i].date);
  expect(Object.values(getNewsGroupedByYear()).flat()).toHaveLength(newsItems.length);
});

test('member and job slots receive complete records', () => {
  for (const person of [principalInvestigator, ...members, ...memberTwo, ...alumni]) {
    expect(person).toEqual(expect.objectContaining({ id: expect.any(String), name: expect.any(String), image: expect.any(String) }));
  }
  for (const job of jobPositions) expect(['Open', 'Closed']).toContain(job.status);
});
