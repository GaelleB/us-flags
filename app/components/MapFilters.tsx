'use client';

import { useState } from 'react';

export type FilterCategory = 'all' | 'history' | 'culture' | 'modern' | 'coastal' | 'midwest';

type MapFiltersProps = {
 onFilterChange: (filter: FilterCategory) => void;
};

const filters: { value: FilterCategory; label: string; icon: string }[] = [
 { value: 'all', label: 'Toutes', icon: '🗺️' },
 { value: 'history', label: 'Histoire', icon: '🏛️' },
 { value: 'culture', label: 'Culture', icon: '🎭' },
 { value: 'modern', label: 'Moderne', icon: '🏙️' },
 { value: 'coastal', label: 'Côtières', icon: '🌊' },
 { value: 'midwest', label: 'Midwest', icon: '🌾' },
];

export default function MapFilters({ onFilterChange }: MapFiltersProps) {
 const [active, setActive] = useState<FilterCategory>('all');

 const handleFilter = (filter: FilterCategory) => {
 setActive(filter);
 onFilterChange(filter);
 };

 return (
 <div className="flex flex-wrap gap-2">
 {filters.map((filter) => (
 <button
 key={filter.value}
 onClick={() => handleFilter(filter.value)}
 className={`px-4 py-2 rounded-full font-sans text-sm font-medium transition-all ${
 active === filter.value
 ? 'bg-blue-600 text-white shadow-md'
 : 'bg-white text-slate-700 hover:bg-stone-100 border border-stone-200 }`}
 >
 <span className="mr-2">{filter.icon}</span>
 {filter.label}
 </button>
 ))}
 </div>
 );
}
