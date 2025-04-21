import { create } from 'zustand';

type LanguageState = {
  language: 'es' | 'en';
  toggleLanguage: () => void;
};

export const useLanguageStore = create<LanguageState>(set => ({
  language: 'es',
  toggleLanguage: () => {
    set(state => ({
      language: state.language === 'es' ? 'en' : 'es'
    }));
  }
}));
