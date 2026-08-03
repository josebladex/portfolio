type Props = {
  sameAs: string[];
  knowsAbout: string[];
};

export function JsonLd({ sameAs, knowsAbout }: Props) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Jose Luis Plata Zabala',
    alternateName: 'José Plata',
    jobTitle: 'Full Stack Developer',
    url: 'https://josebladex.github.io/portfolio/',
    sameAs,
    inLanguage: ['es', 'en'],
    knowsAbout
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
