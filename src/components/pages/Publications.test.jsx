import { render, screen } from '@testing-library/react';
import Publications from './Publications';
import publications from '../../data/pubsData';

test('renders visible publications in newest-first date order', () => {
  render(<Publications />);
  const byTitle = new Map(publications.map(pub => [pub.title, pub]));
  const rendered = screen.getAllByRole('link')
    .map(link => byTitle.get(link.textContent.trim())).filter(Boolean);
  expect(rendered).toHaveLength(publications.filter(pub => !pub.hidden).length);
  expect(rendered[0].doi).toBe('https://doi.org/10.1038/s41586-026-11150-x');
  expect(rendered[0].date).toBe('10/2026');
  expect(rendered.every(pub => !['2019', '2020'].includes(pub.date.split('/')[1]))).toBe(true);
  expect(screen.queryByText('Tumor-initiating genetics and therapy drive divergent molecular evolution in IDH-mutant gliomas')).not.toBeInTheDocument();
  expect(screen.getByText('Acquired genetic and cell-state changes in IDH-mutant glioma progression')).toBeInTheDocument();
  for (const pub of rendered) {
    const title = screen.getByRole('link', { name: pub.title });
    const journal = title.parentElement.querySelector('strong');
    expect(journal).toHaveTextContent(pub.journal);
    expect(journal.parentElement.previousElementSibling).toHaveTextContent(pub.authors);
  }
  const dates = rendered.map(pub => {
    const [month, year] = pub.date.split('/').map(Number);
    return year * 12 + month;
  });
  expect(dates).toEqual([...dates].sort((a, b) => b - a));
});
