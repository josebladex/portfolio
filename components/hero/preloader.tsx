'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import SplitText from '@/components/split-text';
import Browser from '@/components/hero/front-end';

const PRELOADER_KEY = 'portfolio_seen';
const PRELOADER_MAX_MS = 800;

const texts = [
  'Initializing Portfolio...',
  'Loading /public/assets/...',
  'Loading Hero.tsx...',
  'Loading RecentProjects.tsx...',
  'Loading Approach.tsx...'
];

export default function PreloaderConsole() {
  const [showPreloader, setShowPreloader] = useState(false);
  const [showBrowser, setShowBrowser] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const seen = window.localStorage.getItem(PRELOADER_KEY);
    if (seen) {
      queueMicrotask(() => setShowBrowser(true));
      return;
    }
    queueMicrotask(() => setShowPreloader(true));
    const timer = window.setTimeout(() => {
      window.localStorage.setItem(PRELOADER_KEY, '1');
      setShowPreloader(false);
      setShowBrowser(true);
    }, PRELOADER_MAX_MS);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <div className="relative w-full h-screen">
      <AnimatePresence>
        {showPreloader && (
          <motion.div
            className="absolute z-50 bg-black w-full h-screen flex items-center justify-center"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div className="flex flex-col gap-2 w-fit h-screen items-start justify-center text-green-600 font-bold">
              {texts.map((text, index) => (
                <motion.div
                  key={`split-text-${index}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <SplitText text={text} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {showBrowser && <Browser />}
    </div>
  );
}
