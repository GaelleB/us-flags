import {CityFlag, CityTag} from '../../data/flags';
import type { StateInfo } from './MapUS';
import Link from 'next/link';
import TagFilter from './TagFilter';
import TagBadge from './TagBadge';

type Props = {
    selectedState: StateInfo | null;
    flags: CityFlag[];
    selectedTags: CityTag[];
    onTagToggle: (tag: CityTag) => void;
};

export default function StateSidebar({ selectedState, flags, selectedTags, onTagToggle }: Props) {
    if (!selectedState) {
        return (
        <aside className="w-full md:w-80 border-t md:border-t-0 md:border-l border-gray-200 p-4 overflow-y-auto">
            <div className="mb-6">
                <p className="text-sm text-gray-500 text-center mb-4">
                Clique sur un État pour voir ses villes et leurs drapeaux.
                </p>
            </div>

            <div className="border-t border-gray-200 pt-4">
                <TagFilter selectedTags={selectedTags} onTagToggle={onTagToggle} allCities={flags} />
            </div>
        </aside>
        );
    }

    let stateFlags = flags.filter(
        (f) => f.stateCode === selectedState.code
    );

    // Filtrer par tags si des tags sont sélectionnés
    if (selectedTags.length > 0) {
        stateFlags = stateFlags.filter((city) =>
            city.tags?.some((tag) => selectedTags.includes(tag))
        );
    }

    return (
        <aside className="w-full md:w-80 border-t md:border-t-0 md:border-l border-gray-200 p-4 overflow-y-auto flex flex-col gap-4">
            <div>
                <h2 className="text-lg font-semibold">{selectedState.name}</h2>
                <p className="text-xs text-gray-500 uppercase tracking-widest">
                CODE : {selectedState.code}
                </p>
            </div>

            {stateFlags.length === 0 ? (
                <p className="text-sm text-gray-500">
                {selectedTags.length > 0
                    ? "Aucune ville ne correspond aux filtres sélectionnés."
                    : "Pas encore d'histoires de drapeaux pour cet État."}
                </p>
            ) : (
                <ul className="space-y-4">
                {stateFlags.map((city) => (
                    <li key={city.citySlug} className="border-b border-gray-100 pb-3 last:border-0">
                    <div className="mb-2">
                        <p className="text-sm font-semibold font-sans">{city.cityName}</p>
                        {city.tags && city.tags.length > 0 && (
                            <div className="flex flex-wrap gap-1 mt-1.5">
                                {city.tags.slice(0, 2).map((tag) => (
                                    <TagBadge key={tag} tag={tag} size="sm" showIcon={false} />
                                ))}
                            </div>
                        )}
                    </div>
                    <p className="text-xs text-gray-600 line-clamp-2 font-serif mb-2">
                        {city.shortSummary}
                    </p>
                    <Link
                        href={`/us/${selectedState.code}/${city.citySlug}`}
                        className="text-xs text-blue-600 hover:text-blue-800 font-sans font-medium"
                    >
                        Lire l&apos;histoire →
                    </Link>
                    </li>
                ))}
                </ul>
            )}

            <div className="border-t border-gray-200 pt-4 mt-4">
                <TagFilter selectedTags={selectedTags} onTagToggle={onTagToggle} allCities={flags} />
            </div>
        </aside>
    );
}