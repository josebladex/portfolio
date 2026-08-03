import { LANGUAGE_CODES, type LanguageCode } from './index';

export interface AboutContent {
  summary: string;
  skills: string[];
}

const ES: AboutContent = {
  summary:
    'Licenciado de Ingeniería en Informática y Desarrollador Full Stack con más de 7 años de experiencia liderando proyectos web, IA aplicada y sistemas embebidos. Especialista en desarrollo de software con arquitecturas modernas, tecnologías cloud-native y enfoque integral en frontend, backend, automatización e inteligencia artificial. Enfocado en rendimiento, escalabilidad y experiencia de usuario.',
  skills: [
    'Desarrollo Full Stack',
    'IA y Visión por Computadora',
    'Cloud-native y DevOps',
    'Automatización con n8n',
    'Bases de Datos (PostgreSQL)',
    'Sistemas Embebidos / Mecatrónica',
    'Web Moderna (Next.js, React, Astro)',
    'TypeScript · Python · Java · C#'
  ]
};

const EN: AboutContent = {
  summary:
    "Bachelor's Degree in Computer Engineering and Full Stack Developer with more than 7 years of experience leading web projects, applied AI solutions, and embedded systems. Specialized in software development using modern architectures, cloud-native technologies, and a comprehensive approach covering frontend, backend, automation, and artificial intelligence. Focused on performance, scalability, and user experience.",
  skills: [
    'Full Stack Development',
    'AI & Computer Vision',
    'Cloud-native & DevOps',
    'Workflow Automation (n8n)',
    'Databases (PostgreSQL)',
    'Embedded Systems / Mechatronics',
    'Modern Web (Next.js, React, Astro)',
    'TypeScript · Python · Java · C#'
  ]
};

export const ABOUT_BY_LOCALE: Record<LanguageCode, AboutContent> = {
  [LANGUAGE_CODES.ES]: ES,
  [LANGUAGE_CODES.EN]: EN
};
