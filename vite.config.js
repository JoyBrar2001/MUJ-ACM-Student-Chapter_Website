import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/MUJ-ACM-Student-Chapter_Website/',
  plugins: [react()],
})
