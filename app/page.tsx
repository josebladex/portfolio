'use client';

import About from '@/components/About';
import Approach from '@/components/Approach';
import Certificates from '@/components/Certificates';
import Hero from '@/components/hero/Hero';
import LanguageToggleButton from '@/components/LanguageToggleButton';
import RecentProjects from '@/components/RecentProjects';
import LandingWrapper from '@/components/wrapper';

export default function Home() {
  return (
    <LandingWrapper>
      <Hero />
      <About />
      <RecentProjects />
      <Certificates />
      <Approach />
      <div className="fixed top-4 left-4 z-[100000]">
        <LanguageToggleButton />
      </div>
    </LandingWrapper>
  );
}
