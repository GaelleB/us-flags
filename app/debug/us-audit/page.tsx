// app/debug/us-audit/page.tsx
import React from "react";
import { cityFlags } from "../../../data/flags";
import usStatesCities from "../../../data/us-states-cities.json";

type StateConfig = (typeof usStatesCities.states)[number];

type ExpectedCity = {
  stateCode: string;
  stateName: string;
  role: "capital" | "main";
  citySlug: string;
  cityName: string;
};

type ExistingCity = {
  stateCode: string;
  citySlug: string;
  cityName: string;
};

function buildExpectedCities(states: StateConfig[]): ExpectedCity[] {
  const raw: ExpectedCity[] = states.flatMap((s) => [
    {
      stateCode: s.stateCode,
      stateName: s.stateName,
      role: "capital" as const,
      citySlug: s.capital.citySlug,
      cityName: s.capital.cityName,
    },
    {
      stateCode: s.stateCode,
      stateName: s.stateName,
      role: "main" as const,
      citySlug: s.mainCity.citySlug,
      cityName: s.mainCity.cityName,
    },
  ]);

  // on enlève les doublons “capitale = ville principale”
  return raw.filter(
    (city, index, arr) =>
      index ===
      arr.findIndex(
        (c) =>
          c.stateCode === city.stateCode && c.citySlug === city.citySlug
      )
  );
}

function buildExistingCities(): ExistingCity[] {
  return cityFlags.map((c) => ({
    stateCode: c.stateCode,
    citySlug: c.citySlug,
    cityName: c.cityName,
  }));
}

export default function USAuditPage() {
  const expected = buildExpectedCities(usStatesCities.states);
  const existing = buildExistingCities();

  const missing = expected.filter(
    (exp) =>
      !existing.some(
        (city) =>
          city.stateCode === exp.stateCode &&
          city.citySlug === exp.citySlug
      )
  );

  const extra = existing.filter(
    (city) =>
      !expected.some(
        (exp) =>
          exp.stateCode === city.stateCode &&
          exp.citySlug === city.citySlug
      )
  );

  // Pour affichage plus lisible : on groupe par État
  const missingByState = missing.reduce<Record<string, ExpectedCity[]>>(
    (acc, city) => {
      const key = `${city.stateCode} – ${city.stateName}`;
      if (!acc[key]) acc[key] = [];
      acc[key].push(city);
      return acc;
    },
    {}
  );

  const extraByState = extra.reduce<Record<string, ExistingCity[]>>(
    (acc, city) => {
      const key = city.stateCode;
      if (!acc[key]) acc[key] = [];
      acc[key].push(city);
      return acc;
    },
    {}
  );

  return (
    <main className="max-w-5xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-serif mb-6">
        Audit US — États, capitales & grandes villes
      </h1>

      <section className="mb-10 text-sm leading-relaxed">
        <p>
          Cette page compare{" "}
          <code className="px-1 py-0.5 bg-slate-100 rounded">
            us-states-cities.json
          </code>{" "}
          (50 États × 2 villes) avec les données réelles de{" "}
          <code className="px-1 py-0.5 bg-slate-100 rounded">
            data/flags.ts
          </code>
          .
        </p>
        <p className="mt-2">
          • <strong>{usStatesCities.states.length}</strong> États configurés{" "}
          <br />
          • <strong>{expected.length}</strong> villes attendues (capitales +
          principales, doublons fusionnés) <br />
          • <strong>{existing.length}</strong> villes actuellement présentes
          dans <code>flags.ts</code>
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-serif mb-3">
          ⚠️ Villes attendues mais absentes dans <code>flags.ts</code>
        </h2>
        {missing.length === 0 ? (
          <p className="text-emerald-700">Aucune ville manquante 🎉</p>
        ) : (
          <>
            <p className="mb-3 text-sm text-slate-700">
              Total : <strong>{missing.length}</strong> ville(s) manquante(s).
            </p>
            <div className="space-y-4 text-sm">
              {Object.entries(missingByState).map(([stateKey, cities]) => (
                <div key={stateKey} className="border-l-2 border-amber-400 pl-3">
                  <h3 className="font-semibold mb-1">{stateKey}</h3>
                  <ul className="list-disc ml-4">
                    {cities.map((c) => (
                      <li key={`${c.stateCode}-${c.citySlug}-${c.role}`}>
                        <code>{c.citySlug}</code> — {c.cityName}{" "}
                        <span className="text-xs text-slate-500">
                          ({c.role === "capital" ? "capitale" : "ville principale"})
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </>
        )}
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-serif mb-3">
          ❌ Villes présentes dans <code>flags.ts</code> mais pas dans le JSON
        </h2>
        {extra.length === 0 ? (
          <p className="text-emerald-700">Aucune ville “en trop” 💚</p>
        ) : (
          <>
            <p className="mb-3 text-sm text-slate-700">
              Total : <strong>{extra.length}</strong> ville(s) en trop.
            </p>
            <div className="space-y-4 text-sm">
              {Object.entries(extraByState).map(([stateCode, cities]) => (
                <div
                  key={stateCode}
                  className="border-l-2 border-rose-400 pl-3"
                >
                  <h3 className="font-semibold mb-1">
                    État code{" "}
                    <code className="px-1 py-0.5 bg-slate-100 rounded">
                      {stateCode}
                    </code>
                  </h3>
                  <ul className="list-disc ml-4">
                    {cities.map((c) => (
                      <li key={`${c.stateCode}-${c.citySlug}`}>
                        <code>{c.citySlug}</code> — {c.cityName}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </>
        )}
      </section>

      <section className="text-xs text-slate-500">
        <p>
          Une fois que la liste te semble clean, tu pourras ajuster{" "}
          <code>flags.ts</code> (supprimer les villes en trop, ajouter celles qui
          manquent) et éventuellement supprimer les vieux fichiers{" "}
          <code>lot1-...</code>, etc.
        </p>
      </section>
    </main>
  );
}