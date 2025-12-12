"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import VpcToggle from "@/components/VpcToggle";
import VpcInvestor from "@/components/vpc/VpcInvestor";
import BmcInvestor from "@/components/bmc/BmcInvestor";
import HeroSection from "@/components/HeroSection";
import PageLayout from "@/components/layout/PageLayout";
import { HeroGlow } from "@/components/Glow";
import ToggleCTA from "@/components/ui/ToggleCTA";

export default function InvestorPage() {
  const [slipOpen, setSlipOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const formRef = useRef<HTMLFormElement | null>(null);
  const printRef = useRef<HTMLDivElement | null>(null);

  /* ---------------------------------------------------- */
  /* PRINT-FUNKSJON                                       */
  /* ---------------------------------------------------- */
  const handlePrint = () => {
    if (!printRef.current) return;

    window.print();
  };

  /* ---------------------------------------------------- */
  /* FORM HANDLER                                         */
  /* ---------------------------------------------------- */
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

  /* ---------------------------------------------------- */
  /* RENDER                                               */
  /* ---------------------------------------------------- */
  return (
    <PageLayout>

     <HeroSection
  badge="For investorer • 2025/26"
  title="Bygg morgendagens forebyggende helsetjenester sammen med Tablaid"
  subtitle="Tablaid kombinerer legemiddelstøtte, daglige helsesignaler og trygg deling for å fange opp risiko tidlig – lenge før behovet blir akutt. En løsning som treffer både brukere, pårørende og kommuner."
  supportText="Helsedirektoratet og KS peker på behovet for løsninger som gir tidligere identifisering av funksjonsfall og bedre beslutningsgrunnlag. Tablaid bygger nettopp det."
  image="/hero-investor.png"   // ← Sett inn riktig filnavn fra det nye bildet du valgte
  imageLeft={false}
  primaryCta={{ label: "Book en investordialog", href: "/kontakt" }}
/>



      {/* ------------------------------------------------------ */}
      {/* MARKEDSTIMING                                         */}
      {/* ------------------------------------------------------ */}

      <section className="border-b border-slate-800 bg-slate-950/90 py-20">
        <div className="mx-auto max-w-6xl px-6">

          <h2 className="text-2xl sm:text-3xl font-semibold">
            Hvorfor er timingen for Tablaid akkurat nå?
          </h2>

          <div className="space-y-4 max-w-3xl mt-6 text-slate-300 leading-relaxed">

            <p>
              Norge står foran den største omstillingen i moderne helsetjenester.
              NAV anslår i 2025 at vi vil mangle 
              <strong className="text-white"> over 54 000 helsearbeidere</strong> innen 2040 —
              30 000 sykepleiere og 24 000 helsefagarbeidere.
            </p>

            <p>
              Samtidig etterspør kommuner og nasjonale myndigheter bedre beslutningsgrunnlag,
              tidligere signaler og kontinuerlig innsikt i funksjon og helse.
            </p>

            <p>
              Behovet for verktøy som gir løpende oversikt og tidlig deteksjon 
              har aldri vært større — og aldri vært tydeligere.
            </p>
          </div>
        </div>
      </section>


      {/* ------------------------------------------------------ */}
      {/* HVORFOR TABLAID VINNER                                */}
      {/* ------------------------------------------------------ */}

      <section className="border-b border-slate-800 bg-slate-950/90 py-20">
        <div className="mx-auto max-w-6xl px-6">

          <h2 className="text-2xl sm:text-3xl font-semibold">
            Hvorfor Tablaid kan bli en ledende plattform for tidlig innsikt
          </h2>

          <div className="grid gap-6 sm:grid-cols-2 mt-10">

            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
              <h3 className="text-sm font-semibold text-emerald-300">1. Et hull i dagens helsetjenester</h3>
              <p className="mt-2 text-slate-300 text-sm">
                Det finnes ingen samlet løsning for daglige helsesignaler, funksjonsdata 
                og trygg deling mellom innbygger, pårørende og kommune.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
              <h3 className="text-sm font-semibold text-emerald-300">2. Utviklet med praksis og fag</h3>
              <p className="mt-2 text-slate-300 text-sm">
                Konseptet er bygget på klinisk erfaring, pasientbehov og tett dialog 
                med kommunale tjenester — ikke bare teknologi.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
              <h3 className="text-sm font-semibold text-emerald-300">3. Lav terskel – høy verdi</h3>
              <p className="mt-2 text-slate-300 text-sm">
                Tablaid fungerer som en uavhengig innbyggertjeneste, men kan integreres 
                med relevante systemer der det gir merverdi.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
              <h3 className="text-sm font-semibold text-emerald-300">4. Et unikt datasett</h3>
              <p className="mt-2 text-slate-300 text-sm">
                Daglige helsesignaler gir et bilde av endringer over tid 
                som dagens helsetjenester ikke klarer å fange opp.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ------------------------------------------------------ */}
      {/* VPC INVESTOR – COLLAPSIBLE */}
      {/* ------------------------------------------------------ */}

      <section className="mt-20 mb-10">
        <div className="max-w-5xl mx-auto px-6">
          {/* Plassholder eller intro-tekst */}
        </div>
      </section>

    <VpcToggle
  labelOn="Skjul investorens verdiforslag"
  labelOff="Se full investor-VPC"
>
  <VpcInvestor />
</VpcToggle>


      {/* ------------------------------------------------------ */}
      {/* SKALERBAR MODELL                                      */}
      {/* ------------------------------------------------------ */}

      <section className="border-b border-slate-800 bg-slate-950/80 py-20">
        <div className="mx-auto max-w-6xl px-6">

          <h2 className="text-2xl sm:text-3xl font-semibold mb-6">
            En forretningsmodell som skalerer naturlig
          </h2>

          <div className="grid gap-6 sm:grid-cols-3 text-sm">

            <div className="rounded-2xl bg-slate-900/60 border border-slate-800 p-6">
              <h3 className="text-xl font-bold text-emerald-300">Innbyggertjeneste</h3>
              <p className="mt-2 text-slate-300">
                Kan brukes av enkeltpersoner fra dag én, men er designet for å skaleres via kommunale lisensavtaler.
Dette gjør tjenesten tilgjengelig gratis for innbyggere, gir høy adopsjon og senker kommunenes terskel for å ta tjenesten i bruk.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-900/60 border border-slate-800 p-6">
              <h3 className="text-xl font-bold text-emerald-300">Kommunalt samarbeid</h3>
              <p className="mt-2 text-slate-300">
                Kommuner får tilgang til trygg og samtykkebasert innsikt som gir bedre oppfølging og tidligere håndtering av endringer.
Tjenesten kan tas i bruk uten store prosjekter og skaleres gradvis etter behov.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-900/60 border border-slate-800 p-6">
              <h3 className="text-xl font-bold text-emerald-300">Tredjepartsverdier</h3>
              <p className="mt-2 text-slate-300">
                På sikt kan Tablaid kobles med tjenester innen syn, hørsel, ernæring og aktivitet.
Dette styrker brukeropplevelsen og bygger en bærekraftig økosystem-modell med nye inntektsstrømmer.
              </p>
            </div>

          </div>
        </div>
      </section>




   
      {/* ------------------------------------------------------ */}
      {/* SLIP-SEKSJON                                           */}
      {/* ------------------------------------------------------ */}

      <section id="slip-section" className="border-b border-slate-800 bg-slate-950 py-16">
        <div className="mx-auto max-w-6xl px-6">

          <h2 className="text-2xl sm:text-3xl font-semibold">Hvordan kan du investere i Tablaid?</h2>

          <p className="mt-3 text-sm sm:text-base text-slate-300 max-w-3xl leading-relaxed">
            Tablaid tilbyr investering via 
            <strong className="text-emerald-300"> Simple Loan Investment Paper (SLIP)</strong>, 
            et fleksibelt tidligfaseinstrument som konverterer til aksjer ved neste emisjon.
          </p>

          <div className="mt-8 rounded-2xl border border-slate-800 bg-slate-900/70 p-6 sm:p-8">

            <div className="grid gap-5 sm:grid-cols-3">

              <div className="rounded-xl border border-slate-700 bg-slate-900/40 p-4">
                <h4 className="text-sm font-semibold text-emerald-300">Enkel</h4>
                <p className="mt-1 text-xs text-slate-400">
                  Ingen kompliserte avtaler før emisjon.
                </p>
              </div>

              <div className="rounded-xl border border-slate-700 bg-slate-900/40 p-4">
                <h4 className="text-sm font-semibold text-emerald-300">Rask</h4>
                <p className="mt-1 text-xs text-slate-400">
                  Juridisk standardisert dokument.
                </p>
              </div>

              <div className="rounded-xl border border-slate-700 bg-slate-900/40 p-4">
                <h4 className="text-sm font-semibold text-emerald-300">Trygg</h4>
                <p className="mt-1 text-xs text-slate-400">
                  Brukt av norske engleinvestorer og fond.
                </p>
              </div>

            </div>

            <div className="mt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <p className="text-sm text-slate-400">Ønsker du å motta SLIP-dokumentet?</p>


<ToggleCTA
  toggled={slipOpen}
  onClick={() => setSlipOpen(!slipOpen)}
  labelOn="Skjul SLIP"
  labelOff="Les mer om SLIP"
/>

            </div>

          </div>
        </div>
      </section>


      {/* ------------------------------------------------------ */}
      {/* SLIP COLLAPSIBLE                                       */}
      {/* ------------------------------------------------------ */}

      {slipOpen && (
        <section className="max-w-5xl mx-auto mt-8 px-6">
          <div className="rounded-xl border border-slate-700 bg-slate-900/50 p-6 text-sm text-slate-300">
            <h3 className="text-emerald-300 font-semibold mb-2 text-sm">Hva er en SLIP?</h3>

            <p className="mb-3">
              En SLIP er et konvertibelt lån som blir til aksjer ved neste emisjon.
            </p>

            <ul className="space-y-1 text-slate-300 text-sm">
              <li>• Konverteres automatisk ved neste emisjon</li>
              <li>• Rask prosess og advokatstandardisert dokument</li>
              <li>• Vanlig blant engleinvestorer og tidligfasefond</li>
              <li>• Gir rabatt eller cap for økt sikkerhet</li>
            </ul>

            <p className="mt-4 text-xs text-slate-400">
              Fullt dokument sendes etter registrering i investor-skjemaet.
            </p>
          </div>
        </section>
      )}


      {/* ------------------------------------------------------ */}
      {/* INVESTOR SKJEMA                                        */}
      {/* ------------------------------------------------------ */}

      <section id="investor-access" className="max-w-6xl mx-auto px-6 py-20">
        <div className="max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-semibold">Investor-dokumenter og videre dialog</h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
            Fyll inn skjemaet for å få tilgang.
          </p>
        </div>

        {formSubmitted && (
          <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-emerald-700/30 px-4 py-2 
            text-sm text-emerald-300">
            ✔ Tilgang aktivert – se dokumentene nedenfor
          </div>
        )}

        <form
          ref={formRef}
          onSubmit={submitForm}
          className="mt-8 grid gap-4 sm:grid-cols-2 rounded-2xl border border-slate-800 
            bg-slate-900/70 p-6"
        >
          <div>
            <label className="block text-xs text-slate-300">Navn</label>
            <input
              required
              name="navn"
              className="w-full rounded bg-slate-950 border border-slate-700 
                px-3 py-2 text-sm"
            />
          </div>

          <div>
            <label className="block text-xs text-slate-300">E-post</label>
            <input
              required
              type="email"
              name="epost"
              className="w-full rounded bg-slate-950 border border-slate-700 
                px-3 py-2 text-sm"
            />
          </div>

          <div>
            <label className="block text-xs text-slate-300">Type investor</label>
            <select
              name="typeInvestor"
              className="w-full rounded bg-slate-950 border border-slate-700 
                px-3 py-2 text-sm"
            >
              <option>Privat investor</option>
              <option>Engleinvestor</option>
              <option>Fond</option>
              <option>Corporate</option>
            </select>
          </div>

          <div>
            <label className="block text-xs text-slate-300">Investeringsnivå (uforpliktende)</label>
            <select
              name="nivå"
              className="w-full rounded bg-slate-950 border border-slate-700 
                px-3 py-2 text-sm"
            >
              <option>&lt; 250 000 NOK</option>
              <option>250 000–500 000</option>
              <option>500 000–1 000 000</option>
              <option>1–5 millioner</option>
              <option>&gt; 5 millioner</option>
            </select>
          </div>

          <div className="sm:col-span-2">
            <label className="block text-xs text-slate-300">Ønsker du informasjon om SLIP?</label>
            <select
              name="slip_interesse"
              className="w-full rounded bg-slate-950 border border-slate-700 
                px-3 py-2 text-sm mt-1"
            >
              <option>Nei</option>
              <option>Ja</option>
            </select>
          </div>

          <div className="sm:col-span-2 mt-2">
  <button
    type="submit"
    className="rounded-full bg-emerald-500 hover:bg-emerald-400 
      text-white px-6 py-2 text-sm font-semibold transition-all"
  >
    Send inn og få dokumentene
  </button>
</div>

        </form>
      </section>


      {/* ------------------------------------------------------ */}
      {/* PRINTABLE SECTION                                      */}
      {/* ------------------------------------------------------ */}

      {formSubmitted && (
        <section id="bmc-reveal" className="mt-20 mb-10">
          <div className="max-w-5xl mx-auto px-6">

            <button
              onClick={handlePrint}
              className="mb-6 rounded-full bg-slate-800 px-4 py-2 text-xs 
                text-slate-300 hover:bg-slate-700"
            >
              Skriv ut investor-materiell
            </button>

            <div ref={printRef} className="print-container p-10 bg-white text-black rounded-xl">

              <Image
                src="/logo_svart_tekst.png"
                alt="Tablaid logo"
                width={260}
                height={90}
                className="print-logo"
              />

              <h2 className="text-center text-2xl font-semibold mb-10 print-heading">
                Investor Materiell – Tablaid
              </h2>

              <div className="mb-16 print:mb-10">
                <VpcInvestor />
              </div>

              <div className="mb-16 print:mb-10">
                <BmcInvestor />
              </div>

              <p className="text-center text-sm mt-10 print-subtle">
                Kontakt: <strong>post@tablaid.no</strong>
              </p>

            </div>
          </div>
        </section>
      )}

    </PageLayout>
  );
}
