'use client';

import { getAllTags } from '@/data/tags-config';
import type { CityTag, CityFlag } from '@/data/flags';

type TagFilterProps = {
  selectedTags: CityTag[];
  onTagToggle: (tag: CityTag) => void;
  allCities?: CityFlag[];
};

export default function TagFilter({ selectedTags, onTagToggle, allCities }: TagFilterProps) {
  const allTags = getAllTags();

  // Calculer le nombre de villes par tag
  const getTagCount = (tagId: CityTag): number => {
    if (!allCities) return 0;
    return allCities.filter(city => city.tags?.includes(tagId)).length;
  };

  return (
    <div className="space-y-3">
      <h3 className="font-sans font-semibold text-sm text-slate-700">
        Filtrer par thème
      </h3>

      <div className="flex flex-wrap gap-2">
        {allTags.map((tag) => {
          const isSelected = selectedTags.includes(tag.id);
          const count = getTagCount(tag.id);

          return (
            <button
              key={tag.id}
              onClick={() => onTagToggle(tag.id)}
              className={`inline-flex items-center gap-1.5 rounded-full font-sans font-medium border text-xs px-3 py-1.5 transition-all ${
                isSelected
                  ? `${tag.color} ring-2 ring-offset-1 ring-current`
                  : 'bg-white text-slate-600 border-slate-300 hover:border-slate-400'
              }`}
              title={tag.description}
              aria-pressed={isSelected}
            >
              <span aria-hidden="true">{tag.icon}</span>
              <span>{tag.label}</span>
              {allCities && count > 0 && (
                <span className="opacity-60">({count})</span>
              )}
            </button>
          );
        })}
      </div>

      {selectedTags.length > 0 && (
        <button
          onClick={() => selectedTags.forEach(onTagToggle)}
          className="text-xs text-blue-600 hover:text-blue-800 font-sans font-medium"
        >
          Réinitialiser les filtres
        </button>
      )}
    </div>
  );
}
