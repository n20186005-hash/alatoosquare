import { readFileSync } from 'node:fs';

const h = readFileSync('dist/client/index.html', 'utf8');

const checks = {
  canonical: h.includes('rel="canonical" href="https://alatoosquare.com/"'),
  ogImage: h.includes('property="og:image" content="https://alatoosquare.com/images/ala-too-square-hero.jpg"'),
  ogImageAlt: h.includes('property="og:image:alt"'),
  twitterImage: h.includes('name="twitter:image"'),
  manifest: h.includes('rel="manifest" href="/manifest.webmanifest"'),
  swRegistered: h.includes("/sw.js"),
  h1: /<h1[^>]*>[\s\S]*?Ала-Тоо аянты[\s\S]*?Ala-Too Square/.test(h),
  noRemoteImages: !h.includes('upload.wikimedia.org'),
  localImages: h.includes('/images/ala-too-square-hero.jpg'),
  napEn: h.includes('51 Razzakov St, Bishkek, Kyrgyzstan'),
  museumAuthority: h.includes('historymuseum.kg'),
  sourcesSection: h.includes('id="sources"'),
  photoRights: h.includes('түпнуска фотографтарына'),
  plusCode: h.includes('VJG3+7F'),
  breadcrumbVisible: h.includes('aria-label="Breadcrumb"'),
  lastUpdated: h.includes('2026-09-09'),
  noCaPub: !h.includes('ca-pub'),
  noLocalhostLiteral: !h.includes('localhost'),
  swHttpsOnly: h.includes("location.protocol !== 'https:'"),
};
console.log(JSON.stringify(checks, null, 2));

const blocks = [...h.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map((x) => x[1]);
console.log('JSONLD blocks:', blocks.length);
for (const j of blocks) {
  try {
    const o = JSON.parse(j);
    const t = o['@type'];
    if (t === 'FAQPage') console.log(`  FAQPage questions=${o.mainEntity.length}`);
    if (t === 'TouristAttraction') {
      console.log(`  TouristAttraction @id=${o['@id']} name=${o.name} alt=[${o.alternateName.join('|')}]`);
      console.log(`    image=${o.image.length} hasMap=${o.hasMap} sameAs=${o.sameAs.length} rating=${o.aggregateRating.ratingValue}x${o.aggregateRating.reviewCount}`);
      console.log(`    address=${o.address.streetAddress}, ${o.address.addressLocality}, ${o.address.addressCountry} | geo=${o.geo.latitude},${o.geo.longitude}`);
    }
  } catch (e) {
    console.log('  JSON PARSE FAIL', e.message);
  }
}
console.log('faq visible <details>:', (h.match(/<details/g) || []).length, '| <summary>:', (h.match(/<summary/g) || []).length);
