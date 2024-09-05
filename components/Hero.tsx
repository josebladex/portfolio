import { FaLocationArrow } from "react-icons/fa6";

import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      {/**
       *  UI: Spotlights
       *  Link: https://ui.aceternity.com/components/spotlight
       */}
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
    style={{ objectFit: 'cover' }}
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

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <TextGenerateEffect
            words="Transforming Concepts into Seamless User Experiences"
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
          />

          <a href="#about">
            <MagicButton
              title="Show my work"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
