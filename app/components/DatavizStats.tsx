'use client';

import type { CityFlag } from '@/data/flags';
import { getAllTags } from '@/data/tags-config';

type DatavizStatsProps = {
  cities: CityFlag[];
};

export default function DatavizStats({ cities }: DatavizStatsProps) {
  const allTags = getAllTags();

  // Stats par tag
  const tagStats = allTags.map(tag => ({
    ...tag,
    count: cities.filter(city => city.tags?.includes(tag.id)).length,
  })).sort((a, b) => b.count - a.count);

  // Stats par décennie
  const citiesWithYears = cities.filter(city => city.adoptionYear);
  const decadeStats = new Map<number, number>();
  citiesWithYears.forEach(city => {
    const decade = Math.floor(city.adoptionYear! / 10) * 10;
    decadeStats.set(decade, (decadeStats.get(decade) || 0) + 1);
  });

  const maxDecadeCount = Math.max(...Array.from(decadeStats.values()));

  return (
    <div className="grid md:grid-cols-2 gap-8">
      {/* Stats par thème */}
      <div className="bg-white rounded-lg p-6 shadow-md">
        <h3 className="font-display text-2xl font-bold text-slate-900 mb-6">
          Répartition par thème
        </h3>
        <div className="space-y-3">
          {tagStats.slice(0, 8).map(tag => {
            const percentage = (tag.count / cities.length) * 100;
            return (
              <div key={tag.id}>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-sans font-medium text-slate-700">
                    <span aria-hidden="true">{tag.icon}</span> {tag.label}
                  </span>
                  <span className="text-sm font-sans font-bold text-slate-900">
                    {tag.count}
                  </span>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-2">
                  <div
                    className="bg-blue-600 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${percentage}%` }}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Stats par décennie */}
      <div className="bg-white rounded-lg p-6 shadow-md">
        <h3 className="font-display text-2xl font-bold text-slate-900 mb-6">
          Adoption par décennie
        </h3>
        <div className="space-y-3">
          {Array.from(decadeStats.entries())
            .sort(([a], [b]) => a - b)
            .map(([decade, count]) => {
              const percentage = (count / maxDecadeCount) * 100;
              return (
                <div key={decade}>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-sans font-medium text-slate-700">
                      {decade}s
                    </span>
                    <span className="text-sm font-sans font-bold text-slate-900">
                      {count} {count > 1 ? 'drapeaux' : 'drapeau'}
                    </span>
                  </div>
                  <div className="w-full bg-slate-100 rounded-full h-2">
                    <div
                      className="bg-green-600 h-2 rounded-full transition-all duration-500"
                      style={{ width: `${percentage}%` }}
                    ></div>
                  </div>
                </div>
              );
            })}
        </div>
        {citiesWithYears.length < cities.length && (
          <p className="text-xs text-slate-500 mt-4 font-sans">
            {cities.length - citiesWithYears.length} villes sans date d&apos;adoption connue
          </p>
        )}
      </div>
    </div>
  );
}
