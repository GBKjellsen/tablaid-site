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

        <p className="text-lg text-gray-300 leading-relaxed">
          Dette gir Tablaid et utviklingsmiljø som kombinerer fagforsvarlighet,
          sosialt entreprenørskap og effektiv gjennomføring — et partnerskap som
          er både sosialt bærekraftig og utviklingsmessig robust.
        </p>
      </section>

      {/* TEAM & PODIUM SECTION */}
      <section className="bg-[#0F172A] text-white py-24 border-t border-white/10">
        <div className="max-w-5xl mx-auto px-4">

          {/* PODIUM COLLABORATION */}
          <h2 className="text-3xl font-bold mb-6 text-center">Utvikling og samarbeid</h2>

          <p className="text-gray-300 leading-relaxed mb-10 text-center">
            Tablaid utvikles i tett samarbeid med <strong>Podium AS</strong>, en sosial 
            arbeidsinkluderingsaktør under JobZone/Job&Talent. Dette gir Tablaid både 
            teknisk utviklingskraft og et sterkt element av sosial bærekraft.
          </p>

          <ul className="text-gray-300 space-y-3 mx-auto max-w-2xl">
            <li>• Langsiktig og fleksibelt samarbeid om teknisk utvikling</li>
            <li>• Praksisplasser som bygger reell kompetanse for kandidater i arbeidsmarkedstiltak</li>
            <li>• Dynamisk videreutvikling basert på faktiske behov – uten rigide krav til teknologi eller roadmap</li>
            <li>• Et partnerskap som kombinerer sosial bærekraft, teknisk presisjon og evne til rask gjennomføring</li>
          </ul>

          {/* TEAM GRID */}
          <h3 className="text-2xl font-bold mt-20 mb-8 text-center">Team</h3>

          <div className="grid md:grid-cols-2 gap-10">

            {/* Founder */}
            <div className="bg-[#0A0F1F] p-6 rounded-xl border border-white/10 shadow-lg">
              <h4 className="font-semibold text-lg">Gaute Birkeland Kjellsen</h4>
              <p className="text-gray-400 text-sm">Gründer, daglig leder & styremedlem</p>
              <p className="text-gray-300 text-sm mt-3">
                Anestesisykepleier med bakgrunn fra akuttmedisin, pasientoppfølging
                 og komplekse kliniske arbeidsprosesser. Har flere års erfaring fra medisinteknisk 
                 industri med ansvar for salg, implementering og kundeoppfølging
                  i spesialisthelsetjenesten. Kombinerer klinisk innsikt med markedsforståelse
                   og praktisk erfaring fra teknologiutvikling gjennom Tablaid.
              </p>
            </div>

            {/* Podium */}
            <div className="bg-[#0A0F1F] p-6 rounded-xl border border-white/10 shadow-lg">
              <h4 className="font-semibold text-lg">Podium Utviklingsteam</h4>
              <p className="text-gray-400 text-sm">Teknisk leveransepartner</p>
              <p className="text-gray-300 text-sm mt-3">
                Artur Jaworski (UX), Ole Hexeberg (UI/UX), Robin André Lislerud (Tech Lead), 
                Sami Ahmed (Backend). Teamet arbeider med arkitektur, design, utvikling, 
                test og kontinuerlig forbedring.
              </p>
            </div>

          </div>

          

          {/* BOARD */}
          <h3 className="text-2xl font-bold mt-20 mb-8 text-center">Styret</h3>

          <div className="grid md:grid-cols-3 gap-10">

            <div className="bg-[#0A0F1F] p-6 rounded-xl border border-white/10 shadow-lg">
              <h4 className="font-semibold text-lg">Karina Birkeland</h4>
              <p className="text-gray-400 text-sm">Styreleder</p>
              <p className="text-gray-300 text-sm mt-3">
                HR-direktør i Innovasjon Norge. Erfaring fra organisasjonsutvikling, ledelse, 
                kulturbygging og strategisk HR-arbeid.
              </p>
            </div>

            <div className="bg-[#0A0F1F] p-6 rounded-xl border border-white/10 shadow-lg">
              <h4 className="font-semibold text-lg">Randi Willa</h4>
              <p className="text-gray-400 text-sm">Styremedlem</p>
              <p className="text-gray-300 text-sm mt-3">
                Erfaring fra helseinnovasjon, ledelse og koordinering av digitale 
                utviklingsløp i offentlig sektor.
              </p>
            </div>

            <div className="bg-[#0A0F1F] p-6 rounded-xl border border-white/10 shadow-lg">
              <h4 className="font-semibold text-lg">Amir Sasson</h4>
              <p className="text-gray-400 text-sm">Styremedlem</p>
              <p className="text-gray-300 text-sm mt-3">
                Professor i strategi og entreprenørskap ved BI. Arbeider med innovasjon,
                 omstilling og utvikling av bærekraftige tjenestemodeller i næringslivet
                  og offentlig sektor. Har erfaring med prosjekter som berører helsetjenester,
                   digitalisering og velferdsteknologi.
              </p>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}
