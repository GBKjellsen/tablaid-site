"use client";

import Image from "next/image";
import Link from "next/link";
import PageLayout from "@/components/layout/PageLayout";
import { HeroGlow } from "@/components/Glow";
import VpcInnbyggere from "@/components/vpc/VpcInnbyggere";
import { useState } from "react";
import {GlowImage} from "@/components/Glow";
import VpcToggle from "@/components/VpcToggle";

export default function InnbyggerPage() {
  const [showVPC, setShowVPC] = useState(false);

  return (
    <PageLayout>

{/* ------------------------------------------------------ */}
{/* HERO – INNBYGGERE                                     */}
{/* ------------------------------------------------------ */}

<section className="relative overflow-hidden pt-24 pb-20">
  <HeroGlow />

  <div className="mx-auto max-w-[var(--max-w)] px-6 lg:px-20 flex flex-col items-center text-center">
    
    <span className="badge">For innbyggere • trygghet & oversikt</span>

    <h1 className="text-3xl md:text-4xl font-bold leading-tight mt-4">
      En enklere hverdag med bedre oversikt over helsen din
    </h1>

    <p className="text-slate-300 text-lg leading-relaxed mt-6 max-w-xl">
      Tablaid hjelper deg med å holde kontroll på medisiner, funksjon og 
      egen helse — dag for dag. En trygg og enkel løsning for deg som 
      ønsker oversikt, mestring og støtte fra dine nærmeste.
    </p>

    <p className="text-slate-400 italic mt-4 text-sm max-w-xl">
      1 av 2 som bruker faste medisiner tar dem ikke som foreskrevet. 
      Tidlig oversikt gjør hverdagen tryggere — både for deg og dine pårørende.
    </p>

    {/* Bilde */}
    <div className="mt-10">
      <GlowImage
        src="/app-hand.png"
        alt="Tablaid for innbyggere"
        width={540}
        height={480}
        className="rounded-2xl shadow-xl"
      />
    </div>

    {/* Knapper */}
    <div className="flex flex-col sm:flex-row gap-4 mt-10">
      <a href="#kom-i-gang" className="button-primary">Kom i gang</a>
      <Link href="/parorende" className="button-secondary">
        Støtte fra pårørende
      </Link>
    </div>

  </div>
</section>



      {/* -------------------------------------------------------------- */}
      {/* CONTENT SECTION */}
      {/* -------------------------------------------------------------- */}
      <section className="mx-auto max-w-[var(--max-w)] px-6 lg:px-20 space-y-10">

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Med Tablaid får du:</h2>

          <ul className="list-disc pl-5 space-y-3 text-slate-300">
            <li>
              <strong>Smart legemiddelassistent</strong> – påminnelser og enkel registrering via NFC
            </li>
            <li>
              <strong>Full oversikt</strong> – samlede opplysninger om medisiner og helseinformasjon
            </li>
            <li>
              <strong>Helsekompass</strong> – enkle daglige spørsmål inspirert av WHOs rammeverk for funskjonskartlegging
            </li>
            <li>
              <strong>Funksjonsutvikling</strong> – se hvordan søvn, energi, mobilitet, kognisjon og humør endrer seg over tid
            </li>
            <li>
              <strong>Trygghet og forutsigbarhet</strong> – mønstre som hjelper deg forstå kroppen bedre
            </li>
            <li>
              <strong>Valgfri deling</strong> – del innsikt med pårørende eller kommunen ved behov
            </li>
          </ul>
        </div>
      </section>


     {/* -------------------------------------------------------------- */}
{/* VPC – COLLAPSIBLE SECTION */}
{/* -------------------------------------------------------------- */}

<section className="mx-auto max-w-[var(--max-w)] px-6 lg:px-20 mt-16 mb-24">
  {/* Innholdet i seksjonen (verdibokser etc.) beholdes som før */}
</section>

{/* Ny og elegant toggle-basert VPC-visning */}
<VpcToggle>
  <VpcInnbyggere />
</VpcToggle>

</PageLayout>
);
}
