import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

const siteUrl = process.env.SITE_URL?.trim() || 'https://alatoosquare.com';

export default defineConfig({
  site: siteUrl,
  output: 'static',
  trailingSlash: 'always',
  build: { format: 'directory' },
  i18n: {
    defaultLocale: 'ky',
    locales: ['ky', 'ru', 'en'],
    prefixDefaultLocale: false,
    redirectToDefaultLocale: false,
  },
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'ky',
        locales: { ky: 'ky-KG', ru: 'ru-KG', en: 'en' },
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
