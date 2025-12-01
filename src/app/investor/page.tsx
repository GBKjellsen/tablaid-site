"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import BusinessModelCanvas from "../components/BusinessModelCanvas";

export default function InvestorPage() {
  const [hasAccess, setHasAccess] = useState(false);
  const [slipMode, setSlipMode] = useState(false);

  const bmcRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (hasAccess && bmcRef.current) {
      bmcRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [hasAccess]);

  return (
    <main className="bg-slate-950 text-slate-50">

      {/* ----------------------------------------- */}
      {/* HERO */}
      {/* ----------------------------------------- */}
      <section className="border-b border-slate-800 bg-slate-950/80">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-300">
              For investorer
            </p>

            <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Bygg morgendagens forebyggende helsetjenester sammen med Tablaid
            </h1>

            <p className="mt-4 text-sm leading-relaxed text-slate-300 sm:text-base">
              Tablaid kombinerer legemiddelassistent, funksjonsdata og
              pårørendestøtte for å oppdage funksjonsfall tidlig – før behovet
              for tjenester eskalerer.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Link
                href="/kontakt"
                className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-5 py-2.5 text-xs font-semibold text-slate-900 hover:bg-emerald-400"
              >
                Book en prat om Tablaid
              </Link>

              <p className="text-xs text-slate-400">
                Vi søker investorer som kombinerer kapital og samfunnsengasjement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ----------------------------------------- */}
      {/* HVORFOR NÅ */}
      {/* ----------------------------------------- */}
      <section className="border-b border-slate-800 bg-slate-950/90">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Hvorfor investere i Tablaid nå?
            </h2>

            <p className="mt-3 text-sm text-slate-300 sm:text-base">
              De neste 3–6 årene definerer hvordan norsk kommunehelse organiseres.
              Tablaid posisjonerer seg midt i denne overgangen.
            </p>
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
              <h3 className="text-sm font-semibold text-emerald-300">
                1. Demografisk trykk
              </h3>
              <p className="mt-2 text-sm text-slate-300">
                Eldre øker raskt — kapasiteten gjør ikke det. Kommunene må jobbe
                mer forebyggende og datadrevet.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
              <h3 className="text-sm font-semibold text-emerald-300">
                2. Tidlige signaler blir avgjørende
              </h3>
              <p className="mt-2 text-sm text-slate-300">
                KS og Helsedirektoratet peker på tidlig identifikasjon av endring
                som et nasjonalt satsingsområde.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
              <h3 className="text-sm font-semibold text-emerald-300">
                3. Digital modenhet blant eldre øker
              </h3>
              <p className="mt-2 text-sm text-slate-300">
                Smarttelefon-bruk i målgruppen øker hvert år.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
              <h3 className="text-sm font-semibold text-emerald-300">
                4. Reguleringene går i riktig retning
              </h3>
              <p className="mt-2 text-sm text-slate-300">
                EHDS (European Health Data Space) legger til rette for trygg,
                standardisert bruk av pasientgenererte data.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ----------------------------------------- */}
      {/* SLIP-INFO */}
      {/* ----------------------------------------- */}
      <section className="border-b border-slate-800 bg-slate-950">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
              Hvordan kan du investere i Tablaid?
            </h2>

            <p className="mt-3 text-sm text-slate-300 sm:text-base">
              Tablaid tilbyr mulighet for investering gjennom en{" "}
              <strong className="text-emerald-300">Simple Loan Investment Paper (SLIP)</strong> –
              et trygt og fleksibelt instrument som brukes av mange norske startups.
            </p>
          </div>

          <div className="mt-8 rounded-2xl border border-slate-800 bg-slate-900/70 p-6 sm:p-8">
            <h3 className="text-lg font-semibold text-emerald-300">Hva er en SLIP?</h3>

            <p className="mt-3 text-sm text-slate-300">
              En SLIP fungerer som et konvertibelt lån som blir til aksjer ved neste emisjon –
              uten å måtte prise selskapet nå. Ingen binding før dokumentet signeres.
            </p>

            <div className="mt-6 grid gap-5 sm:grid-cols-3">
              <div className="rounded-xl border border-slate-700 bg-slate-900/40 p-4">
                <h4 className="text-sm font-semibold text-emerald-300">Enkel</h4>
                <p className="mt-1 text-xs text-slate-400">
                  Ingen kompliserte avtaler nå. Alt konverteres ved neste emisjon.
                </p>
              </div>

              <div className="rounded-xl border border-slate-700 bg-slate-900/40 p-4">
                <h4 className="text-sm font-semibold text-emerald-300">Rask</h4>
                <p className="mt-1 text-xs text-slate-400">
                  Standardisert dokument, kvalitetssikret av advokater.
                </p>
              </div>

              <div className="rounded-xl border border-slate-700 bg-slate-900/40 p-4">
                <h4 className="text-sm font-semibold text-emerald-300">Trygg</h4>
                <p className="mt-1 text-xs text-slate-400">
                  Brukt av norske investorer og startups i tidligfase.
                </p>
              </div>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <p className="text-sm text-slate-400">
                Ønsker du å motta SLIP-dokumentet og diskutere mulige vilkår?
              </p>

              <button
                onClick={() => {
                  setSlipMode(true);

                  setTimeout(() => {
                    document.getElementById("investor-access")?.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                  }, 150);
                }}
                className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold text-slate-900 hover:bg-emerald-400 transition-all"
              >
                Be om SLIP-dokument
              </button>

            {/* LES MER OM SLIP – COLLAPSIBLE */}
