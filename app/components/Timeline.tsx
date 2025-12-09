'use client';

import { useState } from 'react';
import Link from 'next/link';
import type { CityFlag } from '@/data/flags';

type TimelineProps = {
  cities: CityFlag[];
};

export default function Timeline({ cities }: TimelineProps) {
  const [selectedDecade, setSelectedDecade] = useState<number | null>(null);

  // Filtrer les villes avec années d'adoption
  const citiesWithYears = cities.filter(city => city.adoptionYear);

  // Grouper par décennies
  const decades = new Map<number, CityFlag[]>();
  citiesWithYears.forEach(city => {
    const decade = Math.floor(city.adoptionYear! / 10) * 10;
    if (!decades.has(decade)) {
      decades.set(decade, []);
    }
    decades.get(decade)!.push(city);
  });

  const sortedDecades = Array.from(decades.keys()).sort((a, b) => a - b);

  const filteredCities = selectedDecade
    ? decades.get(selectedDecade) || []
    : citiesWithYears;

  return (
    <div className="space-y-8">
      {/* Sélecteur de décennie */}
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => setSelectedDecade(null)}
          className={`px-4 py-2 rounded font-sans font-medium text-sm transition ${
            selectedDecade === null
              ? 'bg-slate-900 text-white'
              : 'bg-white text-slate-700 border border-slate-300 hover:border-slate-400'
          }`}
        >
          Toutes les périodes
        </button>
        {sortedDecades.map(decade => (
          <button
            key={decade}
            onClick={() => setSelectedDecade(decade)}
            className={`px-4 py-2 rounded font-sans font-medium text-sm transition ${
              selectedDecade === decade
                ? 'bg-slate-900 text-white'
                : 'bg-white text-slate-700 border border-slate-300 hover:border-slate-400'
            }`}
          >
            {decade}s ({decades.get(decade)!.length})
          </button>
        ))}
      </div>

      {/* Timeline visuelle */}
      <div className="relative">
        {/* Ligne centrale */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-slate-200 h-full"></div>

        <div className="space-y-12">
          {filteredCities
            .sort((a, b) => (a.adoptionYear || 0) - (b.adoptionYear || 0))
            .map((city, index) => (
              <div
                key={city.citySlug}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'justify-start' : 'justify-end'
                }`}
              >
                {/* Point sur la timeline */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg z-10"></div>

                {/* Carte */}
                <Link
                  href={`/us/${city.stateCode}/${city.citySlug}`}
                  className={`w-5/12 bg-white rounded-lg p-4 shadow-md hover:shadow-xl transition group ${
                    index % 2 === 0 ? 'text-right' : 'text-left'
                  }`}
                >
                  <div className="flex items-center gap-3 mb-2">
                    {index % 2 === 0 ? (
                      <>
                        <div className="flex-1">
                          <h3 className="font-display text-lg font-bold text-slate-900 group-hover:text-blue-600 transition">
                            {city.cityName}
                          </h3>
                        </div>
                        <div className="text-2xl font-display font-bold text-blue-600">
                          {city.adoptionYear}
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="text-2xl font-display font-bold text-blue-600">
                          {city.adoptionYear}
                        </div>
                        <div className="flex-1">
                          <h3 className="font-display text-lg font-bold text-slate-900 group-hover:text-blue-600 transition">
                            {city.cityName}
                          </h3>
                        </div>
                      </>
                    )}
                  </div>
                  <p className="text-xs text-slate-600 font-serif line-clamp-2">
                    {city.shortSummary}
                  </p>
                </Link>
              </div>
            ))}
        </div>
      </div>

      {filteredCities.length === 0 && (
        <p className="text-center text-slate-600 py-12">
          Aucune ville avec date d&apos;adoption disponible pour cette période.
        </p>
      )}
    </div>
  );
}
