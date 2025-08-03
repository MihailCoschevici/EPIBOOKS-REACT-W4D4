// vite.config.js

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // AGGIUNGI QUESTO BLOCCO DI CODICE
  test: {
    environment: 'jsdom',
    setupFiles: './src/setupTests.js', // collega il file di setup
    globals: true // opzionale ma comodo
  },
})