"use client";

import React from "react";
import Link from "next/link";
import VpcKommuner from "@/components/vpc/VpcKommuner";

export default function KommunerPage() {
  return (
    <div className="min-h-screen section-dark flex flex-col">

     {/* ---------------------------------------------------------------------- */}
{/* HERO – balansert som forsiden, ikke full sentrering                      */}
{/* ---------------------------------------------------------------------- */}

<section className="relative overflow-hidden bg-gradient-to-b from-slate-900 to-slate-950 pb-20 pt-24">
  {/* Glow */}
  <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-72 
                  bg-emerald-500/20 blur-[120px]" />

  <div className="mx-auto flex max-w-[var(--max-w)] flex-col-reverse gap-12 px-6 
                  lg:flex-row lg:items-center">

    {/* TEXT SECTION */}
    <div className="flex-1 px-30">
          <span className="badge">Pilot våren 2026 • Tablaid</span>
          

      <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-4">
        En innbyggertjeneste som gir{" "}
        <span className="text-emerald-400">din kommune</span> tidlig innsikt
      </h1>

      <p className="text-lg md:text-xl text-[var(--text-secondary)] max-w-xl leading-relaxed">
        Fra <strong>mars 2026</strong> kan din kommune delta i en 
        <strong> lavterskel utprøving</strong> der innbyggere logger hverdagsinformasjon og 
        legemiddelbruk. Dere får trenddata og tidlige signaler — uten tunge systemer og med 
        minimal belastning på tjenestene.
      </p>

      {/* CTA BUTTONS */}
      <div className="mt-7 flex flex-col sm:flex-row gap-4">

  <Link
    href="/kontakt"
    className="px-6 py-3 text-base rounded-lg border border-emerald-400/40 
               text-white hover:bg-emerald-500/10 transition"
  >
    Meld interesse for utprøving
  </Link>

  <a
    href="/files/tablaid-info-kommuner.pdf"
    className="px-6 py-3 text-base rounded-lg border border-white/20 
               text-[var(--text-secondary)] hover:bg-white/5 transition"
  >
    Last ned infoskriv (PDF)
  </a>

</div>

      <p className="mt-8 text-s text-[var(--text-secondary)] max-w-sm">
        «Utvikling over tid er avgjørende for å identifisere økende risiko tidlig.»  
        – Helsedirektoratet, Samhandlingsstrategi 2024–2030
      </p>
    </div>

    {/* IMAGE SECTION */}
        <div className="flex flex-1 justify-center">
          <div className="relative w-full max-w-md overflow-hidden rounded-3xl 
                      border border-white/10 bg-[#0F172A]/70 
                      shadow-[0_0_40px_-10px_#10b981]">
        <img
          src="/app-triple_3.png"
          alt="Tablaid app for kommuner"
          className="w-full h-auto object-cover"
        />
      </div>
    </div>

  </div>
</section>


      {/* ---------------------------------------------------------------------- */}
      {/* SEKSJON 2 – UTFORDRINGENE (nå i kort-format)                           */}
      {/* ---------------------------------------------------------------------- */}

      <section className="section-lighter py-24">
        <div className="mx-auto max-w-[var(--max-w)] px-6">

          <h2 className="text-3xl md:text-4xl font-semibold text-white text-center mb-12">
            Kommunene trenger tidligere signaler – ikke flere systemer
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

            <div className="card text-left">
              <h3 className="text-emerald-300 font-semibold text-sm mb-2">Uforutsigbarhet</h3>
              <p className="text-[var(--text-secondary)] text-sm">
                Endringer fanges ofte opp for sent — først når behovet har eskalert.
              </p>
            </div>

            <div className="card text-left">
              <h3 className="text-emerald-300 font-semibold text-sm mb-2">Mangler løpende innsikt</h3>
              <p className="text-[var(--text-secondary)] text-sm">
                Tjenestene må basere vurderinger på sporadiske observasjoner.
              </p>
            </div>

            <div className="card text-left">
              <h3 className="text-emerald-300 font-semibold text-sm mb-2">Pårørende uten verktøy</h3>
              <p className="text-[var(--text-secondary)] text-sm">
                Verdifulle observasjoner forblir usystematiserte og udokumenterte.
              </p>
            </div>

          </div>

          <p className="mt-14 text-s text-[var(--text-secondary)] italic text-center max-w-2xl mx-auto">
            «Tidlige signaler og innsikt over tid er avgjørende for å identifisere økende risiko.»  
            – Parafrase fra Helsedirektoratet & Legeforeningen
          </p>

        </div>
      </section>



      {/* ---------------------------------------------------------------------- */}
      {/* SEKSJON 3 – VERDI FOR KOMMUNEN (kort-baserte kolonner)                */}
      {/* ---------------------------------------------------------------------- */}

      <section className="section-dark py-18">
        <div className="mx-auto max-w-[var(--max-w)] px-6">

          <h2 className="text-3xl md:text-4xl font-semibold text-white text-center mb-12">
            Hva får <span className="text-emerald-400">din kommune</span> ut av Tablaid?
          </h2>

          <div className="grid lg:grid-cols-2 gap-10 max-w-5xl mx-auto">

            <div className="card text-left">
              <h3 className="text-sm font-semibold text-emerald-300 mb-3">Proaktiv oppfølging</h3>
              <p className="text-[var(--text-secondary)] leading-relaxed text-sm">
                Tidlige signaler gjør det enklere å sette inn tiltak før behovet eskalerer.
              </p>
            </div>

            <div className="card text-left">
              <h3 className="text-sm font-semibold text-emerald-300 mb-3">Bedre ressursbruk</h3>
              <p className="text-[var(--text-secondary)] leading-relaxed text-sm">
                Trenddata gir et mer presist grunnlag for riktig prioritering.
              </p>
            </div>

            <div className="card text-left">
              <h3 className="text-sm font-semibold text-emerald-300 mb-3">Pårørende som ressurs</h3>
              <p className="text-[var(--text-secondary)] leading-relaxed text-sm">
                Et felles språk og trygg informasjonsdeling reduserer friksjon.
              </p>
            </div>

            <div className="card text-left">
              <h3 className="text-sm font-semibold text-emerald-300 mb-3">Ingen integrasjoner</h3>
              <p className="text-[var(--text-secondary)] leading-relaxed text-sm">
                Tablaid fungerer som ren innbyggertjeneste — raskt å ta i bruk.
              </p>
            </div>

          </div>

        </div>
      </section>



      {/* ---------------------------------------------------------------------- */}
      {/* SEKSJON 4 – UTPRØVING                                                  */}
      {/* ---------------------------------------------------------------------- */}

      <section className="section-lighter py-24">
        <div className="mx-auto max-w-[var(--max-w)] px-6">

          <h2 className="text-3xl md:text-4xl font-semibold text-white text-center mb-10">
            Utprøving fra mars 2026 – lav terskel, høy verdi
          </h2>

          <div className="card max-w-2xl mx-auto text-left text-[var(--text-secondary)]">
            <h3 className="text-xl font-semibold text-white mb-4">
              Hva inngår i utprøvingen?
            </h3>

            <ul className="space-y-3 text-lg">
              <li>• Oppstartsmøte og tilpasning til kommunens behov</li>
              <li>• 20–30 frivillig deltakende innbyggere</li>
              <li>• Daglig helse- og funksjonslogging</li>
              <li>• Månedlige trender og nøkkelfunn</li>
              <li>• Ingen personsensitive data deles</li>
              <li>• Lavterskel lisens gyldig ut 2026</li>
            </ul>
          </div>

          <p className="mt-8 text-m text-[var(--text-secondary)] text-center italic max-w-xl mx-auto">
            «Tidlige signaler gjør det mulig å sette inn riktige tiltak — og bruke ressursene der de trengs mest.»  
            – KS
          </p>

        </div>
      </section>


      {/* ---------------------------------------------------------------------- */}
      {/* SEKSJON 5 – KONTAKTSKJEMA                                              */}
      {/* ---------------------------------------------------------------------- */}

      <section id="pilotkontakt" className="section-soft py-14">
        <div className="max-w-3xl mx-auto text-center px-6">

          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-6">
            Meld interesse for pilot 2026
          </h2>

          <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto mb-8">
            Fyll ut skjemaet – du får infoskriv, og vi tar kontakt for et kort 
            uforpliktende videomøte.
          </p>

          <form
            action="https://formspree.io/f/mleowead"
            method="POST"
            className="card space-y-4 text-left"
          >
            <input
              type="text"
              name="navn"
              required
              placeholder="Navn"
              className="w-full p-3 rounded bg-slate-900 border border-slate-700 text-white"
            />

            <input
              type="email"
              name="email"
              required
              placeholder="E-post"
              className="w-full p-3 rounded bg-slate-900 border border-slate-700 text-white"
            />

            <input
              type="text"
              name="kommune"
              required
              placeholder="Kommune"
              className="w-full p-3 rounded bg-slate-900 border border-slate-700 text-white"
            />

            <textarea
              name="melding"
              placeholder="Evt. kommentar"
              rows={4}
              className="w-full p-3 rounded bg-slate-900 border border-slate-700 text-white"
            />

            <button type="submit" className="btn-primary w-full py-3 text-lg">
              Send inn
            </button>
          </form>

        </div>
      </section>


      {/* ---------------------------------------------------------------------- */}
      {/* SEKSJON 6 – VPC                                                       */}
      {/* ---------------------------------------------------------------------- */}

      <section className="section-lighter py-24">
        <div className="max-w-5xl mx-auto px-6">
          <VpcKommuner />
        </div>
      </section>

    </div>
  );
}
