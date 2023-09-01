import { render as rtlRender } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from './App';
function render(ui, { ...renderOptions } = {}) {
  return rtlRender(ui, { wrapper: BrowserRouter, ...renderOptions });
}

// Now use this custom render function in your test
test("renders learn react link", () => {
  render(<App />);
  // your expect assertions here
});
