

// https://vite.dev/config/
// vite.config.js (NO CHANGE NEEDED, IT'S ALREADY CORRECT)
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  server: {
    proxy: {
      '/api': { // Any request starting with /api will be proxied
        target: 'http://localhost:3000', // Your backend's base URL
        changeOrigin: true,
        // No rewrite needed if your backend itself handles /api/auth
        // rewrite: (path) => path.replace(/^\/api/, ''), // Keep this commented out
      },
    },
  },
});