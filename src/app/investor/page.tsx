"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

import VpcInvestor from "@/components/vpc/VpcInvestor";
import BmcInvestor from "@/components/bmc/BmcInvestor";

export default function InvestorPage() {
  const [slipOpen, setSlipOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const formRef = useRef<HTMLFormElement | null>(null);
  const printRef = useRef<HTMLDivElement | null>(null);

  // ----------------------------------
  // PRINT FUNKSJON
  // ----------------------------------
  const handlePrint = () => {
    if (!printRef.current) return;

    const printContents = printRef.current.innerHTML;
    const originalContents = document.body.innerHTML;

    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;
    window.location.reload(); // nødvendig for å få tilbake React state
  };

  // ----------------------------------
  // AJAX SKJEMA (Formspree)
  // ----------------------------------
  const submitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = formRef.current;
    if (!form) return;

    const data = new FormData(form);

    await fetch("https://formspree.io/f/meoykqyl", {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
    });

    setFormSubmitted(true);

    setTimeout(() => {
      document.getElementById("bmc-reveal")?.scrollIntoView({
        behavior: "smooth",
      });
    }, 300);
  };

  return (
    <main className="bg-slate-950 text-slate-50">

      {/* ------------------------------------------------ */}
      {/* HERO */}
      {/* ------------------------------------------------ */}
      <section className="border-b border-slate-800 bg-slate-950/80">
        <div className="mx-auto max-w-6xl px-4 py-16">
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

      {/* ------------------------------------------------ */}
      {/* Hvorfor investere nå */}
      {/* ------------------------------------------------ */}
      <section className="border-b border-slate-800 bg-slate-950/90">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-semibold sm:text-3xl">
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
                Eldre øker raskt — kapasiteten gjør ikke det.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
              <h3 className="text-sm font-semibold text-emerald-300">
                2. Tidlige signaler blir avgjørende
              </h3>
              <p className="mt-2 text-sm text-slate-300">
                KS og Helsedirektoratet peker på tidlig identifikasjon av endring.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
              <h3 className="text-sm font-semibold text-emerald-300">
                3. Digital modenhet
              </h3>
              <p className="mt-2 text-sm text-slate-300">
                Dagens 70-åringer har brukt smarttelefon i 15 år.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
              <h3 className="text-sm font-semibold text-emerald-300">
                4. Reguleringene går i riktig retning
              </h3>
              <p className="mt-2 text-sm text-slate-300">
                EHDS åpner for trygg bruk av pasientgenererte data.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------ */}
      {/* VPC INVESTOR */}
      {/* ------------------------------------------------ */}
      <section className="mt-16">
        <div className="max-w-5xl mx-auto">
          <VpcInvestor />
        </div>
      </section>
      {/* ----------------------------------------- */}
{/* SLIP – HOVEDSEKSJON (full versjon) */}
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
        En SLIP fungerer som et konvertibelt lån som blir til aksjer i neste emisjon –
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

        {/* RIKTIG KNAPP HER */}
       <button
  onClick={() => setSlipOpen((p) => !p)}
  className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold text-slate-900 hover:bg-emerald-400 transition-all"
>
  {slipOpen ? "Skjul SLIP" : "Les mer om SLIP"}
</button>

      </div>

    </div>
  </div>
</section>

{/* ------------------------------------------------ */}
{/* COLLAPSIBLE SLIP */}
{/* ------------------------------------------------ */}
<section className="max-w-5xl mx-auto mt-12 px-4">



  {/* Content */}
  {slipOpen && (
    <div className="mt-4 rounded-xl border border-slate-700 bg-slate-900/50 p-5 text-sm text-slate-300">
      
      <h3 className="text-emerald-300 font-semibold mb-2 text-sm">
        Hva er en SLIP?
      </h3>

      <p className="mb-3">
        En SLIP (Simple Loan Investment Paper) er et fleksibelt tidligfase-instrument som
        brukes av norske startups for å hente kapital før en full emisjon – uten å måtte
        fastsette verdsettelse nå.
      </p>

      <ul className="space-y-1 text-slate-300 text-sm">
        <li>• Konvertibelt lån som blir til aksjer ved neste emisjon.</li>
        <li>• Rask prosess – standardisert og advokatkvalitetssikret.</li>
        <li>• Vanlig blant engleinvestorer og tidligfasefond.</li>
        <li>• Gir rabatt eller “cap” — øker investors sikkerhet.</li>
      </ul>

      <p className="mt-3 text-xs text-slate-400">
        Fullt SLIP-dokument sendes etter at du fyller ut investor-skjemaet.
      </p>

    </div>
  )}
</section>

{/* ------------------------------------------------ */}
{/* INVESTOR-SKJEMA */}
{/* ------------------------------------------------ */}
      <section id="investor-access" className="max-w-6xl mx-auto px-4 py-16">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-semibold sm:text-3xl">
            Investor-dokumenter og videre dialog
          </h2>
          <p className="mt-3 text-sm text-slate-300 sm:text-base">
            Fyll inn skjemaet for å få tilgang til våre dokumenter.
          </p>
        </div>

        {/* BADGE */}
        {formSubmitted && (
          <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-emerald-700/30 px-4 py-2 text-sm text-emerald-300">
            ✔ Tilgang aktivert – se dokumentene nedenfor
          </div>
        )}

        {/* FORM */}
        <form
          ref={formRef}
          onSubmit={submitForm}
          className="mt-8 grid gap-4 sm:grid-cols-2 rounded-2xl border border-slate-800 bg-slate-900/70 p-6"
        >
          <div>
            <label className="block text-xs text-slate-300">Navn</label>
            <input
              required
              name="navn"
              className="w-full rounded bg-slate-950 border border-slate-700 px-3 py-2 text-sm"
            />
          </div>

          <div>
            <label className="block text-xs text-slate-300">E-post</label>
            <input
              required
              type="email"
              name="epost"
              className="w-full rounded bg-slate-950 border border-slate-700 px-3 py-2 text-sm"
            />
          </div>

          <div>
            <label className="block text-xs text-slate-300">Type investor</label>
            <select
              name="typeInvestor"
              className="w-full rounded bg-slate-950 border border-slate-700 px-3 py-2 text-sm"
            >
              <option>Privat investor</option>
              <option>Engleinvestor</option>
              <option>Fond</option>
              <option>Corporate</option>
            </select>
          </div>

          <div>
            <label className="block text-xs text-slate-300">
              Investeringsnivå (uforpliktende)
            </label>
            <select
              name="nivå"
              className="w-full rounded bg-slate-950 border border-slate-700 px-3 py-2 text-sm"
            >
              <option>&lt; 250 000 NOK</option>
              <option>250 000–500 000</option>
              <option>500 000–1 000 000</option>
              <option>1–5 millioner</option>
              <option>&gt; 5 millioner</option>
            </select>
          </div>
          {/* SLIP-valg */}
<div className="sm:col-span-2">
  <label className="block text-xs text-slate-300">
    Ønsker du informasjon om SLIP?
  </label>

  <select
    name="slip_interesse"
    className="w-full rounded bg-slate-950 border border-slate-700 px-3 py-2 text-sm mt-1"
  >
    <option>Nei</option>
    <option>Ja</option>
  </select>
</div>

          <div className="sm:col-span-2 mt-2">
            <button
              type="submit"
              className="rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-900 px-6 py-2 text-sm font-semibold"
            >
              Send inn og få dokumentene
            </button>
          </div>
        </form>
      </section>

      {/* ------------------------------------------------ */}
      {/* PRINT-VENNLIG VPC + BMC */}
      {/* ------------------------------------------------ */}
      {formSubmitted && (
        <section id="bmc-reveal" className="mt-20 mb-10">
          <div className="max-w-5xl mx-auto px-4">
            <button
              onClick={handlePrint}
              className="mb-6 rounded-full bg-slate-800 px-4 py-2 text-xs text-slate-300 hover:bg-slate-700"
            >
              Skriv ut investor-materiell
            </button>

            {/* PRINT-KONTAINER */}
            <div ref={printRef} className="bg-white text-black p-10 rounded-xl">
              {/* LOGO */}
              <div className="flex justify-center mb-8">
                <Image
                  src="/Tablaid Logo Horizontal Positive.png"
                  alt="Tablaid logo"
                  width={240}
                  height={80}
                />
              </div>

              <h2 className="text-center text-2xl font-semibold mb-8">
                Investor Materiell – Tablaid
              </h2>

              <div className="mb-16">
                <VpcInvestor />
              </div>

              <div className="mb-16">
                <BmcInvestor />
              </div>

              <div className="text-center text-sm mt-10">
                Kontakt: <strong>post@tablaid.no</strong>
              </div>
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
