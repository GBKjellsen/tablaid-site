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
import HeroSection from "@/components/HeroSection";
import ToggleCTA from "@/components/ui/ToggleCTA";

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
   
<HeroSection
  badge="For kommuner • Tidlige signaler"
  title="Tidlig innsikt som gjør tjenestene mer treffsikre"
  subtitle="Tablaid gir kommunen løpende innsikt i funksjon og legemiddelbruk — lenge før behovet blir akutt. Bedre prioritering, mindre belastning og tryggere tjenester."
  supportText="Helsedirektoratet, KS og SSB peker på at tidlige signaler og bedre datagrunnlag blir avgjørende for å møte framtidens omsorgsutfordringer."
  image="/app-triple_3.png"
  imageLeft={false}
  primaryCta={{ label: "Meld interesse for utprøving", href: "#pilot" }}
  secondaryCta={{ label: "Last ned infoskriv", href: "/pilot-infoskriv-request" }}
/>

      

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
 {/* ------------------------------------------------------ */}
      {/* VPC – DETALJERT VERDIFORSALG (EXPAND) */}
      {/* ------------------------------------------------------ */}

      <div className="py-10">
       <VpcToggle
  labelOn="Skjul kommunens verdiforslag"
  labelOff="Se kommunens fulle verdiforslag"
>
  <VpcKommuner />
</VpcToggle>

      </div>
        </div>
      </section>
      
{/* ------------------------------------------------------ */}
{/* TABLAID KOMMUNEPORTAL – PREMIUM, EKSTERN FUNKSJON       */}
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
        <DashboardPreview />

        <div className="mt-6 text-center">
          <Link href="/kommune-login" className="button-outline">
            Åpne kommuneportal (beta - vises best på desk top)
          </Link>
        </div>
      </div>

    </div> {/* ← lukker rounded-3xl box */}

  </div> {/* ← lukker max-width container */}
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
      text-white px-6 py-3 text-sm font-semibold transition-all"
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
