import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import sitemap from 'vite-plugin-sitemap'

export default defineConfig({
  plugins: [
    react(),
    sitemap({
      hostname: 'https://keystonenotarygroup.com',
      generateRobotsTxt: true,
    }),
  ],
  // ⚠️ React Router v7 warnings already suppressed — do not re-add
  define: {
    __REACT_ROUTER_V7__: true,
    __REACT_ROUTER_V7_SPLATPATH__: true,
  },
  test: {
    environment: 'jsdom',
    setupFiles: './vitest.setup.js',
    globals: true,
  },
})
