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


{/* -------------------------------------------------------- */}
{/* HERO SECTION MED GLOW (SAMME STIL SOM KOMMUNE-SIDEN)     */}
{/* -------------------------------------------------------- */}

<section className="relative overflow-hidden section-dark pb-20 pt-24">

  {/* Glow */}  
  <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-72 
                  bg-emerald-500/20 blur-[120px]" />

  <div className="mx-auto max-w-[var(--max-w)] px-98">
    <span className="badge">For investorer</span>

    <h1 className="mt-6 text-3xl md:text-4xl font-bold text-white leading-tight">
      Bygg morgendagens forebyggende helsetjenester sammen med Tablaid
    </h1>

    <p className="mt-4 text-base md:text-lg text-[var(--text-secondary)] max-w-2xl leading-relaxed">
      Tablaid kombinerer legemiddelassistent, funksjonsdata og pårørendestøtte 
      for å oppdage funksjonsfall tidlig – før behovet eskalerer. 
      Norske kommuner etterspør akkurat dette: tidlige signaler, innsikt over tid 
      og bedre grunnlag for riktige tjenester.
    </p>

    <div className="mt-8 flex flex-wrap items-center gap-4">
      <Link
        href="/kontakt"
        className="inline-flex items-center justify-center rounded-full 
                   bg-emerald-500 px-6 py-3 text-sm font-semibold 
                   text-slate-900 hover:bg-emerald-400 transition"
      >
        Book en prat om Tablaid
      </Link>

      <p className="text-xs text-slate-400">
        Vi søker investorer som kombinerer kapital og samfunnsengasjement.
      </p>
    </div>
  </div>
</section>



{/* -------------------------------------------------------- */}
{/* HVORFOR INVESTERE NÅ                                     */}
{/* -------------------------------------------------------- */}

<section className="border-b border-slate-800 bg-slate-950/90 py-20">
  <div className="mx-auto max-w-6xl px-6">
    <div className="max-w-3xl">
      <h2 className="text-2xl font-semibold sm:text-3xl">
        Hvorfor investere i Tablaid nå?
      </h2>

      <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
        Norge står midt i den største demografiske endringen i moderne tid. 
        Kommunene må flytte innsats fra reaktiv til proaktiv oppfølging – og Tablaid 
        adresserer akkurat dette gapet. 
        KS, Helsedirektoratet og Regjeringen peker på behovet for løsninger som gir
        <strong className="text-white"> tidlige signaler og løpende innsikt.</strong>
      </p>
    </div>

    {/* Fire kort med nøkkeldrivere */}
    <div className="mt-10 grid gap-6 sm:grid-cols-2">
      <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
        <h3 className="text-sm font-semibold text-emerald-300">1. Demografisk trykk</h3>
        <p className="mt-2 text-sm text-slate-300">
          Antallet eldre øker raskere enn kapasiteten i helse- og omsorgstjenestene.
        </p>
      </div>

      <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
        <h3 className="text-sm font-semibold text-emerald-300">2. Tidlige signaler blir kritisk</h3>
        <p className="mt-2 text-sm text-slate-300">
          KS og Helsedirektoratet etterlyser løsninger som kan fange opp endring tidlig.
        </p>
      </div>

      <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
        <h3 className="text-sm font-semibold text-emerald-300">3. Økende digital modenhet</h3>
        <p className="mt-2 text-sm text-slate-300">
          Dagens 70-åringer har brukt smarttelefon i over 15 år – perfekt timing.
        </p>
      </div>

      <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
        <h3 className="text-sm font-semibold text-emerald-300">4. Reguleringer i vår favør</h3>
        <p className="mt-2 text-sm text-slate-300">
          EHDS åpner for trygg bruk av pasientgenererte data og innovasjon i primærhelsetjenesten.
        </p>
      </div>
    </div>
  </div>
</section>



{/* -------------------------------------------------------- */}
{/* BRO-SEKSJON – MARKED I BEVEGELSE                         */}
{/* -------------------------------------------------------- */}

