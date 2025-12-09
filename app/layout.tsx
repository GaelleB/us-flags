import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display, Lora } from "next/font/google";
import "./globals.css";
import "maplibre-gl/dist/maplibre-gl.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Stars, Stripes & Stories - Histoires des drapeaux des villes américaines",
    template: "%s | Stars, Stripes & Stories",
  },
  description: "L'histoire cachée des villes américaines racontée à travers leurs drapeaux. 87 villes, 87 drapeaux, 87 récits à découvrir sur une carte interactive.",
  keywords: ["drapeaux américains", "villes américaines", "histoire américaine", "vexillologie", "culture américaine", "drapeaux municipaux"],
  authors: [{ name: "Gaëlle B" }],
  creator: "Gaëlle B",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://us-flags.vercel.app",
    title: "Stars, Stripes & Stories - Histoires des drapeaux des villes américaines",
    description: "L'histoire cachée des villes américaines racontée à travers leurs drapeaux. 87 villes, 87 drapeaux, 87 récits.",
    siteName: "Stars, Stripes & Stories",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Stars, Stripes & Stories - Drapeaux des villes américaines",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Stars, Stripes & Stories",
    description: "L'histoire cachée des villes américaines racontée à travers leurs drapeaux",
    creator: "@votre_twitter",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} ${lora.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
