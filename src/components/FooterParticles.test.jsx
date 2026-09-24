import { render, screen, waitFor } from "@testing-library/react";
import { vi } from "vitest";
import FooterParticles from "./FooterParticles";

vi.mock("@tsparticles/react", () => ({
  default: () => <canvas data-testid="footer-canvas" />,
  initParticlesEngine: () => Promise.resolve(),
}));
vi.mock("@tsparticles/slim", () => ({ loadSlim: vi.fn() }));

test("renders decorative particles only when motion is allowed", async () => {
  const original = window.matchMedia;
  window.matchMedia = () => ({ matches: true, addEventListener() {}, removeEventListener() {} });
  const view = render(<FooterParticles />);
  expect(screen.queryByTestId("footer-canvas")).not.toBeInTheDocument();
  view.unmount();
  window.matchMedia = () => ({ matches: false, addEventListener() {}, removeEventListener() {} });
  const animated = render(<FooterParticles />);
  await waitFor(() => expect(screen.getByTestId("footer-canvas")).toBeInTheDocument());
  expect(screen.getByTestId("footer-canvas").parentElement).toHaveAttribute("aria-hidden", "true");
  animated.unmount();
  window.matchMedia = original;
});
