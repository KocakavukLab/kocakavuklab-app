import { render, screen } from '@testing-library/react';
import Publications from './Publications';
import publications from '../../data/pubsData';

test('renders published papers and preprints together in newest-first date order', () => {
  render(<Publications />);
  const byTitle = new Map(publications.map(pub => [pub.title, pub]));
  const rendered = screen.getAllByRole('link')
    .map(link => byTitle.get(link.textContent.trim())).filter(Boolean);
  expect(rendered).toHaveLength(publications.filter(pub => !pub.hidden).length);
  expect(rendered[0].doi).toBe('https://doi.org/10.1016/j.annonc.2026.09.008');
  expect(rendered[0].date).toBe('10/2026');
  expect(rendered.every(pub => !['2019', '2020'].includes(pub.date.split('/')[1]))).toBe(true);
  expect(rendered.some(pub => pub.status === 'In-review')).toBe(true);
  const dates = rendered.map(pub => {
    const [month, year] = pub.date.split('/').map(Number);
    return year * 12 + month;
  });
  expect(dates).toEqual([...dates].sort((a, b) => b - a));
});
