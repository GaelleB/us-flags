import Link from 'next/link';

export default function SkipLink() {
  return (
    <Link
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] bg-slate-900 text-white px-6 py-3 rounded font-sans font-semibold focus:outline-none focus:ring-4 focus:ring-blue-500"
    >
      Aller au contenu principal
    </Link>
  );
}
