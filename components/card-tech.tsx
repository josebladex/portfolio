'use client';
import { cn } from '@/lib/utils';
import { useLanguageStore } from '@/store/useLanguageStore';
import { EvervaultCard } from './evervault';

export function CardStack() {
  const { language } = useLanguageStore();

  return (
    <Card>
      <div className="w-full">
        <EvervaultCard
          text={
            language === 'es'
              ? 'Mi Stack Tecnológico en Evolución'
              : language === 'en'
                ? 'My Evolving Tech Stack'
                : 'My Evolving Tech Stack' // Valor por defecto si el idioma no está definido
          }
        />
      </div>

      <CardDescription>
        {
          language === 'es'
            ? 'Licenciado de Ingeniería en Informática y Desarrollador Full Stack con más de 7 años de experiencia liderando proyectos web, IA aplicada y sistemas embebidos. Especialista en desarrollo de software con arquitecturas modernas, tecnologías cloud-native y enfoque integral en frontend, backend, automatización e inteligencia artificial. Enfocado en rendimiento, escalabilidad y experiencia de usuario.'
            : language === 'en'
              ? 'Bachelor’s Degree in Computer Engineering and Full Stack Developer with more than 7 years of experience leading web projects, applied AI solutions, and embedded systems. Specialized in software development using modern architectures, cloud-native technologies, and a comprehensive approach covering frontend, backend, automation, and artificial intelligence. Focused on performance, scalability, and user experience.'
              : 'Bachelor’s Degree in Computer Engineering and Full Stack Developer with more than 7 years of experience leading web projects, applied AI solutions, and embedded systems. Specialized in software development using modern architectures, cloud-native technologies, and a comprehensive approach covering frontend, backend, automation, and artificial intelligence. Focused on performance, scalability, and user experience.' // Valor por defecto si el idioma no está definido
        }
      </CardDescription>
    </Card>
  );
}

export const Card = ({
  className,
  children
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      id="about"
      className={cn(
        'md:w-1/2 w-full h-fit mx-auto mt-5 p-8 rounded-xl border border-[rgba(255,255,255,0.10)] dark:bg-[rgba(40,40,40,0.70)] bg-black shadow-[2px_4px_16px_0px_rgba(200,0,0,0.06)_inset] group',
        className
      )}
    >
      {children}
    </div>
  );
};

export const CardTitle = ({
  children,
  className
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <h3
      className={cn(
        'font-sans text-2xl lg:text-4xl font-bold z-10 p-6',
        className
      )}
    >
      {children}
    </h3>
  );
};

export const CardDescription = ({
  children,
  className
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <p
      className={cn(
        'p-1 font-sans font-extralight md:text-xs lg:text-base text-sm text-[#C1C2D3] z-10',
        className
      )}
    >
      {children}
    </p>
  );
};

export const CardSkeletonContainer = ({
  className,
  children,
  showGradient = true
}: {
  className?: string;
  children: React.ReactNode;
  showGradient?: boolean;
}) => {
  return (
    <div
      className={cn(
        'h-[15rem] md:h-[20rem] rounded-xl z-40',
        className,
        showGradient &&
          ' bg-[rgba(0,0,0,0.70)] [mask-image:radial-gradient(50%_50%_at_50%_50%,white_0%,transparent_100%)]'
      )}
    >
      {children}
    </div>
  );
};
