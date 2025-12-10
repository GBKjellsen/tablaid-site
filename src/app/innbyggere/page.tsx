"use client";

import Image from "next/image";
import Link from "next/link";
import PageLayout from "@/components/layout/PageLayout";
import { HeroGlow } from "@/components/Glow";
import VpcInnbyggere from "@/components/vpc/VpcInnbyggere";
import { useState } from "react";
import {GlowImage} from "@/components/Glow";

export default function InnbyggerPage() {
  const [showVPC, setShowVPC] = useState(false);

  return (
    <PageLayout>

     {/* -------------------------------------------------------------- */}
{/* HERO */}
{/* -------------------------------------------------------------- */}
<section className="relative overflow-hidden pt-24 pb-20">
  <HeroGlow />

  <div className="mx-auto flex max-w-[var(--max-w)] flex-col-reverse 
                  gap-12 px-6 lg:px-20 lg:flex-row lg:items-center">

    {/* TEXT */}
    <div className="flex-1 text-center lg:text-left space-y-6 max-w-xl">

      {/* TOP BADGE */}
      <span className="badge">For innbyggere • brukere av appen</span>

      <h1 className="text-4xl font-bold leading-tight">
        En enklere og tryggere hverdag med medisiner og helse
      </h1>

      <p className="text-slate-300 text-lg leading-relaxed">
        Tablaid hjelper deg å holde oversikt, forstå behandlingen din bedre og 
        følge med på egen helse — uten stress og uten kompliserte løsninger.
      </p>

      <Link
        href="/kommuner" className="button-primary" >
        Meld interesse
      </Link>
    </div>

    {/* IMAGE + GLOW */}
    <div className="relative w-fit mx-auto">
      <div className="absolute inset-0 scale-110 blur-2xl bg-emerald-500/20 
                      rounded-xl -z-10"></div>

      <GlowImage
        src="/app-hand.png"
        alt="Bruker holder Tablaid-appen"
        width={350}
        height={420}
        priority
        className="rounded-xl shadow-xl object-cover max-w-[260px] md:max-w-[300px]"
      />
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

        <button
          onClick={() => setShowVPC(!showVPC)}
          className="w-full rounded-2xl border border-slate-800 bg-slate-900/60 
                     px-6 py-4 text-left font-semibold text-slate-100 
                     hover:bg-slate-900/70 transition"
        >
          {showVPC ? "Skjul detaljert verdikart" : "Vis detaljert verdikart (VPC)"}
        </button>

        {showVPC && (
          <div className="mt-6 animate-fadeIn">
            <VpcInnbyggere />
          </div>
        )}
      </section>

    </PageLayout>
  );
}
