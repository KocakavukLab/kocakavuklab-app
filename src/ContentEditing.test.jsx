import { afterAll, afterEach, test, expect, vi } from 'vitest';
import userEvent from '@testing-library/user-event';
import { render, screen, cleanup, within } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';

const fixture = await vi.hoisted(async () => {
  const { createContentFixture } = await import('../scripts/content-fixture.mjs');
  return createContentFixture({ yaml: true });
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
// jsdom lacks native dialog methods; real focus/Escape behavior is checked in browser.
HTMLDialogElement.prototype.showModal = function () { this.setAttribute('open', ''); };
HTMLDialogElement.prototype.close = function () { this.removeAttribute('open'); };

for (const [name, Component, text] of [
  ['Overview', Overview, 'Fixture News'],
  ['Members', Members, 'Fixture Researcher'],
  ['Publications', Publications, 'Fixture Publication'],
  ['Network', Network, 'Fixture Partner'],
  ['News', News, 'Fixture News'],
  ['Join Us', JoinUs, 'Fixture Position'],
]) {
  test(`${name} renders YAML additions without page edits`, () => {
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


test('member biography and contact links follow content edits', () => {
  render(<MemoryRouter><Members /></MemoryRouter>);
  expect(screen.getByText('Test biography updated through content.')).toBeInTheDocument();
  expect(screen.getByRole('link', { name: 'Fixture Researcher website' })).toHaveAttribute('href', 'https://example.org/researcher');
  expect(screen.getByRole('link', { name: 'Fixture Researcher email' })).toHaveAttribute('href', 'mailto:researcher@example.org');
});

test('publication links work, newest comes first, hidden draft stays absent', () => {
  render(<Publications />);
  const paper = screen.getByRole('link', { name: 'Fixture Publication' });
  expect(paper).toHaveAttribute('href', 'https://example.org/test-paper');
  expect(paper).toHaveAttribute('target', '_blank');
  expect(paper).toHaveAttribute('rel', 'noopener noreferrer');
  expect(screen.queryByText('Fixture Hidden Publication')).not.toBeInTheDocument();
  expect(screen.getAllByRole('link').filter(link => link.textContent.trim())[0]).toBe(paper);
});

test('partner URL and vacancy links render; closed vacancy is excluded', () => {
  const view = render(<MemoryRouter><Network /></MemoryRouter>);
  expect(screen.getByRole('link', { name: 'Fixture Partner' })).toHaveAttribute('href', 'https://example.org/partner');
  view.unmount();
  render(<MemoryRouter><JoinUs /></MemoryRouter>);
  expect(screen.queryByText('Fixture Closed Position')).not.toBeInTheDocument();
  expect(screen.getAllByRole('link', { name: /View details/ }).some(link => link.href === 'https://example.org/apply')).toBe(true);
  expect(screen.getAllByRole('link', { name: /Send a general application/ })[0]).toHaveAttribute('href', '/contact');
});

test('news card opens detail, Markdown link resolves, back button returns', async () => {
  const user = userEvent.setup();
  render(<MemoryRouter initialEntries={['/news']}><Routes><Route path="/news" element={<News />} /><Route path="/news/:newsId" element={<NewsDetail />} /></Routes></MemoryRouter>);
  await user.click(screen.getAllByText('Fixture News')[0]);
  expect(screen.getByText('Fixture article body.')).toBeInTheDocument();
  expect(screen.getByRole('link', { name: 'Sample source' })).toHaveAttribute('href', 'https://example.org/research');
  await user.click(screen.getByRole('button', { name: 'Back to News' }));
  expect(screen.queryByText('Fixture article body.')).not.toBeInTheDocument();
  expect(screen.getAllByText('Fixture News').length).toBeGreaterThan(0);
});

test('Moments opens two-photo sample, next/previous navigate, close restores page', async () => {
  const user = userEvent.setup();
  render(<Moments />);
  await user.click(screen.getByRole('button', { name: 'Open 2099 album' }));
  const viewer = screen.getByRole('dialog', { name: 'Moments album viewer' });
  expect(within(viewer).getByRole('img', { name: 'Fixture Moment' })).toBeInTheDocument();
  expect(within(viewer).getByRole('img', { name: 'Fixture second photo' })).toBeInTheDocument();
  await user.click(within(viewer).getByRole('button', { name: 'Next album' }));
  expect(within(viewer).getByText('Life outside the lab · 2026')).toBeInTheDocument();
  await user.click(within(viewer).getByRole('button', { name: 'Previous album' }));
  expect(within(viewer).getByText('Life outside the lab · 2099')).toBeInTheDocument();
  await user.click(within(viewer).getByRole('button', { name: 'Close album viewer' }));
  expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  expect(document.body.style.overflow).not.toBe('hidden');
});

test('Contact requires valid email and consent; privacy link remains available', async () => {
  const user = userEvent.setup();
  render(<MemoryRouter><Contact /></MemoryRouter>);
  const submit = screen.getByRole('button', { name: 'Send Message' });
  expect(submit).toBeDisabled();
  await user.type(screen.getByLabelText('Name'), 'Test visitor');
  await user.type(screen.getByLabelText('Email'), 'invalid-email');
  await user.type(screen.getByLabelText('Message'), 'Local test only; do not send.');
  await user.click(screen.getByRole('checkbox'));
  expect(submit).toBeDisabled();
  await user.clear(screen.getByLabelText('Email'));
  await user.type(screen.getByLabelText('Email'), 'visitor@example.org');
  expect(submit).toBeEnabled();
  expect(screen.getByRole('link', { name: /data privacy policy/i })).toHaveAttribute('href', '/privacypolicy');
  // Do not submit: email delivery is an external action, outside this simulation.
});
