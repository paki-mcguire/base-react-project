// import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
// export default defineConfig ({
export default ({
  plugins: [react()],
  test: {
    reporters: ['html'],
    coverage: {
      provider: 'v8' // or 'istanbul'
    },
  }
})
