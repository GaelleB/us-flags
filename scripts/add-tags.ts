const tagsToAdd: Record<string, string[]> = {
  "phoenix": ["economie"],
  "los-angeles": ["economie", "culture-autochtone"],
  "sacramento": ["economie"],
  "denver": ["nature-wilderness"],
  "hartford": ["economie", "industrie"],
  "bridgeport": ["industrie", "port-maritime"],
  "wilmington": ["economie", "industrie"],
  "dover": ["economie"],
  "washington-dc": ["droits-civiques"],
  "jacksonville": ["port-maritime", "economie"],
  "tallahassee": ["economie"],
  "atlanta": ["droits-civiques", "economie"],
  "honolulu": ["histoire-coloniale", "culture-autochtone", "port-maritime"],
  "boise": ["nature-wilderness"],
  "springfield": ["economie"],
  "chicago": ["architecture", "economie"],
  "indianapolis": ["economie"],
  "des-moines": ["economie"],
  "topeka": ["economie"],
  "wichita": ["industrie", "economie"],
  "frankfort": ["economie"],
  "louisville": ["musique", "economie"],
  "baton-rouge": ["histoire-coloniale", "economie"],
  "new-orleans": ["musique", "histoire-coloniale", "port-maritime"],
  "augusta": ["nature-wilderness"],
  "portland-me": ["port-maritime", "nature-wilderness"],
  "annapolis": ["histoire-coloniale", "port-maritime", "architecture"],
  "baltimore": ["port-maritime", "industrie", "droits-civiques"],
  "boston": ["histoire-coloniale", "architecture"],
  "lansing": ["industrie", "economie"],
  "detroit": ["industrie", "musique", "economie"],
  "minneapolis": ["economie", "droits-civiques"],
  "saint-paul": ["economie"],
  "jackson": ["droits-civiques", "musique"],
  "jefferson-city": ["economie"],
  "kansas-city-mo": ["musique", "economie"],
  "helena": ["economie", "droits-civiques"],
  "billings": ["nature-wilderness", "economie"],
  "lincoln": ["economie"],
  "omaha": ["economie"],
  "carson-city": ["economie"],
  "las-vegas": ["economie"],
  "concord": ["histoire-coloniale"],
  "manchester": ["industrie"],
  "newark": ["industrie", "immigration", "economie"],
  "trenton": ["industrie", "guerre-civile"],
  "santa-fe": ["histoire-coloniale", "culture-autochtone", "architecture"],
  "albuquerque": ["culture-autochtone", "technologie"],
  "new-york-city": ["histoire-coloniale", "economie", "immigration"],
  "albany": ["histoire-coloniale", "economie"],
  "charlotte": ["economie"],
  "raleigh": ["technologie", "economie"],
  "bismarck": ["culture-autochtone", "economie"],
  "fargo": ["economie"],
  "columbus": ["economie", "technologie"],
  "oklahoma-city": ["economie"],
  "portland": ["nature-wilderness", "economie"],
  "salem": ["economie"],
  "harrisburg": ["economie"],
  "philadelphia": ["histoire-coloniale", "droits-civiques", "architecture"],
  "providence": ["histoire-coloniale"],
  "columbia": ["economie"],
  "charleston": ["histoire-coloniale", "port-maritime", "architecture"],
  "pierre": ["nature-wilderness"],
  "sioux-falls": ["economie"],
  "memphis": ["musique", "port-maritime"],
  "nashville": ["musique", "economie"],
  "austin": ["technologie", "musique", "economie"],
  "houston": ["technologie", "economie"],
  "salt-lake-city": ["nature-wilderness"],
  "montpelier": ["nature-wilderness"],
  "burlington": ["nature-wilderness"],
  "virginia-beach": ["port-maritime"],
  "richmond": ["guerre-civile", "droits-civiques"],
  "olympia": ["nature-wilderness"],
  "seattle": ["technologie", "economie", "culture-autochtone"],
  "charleston-wv": ["industrie", "economie"],
  "milwaukee": ["industrie"],
  "madison": ["nature-wilderness"],
  "cheyenne": ["economie"]
};

import * as fs from 'fs';
import * as path from 'path';

const flagsPath = path.join(__dirname, '..', 'data', 'flags.ts');
let content = fs.readFileSync(flagsPath, 'utf-8');

for (const [citySlug, tags] of Object.entries(tagsToAdd)) {
  const tagsStr = `['${tags.join("', '")}']`;

  // Pattern pour trouver la ville et ajouter tags après shortSummary
  const pattern = new RegExp(
    `(citySlug: '${citySlug}',\\s+cityName: '[^']+',\\s+flagImage: '[^']+',\\s+(?:heroImage: '[^']+',\\s+)?shortSummary: \`[^\`]+\`,)`,
    'g'
  );

  content = content.replace(pattern, `$1\n        tags: ${tagsStr},`);
}

fs.writeFileSync(flagsPath, content, 'utf-8');
console.log('Tags added successfully!');
