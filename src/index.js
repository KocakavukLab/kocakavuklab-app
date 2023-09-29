import { BrowserRouter } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.js";
import "./index.css";
// Detect if the browser is Safari
const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

if (!isSafari) {
  // Add CSS for smooth scrolling and hidden scrollbars for non-Safari browsers
  const style = document.createElement('style');
  style.innerHTML = `
    html {
      scroll-behavior: smooth;
      scrollbar-width: none;
    }
    ::-webkit-scrollbar {
      display: none;
    }
  `;
  document.head.appendChild(style);
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
