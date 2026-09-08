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

## Доменди бир жерден коюу

Продакшн домени `SITE_URL` чөйрө өзгөрмөсү аркылуу гана `astro.config.mjs` ичинде окулат. Маани берилбесе сайт баары бир курулат: canonical жана `og:url` чыгарылбайт, sitemap интеграциясы кошулбайт.

Домен белгилүү болгондо `SITE_URL` маанисин чыныгы HTTPS origin менен берип кайра билд жасаңыз.

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

Сайттагы үч фотосүрөт Wikimedia Commons'тагы эркин лицензияланган реалдуу фотолор. Атрибуция `public/IMAGE_CREDITS.txt` файлында берилген.

## Текшерүү статусу

Бул пакет даярдалган контейнерде npm/Wikimedia тармагына чыгуу жабык болгондуктан, lockfile генерациясы жана таза CI build аткарылган жок. Так чектөө жана текшерүү кадамдары `BUILD_STATUS.md` менен `scripts/verify.sh` ичинде жазылган. Жасалма lockfile кошулган эмес.

## Сүрөттөрдү толук локалдаштыруу

Учурдагы контейнер сүрөт байттарын жүктөй албагандыктан сайт реалдуу Commons JPG даректерин колдонот. Интернет жеткиликтүү чөйрөдө `bash scripts/localize-images.sh` иштетсеңиз, үч сүрөт `public/images/` ичине жүктөлүп, код локалдык жолдорго автоматтык өтөт. Булак жана лицензия маалыматтары `PHOTO_SOURCES.md` жана `public/IMAGE_CREDITS.txt` файлдарында.
