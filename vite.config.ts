/// <reference types="vitest" />

// See: https://vitejs.dev/config/

import react from '@vitejs/plugin-react';

export default ({
  plugins: [react()],
  test: {
    coverage: {
      provider: 'v8', // or 'istanbul'
    },
  }
})