<div className="mt-4">
  <button
    onClick={() => setSlipMode((prev) => !prev)}
    className="text-xs text-emerald-300 hover:text-emerald-200 underline underline-offset-4"
  >
    {slipMode ? "Skjul detaljert info om SLIP" : "Les mer om SLIP"}
  </button>

  {slipMode && (
    <div className="mt-4 rounded-xl border border-slate-700 bg-slate-900/50 p-4 text-sm text-slate-300">
      <p className="">
        En SLIP (Startup’s Lead Investment Paper) er blitt et standard tidligfase-
        instrument i Norge. Den fungerer som en enkel og fleksibel måte å investere i
        et selskap før en full emisjon. Investor betaler inn beløpet nå, og får en
        <strong className="text-emerald-300"> rett til å tegne aksjer</strong> ved neste
        kapitalrunde – typisk med rabatt eller maksverdsettelse.
      </p>

      <p className="mt-3 text-slate-400 text-xs">
        Modellen er utviklet og kvalitetssikret av juridiske fagmiljøer, blant annet
        gjennom rammeverk presentert av Lexolve. Vi benytter SLIP for å gjøre investering
        raskt, fleksibelt og ryddig i en tidlig fase.
      </p>

      <p className="mt-3 text-xs text-slate-500">
        Dette er kun en kortfattet forklaring. Fullt dokument og samtale om vilkår fås ved
        å fylle ut investor-skjemaet nedenfor.
      </p>
    </div>
  )}
