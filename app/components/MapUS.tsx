/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { useEffect, useRef } from 'react';
import maplibregl from 'maplibre-gl';
import statesGeoJson from '../../data/states.json';
import citiesGeoJson from '../../data/cities.json';

export type StateInfo = {
  code: string; // ex: "36"
  name: string; // ex: "New York"
};

type MapUSProps = {
    onStateClick: (state: StateInfo) => void;
};

export default function MapUS({ onStateClick }: MapUSProps) {
    const mapContainerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (!mapContainerRef.current) return;

        const map = new maplibregl.Map({
        container: mapContainerRef.current,
        style: 'https://demotiles.maplibre.org/style.json',
        center: [-98.5795, 39.8283], // centre des US
        zoom: 3,
        });

        map.addControl(new maplibregl.NavigationControl(), 'top-right');

        map.on('load', () => {
        // --- SOURCE DES ÉTATS ---
        map.addSource('us-states', {
            type: 'geojson',
            data: statesGeoJson as any,
        });

        // --- COUCHE REMPLISSAGE ÉTATS ---
        map.addLayer({
            id: 'us-states-fill',
            type: 'fill',
            source: 'us-states',
            paint: {
            'fill-color': '#3b82f6',
            'fill-opacity': 0.25,
            },
        });

        // --- CONTOURS ÉTATS ---
        map.addLayer({
            id: 'us-states-outline',
            type: 'line',
            source: 'us-states',
            paint: {
            'line-color': '#1f2937',
            'line-width': 1,
            },
        });

        // --- COUCHE HOVER SUR LES ÉTATS ---
        map.addLayer({
            id: 'us-states-hover',
            type: 'fill',
            source: 'us-states',
            paint: {
            'fill-color': '#ef4444',
            'fill-opacity': 0.4,
            },
            filter: ['==', ['get', 'STATE'], ''], // rien sélectionné au début
        });

        let hoveredCode: string | null = null;

        // HOVER ÉTAT
        map.on('mousemove', 'us-states-fill', (e) => {
            const feature = e.features?.[0];
            if (!feature) return;

            const code = feature.properties?.STATE as string | undefined;
            if (!code) return;

            if (hoveredCode !== code) {
            hoveredCode = code;
            map.setFilter('us-states-hover', ['==', ['get', 'STATE'], code]);
            map.getCanvas().style.cursor = 'pointer';
            }
        });

        map.on('mouseleave', 'us-states-fill', () => {
            hoveredCode = null;
            map.setFilter('us-states-hover', ['==', ['get', 'STATE'], '']);
            map.getCanvas().style.cursor = '';
        });

        // CLICK ÉTAT + ZOOM
        map.on('click', 'us-states-fill', (e) => {
            const feature: any = e.features?.[0];
            if (!feature) return;

            const code = feature.properties?.STATE as string | undefined;
            const name = feature.properties?.NAME as string | undefined;
            if (!code || !name) return;

            // Calcul des bounds du polygone pour zoomer sur l'État
            const geometry = feature.geometry as any;
            const bounds = new maplibregl.LngLatBounds();

            if (geometry.type === 'Polygon') {
            geometry.coordinates[0].forEach((coord: [number, number]) => {
                bounds.extend(coord);
            });
            } else if (geometry.type === 'MultiPolygon') {
            geometry.coordinates.forEach((polygon: [ [number, number][] ]) => {
                polygon[0].forEach((coord: [number, number]) => {
                bounds.extend(coord);
                });
            });
            }

            if (!bounds.isEmpty()) {
            map.fitBounds(bounds, {
                padding: 80,
                duration: 1200,
            });
            }

            onStateClick({ code, name });
        });

        // --- SOURCE DES GRANDES VILLES ---
        map.addSource('us-cities', {
            type: 'geojson',
            data: citiesGeoJson as any,
        });

        // --- POINTS DES VILLES ---
        map.addLayer({
            id: 'us-cities-points',
            type: 'circle',
            source: 'us-cities',
            paint: {
            'circle-radius': 4,
            'circle-color': '#111827',
            'circle-stroke-color': '#ffffff',
            'circle-stroke-width': 1,
            },
        });

        // --- LABELS DES VILLES ---
        map.addLayer({
            id: 'us-cities-labels',
            type: 'symbol',
            source: 'us-cities',
            layout: {
            'text-field': ['get', 'name'],
            'text-size': 11,
            'text-offset': [0, 1.2],
            'text-anchor': 'top',
            },
            paint: {
            'text-color': '#111827',
            'text-halo-color': '#ffffff',
            'text-halo-width': 1,
            },
        });
        });

        return () => {
        map.remove();
        };
    }, [onStateClick]);

    return <div ref={mapContainerRef} className="w-full h-full" />;
}