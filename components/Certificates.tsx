'use client';

import { IconExternalLink, IconFileText } from '@tabler/icons-react';
import { certificates, type CertificateItem } from '@/data';
import { useLanguageStore } from '@/store/useLanguageStore';
import MagicButton from './MagicButton';

const driveThumbUrl = (id: string) =>
  `https://drive.google.com/thumbnail?id=${id}&sz=w800`;

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
      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
        {certs.map(cert => (
          <CertificateCard key={cert.id} cert={cert} />
        ))}
      </div>
    </div>
  );
};

const CertificateCard = ({ cert }: { cert: CertificateItem }) => {
  const hasPreview = cert.fileType !== 'pdf';
  const thumbUrl = hasPreview ? driveThumbUrl(cert.driveId) : null;

  return (
    <div className="max-w-xs w-full group/card border border-white-100 rounded-tl-3xl rounded-br-3xl">
      <div className="cursor-default overflow-hidden relative rounded-md shadow-xl max-w-sm mx-auto flex flex-col gap-2 justify-between p-4 bg-black/80 min-h-72">
        {thumbUrl ? (
          <div className="relative w-full h-32 -mx-4 -mt-4 mb-2 overflow-hidden rounded-md border border-white/10">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={thumbUrl}
              alt={cert.name}
              title={cert.filename}
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center w-full h-32 -mx-4 -mt-4 mb-2 rounded-md border border-white/10 bg-white/5 text-gray-100">
            <IconFileText className="size-8 text-red-500" />
            <span className="mt-1 text-xs font-bold uppercase tracking-wider text-gray-100/80">
              PDF
            </span>
          </div>
        )}

        <div className="text content">
          <p className="font-bold text-[10px] uppercase tracking-widest text-sky-300/80 relative z-10">
            {cert.issuer}
          </p>
          <span className="font-bold text-base text-gray-50 relative z-10 block mt-1">
            {cert.name}
          </span>
          {cert.year ? (
            <p className="font-normal text-sm text-gray-50 relative z-10 mt-2">
              {cert.year}
            </p>
          ) : null}
          <p
            className="font-mono text-[10px] text-gray-100/60 relative z-10 mt-3 truncate"
            title={cert.filename}
          >
            {cert.filename}
          </p>

          <div className="flex flex-row items-center justify-end mt-3 z-10">
            <MagicButton
              title=""
              icon={<IconExternalLink />}
              position="left"
              buttonClasses="h-8 rounded-md"
              otherClasses="rounded-md px-3 text-sm [&_svg]:size-4"
              handleClick={() =>
                window.open(cert.driveUrl, '_blank', 'noopener,noreferrer')
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certificates;
