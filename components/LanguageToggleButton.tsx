// components/LanguageToggleButton.tsx
import { FaLanguage } from 'react-icons/fa';
import { useLanguageStore } from '../store/useLanguageStore';
import {
 
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { useState } from 'react';
import { cn } from '@/lib/utils';
const LanguageToggleButton = () => {
  const { language, toggleLanguage } = useLanguageStore();
  const { scrollYProgress } = useScroll();

  // set true for the initial state so that nav bar is visible in the hero section
  const [visible, setVisible] = useState(true);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
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
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
       
      >




        <>
        <motion.div 
    whileHover={{ scale: 1.2 }}
    whileTap={{ scale: 0.9 }}
    transition={{ type: "spring", stiffness: 400, damping: 17 }}
    onClick={toggleLanguage}
    className="

 h-12 w-12 animate-shimmer 
items-center justify-center rounded-full 
border border-slate-800 
bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] 
bg-[length:200%_100%] px-1 font-medium text-slate-400 
transition-colors focus:outline-none focus:ring-2
focus:ring-slate-400 focus:ring-offset-2
focus:ring-offset-slate-50
flex  "
  >
      <FaLanguage className='w-10 h-10 '/>

  </motion.div>
        </>
      </motion.div>
    </AnimatePresence>
 


  );
};

export default LanguageToggleButton;



