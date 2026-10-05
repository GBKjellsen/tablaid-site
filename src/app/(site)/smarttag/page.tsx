"use client";

import Image from "next/image";
import Link from "next/link";

export default function SmartTagPage() {
  return (
    <main className="bg-slate-950 text-white">

      {/* ---------------------------------------------- */}
      {/* HERO */}
      {/* ---------------------------------------------- */}
      <section className="relative overflow-hidden pb-20 pt-28 bg-gradient-to-b from-slate-900 to-slate-950">
        {/* Glow */}
        <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-72 
                        bg-emerald-500/20 blur-[120px]" />

        <div className="mx-auto max-w-[var(--max-w)] px-6 lg:px-20 text-center">
          <h1 className="text-4xl font-bold leading-tight">
            Bestill SmartTags
          </h1>

          <p className="mt-4 text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            SmartTags gjør det raskt og enkelt å registrere medisiner ved å holde mobilen 
            mot etiketten. Ingen app-åpning, ingen menyer — bare et trygt og presist «tapp».
          </p>
        </div>
      </section>


      {/* ---------------------------------------------- */}
      {/* PRODUKTKORT */}
      {/* ---------------------------------------------- */}
      <section className="px-6 pb-24">
        <div className="max-w-xl mx-auto bg-slate-900/60 border border-slate-800 
                        rounded-2xl p-6 shadow-lg">

          {/* Produktbilde */}
          <div className="w-full flex justify-center mb-6">
            <Image
              src="/SmartTag.png"
              alt="Tablaid SmartTag"
              width={260}
              height={260}
              className="object-contain rounded-xl"
            />
          </div>

          {/* Tittel */}
          <h2 className="text-2xl font-semibold text-white text-center mb-3">
            SmartTag – 4-pakning
          </h2>

          {/* Beskrivelse */}
          <p className="text-slate-300 text-center text-sm leading-relaxed mb-6">
            Rask og pålitelig registrering av medisiner. Perfekt for brukere, pårørende og kommuner 
            som ønsker enkel og trygg etterlevelsesstøtte.
          </p>

          {/* CTA – Stripe */}
          <div className="flex justify-center">
            <Link
              href="https://buy.stripe.com/6oU28seo83w263G3gBdEs01"
              target="_blank"
              className="inline-flex items-center justify-center rounded-full 
                         bg-emerald-500 px-6 py-3 text-sm font-semibold text-slate-900 
                         hover:bg-emerald-400 transition-all"
            >
              Bestill SmartTags →
            </Link>
          </div>

          {/* Undertekst */}
          <p className="text-xs text-slate-400 text-center mt-3">
            Betaling skjer sikkert via Stripe.
          </p>
        </div>
      </section>
{/* ---------------------------------------------- */}
{/* HVORFOR SMARTTAGS – VERDISEKSJON */}
{/* ---------------------------------------------- */}

<section className="px-6 pb-32">
  <div className="max-w-3xl mx-auto text-center">

    <h2 className="text-2xl font-semibold text-white mb-4">
      Hvorfor SmartTags?
    </h2>

    <p className="text-slate-300 text-sm leading-relaxed max-w-2xl mx-auto">
      Mange ønsker bedre kontroll på når medisiner blir tatt – uten mer stress eller nye rutiner. 
      SmartTags gjør jobben enklere ved å bruke den teknologien du allerede har: mobilen din. 
      Ett lite «tæpp» er alt som trengs for å registrere medisiner presist, uten å åpne appen.
    </p>

    <div className="grid gap-6 mt-10 sm:grid-cols-2">

      {/* Kort 1 */}
      <div className="p-6 bg-slate-900/60 border border-slate-800 rounded-xl text-left">
        <h3 className="text-emerald-300 font-semibold text-sm mb-2">
          Smartifiser medisinemballasjen
        </h3>
        <p className="text-slate-300 text-sm leading-relaxed">
          Fest SmartTags på medisinesker, blisterpakker eller dosetten. 
          Taggen blir en «digital knapp» som registrerer inntaket idet du toucher mobilen borti. 
          Ingen menyer, ingen forvirring — bare en raskt og intuitivt rutine.
        </p>
      </div>

      {/* Kort 2 */}
      <div className="p-6 bg-slate-900/60 border border-slate-800 rounded-xl text-left">
        <h3 className="text-emerald-300 font-semibold text-sm mb-2">
          Perfekt for både brukere og pårørende
        </h3>
        <p className="text-slate-300 text-sm leading-relaxed">
          Når medisiner er logget automatisk, forsvinner usikkerheten: 
          «Har jeg tatt den i dag?»  
          «Tok mamma morgenmedisinene?»  
          SmartTags gjør det enkelt å få trygghet og forutsigbarhet — uten å måtte overvåke noen.
        </p>
      </div>

      {/* Kort 3 */}
      <div className="p-6 bg-slate-900/60 border border-slate-800 rounded-xl text-left sm:col-span-2">
        <h3 className="text-emerald-300 font-semibold text-sm mb-2">
          Enkel loggføring uten ekstra arbeid
        </h3>
        <p className="text-slate-300 text-sm leading-relaxed">
          Tradisjonelle påminnelser sier lite om medisinen faktisk ble tatt.  
          SmartTags gir faktisk inntaksdata, som kombinert med Tablaid-appen gir et tydelig bilde av 
          etterlevelse og trender over tid. Det kan være avgjørende for både helse og oppfølging.
        </p>
      </div>

    </div>

  </div>
</section>

    </main>
  );
}
