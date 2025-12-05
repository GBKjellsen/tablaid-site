"use client";

import React from "react";
import Link from "next/link";
import VpcKommuner from "@/components/vpc/VpcKommuner";

export default function KommunerPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 flex flex-col">

      {/* HERO SECTION */}
      <section className="w-full bg-white py-16 px-6 md:px-12 border-b">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            En innbyggertjeneste som gir <span className="text-emerald-600">din kommune</span> tidlig innsikt
          </h1>

          <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
            Fra <strong>mars 2026</strong> kan din kommune delta i en 
            <strong> 3–6 måneders pilot</strong> der innbyggere logger hverdagsinformasjon og legemiddelbruk.
            Dere får anonymiserte trender som gjør det enklere å oppdage endringer tidlig – 
            og prioritere ressursene bedre.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#pilotkontakt"
              className="px-6 py-3 rounded-md bg-emerald-600 text-white font-semibold shadow hover:bg-emerald-700 transition"
            >
              Meld interesse for pilot fra mars 2026
            </a>

            <a
              href="/files/tablaid-info-kommuner.pdf"
              className="px-6 py-3 rounded-md bg-white border text-gray-800 font-semibold shadow hover:bg-gray-100 transition"
            >
              Last ned infoskriv (PDF)
            </a>
          </div>
        </div>
      </section>

      {/* SECTION – PROBLEMET FOR KOMMUNER */}
      <section className="py-16 px-6 md:px-12 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Kommunene trenger tidligere signaler – ikke flere systemer
          </h2>

          <p className="text-lg text-gray-700 mb-6">
            Mange kommuner beskriver at endringer i funksjon og legemiddelbruk oppdages 
            først når behovet har blitt akutt. Pårørende sitter på viktig informasjon, 
            men mangler verktøy. Tjenestene mangler kontinuerlig innsikt – og må basere 
            seg på punktvise vurderinger.
          </p>

          <p className="text-sm text-gray-500 italic">
            Parafrase fra Helsedirektoratet og Legeforeningen:
            «Tidlige signaler og innsikt over tid er avgjørende for å identifisere økende risiko 
            før behovet blir omfattende.»
          </p>
        </div>
      </section>

      {/* SECTION – WHAT'S IN IT FOR THEM */}
      <section className="py-16 px-6 md:px-12 bg-white border-y">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">
            Hva får <span className="text-emerald-600">din kommune</span> ut av Tablaid?
          </h2>

          <div className="grid md:grid-cols-2 gap-10 text-lg text-gray-700">
            <ul className="space-y-4">
              <li>• Din kommune får tidligere signaler om endringer – basert på faktisk hverdag.</li>
              <li>• Dere får bedre grunnlag for å prioritere innsats når behovet øker.</li>
              <li>• Dere styrker samhandling mellom innbygger, pårørende og tjenester.</li>
            </ul>

            <ul className="space-y-4">
              <li>• Dere får trenddata som viser utvikling over tid – ikke bare punktmålinger.</li>
              <li>• Dere reduserer unødvendige henvendelser og øker forutsigbarhet.</li>
              <li>• Ingen integrasjoner eller nye systemer – Tablaid kan brukes som ren innbyggertjeneste.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* SECTION – PILOT 3–6 MND */}
      <section className="py-16 px-6 md:px-12 bg-gray-50" id="pilot">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Pilot fra mars 2026 – 3–6 måneder
          </h2>

          <p className="text-lg text-gray-700 mb-6">
            Piloten er utviklet for å gi din kommune nok tid og datagrunnlag til å vurdere 
            effekten av Tablaid. Dette gir innsikt i trender, etterlevelse, trivsel og tidlige 
            signaler – uten å legge ekstra belastning på kommunens tjenester.
          </p>

          <div className="bg-white p-6 rounded-lg shadow border">
            <h3 className="text-xl font-semibold mb-4">Pilotopplegg (3–6 måneder)</h3>

            <ul className="space-y-3 text-gray-700 text-lg">
              <li>• Oppstartsmøte med tilpasning til din kommune</li>
              <li>• Rekruttering av 20–30 innbyggere (frivillig deltakelse)</li>
              <li>• Daglig logging av hverdagsinformasjon og medisiner</li>
              <li>• Månedlige trendrapporter og funn</li>
              <li>• Anonymiserte trender – ingen personsensitiv data deles</li>
              <li>• Valgfri lavterskel lisens ut 2026 for kontinuitet</li>
            </ul>
          </div>

          <p className="mt-6 text-sm text-gray-500 italic">
            Parafrase fra Helsetilsynet og pasientsikkerhetsprogrammet:
            «Legemiddelbruk i hjemmet er en av de store og vedvarende pasientsikkerhetsutfordringene.»
          </p>
        </div>
      </section>

      {/* FORM FOR INTERESSE */}
      <section id="pilotkontakt" className="py-16 px-6 md:px-12 bg-white border-t">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Meld interesse for pilot fra mars 2026
          </h2>

          <p className="text-lg text-gray-700 mb-8">
            Fyll ut skjemaet under – du får tilsendt infoskriv og vi tar kontakt for et kort 
            uforpliktende videomøte.
          </p>

          <form
            action="https://formspree.io/f/mleowead"
            method="POST"
            className="bg-gray-50 p-6 rounded-lg shadow space-y-4 border"
          >
            <input
              type="text"
              name="navn"
              required
              placeholder="Navn"
              className="w-full p-3 border rounded"
            />

            <input
              type="email"
              name="email"
              required
              placeholder="E-post"
              className="w-full p-3 border rounded"
            />

            <input
              type="text"
              name="kommune"
              required
              placeholder="Kommune"
              className="w-full p-3 border rounded"
            />

            <textarea
              name="melding"
              placeholder="Evt. kommentar"
              rows={4}
              className="w-full p-3 border rounded"
            />

            <button
              type="submit"
              className="w-full py-3 bg-emerald-600 text-white font-semibold rounded shadow hover:bg-emerald-700 transition"
            >
              Send inn
            </button>
          </form>
        </div>
      </section>

      {/* VPC-KOMPONENT ( FAGLIG VERDI ) */}
      <section className="py-16 px-6 md:px-12 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <VpcKommuner />
        </div>
      </section>
    </div>
  );
}
