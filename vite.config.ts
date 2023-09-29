/// <reference types="vitest" />

// See: https://vitejs.dev/config/

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    coverage: {
      reporter: ["text"],
      provider: 'v8', // or 'istanbul'
    },
    environment: "jsdom",
    setupFiles: "./src/tests/setup.js"
  }
})

