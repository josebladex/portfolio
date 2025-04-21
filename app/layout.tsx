import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Dock from '@/components/dock/dock';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin']
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin']
});

export const metadata: Metadata = {
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
  viewport: 'width=device-width, initial-scale=1.0',
  robots: 'index, follow',
  openGraph: {
    title: 'José Plata - Full Stack Developer Portfolio',
    description:
      'Explora los proyectos y experiencia de José Plata, desarrollador Full Stack.',
    url: 'https://joseplata.dev',
    siteName: 'José Plata Portfolio',
    locale: 'en_US',
    type: 'website'
  }
  /*twitter: {
    card: 'summary_large_image',
    site: '@joseplata',
    creator: '@joseplata',
    title: 'José Plata - Full Stack Developer Portfolio',
    description: 'Descubre los proyectos y experiencia de José Plata, desarrollador Full Stack.',
    images: ['https://joseplata.dev/og-image.jpg']
  }*/
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressContentEditableWarning
        suppressHydrationWarning
      >
        <Dock />

        {children}
      </body>
    </html>
  );
}
