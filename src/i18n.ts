export type Locale = 'ky' | 'ru' | 'en';

export const locales: Locale[] = ['ky', 'ru', 'en'];
export const defaultLocale: Locale = 'ky';

export const localeMeta: Record<
  Locale,
  { htmlLang: string; ogLocale: string; hreflang: string; label: string; short: string; prefix: string }
> = {
  ky: { htmlLang: 'ky', ogLocale: 'ky_KG', hreflang: 'ky', label: 'Кыргызча', short: 'KG', prefix: '' },
  ru: { htmlLang: 'ru', ogLocale: 'ru_KG', hreflang: 'ru', label: 'Русский', short: 'RU', prefix: '/ru' },
  en: { htmlLang: 'en', ogLocale: 'en_US', hreflang: 'en', label: 'English', short: 'EN', prefix: '/en' },
};

export function localizedPath(locale: Locale, path = '/'): string {
  const clean = path === '/' || path === '' ? '' : `/${path.replace(/^\/+|\/+$/g, '')}`;
  return `${localeMeta[locale].prefix}${clean}/`;
}

export function hreflangAlternates(site: string, path = '/'): { hreflang: string; href: string }[] {
  const base = site.replace(/\/$/, '');
  const list = locales.map((locale) => ({
    hreflang: localeMeta[locale].hreflang,
    href: `${base}${localizedPath(locale, path)}`,
  }));
  list.push({ hreflang: 'x-default', href: `${base}${localizedPath('en', path)}` });
  return list;
}
