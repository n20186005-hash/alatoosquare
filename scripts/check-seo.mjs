import fs from 'node:fs';
const files = {
  'ky/': 'dist/index.html',
  'ky/guard': 'dist/karuul-almashuu/index.html',
  'ru/': 'dist/ru/index.html',
  'ru/guard': 'dist/ru/smena-karaula/index.html',
  'en/': 'dist/en/index.html',
  'en/guard': 'dist/en/guard-changing-ceremony/index.html',
};
for (const [k, p] of Object.entries(files)) {
  if (!fs.existsSync(p)) { console.log(k, 'MISSING'); continue; }
  const h = fs.readFileSync(p, 'utf8');
  const lang = /<html lang="([^"]+)">/.exec(h)?.[1];
  const can = /<link rel="canonical" href="([^"]+)">/.exec(h)?.[1];
  const hrefs = [...h.matchAll(/hreflang="([^"]+)"/g)].map((m) => m[1]).join(',');
  const types = [...new Set([...h.matchAll(/"@type":"([^"]+)"/g)].map((m) => m[1]))].join(' | ');
  const h1 = /<h1[^>]*>([^<]+)<\/h1>/.exec(h)?.[1];
  console.log(`${k} | lang=${lang} | canonical=${can} | hreflang=${hrefs}`);
  console.log(`   types=${types}`);
  console.log(`   h1=${h1}`);
}
