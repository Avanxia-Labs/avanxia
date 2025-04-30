import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Equivalent to --host
    allowedHosts: [
      '5173-im4mpn7tlc0pg70jjpz5f-f3583da3.manus.computer',
      '8329-im4mpn7tlc0pg70jjpz5f-f3583da3.manus.computer'
    ]
  }
});

