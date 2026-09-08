import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

const configuredSite = process.env.SITE_URL?.trim() || undefined;

export default defineConfig({
  site: configuredSite,
  output: 'server',
  adapter: cloudflare(),
  integrations: configuredSite ? [sitemap()] : [],
  vite: {
    plugins: [tailwindcss()],
  },
});
