import { afterAll, afterEach, test, expect, vi } from 'vitest';
import { render, screen, cleanup } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';

const fixture = await vi.hoisted(async () => {
  const { createContentFixture } = await import('../scripts/content-fixture.mjs');
  return createContentFixture();
});
vi.mock('./data/generated/people', () => ({ default: fixture.content.people }));
vi.mock('./data/generated/publications', () => ({ default: fixture.content.publications }));
vi.mock('./data/generated/network', () => ({ default: fixture.content.network }));
vi.mock('./data/generated/jobs', () => ({ default: fixture.content.jobs }));
vi.mock('./data/generated/moments', () => ({ default: fixture.content.moments }));
vi.mock('./data/generated/news', () => ({ default: fixture.content.news }));

import Overview from './components/pages/Overview';
import Members from './components/pages/Members';
import Publications from './components/pages/Publications';
import Network from './components/pages/Network';
import News from './components/pages/News';
import NewsDetail from './components/pages/NewsDetail';
import Moments from './components/pages/Moments';
import JoinUs from './components/pages/JoinUs';
import Contact from './components/pages/Contact';
import DesignCredits from './components/pages/DesignCredits';
import Imprint from './components/pages/Imprint';
import PrivacyPolicy from './components/pages/PrivacyPolicy';

afterEach(cleanup);
afterAll(() => { fixture.cleanup(); vi.unstubAllGlobals(); });
// jsdom has no viewport observer; these checks cover content rendering, not animation.
vi.stubGlobal("IntersectionObserver", class { observe() {} unobserve() {} disconnect() {} });
window.scrollTo = vi.fn();

for (const [name, Component, text] of [
  ['Overview', Overview, 'Fixture News'],
  ['Members', Members, 'Fixture Researcher'],
  ['Publications', Publications, 'Fixture Publication'],
  ['Network', Network, 'Fixture Partner'],
  ['News', News, 'Fixture News'],
  ['Join Us', JoinUs, 'Fixture Position'],
]) {
  test(`${name} renders added content without page edits`, () => {
    render(<MemoryRouter><Component /></MemoryRouter>);
    expect(screen.getAllByText(text).length).toBeGreaterThan(0);
  });
}

test('new Moments album appears', () => {
  render(<Moments />);
  expect(screen.getByRole('button', { name: 'Open 2099 album' })).toBeInTheDocument();
});

test('new article detail renders Markdown body', () => {
  render(<MemoryRouter initialEntries={['/news/test-news']}><Routes><Route path="/news/:newsId" element={<NewsDetail />} /></Routes></MemoryRouter>);
  expect(screen.getByText('Fixture article body.')).toBeInTheDocument();
});

for (const [name, Component] of [['Contact', Contact], ['Credits', DesignCredits], ['Imprint', Imprint], ['Privacy', PrivacyPolicy]]) {
  test(`${name} still renders alongside updated content`, () => {
    render(<MemoryRouter><Component /></MemoryRouter>);
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
  });
}
