import { render, screen, within } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
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
