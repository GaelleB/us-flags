'use client';

import { useEffect, useRef } from 'react';
import maplibregl from 'maplibre-gl';
// allow importing GeoJSON file without a dedicated module declaration
import statesGeoJson from '../../data/states.json';

export type StateInfo = {
  code: string; // ex: "01"
  name: string; // ex: "Alabama"
};

type MapUSProps = {
    onStateClick: (state: StateInfo) => void;
};

export default function MapUS({ onStateClick }: MapUSProps) {
    const mapContainerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (!mapContainerRef.current) return;

        // Initialisation de la carte MapLibre
        const map = new maplibregl.Map({
        container: mapContainerRef.current,
        style: 'https://demotiles.maplibre.org/style.json', // style de base gratuit
        center: [-98.5795, 39.8283], // centre géographique approximatif des US
        zoom: 3,
        });

        // Zoom / rotation controls
        map.addControl(new maplibregl.NavigationControl(), 'top-right');

        map.on('load', () => {
        // --- 1) Ajout de la SOURCE GeoJSON ---
        map.addSource('us-states', {
            type: 'geojson',
            data: statesGeoJson as GeoJSON.FeatureCollection<GeoJSON.Geometry>,
        });

        // --- 2) Couche principale : remplissage bleu ---
        map.addLayer({
            id: 'us-states-fill',
            type: 'fill',
            source: 'us-states',
            paint: {
            'fill-color': '#3b82f6',
            'fill-opacity': 0.25,
            },
        });

        // --- 3) Contour des États ---
        map.addLayer({
            id: 'us-states-outline',
            type: 'line',
            source: 'us-states',
            paint: {
            'line-color': '#1f2937',
            'line-width': 1,
            },
        });

        // --- 4) Couche pour le HOVER (surbrillance rouge) ---
        map.addLayer({
            id: 'us-states-hover',
            type: 'fill',
            source: 'us-states',
            paint: {
            'fill-color': '#ef4444',
            'fill-opacity': 0.4,
            },
            filter: ['==', ['get', 'STATE'], ''], // aucun État sélectionné au début
        });

        let hoveredCode: string | null = null;

        // ⭐ Hover : colorer l'État rouge
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

        // Fin du hover
        map.on('mouseleave', 'us-states-fill', () => {
            hoveredCode = null;
            map.setFilter('us-states-hover', ['==', ['get', 'STATE'], '']);
            map.getCanvas().style.cursor = '';
        });

        // ⭐ Click : envoyer les infos de l'État sélectionné
        map.on('click', 'us-states-fill', (e) => {
            const feature = e.features?.[0];
            if (!feature) return;

            const code = feature.properties?.STATE as string | undefined;
            const name = feature.properties?.NAME as string | undefined;

            if (!code || !name) return;

            onStateClick({
            code,
            name,
            });
        });
        });

        // Clean-up à la destruction du composant
        return () => {
        map.remove();
        };
    }, [onStateClick]);

    // Container HTML
    return <div ref={mapContainerRef} className="w-full h-full" />;
}