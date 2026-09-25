import { render, screen, within, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { vi } from 'vitest';
import Moments from './Moments';
import { momentsTimeline } from '../../data/momentsData';

test('renders year albums and lets visitors navigate and close the collage viewer', async () => {
  HTMLDialogElement.prototype.showModal = vi.fn(function () { this.setAttribute('open', ''); });
  HTMLDialogElement.prototype.close = vi.fn(function () { this.removeAttribute('open'); });
  const user = userEvent.setup();
  const albums = momentsTimeline;
  const photos = albums[0].events.flatMap(event => event.photos);
  const lastPhotos = albums.at(-1).events.flatMap(event => event.photos);
  render(<Moments />);
  const collage = screen.getByRole('region', { name: 'Moments photo collage' });
  expect(within(collage).getAllByRole('button')).toHaveLength(albums.length);
  await user.click(within(collage).getByRole('button', { name: `Open ${albums[0].year} album` }));
  const dialog = screen.getByRole('dialog');
  expect(within(dialog).getAllByRole('img')[0]).toHaveAttribute('src', photos[0].src);
  await user.click(within(dialog).getByRole('button', { name: 'Previous album' }));
  expect(within(dialog).getAllByRole('img')[0]).toHaveAttribute('src', lastPhotos[0].src);
  fireEvent.keyDown(dialog, { key: 'ArrowRight' });
  expect(within(dialog).getAllByRole('img')[0]).toHaveAttribute('src', photos[0].src);
  expect(within(dialog).getAllByRole('img')).toHaveLength(photos.length);
  expect(within(dialog).getByText(`Life outside the lab · ${albums[0].year}`)).toBeInTheDocument();
  fireEvent(dialog, new Event('cancel', { bubbles: false, cancelable: true }));
  expect(dialog).not.toHaveAttribute('open');
  expect(document.body.style.overflow).toBe('');
});
