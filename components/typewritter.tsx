'use client';

import { useEffect, useState, type CSSProperties } from 'react';
import { Geo } from 'next/font/google';

const geo = Geo({
  weight: '400',
  subsets: ['latin']
});

interface TypeWriterProps {
  content: string; // Contenido que se escribirá
  speed?: number; // Velocidad de escritura en milisegundos
}

export default function TypeWriter({
  content = '',
  speed = 100
}: TypeWriterProps) {
  const [index, setIndex] = useState(0); // Índice del carácter actual
  const displayedContent = content.slice(0, index + 1);
  const showCursor = index < content.length - 1;

  useEffect(() => {
    const animKey = setInterval(() => {
      setIndex(prevIndex => {
        if (prevIndex >= content.length - 1) {
          clearInterval(animKey); // Detén la animación cuando se complete
          return prevIndex;
        }
        return prevIndex + 1;
      });
    }, speed);

    return () => clearInterval(animKey); // Limpia el intervalo al desmontar
  }, [content, speed]);

  // Estilo para la animación de parpadeo del cursor
  const cursorStyle: CSSProperties = {
    display: 'inline-block',
    width: '2px',
    height: '1em',
    backgroundColor: 'white',
    marginLeft: '4px',
    animation: 'blink 1s steps(2, start) infinite'
  };

  // Definición de la animación de parpadeo
  useEffect(() => {
    const styleSheet = document.styleSheets[0];
    const keyframes = `
      @keyframes blink {
        0%, 100% { opacity: 1; }
        50% { opacity: 0; }
      }
    `;
    styleSheet.insertRule(keyframes, styleSheet.cssRules.length);
  }, []);

  return (
    <pre
      className={`type-writer text-lg text-white whitespace-pre-wrap relative font-mono ${geo.className}`}
    >
      {displayedContent}
      {showCursor && <span style={cursorStyle}></span>}
    </pre>
  );
}
