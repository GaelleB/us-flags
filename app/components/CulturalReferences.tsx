import { CulturalReference } from '@/data/flags';

type Props = {
  music?: CulturalReference[];
  books?: CulturalReference[];
  films?: CulturalReference[];
  series?: CulturalReference[];
};

const icons = {
  music: '🎵',
  books: '📚',
  films: '🎬',
  series: '📺',
};

const titles = {
  music: 'Musique',
  books: 'Livres',
  films: 'Films',
  series: 'Séries',
};

type Category = keyof typeof icons;

export default function CulturalReferences({ music, books, films, series }: Props) {
  const categories: { key: Category; items: CulturalReference[] | undefined }[] = [
    { key: 'music', items: music },
    { key: 'books', items: books },
    { key: 'films', items: films },
    { key: 'series', items: series },
  ];

  const hasContent = categories.some(cat => cat.items && cat.items.length > 0);

  if (!hasContent) return null;

  return (
    <section className="max-w-5xl mx-auto px-6 py-16 bg-white">
      <div className="mb-12">
        <h2 className="font-display text-4xl font-bold text-slate-900 mb-3">
          Univers culturel
        </h2>
        <p className="font-serif text-lg text-slate-600">
          Musique, livres, films et séries qui capturent l&rsquo;âme de cette ville
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {categories.map(({ key, items }) => {
          if (!items || items.length === 0) return null;

          return (
            <div key={key} className="space-y-4">
              <h3 className="font-display text-2xl font-bold text-slate-900 flex items-center gap-3">
                <span className="text-3xl">{icons[key]}</span>
                {titles[key]}
              </h3>

              <ul className="space-y-3">
                {items.map((item, index) => (
                  <li
                    key={index}
                    className="bg-stone-50 rounded-lg p-4 hover:bg-stone-100 transition-colors"
                  >
                    <div className="flex items-start gap-3">
                      <div className="shrink-0 w-1 h-full bg-blue-600 rounded"></div>
                      <div className="flex-1">
                        <div className="font-sans font-semibold text-slate-900 mb-1">
                          {item.title}
                          {item.year && (
                            <span className="text-slate-500 font-normal ml-2">
                              ({item.year})
                            </span>
                          )}
                        </div>
                        <div className="font-sans text-sm text-slate-600 mb-1">
                          {item.creator}
                        </div>
                        {item.note && (
                          <div className="font-serif text-sm text-slate-500 italic mt-2">
                            {item.note}
                          </div>
                        )}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>

      {/* Style NYT : citation culturelle */}
      <div className="mt-12 py-8 px-6 bg-slate-900 text-white rounded-lg">
        <p className="font-serif text-lg italic text-center">
          &ldquo;Une ville se raconte autant par ses drapeaux que par ses chansons, ses romans et ses écrans.&rdquo;
        </p>
      </div>
    </section>
  );
}
