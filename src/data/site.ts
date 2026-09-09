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
    count: 21878,
  },
  mapsUrl: 'https://maps.app.goo.gl/ZnzhW6gGWXjCZa5v8',
  mapsEmbedSrc:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5002.579214913649!2d74.60103957751176!3d42.87533647114969!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389eb7dcbdacf87b%3A0xfc7d686ab988f348!2sAla-Too%20Square!5e1!3m2!1sen!2s!4v1788736424702!5m2!1sen!2s',
  opening: '24 саат ачык',
  price: 'Акысыз',
} as const;

export const contentUpdated = '2026-09-09';

export const sources = [
  {
    label: 'Кыргыз Республикасынын улуттук тарых музейи — расмий сайт',
    url: 'https://historymuseum.kg/',
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

export const faq = [
  {
    q: 'Ала-Тоо аянтына кирүү акы төлөнөбү?',
    a: 'Жок. Аянт коомдук мейкиндик болгондуктан кадимки күндөрү кирүү акысыз. Музейге же өзүнчө иш-чарага кирүү шарттары башка болушу мүмкүн.',
  },
  {
    q: 'Аянт кайсы убакта ачык?',
    a: 'Ачык коомдук аянт сутка бою жеткиликтүү. Мамлекеттик майрам, концерт же коопсуздук чаралары маалында айрым бөлүктөрү убактылуу жабылышы мүмкүн.',
  },
  {
    q: 'Ала-Тоо аянты так кайда жайгашкан?',
    a: 'Аянт Бишкек шаарынын борборунда, Раззаков көчөсү 51 (51 Razzakov St, Bishkek, Kyrgyzstan) дарегинде жайгашкан. Plus Code: VJG3+7F.',
  },
  {
    q: 'Канча убакыт бөлгөн жакшы?',
    a: 'Аянттын өзүнө 45–90 мүнөт жетиштүү. Мамлекеттик тарых музейин, Эмен багын жана Эркиндик бульварын кошсоңуз, 2–4 сааттык борбордук маршрут ыңгайлуу.',
  },
  {
    q: 'Сүрөткө качан тарткан жакшы?',
    a: 'Эртең менен адам азыраак болот. Кечкисин жарык жумшарып, фонтандар менен имараттардын жарыгы кадрга атмосфера кошот.',
  },
  {
    q: 'Аянттын жанында дагы кандай көрүнүктүү жерлер бар?',
    a: 'Аянттын өзүндө Кыргыз улуттук тарых музейи, Манас эстелиги жана фонтандар бар. Жакын жерде Эмен багы (Oak Park), Эркиндик бульвары жана Панфилов паркы жайгашкан.',
  },
  {
    q: 'Унааны кайда токтотсо болот?',
    a: 'Аянттын өзүндө туристтер үчүн чоң атайын токтотмо жок. Борбордогу белгиленген көчө токтотмолорун же жакынкы соода/ишкер имараттардын акы төлөнүүчү токтотмолорун колдонуңуз; иш-чара күндөрү чектөөлөр болушу мүмкүн.',
  },
] as const;
