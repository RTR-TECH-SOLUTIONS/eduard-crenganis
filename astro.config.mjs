// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// Demoul stă pe GitHub Pages sub /eduard-crenganis, deci toate căile
// interne trec prin helperul `u()` din src/lib/url.ts.
export default defineConfig({
  site: 'https://rtr-tech-solutions.github.io',
  base: '/eduard-crenganis',
  vite: {
    plugins: [tailwindcss()],
  },
});
