"use client";
import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import Image from "next/image";
import { TypewriterEffect } from "./ui/typewriter-effect";
import { cn } from "@/lib/utils";
import localFont from "next/font/local";
import { GrDocumentDownload } from "react-icons/gr";
import { useRouter } from "next/navigation";
import { useLanguageStore } from "@/store/useLanguageStore";
import { HeroData } from "@/data";

const font_3270 = localFont({
  src: "../public/fonts/3270.ttf",
  display: "swap",
});

const Hero = () => {
  const router = useRouter();

  const { language } = useLanguageStore();
  const heroData = HeroData[language][0]; // Accede al primer elemento del array
  const words = heroData?.words || []; // Asegúrate de que `words` esté definido


  return (
    <div className="pb-20 pt-36 h-screen">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="white"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="white" />
      </div>

      <div
        className="h-screen w-full absolute left-0 top-0 z-10 flex items-center justify-center
        opacity-10
      "
      >
        <Image
          src="/bg/bg-hero.png"
          fill
          style={{ objectFit: "cover" }}
          alt="Background"
          className="absolute inset-0"
        />
      </div>

      <div
        className="h-screen w-full bg-black
       absolute top-0 left-0 flex items-center justify-center"
      >
        <div
          // Changed the bg to bg-black so it matches the bg color and will blend in
          className="absolute pointer-events-none inset-0 flex items-center justify-center bg-gradient-to-b from-red-900 from-10% via-black via-30% to-black to-90% "
          style={{
            WebkitMaskImage:
              "radial-gradient(ellipse, black 50%, rgba(0, 0, 0, 0.5) 50%)",
            maskImage:
              "radial-gradient(ellipse, black 50%, rgba(0, 0, 0, 0.5) 50%)",
          }}
        />
      </div>

      <div className="h-[20rem] flex flex-col gap-4 justify-center items-center relative z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <TypewriterEffect
            words={words}
            className={cn(
              "text-center text-[40px] md:text-5xl lg:text-6xl",
              font_3270.className // Directamente como string, sin llaves
            )}
          />
        </div>
      </div>

      <div
        className=" w-full h-screen pb-9
       absolute left-0 top-0 flex items-end justify-center z-30
    "
      >
        <MagicButton
         title={
          language === "es"
            ? "Curriculum Vitae"
            : language === "en"
            ? "Resume Jose Plata"
            : "Curriculum Vitae" // Valor por defecto si el idioma no está definido
        }
          icon={<GrDocumentDownload />}
          position="right"
          handleClick={() => {
            window.open(
              language === "es"
            ? "https://drive.google.com/file/d/1HVcaT_WVPeF5X-VEQxuX3OB2wfXncvzY/view?usp=drive_link"
            : "https://drive.google.com/file/d/1j6lr3R-awO9oJ6A_qT3o_IxCANyJmc0b/view?usp=drive_link"
             ,
              "_blank"
            );
          }}
        />
      </div>
    </div>
  );
};

export default Hero;
