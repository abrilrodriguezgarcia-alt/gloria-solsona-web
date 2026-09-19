import { defineConfig } from 'vite';
import { fileURLToPath, URL } from 'node:url';

// Els assets ja existents del projecte viuen a `assets/` (no `public/`).
// `publicDir` respecta aquesta organització sense moure ni duplicar fitxers.
export default defineConfig({
  base: '/gloria-solsona-web/',
  publicDir: 'assets',
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: fileURLToPath(new URL('./index.html', import.meta.url)),
        avisLegal: fileURLToPath(new URL('./legal/avis-legal.html', import.meta.url)),
        privacitat: fileURLToPath(new URL('./legal/privacitat.html', import.meta.url)),
        cookies: fileURLToPath(new URL('./legal/cookies.html', import.meta.url)),
        // Versió en castellà, generada a partir de les pàgines CA per
        // scripts/build-i18n.py (vegeu src/i18n/es.json). No editar a mà.
        esMain: fileURLToPath(new URL('./es/index.html', import.meta.url)),
        esAvisoLegal: fileURLToPath(new URL('./es/legal/aviso-legal.html', import.meta.url)),
        esPrivacidad: fileURLToPath(new URL('./es/legal/privacidad.html', import.meta.url)),
        esCookies: fileURLToPath(new URL('./es/legal/cookies.html', import.meta.url)),
      },
    },
  },
});
