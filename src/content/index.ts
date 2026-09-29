import type { Locale } from '../i18n';
import { ky } from './ky';
import { ru } from './ru';
import { en } from './en';
import type { LocaleContent } from './types';

export const content: Record<Locale, LocaleContent> = { ky, ru, en };

export type { LocaleContent, HomeContent, ArticleContent, ArticleKey, FaqItem } from './types';
