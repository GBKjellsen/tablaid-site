"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import PageLayout from "@/components/layout/PageLayout";
import { HeroGlow } from "@/components/Glow";
import VpcKommuner from "@/components/vpc/VpcKommuner";
import { GlowImage } from "@/components/Glow";
import VpcToggle from "@/components/VpcToggle";
import DashboardPreview from "@/components/DashboardPreview";

export default function KommunerPage() {
  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef<HTMLFormElement | null>(null);

  const submitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = formRef.current;
    if (!form) return;

    const data = new FormData(form);
    data.append("kilde", "Kommuner – interesseskjema");

    await fetch("https://formspree.io/f/meoykqyl", {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
    });

    setSubmitted(true);

    setTimeout(() => {
      window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    }, 300);
  };

  return (
    <PageLayout>
      {/* ------------------------------------------------------ */}
      {/* HERO */}
      {/* ------------------------------------------------------ */}

      <section className="relative overflow-hidden pt-24 pb-20">
        <HeroGlow />

        <div className="mx-auto flex max-w-[var(--max-w)] flex-col lg:flex-row lg:items-center gap-12 px-6 lg:px-20">

          {/* TEXT */}
          <div className="flex-1 text-center lg:text-left">
            <span className="badge">For kommuner • Tidlig innsikt</span>

            <h1 className="text-3xl md:text-4xl font-bold leading-tight mt-4">
              Tidlige signaler for bedre omsorg – før behovet blir akutt
            </h1>

            <p className="text-slate-300 text-lg leading-relaxed mt-6 max-w-xl">
              Tablaid gir kommunen løpende og samtykkebasert innsikt i
              innbyggernes funksjon og helse – ikke bare punktvise observasjoner.
              Slik fanges endringer opp tidlig, og riktige tiltak kan settes inn i tide.
            </p>

            <p className="text-slate-400 italic mt-4 text-sm max-w-xl">
              Helsedirektoratet, KS og SSB peker på at kommunene må jobbe mer
              kunnskapsdrevet og forebyggende for å møte framtidens omsorgsbehov.
            </p>

            <div className="flex flex-col sm:flex-row sm:items-center gap-4 mt-8 justify-center lg:justify-start">
              <a
                href="#pilot"
                className="rounded-full bg-emerald-500 hover:bg-emerald-400
                text-slate-900 font-semibold px-6 py-3 text-sm"
              >
                Meld interesse for utprøving
              </a>

              <Link
                href="/pilot-infoskriv-request"
                className="rounded-full bg-slate-800 hover:bg-slate-700
                text-slate-200 px-6 py-3 text-sm"
              >
                Last ned infoskriv
              </Link>
            </div>
          </div>

          {/* IMAGE */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <GlowImage
              src="/app-triple_3.png"
              alt="Tablaid app"
              width={540}
              height={480}
              className="rounded-2xl shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------ */}
      {/* TABLAID KOMMUNEPORTAL – PREMIUM, EKSTERN FUNKSJON     */}
      {/* ------------------------------------------------------ */}

      <section className="py-20 bg-slate-900/50 border-b border-slate-800">
        <div className="max-w-5xl mx-auto px-6">

          <div className="rounded-3xl border border-emerald-500/20 bg-slate-900/80 p-10 shadow-xl shadow-black/30">

            <h2 className="text-3xl font-semibold text-emerald-300 text-center">
              Kommuneportal (beta)
            </h2>

            <p className="text-slate-300 text-center mt-3 max-w-2xl mx-auto">
              Kommuner som deltar i pilotering eller inngår lisens får tilgang
              til Tablaids kommuneportal – et eksternt dashboard med aggregert innsikt,
              tidlige trender og beslutningsstøtte basert på samtykkede data.
            </p>

            <p className="text-slate-400 text-center mt-2 text-sm">
              Full portal åpnes trinnvis i løpet av 2026.
            </p>

            <div className="mt-12 flex flex-col items-center gap-8">

              {/* ▼▼ Kun preview, ikke VPC ▼▼ */}
              <VpcToggle>
                <DashboardPreview />
              </VpcToggle>

              {/* Ekstern lenke til egen dashboardside */}
              <Link href="/kommune-login" className="button-primary">
                Åpne Kommuneportal (beta)
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* ------------------------------------------------------ */}
      {/* SYSTEMTRYKK / SAMFUNNSUTFORDRING */}
      {/* ------------------------------------------------------ */}

      <section className="border-b border-slate-800 bg-slate-950 py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">

          <h2 className="text-2xl sm:text-3xl font-semibold">
            Flere eldre – færre ansatte. Kommunene må fange opp endring tidligere.
          </h2>

          <p className="mt-6 text-slate-300 leading-relaxed text-lg">
            Innen 2040 mangler Norge over 50 000 helsepersonell. Samtidig øker antallet
            innbyggere med sammensatte behov. Kommunene trenger løsninger som gir
            kontinuerlig innsikt – ikke flere tunge kartleggingsprosesser eller
            punktbesøk som kommer for sent.
          </p>

        </div>
      </section>

      {/* ------------------------------------------------------ */}
      {/* VERDIBOKSER */}
      {/* ------------------------------------------------------ */}

      <section className="bg-slate-950/80 py-20 border-b border-slate-800">
        <div className="max-w-6xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3 px-6">

          <div className="rounded-2xl bg-slate-900/60 border border-slate-800 p-6">
            <h3 className="text-xl font-bold text-emerald-300">Tidlige signaler</h3>
            <p className="mt-2 text-slate-300">
              Tablaid viser endringer fra dag til dag, ikke kun én gang i året.
            </p>
          </div>

          <div className="rounded-2xl bg-slate-900/60 border border-slate-800 p-6">
            <h3 className="text-xl font-bold text-emerald-300">Støtte for pårørende</h3>
            <p className="mt-2 text-slate-300">
              Innsikt deles trygt – og kommunen får bedre beslutningsgrunnlag.
            </p>
          </div>

          <div className="rounded-2xl bg-slate-900/60 border border-slate-800 p-6">
            <h3 className="text-xl font-bold text-emerald-300">Lav belastning</h3>
            <p className="mt-2 text-slate-300">
              Innbyggere logger selv. Kommunen mottar kun trender og nøkkelfunn.
            </p>
          </div>

          <div className="rounded-2xl bg-slate-900/60 border border-slate-800 p-6">
            <h3 className="text-xl font-bold text-emerald-300">Bedre beslutningsstøtte</h3>
            <p className="mt-2 text-slate-300">
              Kontinuerlig innsikt gjør prioritering enklere og mer målrettet.
            </p>
          </div>

        </div>
      </section>

      {/* ------------------------------------------------------ */}
      {/* VPC – DETALJERT VERDIFORSALG (EXPAND) */}
      {/* ------------------------------------------------------ */}

      <div className="py-10">
        <VpcToggle>
          <VpcKommuner />
        </VpcToggle>
      </div>

      {/* ------------------------------------------------------ */}
      {/* PILOTINFO */}
      {/* ------------------------------------------------------ */}

      <section id="pilot" className="py-20 border-b border-slate-800 bg-slate-950/90">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold">
            Utprøving fra mars 2026 – lav terskel for kommunen
          </h2>

          <p className="mt-4 text-slate-300 leading-relaxed">
            Kommunen får trenddata, tidlige signaler og et styrket beslutningsgrunnlag.
            Utprøving krever minimal innsats og lisensen gjelder ut 2026.
          </p>

          <div className="rounded-2xl bg-slate-900/60 border border-slate-800 p-8 mt-10 text-left max-w-xl mx-auto">
            <ul className="space-y-2 text-slate-300">
              <li>• Oppstartsmøte og behovsavklaring</li>
              <li>• 20–30 frivillige innbyggere</li>
              <li>• Daglig helse- og funksjonslogging</li>
              <li>• Månedlige trender og nøkkelfunn</li>
              <li>• Ingen personsensitive data deles</li>
              <li>• Lavterskel lisens gyldig ut 2026</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------ */}
      {/* INTERESSER-SKJEMA */}
      {/* ------------------------------------------------------ */}

      <section className="py-20 bg-slate-950">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold">
            Meld interesse for utprøving
          </h2>

          <p className="mt-2 text-slate-300">
            Fyll inn kontaktinformasjon, så tar vi kontakt innen 1–2 virkedager.
          </p>

          {submitted && (
            <div
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-emerald-700/30 
              px-4 py-2 text-emerald-300 text-sm"
            >
              ✔ Innsendt — vi tar kontakt snart
            </div>
          )}

          <form
            ref={formRef}
            onSubmit={submitForm}
            className="mt-10 grid gap-4 sm:grid-cols-2 rounded-2xl border border-slate-800 
            bg-slate-900/70 p-6 text-left"
          >
            <div>
              <label className="input-label">Navn</label>
              <input name="navn" required className="input" />
            </div>

            <div>
              <label className="input-label">Stilling / rolle</label>
              <input name="rolle" required className="input" />
            </div>

            <div>
              <label className="input-label">Kommune</label>
              <input name="kommune" required className="input" />
            </div>

            <div>
              <label className="input-label">E-post</label>
              <input name="epost" type="email" required className="input" />
            </div>

            <div>
              <label className="input-label">Telefon</label>
              <input name="telefon" className="input" />
            </div>

            <div className="sm:col-span-2 mt-4">
              <button
                type="submit"
                className="w-full rounded-full bg-emerald-500 hover:bg-emerald-400 
                text-slate-900 px-6 py-3 text-sm font-semibold transition"
              >
                Send inn
              </button>
            </div>
          </form>
        </div>
      </section>

    </PageLayout>
  );
}
