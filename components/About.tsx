'use client';

import { ABOUT_BY_LOCALE } from '@/data/about';
import { useLanguageStore } from '@/store/useLanguageStore';
import { Card, CardDescription } from './card-tech';

const HEADINGS = {
  es: 'Sobre mí',
  en: 'About Me'
} as const;

const About = () => {
  const { language } = useLanguageStore();
  const content = ABOUT_BY_LOCALE[language];

  return (
    <Card>
      <h2 className="font-sans text-2xl lg:text-4xl font-bold z-10 p-6">
        {HEADINGS[language]}
      </h2>
      <CardDescription>{content.summary}</CardDescription>
      <ul className="mt-6 flex flex-wrap gap-2 px-1">
        {content.skills.map(skill => (
          <li
            key={skill}
            className="rounded-full border border-white/10 bg-white/5 px-3 py-1 font-sans text-xs lg:text-sm text-[#C1C2D3]"
          >
            {skill}
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default About;
