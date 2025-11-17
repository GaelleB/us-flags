import { notFound } from 'next/navigation';
import Link from 'next/link';
import { cityFlags } from '../../../../data/flags';

type PageProps = {
    params: {
        stateCode: string;
        citySlug: string;
    };
};

export default function CityFlagPage({ params }: PageProps) {
    const { stateCode, citySlug } = params;

    // On cherche dans les datas la ville correspondante
    const flag = cityFlags.find(
        (f) =>
        f.stateCode === stateCode &&
        f.citySlug === citySlug
    );

    if (!flag) {
        return notFound();
    }

    return (
        <main>
        <Link href="/" className="text-blue-600 text-sm hover:underline">
            ← Retour à la carte
        </Link>

        <header className="mt-6 mb-8">
            <h1 className="text-3xl font-semibold">{flag.cityName}</h1>
            <p className="text-gray-500 text-sm">
            {flag.stateCode} — Histoire du drapeau
            </p>
        </header>

        <section className="mb-8">
            {/* mettre une vraie <Image> */}
            <div className="w-48 h-32 bg-gray-100 rounded flex items-center justify-center mb-4">
            <span className="text-xs text-gray-500">
                {flag.cityName} — drapeau
            </span>
            </div>

            <p className="leading-relaxed whitespace-pre-line text-gray-700">
            {flag.story}
            </p>
        </section>
        </main>
    );
}