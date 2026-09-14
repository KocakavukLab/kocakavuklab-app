import { render, screen, within } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { vi } from "vitest";
import App from "./App";

vi.mock("react-markdown", () => ({ default: ({ children }) => <>{children}</> }));

window.scrollTo = vi.fn();

test("renders primary lab navigation", () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );

  const navigation = screen.getByRole("navigation");

  expect(within(navigation).getByRole("link", { name: "Overview" })).toBeInTheDocument();
});
