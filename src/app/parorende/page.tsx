"use client";

import Image from "next/image";
import Link from "next/link";
import PageLayout from "@/components/layout/PageLayout";
import { HeroGlow } from "@/components/Glow";
import VpcParorende from "@/components/vpc/VpcParorende";
import { useState } from "react";
import {GlowImage} from "@/components/Glow";
import VpcToggle from "@/components/VpcToggle";
import HeroSection from "@/components/HeroSection";

export default function ParorendePage() {
  const [showVPC, setShowVPC] = useState(false);

  return (
    <PageLayout>

      {/* -------------------------------------------------------------- */}
      {/* HERO */}
      {/* -------------------------------------------------------------- */}
     <HeroSection
  badge="For pårørende • støtte i hverdagen"
  title="Få innsikt og trygghet når du følger opp noen du er glad i"
  subtitle="Tablaid gjør det lettere å følge opp uten å overstyre. Du får signaler om endringer i helse og funksjon, og bedre grunnlag for gode samtaler."
  supportText="Digital støtte mellom besøk gjør det mulig å hjelpe tidligere — før små bekymringer blir store utfordringer."
  image="/mor-datter.png"
  imageLeft={false}
  primaryCta={{ label: "Hvordan fungerer det?", href: "/hvordan-fungerer-det" }}
  secondaryCta={{ label: "For innbyggere", href: "/innbyggere" }}
/>


      {/* -------------------------------------------------------------- */}
      {/* INNHOLD */}
      {/* -------------------------------------------------------------- */}
      <section className="mx-auto max-w-[var(--max-w)] px-6 lg:px-20 space-y-10">

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Som pårørende får du:</h2>

          <ul className="list-disc pl-5 space-y-3 text-slate-300">
            <li>Oversikt over medisiner (kun etter samtykke)</li>
            <li>Tidlige signaler om endringer i funksjon og helse</li>
            <li>Trygg og enkel deling av utvikling over tid</li>
            <li>Mulighet til å bidra tidlig — før ting blir akutte</li>
            <li>Støtte rollen din selv når du ikke kan være fysisk til stede</li>
          </ul>
        </div>

        <p className="text-slate-300 max-w-2xl">
          Tablaid skaper bedre samspill mellom bruker, pårørende og
          kommunale tjenester — ikke for å erstatte relasjoner, men for
          å gjøre hverdagen bedre for alle som står rundt et menneske
          med helseutfordringer.
        </p>
      </section>


    {/* -------------------------------------------------------------- */}
{/* VPC – COLLAPSIBLE SECTION */}
{/* -------------------------------------------------------------- */}

<section className="mx-auto max-w-[var(--max-w)] px-6 lg:px-20 mt-16 mb-24">
  {/* Innholdet i seksjonen (verdibokser etc.) beholdes som før */}
</section>

{/* Ny og elegant toggle-basert VPC-visning */}
<VpcToggle>
  <VpcParorende />
</VpcToggle>

</PageLayout>
);
}
