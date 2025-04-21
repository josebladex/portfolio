'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Doto, Geo, Jacquard_12 } from 'next/font/google';
import MagicButton from '@/components/MagicButton';
import { FaFolderOpen } from 'react-icons/fa'; // Importa íconos de react-icons
import { useLanguageStore } from '@/store/useLanguageStore'; // Importa el hook de Zustand
import { IoDocumentAttachOutline } from 'react-icons/io5';

// Importa las fuentes desde next/font/google
const geo = Geo({
  weight: '400',
  subsets: ['latin'],
  style: ['normal', 'italic']
});

const doto = Doto({
  weight: '400',
  subsets: ['latin'],
  style: ['normal']
});

const rubikIso = Jacquard_12({
  weight: '400',
  subsets: ['latin'],
  style: ['normal']
});

const Browser = () => {
  const { language } = useLanguageStore(); // Obtén el estado del lenguaje desde el store

  return (
    <div
      className={`w-full h-full bg-black/35 text-white p-6 rounded-lg shadow-lg flex flex-col space-y-4 ${geo.className}`}
    >
      {/* Barra de título del navegador */}
      <div className="flex items-center justify-between bg-gray-700 p-2 rounded-t-lg">
        <div className="flex space-x-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
        <span className={`text-sm text-gray-300 ${geo.className}`}>
          Portfolio
        </span>
      </div>

      {/* Contenido del navegador */}
      <motion.div
        className={`flex flex-col space-y-4 text-gray-300 ${rubikIso.className}`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Texto principal con soporte para múltiples idiomas */}
        <p
          className={`${doto.className} font-bold`}
          style={{ fontSize: 'clamp(2rem, 5vw, 6rem)' }} // Ajusta el tamaño de la fuente dinámicamente
        >
          {language === 'es'
            ? 'Hola, soy Jose Plata'
            : language === 'en'
              ? 'Hello, I am Jose Plata'
              : 'Hello, I am Jose Plata'}
        </p>
        <span
          className="text-green-400 font-medium"
          style={{ fontSize: 'clamp(1.5rem, 4vw, 4rem)' }} // Ajusta el tamaño de la fuente dinámicamente
        >
          Full Stack Developer
        </span>
      </motion.div>

      {/* Animación de botones interactivos */}
      <motion.div
        className="flex flex-col md:flex-row space-y-4 md:space-y-0 sm:space-x-4 mt-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        {/* Botón para ir a la sección #projects */}
        <MagicButton
          title={language === 'es' ? 'Mis Proyectos' : 'My Projects'}
          icon={<FaFolderOpen />}
          position="left"
          handleClick={() => {
            const section = document.querySelector('#projects');
            if (section) {
              section.scrollIntoView({ behavior: 'smooth' });
            }
          }}
        />
 
        {/* Botón para abrir el currículum vitae en una nueva pestaña */}
        <MagicButton
          title={language === 'es' ? 'Currículum Vitae' : 'Resume'}
          icon={<IoDocumentAttachOutline />}
          position="right"
          handleClick={() =>
            window.open(
              language === 'es'
                ? 'https://drive.google.com/file/d/1HVcaT_WVPeF5X-VEQxuX3OB2wfXncvzY/view?usp=drive_link'
                : 'https://drive.google.com/file/d/1j6lr3R-awO9oJ6A_qT3o_IxCANyJmc0b/view?usp=sharing',
              '_blank'
            )
          }
        />
      </motion.div>
    </div>
  );
};

export default Browser;
