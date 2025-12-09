import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { cityFlags, CityTag } from '@/data/flags';
import { getTagInfo } from '@/data/tags-config';
import TagBadge from '@/app/components/TagBadge';
import type { Metadata } from 'next';

type PageProps = {
  params: Promise<{
    tag: string;
  }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { tag } = await params;
  const tagInfo = getTagInfo(tag as CityTag);

  if (!tagInfo) {
    return {
      title: 'Catégorie non trouvée - Flag Chronicles',
    };
  }

  const citiesWithTag = cityFlags.filter(city => city.tags?.includes(tag as CityTag));

  return {
    title: `${tagInfo.label} - Flag Chronicles`,
    description: `${tagInfo.description}. Découvrez ${citiesWithTag.length} villes américaines liées à ce thème.`,
    openGraph: {
      title: `${tagInfo.label} - Flag Chronicles`,
      description: `${tagInfo.description}. ${citiesWithTag.length} villes américaines.`,
    },
  };
}

export default async function TagPage({ params }: PageProps) {
  const { tag } = await params;

  // Vérifier que le tag existe
  const tagInfo = getTagInfo(tag as CityTag);
  if (!tagInfo) {
    notFound();
  }

  // Filtrer les villes par tag
  const citiesWithTag = cityFlags.filter(city => city.tags?.includes(tag as CityTag));

  return (
    <>
      {/* Navigation */}
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
          >
            Explorer la carte →
          </Link>
        </div>
      </nav>

      <main id="main-content" className="min-h-screen bg-stone-50">
        {/* Hero Section */}
        <section className="bg-white border-b border-stone-200">
          <div className="max-w-6xl mx-auto px-6 pt-16 pb-12">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-5xl" aria-hidden="true">{tagInfo.icon}</span>
              <h1 className="font-display text-5xl md:text-6xl font-bold text-slate-900">
                {tagInfo.label}
              </h1>
            </div>

            <p className="font-serif text-2xl text-slate-700 leading-relaxed mb-6">
              {tagInfo.description}
            </p>

            <div className="flex items-center gap-2 text-sm text-slate-500 font-sans">
              <span className="font-semibold text-slate-900">{citiesWithTag.length}</span>
              <span>{citiesWithTag.length > 1 ? 'villes' : 'ville'}</span>
            </div>
          </div>
        </section>

        {/* Cities Grid */}
        <section className="max-w-7xl mx-auto px-6 py-16">
          {citiesWithTag.length === 0 ? (
            <p className="text-center text-slate-600 font-serif text-lg">
              Aucune ville ne correspond à cette catégorie.
            </p>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {citiesWithTag.map((city) => (
                <Link
                  key={city.citySlug}
                  href={`/us/${city.stateCode}/${city.citySlug}`}
                  className="group"
                >
                  <article className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
                    {/* Flag image */}
                    <div className="h-48 bg-white flex items-center justify-center overflow-hidden">
                      <Image
                        src={city.flagImage}
                        alt={`Drapeau de ${city.cityName}`}
                        width={400}
                        height={192}
                        className="w-full h-full object-contain p-4"
                        unoptimized
                      />
                    </div>

                    <div className="p-6 flex-1 flex flex-col">
                      <h3 className="font-display text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition">
                        {city.cityName}
                      </h3>

                      {city.tags && city.tags.length > 0 && (
                        <div className="flex flex-wrap gap-1.5 mb-3">
                          {city.tags.map((cityTag) => (
                            <TagBadge key={cityTag} tag={cityTag} size="sm" showIcon={false} />
                          ))}
                        </div>
                      )}

                      <p className="font-serif text-slate-700 leading-relaxed line-clamp-3 mb-4 flex-1">
                        {city.shortSummary}
                      </p>

                      <div className="flex items-center text-sm font-sans font-semibold text-blue-600 group-hover:text-blue-800">
                        Lire l&rsquo;histoire
                        <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          )}
        </section>

        {/* CTA */}
        <section className="bg-slate-900 text-white py-16">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 className="font-display text-3xl font-bold mb-4">
              Explorez d&apos;autres thèmes
            </h2>
            <p className="font-serif text-lg text-stone-300 mb-8">
              Découvrez les histoires des villes américaines à travers leurs drapeaux
            </p>
            <div className="flex gap-4 justify-center">
              <Link
                href="/explore"
                className="bg-white text-slate-900 px-8 py-3 rounded font-sans font-semibold hover:bg-stone-100 transition"
              >
                Voir la carte
              </Link>
              <Link
                href="/"
                className="border-2 border-white text-white px-8 py-3 rounded font-sans font-semibold hover:bg-white/10 transition"
              >
                Retour à l&apos;accueil
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
