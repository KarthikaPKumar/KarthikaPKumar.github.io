import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  base: '/kathy/revamp/',
  plugins: [react(), tailwindcss()],
  build: {
    target: 'es2020',
    outDir: '../revamp',
    emptyOutDir: true,
    rollupOptions: {
      output: {
        manualChunks: { motion: ['framer-motion'], react: ['react', 'react-dom'] },
      },
    },
  },
});
