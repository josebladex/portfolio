'use client';

import { IconExternalLink } from '@tabler/icons-react';
import { certificates } from '@/data';
import { useLanguageStore } from '@/store/useLanguageStore';
import MagicButton from './MagicButton';

const Certificates = () => {
  const { language } = useLanguageStore();
  const certs = certificates[language];

  return (
    <div id="certificates" className="py-20">
      <h1 className="font-bold text-4xl md:text-5xl text-center">
        {language === 'es' ? 'Mis' : language === 'en' ? 'My' : 'My'}{' '}
        <span className="text-sky-300/30">
          {language === 'es'
            ? 'Certificaciones'
            : language === 'en'
              ? 'Certifications'
              : 'Certifications'}
        </span>
      </h1>
      <ul className="mx-auto mt-10 flex max-w-3xl flex-col divide-y divide-white/10 border-y border-white/10">
        {certs.map(cert => (
          <li
            key={cert.id}
            className="flex flex-col gap-2 px-4 py-5 transition-colors hover:bg-white/5 md:flex-row md:items-center md:justify-between md:gap-6 md:px-6"
          >
            <div className="min-w-0 flex-1">
              <p className="text-[10px] font-bold uppercase tracking-widest text-sky-300/80">
                {cert.issuer}
              </p>
              <p className="mt-1 text-base font-bold text-gray-50">
                {cert.name}
              </p>
              {cert.year ? (
                <p className="mt-1 text-sm text-gray-100/70">{cert.year}</p>
              ) : null}
              <p
                className="mt-1 truncate font-mono text-[11px] text-gray-100/50"
                title={cert.filename}
              >
                {cert.filename}
              </p>
            </div>
            <div className="shrink-0">
              <MagicButton
                title=""
                icon={<IconExternalLink />}
                position="left"
                buttonClasses="h-9 rounded-md"
                otherClasses="rounded-md px-4 text-sm [&_svg]:size-4"
                handleClick={() =>
                  window.open(cert.driveUrl, '_blank', 'noopener,noreferrer')
                }
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Certificates;
