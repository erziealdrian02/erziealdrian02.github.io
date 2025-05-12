'use client';

import { useLanguage } from './use-language';
import enTranslations from '@/translations/en.json';
import idTranslations from '@/translations/id.json';

export function useTranslation() {
  const { language } = useLanguage();

  const translations: Record<string, Record<string, unknown>> = {
    en: enTranslations,
    id: idTranslations,
  };

  const t = (key: string) => {
    const keys = key.split('.');
    let value: unknown = translations[language];

    for (const k of keys) {
      if (
        value &&
        typeof value === 'object' &&
        k in (value as Record<string, unknown>)
      ) {
        value = (value as Record<string, unknown>)[k];
      } else {
        return key;
      }
    }

    return value as string;
  };

  return { t, language };
}
