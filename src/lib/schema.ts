import { attraction, attractionNames, contentUpdated, imageSources, sources, SITE_NAME } from '../data/site';
import { localizedPath, localeMeta, type Locale } from '../i18n';
import { content, type ArticleContent, type FaqItem } from '../content';

export function pageUrl(site: string, locale: Locale, path = '/'): string {
  return `${site}${localizedPath(locale, path)}`;
}

export function absUrl(site: string, path: string): string {
  return new URL(path, site).toString();
}

export function attractionSchema(locale: Locale, site: string, path = '/'): Record<string, unknown> {
  const url = pageUrl(site, locale, path);
  const c = content[locale].home;
  return {
    '@context': 'https://schema.org',
    '@type': ['TouristAttraction', 'HistoricalLandmark', 'Place'],
    '@id': `${site}/#attraction`,
    name: attractionNames[locale],
    alternateName: [
      attraction.fullName,
      attraction.alternateName,
      `${attraction.alternateName}, ${attraction.address.addressLocalityEn}`,
      'Ala-Too Square Bishkek',
    ],
    description: c.meta.description,
    url,
    image: imageSources.map((img) => absUrl(site, img.src)),
    isAccessibleForFree: true,
    publicAccess: true,
    address: {
      '@type': 'PostalAddress',
      streetAddress: attraction.address.streetAddressEn,
      addressLocality: attraction.address.addressLocalityEn,
      addressRegion: attraction.address.addressRegion,
      addressCountry: attraction.address.addressCountry,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: attraction.geo.latitude,
      longitude: attraction.geo.longitude,
    },
    hasMap: attraction.mapsUrl,
    containedInPlace: {
      '@type': 'City',
      name: attraction.address.addressLocalityEn,
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '00:00',
      closes: '23:59',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: attraction.rating.value,
      reviewCount: attraction.rating.count,
    },
    sameAs: sources.map((s) => s.url),
  };
}

export function faqSchema(items: readonly FaqItem[] | FaqItem[]): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    })),
  };
}

export function websiteSchema(locale: Locale, site: string): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${site}/#website`,
    url: `${site}/`,
    name: SITE_NAME[locale],
    inLanguage: localeMeta[locale].htmlLang,
    publisher: {
      '@type': 'Organization',
      '@id': `${site}/#organization`,
      name: SITE_NAME[locale],
      url: `${site}/`,
    },
  };
}

export function breadcrumbSchema(
  site: string,
  crumbs: { name: string; url: string }[],
): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: crumb.url,
    })),
  };
}

export function articleSchema(
  locale: Locale,
  site: string,
  article: ArticleContent,
): Record<string, unknown> {
  const url = pageUrl(site, locale, article.slug);
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': `${url}#article`,
    headline: article.h1,
    description: article.description,
    inLanguage: localeMeta[locale].htmlLang,
    dateModified: contentUpdated,
    image: [absUrl(site, imageSources[0].src)],
    author: {
      '@type': 'Organization',
      name: SITE_NAME[locale],
      url: `${site}/`,
    },
    publisher: {
      '@type': 'Organization',
      '@id': `${site}/#organization`,
      name: SITE_NAME[locale],
      url: `${site}/`,
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
    about: {
      '@id': `${site}/#attraction`,
    },
  };
}
