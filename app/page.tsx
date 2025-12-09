import Link from 'next/link';
import Image from 'next/image';
import { cityFlags } from '../data/flags';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Stars, Stripes & Stories - Histoires des drapeaux des villes américaines',
  description: "L'histoire cachée des villes américaines racontée à travers leurs drapeaux. Découvrez Chicago, New Orleans, Detroit et 84 autres villes.",
  openGraph: {
    title: 'Stars, Stripes & Stories',
    description: "L'histoire cachée des villes américaines racontée à travers leurs drapeaux",
    type: 'website',
  },
};

export default function HomePage() {
  // Featured cities pour la homepage
  const featuredCities = [
    cityFlags.find(c => c.citySlug === 'chicago'),
    cityFlags.find(c => c.citySlug === 'new-orleans'),
    cityFlags.find(c => c.citySlug === 'detroit'),
  ].filter(Boolean);

  return (
    <main className="min-h-screen bg-stone-50">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-linear-to-b from-slate-900 to-slate-800 text-white">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=1920')] bg-cover bg-center opacity-20"></div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <h1 className="font-display text-6xl md:text-8xl font-bold mb-6 leading-tight">
            Stars, Stripes<br/>& Stories
          </h1>

          <p className="font-serif text-xl md:text-2xl text-stone-200 mb-8 max-w-3xl mx-auto leading-relaxed">
            L&rsquo;histoire cachée des villes américaines racontée à travers leurs drapeaux
          </p>

          <div className="flex gap-4 justify-center">
            <Link
              href="/explore"
              className="bg-white text-slate-900 px-8 py-4 rounded font-sans font-semibold hover:bg-stone-100 transition"
            >
              Explorer la carte
            </Link>
            <Link
              href="#featured"
              className="border-2 border-white text-white px-8 py-4 rounded font-sans font-semibold hover:bg-white/10 transition"
            >
              Découvrir les histoires
            </Link>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* Featured Stories */}
      <section id="featured" className="max-w-7xl mx-auto px-6 py-20">
        <div className="mb-12">
          <h2 className="font-display text-5xl font-bold text-slate-900 mb-4">
            Histoires à la une
          </h2>
          <div className="w-24 h-1 bg-slate-900"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {featuredCities.map((city) => (
            <Link
              key={city!.citySlug}
              href={`/us/${city!.stateCode}/${city!.citySlug}`}
              className="group"
            >
              <article className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300">
                {/* Flag image */}
                <div className="h-64 bg-white flex items-center justify-center overflow-hidden">
                  <Image
                    src={city!.flagImage}
                    alt={`Drapeau de ${city!.cityName}`}
                    width={400}
                    height={256}
                    className="w-full h-full object-contain p-4"
                    unoptimized
                  />
                </div>

                <div className="p-6">
                  <h3 className="font-display text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition">
                    {city!.cityName}
                  </h3>

                  <p className="font-serif text-slate-700 leading-relaxed line-clamp-3">
                    {city!.shortSummary}
                  </p>

                  <div className="mt-4 flex items-center text-sm font-sans font-semibold text-blue-600 group-hover:text-blue-800">
                    Lire l&rsquo;histoire
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12 text-center">
            <div>
              <div className="text-6xl font-display font-bold text-slate-900 mb-3">
                {cityFlags.length}
              </div>
              <p className="font-serif text-lg text-slate-600">
                Villes américaines
              </p>
            </div>
            <div>
              <div className="text-6xl font-display font-bold text-slate-900 mb-3">
                {new Set(cityFlags.map(c => c.stateCode)).size}
              </div>
              <p className="font-serif text-lg text-slate-600">
                États explorés
              </p>
            </div>
            <div>
              <div className="text-6xl font-display font-bold text-slate-900 mb-3">
                ∞
              </div>
              <p className="font-serif text-lg text-slate-600">
                Histoires à raconter
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final - Large and impactful */}
      <section className="relative bg-linear-to-br from-slate-900 via-slate-800 to-blue-900 py-32 overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <h2 className="font-display text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
            Explorez la carte<br/>interactive
          </h2>
          <p className="font-serif text-xl md:text-2xl text-stone-200 mb-12 max-w-3xl mx-auto leading-relaxed">
            Découvrez comment chaque drapeau raconte l&rsquo;identité unique d&rsquo;une ville américaine
          </p>
          <Link
            href="/explore"
            className="inline-flex items-center gap-3 bg-white text-slate-900 px-12 py-5 rounded-lg font-sans font-bold hover:bg-stone-100 transition text-lg shadow-2xl"
          >
            <span>Voir la carte</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-stone-400 py-12">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="font-sans text-sm">
            Un projet éditorial par{' '}
            <a href="https://github.com/GaelleB" className="text-white hover:underline">
              Gaëlle B
            </a>
          </p>
          <p className="font-sans text-xs mt-2">
            Sources : Archives municipales, recherches historiques, données démographiques
          </p>
        </div>
      </footer>
    </main>
  );
}
