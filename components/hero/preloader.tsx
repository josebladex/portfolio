'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SplitText from '@/components/split-text';
import ProgressText from '@/components/progress-text';
import Browser from '@/components/hero/front-end';
import { Geo } from 'next/font/google';
import TypeWriter from '@/components/typewritter';

const geo = Geo({
  weight: '400',
  subsets: ['latin']
});

export default function PreloaderConsole() {
  const [showPreloader, setShowPreloader] = useState(true); // Controla si se muestra el preloader
  const [showConsole, setShowConsole] = useState(false); // Controla si se muestra la consola
  const [showBrowser, setShowBrowser] = useState(false); // Controla si se muestra el navegador
  const [visibleIndex, setVisibleIndex] = useState(0); // Controla qué SplitText se muestra
  const texts = [
    'Initializing Portfolio...',
    'Loading /public/assets/...',
    'Loading Hero.tsx...',
    'Loading RecentProjects.tsx...',
    'Loading Approach.tsx...'
  ]; // Array de textos para SplitText
  const delay = 1000; // Tiempo entre cada render en milisegundos


  // Maneja la animación del preloader
  useEffect(() => {
    if (!showPreloader) return;

    const interval = setInterval(() => {
      setVisibleIndex(prevIndex => {
        if (prevIndex < texts.length - 1) {
          return prevIndex + 1;
        } else {
          clearInterval(interval); // Detén el intervalo cuando todos los SplitText se hayan mostrado
          return prevIndex;
        }
      });
    }, delay);

    // Oculta el preloader después de 7 segundos y muestra la consola
    const timeout = setTimeout(() => {
      setShowPreloader(false);
      setShowConsole(true);
    }, 5000);

    return () => {
      clearInterval(interval); // Limpia el intervalo al desmontar el componente
      clearTimeout(timeout); // Limpia el timeout al desmontar el componente
    };
  }, [showPreloader, texts.length]);

  // Maneja la animación de la consola
  useEffect(() => {
    if (!showConsole) return;

    const timeout = setTimeout(() => {
      setShowConsole(false);
      setShowBrowser(true); // Muestra el navegador después de la consola
    }, 6000); // Duración total de la animación de la consola

    return () => clearTimeout(timeout);
  }, [showConsole]);

  return (
    <div className="relative w-full h-screen">
      <AnimatePresence>
        {showPreloader && (
          <motion.div
            className="absolute z-50 bg-black w-full h-screen flex items-center justify-center"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="flex flex-col gap-4 w-fit h-screen items-start justify-center text-green-600 font-bold">
              <AnimatePresence>
                {texts.map(
                  (text, index) =>
                    visibleIndex >= index && (
                      <motion.div
                        key={`split-text-${index}`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5 }}
                        className={`flex items-start justify-start ${geo.className}`}
                      >
                        <SplitText text={text} />
                        <ProgressText duration={5} />
                      </motion.div>
                    )
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Console */}
      <AnimatePresence>
        {showConsole && (
          <motion.div
            className="absolute z-40 bg-black w-full h-screen p-6 rounded-lg shadow-lg flex flex-col space-y-4 text-green-500"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 1 }}
          >
            <div className="text-xl p-8 w-full h-full bg-black flex-col items-start justify-start">
              <motion.div
                key="keyframe-1"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="mb-4"
              >
                <span>jose-plata@ubuntu:~/my-app $</span>
                <TypeWriter
                  content={`node init.js
npm install
Installing dependencies...
\t- @react-three/fiber": "^9.6.1
\t- @tailwindcss/cli": "^4.3.0
\t- "date-fns": "^4.4.0",
\t- "motion": "^12.40.0",
\t- "next": "^16.2.7",
\t- "react": "^19.2.7",
\t- "motion-plus": "^1.5.1",
\t- "zustand": "^5.0.14,

Dependencies installed successfully!

npm run dev
Starting development server...
> Compiling...
> Compilation successful!
> Server running at https://josebladex.github.io/portfolio/
`}
                  speed={10}
                />
              </motion.div>

              <motion.div
                key="keyframe-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="flex items-center space-x-2 text-white font-bold text-xl"
              ></motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Browser */}
      <AnimatePresence>{showBrowser && <Browser />}</AnimatePresence>
    </div>
  );
}
