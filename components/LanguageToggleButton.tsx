/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
// components/LanguageToggleButton.tsx
import { FaLanguage } from 'react-icons/fa';
import { useLanguageStore } from '../store/useLanguageStore';
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll
} from 'framer-motion';
import { useState } from 'react';
import { ButtonsCard } from './tailwindcss-buttons';
const LanguageToggleButton = () => {
  const { language, toggleLanguage } = useLanguageStore();
  const { scrollYProgress } = useScroll();

  // set true for the initial state so that nav bar is visible in the hero section
  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollYProgress, 'change', current => {
    // Check if current is not undefined and is a number
    if (typeof current === 'number') {
      let direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        // also set true for the initial state
        setVisible(true);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });
  return (
    <AnimatePresence mode="wait">
      <motion.button
        initial={{
          opacity: 1,
          y: -100
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0
        }}
        transition={{
          duration: 0.2
        }}
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        onClick={toggleLanguage}
        className="relative inline-flex h-12 overflow-hidden rounded-full p-[2px] focus:outline-none "
      >
        <>
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
          <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-black px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
            <FaLanguage className="w-7 h-7 " />
          </span>
        </>
      </motion.button>
    </AnimatePresence>
  );
};

export default LanguageToggleButton;