<section className="border-b border-slate-800 bg-slate-950/90 py-20">
  <div className="max-w-6xl mx-auto px-6">

    <h2 className="text-2xl sm:text-3xl font-semibold text-white">
      Et marked som allerede er i bevegelse
    </h2>

    <p className="mt-4 text-slate-300 text-sm sm:text-base max-w-3xl leading-relaxed">
      Norske kommuner står foran et strukturelt skifte: fra reaktiv oppfølging 
      til proaktiv og datadrevet tjenesteutvikling. Alle sentrale aktører – KS, Helsedirektoratet 
      og Regjeringen – peker på behovet for løsninger som gir
      <strong className="text-white"> tidlige signaler og dokumentert funksjonsutvikling.</strong>
    </p>

    <p className="mt-4 text-slate-300 text-sm sm:text-base max-w-3xl leading-relaxed">
      Tablaid treffer dette direkte gjennom en kommunelisens uten integrasjonskrav. 
      Det gjør terskelen for innkjøp lav og skalerbarheten høy.
    </p>

    <p className="mt-4 text-slate-300 text-sm sm:text-base max-w-3xl leading-relaxed">
      Markedstallene nedenfor viser hvordan Tablaid naturlig passer inn i et internasjonalt 
      skifte der hjemmeoppfølging, legemiddeloversikt og funksjonsdata flyttes ut til innbyggeren selv.
    </p>
  </div>
</section>



{/* -------------------------------------------------------- */}
{/* TAM / SAM / SOM                                          */}
{/* -------------------------------------------------------- */}

<section className="border-b border-slate-800 bg-slate-950/80 py-20 relative overflow-hidden">

  {/* Glow */}
  <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-64 
                  bg-emerald-500/10 blur-[120px]" />

  <div className="max-w-6xl mx-auto px-6 text-center">

    <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-6">
      Et voksende globalt marked med sterk betalingsvilje
    </h2>

    <p className="text-slate-300 max-w-3xl mx-auto text-sm sm:text-base mb-12 leading-relaxed">
      Tablaid opererer i et raskt voksende segment innen helseteknologi: 
      hjemmeoppfølging, tidlig identifikasjon av risiko og beslutningsstøtte for kommuner.  
      Modellen kombinerer kommunale lisensinntekter og abonnement fra pårørende.
    </p>

    <div className="grid gap-6 sm:grid-cols-3">

      {/* TAM */}
      <div className="rounded-2xl bg-slate-900/60 border border-slate-800 p-6">
        <h3 className="text-xl font-bold text-emerald-300">TAM</h3>
        <p className="mt-2 text-sm text-slate-300 leading-relaxed">
          Globalt marked for hjemmeoppfølging og innbyggerstyrt helseinformasjon:
          <br />
          <span className="font-semibold text-white">230+ mrd NOK</span>
        </p>
      </div>

      {/* SAM */}
      <div className="rounded-2xl bg-slate-900/60 border border-slate-800 p-6">
        <h3 className="text-xl font-bold text-emerald-300">SAM</h3>
        <p className="mt-2 text-sm text-slate-300 leading-relaxed">
          Norden + Nordeuropa (velferdsteknologi):
          <br />
          <span className="font-semibold text-white">~15 mrd NOK</span>
        </p>
      </div>

      {/* SOM */}
      <div className="rounded-2xl bg-slate-900/60 border border-slate-800 p-6">
        <h3 className="text-xl font-bold text-emerald-300">SOM (5 år)</h3>
        <p className="mt-2 text-sm text-slate-300 leading-relaxed">
          200 norske + 200 internasjonale kommuner:
          <br />
          <span className="font-semibold text-white">≈ 200–250 MNOK årlig</span>
        </p>
      </div>

    </div>
  </div>
</section>

      {/* ------------------------------------------------ */}
      {/* VPC INVESTOR */}
      {/* ------------------------------------------------ */}
      <section className="mt-20 mb-10">
        <div className="max-w-5xl mx-auto px-6">
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
