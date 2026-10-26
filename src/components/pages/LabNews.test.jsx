import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import News from './News';
import NewsDetail from './NewsDetail';
import { getSortedNews } from '../../data/newsData';

const stories = [
  ['nachi-doctoral-defense', 'Nachi successfully defends his doctoral thesis', '2026-10-16', 'Read Nachi’s announcement', 'https://www.linkedin.com/feed/update/urn:li:activity:7516821496032575488/'],
  ['nature-glioma-evolution-2026', 'Lab contributes to Nature study on glioma evolution', '2026-10-14', 'Read the article here', 'https://www.nature.com/articles/s41586-026-11150-x'],
];

test('both new stories appear first with verified dates and working card destinations', () => {
  expect(getSortedNews().slice(0, 2).map(({ id, date }) => [id, date])).toEqual(stories.map(([id, , date]) => [id, new Date(`${date}T00:00:00`)]));
  render(<MemoryRouter><News /></MemoryRouter>);
  for (const [id, title] of stories) {
    expect(screen.getAllByText(title)[0].closest('a')).toHaveAttribute('href', `/news/${id}`);
  }
});

test.each(stories)('%s detail renders its source link', (id, title, date, sourceLabel, source) => {
  render(<MemoryRouter initialEntries={[`/news/${id}`]}><Routes><Route path="/news/:newsId" element={<NewsDetail />} /></Routes></MemoryRouter>);
  expect(screen.getByRole('heading', { name: title, level: 1 })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: sourceLabel })).toHaveAttribute('href', source);
  if (id === 'nachi-doctoral-defense') {
    expect(screen.getByRole('img', { name: `${title}: photo 1` })).toHaveAttribute('src', expect.stringContaining('nachi-doctoral-defense'));
    expect(screen.getByRole('img', { name: `${title}: photo 2` })).toHaveAttribute('src', expect.stringContaining('nachi-doctoral-defense-group'));
    expect(screen.queryByRole('heading', { name: 'Welcome to the Team' })).not.toBeInTheDocument();
  }
});
