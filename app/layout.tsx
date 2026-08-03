import type { Metadata, Viewport } from 'next';
import type { ReactNode } from 'react';
import { Geo } from 'next/font/google';
import './globals.css';
import Dock from '@/components/dock/dock';
import { JsonLd } from '@/components/JsonLd';
import { HtmlLangSync } from '@/components/HtmlLangSync';

const SITE_URL = 'https://josebladex.github.io/portfolio';

// Importa las fuentes desde next/font/google
const geo = Geo({
  weight: '400',
  subsets: ['latin'],
  style: ['normal', 'italic']
});

export const metadata: Metadata = {
  metadataBase: new URL(`${SITE_URL}/`),
  title: 'José Plata - Full Stack Developer Portfolio',
  description:
    'Descubre el portafolio de José Plata, desarrollador Full Stack especializado en React, Next.js, Prisma y más. Proyectos destacados y experiencia profesional.',
  keywords: [
    'José Plata',
    'Full Stack Developer',
    'Portafolio',
    'React',
    'Next.js',
    'Prisma',
    'PostgreSQL',
    'Docker',
    'Desarrollador Web',
    'Proyectos de Software'
  ],
  robots: 'index, follow',
  openGraph: {
    title: 'José Plata - Full Stack Developer Portfolio',
    description:
      'Explora los proyectos y experiencia de José Plata, desarrollador Full Stack.',
    url: 'https://josebladex.github.io/portfolio/',
    siteName: 'José Plata Portfolio',
    locale: 'es_ES',
    alternateLocale: ['en_US'],
    type: 'website',
    images: ['/og-image.png']
  },
  twitter: {
    card: 'summary_large_image',
    title: 'José Plata - Full Stack Developer Portfolio',
    description:
      'Explora los proyectos y experiencia de José Plata, desarrollador Full Stack.',
    images: ['/og-image.png']
  },
  alternates: {
    canonical: '/',
    languages: {
      es: '/',
      'x-default': '/'
    }
  }
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  const sameAs = [
    'https://github.com/josebladex',
    'https://www.linkedin.com/in/jose-luis-plata-zabala'
  ];
  const knowsAbout = [
    'Next.js',
    'React',
    'TypeScript',
    'PostgreSQL',
    'Docker',
    'n8n workflow automation',
    'AI & computer vision',
    'Cloud-native architecture'
  ];

  return (
    <html lang="es">
      <body
        className={`${geo.className}`}
        suppressContentEditableWarning
        suppressHydrationWarning
      >
        <JsonLd sameAs={sameAs} knowsAbout={knowsAbout} />
        <HtmlLangSync />
        <Dock />

        {children}
      </body>
    </html>
  );
}
