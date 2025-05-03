import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],

  // ──────────────────────────────────────
  // 1)  ALIAS “@”  →  src
  // ──────────────────────────────────────
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },

  // ──────────────────────────────────────
  // 2)  CONFIGURACIÓN DEL SERVIDOR
  // ──────────────────────────────────────
  server: {
    host: true,
    allowedHosts: [
      '5173-im4mpn7tlc0pg70jjpz5f-f3583da3.manus.computer',
      '8329-im4mpn7tlc0pg70jjpz5f-f3583da3.manus.computer',
    ],
  },
});
