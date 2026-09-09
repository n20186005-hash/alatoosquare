# Ала-Тоо аянты — Astro сайт

Бишкектеги Ала-Тоо аянты үчүн кыргыз тилиндеги бир беттүү туристтик сайт.

## Технология

- Astro 7.3.1
- Tailwind CSS 4.3.3 (`@tailwindcss/vite`)
- TypeScript 6.0.3
- `@astrojs/cloudflare` 14.3.0
- `@astrojs/sitemap` 3.7.4
- pnpm 12.3.4
- Node.js 24.20.0

## Домен жана SEO

Продакшн домени — **https://alatoosquare.com** (`astro.config.mjs` ичинде демейки коюлган; керек болсо `SITE_URL` чөйрө өзгөрмөсү менен алмаштырылат). canonical, `og:url` жана sitemap интеграциясы ар дайым иштетилет.

Сайтта Google энтитиси менен байланыш үчүн төмөнкүлөр бар:
- `TouristAttraction` JSON-LD: `@id`, `image` (жергиликтүү), NAP (51 Razzakov St, Bishkek), `geo`, `hasMap`, `aggregateRating` 4.5 × 21 878, `sameAs`;
- `FAQPage` JSON-LD (7 суроо);
- TDK/OG/twitter meta + биринчи сүрөт (og:image абсолюттук);
- H1/H2 энтити байланган («Ала-Тоо аянты жөнүндө», «Ала-Тоо аянтынын тарыхы» ж.б.), географиялык цепочка (Ала-Тоо аянты › Бишкек › Кыргызстан);
- MapEmbed — Google Maps'тин так pb embed src; карта алдында расмий (historymuseum.kg) шилтеме;
- «Булактар» (Sources) секциясы (E-E-A-T);
- PWA: `public/manifest.webmanifest` + `public/sw.js` + `public/icons/icon-{192,512}.png` (2026-09-09 генерацияланган);
- `public/robots.txt` → `sitemap-index.xml`.

## Командалар

```bash
corepack enable
pnpm install --frozen-lockfile
pnpm check
pnpm build
```

Cloudflare Worker үчүн:

```bash
pnpm deploy
```

## Сүрөттөр

Сайттагы үч фотосүрөт Wikimedia Commons'тагы эркин лицензияланган реалдуу фотолор жана **жергиликтүү** сакталат (`public/images/`). Атрибуция `public/IMAGE_CREDITS.txt` файлында берилген. Сайттагы бардык сүрөттөрдүн автордук укугу түпнуска фотографтарга таандык (footer'до жазылган).

## Текшерүү статусу (2026-09-09)

- `npm install` (online) — ийгиликтүү, 332 пакет; node v24.14.0 vs engines 24.20.0 — EBADENGINE эскертүүсү гана;
- `npm run build` (astro build, Cloudflare adapter) — ийгиликтүү: `dist/client` + `dist/server` түзүлдү;
- `scripts/verify-build-output.mjs` — PASS (canonical/OG/PWA/локальдүү сүрөттөр/NAP/JSON-LD);
- `astro check` толук логу фоондо калды, `read_lints` 0 ката. CI'де `pnpm check` кошумча аткарыңыз.

Толук маалымат `BUILD_STATUS.md` жана `scripts/verify.sh` ичинде. Репозиторийде жасалма `pnpm-lock.yaml` жок — биринчи deploy алдында интернет менен `pnpm install` аткарыңыз.

## Сүрөттөр жергиликтүү

Үч сүрөт Wikimedia Commons'тан алынып, **жергиликтүү** `public/images/*.jpg` катары сакталып, `src/data/site.ts` ичиндеги `imageSources` аларды колдонот (алыскы URL жок). Булак жана лицензия маалыматтары `PHOTO_SOURCES.md` жана `public/IMAGE_CREDITS.txt` файлдарында. PWA иконкалары `scripts/generate-pwa-icons.ps1` менен кайра түзүлөт.
