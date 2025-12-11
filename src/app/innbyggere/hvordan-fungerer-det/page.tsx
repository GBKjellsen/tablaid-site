"use client";

import PageLayout from "@/components/layout/PageLayout";
import HeroSection from "@/components/HeroSection";

export default function HvordanFungererDetInnbyggere() {
  return (
    <PageLayout>

      {/* ------------------------------------------------------ */}
      {/* HERO                                                   */}
      {/* ------------------------------------------------------ */}
      <HeroSection
        badge="For innbyggere"
        title="Kom i gang med Tablaid – enkelt, trygt og tilpasset deg"
        subtitle="Tablaid hjelper deg å holde oversikt over helse, trivsel og legemiddelbruk. Det tar under 20 sekunder om dagen – og gir deg bedre kontroll i hverdagen."
        image="/app-triple_3.png"
        imageLeft={false}
        primaryCta={{ label: "Last ned når appen lanseres", href: "/#pilot" }}
        secondaryCta={{ label: "Les mer om funksjonene", href: "#funksjoner" }}
      />

      {/* ------------------------------------------------------ */}
      {/* INTRO: HVORFOR TABLAID?                               */}
      {/* ------------------------------------------------------ */}
      <section className="bg-slate-950 py-20 border-b border-slate-800 px-6">
        <div className="max-w-4xl mx-auto text-center">

          <h2 className="text-2xl sm:text-3xl font-semibold">
            Et trygt verktøy for å forstå egen helse bedre
          </h2>

          <p className="text-slate-300 mt-6 text-lg leading-relaxed">
            Mange opplever at det er vanskelig å holde oversikt over hvordan 
            man egentlig har det fra uke til uke. Tablaid gjør dette enkelt ved 
            å samle små daglige svar og gi deg tydelige trender over tid.
          </p>

          <p className="text-slate-400 italic mt-4">
            Du får bedre kontroll, og du kan dele innsikt med 
            pårørende eller kommunen – kun dersom du selv ønsker det.
          </p>

        </div>
      </section>

      {/* ------------------------------------------------------ */}
      {/* FUNKSJONER – STEG FOR STEG                             */}
      {/* ------------------------------------------------------ */}
      <section id="funksjoner" className="py-20 bg-slate-950/80 border-b border-slate-800 px-6">
        <div className="max-w-5xl mx-auto text-center">

          <h2 className="text-2xl sm:text-3xl font-semibold mb-12">
            Slik bruker du Tablaid i hverdagen
          </h2>

          <div className="grid gap-10 sm:grid-cols-3 text-left">

            {/* STEG 1 */}
            <div className="rounded-2xl bg-slate-900/60 border border-slate-800 p-6">
              <h3 className="text-xl font-bold text-emerald-300">1. Last ned og sett opp</h3>
              <p className="text-slate-300 mt-2">
                Når appen lanseres laster du den ned fra App Store eller Google Play. 
                Der legger du inn medisiner (kan skannes) og tilpasser dine daglige varsler.
              </p>
            </div>

            {/* STEG 2 */}
            <div className="rounded-2xl bg-slate-900/60 border border-slate-800 p-6">
              <h3 className="text-xl font-bold text-emerald-300">2. Daglige check-ins</h3>
              <p className="text-slate-300 mt-2">
                Hver dag får du 4–6 enkle spørsmål om søvn, energi, humør og 
                funksjon. Det tar under 20 sekunder – men gir stor verdi over tid.
              </p>
            </div>

            {/* STEG 3 */}
            <div className="rounded-2xl bg-slate-900/60 border border-slate-800 p-6">
              <h3 className="text-xl font-bold text-emerald-300">3. «Tæpp» for å logge medisiner</h3>
              <p className="text-slate-300 mt-2">
                Når du tar medisinen holder du telefonen inntil etiketten for å logge det – 
                eller registrerer manuelt. Du slipper huskelister og unødvendig stress.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ------------------------------------------------------ */}
      {/* DETTE FÅR DU SOM BRUKER                                */}
      {/* ------------------------------------------------------ */}
      <section className="py-20 bg-slate-950 px-6 border-b border-slate-800">
        <div className="max-w-4xl mx-auto">

          <h2 className="text-2xl sm:text-3xl font-semibold text-center">
            Hva Tablaid gir deg
          </h2>

          <ul className="mt-10 space-y-4 text-slate-300 text-lg">
            <li>• En enkel måte å følge med på egen helse fra dag til dag</li>
            <li>• Bedre kontroll over medisiner og påminnelser</li>
            <li>• Personlige trender som viser hvordan du faktisk har det</li>
            <li>• Tidlige signaler når noe endrer seg</li>
            <li>• Mulighet for trygg deling med pårørende eller tjenesteapparatet</li>
            <li>• Et verktøy som er laget for å være så lite mas som mulig</li>
          </ul>

        </div>
      </section>

      {/* ------------------------------------------------------ */}
      {/* CTA                                                     */}
      {/* ------------------------------------------------------ */}
      <section className="py-20 bg-slate-950/90 px-6">
        <div className="max-w-3xl mx-auto text-center">

          <h2 className="text-2xl sm:text-3xl font-semibold">
            Ønsker du å prøve Tablaid?
          </h2>

          <p className="text-slate-300 mt-4">
            Appen lanseres i 2026. Meld interesse for å få tidlig tilgang.
          </p>

          <a href="/#pilot" className="button-primary mt-8 inline-block">
            Meld interesse
          </a>

        </div>
      </section>

    </PageLayout>
  );
}
