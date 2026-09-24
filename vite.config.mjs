import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: { outDir: "build" },
  test: {
    include: ["src/**/*.{test,spec}.{js,jsx,ts,tsx}"],
    environment: "jsdom",
    globals: true,
    setupFiles: "./src/setupTests.js",
  },
});
