/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useTransform } from 'motion/react';
import { animate } from 'motion';

interface ProgressTextProps {
  duration?: number; // Duración de la animación del porcentaje (en segundos)
}

export default function ProgressText({ duration = 5 }: ProgressTextProps) {
  const count = useMotionValue(0); // Valor animado para el porcentaje
  const rounded = useTransform(count, value => Math.round(value)); // Valor redondeado del porcentaje
  const [roundedValue, setRoundedValue] = useState(0); // Estado para renderizar el porcentaje
  const [spinner, setSpinner] = useState<string>('-'); // Estado para el "slash giratorio"

  useEffect(() => {
    // Suscríbete al valor transformado y actualiza el estado
    const unsubscribe = rounded.on('change', value => {
      setRoundedValue(value); // Actualiza el estado con el valor redondeado
    });

    // Anima el porcentaje de 0 a 100
    const controls = animate(count, 100, { duration });

    // Animación del "slash giratorio"
    const spinnerFrames = ['-', '/', '|', '\\'];
    let spinnerIndex = 0;
    const spinnerInterval = setInterval(() => {
      setSpinner(spinnerFrames[spinnerIndex]);
      spinnerIndex = (spinnerIndex + 1) % spinnerFrames.length;
    }, 200); // Cambia el carácter cada 200ms

    return () => {
      controls.stop(); // Detén la animación al desmontar el componente
      unsubscribe(); // Limpia la suscripción al desmontar el componente
      clearInterval(spinnerInterval); // Limpia el intervalo del spinner
    };
  }, [duration]);

  return (
    <div className="flex items-center space-x-2">
      <motion.span className="text-green-700 text-base font-mono">
        {spinner}
      </motion.span>
      <motion.span className="text-green-700 text-base font-mono">
        {roundedValue}%
      </motion.span>
    </div>
  );
}
