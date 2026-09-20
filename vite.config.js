import { defineConfig } from 'vite';
import { fileURLToPath, URL } from 'node:url';
import { rm } from 'node:fs/promises';
import path from 'node:path';

const ROOT = fileURLToPath(new URL('.', import.meta.url));

// Vite copia `publicDir` sencer a `dist/` sense cap manera nativa d'excloure
// subcarpetes o fitxers concrets. Auditoria de producció (2026-09-20): amb
// `publicDir: 'assets'`, `assets/reference/` (moodboard privat de la
// clienta, mai un asset de producció — CLAUDE.md §0/§2.11/§3.1) s'estava
// publicant sencer a dist/reference/ (~11 MB), i dins hi ha com a mínim 2
// fotografies que docs/assets-status.md documenta explícitament com a
// problemàtiques de privacitat de tercers (persones identificables en una
// prestatgeria de fons) — exactament les que es van RETALLAR per excloure-
// les de les versions aprovades (p. ex. `office-meeting-area.jpg` és un
// retall de `.../WhatsApp Image 2026-09-11 at 20.41.09 (1).jpeg`, que
// segueix mostrant la foto familiar a l'original). Aquest plugin esborra
// just després del build les rutes que MAI han de ser públiques, encara que
// visquin dins `publicDir`, sense moure ni eliminar res del repositori
// (docs/assets-status.md segueix apuntant a les rutes reals).
function excludeFromPublicBuild(outDir, relPaths) {
  return {
    name: 'exclude-from-public-build',
    apply: 'build',
    async closeBundle() {
      for (const relPath of relPaths) {
        await rm(path.join(ROOT, outDir, relPath), { recursive: true, force: true });
      }
    },
  };
}

// Els assets ja existents del projecte viuen a `assets/` (no `public/`).
// `publicDir` respecta aquesta organització sense moure ni duplicar fitxers.
export default defineConfig({
  base: '/gloria-solsona-web/',
  publicDir: 'assets',
  plugins: [
    excludeFromPublicBuild('dist', [
      // Moodboard/referències de la clienta: mai un asset de producció.
      'reference',
      // Original sense retallar amb una fotografia familiar identificable
      // de tercers a la prestatgeria de fons (docs/assets-status.md,
      // secció "El despatx" — mateix problema que ja va motivar el retall
      // d'office-meeting-area.jpg).
      'images/office/WhatsApp Image 2026-09-11 at 20.41.09.jpeg',
    ]),
  ],
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
        // 404 personalitzada (Fase 2 SEO, docs/seo-plan.md): cal registrar-la
        // com a entrada perquè Vite hi apliqui el mateix processament de
        // `base`/assets que a la resta de pàgines. GitHub Pages la troba
        // automàticament a l'arrel del contingut publicat (dist/404.html).
        notFound: fileURLToPath(new URL('./404.html', import.meta.url)),
      },
    },
  },
});
