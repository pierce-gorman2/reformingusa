import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// Fully static output: works on Cloudflare Pages, GitHub Pages, or any static host.
export default defineConfig({
  site: 'https://reformingusa.org',
  output: 'static',
  integrations: [sitemap()],
  vite: { plugins: [tailwindcss()] },
});
