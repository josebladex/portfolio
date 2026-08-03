'use client';

import { useEffect } from 'react';
import { useLanguageStore } from '@/store/useLanguageStore';

export function HtmlLangSync() {
  const language = useLanguageStore(s => s.language);

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  return null;
}
