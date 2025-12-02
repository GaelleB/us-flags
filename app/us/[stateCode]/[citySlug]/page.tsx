import { notFound } from 'next/navigation';
import Link from 'next/link';
import { cityFlags } from '@/data/flags';

type PageProps = {
  params: Promise<{
    stateCode: string;
    citySlug: string;
  }>;
};

export default async function CityFlagPage({ params }: PageProps) {
  const { stateCode, citySlug } = await params;

  const cityFlag = cityFlags.find(
    (city) => city.stateCode === stateCode && city.citySlug === citySlug
  );

  if (!cityFlag) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <Link
          href="/"
          className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6"
        >
          ← Retour à la carte
        </Link>

        <article className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {cityFlag.cityName}
          </h1>

          <div className="mb-8">
            <div className="w-full max-w-2xl mx-auto bg-gray-200 rounded-lg overflow-hidden aspect-[3/2] flex items-center justify-center">
              {/* Placeholder for flag image - will be replaced with actual images later */}
              <span className="text-gray-500 text-sm">
                {cityFlag.cityName} Flag
              </span>
            </div>
            <p className="text-xs text-gray-500 text-center mt-2">
              Image: {cityFlag.flagImage}
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 font-medium mb-6">
              {cityFlag.shortSummary}
            </p>

            <div className="text-gray-600 leading-relaxed whitespace-pre-line">
              {cityFlag.story}
            </div>
          </div>
        </article>
      </div>
    </main>
  );
}
