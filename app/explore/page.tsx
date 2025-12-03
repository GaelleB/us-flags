'use client';

import { useState } from 'react';
import MapUS, { StateInfo } from '../components/MapUS';
import StateSidebar from '../components/StateSidebar';
import { cityFlags } from '../../data/flags';

export default function HomePage() {
  const [selectedState, setSelectedState] = useState<StateInfo | null>(null);

  return (
    <main className="w-screen h-screen flex flex-col md:flex-row">
      {/* Carte à gauche */}
      <section className="flex-1">
        <MapUS onStateClick={setSelectedState} />
      </section>

      {/* Sidebar à droite */}
      <StateSidebar selectedState={selectedState} flags={cityFlags} />
    </main>
  );
}