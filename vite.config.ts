import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // For serving vite on a global IP
    // host: '0.0.0.0',
    host: 'localhost',
    port: 3000,
  }
})
