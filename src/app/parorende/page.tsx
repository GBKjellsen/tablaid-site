"use client";

import Image from "next/image";
import Link from "next/link";
import PageLayout from "@/components/layout/PageLayout";
import { HeroGlow } from "@/components/Glow";
import VpcParorende from "@/components/vpc/VpcParorende";
import { useState } from "react";
import {GlowImage} from "@/components/Glow";

export default function ParorendePage() {
  const [showVPC, setShowVPC] = useState(false);

  return (
    <PageLayout>

      {/* -------------------------------------------------------------- */}
      {/* HERO */}
      {/* -------------------------------------------------------------- */}
      <section className="relative overflow-hidden pt-24 pb-20">
        <HeroGlow />

  {/* TOP BADGE */}
  <div className="mx-auto max-w-[var(--max-w)] flex flex-col gap-8 px-6 lg:px-20">
    <div className="flex-1 text-center lg:text-left">
  <span className="badge">For pårørende • støtte og innsikt</span>
    </div>
  </div>

  {/* HERO GRID */}

        <div className="mx-auto flex max-w-[var(--max-w)] flex-col-reverse 
                        gap-12 px-6 lg:px-20 lg:flex-row lg:items-center">

          {/* TEXT */}
          <div className="space-y-6 max-w-xl">
            <h1 className="text-4xl font-bold leading-tight">
              Bedre oversikt og trygghet for deg som er pårørende
            </h1>

            <p className="text-slate-300 text-lg leading-relaxed">
              Tablaid gir deg innsikt i hvordan det går med den du bryr deg om —
              uten at du må spørre hele tiden. Deling av medisinrutiner og
              helsetrender gjør rollen lettere, tryggere og mindre belastende.
            </p>

            <Link href="/kommuner" className="button-primary">
              Meld interesse
            </Link>
</div>
          {/* IMAGE + GLOW */}
          <div className="relative w-fit mx-auto">
            <div className="absolute inset-0 scale-110 blur-2xl bg-emerald-500/20 
                            rounded-xl -z-10"></div>

            <GlowImage
              src="/mor-datter.png"
              alt="Pårørende støtte"
              width={320}
              height={380}
              priority
              className="rounded-xl shadow-xl max-w-[280px] md:max-w-[320px]"
            />
          </div>
        </div>
      </section>


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
            <VpcParorende />
          </div>
        )}
      </section>

    </PageLayout>
  );
}
