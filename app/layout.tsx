 "use client"

// layout.tsx (o el archivo de layout correspondiente)
import { Inter } from "next/font/google";
import Head from "next/head"; // Importa Head desde next/head
import "./globals.css";
import { ThemeProvider } from "./provider";
import { useLanguageStore } from "@/store/useLanguageStore";
import { Analytics } from "@vercel/analytics/react"

const inter = Inter({ subsets: ["latin"] });

const layouts = {
  es: {
    title: "José Plata - Portafolio",
    description: "Portafolio de José Luis Plata, desarrollador full stack con experiencia en Next.js, Supabase, PostgreSQL, y más. Proyectos innovadores en software y mecatrónica.",
    keywords: "José Luis Plata, desarrollador full stack, portafolio, Next.js, Supabase, PostgreSQL, Ingeniería Mecatrónica, Santiago, Colombia, Panamá, Chile, desarrollo web, software, proyectos mecatrónica",
  },
  en: {
    title: "José Plata - Portfolio",
    description: "Portfolio of José Luis Plata, full stack developer with experience in Next.js, Supabase, PostgreSQL, and more. Innovative projects in software and mechatronics.",
    keywords: "José Luis Plata, full stack developer, portfolio, Next.js, Supabase, PostgreSQL, Mechatronic Engineering, Santiago, Colombia, Panama, Chile, web development, software, mechatronics projects",
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const { language } = useLanguageStore();
  const currentLayout = layouts[language];

  return (
    <html lang={language} suppressHydrationWarning>
      <Head>
        <title>{currentLayout.title}</title>
        <meta name="description" content={currentLayout.description} />
        <meta name="keywords" content={currentLayout.keywords} />
        <link rel="icon" href="/logo.ico" sizes="any" />
      </Head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}

        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
