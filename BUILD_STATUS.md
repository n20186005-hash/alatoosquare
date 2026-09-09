# Build status — 2026-09-09

## Локальная валидация (выполнено в этом окружении)

- `npm install` (онлайн, `--prefer-online`) — успешно, 332 пакета. Node v24.14.0 против `engines.node` 24.20.0 — только `EBADENGINE`-предупреждение, на сборку не влияет.
- `npm run build` (`astro build`, adapter `@astrojs/cloudflare`, output server) — **успешно**. Сгенерированы `dist/client` + `dist/server`:
  - `index.html`, `sitemap-index.xml` + `sitemap-0.xml`, `robots.txt`;
  - PWA: `manifest.webmanifest`, `sw.js`, `icons/icon-192.png`, `icons/icon-512.png` (192×192 и 512×512 проверены);
  - локальные изображения `icons/*`, `images/ala-too-square-{hero,wide}.jpg`, `images/state-history-museum.jpg`, `IMAGE_CREDITS.txt`, `logo.svg`.
- `scripts/verify-build-output.mjs` — PASS:
  - canonical = `https://alatoosquare.com/`, og:image/twitter:image абсолютные на локальный hero-снимок;
  - подключены manifest и SW; удалённых `upload.wikimedia.org` ссылок в HTML нет;
  - NAP (Ala-Too Square · 51 Razzakov St, Bishkek, Kyrgyzstan · VJG3+7F) и расмий музейная ссылка на странице присутствуют;
  - JSON-LD: `TouristAttraction` c `@id=https://alatoosquare.com/#attraction`, image[3], hasMap, sameAs[4], aggregateRating 4.5 × 21 878 — парсится; `FAQPage` = 7 вопросов = 7 видимых `<details>`;
  - секция `#sources`, footer-фраза об авторских правах на фото, `lastUpdated` 2026-09-09 — на месте.
- `astro check`: в этом окружении команда уходит в фон и полный лог получить не удалось. `read_lints` по изменённым файлам — 0 ошибок. Рекомендуется прогнать `pnpm check` в CI.

## Что изменилось относительно предыдущего статуса

- Домен по умолчанию `https://alatoosquare.com` зашит в `astro.config.mjs` (`SITE_URL` по-прежнему переопределяет); sitemap включён всегда.
- Изображения локализованы: `src/data/site.ts` → `imageSources` указывают на `public/images/*.jpg` (были remote Commons URL).
- Добавлены SEO/PWA-объекты — список см. в `README.md` → «Домен жана SEO».
- В `src/data/site.ts` добавлены: `contentUpdated`, `sources[4]`, расширенный FAQ (5→7).

## Примечания для CI / deploy

- Репозиторий **не содержит** `pnpm-lock.yaml` и `package-lock.json` (правило «никаких поддельных lockfile» сохранено). Первый запуск в CI/deploy должен выполнять `pnpm install` (реальная резолюция версий), затем `pnpm build` / `pnpm deploy`.
- Скрипты package.json ориентированы на pnpm: `pnpm check`, `pnpm build`, `pnpm deploy`.
- PWA-иконки при необходимости регенерируются: `powershell -NoProfile -ExecutionPolicy Bypass -File scripts/generate-pwa-icons.ps1`.
- Проверка продуктового HTML: `node scripts/verify-build-output.mjs` (из корня после сборки).

См. также `scripts/verify.sh` (статические проверки) и `PHOTO_SOURCES.md` (происхождение фото).
