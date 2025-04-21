'use client';

import React, { useState, useEffect } from 'react';
import { Geo } from 'next/font/google';

const geo = Geo({
  weight: '400',
  subsets: ['latin']
});

interface TypeWriterProps {
  content: string; // Contenido que se escribirá
  speed?: number; // Velocidad de escritura en milisegundos
}

const TypeWriter: React.FC<TypeWriterProps> = ({
  content = '',
  speed = 100
}) => {
  const [displayedContent, setDisplayedContent] = useState(''); // Contenido mostrado
  const [index, setIndex] = useState(0); // Índice del carácter actual
  const [showCursor, setShowCursor] = useState(true); // Controla la visibilidad del cursor

  useEffect(() => {
    const animKey = setInterval(() => {
      setIndex(prevIndex => {
        if (prevIndex >= content.length - 1) {
          clearInterval(animKey); // Detén la animación cuando se complete
          setShowCursor(false); // Oculta el cursor al finalizar
          return prevIndex;
        }
        return prevIndex + 1;
      });
    }, speed);

    return () => clearInterval(animKey); // Limpia el intervalo al desmontar
  }, [content, speed]);

  useEffect(() => {
    setDisplayedContent(prev => prev + content[index]); // Agrega el carácter actual al contenido mostrado
  }, [index, content]);

  // Estilo para la animación de parpadeo del cursor
  const cursorStyle: React.CSSProperties = {
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
};

export default TypeWriter;
