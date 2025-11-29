// src/app/investor/page.tsx
"use client";

import Link from "next/link";

export default function InvestorPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold mb-8">Investorinformasjon</h1>

      <p className="text-lg opacity-90 mb-10">
        Tablaid er utviklet for et helsevesen under press, der tidlig innsats,
        kontinuitet og riktig legemiddelbruk er avgjørende for både livskvalitet
        og bærekraftige tjenester. Vår løsning kombinerer legemiddelstøtte,
        funksjonskartlegging og innsikt i hverdagsendringer – til stor verdi for
        brukere, pårørende og kommuner.
      </p>

      {/* MARKET SECTION */}
      <h2 className="text-2xl font-semibold mt-12 mb-4">
        Markedsmulighet (TAM / SAM / SOM)
      </h2>

      <div className="space-y-6 opacity-90">
        <p>
          <b>TAM – Globalt marked for digital hjemmehelse og legemiddelhåndtering:</b>{" "}
          Estimert til over 25 milliarder USD innen 2030, drevet av aldrende
          befolkning, kroniske sykdommer og økt behov for egenmestring.
        </p>

        <p>
          <b>SAM – Nordisk marked for forebygging, hjemmeoppfølging og legemiddelstøtte:</b>{" "}
          6–8 milliarder NOK pr. år, inkludert kommunale tjenester, primærhelsetjenesten
          og private aktører.
        </p>

        <p>
          <b>SOM – Det oppnåelige markedet for Tablaid (første 3 år):</b>{" "}
          Norske kommuner (ca. 50 som målgruppe i første fase), pårørendeabonnementer,
          og gradvis utvidelse mot Sverige og Danmark.
        </p>
      </div>

      {/* WHY INVEST */}
      <h2 className="text-2xl font-semibold mt-12 mb-4">
        Hvorfor investere i Tablaid?
      </h2>

      <ul className="list-disc ml-6 space-y-4 opacity-90">
        <li>Unik kombinasjon av legemiddelstøtte og tidlige funksjonssignaler</li>
        <li>Tydelig posisjon i fremtidens forebyggende helse- og omsorgstjenester</li>
        <li>Lav teknisk risiko og solid faglig forankring</li>
        <li>Skalerbar softwaremodell med rask implementering</li>
        <li>Abonnementsinntekter + kommunale lisensmodeller</li>
        <li>Mulighet for partner-integrasjoner og internasjonal ekspansjon</li>
      </ul>

      {/* TRACTION */}
      <h2 className="text-2xl font-semibold mt-12 mb-4">Status og fremdrift</h2>

      <ul className="list-disc ml-6 space-y-3 opacity-90">
        <li>Partnerskap med Podium – stabil og skalerbar utviklingskapasitet</li>
        <li>Klar pilotmodell med kommuner i 2026</li>
        <li>Faglig forankring i nasjonale strategier og tilsynsmeldinger</li>
        <li>Posisjonert for samarbeid med myndigheter og kommunale tjenesteeiere</li>
        <li>Posisjonert for støtteordninger (IN, SkatteFUNN m.m.)</li>
      </ul>

      {/* BUSINESS MODEL */}
      <h2 className="text-2xl font-semibold mt-12 mb-4">Forretningsmodell</h2>

      <p className="opacity-90 mb-6">
        Kombinasjon av kommunale lisensmodeller, pårørendeabonnementer og mulige
        partner-integrasjoner (hørsel, syn, velferdsteknologi, fastlegeverktøy).
      </p>

      <ul className="list-disc ml-6 space-y-3 opacity-90">
        <li>Kommunelisens med trinnvis prising</li>
        <li>Abonnement for pårørende</li>
        <li>Tjenesteintegrasjoner med tredjepartsleverandører</li>
      </ul>

      {/* CTA */}
      <div className="mt-16">
        <h2 className="text-2xl font-semibold mb-4">Interessert i å følge Tablaid tett?</h2>
        <p className="opacity-90 mb-8">
          Kontakt oss for investor pitchdeck, pilotresultater og fremtidige planer.
        </p>

        <Link
          href="/kontakt"
          className="px-8 py-4 rounded-xl bg-blue-600 text-white text-lg font-semibold hover:bg-blue-700 transition inline-block"
        >
          Kontakt oss
        </Link>
      </div>
    </main>
  );
}
