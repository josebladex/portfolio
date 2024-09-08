"use client";

import { FaLocationArrow } from "react-icons/fa6";

import { projects } from "@/data";
import { PinContainer } from "./ui/Pin";
import { Compare } from "./ui/compare";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { ButtonsCard } from "./blocks/tailwinds-buttons";

const RecentProjects = () => {
  return (
    <div id="projects" className="py-20">
      <h1 className="heading">
        Mis <span className="text-sky-300/30">Proyectos Recientes</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10 ">
        {projects.map((item) => (
          <div className="max-w-xs w-full group/card border border-white-100 rounded-tl-3xl rounded-br-3xl ">
            <div
              className={cn(
                " cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl  max-w-sm mx-auto backgroundImage flex flex-col gap-2 justify-between p-4"
              )}
            >
              <Compare
                firstImage={item.img1}
                secondImage={item.img2}
                firstImageClassName="object-cover object-center w-full"
                secondImageClassname="object-cover object-center w-full"
                className="absolute top-0 left-0 w-full h-full rounded-[22px] md:rounded-lg"
                slideMode="hover"
                autoplay={true}
              />

              <div className="absolute w-full h-full top-0 left-0"></div>
              <div className="flex flex-row items-center space-x-4 z-10">
                {item.iconLists.map((icon) => (
                  <Image
                    height="72"
                    width="72"
                    alt="Avatar"
                    src={icon}
                    className="h-8 w-8 rounded-full border-2 object-cover"
                  />
                ))}
              </div>
              <div className="text content">
                <h1 className="font-bold text-xl md:text-2xl text-gray-50 relative z-10">
                  {item.title}
                </h1>
                <p className="font-normal text-sm text-gray-50 relative z-10 my-4">
                  {item.des}
                </p>
                <div className="flex flex-row items-center justify-between z-10">
                  <p className="font-normal text-base text-gray-50 relative z-10">
                    {item.year}
                  </p>

                  <a href={item.link} target="_blank" className="z-40 inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                    Visitar
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
