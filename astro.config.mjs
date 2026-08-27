import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://afrocoder16.github.io',
  base: '/RG-construction',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
