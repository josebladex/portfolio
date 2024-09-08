"use client";

import { FaGithub, FaLinkedin, FaProjectDiagram } from "react-icons/fa";

import Hero from "@/components/Hero";
import Approach from "@/components/Approach";
import RecentProjects from "@/components/RecentProjects";
import { FloatingDock } from "@/components/ui/floating-dock";
import { IconHome } from "@tabler/icons-react";
import { FaInfoCircle } from "react-icons/fa";
import { CardStack } from "@/components/blocks/cardStack";
import { IoDocumentAttach } from "react-icons/io5";
import LanguageToggleButton from "@/components/LanguageToggleButton";

import { useLanguageStore } from "@/store/useLanguageStore";

const links = {
  es: [
    {
      title: "Inicio",
      icon: <IconHome className="h-full w-full text-red-700" />,
      href: "/",
    },
    {
      title: "Sobre mí",
      icon: <FaInfoCircle className="h-full w-full text-red-700" />,
      href: "#about",
    },
    {
      title: "Proyectos",
      icon: <FaProjectDiagram className="h-full w-full text-red-700" />,
      href: "#projects",
    },
    {
      title: "Github",
      icon: <FaGithub className="h-full w-full text-red-700" />,
      href: "https://github.com/josebladex",
    },
    {
      title: "LinkedIn",
      icon: <FaLinkedin className="h-full w-full text-red-700" />,
      href: "https://www.linkedin.com/in/jose-luis-plata-zabala",
    },
    {
      title: "CV",
      icon: <IoDocumentAttach className="h-full w-full text-red-700" />,
      href: "https://drive.google.com/file/d/1HVcaT_WVPeF5X-VEQxuX3OB2wfXncvzY/view?usp=drive_link",
    },
  ],
  en: [
    {
      title: "Home",
      icon: <IconHome className="h-full w-full text-red-700" />,
      href: "/",
    },
    {
      title: "About Me",
      icon: <FaInfoCircle className="h-full w-full text-red-700" />,
      href: "#about",
    },
    {
      title: "Projects",
      icon: <FaProjectDiagram className="h-full w-full text-red-700" />,
      href: "#projects",
    },
    {
      title: "Github",
      icon: <FaGithub className="h-full w-full text-red-700" />,
      href: "https://github.com/josebladex",
    },
    {
      title: "LinkedIn",
      icon: <FaLinkedin className="h-full w-full text-red-700" />,
      href: "https://www.linkedin.com/in/jose-luis-plata-zabala",
    },
    {
      title: "Resume",
      icon: <IoDocumentAttach className="h-full w-full text-red-700" />,
      href: "https://drive.google.com/file/d/1j6lr3R-awO9oJ6A_qT3o_IxCANyJmc0b/view?usp=sharing",
    },
  ]
};

 
const Home = () => {

  const { language } = useLanguageStore();
  const dock = links[language];
  
  return (
    <main className="relative bg-black flex justify-center items-center flex-col overflow-clip mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <div className="w-full h-full absolute left-0 top-0">
          <div
            className="absolute inset-0 opacity-50"
            style={{
              backgroundImage: 'url("/footer-grid.svg")',
              backgroundRepeat: "repeat", // Esto hace que la imagen se repita
              backgroundSize: "contain", // Puedes usar 'contain' o 'auto' para ajustar el tamaño
              objectFit: "cover",
            }}
            aria-label="Background"
          />
        </div>
        <div className="absolute -top-5  w-full flex " style={{ zIndex: 100 }}>
          <FloatingDock
            items={dock}
            desktopClassName="max-md:flex-col max-md:items-start items-center justify-center max-md:justify-start"
          />
        </div>

        <Hero />

        <CardStack />

        <RecentProjects />
        <Approach />

      </div>

    
      <div className="fixed top-4 left-4 z-[100000]">
        <LanguageToggleButton />
      </div>
      
    </main>
  );
};

export default Home;
