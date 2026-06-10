import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          framework: ['react', 'react-dom', 'react-router-dom'],
          animation: ['gsap', 'framer-motion', 'lenis'],
        },
      },
    },
  },
  server: {
    port: 3000,
  },
  preview: {
    host: '0.0.0.0',
    port: 4173,
  },
})
