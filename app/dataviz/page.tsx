import Link from 'next/link';
import { cityFlags } from '@/data/flags';
import Timeline from '../components/Timeline';
import DatavizStats from '../components/DatavizStats';
import ChoroplethMap from '../components/ChoroplethMap';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Datavisualisations - Stars, Stripes & Stories',
  description: 'Explorez les données des drapeaux des villes américaines à travers des visualisations interactives : timeline, statistiques et carte choroplèthe.',
  openGraph: {
    title: 'Datavisualisations - Stars, Stripes & Stories',
    description: 'Timeline, statistiques et carte choroplèthe des drapeaux américains',
  },
};

export default function DatavizPage() {
  return (
    <>
      {/* Navigation */}
      <nav aria-label="Navigation principale" className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
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
          <div className="max-w-7xl mx-auto px-6 pt-16 pb-12">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-5xl" aria-hidden="true">📊</span>
              <h1 className="font-display text-5xl md:text-6xl font-bold text-slate-900">
                Datavisualisations
              </h1>
            </div>

            <p className="font-serif text-2xl text-slate-700 leading-relaxed max-w-4xl">
              Explorez les données des 87 drapeaux de villes américaines à travers des visualisations interactives.
            </p>
          </div>
        </section>

        {/* Statistiques */}
        <section className="max-w-7xl mx-auto px-6 py-16">
          <div className="mb-12">
            <h2 className="font-display text-4xl font-bold text-slate-900 mb-3">
              Statistiques
            </h2>
            <div className="w-24 h-1 bg-slate-900"></div>
          </div>

          <DatavizStats cities={cityFlags} />
        </section>

        {/* Carte Choroplèthe */}
        <section className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-12">
              <h2 className="font-display text-4xl font-bold text-slate-900 mb-3">
                Carte choroplèthe
              </h2>
              <div className="w-24 h-1 bg-slate-900 mb-4"></div>
              <p className="font-serif text-lg text-slate-700 max-w-3xl">
                Visualisation des années moyennes d&apos;adoption des drapeaux par état.
                Les couleurs plus foncées représentent les drapeaux les plus anciens.
              </p>
            </div>

            <ChoroplethMap cities={cityFlags} />
          </div>
        </section>

        {/* Timeline */}
        <section className="max-w-7xl mx-auto px-6 py-16">
          <div className="mb-12">
            <h2 className="font-display text-4xl font-bold text-slate-900 mb-3">
              Timeline historique
            </h2>
            <div className="w-24 h-1 bg-slate-900 mb-4"></div>
            <p className="font-serif text-lg text-slate-700 max-w-3xl">
              Parcourez l&apos;histoire des drapeaux américains à travers les décennies.
              Cliquez sur une période pour filtrer.
            </p>
          </div>

          <Timeline cities={cityFlags} />
        </section>

        {/* CTA */}
        <section className="bg-slate-900 text-white py-16">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 className="font-display text-3xl font-bold mb-4">
              Explorez les histoires
            </h2>
            <p className="font-serif text-lg text-stone-300 mb-8">
              Découvrez les récits derrière chaque drapeau
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
