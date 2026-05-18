import { defineConfig } from 'vite'

export default defineConfig({
  resolve: {
    // Ensure browser-compatible ESM exports are picked up
    conditions: ['browser', 'module', 'import', 'default'],
  },
  optimizeDeps: {
    include: [
      'firebase/app',
      'firebase/auth',
      'firebase/firestore',
    ],
  },
  build: {
    target: 'es2020',
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },
})
