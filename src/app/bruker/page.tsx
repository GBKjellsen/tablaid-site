"use client";

import Image from "next/image";
import Link from "next/link";

export default function BrukerPage() {
  return (
    <main className="bg-[#0A0F1F] text-white">

      {/* HERO */}
      <section className="max-w-5xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-10 items-center">

        <div>
          <h1 className="text-4xl font-bold mb-4 leading-tight">
            En enklere og tryggere medisin­hverdag
          </h1>

          <p className="text-gray-300 text-lg mb-6">
            Tablaid er din digitale helse- og legemiddelassistent. Den hjelper deg
            holde oversikt, ta medisiner riktig, forstå behandlingen bedre og følge
            med på egen helse dag for dag — på en måte som er enkel og human.
          </p>
        </div>

        {/* NYTT BILDE – OPTIMALISERT */}
        <div className="flex justify-center">
          <Image
            src="/app-hand.png"
            alt="Bruker holder Tablaid-appen"
            width={280}
            height={380}
            priority
            className="rounded-xl shadow-xl object-cover max-w-[260px] md:max-w-[300px]"
          />
        </div>

      </section>

      {/* INNHOLD */}
      <section className="max-w-5xl mx-auto px-4 pb-20 space-y-6">

        <p className="text-gray-200">
          Med Tablaid får du:
        </p>

        <ul className="list-disc pl-5 space-y-2 text-gray-300">
          <li>
            <strong>Smart legemiddelstøtte</strong> — påminnelser, oversikt og enkel registrering via NFC
          </li>
          <li>
            <strong>Full kontroll</strong> — alt du trenger å vite om medisinene dine, samlet på ett sted
          </li>
          <li>
            <strong>Helsekompass</strong> — korte daglige spørsmål inspirert av WHO ICOPE
          </li>
          <li>
            <strong>Egenvurdert funksjon (CFS)</strong> — et enkelt verktøy som gir deg innsikt i utviklingen over tid
          </li>
          <li>
            <strong>Dashbord</strong> — se mønstre i søvn, energi, mobilitet, kognisjon, humør og mer
          </li>
          <li>
            <strong>Deling av innsikt</strong> — velg om du vil dele data med pårørende eller kommunen
          </li>
        </ul>

        <p className="text-gray-200 pt-4">
          Tablaid er utviklet med faglig forankring og ekte pasienterfaring i bunn —
          for å gi deg trygghet, oversikt og mer forutsigbarhet i hverdagen.
        </p>

        <div className="pt-8">
          <Link
            href="/kontakt"
            className="inline-block px-6 py-3 bg-green-600 hover:bg-green-500 text-black rounded-full font-semibold"
          >
            Vil du teste Tablaid?
          </Link>
        </div>

      </section>
    </main>
  );
}
