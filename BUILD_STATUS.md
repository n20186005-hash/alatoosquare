# Build status — 2026-09-29

## Architecture

- **Astro 7.3.1** static site (`output: 'static'`), Tailwind 4 via `@tailwindcss/vite`, `@astrojs/sitemap`.
- Deployed to **Cloudflare Workers Static Assets** (`wrangler.jsonc`: `assets.directory ./dist`, `not_found_handling: 404-page`). No server worker — all 13 pages are fully prerendered HTML.
- Build: `pnpm build` (`astro build`); deploy: `pnpm deploy` (`pnpm build && wrangler deploy`).
- `SITE_URL` env overrides the default `https://alatoosquare.com` used for canonical / og:absolute / sitemap.

## Localization (i18n)

Three languages, default `ky` (no prefix), `ru` → `/ru/`, `en` → `/en/`:
- `src/i18n.ts` — `locales`, `localeMeta` (htmlLang / ogLocale / hreflang / prefix), `localizedPath()`, `hreflangAlternates()` (adds `x-default` → `/en/`).
- `src/content/{ky,ru,en}.ts` — full copy of the home page + 3 long-form articles each (guard changing, how to get there, nearby attractions), typed by `src/content/types.ts`.
- `src/data/site.ts` — language-neutral facts (NAP, geo, rating 4.5 / 21,918, maps, sources, image credits, `attractionNames`, `SITE_NAME`).

## Pages (13)

- Home: `/` (ky), `/ru/`, `/en/`
- Articles: `/karuul-almashuu/`, `/kantip-jetuu/`, `/jakynky-jerler/` (ky); same under `/ru/`, `/en/`
- `404.html` (noindex, language chooser)

## SEO

- Per page: `<html lang>`, canonical, hreflang `ky,ru,en,x-default`, og:locale + alternates, absolute og:/twitter:image, `robots index,follow,max-image-preview:large`.
- JSON-LD: home → `TouristAttraction` + `HistoricalLandmark` + `Place` (`@id #attraction`, image[3], geo, hasMap, sameAs[5], `aggregateRating`, `openingHoursSpecification`) + `FAQPage` (12 Q/A) + `WebSite`/`Organization`. Article pages → `Article` + `BreadcrumbList` + `FAQPage`.
- `public/_headers` (HSTS + security headers, `sw.js` no-cache), `public/robots.txt` → `sitemap-index.xml`.
- `public/_redirects` not needed; HTTP→HTTPS + www→apex handled in Cloudflare dashboard (Always Use HTTPS).

## Local validation (this environment)

- `node node_modules/astro/bin/astro.mjs build` → **Complete!**, 13 pages + `sitemap-index.xml` + `404.html` + `_headers` + `robots.txt`.
- `node scripts/check-seo.mjs` → canonical/hreflang/JSON-LD confirmed for all three locales and article pages.
- `read_lints` on `src` → 0 errors.
- Note: do NOT run the `@astrojs/cloudflare` server-adapter build here — its local `workerd` prerender hangs on this Windows sandbox; the static build above is the deploy path.
