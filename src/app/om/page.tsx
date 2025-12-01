"use client";

import Link from "next/link";

export default function OmOssPage() {
  return (
    <main className="bg-[#0A0F1F] text-white">

      {/* HEADER SECTION */}
      <section className="max-w-4xl mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-6">Om Tablaid</h1>

        <p className="text-lg text-gray-300 leading-relaxed mb-6">
          Tablaid ble etablert for å løse et økende og kritisk gap i
          helse- og omsorgstjenestene: mangel på innsikt i hvordan mennesker
          faktisk fungerer i hverdagen – og utilstrekkelig støtte til trygg
          legemiddelbruk.
        </p>

        <p className="text-lg text-gray-300 leading-relaxed mb-6">
          Som sykepleier og selv kronisk medisinbruker erfarte grunnleggeren
          hvordan dagens systemer ofte fanger opp tidlige tegn på forverring
          altfor sent. Endringer i søvn, mobilitet, energi, kognisjon og
          medisininntak utvikler seg gradvis – men verktøyene for å oppdage
          dette i tide mangler.
        </p>

        <p className="text-lg text-gray-300 leading-relaxed mb-6">
          Tablaid er derfor utviklet i tett dialog med fagpersoner, pasienter
          og <strong>Bydel Østensjø i Oslo</strong>, som har bidratt med viktige
          perspektiver og tidlig validering av konseptet. Dette har formet en
          løsning som er like praktisk som den er faglig solid.
        </p>

        <p className="text-lg text-gray-300 leading-relaxed mb-6">
          I 2025 inngikk Tablaid en <strong>rammeavtale med Podium AS</strong>,
          en ledende aktør innen arbeidsinkludering og teknologisk
          kompetansebygging. Avtalen gir:
        </p>

        <ul className="list-disc pl-6 text-gray-300 space-y-2 mb-6">
          <li>langvarig og fleksibelt samarbeid om teknisk utvikling</li>
          <li>praksisplasser og reell kompetansebygging for deltakere i arbeidsmarkedstiltak</li>
          <li>dynamisk videreutvikling av plattformen basert på faktiske behov</li>
          <li>gjensidig verdiskaping gjennom faglig forankring og praktisk kompetanse</li>
        </ul>

        <p className="text-lg text-gray-300 leading-relaxed mb-8">
          Dette gir Tablaid et utviklingsmiljø som kombinerer fagforsvarlighet,
          sosialt entreprenørskap og effektiv gjennomføring — et partnerskap som
          er både sosialt bærekraftig og utviklingsmessig robust.
        </p>

        <p className="text-lg text-gray-300 leading-relaxed">
          Tablaid er i dag et helhetlig e-helsekonsept som styrker samspillet
          mellom bruker, pårørende og kommune — med mål om tidligere signaler,
          tryggere legemiddelbruk og bedre oversikt i hverdagen.
        </p>
      </section>

      {/* LINK TO TEAM PAGE */}
      <section className="text-center py-12">
        <Link
          href="/team"
          className="inline-block px-6 py-3 bg-green-600 hover:bg-green-500 rounded-full font-semibold text-black"
        >
          Se Team & Styre
        </Link>
      </section>
    </main>
  );
}
