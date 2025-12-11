"use client";

import PageLayout from "@/components/layout/PageLayout";
import HeroSection from "@/components/HeroSection";
import { GlowImage } from "@/components/Glow";

export default function HvordanFungererDetPage() {
  return (
    <PageLayout>

      {/* ------------------------------------------------------ */}
      {/* HERO                                                   */}
      {/* ------------------------------------------------------ */}
      <HeroSection
        badge="For pårørende"
        title="Slik fungerer Tablaid – enkel innsikt som gir trygghet"
        subtitle="Tablaid hjelper pårørende å følge med på endringer i helse, funksjon og legemiddelbruk – uten å være pålogget hver dag. Alt skjer trygt, samtykkebasert og med fokus på relasjon og støtte."
        image="/app-triple_3.png"
        imageLeft={false}
        primaryCta={{ label: "Meld interesse", href: "/#pilot" }}
        secondaryCta={{ label: "Les om våre funksjoner", href: "#funksjoner" }}
      />

      {/* ------------------------------------------------------ */}
      {/* PROBLEMET                                              */}
      {/* ------------------------------------------------------ */}
      <section className="bg-slate-950 py-20 border-b border-slate-800 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold">
            Mange pårørende mangler løpende innsikt
          </h2>

          <p className="text-slate-300 mt-6 leading-relaxed text-lg">
            I dag oppdages endringer ofte sent – etter fall, innleggelse eller
            når medisiner ikke tas riktig. Pårørende står ofte alene uten gode
            verktøy for å forstå hvordan situasjonen utvikler seg fra uke til uke.
          </p>

          <p className="text-slate-400 mt-4 italic">
            Tablaid gjør det lettere å følge med – uten å invadere privatliv,
            og uten å kreve mer arbeid for den som bruker appen.
          </p>
        </div>
      </section>

      {/* ------------------------------------------------------ */}
      {/* SLIK FUNGERER DET – STEG FOR STEG                     */}
      {/* ------------------------------------------------------ */}
      <section id="funksjoner" className="py-20 bg-slate-950/80 border-b border-slate-800 px-6">
        <div className="max-w-5xl mx-auto text-center">

          <h2 className="text-2xl sm:text-3xl font-semibold mb-12">
            Tre enkle steg som gir ekte innsikt
          </h2>

          <div className="grid gap-10 sm:grid-cols-3 text-left">

            {/* STEG 1 */}
            <div className="rounded-2xl bg-slate-900/60 border border-slate-800 p-6">
              <h3 className="text-xl font-bold text-emerald-300">1. Daglige svar</h3>
              <p className="text-slate-300 mt-2">
                Innbyggeren fyller ut korte daglige spørsmål om søvn, energi,
                humør, mobilitet og legemiddelbruk. Det tar under 20 sekunder.
              </p>
            </div>

            {/* STEG 2 */}
            <div className="rounded-2xl bg-slate-900/60 border border-slate-800 p-6">
              <h3 className="text-xl font-bold text-emerald-300">2. Tablaid analyserer</h3>
              <p className="text-slate-300 mt-2">
                Appen fanger opp endringer, trender og mønstre over tid – ofte
                lenge før symptomer blir tydelige for omgivelsene.
              </p>
            </div>

            {/* STEG 3 */}
            <div className="rounded-2xl bg-slate-900/60 border border-slate-800 p-6">
              <h3 className="text-xl font-bold text-emerald-300">3. Pårørende får innsikt</h3>
              <p className="text-slate-300 mt-2">
                Etter samtykke får pårørende tilgang til oversiktlige grafer og
                tidlige signaler – slik at de kan følge opp tryggere og ta grep
                før situasjonen eskalerer.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ------------------------------------------------------ */}
      {/* HVA DU FÅR SOM PÅRØRENDE                               */}
      {/* ------------------------------------------------------ */}
      <section className="py-20 bg-slate-950 px-6 border-b border-slate-800">
        <div className="max-w-4xl mx-auto">

          <h2 className="text-2xl sm:text-3xl font-semibold text-center">
            Hva du får med Tablaid
          </h2>

          <ul className="mt-10 space-y-4 text-slate-300 text-lg">
            <li>• Tidlige signaler om endringer i helse og funksjon</li>
            <li>• Oversikt over trender i søvn, energi og humør</li>
            <li>• Innsikt i legemiddelbruk og etterlevelse</li>
            <li>• Digital loggføring (“tæpping”) ved medisininntak</li>
            <li>• Mulighet for trygg deling med kommunen ved behov</li>
            <li>• Bedre grunnlag for samtaler og oppfølging</li>
            <li>• Mindre uro i hverdagen</li>
          </ul>

        </div>
      </section>

      {/* ------------------------------------------------------ */}
      {/* CTA                                                    */}
      {/* ------------------------------------------------------ */}
      <section className="py-20 bg-slate-950/90 px-6">
        <div className="max-w-3xl mx-auto text-center">

          <h2 className="text-2xl sm:text-3xl font-semibold">
            Klar for å prøve Tablaid?
          </h2>

          <p className="text-slate-300 mt-4">
            Vi starter pilotering i mars 2026. Meld interesse, så tar vi kontakt
            for en uforpliktende prat.
          </p>

          <a
            href="/#pilot"
            className="button-primary mt-8 inline-block"
          >
            Meld interesse
          </a>

        </div>
      </section>

    </PageLayout>
  );
}
