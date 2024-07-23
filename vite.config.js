import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import eslint from 'vite-plugin-eslint';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    watch: {
      usePolling: true,
      interval: 100,
    }
  },
  plugins: [react(), eslint()],
});
