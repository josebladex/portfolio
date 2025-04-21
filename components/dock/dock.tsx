'use client';

import React from 'react';
import { FloatingDock } from './floating-dock';
import {
  FaGithub,
  FaInfoCircle,
  FaLinkedin,
  FaPaypal,
  FaProjectDiagram
} from 'react-icons/fa';
import { BiHome } from 'react-icons/bi';
import { IoDocumentAttach } from 'react-icons/io5';
import { useLanguageStore } from '@/store/useLanguageStore';

const Dock = () => {
  const links = {
    es: [
      {
        title: 'Inicio',
        icon: <BiHome className="h-full w-full text-red-700" />,
        href: '/'
      },
      {
        title: 'Sobre mí',
        icon: <FaInfoCircle className="h-full w-full text-red-700" />,
        href: '#about'
      },
      {
        title: 'Proyectos',
        icon: <FaProjectDiagram className="h-full w-full text-red-700" />,
        href: '#projects'
      },
      {
        title: 'Github',
        icon: <FaGithub className="h-full w-full text-red-700" />,
        href: 'https://github.com/josebladex'
      },
      {
        title: 'LinkedIn',
        icon: <FaLinkedin className="h-full w-full text-red-700" />,
        href: 'https://www.linkedin.com/in/jose-luis-plata-zabala'
      },
      {
        title: 'CV',
        icon: <IoDocumentAttach className="h-full w-full text-red-700" />,
        href: 'https://drive.google.com/file/d/1HVcaT_WVPeF5X-VEQxuX3OB2wfXncvzY/view?usp=drive_link'
      },
      {
        title: 'Invitame un Café!',
        icon: <FaPaypal className="h-full w-full text-red-700" />,
        href: 'https://www.paypal.com/donate/?hosted_button_id=Q95SWXH9EVC7E'
      }
    ],
    en: [
      {
        title: 'Home',
        icon: <BiHome className="h-full w-full text-red-700" />,
        href: '/'
      },
      {
        title: 'About Me',
        icon: <FaInfoCircle className="h-full w-full text-red-700" />,
        href: '#about'
      },
      {
        title: 'Projects',
        icon: <FaProjectDiagram className="h-full w-full text-red-700" />,
        href: '#projects'
      },
      {
        title: 'Github',
        icon: <FaGithub className="h-full w-full text-red-700" />,
        href: 'https://github.com/josebladex'
      },
      {
        title: 'LinkedIn',
        icon: <FaLinkedin className="h-full w-full text-red-700" />,
        href: 'https://www.linkedin.com/in/jose-luis-plata-zabala'
      },
      {
        title: 'Resume',
        icon: <IoDocumentAttach className="h-full w-full text-red-700" />,
        href: 'https://drive.google.com/file/d/1j6lr3R-awO9oJ6A_qT3o_IxCANyJmc0b/view?usp=sharing'
      },
      {
        title: 'Invite me a Coffee!',
        icon: <FaPaypal className="h-full w-full text-red-700" />,
        href: 'https://www.paypal.com/donate/?hosted_button_id=Q95SWXH9EVC7E'
      }
    ]
  };
  const { language } = useLanguageStore();

  const dock = links[language];

  return (
    <div
      className="fixed top-6 left-1/2 transform -translate-x-1/2 max-md:top-[10px] max-md:right-6 max-md:left-auto max-md:translate-x-0"
      style={{ zIndex: 100 }}
    >
      <div className="flex items-start justify-items-start h-fit w-fit">
        <FloatingDock items={dock} desktopClassName="" mobileClassName="" />
      </div>
    </div>
  );
};

export default Dock;
