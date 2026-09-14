import { render, screen, within, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { vi } from 'vitest';
import Moments from './Moments';
import { momentsTimeline } from '../../data/momentsData';

test('renders each photo once and lets visitors navigate and close its preview', async () => {
  HTMLDialogElement.prototype.showModal = vi.fn(function () { this.setAttribute('open', ''); });
  HTMLDialogElement.prototype.close = vi.fn(function () { this.removeAttribute('open'); });
  const user = userEvent.setup();
  const photos = momentsTimeline.flatMap(group => group.events.flatMap(event => event.photos));
  render(<Moments />);
  const collage = screen.getByRole('region', { name: 'Moments photo collage' });
  expect(within(collage).getAllByRole('button')).toHaveLength(photos.length);
  await user.click(within(collage).getByRole('button', { name: `Open ${photos[0].alt}` }));
  const dialog = screen.getByRole('dialog');
  expect(within(dialog).getByRole('img')).toHaveAttribute('src', photos[0].src);
  await user.click(within(dialog).getByRole('button', { name: 'Previous image' }));
  expect(within(dialog).getByRole('img')).toHaveAttribute('src', photos.at(-1).src);
  fireEvent.keyDown(dialog, { key: 'ArrowRight' });
  expect(within(dialog).getByRole('img')).toHaveAttribute('src', photos[0].src);
  expect(within(dialog).getByText(photos[0].alt)).toBeInTheDocument();
  fireEvent(dialog, new Event('cancel', { bubbles: false, cancelable: true }));
  expect(dialog).not.toHaveAttribute('open');
  expect(document.body.style.overflow).toBe('');
});
