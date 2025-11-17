'use client';

import MapUS from './components/MapUS';

export default function HomePage() {
  return (
    <main className="w-screen h-screen">
      <MapUS onStateClick={(state) => console.log(state)} />
    </main>
  );
}
