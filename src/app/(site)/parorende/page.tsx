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
  subtitle="Tablaid gjør det lettere å følge opp uten å overstyre. Du får signaler om endringer i helse og funksjon, noe som gir bedre grunnlag for dialog og støtte – også når du ikke kan være fysisk til stede."
  supportText="Tidlige signaler kan gjøre det lettere å hjelpe før små bekymringer blir store."
  image="/mor-datter.png"
  imageLeft={false}
  primaryCta={{ 
    label: "Skriv meg opp for tidlig tilgang", 
    href: "#tidlig-tilgang" 
  }}
  secondaryCta={{ 
    label: "For innbyggere", 
    href: "/innbyggere" 
  }}
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
<VpcToggle
  labelOn="Skjul verdiforslag for pårørende"
  labelOff="Se pårørendes fulle verdiforslag"
>
  <VpcParorende />
</VpcToggle>


<section id="tidlig-tilgang" className="py-20 bg-slate-950 border-t border-slate-800">
  <div className="max-w-xl mx-auto px-6 text-center">
    <h2 className="text-2xl sm:text-3xl font-semibold">
      Få beskjed når Tablaid lanseres 
    </h2>

    <p className="mt-3 text-slate-300 text-sm leading-relaxed">
      Meld din interesse, så gir vi beskjed når tidlig tilgang blir tilgjengelig.
      Ingen forpliktelser.
    </p>

    <form
      action="https://formspree.io/f/mpwvkqva"
      method="POST"
      className="mt-8 grid gap-4 text-left"
    >
      <div>
        <label className="input-label">Navn</label>
        <input name="navn" className="input" />
      </div>

      <div>
        <label className="input-label">E-post</label>
        <input name="epost" type="email" required className="input" />
      </div>

      <input type="hidden" name="kilde" value="Pårørende – tidlig tilgang" />
    <div>
     <label className="input-label">Rolle (valgfritt)</label>
      <select name="rolle" className="input">
        <option value="">Velg (valgfritt)</option>
        <option value="personlig_bruk">Personlig bruk (innbygger)</option>
        <option value="parorende">Pårørende</option>
        <option value="begge">Personlig bruk og som pårørende</option>
        <option value="annet">Annet / usikker</option>
  </select>
</div>
      <button
        type="submit"
        className="mt-4 w-full rounded-full bg-emerald-500 hover:bg-emerald-400
                   text-white py-3 text-sm font-semibold transition"
      >
        Meld interesse
      </button>
    </form>
  </div>
</section>

</PageLayout>
);
}
