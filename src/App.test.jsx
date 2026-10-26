import { render, screen, within } from "@testing-library/react";
import { BrowserRouter, MemoryRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import { vi } from "vitest";
import App from "./App";

vi.mock("react-markdown", () => ({ default: ({ children }) => <>{children}</> }));

window.scrollTo = vi.fn();

test("renders navigation and closes the menu after navigation or Escape", async () => {
  const user = userEvent.setup();
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );

  const navigation = screen.getByRole("navigation", {
    name: /primary navigation/i,
  });

  expect(within(screen.getByRole("banner", { name: "Site header" })).getByRole("link", { name: "Kocakavuk Lab Computational Oncology" })).toHaveAttribute("href", "/overview");
  const menu = screen.getByRole("button", { name: "Open navigation menu" });
  await user.click(menu);
  expect(menu).toHaveAttribute("aria-expanded", "true");
  await user.click(within(navigation).getByRole("link", { name: "Members", exact: true }));
  expect(menu).toHaveAttribute("aria-expanded", "false");
  expect(screen.getByRole("heading", { name: "Our Team" })).toBeInTheDocument();
  await user.click(menu);
  await user.keyboard("{Escape}");
  expect(menu).toHaveAttribute("aria-expanded", "false");
  expect(menu).toHaveFocus();
});


test('Donate is visible but cannot navigate or start a payment', async () => {
  const user = userEvent.setup();
  render(<MemoryRouter initialEntries={['/joinus']}><App /></MemoryRouter>);
  const header = within(screen.getByRole('banner', { name: 'Site header' }));
  const donate = header.getByRole('button', { name: 'Donate', exact: true });
  expect(donate).toBeDisabled();
  expect(donate).not.toHaveAttribute('href');
  await user.click(donate);
  expect(screen.getByRole('heading', { name: 'Join Our Research Team' })).toBeInTheDocument();
  expect(screen.queryByRole('link', { name: 'Donate', exact: true })).not.toBeInTheDocument();
  const footer = within(screen.getByRole('contentinfo'));
  expect(footer.getByTitle('Google Maps — Essen University Hospital Department of Hematology')).toHaveAttribute('loading', 'lazy');
  expect(footer.getByRole('link', { name: 'Email the lab' })).toHaveAttribute('href', 'mailto:contact@kocakavuklab.com');
  expect(footer.getByRole('link', { name: /Open Hematology location/ })).toHaveAttribute('href', expect.stringContaining('google.com/maps/search/'));
  for (const link of screen.getAllByRole('link', { name: /Send a general application/ })) {
    expect(link).toHaveAttribute('href', 'mailto:contact@kocakavuklab.com?subject=General%20application');
  }
});

test('retired Contact route leads to Join Us without the old message form', () => {
  render(<MemoryRouter initialEntries={['/contact']}><App /></MemoryRouter>);
  expect(screen.getByRole('heading', { name: 'Join Our Research Team' })).toBeInTheDocument();
  expect(screen.queryByRole('button', { name: 'Send Message' })).not.toBeInTheDocument();
});

test('direct Donate URL cannot expose a donation page or checkout', () => {
  render(<MemoryRouter initialEntries={['/donate']}><App /></MemoryRouter>);
  expect(screen.queryByRole('heading', { name: 'Support Computational Oncology' })).not.toBeInTheDocument();
  expect(screen.queryByRole('form')).not.toBeInTheDocument();
  expect(screen.getByRole('link', { name: /go back home/i })).toBeInTheDocument();
});
