const adoptionYears: Record<string, number> = {
  "birmingham": 1951,
  "montgomery": 1952,
  "anchorage": 1973,
  "juneau": 1959,
  "phoenix": 1990,
  "tucson": 1953,
  "little-rock": 1957,
  "los-angeles": 1931,
  "sacramento": 1962,
  "denver": 1926,
  "hartford": 1964,
  "bridgeport": 1995,
  "wilmington": 1989,
  "dover": 1972,
  "washington-dc": 1938,
  "jacksonville": 1965,
  "tallahassee": 1963,
  "atlanta": 2004,
  "honolulu": 1959,
  "boise": 1965,
  "springfield": 1970,
  "chicago": 1917,
  "indianapolis": 1963,
  "des-moines": 1974,
  "topeka": 1969,
  "wichita": 1937,
  "frankfort": 1986,
  "louisville": 2003,
  "baton-rouge": 1968,
  "new-orleans": 1918,
  "augusta": 1987,
  "portland-me": 1972,
  "annapolis": 1965,
  "baltimore": 1950,
  "boston": 1917,
  "lansing": 1964,
  "detroit": 1948,
  "minneapolis": 1955,
  "saint-paul": 1955,
  "jackson": 1965,
  "jefferson-city": 1967,
  "kansas-city-mo": 1913,
  "helena": 1965,
  "billings": 1985,
  "lincoln": 1932,
  "omaha": 1938,
  "carson-city": 1963,
  "las-vegas": 1963,
  "concord": 1972,
  "manchester": 1952,
  "newark": 1913,
  "trenton": 1964,
  "santa-fe": 1958,
  "albuquerque": 1963,
  "new-york-city": 1915,
  "albany": 1969,
  "charlotte": 1929,
  "raleigh": 1960,
  "bismarck": 1963,
  "fargo": 1968,
  "columbus": 1929,
  "oklahoma-city": 1969,
  "portland": 1969,
  "salem": 1962,
  "harrisburg": 1973,
  "philadelphia": 1874,
  "providence": 1967,
  "columbia": 1967,
  "charleston": 1947,
  "pierre": 1967,
  "sioux-falls": 1989,
  "memphis": 1963,
  "nashville": 1963,
  "austin": 1915,
  "houston": 1915,
  "salt-lake-city": 2006,
  "montpelier": 1963,
  "burlington": 2017,
  "virginia-beach": 1961,
  "richmond": 1952,
  "olympia": 1969,
  "seattle": 1990,
  "charleston-wv": 1963,
  "milwaukee": 1954,
  "madison": 1962,
  "cheyenne": 1967
};

import * as fs from 'fs';
import * as path from 'path';

const flagsPath = path.join(__dirname, '..', 'data', 'flags.ts');
let content = fs.readFileSync(flagsPath, 'utf-8');

for (const [citySlug, year] of Object.entries(adoptionYears)) {
  // Pattern pour trouver la ville et ajouter adoptionYear après story
  const pattern = new RegExp(
    `(citySlug: '${citySlug}',[\\s\\S]*?story: \`[^\`]+\`,)`,
    'g'
  );

  content = content.replace(pattern, `$1\n        adoptionYear: ${year},`);
}

fs.writeFileSync(flagsPath, content, 'utf-8');
console.log('Adoption years added successfully!');
