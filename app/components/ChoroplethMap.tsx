'use client';

import { useEffect, useRef, useMemo } from 'react';
import maplibregl from 'maplibre-gl';
import statesGeoJson from '../../data/states.json';
import type { CityFlag } from '@/data/flags';

type ChoroplethMapProps = {
  cities: CityFlag[];
};

export default function ChoroplethMap({ cities }: ChoroplethMapProps) {
  const mapContainerRef = useRef<HTMLDivElement | null>(null);

  // Calculer l'année moyenne d'adoption par état
  const stateAverages = useMemo(() => {
    const stateYears = new Map<string, number[]>();
    cities.forEach(city => {
      if (city.adoptionYear) {
        if (!stateYears.has(city.stateCode)) {
          stateYears.set(city.stateCode, []);
        }
        stateYears.get(city.stateCode)!.push(city.adoptionYear);
      }
    });

    const averages = new Map<string, number>();
    stateYears.forEach((years, stateCode) => {
      const avg = years.reduce((a, b) => a + b, 0) / years.length;
      averages.set(stateCode, Math.round(avg));
    });

    return averages;
  }, [cities]);

  // Préparer les données de légende
  const legend = useMemo(() => {
    const getColorForLegend = (year: number): number => {
      if (year < 1900) return 0;
      if (year < 1930) return 1;
      if (year < 1960) return 2;
      if (year < 1990) return 3;
      return 4;
    };

    const legendData = [
      { color: '#1e3a8a', label: 'Avant 1900', count: 0 },
      { color: '#3b82f6', label: '1900-1929', count: 0 },
      { color: '#60a5fa', label: '1930-1959', count: 0 },
      { color: '#93c5fd', label: '1960-1989', count: 0 },
      { color: '#dbeafe', label: '1990+', count: 0 },
      { color: '#e5e7eb', label: 'Pas de données', count: 0 },
    ];

    stateAverages.forEach(year => {
      legendData[getColorForLegend(year)].count++;
    });

    // États sans données
    legendData[5].count = 50 - stateAverages.size;

    return legendData;
  }, [stateAverages]);

  useEffect(() => {
    if (!mapContainerRef.current) return;

    // Définir les plages de couleurs
    const getColor = (year: number | undefined): string => {
      if (!year) return '#e5e7eb'; // gris pour pas de données
      if (year < 1900) return '#1e3a8a'; // bleu foncé
      if (year < 1930) return '#3b82f6'; // bleu
      if (year < 1960) return '#60a5fa'; // bleu clair
      if (year < 1990) return '#93c5fd'; // bleu très clair
      return '#dbeafe'; // bleu pâle
    };

    const map = new maplibregl.Map({
      container: mapContainerRef.current,
      style: 'https://demotiles.maplibre.org/style.json',
      center: [-98.5795, 39.8283],
      zoom: 3,
    });

    map.on('load', () => {
      map.addSource('us-states', {
        type: 'geojson',
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        data: statesGeoJson as any,
      });

      map.addLayer({
        id: 'states-choropleth',
        type: 'fill',
        source: 'us-states',
        paint: {
          'fill-color': [
            'case',
            ...Array.from(stateAverages.entries()).flatMap(([code, year]) => [
              ['==', ['get', 'STATE'], code],
              getColor(year),
            ]),
            '#e5e7eb', // couleur par défaut
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
          ] as any,
          'fill-opacity': 0.8,
        },
      });

      map.addLayer({
        id: 'states-borders',
        type: 'line',
        source: 'us-states',
        paint: {
          'line-color': '#1f2937',
          'line-width': 1,
        },
      });

      // Tooltip au survol
      map.on('mousemove', 'states-choropleth', (e) => {
        if (e.features && e.features.length > 0) {
          const feature = e.features[0];
          const stateCode = feature.properties?.STATE;
          const avgYear = stateAverages.get(stateCode);

          if (avgYear) {
            map.getCanvas().style.cursor = 'pointer';
            // Vous pouvez ajouter un popup ici si souhaité
          }
        }
      });

      map.on('mouseleave', 'states-choropleth', () => {
        map.getCanvas().style.cursor = '';
      });
    });

    return () => {
      map.remove();
    };
  }, [stateAverages]);

  return (
    <div className="space-y-4">
      <div className="bg-white rounded-lg overflow-hidden shadow-lg">
        <div ref={mapContainerRef} className="w-full h-[500px]" />
      </div>

      {/* Légende */}
      <div className="bg-white rounded-lg p-6 shadow-md">
        <h4 className="font-sans font-semibold text-sm text-slate-700 mb-3">
          Légende : Année moyenne d&apos;adoption par état
        </h4>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {legend.map((item, index) => (
            <div key={index} className="flex items-center gap-2">
              <div
                className="w-6 h-6 rounded border border-slate-300"
                style={{ backgroundColor: item.color }}
              ></div>
              <div className="flex-1">
                <div className="text-xs font-sans font-medium text-slate-700">
                  {item.label}
                </div>
                <div className="text-xs text-slate-500">
                  {item.count} {item.count > 1 ? 'états' : 'état'}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
