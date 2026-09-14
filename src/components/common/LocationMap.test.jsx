import { render, screen } from '@testing-library/react';
import LocationMap from './LocationMap';

test('embeds the Google Maps Hematology location accessibly', () => {
  render(<LocationMap />);
  const map = screen.getByTitle('Google Maps — Essen University Hospital Department of Hematology');
  expect(map).toHaveAttribute('src', expect.stringContaining('https://www.google.com/maps/embed?pb='));
  expect(map.src).toContain('0x1ac25e006ad27840');
  expect(map).not.toHaveAttribute('aria-hidden');
});
