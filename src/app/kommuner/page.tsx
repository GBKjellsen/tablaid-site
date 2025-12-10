"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import PageLayout from "@/components/layout/PageLayout";
import { HeroGlow } from "@/components/Glow";
import VpcKommuner from "@/components/vpc/VpcKommuner";
import { GlowImage } from "@/components/Glow";


export default function KommunerPage() {
  const [showVPC, setShowVPC] = useState(false);
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
            <span className="badge">For kommuner • tidlig innsikt</span>

            <h1 className="text-3xl md:text-4xl font-bold leading-tight mt-4">
              Tablaid gir kommunen tidlig innsikt
            </h1>

            <p className="text-slate-300 text-lg leading-relaxed mt-6 max-w-xl">
              Kommuner mangler ofte løpende innsikt i hvordan innbyggernes helse
              og funksjon utvikler seg mellom fysiske møter. Tablaid gir tidlige
              signaler – før behovet blir akutt.
            </p>

            <p className="text-slate-400 italic mt-4 text-sm max-w-xl">
              Helsedirektoratet, KS og SSB peker på at tidlige signaler og bedre
              datagrunnlag er nødvendig for å håndtere framtidens omsorgsbehov.
            </p>

            <div className="flex flex-col sm:flex-row sm:items-center gap-4 mt-8 justify-center lg:justify-start">
              <a
                href="#pilot"
                className="rounded-full bg-emerald-500 hover:bg-emerald-400
                text-slate-900 font-semibold px-6 py-3 text-sm"
              >
                Meld interesse for utprøving
              </a>

              <button
                className="rounded-full bg-slate-800 hover:bg-slate-700
                text-slate-200 px-6 py-3 text-sm"
              >
                Last ned infoskriv (PDF)
              </button>
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
      {/* SYSTEMTRYKK / BEGRUNNELSE */}
      {/* ------------------------------------------------------ */}

      <section className="border-b border-slate-800 bg-slate-950 py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold">
            Kommunene trenger tidligere signaler – ikke flere punktbesøk
          </h2>

          <p className="mt-6 text-slate-300 leading-relaxed text-lg">
            Ifølge Helsedirektoratet, KS og SSB står Norge foran økende behov i
            helse- og omsorg, samtidig som tilgangen på helsepersonell synker.
            Kommunene trenger løsninger som fanger opp endring tidlig – ikke når
            behovet allerede har eskalert.
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
              Tablaid fanger opp endringer i funksjon og helse gjennom daglige
              innbyggersvar – ikke bare årlige vurderinger.
            </p>
          </div>

          <div className="rounded-2xl bg-slate-900/60 border border-slate-800 p-6">
            <h3 className="text-xl font-bold text-emerald-300">Støtte for pårørende</h3>
            <p className="mt-2 text-slate-300">
              Pårørende får bedre oversikt – og kommunen får et tryggere
              beslutningsgrunnlag.
            </p>
          </div>

          <div className="rounded-2xl bg-slate-900/60 border border-slate-800 p-6">
            <h3 className="text-xl font-bold text-emerald-300">Lav belastning</h3>
            <p className="mt-2 text-slate-300">
              Innbyggere logger selv. Kommunen mottar kun trender og nøkkelfunn
              etter samtykke.
            </p>
          </div>

          <div className="rounded-2xl bg-slate-900/60 border border-slate-800 p-6">
            <h3 className="text-xl font-bold text-emerald-300">Bedre beslutningsstøtte</h3>
            <p className="mt-2 text-slate-300">
              Kontinuerlig innsikt gjør prioritering enklere – og kvaliteten
              tryggere.
            </p>
          </div>
        </div>

        <div className="text-center mt-16">
          <button
            onClick={() => setShowVPC((v) => !v)}
            className="px-6 py-2 text-sm rounded-full border border-slate-700
              text-slate-300 hover:bg-slate-800 transition"
          >
            {showVPC ? "Skjul detaljert verdikart (VPC)" : "Vis detaljert verdikart (VPC)"}
          </button>
        </div>

        {showVPC && (
          <div className="max-w-5xl mx-auto mt-10 px-6 text-left">
            <div
              className="rounded-2xl border border-slate-800 bg-slate-900/60 
              p-6 shadow-lg shadow-black/20"
            >
              <VpcKommuner />
            </div>
          </div>
        )}
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
            Kommunen får trenddata, tidlige signaler og bedre grunnlag for
            riktige beslutninger. Utprøving krever minimal innsats, og lisensen
            gjelder ut 2026.
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
      {/* SKJEMA */}
      {/* ------------------------------------------------------ */}

      <section className="py-20 bg-slate-950">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold">
            Meld interesse for utprøving
          </h2>

          <p className="mt-2 text-slate-300">
            Fyll ut skjemaet, så tar vi kontakt innen 1–2 virkedager.
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

            <div>
              <label className="input-label">Ønsket oppstart</label>
              <select name="oppstart" className="input">
                <option>Snarest</option>
                <option>Mars 2026</option>
                <option>Q2 2026</option>
                <option>Usikker – ønsker dialog</option>
              </select>
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
