import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "./provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "José Plata - Portafolio",
  description: "Portafolio de José Luis Plata, desarrollador full stack con experiencia en Next.js, Supabase, PostgreSQL, y más. Proyectos innovadores en software y mecatrónica.",
  keywords: "José Luis Plata, desarrollador full stack, portafolio, Next.js, Supabase, PostgreSQL, Ingeniería Mecatrónica, Santiago, Colombia, Panamá, Chile, desarrollo web, software, proyectos mecatrónica",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
      <link rel="icon" href="/logo.ico" sizes="any" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
