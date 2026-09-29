import type { Locale } from '../i18n';

/** SEO 站点名统一格式：景点名称 + 城市 + 旅游指南 */
export const SITE_NAME: Record<Locale, string> = {
  ky: 'Ала-Тоо аянты Бишкек — туристтик колдонмо',
  ru: 'Площадь Ала-Тоо Бишкек — путеводитель',
  en: 'Ala-Too Square Bishkek — Travel Guide',
};

export function withSiteName(locale: Locale, title: string): string {
  return `${title} | ${SITE_NAME[locale]}`;
}

export const attractionNames: Record<Locale, string> = {
  ky: 'Ала-Тоо аянты',
  ru: 'Площадь Ала-Тоо',
  en: 'Ala-Too Square',
};

export const attraction = {
  fullName: 'Ала-Тоо аянты',
  name: 'Ала-Тоо аянты',
  alternateName: 'Ala-Too Square',
  slug: 'ala-too-square',
  description:
    'Бишкектин жүрөгүндөгү Ала-Тоо аянты — Манас эстелиги, Мамлекеттик тарых музейи, фонтандар жана мамлекеттик салтанаттар топтолгон борбордук коомдук мейкиндик.',
  address: {
    streetAddress: 'Раззаков көчөсү 51',
    streetAddressEn: '51 Razzakov St',
    addressLocality: 'Бишкек',
    addressLocalityEn: 'Bishkek',
    addressRegion: 'Бишкек шаары',
    addressCountry: 'KG',
  },
  country: 'Кыргызстан',
  countryEn: 'Kyrgyzstan',
  plusCode: 'VJG3+7F',
  geo: {
    latitude: 42.87533647114969,
    longitude: 74.60103957751176,
  },
  rating: {
    value: 4.5,
    count: 21918,
  },
  mapsUrl: 'https://maps.app.goo.gl/ZnzhW6gGWXjCZa5v8',
  mapsEmbedSrc:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5002.579214913649!2d74.60103957751176!3d42.87533647114969!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389eb7dcbdacf87b%3A0xfc7d686ab988f348!2sAla-Too%20Square!5e1!3m2!1sen!2s!4v1788736424702!5m2!1sen!2s',
  opening: '24 саат ачык',
  price: 'Акысыз',
} as const;

export const contentUpdated = '2026-09-29';

export const sources = [
  {
    label: 'Кыргыз Республикасынын улуттук тарых музейи — расмий сайт',
    url: 'https://historymuseum.kg/',
  },
  {
    label: 'Кыргыз Республикасынын Өкмөтү — расмий портал',
    url: 'https://www.gov.kg/',
  },
  {
    label: 'Ala-Too Square — Wikipedia (English)',
    url: 'https://en.wikipedia.org/wiki/Ala-Too_Square',
  },
  {
    label: 'Ала-Тоо аянты — Wikipedia (Кыргызча)',
    url: 'https://ky.wikipedia.org/wiki/Ала-Тоо_аянты',
  },
  {
    label: 'Ala-Too Square — Google Карталар',
    url: 'https://maps.app.goo.gl/ZnzhW6gGWXjCZa5v8',
  },
] as const;

export const imageSources = [
  {
    src: '/images/ala-too-square-hero.jpg',
    alt: 'Ала-Тоо аянты (Ala-Too Square) — Бишкек, Кыргызстан: фонтандар, мамлекеттик желеги жана Манас эстелиги',
    credit: 'Emil.akhmatbekov / Wikimedia Commons',
    license: 'CC BY-SA 4.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Ala_Too_Square_Bishkek_2021.jpg',
  },
  {
    src: '/images/ala-too-square-wide.jpg',
    alt: 'Бишкектеги Ала-Тоо аянтынын кең көрүнүшү (Ala-Too Square wide view)',
    credit: 'Radosław Botev / Fundacja Nomos / Wikimedia Commons',
    license: 'CC BY 3.0 PL',
    licenseUrl: 'https://creativecommons.org/licenses/by/3.0/pl/deed.en',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Ala-Too_Square_Bishkek.jpg',
  },
  {
    src: '/images/state-history-museum.jpg',
    alt: 'Ала-Тоо аянтындагы Кыргыз мамлекеттик тарых музейи (State History Museum)',
    credit: 'Vilya Shoni / Wikimedia Commons',
    license: 'CC BY 4.0',
    licenseUrl: 'https://creativecommons.org/licenses/by/4.0/',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Kyrgyz_State_Historical_Museum,_Ala_Too_Square,_Bishkek,_Kyrgyzstan.jpg',
  },
] as const;
