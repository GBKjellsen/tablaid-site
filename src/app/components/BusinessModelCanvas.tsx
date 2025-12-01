"use client";

import React from "react";
import Link from "next/link";

export default function BusinessModelCanvas() {
  return (
    <section
      id="bmc"
      className="bg-slate-950 print:bg-white print:text-black"
    >
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
        {/* Topptekst */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-300">
              Investor lite
            </p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl print:text-black">
              Tablaid – Business Model Canvas
            </h2>
            <p className="mt-3 max-w-2xl text-sm text-slate-300 sm:text-base print:text-black/80">
              Kortversjon av forretningsmodellen, tilpasset dialog med investorer
              og kommunale beslutningstakere.
            </p>
          </div>

          {/* Nedlastbar PDF – aktiver når du har filen klar */}
          <div className="flex items-center gap-3">
            {/* TODO: Når du har en PDF, legg den i /public/investor/tablaid-bmc.pdf */}
            <a
              href="/investor/tablaid-bmc.pdf"
              className="hidden sm:inline-flex items-center rounded-full border border-emerald-500/70 bg-slate-950 px-4 py-2 text-xs font-semibold text-emerald-300 hover:bg-emerald-500/10 print:hidden"
            >
              Last ned som PDF
            </a>
            <button
              type="button"
              onClick={() => {
                if (typeof window !== "undefined") {
                  window.print();
                }
              }}
              className="inline-flex items-center rounded-full border border-slate-700 bg-slate-900 px-4 py-2 text-xs font-semibold text-slate-200 hover:bg-slate-800 print:hidden"
            >
              Skriv ut canvas
            </button>
          </div>
        </div>

        {/* Grid – BMC-bokser */}
        <div className="mt-8 grid gap-5 md:grid-cols-3 print:border print:border-slate-300 print:mt-6">
          {/* Kundesegmenter */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4 text-sm text-slate-200 print:bg-white print:border-slate-300 print:text-black">
            <h3 className="text-xs font-semibold uppercase tracking-wide text-emerald-300">
              Kundesegmenter
            </h3>
            <ul className="mt-2 space-y-1 text-xs sm:text-sm">
              <li>• Kommunal primærhelsetjeneste (hjemmetjenester, forebyggende tjenester, fastleger)</li>
              <li>• Pasienter med kronisk legemiddelbruk</li>
              <li>• Pårørende som ønsker innsikt og støtte</li>
              <li>• Myndigheter med ansvar for kvalitet og forebygging</li>
            </ul>
          </div>

          {/* Kanaler */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4 text-sm text-slate-200 print:bg-white print:border-slate-300 print:text-black">
            <h3 className="text-xs font-semibold uppercase tracking-wide text-emerald-300">
              Kanaler
            </h3>
            <ul className="mt-2 space-y-1 text-xs sm:text-sm">
              <li>• Direkte dialog med kommuner</li>
              <li>• Faglige nettverk og arenaer</li>
              <li>• Tablaid.no</li>
              <li>• Rekruttering via treffsentere</li>
            </ul>
          </div>

          {/* Kunderelasjoner */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4 text-sm text-slate-200 print:bg-white print:border-slate-300 print:text-black">
            <h3 className="text-xs font-semibold uppercase tracking-wide text-emerald-300">
              Kunderelasjoner
            </h3>
            <ul className="mt-2 space-y-1 text-xs sm:text-sm">
              <li>• Enkel selvbetjening i app</li>
              <li>• Pilotoppfølging med tett kommunedialog</li>
              <li>• Løpende innsikt og rapporter</li>
              <li>• Support for brukere og pårørende</li>
            </ul>
          </div>

          {/* Verdiforslag – får litt ekstra plass */}
          <div className="md:col-span-3 rounded-2xl border border-slate-800 bg-slate-900/80 p-4 text-sm text-slate-200 print:bg-white print:border-slate-300 print:text-black">
            <h3 className="text-xs font-semibold uppercase tracking-wide text-emerald-300">
              Verdiforslag
            </h3>
            <ul className="mt-2 grid gap-1 text-xs sm:grid-cols-2 sm:text-sm">
              <li>• Digital legemiddelassistent for riktig bruk</li>
              <li>• Funksjonskompass basert på ICOPE og CFS</li>
              <li>• Trendsignaler for tidlig oppdagelse av funksjonsendringer</li>
              <li>• Deling av innsikt mellom bruker, kommune og pårørende</li>
              <li>• Bedre beslutningsgrunnlag og tryggere hverdagsoppfølging</li>
            </ul>
          </div>

          {/* Inntektsstrømmer */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4 text-sm text-slate-200 print:bg-white print:border-slate-300 print:text-black">
            <h3 className="text-xs font-semibold uppercase tracking-wide text-emerald-300">
              Inntektsstrømmer
            </h3>
            <ul className="mt-2 space-y-1 text-xs sm:text-sm">
              <li>• Pilotmodell: 20 kommuner á 25 000 NOK</li>
              <li>• Kommunelisens (B2G)</li>
              <li>• Pårørende-abonnement</li>
              <li>• Mulige affiliate-inntekter (syn, hørsel)</li>
            </ul>
          </div>

          {/* Ressurser */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4 text-sm text-slate-200 print:bg-white print:border-slate-300 print:text-black">
            <h3 className="text-xs font-semibold uppercase tracking-wide text-emerald-300">
              Nøkkelressurser
            </h3>
            <ul className="mt-2 space-y-1 text-xs sm:text-sm">
              <li>• Tablaid + utviklingsressurser</li>
              <li>• Medisinsk og sykepleiefaglig kompetanse</li>
              <li>• ICOPE- og CFS-rammeverk</li>
              <li>• Solid styre og faglige rådgivere</li>
            </ul>
          </div>

          {/* Kjerneaktiviteter */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4 text-sm text-slate-200 print:bg-white print:border-slate-300 print:text-black">
            <h3 className="text-xs font-semibold uppercase tracking-wide text-emerald-300">
              Kjerneaktiviteter
            </h3>
            <ul className="mt-2 space-y-1 text-xs sm:text-sm">
              <li>• Videreutvikling og stabilisering av app</li>
              <li>• Pilotgjennomføring i Østensjø + 20 kommuner</li>
              <li>• Innsiktsarbeid og kontinuerlig forbedring</li>
              <li>• Dokumentasjon av effekt og gevinst</li>
            </ul>
          </div>

          {/* Partnere */}
          <div className="md:col-span-2 rounded-2xl border border-slate-800 bg-slate-900/70 p-4 text-sm text-slate-200 print:bg-white print:border-slate-300 print:text-black">
            <h3 className="text-xs font-semibold uppercase tracking-wide text-emerald-300">
              Nøkkelpartnere
            </h3>
            <ul className="mt-2 space-y-1 text-xs sm:text-sm">
              <li>• Bydel Østensjø (pilotpartner)</li>
              <li>• SmartOslo</li>
              <li>• Teknologi- og utviklingspartnere</li>
              <li>• Dialog med flere kommuner</li>
              <li>• Treffsentere og lokale møteplasser (rekruttering)</li>
            </ul>
          </div>

          {/* Kostnadsstruktur */}
          <div className="md:col-span-3 rounded-2xl border border-slate-800 bg-slate-900/70 p-4 text-sm text-slate-200 print:bg-white print:border-slate-300 print:text-black">
            <h3 className="text-xs font-semibold uppercase tracking-wide text-emerald-300">
              Kostnadsstruktur
            </h3>
            <ul className="mt-2 space-y-1 text-xs sm:text-sm">
              <li>• Utvikling, drift og teknisk infrastruktur</li>
              <li>• Pilotoppfølging og tjenesteutvikling</li>
              <li>• Markedsføring, kommunikasjon og innholdsutvikling</li>
              <li>• Skaleringskostnader ved utrulling til flere kommuner</li>
            </ul>
          </div>
        </div>

        {/* Liten fotnote for investorer */}
        <p className="mt-6 text-xs text-slate-500 print:text-black/60">
          Denne canvasen er en forenklet oversikt. Utfyllende dokumentasjon
          (inkludert endringsteori, pilotoppsett og finansieringsplan) deles ved
          interesse.
        </p>
      </div>
    </section>
  );
}
