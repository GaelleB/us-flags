'use client';

import { useState } from 'react';
import MapUS, { StateInfo } from '../components/MapUS';
import StateSidebar from '../components/StateSidebar';
import { cityFlags, CityTag } from '../../data/flags';

export default function ExplorePage() {
  const [selectedState, setSelectedState] = useState<StateInfo | null>(null);
  const [selectedTags, setSelectedTags] = useState<CityTag[]>([]);

  const handleTagToggle = (tag: CityTag) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  return (
    <main id="main-content" className="w-screen h-screen flex flex-col md:flex-row">
      {/* Carte à gauche */}
      <section
        aria-label="Carte interactive des États-Unis"
        role="region"
        className="flex-1"
      >
        <MapUS onStateClick={setSelectedState} />
      </section>

      {/* Sidebar à droite */}
      <StateSidebar
        selectedState={selectedState}
        flags={cityFlags}
        selectedTags={selectedTags}
        onTagToggle={handleTagToggle}
      />
    </main>
  );
}