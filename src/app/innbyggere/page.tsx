"use client";

import Image from "next/image";
import Link from "next/link";
import PageLayout from "@/components/layout/PageLayout";
import { HeroGlow } from "@/components/Glow";
import VpcInnbyggere from "@/components/vpc/VpcInnbyggere";
import { useState } from "react";
import {GlowImage} from "@/components/Glow";
import VpcToggle from "@/components/VpcToggle";
import HeroSection from "@/components/HeroSection";

export default function InnbyggerPage() {
  const [showVPC, setShowVPC] = useState(false);

  return (
    <PageLayout>

{/* ------------------------------------------------------ */}
{/* HERO – INNBYGGERE                                     */}
{/* ------------------------------------------------------ */}
<HeroSection
  badge="For innbyggere • trygghet & oversikt"
  title="En enklere hverdag med bedre oversikt over egen helse"
  subtitle="Tablaid hjelper deg å holde oversikt over medisiner og egen funksjon – dag for dag. En enkel løsning som gir trygghet, mestring og bedre dialog med dem som følger deg opp."
  supportText="Små endringer over tid kan være viktige. Tidlig oversikt gjør det lettere å ta tak – i ditt tempo."
  image="/app-hand.png"
  imageLeft={false}
 primaryCta={{
  label: "Slik fungerer appen",
  href: "/innbyggere/hvordan-fungerer-det",
}}
secondaryCta={{
  label: "Meld interesse",
  href: "#tidlig-tilgang",
}}

/>



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
<VpcToggle
  labelOn="Skjul verdiforslag for innbyggere"
  labelOff="Se innbyggernes fulle verdiforslag"
>
  <VpcInnbyggere />
</VpcToggle>


<section id="tidlig-tilgang" className="py-20 bg-slate-950 border-t border-slate-800">
  <div className="max-w-xl mx-auto px-6 text-center">
    <h2 className="text-2xl sm:text-3xl font-semibold">
      Få beskjed når Tablaid åpnes for bruk
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

      <input type="hidden" name="kilde" value="Innbyggere – tidlig tilgang" />

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
