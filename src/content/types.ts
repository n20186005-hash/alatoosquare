import type { Locale } from '../i18n';

export interface FaqItem {
  q: string;
  a: string;
}

export interface NamedItem {
  title: string;
  text: string;
}

export interface FactItem {
  label: string;
  value: string;
}

export interface HomeContent {
  meta: { title: string; description: string };
  skip: string;
  nav: { href: string; label: string }[];
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    lead: string;
    ctaMap: string;
    ctaHistory: string;
    coords: string;
    facts: FactItem[];
  };
  intro: { eyebrow: string; title: string; subtitle: string; paras: string[] };
  history: {
    eyebrow: string;
    title: string;
    note: string;
    timeline: { year: string; title: string; text: string }[];
    featureEyebrow: string;
    featureTitle: string;
    featureText: string;
  };
  monuments: { eyebrow: string; title: string; note: string; items: NamedItem[] };
  guard: {
    eyebrow: string;
    title: string;
    intro: string;
    facts: FactItem[];
    tips: string[];
    note: string;
    linkLabel: string;
  };
  events: { eyebrow: string; title: string; intro: string; items: NamedItem[]; note: string };
  route: { eyebrow: string; title: string; note: string; steps: NamedItem[] };
  photos: { eyebrow: string; title: string; shots: string[]; note: string };
  visit: { eyebrow: string; title: string; cards: { label: string; title: string; text: string }[] };
  transport: {
    eyebrow: string;
    title: string;
    modes: NamedItem[];
    parkingEyebrow: string;
    parkingTitle: string;
    parkingText: string;
    parkingNote: string;
    linkLabel: string;
  };
  map: { eyebrow: string; title: string; officialLabel: string; officialName: string };
  nearby: { eyebrow: string; title: string; items: NamedItem[]; note: string; linkLabel: string };
  food: { eyebrow: string; title: string; text: string; tags: string[]; note: string };
  stay: { eyebrow: string; title: string; text: string; tips: string[] };
  faq: { eyebrow: string; title: string; items: FaqItem[] };
  sources: { eyebrow: string; title: string; note: string; disclaimer: string };
  footer: { tagline: string; links: { label: string; href: string }[]; credits: string };
  breadcrumb: { home: string; city: string; country: string };
  labels: { openMap: string; open: string; top: string; updated: string; readMore: string };
}

export interface ArticleContent {
  slug: string;
  title: string;
  description: string;
  h1: string;
  lead: string;
  sections: { heading: string; paragraphs: string[]; bullets?: string[] }[];
  faqTitle?: string;
  faq?: FaqItem[];
}

export type ArticleKey = 'guard' | 'transport' | 'nearby';

export interface LocaleContent {
  home: HomeContent;
  articles: Record<ArticleKey, ArticleContent>;
}
