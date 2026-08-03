'use client';

/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useRef } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { useLanguageStore } from '@/store/useLanguageStore';
import { Geo } from 'next/font/google';

export const geo = Geo({
  weight: '400',
  subsets: ['latin']
});

const Approach = () => {
  const { language } = useLanguageStore();
  const currentYear = new Date().getFullYear();

  return (
    <section className="w-full pt-20">
      <h1 className="font-bold text-4xl md:text-5xl text-center">
        {language === 'es' ? 'Mi' : language === 'en' ? 'My' : 'My'}{' '}
        <span className="text-red-500">
          {language === 'es'
            ? 'Enfoque'
            : language === 'en'
              ? 'Approach'
              : 'Approach'}
        </span>
      </h1>
      <div className="my-20 flex flex-col lg:flex-row items-center justify-center w-full gap-4">
        <Tarjeta
          titulo={
            language === 'es'
              ? 'Planificación y Estrategia'
              : language === 'en'
                ? 'Planning and Strategy'
                : 'Planning and Strategy'
          }
          icono={<AceternityIcon orden="Fase 1" />}
          descripcion={
            language === 'es'
              ? 'Colaboraremos para definir los objetivos de tu sitio web, el público objetivo, y las funcionalidades clave. Hablaremos de la estructura del sitio, la navegación y los requisitos de contenido.'
              : language === 'en'
                ? 'We will collaborate to define your website’s goals, target audience, and key functionalities. We will discuss the site’s structure, navigation, and content requirements.'
                : 'We will collaborate to define your website’s goals, target audience, and key functionalities. We will discuss the site’s structure, navigation, and content requirements.'
          }
        >
          <GlowOverlay palette="emerald" />
        </Tarjeta>
        <Tarjeta
          titulo={
            language === 'es'
              ? 'Desarrollo y Actualización del Progreso'
              : language === 'en'
                ? 'Development and Progress Updates'
                : 'Development and Progress Updates'
          }
          icono={<AceternityIcon orden="Fase 2" />}
          descripcion={
            language === 'es'
              ? 'Una vez que estemos de acuerdo con el plan, pongo mi playlist y me sumerjo en el código. Desde los bocetos iniciales hasta el código final, te mantendré informado en cada paso del proceso.'
              : language === 'en'
                ? 'Once we agree on the plan, I put on my playlist and dive into the code. From initial sketches to the final code, I’ll keep you informed at every step of the process.'
                : 'Once we agree on the plan, I put on my playlist and dive into the code. From initial sketches to the final code, I’ll keep you informed at every step of the process.'
          }
        >
          <GlowOverlay palette="pink" />
        </Tarjeta>
        <Tarjeta
          titulo={
            language === 'es'
              ? 'Desarrollo y Lanzamiento'
              : language === 'en'
                ? 'Development and Launch'
                : 'Development and Launch'
          }
          icono={<AceternityIcon orden="Fase 3" />}
          descripcion={
            language === 'es'
              ? '¡Aquí es donde ocurre la magia! Basándome en el diseño aprobado, traduciré todo en código funcional, construyendo tu sitio web desde cero.'
              : language === 'en'
                ? 'This is where the magic happens! Based on the approved design, I will translate everything into functional code, building your website from scratch.'
                : 'This is where the magic happens! Based on the approved design, I will translate everything into functional code, building your website from scratch.'
          }
        >
          <GlowOverlay palette="sky" />
        </Tarjeta>
      </div>
      <div className="w-full h-full text-center flex items-center justify-center">
        <p
          className={`md:text-2xl text-sm md:font-semibold font-bold text-red-500 ${geo.className}`}
        >
          {language === 'es'
            ? `Diseñado y Desplegado por José Plata, Copyright © ${currentYear}`
            : language === 'en'
              ? `Designed and Deployed by José Plata, Copyright © ${currentYear}`
              : `Designed and Deployed by José Plata, Copyright © ${currentYear}`}
        </p>
      </div>
    </section>
  );
};

export default Approach;

function GlowOverlay({ palette }: { palette: 'emerald' | 'pink' | 'sky' }) {
  const ref = useRef<HTMLDivElement>(null);
  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    if (ref.current) {
      ref.current.style.setProperty('--x', `${e.clientX - r.left}px`);
      ref.current.style.setProperty('--y', `${e.clientY - r.top}px`);
    }
  };
  const bgClass =
    palette === 'emerald'
      ? 'bg-emerald-900'
      : palette === 'pink'
        ? 'bg-pink-900'
        : 'bg-sky-600';
  return (
    <div
      onMouseMove={handleMove}
      className={`absolute inset-0 overflow-hidden rounded-3xl ${bgClass}`}
    >
      <div
        ref={ref}
        className="absolute inset-0 opacity-0 group-hover/canvas-card:opacity-100 transition-opacity duration-300"
        style={{
          background:
            'radial-gradient(220px circle at var(--x, 50%) var(--y, 50%), rgba(255,255,255,0.20), transparent 60%)'
        }}
      />
    </div>
  );
}

const Tarjeta = ({
  titulo,
  icono,
  children,
  descripcion
}: {
  titulo: string;
  icono: React.ReactNode;
  children?: React.ReactNode;
  descripcion: string;
}) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border border-black/[0.2] group/canvas-card flex items-center justify-center
       dark:border-white/[0.2]  max-w-sm w-full mx-auto p-4 relative lg:h-[35rem] rounded-3xl "
      style={{
        background: 'rgb(104,7,9,0.20)',
        backgroundColor:
          'linear-gradient(90deg, rgba(104,7,9,0.20) 0%, rgba(0,0,0,0.20) 100%)'
      }}
    >
      <Icono className="absolute h-10 w-10 -top-3 -left-3 dark:text-white text-black opacity-30" />
      <Icono className="absolute h-10 w-10 -bottom-3 -left-3 dark:text-white text-black opacity-30" />
      <Icono className="absolute h-10 w-10 -top-3 -right-3 dark:text-white text-black opacity-30" />
      <Icono className="absolute h-10 w-10 -bottom-3 -right-3 dark:text-white text-black opacity-30" />

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20 px-10">
        <div
          className="text-center group-hover/canvas-card:-translate-y-4 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]
        group-hover/canvas-card:opacity-0 transition duration-200 min-w-40 mx-auto flex items-center justify-center"
        >
          {icono}
        </div>
        <h2
          className="dark:text-white text-center text-3xl opacity-0 group-hover/canvas-card:opacity-100
         relative z-10 text-black mt-4  font-bold group-hover/canvas-card:text-white
         group-hover/canvas-card:-translate-y-2 transition duration-200"
        >
          {titulo}
        </h2>
        <p
          className="text-sm opacity-0 group-hover/canvas-card:opacity-100
         relative z-10 mt-4 group-hover/canvas-card:text-white text-center
         group-hover/canvas-card:-translate-y-2 transition duration-200"
          style={{ color: '#E4ECFF' }}
        >
          {descripcion}
        </p>
      </div>
    </div>
  );
};

const AceternityIcon = ({ orden }: { orden: string }) => {
  return (
    <div>
      <button className="relative inline-flex overflow-hidden rounded-full p-[1px] ">
        <span
          className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite]
         bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]"
        />
        <span
          className="inline-flex h-full w-full cursor-pointer items-center
        justify-center rounded-full bg-slate-950 px-5 py-2 text-purple backdrop-blur-3xl font-bold text-2xl"
        >
          {orden}
        </span>
      </button>
    </div>
  );
};

export const Icono = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};
