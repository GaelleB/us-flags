import Link from 'next/link';
import { cityFlags } from '../data/flags';

export default function HomePage() {
  // Featured cities pour la homepage
  const featuredCities = [
    cityFlags.find(c => c.citySlug === 'chicago'),
    cityFlags.find(c => c.citySlug === 'new-orleans'),
    cityFlags.find(c => c.citySlug === 'detroit'),
  ].filter(Boolean);

  // Villes par thème
  const phoenixCities = cityFlags.filter(c =>
    ['chicago', 'san-francisco', 'detroit', 'atlanta'].includes(c.citySlug)
  );

  const musicalCities = cityFlags.filter(c =>
    ['new-orleans', 'memphis', 'nashville', 'kansas-city'].includes(c.citySlug)
  );

  return (
    <main className="min-h-screen bg-stone-50">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-b from-slate-900 to-slate-800 text-white">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=1920')] bg-cover bg-center opacity-20"></div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <h1 className="font-display text-6xl md:text-8xl font-bold mb-6 leading-tight">
            Stars, Stripes<br/>& Stories
          </h1>

          <p className="font-serif text-xl md:text-2xl text-stone-200 mb-8 max-w-3xl mx-auto leading-relaxed">
            L'histoire cachée des villes américaines racontée à travers leurs drapeaux
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
                {/* Placeholder image */}
                <div className="h-64 bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center">
                  <span className="text-slate-600 text-sm font-mono">
                    {city!.cityName} Flag
                  </span>
                </div>

                <div className="p-6">
                  <h3 className="font-display text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition">
                    {city!.cityName}
                  </h3>

                  <p className="font-serif text-slate-700 leading-relaxed line-clamp-3">
                    {city!.shortSummary}
                  </p>

                  <div className="mt-4 flex items-center text-sm font-sans font-semibold text-blue-600 group-hover:text-blue-800">
                    Lire l'histoire
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

      {/* Thematic Sections */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <h2 className="font-display text-4xl font-bold text-slate-900 mb-4">
              Villes Phénix
            </h2>
            <p className="font-serif text-lg text-slate-600 max-w-2xl">
              Ces villes ont brûlé, tremblé, décliné... et sont ressurgies de leurs cendres
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {phoenixCities.map((city) => (
              <Link
                key={city.citySlug}
                href={`/us/${city.stateCode}/${city.citySlug}`}
                className="group"
              >
                <div className="aspect-square bg-gradient-to-br from-orange-100 to-red-100 rounded-lg flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                  <span className="text-4xl">🔥</span>
                </div>
                <h3 className="font-display text-xl font-bold text-slate-900 group-hover:text-blue-600 transition">
                  {city.cityName}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <h2 className="font-display text-4xl font-bold mb-4">
              Capitales de la Musique
            </h2>
            <p className="font-serif text-lg text-stone-300 max-w-2xl">
              Du jazz au blues, du country au rock, ces villes ont créé la bande-son de l'Amérique
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {musicalCities.map((city) => (
              <Link
                key={city.citySlug}
                href={`/us/${city.stateCode}/${city.citySlug}`}
                className="group"
              >
                <div className="aspect-square bg-gradient-to-br from-purple-900 to-blue-900 rounded-lg flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                  <span className="text-4xl">🎵</span>
                </div>
                <h3 className="font-display text-xl font-bold group-hover:text-blue-400 transition">
                  {city.cityName}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="max-w-4xl mx-auto px-6 py-20 text-center">
        <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 mb-6">
          33 villes, 33 histoires
        </h2>
        <p className="font-serif text-xl text-slate-600 mb-8">
          Explorez la carte interactive et découvrez comment chaque drapeau raconte l'identité unique d'une ville
        </p>
        <Link
          href="/explore"
          className="inline-block bg-slate-900 text-white px-10 py-4 rounded font-sans font-semibold hover:bg-slate-800 transition text-lg"
        >
          Explorer toutes les villes →
        </Link>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-stone-400 py-12">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="font-sans text-sm">
            Un projet éditorial par{' '}
            <a href="https://github.com/GaelleB" className="text-white hover:underline">
              Gaëlle
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
