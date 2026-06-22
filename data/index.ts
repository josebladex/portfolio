import { publicAsset } from '@/lib/public-asset';

const LANGUAGE_CODES = {
  ES: 'es',
  EN: 'en'
} as const;

type LanguageCode = (typeof LANGUAGE_CODES)[keyof typeof LANGUAGE_CODES];

interface ProjectItem {
  id: number;
  title: string;
  des: string;
  img1: string;
  img2: string;
  iconLists: string[];
  link: string;
  year: string;
  meta?: string[];
  details?: string[];
}

export const projects: Record<LanguageCode, ProjectItem[]> = {
  [LANGUAGE_CODES.ES]: [
    {
      id: 1,
      title: 'Gotarget',
      des: 'Proyecto inicial de landing page para marketing.',
      img1: publicAsset('/projects/6.webp'),
      img2: publicAsset('/projects/7.webp'),
      iconLists: [
        publicAsset('/bg/html-5-svgrepo-com.svg'),
        publicAsset('/bg/css-3-svgrepo-com.svg'),
        publicAsset('/bg/javascript-svgrepo-com.svg')
      ],
      link: 'https://www.youtube.com/watch?v=kfFfxlA0w-A',
      year: '2016'
    },
    {
      id: 2,
      title: 'EnriqueLeeApp',
      des: 'Plataforma de red social con soporte móvil.',
      img1: publicAsset('/projects/4.webp'),
      img2: publicAsset('/projects/5.webp'),
      iconLists: [
        publicAsset('/bg/android-svgrepo-com.svg'),
        publicAsset('/bg/kotlin-svgrepo-com.svg'),
        publicAsset('/bg/firebase-svgrepo-com.svg')
      ],
      link: 'https://github.com/josebladex/EnriqueLeeApp',
      year: '2021 - (1 mes)'
    },
    {
      id: 3,
      title: 'Electromagnetismo',
      des: 'Programas para analizar experimentos de electromagnetismo.',
      img1: publicAsset('/projects/2.webp'),
      img2: publicAsset('/projects/3.webp'),
      iconLists: [
        publicAsset('/bg/python-5.svg'),
        publicAsset('/bg/arduino-1.svg')
      ],
      link: 'https://github.com/josebladex/Recursos-Python-Fisica-II',
      year: 'Ago/2022 - (15 días)'
    },
    {
      id: 4,
      title: 'Mundo Pie',
      des: 'Aplicación web para marketing y CRM clínico.',
      img1: publicAsset('/projects/1.webp'),
      img2: publicAsset('/projects/8.webp'),
      iconLists: [
        publicAsset('/next.svg'),
        publicAsset('/ts.svg'),
        publicAsset('/bg/postgresql.svg'),
        publicAsset('/aws.svg'),
        publicAsset('/bg/google-calendar-svgrepo-com.svg')
      ],
      link: 'https://mundopie.cl/',
      year: 'Ene/2022 - Dic/2023'
    },
    {
      id: 5,
      title: 'UTOPIA',
      des: 'Explorador de exoplanetas para el desafío NASA Space Apps.',
      img1: publicAsset('/projects/9.webp'),
      img2: publicAsset('/projects/10.webp'),
      iconLists: [
        publicAsset('/three.svg'),
        publicAsset('/next.svg'),
        publicAsset('/bg/python-5.svg'),
        publicAsset('/ts.svg')
      ],
      link: 'https://utopia-exoplanet-quest.vercel.app/',
      year: 'Oct/2024 - (2 días)'
    },
    {
      id: 6,
      title: 'BOOST HACKATHON',
      des: 'Ciencia de datos y machine learning para optimización empresarial.',
      img1: publicAsset('/projects/12.webp'),
      img2: publicAsset('/projects/11.webp'),
      iconLists: [publicAsset('/bg/python-5.svg')],
      link: 'https://nuwe.io/es/hackathons/boost-hackathon',
      year: 'Dic/2025 - Ene/2025'
    },
    {
      id: 7,
      title: 'Hackathon: The Hack is ON',
      des: 'Solución Full Stack para un reto técnico.',
      img1: publicAsset('/projects/16.webp'),
      img2: publicAsset('/projects/15.webp'),
      iconLists: [
        publicAsset('/re.svg'),
        publicAsset('/java.svg'),
        publicAsset('/spring.svg')
      ],
      link: 'https://nuwe.io/es/hackathons/the-hack-is-on',
      year: 'Feb/2025 (2 días)'
    },
    {
      id: 8,
      title: 'Logistica MRMS',
      des: 'Gestión de transporte y logística con colaboración empresarial.',
      img1: publicAsset('/projects/14.webp'),
      img2: publicAsset('/projects/13.webp'),
      iconLists: [
        publicAsset('/re.svg'),
        publicAsset('/docker-svgrepo-com.svg'),
        publicAsset('/bg/python-5.svg')
      ],
      link: 'https://logisticamrms.com/',
      year: 'Dic/2025 - Feb/2025'
    },
    {
      id: 9,
      title: 'SchedSyncAI',
      des: 'SaaS para sincronizar agendas con inteligencia artificial.',
      img1: publicAsset('/projects/18.webp'),
      img2: publicAsset('/projects/17.webp'),
      iconLists: [publicAsset('/docker-svgrepo-com.svg')],
      link: '',
      year: 'Feb/2025 - En Desarrollo'
    },
    {
      id: 10,
      title: 'SCHNEIDER ELECTRIC Hackathon 2025',
      des: 'Ciencia de datos para optimizar procesos industriales.',
      img1: publicAsset('/projects/19.webp'),
      img2: publicAsset('/projects/19.webp'),
      iconLists: [publicAsset('/bg/python-5.svg')],
      link: 'https://nuwe.io/es/hackathons/schneider-electric-iberian-2025?section=challenges',
      year: 'Mar/2025 (3 días)'
    },
    {
      id: 11,
      title: 'Pixl Technical Test - Plataforma de Eventos',
      des: 'Plataforma para eventos con autenticación y pagos integrados.',
      img1: publicAsset('/projects/20.webp'),
      img2: publicAsset('/projects/21.webp'),
      iconLists: [
        publicAsset('/next.svg'),
        publicAsset('/ts.svg'),
        publicAsset('/bg/postgresql.svg'),
        publicAsset('/prisma.svg'),
        publicAsset('/docker-svgrepo-com.svg')
      ],
      link: 'https://github.com/josebladex/pixl-test',
      year: 'Mar/2025 (2 días)'
    },
    {
      id: 12,
      title: 'Rick & Morty: Juego de Prueba Backend',
      des: '¡Una novela visual fan-made de Rick and Morty con historias ramificadas, decisiones del jugador y aventuras caóticas!',
      img1: publicAsset('/projects/22.webp'),
      img2: publicAsset('/projects/23.webp'),
      iconLists: [
        publicAsset('/next.svg'),
        publicAsset('/ts.svg'),
        publicAsset('/ravendb.svg'),
        publicAsset('/dotnet.svg')
      ],
      link: 'https://github.com/josebladex/Rick-Morty_Backend-Test-Game',
      year: 'May/2025 - En Desarrollo'
    },
    {
      id: 13,
      title: 'Componente Previsualizador 3D',
      des: 'Componente React para visualización interactiva de animaciones mecánicas con transiciones fluidas entre videos. Incluye interactividad, sistema dual de videos y animaciones con Framer Motion.',
      img1: publicAsset('/projects/24.webp'),
      img2: publicAsset('/projects/25.webp'),
      iconLists: [
        publicAsset('/vite.svg'),
        publicAsset('/re.svg'),
        publicAsset('/ts.svg'),
        publicAsset('/framer-motion.svg')
      ],
      link: 'https://josebladex.github.io/3d_render_component/',
      year: 'May/2025 - (5 dias)'
    },
    {
      id: 14,
      title: 'Oracle Hackathon - Desafío Latam',
      des: 'Plataforma educativa web con chatbot inteligente basado en RAG, enfocada en inclusión escolar y gestión curricular en tiempo real.',
      img1: publicAsset('/projects/28.webp'),
      img2: publicAsset('/projects/29.webp'),
      iconLists: [
        publicAsset('/oracle-apex.webp'),
        publicAsset('/oracle-autonomous-db.webp')
      ],
      link: 'https://www.linkedin.com/feed/update/urn:li:activity:7364722683281850368/',
      year: 'Agosto 2025',
      meta: ['1º / 330 participantes', 'Online']
    },
    {
      id: 15,
      title: 'Adminpro - Plataforma de Gestión Financiera',
      des: 'Plataforma financiera con análisis documental mediante IA, gamificación y proyección de flujo de caja basada en datos históricos.',
      img1: publicAsset('/projects/26.webp'),
      img2: publicAsset('/projects/27.webp'),
      iconLists: [
        publicAsset('/next.svg'),
        publicAsset('/ts.svg'),
        publicAsset('/bg/python-5.svg'),
        publicAsset('/bg/mongodb-icon-1.svg'),
        publicAsset('/docker-svgrepo-com.svg')
      ],
      link: 'https://www.adminprochile.com/',
      year: 'Noviembre 2025 - Enero 2026',
    }
  ],
  [LANGUAGE_CODES.EN]: [
    {
      id: 1,
      title: 'Gotarget',
      des: 'Initial landing page project for marketing.',
      img1: publicAsset('/projects/6.webp'),
      img2: publicAsset('/projects/7.webp'),
      iconLists: [
        publicAsset('/bg/html-5-svgrepo-com.svg'),
        publicAsset('/bg/css-3-svgrepo-com.svg'),
        publicAsset('/bg/javascript-svgrepo-com.svg')
      ],
      link: 'https://www.youtube.com/watch?v=kfFfxlA0w-A',
      year: '2016'
    },
    {
      id: 2,
      title: 'EnriqueLeeApp',
      des: 'Social network platform with mobile support.',
      img1: publicAsset('/projects/4.webp'),
      img2: publicAsset('/projects/5.webp'),
      iconLists: [
        publicAsset('/bg/android-svgrepo-com.svg'),
        publicAsset('/bg/kotlin-svgrepo-com.svg'),
        publicAsset('/bg/firebase-svgrepo-com.svg')
      ],
      link: 'https://github.com/josebladex/EnriqueLeeApp',
      year: '2021 - (1 month)'
    },
    {
      id: 3,
      title: 'Electromagnetism',
      des: 'Programs to analyze electromagnetism experiments.',
      img1: publicAsset('/projects/2.webp'),
      img2: publicAsset('/projects/3.webp'),
      iconLists: [
        publicAsset('/bg/python-5.svg'),
        publicAsset('/bg/arduino-1.svg')
      ],
      link: 'https://github.com/josebladex/Recursos-Python-Fisica-II',
      year: 'Aug/2022 - (15 days)'
    },
    {
      id: 4,
      title: 'Mundo Pie',
      des: 'Web application for marketing and clinical CRM.',
      img1: publicAsset('/projects/1.webp'),
      img2: publicAsset('/projects/8.webp'),
      iconLists: [
        publicAsset('/next.svg'),
        publicAsset('/ts.svg'),
        publicAsset('/bg/postgresql.svg'),
        publicAsset('/aws.svg'),
        publicAsset('/bg/google-calendar-svgrepo-com.svg')
      ],
      link: 'https://mundopie.cl/',
      year: 'Jan/2022 - Dec/2023'
    },
    {
      id: 5,
      title: 'UTOPIA',
      des: 'Exoplanet explorer for NASA Space Apps challenge.',
      img1: publicAsset('/projects/9.webp'),
      img2: publicAsset('/projects/10.webp'),
      iconLists: [
        publicAsset('/three.svg'),
        publicAsset('/next.svg'),
        publicAsset('/bg/python-5.svg'),
        publicAsset('/ts.svg')
      ],
      link: 'https://utopia-exoplanet-quest.vercel.app/',
      year: 'Oct/2024 - (2 days)'
    },
    {
      id: 6,
      title: 'BOOST HACKATHON',
      des: 'Data science and machine learning for business optimization.',
      img1: publicAsset('/projects/12.webp'),
      img2: publicAsset('/projects/11.webp'),
      iconLists: [publicAsset('/bg/python-5.svg')],
      link: 'https://nuwe.io/es/hackathons/boost-hackathon',
      year: 'Dec/2025 - Jan/2025'
    },
    {
      id: 7,
      title: 'Hackathon: The Hack is ON',
      des: 'Full Stack solution for a technical challenge.',
      img1: publicAsset('/projects/16.webp'),
      img2: publicAsset('/projects/15.webp'),
      iconLists: [
        publicAsset('/re.svg'),
        publicAsset('/java.svg'),
        publicAsset('/spring.svg')
      ],
      link: 'https://nuwe.io/es/hackathons/the-hack-is-on',
      year: 'Feb/2025 (2 days)'
    },
    {
      id: 8,
      title: 'Logistica MRMS',
      des: 'Transportation and logistics management with business collaboration.',
      img1: publicAsset('/projects/14.webp'),
      img2: publicAsset('/projects/13.webp'),
      iconLists: [
        publicAsset('/re.svg'),
        publicAsset('/docker-svgrepo-com.svg'),
        publicAsset('/bg/python-5.svg')
      ],
      link: 'https://logisticamrms.com/',
      year: 'Dec/2025 - Feb/2025'
    },
    {
      id: 9,
      title: 'SchedSyncAI',
      des: 'SaaS to synchronize schedules with artificial intelligence.',
      img1: publicAsset('/projects/18.webp'),
      img2: publicAsset('/projects/17.webp'),
      iconLists: [publicAsset('/docker-svgrepo-com.svg')],
      link: '#',
      year: 'Feb/2025 - In Development'
    },
    {
      id: 10,
      title: 'SCHNEIDER ELECTRIC Hackathon 2025',
      des: 'Data science to optimize industrial processes.',
      img1: publicAsset('/projects/19.webp'),
      img2: publicAsset('/projects/19.webp'),
      iconLists: [publicAsset('/bg/python-5.svg')],
      link: 'https://nuwe.io/es/hackathons/schneider-electric-iberian-2025?section=challenges',
      year: 'Mar/2025 (3 days)'
    },
    {
      id: 11,
      title: 'Pixl Technical Test - Event Management Platform',
      des: 'Platform for events with authentication and integrated payments.',
      img1: publicAsset('/projects/20.webp'),
      img2: publicAsset('/projects/21.webp'),
      iconLists: [
        publicAsset('/next.svg'),
        publicAsset('/ts.svg'),
        publicAsset('/bg/postgresql.svg'),
        publicAsset('/prisma.svg'),
        publicAsset('/docker-svgrepo-com.svg')
      ],
      link: 'https://github.com/josebladex/pixl-test',
      year: 'Mar/2025 (2 days)'
    },
    {
      id: 12,
      title: 'Rick & Morty: Backend Test Game',
      des: 'A fan-made Rick and Morty visual novel game featuring branching storylines, player choices, and chaotic adventures!',
      img1: publicAsset('/projects/22.webp'),
      img2: publicAsset('/projects/23.webp'),
      iconLists: [
        publicAsset('/next.svg'),
        publicAsset('/ts.svg'),
        publicAsset('/ravendb.svg'),
        publicAsset('/dotnet.svg')
      ],
      link: 'https://github.com/josebladex/Rick-Morty_Backend-Test-Game',
      year: 'May/2025 - In Development'
    },
    {
      id: 13,
      title: '3D Preview Component',
      des: 'React component for interactive visualization of mechanical animations with smooth transitions between videos. Includes interactivity, dual video system, and Framer Motion animations.',
      img1: publicAsset('/projects/24.webp'),
      img2: publicAsset('/projects/25.webp'),
      iconLists: [
        publicAsset('/vite.svg'),
        publicAsset('/re.svg'),
        publicAsset('/ts.svg'),
        publicAsset('/framer-motion.svg')
      ],
      link: 'https://josebladex.github.io/3d_render_component/',
      year: 'May/2025 - (5 days)'
    },
    {
      id: 14,
      title: 'Oracle Hackathon - Desafío Latam',
      des: 'Educational web platform with an intelligent RAG-based chatbot focused on school inclusion and real-time curriculum management.',
      img1: publicAsset('/projects/28.webp'),
      img2: publicAsset('/projects/29.webp'),
      iconLists: [
        publicAsset('/oracle-apex.webp'),
        publicAsset('/oracle-autonomous-db.webp')
      ],
      link: 'https://www.linkedin.com/feed/update/urn:li:activity:7364722683281850368/',
      year: 'August 2025',
      meta: ['1st / 330 participants', 'Online']
    },
    {
      id: 15,
      title: 'Adminpro - Financial Management Platform',
      des: 'Financial platform with AI-powered document analysis, gamification, and cash flow projections based on historical user data.',
      img1: publicAsset('/projects/26.webp'),
      img2: publicAsset('/projects/27.webp'),
      iconLists: [
        publicAsset('/next.svg'),
        publicAsset('/ts.svg'),
        publicAsset('/bg/python-5.svg'),
        publicAsset('/bg/mongodb-icon-1.svg'),
        publicAsset('/docker-svgrepo-com.svg')
      ],
      link: 'https://www.adminprochile.com/',
      year: 'November 2025 - January 2026',
    }
  ]
};
