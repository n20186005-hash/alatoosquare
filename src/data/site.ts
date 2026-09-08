export const attraction = {
  name: 'Ала-Тоо аянты',
  alternateName: 'Ala-Too Square',
  slug: 'ala-too-square',
  description:
    'Бишкектин жүрөгүндөгү Ала-Тоо аянты — Манас эстелиги, Мамлекеттик тарых музейи, фонтандар жана мамлекеттик салтанаттар топтолгон борбордук коомдук мейкиндик.',
  address: {
    streetAddress: 'Раззаков көчөсү 51',
    addressLocality: 'Бишкек',
    addressCountry: 'KG',
  },
  geo: {
    latitude: 42.87533647114969,
    longitude: 74.60103957751176,
  },
  rating: {
    value: 4.5,
    count: 21878,
  },
  mapsUrl: 'https://maps.app.goo.gl/ZnzhW6gGWXjCZa5v8',
  opening: '24 саат ачык',
  price: 'Акысыз',
} as const;

export const imageSources = [
  {
    src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Ala_Too_Square_Bishkek_2021.jpg/1280px-Ala_Too_Square_Bishkek_2021.jpg',
    alt: 'Ала-Тоо аянтындагы фонтандар, Кыргызстандын желеги жана Манас эстелиги',
    credit: 'Emil.akhmatbekov / Wikimedia Commons',
    license: 'CC BY-SA 4.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Ala_Too_Square_Bishkek_2021.jpg',
  },
  {
    src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Ala-Too_Square_Bishkek.jpg/1280px-Ala-Too_Square_Bishkek.jpg',
    alt: 'Бишкектеги Ала-Тоо аянтынын кең көрүнүшү',
    credit: 'Radosław Botev / Fundacja Nomos / Wikimedia Commons',
    license: 'CC BY 3.0 PL',
    licenseUrl: 'https://creativecommons.org/licenses/by/3.0/pl/deed.en',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Ala-Too_Square_Bishkek.jpg',
  },
  {
    src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6c/Kyrgyz_State_Historical_Museum%2C_Ala_Too_Square%2C_Bishkek%2C_Kyrgyzstan.jpg/1280px-Kyrgyz_State_Historical_Museum%2C_Ala_Too_Square%2C_Bishkek%2C_Kyrgyzstan.jpg',
    alt: 'Ала-Тоо аянтындагы Кыргыз мамлекеттик тарых музейи',
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
    q: 'Канча убакыт бөлгөн жакшы?',
    a: 'Аянттын өзүнө 45–90 мүнөт жетиштүү. Мамлекеттик тарых музейин, Эмен багын жана Эркиндик бульварын кошсоңуз, 2–4 сааттык борбордук маршрут ыңгайлуу.',
  },
  {
    q: 'Сүрөткө качан тарткан жакшы?',
    a: 'Эртең менен адам азыраак болот. Кечкисин жарык жумшарып, фонтандар менен имараттардын жарыгы кадрга атмосфера кошот.',
  },
  {
    q: 'Унааны кайда токтотсо болот?',
    a: 'Аянттын өзүндө туристтер үчүн чоң атайын токтотмо жок. Борбордогу белгиленген көчө токтотмолорун же жакынкы соода/ишкер имараттардын акы төлөнүүчү токтотмолорун колдонуңуз; иш-чара күндөрү чектөөлөр болушу мүмкүн.',
  },
] as const;
