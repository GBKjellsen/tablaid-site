"use client";

import PageLayout from "@/components/layout/PageLayout";
import HeroSection from "@/components/HeroSection";

export default function HvordanFungererTablaid() {
  return (
    <PageLayout>

     {/* ------------------------------------------------------ */}
{/* HERO – FORKLARINGSSIDE                                */}
{/* ------------------------------------------------------ */}
<section className="bg-slate-900 border-b border-slate-800">
  <HeroSection
    badge="For innbyggere"
    title="Slik fungerer Tablaid – steg for steg"
    subtitle="Tablaid er laget for å gi deg bedre oversikt over legemiddelbruk og egen helse i hverdagen. Her ser du hvordan løsningen følger deg fra hverdagsrutiner til nyttig innsikt over tid."
    image="/app-triple_3.png"
    imageLeft={false}
    primaryCta={{
      label: "Se brukerreisen",
      href: "#forklaring-start",
    }}
    secondaryCta={{
      label: "Meld interesse for tidlig tilgang",
      href: "/innbyggere#tidlig-tilgang",
    }}
  />
</section>

{/* Visuell overgang / kapittelmarkør */}
<div className="bg-slate-950">
  <div className="mx-auto h-px w-24 bg-emerald-500/40" />
</div>

      {/* ------------------------------------------------------ */}
      {/* INTRO                                                  */}
      {/* ------------------------------------------------------ */}
      <section className="bg-slate-950 py-5 border-b border-slate-800 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-2xl sm:text-3xl font-semibold">
            En løsning for oversikt, trygghet og bedre dialog
          </h2>

          <p className="text-slate-300 text-lg leading-relaxed">
            Mange opplever at det er vanskelig å beskrive hvordan hverdagen faktisk er
            – både for seg selv, pårørende og helsetjenestene. Tablaid gjør dette enklere
            ved å samle små, hverdagsnære datapunkter og vise utvikling over tid.
          </p>

          <p className="text-slate-400 italic">
            Ikke for å overvåke – men for å gi bedre grunnlag for støtte, dialog og riktige valg.
          </p>
        </div>
      </section>

      {/* ------------------------------------------------------ */}
      {/* BRUKERREISEN                                          */}
      {/* ------------------------------------------------------ */}
      <section className="py-10 bg-slate-950/80 border-b border-slate-800 px-6">
        <div className="max-w-5xl mx-auto">

          <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-16">
            Brukerreisen – fra hverdagsrutiner til verdifull innsikt
          </h2>

          <div className="space-y-12">

            {/* STEG 1 */}
            <JourneyStep
              step="1"
              title="Brukerreisen starter på apoteket"
              text="Når du henter ut medisiner på apoteket, kan legemidlene enkelt registreres i Tablaid. Da sikrer du at appen gjenspeiler det du faktisk bruker – med riktig legemiddel og styrke som utgangspunkt for videre oversikt."
            />

            {/* STEG 2 */}
            <JourneyStep
              step="2"
              title="Orden og struktur i medisinhverdagen"
              text="Medisinene organiseres etter når de tas, for eksempel morgen, dag og kveld. Du kan tilpasse påminnelser og rutiner slik at de passer din hverdag – ikke omvendt."
            />

            {/* STEG 3 */}
            <JourneyStep
              step="3"
              title="Enkel registrering i det øyeblikket det skjer"
              text="Når du tar medisinen, registreres inntaket raskt og enkelt. Du slipper manuelle lister og hukommelsesstress, samtidig som appen bygger en pålitelig oversikt over legemiddelrutinene dine over tid."
            />

            {/* STEG 4 */}
            <JourneyStep
              step="4"
              title="Korte sjekk-inn om hvordan du har det"
              text="Med jevne mellomrom inviteres du til å svare på korte sjekk-inn om energi, funksjon og hverdagsform. Det tar under ett minutt, men gir verdifull innsikt når svarene ses i sammenheng over tid."
            />

            {/* STEG 5 */}
            <JourneyStep
              step="5"
              title="Mønstre og sammenheng – ikke enkeltmålinger"
              text="Når informasjon om legemiddelrutiner og egenopplevd funksjon sees samlet, blir det lettere å forstå utvikling over tid. Det handler ikke om diagnoser, men om mønstre som kan gi tidlige signaler på endringer."
            />

            {/* STEG 6 */}
            <JourneyStep
              step="6"
              title="Trygg deling med pårørende og tjenester"
              text="Du bestemmer selv om innsikt skal deles med pårørende eller kommunale omsorgstjenester. For noen kan dette gi bedre dialog i hverdagen. For andre kan det fungere som et referansegrunnlag i møte med primærhelsetjenesten eller ved søknad om tjenester."
            />

          </div>
        </div>
      </section>

      {/* ------------------------------------------------------ */}
      {/* SAMHANDLING                                            */}
      {/* ------------------------------------------------------ */}
      <section className="py-20 bg-slate-950 border-b border-slate-800 px-6">
        <div className="max-w-4xl mx-auto space-y-6">

          <h2 className="text-2xl sm:text-3xl font-semibold text-center">
            Bedre grunnlag for samhandling
          </h2>

          <p className="text-slate-300 text-lg leading-relaxed">
            Når hverdagsinnsikt deles på en strukturert og samtykkebasert måte,
            kan både pårørende, fastlege og kommunale tjenester få et bedre bilde
            av situasjonen – før behovet blir akutt.
          </p>

          <p className="text-slate-300 text-lg leading-relaxed">
            Tablaid kan bidra med oversikt og dokumentasjon som styrker dialogen
            med primærhelsetjenesten og gir et mer nyansert grunnlag for vurdering
            av behov for oppfølging og tjenester.
          </p>

        </div>
      </section>

      {/* ------------------------------------------------------ */}
      {/* CTA – TIDLIG TILGANG                                   */}
      {/* ------------------------------------------------------ */}
      <section id="tidlig-tilgang" className="py-20 bg-slate-950/90 px-6">
        <div className="max-w-3xl mx-auto text-center space-y-6">

          <h2 className="text-2xl sm:text-3xl font-semibold">
            Ønsker du å prøve Tablaid?
          </h2>

          <p className="text-slate-300">
            Tablaid lanseres i 2026. Meld interesse for å få beskjed når
            tidlig tilgang åpnes for innbyggere.
          </p>

          <a href="/innbyggere#tidlig-tilgang" className="button-primary inline-block">
            Meld interesse
          </a>

        </div>
      </section>

    </PageLayout>
  );
}

/* ------------------------------------------------------ */
/* HJELPEKOMPONENT – BRUKERREISE                           */
/* ------------------------------------------------------ */

function JourneyStep({
  step,
  title,
  text,
}: {
  step: string;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-2xl bg-slate-900/60 border border-slate-800 p-6 sm:p-8">
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-emerald-500/20 
                        text-emerald-300 flex items-center justify-center font-semibold">
          {step}
        </div>
        <div>
          <h3 className="text-lg font-semibold text-white">{title}</h3>
          <p className="mt-2 text-slate-300 leading-relaxed">{text}</p>
        </div>
      </div>
    </div>
  );
}
