'use client';
import { projects } from '@/data';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { useLanguageStore } from '@/store/useLanguageStore';
import { Compare } from './compare';
import MagicButton from './MagicButton';
import { IconExternalLink } from '@tabler/icons-react';
const RecentProjects = () => {
  const { language } = useLanguageStore();
  const projectStore = projects[language];

  // Ordena por id descendente (más reciente primero)
  const sortedProjects = [...projectStore].sort((a, b) => b.id - a.id);

  return (
    <div id="projects" className="py-20">
      <h1 className="font-bold text-4xl md:text-5xl text-center">
        {language === 'es' ? 'Mis' : language === 'en' ? 'My' : 'My'}{' '}
        <span className="text-sky-300/30">
          {language === 'es'
            ? 'Proyectos Recientes'
            : language === 'en'
              ? 'Recent Projects'
              : 'Recent Projects'}
        </span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10 ">
        {sortedProjects.map(item => (
          <div
            key={item.id}
            className="max-w-xs w-full group/card border border-white-100 rounded-tl-3xl rounded-br-3xl "
          >
            <div
              className={cn(
                ' cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl  max-w-sm mx-auto backgroundImage flex flex-col gap-2 justify-between p-4'
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
                {item.iconLists.map(icon => (
                  <Image
                    key={icon}
                    height="96"
                    width="96"
                    alt="Avatar"
                    src={icon}
                    className="h-10 w-10 rounded-full border-2 object-cover p-1"
                  />
                ))}
              </div>
              <div className="text content">
                <span className="font-bold text-base text-gray-50 relative z-10">
                  {item.title}
                </span>
                <p className="font-normal text-sm text-gray-50 relative z-10 my-4">
                  {item.des}
                </p>
                <div className="flex flex-row items-center justify-between z-10">
                  <p className="font-normal text-base text-gray-50 relative z-10">
                    {item.year}
                  </p>

                  <MagicButton
                    title=""
                    icon={<IconExternalLink />}
                    position="left"
                    handleClick={() => window.open(item.link, '_blank')}
                  />
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
