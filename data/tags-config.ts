import type { CityTag } from './flags';

export type TagInfo = {
  id: CityTag;
  label: string;
  description: string;
  color: string; // Tailwind color class
  icon: string; // Emoji
};

export const tagsConfig: Record<CityTag, Omit<TagInfo, 'id'>> = {
  'droits-civiques': {
    label: 'Droits civiques',
    description: 'Histoire du mouvement des droits civiques américains',
    color: 'bg-purple-100 text-purple-800 border-purple-300',
    icon: '✊',
  },
  'industrie': {
    label: 'Industrie',
    description: 'Villes marquées par l\'industrie et le développement économique',
    color: 'bg-gray-100 text-gray-800 border-gray-300',
    icon: '⚙️',
  },
  'nature-wilderness': {
    label: 'Nature & Wilderness',
    description: 'Villes entourées de nature sauvage et paysages spectaculaires',
    color: 'bg-green-100 text-green-800 border-green-300',
    icon: '🏔️',
  },
  'architecture': {
    label: 'Architecture',
    description: 'Patrimoine architectural remarquable',
    color: 'bg-amber-100 text-amber-800 border-amber-300',
    icon: '🏛️',
  },
  'immigration': {
    label: 'Immigration',
    description: 'Histoire de l\'immigration et du multiculturalisme',
    color: 'bg-blue-100 text-blue-800 border-blue-300',
    icon: '🌎',
  },
  'technologie': {
    label: 'Technologie',
    description: 'Innovation technologique et développement moderne',
    color: 'bg-cyan-100 text-cyan-800 border-cyan-300',
    icon: '💻',
  },
  'culture-autochtone': {
    label: 'Culture autochtone',
    description: 'Héritage et culture des peuples autochtones',
    color: 'bg-orange-100 text-orange-800 border-orange-300',
    icon: '🪶',
  },
  'histoire-coloniale': {
    label: 'Histoire coloniale',
    description: 'Période coloniale espagnole, française ou britannique',
    color: 'bg-yellow-100 text-yellow-800 border-yellow-300',
    icon: '⛵',
  },
  'guerre-civile': {
    label: 'Guerre civile',
    description: 'Histoire de la guerre de Sécession américaine',
    color: 'bg-red-100 text-red-800 border-red-300',
    icon: '⚔️',
  },
  'economie': {
    label: 'Économie',
    description: 'Centre économique et commercial majeur',
    color: 'bg-emerald-100 text-emerald-800 border-emerald-300',
    icon: '💰',
  },
  'musique': {
    label: 'Musique',
    description: 'Patrimoine musical et scène culturelle',
    color: 'bg-pink-100 text-pink-800 border-pink-300',
    icon: '🎵',
  },
  'port-maritime': {
    label: 'Port maritime',
    description: 'Ville portuaire et commerce maritime',
    color: 'bg-indigo-100 text-indigo-800 border-indigo-300',
    icon: '⚓',
  },
};

export function getTagInfo(tag: CityTag): TagInfo {
  return {
    id: tag,
    ...tagsConfig[tag],
  };
}

export function getAllTags(): TagInfo[] {
  return (Object.keys(tagsConfig) as CityTag[]).map(getTagInfo);
}
