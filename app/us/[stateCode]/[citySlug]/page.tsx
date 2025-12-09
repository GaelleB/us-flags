import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { cityFlags } from '@/data/flags';
import CulturalReferences from '@/app/components/CulturalReferences';
import ParallaxImage from '@/app/components/ParallaxImage';
import type { Metadata } from 'next';

type PageProps = {
  params: Promise<{
    stateCode: string;
    citySlug: string;
  }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { stateCode, citySlug } = await params;

  const cityFlag = cityFlags.find(
    (city) => city.stateCode === stateCode && city.citySlug === citySlug
  );

  if (!cityFlag) {
    return {
      title: 'Ville non trouvée - Stars, Stripes & Stories',
    };
  }

  return {
    title: `${cityFlag.cityName} - Stars, Stripes & Stories`,
    description: cityFlag.shortSummary,
    openGraph: {
      title: `${cityFlag.cityName} - Stars, Stripes & Stories`,
      description: cityFlag.shortSummary,
      images: [
        {
          url: cityFlag.heroImage || cityFlag.flagImage,
          width: 1200,
          height: 630,
          alt: `Drapeau de ${cityFlag.cityName}`,
        },
      ],
      type: 'article',
      locale: 'fr_FR',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${cityFlag.cityName} - Stars, Stripes & Stories`,
      description: cityFlag.shortSummary,
      images: [cityFlag.heroImage || cityFlag.flagImage],
    },
  };
}

export default async function CityFlagPage({ params }: PageProps) {
  const { stateCode, citySlug } = await params;

  const cityFlag = cityFlags.find(
    (city) => city.stateCode === stateCode && city.citySlug === citySlug
  );

  if (!cityFlag) {
    notFound();
  }

  // Split story into paragraphs for better formatting
  const paragraphs = cityFlag.story.split('\n\n').filter(p => p.trim());

  return (
    <>
      {/* Navigation sticky */}
      <nav aria-label="Navigation principale" className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-stone-200">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center text-sm font-sans font-medium text-slate-600 hover:text-slate-900 transition"
            aria-label="Retour à la page d'accueil"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Retour
          </Link>

          <Link
            href="/explore"
            className="text-sm font-sans font-medium text-blue-600 hover:text-blue-800 transition"
            aria-label="Explorer la carte interactive"
          >
            Explorer la carte →
          </Link>
        </div>
      </nav>

      <main id="main-content" className="min-h-screen bg-stone-50">
        {/* Hero Image */}
        {cityFlag.heroImage && (
          <div className="relative">
            <ParallaxImage
              src={cityFlag.heroImage}
              alt={`${cityFlag.cityName} skyline`}
              speed={0.35}
              className="h-[50vh] md:h-[60vh]"
              priority
            />
            <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-black/30 via-transparent to-black/60" aria-hidden="true"></div>
          </div>
        )}

        {/* Hero Section */}
        <section aria-labelledby="city-title" className="bg-white border-b border-stone-200">
          <div className="max-w-4xl mx-auto px-6 pt-16 pb-12">
            {/* City Name - Display Font */}
            <h1 id="city-title" className="font-display text-5xl md:text-7xl font-bold text-slate-900 mb-6 leading-tight">
              {cityFlag.cityName}
            </h1>

            {/* Chapô - Summary in large text */}
            <p className="font-serif text-2xl md:text-3xl text-slate-700 leading-relaxed mb-8 font-light">
              {cityFlag.shortSummary}
            </p>

            {/* Metadata */}
            <div className="flex items-center gap-4 text-sm text-slate-500 font-sans" role="contentinfo" aria-label="Métadonnées de l'article">
              <span>Lecture : 4 min</span>
              <span aria-hidden="true">·</span>
              <span>Histoire américaine</span>
            </div>
          </div>
        </section>

        {/* Flag Image Section */}
        <section aria-label="Drapeau de la ville" className="bg-linear-to-b from-stone-100 to-white py-12">
          <div className="max-w-3xl mx-auto px-6">
            <figure>
              <div className="w-full rounded-lg overflow-hidden shadow-xl bg-white">
                <Image
                  src={cityFlag.flagImage}
                  alt={`Drapeau de ${cityFlag.cityName}`}
                  width={1200}
                  height={800}
                  className="w-full h-auto object-contain"
                  unoptimized
                />
              </div>
              <figcaption className="text-xs text-slate-500 text-center mt-3 font-sans">
                Le drapeau de {cityFlag.cityName}
              </figcaption>
            </figure>
          </div>
        </section>

        {/* Story Content */}
        <article className="max-w-3xl mx-auto px-6 py-12">
          <div className="prose prose-lg md:prose-xl prose-stone max-w-none">
            {paragraphs.map((paragraph, index) => {
              // First paragraph gets drop cap
              if (index === 0) {
                return (
                  <p key={index} className="font-serif text-lg leading-relaxed text-slate-800 first-letter:text-7xl first-letter:font-display first-letter:font-bold first-letter:text-slate-900 first-letter:mr-3 first-letter:float-left first-letter:leading-[0.9]">
                    {paragraph}
                  </p>
                );
              }

              // Extract a pull quote from middle paragraphs (if contains specific patterns)
              if (index === Math.floor(paragraphs.length / 2) && paragraph.length > 100) {
                const sentences = paragraph.split('. ');
                const pullQuote = sentences[0] + '.';
                const restOfParagraph = sentences.slice(1).join('. ');

                return (
                  <div key={index}>
                    <aside className="my-8 py-6 px-8 border-l-4 border-slate-900 bg-stone-50">
                      <p className="font-display text-2xl text-slate-900 leading-tight italic">
                        {pullQuote}
                      </p>
                    </aside>
                    <p className="font-serif text-lg leading-relaxed text-slate-800">
                      {restOfParagraph}
                    </p>
                  </div>
                );
              }

              return (
                <p key={index} className="font-serif text-lg leading-relaxed text-slate-800 mb-6">
                  {paragraph}
                </p>
              );
            })}
          </div>
        </article>

        {/* Divider */}
        <div className="max-w-3xl mx-auto px-6 py-8">
          <div className="flex items-center gap-4">
            <div className="flex-1 h-px bg-stone-300"></div>
            <span className="text-2xl">⭐</span>
            <div className="flex-1 h-px bg-stone-300"></div>
          </div>
        </div>

        {/* Cultural References */}
        <CulturalReferences
          music={cityFlag.music}
          books={cityFlag.books}
          films={cityFlag.films}
          series={cityFlag.series}
        />

        {/* More Stories */}
        <section className="max-w-5xl mx-auto px-6 py-12">
          <h2 className="font-display text-3xl font-bold text-slate-900 mb-8">
            Continuer la lecture
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {cityFlags
              .filter(c => c.citySlug !== citySlug)
              .slice(0, 3)
              .map((city) => (
                <Link
                  key={city.citySlug}
                  href={`/us/${city.stateCode}/${city.citySlug}`}
                  className="group"
                >
                  <article className="bg-white rounded-lg p-6 hover:shadow-lg transition-shadow">
                    <h3 className="font-display text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition">
                      {city.cityName}
                    </h3>
                    <p className="font-serif text-sm text-slate-600 line-clamp-2">
                      {city.shortSummary}
                    </p>
                  </article>
                </Link>
              ))}
          </div>
        </section>

        {/* Footer CTA */}
        <section className="bg-slate-900 text-white py-16">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 className="font-display text-3xl font-bold mb-4">
              Explorez toutes les histoires
            </h2>
            <p className="font-serif text-lg text-stone-300 mb-8">
              87 villes américaines, 87 drapeaux, 87 récits
            </p>
            <Link
              href="/explore"
              className="inline-block bg-white text-slate-900 px-8 py-3 rounded font-sans font-semibold hover:bg-stone-100 transition"
            >
              Voir la carte interactive
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
