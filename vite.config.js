import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Vitest config for unit tests
// https://vitest.dev/config/

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    setupFiles: './vitest.setup.js',
  },
})
