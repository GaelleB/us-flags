// components/StateSidebar.tsx

import {CityFlag} from '../../data/flags';
import type { StateInfo } from './MapUS';

type Props = {
    selectedState: StateInfo | null;
    flags: CityFlag[];
};

export default function StateSidebar({ selectedState, flags }: Props) {
    if (!selectedState) {
        return (
        <aside className="w-full md:w-80 border-t md:border-t-0 md:border-l border-gray-200 p-4 flex items-center justify-center">
            <p className="text-sm text-gray-500 text-center">
            Clique sur un État pour voir les villes et leurs drapeaux.
            </p>
        </aside>
        );
    }

    // On filtre les villes qui appartiennent à cet État
    const stateFlags = flags.filter(
        (f) => f.stateCode === selectedState.code
    );

    return (
        <aside className="w-full md:w-80 border-t md:border-t-0 md:border-l border-gray-200 p-4 flex flex-col gap-4">
        <div>
            <h2 className="text-lg font-semibold">{selectedState.name}</h2>
            <p className="text-xs text-gray-500 uppercase tracking-widest">
            CODE : {selectedState.code}
            </p>
        </div>

        {stateFlags.length === 0 ? (
            <p className="text-sm text-gray-500">
            Pas encore d&apos;histoires de drapeaux pour cet État.
            </p>
        ) : (
            <ul className="space-y-3">
            {stateFlags.map((city) => (
                <li key={city.citySlug} className="flex items-center gap-3">
                <div className="w-10 h-6 rounded overflow-hidden bg-gray-100 flex items-center justify-center">
                    {/* plus tard: tu remplacerais ça par un <Image /> */}
                    <span className="text-[9px] text-gray-500 text-center px-1">
                    {city.cityName}
                    </span>
                </div>
                <div className="flex-1">
                    <p className="text-sm font-medium">{city.cityName}</p>
                    <p className="text-xs text-gray-500 line-clamp-2">
                    {city.shortSummary}
                    </p>
                    {/* Le lien vers la future page "histoire détaillée" (on le fera après) */}
                    {/* <Link href={`/us/${selectedState.code}/${city.citySlug}`}> */}
                    {/*   ... */}
                    {/* </Link> */}
                </div>
                </li>
            ))}
            </ul>
        )}
        </aside>
    );
}