"use client";

import PageLayout from "@/components/layout/PageLayout";
import { HeroGlow } from "@/components/Glow";

export default function OmPage() {
  return (
    <PageLayout>

      {/* ------------------------------------------------------------- */}
      {/* HERO — REN TEKST, MER LUFT, MED HERO-GLOW                     */}
      {/* ------------------------------------------------------------- */}

      <section className="relative overflow-hidden pt-24 pb-20">
        <HeroGlow />

        <div className="mx-auto max-w-[var(--max-w)] px-6 lg:px-20 max-w-3xl space-y-6">
          <h1 className="text-4xl font-bold leading-tight">Om Tablaid</h1>

          <p className="text-slate-300 text-lg leading-relaxed">
            Tablaid ble etablert for å løse et økende og kritisk gap i helse- og omsorgstjenestene:
            mangel på innsikt i hvordan mennesker faktisk fungerer i hverdagen – og utilstrekkelig
            støtte til trygg legemiddelbruk.
          </p>

          <p className="text-slate-300 text-lg leading-relaxed">
            Som sykepleier og selv kronisk medisinbruker erfarte grunnleggeren hvordan dagens systemer
            ofte fanger opp tidlige tegn på forverring altfor sent. Endringer i søvn, mobilitet, energi,
            kognisjon og medisininntak utvikler seg gradvis – men verktøyene for å oppdage dette i tide mangler.
          </p>

          <p className="text-slate-300 text-lg leading-relaxed">
            Tablaid er derfor utviklet i tett dialog med fagpersoner, pasienter og{" "}
            <span className="font-semibold text-white">Bydel Østensjø i Oslo</span>, som har bidratt med
            viktige perspektiver og tidlig validering av konseptet. Dette har formet en løsning som er like
            praktisk som den er faglig solid.
          </p>
        </div>
      </section>


      {/* ------------------------------------------------------------- */}
      {/* UTVIKLING OG SAMARBEID — REN TEKSTSEKSJON                     */}
      {/* ------------------------------------------------------------- */}

      <section className="mx-auto max-w-[var(--max-w)] px-6 lg:px-20 py-16 max-w-3xl space-y-6">

        <h2 className="text-2xl font-semibold">Utvikling og samarbeid</h2>

        <p className="text-slate-300 leading-relaxed">
          Tablaid utvikles i tett samarbeid med <span className="font-semibold text-white">Podium AS</span>,
          en sosial arbeidsinkluderingsaktør under JobZone/Job&amp;Talent. Dette gir Tablaid både teknisk
          utviklingskraft og et sterkt element av sosial bærekraft.
        </p>

        <ul className="list-disc pl-6 space-y-2 text-slate-300">
          <li>Langsiktig og fleksibelt samarbeid om teknisk utvikling</li>
          <li>Praksisplasser som bygger reell kompetanse for kandidater i arbeidsmarkedstiltak</li>
          <li>Dynamisk videreutvikling basert på faktiske behov – uten rigide krav til teknologi eller roadmap</li>
          <li>Et partnerskap som kombinerer sosial bærekraft, teknisk presisjon og evne til rask gjennomføring</li>
        </ul>

        <p className="text-slate-300 leading-relaxed">
          Dette gir Tablaid et utviklingsmiljø som kombinerer fagforsvarlighet, sosialt entreprenørskap og
          effektiv gjennomføring — et partnerskap som er både sosialt bærekraftig og utviklingsmessig robust.
        </p>
      </section>


      {/* ------------------------------------------------------------- */}
      {/* TEAM — 2 KORT I BREDDEN                                       */}
      {/* ------------------------------------------------------------- */}

      <section className="mx-auto max-w-[var(--max-w)] px-6 lg:px-20 pb-20">
        <h2 className="text-2xl font-semibold mb-10">Team</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Gaute */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 space-y-3">
            <h3 className="text-xl font-semibold text-white">Gaute Birkeland Kjellsen</h3>
            <p className="text-slate-400 text-sm">Gründer, daglig leder & styremedlem</p>
            <p className="text-slate-300 text-sm leading-relaxed">
              Anestesisykepleier med bakgrunn fra akuttmedisin, pasientoppfølging og medisintekniske
              arbeidsprosesser. Erfaring fra medisinteknisk industri og flere års praktisk teknologiarbeid
              gjennom Tablaid.
            </p>
          </div>

          {/* Podium */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 space-y-3">
            <h3 className="text-xl font-semibold text-white">Podium Utviklingsteam</h3>
            <p className="text-slate-400 text-sm">Teknisk leveransepartner</p>
            <p className="text-slate-300 text-sm leading-relaxed">
              Artur Jaworski (UX), Ole Hexeberg (UI/UX), Robin André Lislerud (Tech Lead),
              Sami Ahmed (Backend). Teamet arbeider med arkitektur, design, utvikling, test og kontinuerlig forbedring.
            </p>
          </div>

        </div>
      </section>


      {/* ------------------------------------------------------------- */}
      {/* STYRET — 3 KORT I BREDDEN                                      */}
      {/* ------------------------------------------------------------- */}

      <section className="mx-auto max-w-[var(--max-w)] px-6 lg:px-20 pb-24">
        <h2 className="text-2xl font-semibold mb-10">Styret</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* Karina */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 space-y-3">
            <h3 className="text-xl font-semibold text-white">Karina Birkeland</h3>
            <p className="text-slate-400 text-sm">Styreleder</p>
            <p className="text-slate-300 text-sm leading-relaxed">
              HR-direktør i Innovasjon Norge. Erfaring fra ledelse, organisasjonsutvikling og strategisk HR-arbeid.
            </p>
          </div>

          {/* Randi */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 space-y-3">
            <h3 className="text-xl font-semibold text-white">Randi Willa</h3>
            <p className="text-slate-400 text-sm">Styremedlem</p>
            <p className="text-slate-300 text-sm leading-relaxed">
              Erfaring fra helseinnovasjon, ledelse og koordinering av digitale utviklingsløp i offentlig sektor.
            </p>
          </div>

          {/* Amir */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 space-y-3">
            <h3 className="text-xl font-semibold text-white">Amir Sasson</h3>
            <p className="text-slate-400 text-sm">Styremedlem</p>
            <p className="text-slate-300 text-sm leading-relaxed">
              Professor i strategi og entreprenørskap ved BI, med erfaring innen innovasjon,
              omstilling og utvikling av bærekraftige tjenestemodeller.
            </p>
          </div>

        </div>
      </section>

    </PageLayout>
  );
}
