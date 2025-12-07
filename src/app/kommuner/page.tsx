"use client";

import React from "react";
import Link from "next/link";
import VpcKommuner from "@/components/vpc/VpcKommuner";

export default function KommunerPage() {
  return (
    <div className="min-h-screen section-dark flex flex-col">

      {/* ---------------------------------------------------------------------- */}
      {/* HERO – med glow, korrekt spacing, mobilvennlig layout                  */}
      {/* ---------------------------------------------------------------------- */}

      <section className="relative overflow-hidden section-dark pb-20 pt-24">

        {/* Glow */}
        <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-72 
                        bg-emerald-500/20 blur-[120px]" />

        <div className="mx-auto flex max-w-[var(--max-w)] flex-col-reverse gap-12 
                        px-6 lg:px-20 lg:flex-row lg:items-center">

          {/* TEXT */}

          <div className="flex-1 text-center lg:text-left">
        
          <span className="badge">Pilot våren 2026 • Tablaid</span>
            <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-4">
              En innbyggertjeneste som gir{" "}
              <span className="text-emerald-400">din kommune</span> tidlig innsikt
            </h1>

            <p className="text-lg md:text-xl text-[var(--text-secondary)] 
                          max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Fra <strong>mars 2026</strong> kan din kommune delta i en{" "}
              <strong>lavterskel utprøving</strong> der innbyggere logger
              hverdagsinformasjon og legemiddelbruk. Dere får trenddata og tidlige signaler —
              uten tunge systemer og med minimal belastning på egne tjenester.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link href="/kontakt" className="btn-primary px-6 py-3 text-base">
                Meld interesse for utprøving
              </Link>

              <a href="/files/tablaid-info-kommuner.pdf" 
                 className="btn-secondary px-6 py-3 text-base">
                Last ned infoskriv (PDF)
              </a>
            </div>

            <p className="mt-5 text-xs text-[var(--text-secondary)] max-w-sm mx-auto lg:mx-0">
              «Utvikling over tid er avgjørende for å identifisere økende risiko tidlig.»  
              – Helsedirektoratet, Samhandlingsstrategi 2024–2030
            </p>
          </div>

          {/* IMAGE */}
          <div className="flex flex-1 justify-center lg:justify-end">
            <div className="relative w-64 sm:w-80 md:w-full max-w-sm overflow-hidden rounded-3xl 
                            border border-white/10 bg-[#0F172A]/70 
                            shadow-[0_0_40px_-10px_#10b981]">
              <img
                src="/app-triple_3.png"
                alt="Tablaid app for kommuner"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

        </div>
      </section>


      {/* ---------------------------------------------------------------------- */}
      {/* SEKSJON 2 – UTFORDRINGER                                               */}
      {/* ---------------------------------------------------------------------- */}

      <section className="section-lighter py-20">
        <div className="mx-auto max-w-[var(--max-w)] px-6 text-center">

          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-6">
            Kommunene trenger tidligere signaler – ikke flere systemer
          </h2>

          <p className="text-lg text-[var(--text-secondary)] max-w-3xl mx-auto 
                        leading-relaxed mb-6">
            Mange kommuner beskriver at endringer i funksjon og legemiddelbruk
            oppdages først når behovet har blitt akutt. Pårørende sitter på viktig
            informasjon, men mangler verktøy. Tjenestene mangler løpende innsikt –
            og må basere seg på punktvise vurderinger.
          </p>

          <p className="text-sm text-[var(--text-secondary)] italic max-w-3xl mx-auto">
            Parafrase fra Helsedirektoratet og Legeforeningen:
            «Tidlige signaler og innsikt over tid er avgjørende for å identifisere økende risiko
            før behovet blir omfattende.»
          </p>

        </div>
      </section>


      {/* ---------------------------------------------------------------------- */}
      {/* SEKSJON 3 – VERDI FOR KOMMUNEN (grid optimalisert for mobil)          */}
      {/* ---------------------------------------------------------------------- */}

      <section className="section-dark py-20">
        <div className="mx-auto max-w-[var(--max-w)] px-6 text-center">

          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-6">
            Hva får <span className="text-emerald-400">din kommune</span> ut av Tablaid?
          </h2>

          <p className="text-lg text-[var(--text-secondary)] max-w-3xl mx-auto 
                        leading-relaxed mb-12">
            Tablaid gir et bedre grunnlag for riktige tjenester basert på faktiske
            hverdagsdata, tidlige signaler og trygg koordinering mellom innbygger,
            pårørende og kommunen.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 max-w-4xl mx-auto">

            <div className="space-y-4 text-[var(--text-secondary)] text-lg text-left">
              <p>• Tidlige signaler om endringer — før behovet eskalerer</p>
              <p>• Bedre prioritering av ressurser</p>
              <p>• Innsikt basert på faktisk hverdag, ikke punktmålinger</p>
            </div>

            <div className="space-y-4 text-[var(--text-secondary)] text-lg text-left">
              <p>• Pårørende løftes som trygg og koordinert ressurs</p>
              <p>• Ingen integrasjoner eller nye systemer</p>
              <p>• Trenddata gir bedre beslutningsgrunnlag over tid</p>
            </div>

          </div>
        </div>
      </section>


      {/* ---------------------------------------------------------------------- */}
      {/* SEKSJON 4 – UTPRØVING FRA MARS 2026                                    */}
      {/* ---------------------------------------------------------------------- */}

      <section className="section-lighter py-20">
        <div className="mx-auto max-w-[var(--max-w)] px-6">

          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-6 text-center">
            Utprøving fra mars 2026 – lav terskel, høy verdi
          </h2>

          <p className="text-lg text-[var(--text-secondary)] max-w-3xl mx-auto 
                        text-center leading-relaxed mb-10">
            Utprøvingen er designet for å være enkel å gjennomføre, med minimal innsats
            fra kommunen. Dere får trenddata, tidlige signaler og bedre grunnlag for
            riktige beslutninger — og lisensen gjelder ut 2026.
          </p>

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

          <p className="mt-8 text-sm text-[var(--text-secondary)] text-center italic">
            «Tidlige signaler gjør det mulig å sette inn riktige tiltak — og bruke ressursene der de trengs mest.»  
            – KS (velferdsteknologiske føringer)
          </p>

          <p className="mt-4 text-sm text-[var(--text-secondary)] text-center italic">
            Helsetilsynet: «Legemiddelbruk i hjemmet er en av de store og vedvarende pasientsikkerhetsutfordringene.»
          </p>

        </div>
      </section>


      {/* ---------------------------------------------------------------------- */}
      {/* SEKSJON 5 – KONTAKTSKJEMA                                              */}
      {/* ---------------------------------------------------------------------- */}

      <section id="pilotkontakt" className="section-soft py-20">
        <div className="max-w-3xl mx-auto text-center px-6">

          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-6">
            Meld interesse for pilot fra mars 2026
          </h2>

          <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto mb-8">
            Fyll ut skjemaet – du får tilsendt infoskriv, og vi tar kontakt for et kort 
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
      {/* SEKSJON 6 – VPC KOMPONENT                                              */}
      {/* ---------------------------------------------------------------------- */}

      <section className="section-lighter py-20">
        <div className="max-w-[var(--max-w)] mx-auto px-6">
          <VpcKommuner />
        </div>
      </section>
    </div>
  );
}