</div>

            </div>
          </div>
        </div>
      </section>

      {/* ----------------------------------------- */}
      {/* SKJEMA */}
      {/* ----------------------------------------- */}

      <section className="bg-slate-950/95" id="investor-access">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
              Investor-dokumenter og videre dialog
            </h2>

            <p className="mt-3 text-sm text-slate-300 sm:text-base">
              Fyll inn skjemaet for å få tilgang til våre investor-dokumenter.
            </p>
            <p className="mt-2 text-sm text-slate-400">
              Skjemaet er uforpliktende og sendes direkte til Tablaid-teamet.
            </p>
          </div>

          {/* BADGE */}
          {hasAccess && (
            <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-emerald-600/20 px-4 py-1.5 text-sm font-medium text-emerald-300">
              <span className="text-xl">✔</span> Tilgang gitt – dokumenter åpnet nedenfor
            </div>
          )}

          {/* FORM */}
          <div
            className={`mt-8 rounded-2xl border bg-slate-900/70 p-6 sm:p-7 transition-all duration-700 ${
              hasAccess
                ? "border-emerald-500/40 opacity-60 shadow-[0_0_30px_rgba(16,185,129,0.15)]"
                : "border-slate-800"
            }`}
          >
            <form
              action="https://formspree.io/f/meoykqyl"
              method="POST"
              onSubmit={() => {
                setHasAccess(true);
                setTimeout(() => {
                  document.getElementById("bmc-reveal")?.scrollIntoView({
                    behavior: "smooth",
                  });
                }, 150);
              }}
              className="grid gap-4 sm:grid-cols-2"
            >

              {/* Navn */}
              <div className="sm:col-span-1">
                <label className="block text-xs font-medium text-slate-300">Navn</label>
                <input
                  name="navn"
                  type="text"
                  required
                  className="mt-1 w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-50"
                  placeholder="Fornavn og etternavn"
                />
              </div>

              {/* E-post */}
              <div className="sm:col-span-1">
                <label className="block text-xs font-medium text-slate-300">E-post</label>
                <input
                  name="epost"
                  type="email"
                  required
                  className="mt-1 w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-50"
                  placeholder="din@epost.no"
                />
              </div>

              {/* Type investor */}
              <div className="sm:col-span-1">
                <label className="block text-xs font-medium text-slate-300">Type investor</label>
                <select
                  name="typeInvestor"
                  className="mt-1 w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-50"
                >
                  <option>Privat investor</option>
                  <option>Engleinvestor</option>
                  <option>Fond</option>
                  <option>Selskap / corporate</option>
                </select>
              </div>

              {/* Investeringsnivå */}
              <div className="sm:col-span-1">
                <label className="block text-xs font-medium text-slate-300">
                  Investeringsnivå (uforpliktende)
                </label>
                <select
                  name="investeringsnivå"
                  className="mt-1 w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-50"
                >
                  <option>&lt; 250 000 NOK</option>
                  <option>250 000 – 500 000 NOK</option>
                  <option>500 000 – 1 000 000 NOK</option>
                  <option>1 – 5 millioner NOK</option>
                  <option>&gt; 5 millioner NOK</option>
                </select>
              </div>

              {/* ➤ SLIP VALG  */}
              <div className="sm:col-span-2">
                <label className="block text-xs font-medium text-slate-300">
                  Ønsker du informasjon om SLIP?
                </label>

                <select
                  name="slip_interesse"
                  defaultValue={slipMode ? "Ja" : "Nei"}
                  className="mt-1 w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-50"
                >
                  <option>Nei</option>
                  <option>Ja</option>
                </select>
              </div>

              {/* Kommentar */}
              <div className="sm:col-span-2">
                <label className="block text-xs font-medium text-slate-300">
                  Kommentar (valgfritt)
                </label>
                <textarea
                  name="kommentar"
                  rows={3}
                  className="mt-1 w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-50"
                  placeholder="Kort bakgrunn, motivasjon eller spørsmål."
                />
              </div>

              {/* Send */}
              <div className="sm:col-span-2 mt-2 flex flex-wrap items-center justify-between gap-4">
                <button
                  type="submit"
                  className={`inline-flex items-center justify-center rounded-full px-5 py-2.5 text-xs font-semibold transition-all ${
                    hasAccess
                      ? "bg-emerald-700 text-slate-200"
                      : "bg-emerald-500 text-slate-900 hover:bg-emerald-400"
                  }`}
                >
                  {hasAccess ? "Takk! Dokumentene er åpnet." : "Send inn og få dokumentene"}
                </button>

                <p className="text-[11px] text-slate-500">
                  Vi deler ikke informasjon med tredjeparter.
                </p>
              </div>
            </form>
          </div>

          {/* Kontaktinfo */}
          <div className="mt-8 text-sm text-slate-400">
            <p>
              Du kan også kontakte oss direkte på{" "}
              <a href="mailto:post@tablaid.no" className="text-emerald-300 hover:text-emerald-200">
                post@tablaid.no
              </a>.
            </p>
          </div>

          {/* BMC */}
          {hasAccess && (
            <div id="bmc-reveal" className="mt-16">
              <BusinessModelCanvas />
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
