'use client';

import { useEffect, useRef } from 'react';

interface SplitTextProps {
  text: string;
}

export default function SplitText({ text }: SplitTextProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const words = text.split(' ');

  useEffect(() => {
    document.fonts.ready.then(() => {
      if (containerRef.current) {
        containerRef.current.style.visibility = 'visible';
      }
    });
  }, []);

  return (
    <div
      ref={containerRef}
      className="flex justify-start items-start w-full max-w-lg text-left"
      style={{ visibility: 'hidden' }}
    >
      <h1 className="text-base font-bold leading-tight">
        {words.map((w, i) => (
          <span
            key={`${w}-${i}`}
            className="split-word"
            style={{ animationDelay: `${i * 50}ms` }}
          >
            {w}
            {i < words.length - 1 ? ' ' : ''}
          </span>
        ))}
        <span className="ml-2 text-green-400 text-sm" />
      </h1>
      <style>{`
        .split-word {
          display: inline-block;
          opacity: 0;
          transform: translateY(10px);
          animation: split-fade-up 0.4s ease-out forwards;
        }
        @keyframes split-fade-up {
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
