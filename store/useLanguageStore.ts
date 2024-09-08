// store/useLanguageStore.ts
import create from 'zustand';

type LanguageState = {
  language: 'es' | 'en';
  toggleLanguage: () => void;
};

export const useLanguageStore = create<LanguageState>((set) => ({
  language: 'es', // Idioma inicial
  toggleLanguage: () =>{
 
    console.log("Clicked")

    set((state) => ({
      language: state.language === 'es' ? 'en' : 'es',
    }))}
}));
