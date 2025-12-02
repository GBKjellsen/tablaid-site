// src/app/pilot/page.tsx
"use client";

import Link from "next/link";

export default function PilotPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold mb-8">Pilot for kommuner</h1>

      <p className="text-lg opacity-90 mb-6">
        Tablaid tilbyr en lavterskel pilot som gjør det enkelt for kommuner å teste
        verdien av tidlige signaler, brukervennlig legemiddelstøtte og trygg
        deling med pårørende – uten tunge anskaffelser.
      </p>

      <h2 className="text-2xl font-semibold mt-12 mb-4">
        Hvorfor kommuner velger Tablaid
      </h2>
      <ul className="list-disc ml-6 space-y-3 opacity-90">
        <li>Fanger tidlige endringer i funksjon, trivsel og legemiddelbruk</li>
        <li>Gir bedre grunnlag for prioritering og riktig tjenestenivå</li>
        <li>Aktiverer pårørende på en trygg og kontrollert måte</li>
        <li>Enkel onboarding av innbyggere</li>
        <li>Rask gevinst uten integrasjonskostnader</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-12 mb-4">
        Hvordan piloten gjennomføres
      </h2>

      <div className="border-l-4 border-blue-600 pl-4 mb-6">
        <p className="opacity-90">
          3–6 måneders pilotperiode, med 25 innbyggere og deres pårørende.
        </p>
      </div>

      <ul className="list-disc ml-6 space-y-3 opacity-90">
        <li>Oppstartsmøte med kommunen</li>
        <li>Enkel rekruttering av innbyggere</li>
        <li>Løpende støtte fra Tablaid-teamet</li>
        <li>Månedlig oppsummering av funn og innsikt</li>
        <li>Mulighet for videreføring eller skalering</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-12 mb-4">Pris</h2>
      <p className="text-lg opacity-90 mb-6">
        Fastpris: <b>25 000 NOK per kommune</b> (innenfor terskelen for enkeltkjøp).
      </p>

      <h2 className="text-2xl font-semibold mt-12 mb-4">Interessert?</h2>
      <p className="opacity-90 mb-8">
        Kontakt oss – vi sender en kort pilotbeskrivelse og tilgjengelige datoer
        for oppstartsmøte.
      </p>

      <Link
        href="/kontakt"
        className="px-8 py-4 rounded-xl bg-blue-600 text-white text-lg font-semibold hover:bg-blue-700 transition inline-block"
      >
        Kontakt oss
      </Link>
    </main>
  );
}
