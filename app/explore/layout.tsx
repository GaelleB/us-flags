import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Explorer la carte',
  description: "Explorez les 87 villes américaines et leurs drapeaux sur une carte interactive. Cliquez sur un état pour découvrir ses villes.",
  openGraph: {
    title: 'Explorer la carte - Flag Chronicles',
    description: "Explorez les 87 villes américaines et leurs drapeaux sur une carte interactive",
    type: 'website',
  },
};

export default function ExploreLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
