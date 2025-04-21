'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import TypeWriter from '../typewritter';
import ProgressText from '../progress-text';
import { Geo } from 'next/font/google';

const geo = Geo({
  weight: '400',
  subsets: ['latin']
});

interface ConsoleProps {
  onComplete: () => void; // Callback para notificar cuando la animación termine
}

const Console: React.FC<ConsoleProps> = ({ onComplete }) => {
  const [visibleKeyframe, setVisibleKeyframe] = useState(0); // Controla qué keyframe está visible

  useEffect(() => {
    const timeouts: NodeJS.Timeout[] = [];
    const animationDuration = 500; // Duración de la animación en milisegundos

    // Controla el tiempo de aparición de cada keyframe
    const delays = [
      4000 + animationDuration,
      4000 + animationDuration,
      5000 + animationDuration
    ];
    delays.forEach((delay, index) => {
      timeouts.push(
        setTimeout(
          () => {
            setVisibleKeyframe(index + 1); // Muestra el siguiente keyframe
          },
          delays.slice(0, index + 1).reduce((a, b) => a + b, 0)
        ) // Suma acumulativa de los delays
      );
    });

    // Llama a onComplete al finalizar el último keyframe
    const totalDuration = delays.reduce((a, b) => a + b, 0);
    timeouts.push(
      setTimeout(() => {
        onComplete(); // Notifica que la animación ha terminado
      }, totalDuration)
    );

    return () => {
      timeouts.forEach(timeout => clearTimeout(timeout)); // Limpia los timeouts al desmontar
    };
  }, [onComplete]);

  return (
    <div
      className={`text-xl p-8 w-full h-1/2 md:h-full md:w-1/2 bg-gray-500/15 text-green-600 flex-col items-start justify-start ${geo.className}`}
    >
      <AnimatePresence>
        {visibleKeyframe >= 0 && (
          <motion.div
            key="keyframe-1"
            id="keyframe-1"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="mb-4"
          >
            <span>jose-plata@ubuntu:~/my-app $</span>
            <TypeWriter
              content={`Alive = True;
while Alive:
  try:`}
              speed={20}
            />
          </motion.div>
        )}

        {visibleKeyframe >= 1 && (
          <motion.div
            key="keyframe-2"
            id="keyframe-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="mb-4"
          >
            <span>jose-plata@ubuntu:~/my-app $</span>
            <TypeWriter content={` print("Simulation Complete!")`} speed={80} />
          </motion.div>
        )}

        {visibleKeyframe >= 2 && (
          <motion.div
            key="keyframe-3"
            id="keyframe-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="flex items-center space-x-2 text-white font-bold text-xl"
          >
            <ProgressText duration={5} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Console;
