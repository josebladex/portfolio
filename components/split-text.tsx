/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import { animate, stagger } from 'motion';
import { splitText } from 'motion-plus';
import { useEffect, useRef } from 'react';
import { motion, useMotionValue } from 'motion/react';

interface SplitTextProps {
  text: string; // Texto que se mostrará en el SplitText
}

export default function SplitText({ text }: SplitTextProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const count = useMotionValue(0); // Valor animado

  useEffect(() => {
    document.fonts.ready.then(() => {
      if (!containerRef.current) return;

      // Haz visible el contenedor una vez que las fuentes estén cargadas
      containerRef.current.style.visibility = 'visible';

      // Divide el texto en palabras
      const { words } = splitText(containerRef.current.querySelector('h1')!);

      // Anima las palabras en el h1
      animate(
        words,
        { opacity: [0, 1], y: [10, 0] },
        {
          type: 'spring',
          duration: 2,
          bounce: 0,
          delay: stagger(0.05)
        }
      );
    });

    // Anima el porcentaje de 0 a 100
    const controls = animate(count, 100, { duration: 5 });

    return () => {
      controls.stop(); // Detén la animación al desmontar el componente
    };
  }, []);

  return (
    <div
      className="flex justify-start items-start w-full max-w-lg text-left visibility-hidden"
      ref={containerRef}
    >
      <h1 className="text-base font-bold leading-tight">
        {text}
        <motion.span className="ml-2 text-green-400 text-sm"></motion.span>
      </h1>
    </div>
  );
}
