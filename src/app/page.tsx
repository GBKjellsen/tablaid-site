// src/app/page.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";

export default function HomePage() {
  const { theme } = useTheme();

  return (
    <main className="flex flex-col items-center">
      {/* --- HERO SECTION --- */}
      <section className="w-full py-20 px-6 text-center max-w-5xl">
        
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
          En digital helse- og legemiddelassistent <br />
          som skaper trygghet og tidlige signaler
        </h1>

        <p className="text-lg md:text-2xl max-w-3xl mx-auto mb-10 opacity-90">
          Tablaid samler hverdagssignaler, legemiddelbruk og enkel
          funksjonskartlegging – og gir bedre oversikt for brukere,
          pårørende og kommuner.
        </p>

        <Link
          href="/pilot"
          className="px-8 py-4 rounded-xl bg-blue-600 text-white text-lg font-semibold hover:bg-blue-700 transition"
        >
          Bli pilotkommune
        </Link>
      </section>

      {/* --- VALUE SECTION --- */}
      <section className="w-full py-24 px-6 bg-gray-50 dark:bg-neutral-900 border-y border-gray-200 dark:border-neutral-800">
        <div className="max-w-5xl mx-auto text-center space-y-10">
          <h2 className="text-3xl md:text-5xl font-semibold">
            Hvorfor Tablaid?
          </h2>

          <div className="grid md:grid-cols-3 gap-10 text-left">
            <div>
              <h3 className="font-bold text-xl mb-3">For brukere</h3>
              <p className="opacity-80">
                Enkel registrering av legemiddelbruk og hverdagssignaler.
                Mer oversikt, mindre stress og bedre kontinuitet.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-xl mb-3">For pårørende</h3>
              <p className="opacity-80">
                Innsikt som skaper trygghet og mulighet til å støtte uten å
                overstyre – kun når brukeren ønsker det.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-xl mb-3">For kommuner</h3>
              <p className="opacity-80">
                Tidlige signaler om endringer i funksjon og legemiddelbruk gir
                bedre prioritering og riktigere oppfølging.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- QUOTES / VALIDATION SECTION --- */}
      <section className="w-full py-20 px-6 max-w-4xl mx-auto space-y-16">
        <h2 className="text-center text-3xl font-semibold mb-10">
          Dette sier nasjonale aktører
        </h2>

        <blockquote className="border-l-4 border-blue-500 pl-4 italic opacity-85">
          “Utvikling over tid er avgjørende for å identifisere økende risiko
          tidlig.” – Helsedirektoratets Samhandlingsstrategi 2024–2030
        </blockquote>

        <blockquote className="border-l-4 border-green-600 pl-4 italic opacity-85">
          “Pasienter og pårørende er en ressurs i forbedringsarbeidet.”
          – Helsetilsynet
        </blockquote>

        <blockquote className="border-l-4 border-purple-500 pl-4 italic opacity-85">
          “Bedre legemiddelkompetanse i tjenestene er nødvendig for bedre
          pasientsikkerhet.” – Helsetilsynets Tilsynsmelding 2025
        </blockquote>

        <blockquote className="border-l-4 border-amber-500 pl-4 italic opacity-85">
          “Forebygging må prioriteres tidligere i forløpet.” – Folkehelsemeldingen
        </blockquote>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="w-full py-20 px-6 bg-blue-600 dark:bg-blue-700 text-white text-center">
        <h2 className="text-3xl md:text-5xl font-semibold mb-6">
          Klar for å lære mer?
        </h2>

        <p className="text-lg md:text-2xl mb-10 opacity-90">
          Velg den veien som passer deg.
        </p>

        <div className="flex flex-col md:flex-row gap-6 justify-center">
          <Link
            href="/pilot"
            className="px-8 py-4 rounded-xl bg-white text-blue-700 font-semibold hover:bg-gray-200 transition"
          >
            For kommuner
          </Link>

          <Link
            href="/investor"
            className="px-8 py-4 rounded-xl bg-white text-blue-700 font-semibold hover:bg-gray-200 transition"
          >
            For investorer
          </Link>

          <Link
            href="/parorende"
            className="px-8 py-4 rounded-xl bg-white text-blue-700 font-semibold hover:bg-gray-200 transition"
          >
            For pårørende
          </Link>
        </div>
      </section>
    </main>
  );
}
