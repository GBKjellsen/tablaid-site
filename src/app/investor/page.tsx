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

  /* ---------------------------------------------------- */
  /* PRINT-FUNKSJON                                       */
  /* ---------------------------------------------------- */
  const handlePrint = () => {
    if (!printRef.current) return;
    const originalContents = document.body.innerHTML;
    const printContents = printRef.current.innerHTML;

    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;
    window.location.reload();
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

  return (
    <main className="bg-slate-950 text-slate-50">

      {/* ------------------------------------------------------ */}
      {/* HERO SECTION MED SOFT GLOW                             */}
      {/* ------------------------------------------------------ */}
      <section className="relative overflow-hidden pb-20 pt-28 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-72 bg-emerald-500/20 blur-[120px]" />

        <div className="mx-auto max-w-[var(--max-w)] flex flex-col gap-8 px-6 lg:px-20">
<div className="inline-flex">
  <span className="badge mt-2 px-3 py-1 bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 rounded-full">
    For investorer
  </span>
</div>

          <h1 className="text-3xl md:text-4xl font-bold leading-tight">
            Bygg morgendagens forebyggende helsetjenester sammen med Tablaid
          </h1>

          <p className="text-base md:text-lg text-slate-300 max-w-2xl leading-relaxed">
            Tablaid kombinerer legemiddelassistent, funksjonsdata og pårørendestøtte 
            for å oppdage funksjonsfall tidlig – før behovet eskalerer.
          </p>

          <div className="mt-4 flex flex-wrap items-center gap-4">
            <Link
              href="/kontakt"
              className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-6 py-3 
                         text-sm font-semibold text-slate-900 hover:bg-emerald-400 transition"
            >
              Book en prat om Tablaid
            </Link>

            <p className="text-xs text-slate-400 max-w-xs">
              Vi søker investorer som kombinerer kapital og samfunnsengasjement.
            </p>
          </div>
        </div>
      </section>


      {/* ------------------------------------------------------ */}
      {/* HVORFOR INVESTERE NÅ                                  */}
      {/* ------------------------------------------------------ */}
      <section className="border-b border-slate-800 bg-slate-950/90 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-3xl">
            <h2 className="text-2xl sm:text-3xl font-semibold">Hvorfor investere i Tablaid nå?</h2>

            <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
              Norge står midt i en demografisk endring som krever radikal omstilling. 
              KS, Helsedirektoratet og Regjeringen peker alle på samme behov: 
              <strong className="text-white"> tidlige signaler og løpende innsikt.</strong>
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">

            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
              <h3 className="text-sm font-semibold text-emerald-300">1. Demografisk trykk</h3>
              <p className="mt-2 text-sm text-slate-300">
                Antallet eldre øker raskere enn kommunenes kapasitet.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
              <h3 className="text-sm font-semibold text-emerald-300">2. Tidlige signaler blir kritisk</h3>
              <p className="mt-2 text-sm text-slate-300">
                Beslutningsstøtte krever fortløpende data – ikke årskontroller.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
              <h3 className="text-sm font-semibold text-emerald-300">3. Digital modenhet</h3>
              <p className="mt-2 text-sm text-slate-300">
                Dagens 70-åringer har brukt smarttelefon i over 15 år.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
              <h3 className="text-sm font-semibold text-emerald-300">4. Reguleringer i vår favør</h3>
              <p className="mt-2 text-sm text-slate-300">
                EHDS åpner for trygg bruk av pasientgenererte data.
              </p>
            </div>

          </div>
        </div>
      </section>


      {/* ------------------------------------------------------ */}
      {/* MARKEDSFORKLARENDE BRO-SEKSJON                        */}
      {/* ------------------------------------------------------ */}
      <section className="border-b border-slate-800 bg-slate-950/90 py-20">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-2xl sm:text-3xl font-semibold">Et marked som allerede er i bevegelse</h2>

          <div className="space-y-4 max-w-3xl mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
            <p>
              Norske kommuner skifter strategi fra reaktiv oppfølging til proaktiv og datadrevet omsorg. 
              Alle toneangivende aktører peker på behovet for 
              <strong className="text-white"> tidlige signaler og dokumentert funksjonsutvikling.</strong>
            </p>

            <p>
              Tablaid tilbyr en lavterskel kommunelisens uten integrasjonskrav. 
              Det gjør innkjøp raskt, rimelig og skalerbart.
            </p>

            <p>
              Internasjonalt flyttes hjemmeoppfølging, funksjonsdata og medisinoversikt 
              nærmere brukeren selv — og kommunene betaler for å redusere presset på tjenestene.
            </p>
          </div>

        </div>
      </section>


      {/* ------------------------------------------------------ */}
      {/* TAM / SAM / SOM                                        */}
      {/* ------------------------------------------------------ */}
      <section className="border-b border-slate-800 bg-slate-950/80 py-20 relative overflow-hidden">
        <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-64 bg-emerald-500/10 blur-[120px]" />

        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-6">
            Et voksende globalt marked med sterk betalingsvilje
          </h2>

          <p className="text-slate-300 max-w-3xl mx-auto text-sm sm:text-base mb-12 leading-relaxed">
            Segmentene vi opererer i – hjemmeoppfølging, tidlig risikodeteksjon 
            og kommunal beslutningsstøtte – vokser raskt globalt.
          </p>

          <div className="grid gap-6 sm:grid-cols-3">

            <div className="rounded-2xl bg-slate-900/60 border border-slate-800 p-6">
              <h3 className="text-xl font-bold text-emerald-300">TAM</h3>
              <p className="mt-2 text-sm text-slate-300 leading-relaxed">
                Globalt marked for hjemmeoppfølging:
                <br />
                <span className="font-semibold text-white">230+ mrd NOK</span>
              </p>
            </div>

            <div className="rounded-2xl bg-slate-900/60 border border-slate-800 p-6">
              <h3 className="text-xl font-bold text-emerald-300">SAM</h3>
              <p className="mt-2 text-sm text-slate-300 leading-relaxed">
                Norden + Nordeuropa (velferdsteknologi):
                <br />
                <span className="font-semibold text-white">~15 mrd NOK</span>
              </p>
            </div>

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


      {/* ------------------------------------------------------ */}
      {/* VPC INVESTOR                                           */}
      {/* ------------------------------------------------------ */}
      <section className="mt-20 mb-10">
        <div className="max-w-5xl mx-auto px-6">
          <VpcInvestor />
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
            <strong className="text-emerald-300"> Simple Loan Investment Paper (SLIP)</strong> – 
            et fleksibelt og norsk tidligfaseinstrument som konverterer til aksjer i neste emisjon.
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
              <p className="text-sm text-slate-400">
                Ønsker du å motta SLIP-dokumentet?
              </p>

              <button
                onClick={() => {
                  setSlipOpen(p => !p);
                  setTimeout(() => {
                    document.getElementById("slip-section")?.scrollIntoView({
                      behavior: "smooth",
                    });
                  }, 150);
                }}
                className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-6 py-3 
                           text-sm font-semibold text-slate-900 hover:bg-emerald-400 transition-all"
              >
                {slipOpen ? "Skjul SLIP" : "Les mer om SLIP"}
              </button>
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
              En SLIP er et konvertibelt lån som blir til aksjer ved neste emisjon, 
              og er mye brukt i oppstartsbedrifter som ønsker et smidig og trygt rammeverk 
              for tidlig finansiering.
            </p>

            <ul className="space-y-1 text-slate-300 text-sm">
              <li>• Konverteres automatisk ved neste emisjon</li>
              <li>• Rask prosess og advokatstandardisert dokument</li>
              <li>• Vanlig blant engleinvestorer og tidligfasefond</li>
              <li>• Gir rabatt eller cap – øker investors sikkerhet</li>
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
            <label className="block text-xs text-slate-300">Investeringsnivå (uforpliktende)</label>
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

          <div className="sm:col-span-2">
            <label className="block text-xs text-slate-300">Ønsker du informasjon om SLIP?</label>
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
              className="rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-900 
                         px-6 py-2 text-sm font-semibold"
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

            {/* PRINT-KONTAINER (Optimalisert for utskrift) */}
            <div
              ref={printRef}
              className="bg-white text-black p-10 rounded-xl print:bg-white print:text-black 
                         print:p-0 print:rounded-none"
            >
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

              <div className="mb-16 print:mb-10">
                <VpcInvestor />
              </div>

              <div className="mb-16 print:mb-10">
                <BmcInvestor />
              </div>

              <div className="text-center text-sm mt-10 print:mt-4">
                Kontakt: <strong>post@tablaid.no</strong>
              </div>
            </div>
          </div>
        </section>
      )}

    </main>
  );
}
