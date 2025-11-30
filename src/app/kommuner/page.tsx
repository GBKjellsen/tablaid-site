"use client";

import Image from "next/image";
import Link from "next/link";

export default function KommunerPage() {
  return (
    <main className="bg-[#0A0F1F] text-white">
      {/* HERO */}
      <section className="max-w-5xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl font-bold mb-4">
            Tidlige signaler gir bedre tjenester — og reduserte kostnader
          </h1>
          <p className="text-gray-300 text-lg mb-6">
            Kommunene står i en krevende situasjon: økende kompleksitet, flere som trenger hjelp og mindre tid per bruker.
            Tablaid gir et lavterskel digitalt verktøy som fanger opp risiko tidligere og styrker forebyggende innsats.
          </p>
        </div>

        <div className="flex justify-center">
          <Image
            src="/app-triple_3.png"
            alt="Helsepersonell med digitalt beslutningsgrunnlag"
            width={380}
            height={320}
            className="rounded-xl shadow-xl object-cover"
          />
        </div>
      </section>

      {/* INNHOLD */}
      <section className="max-w-5xl mx-auto px-4 pb-20 space-y-6">
        <p className="text-gray-200">
          Tablaid gir kommuner:
        </p>

        <ul className="list-disc pl-5 space-y-2 text-gray-300">
          <li>Enkel digital selvrapportering inspirert av WHO ICOPE</li>
          <li>Funksjons­utvikling over tid, gjennom CFS og helsedomenene</li>
          <li>Tidlige signaler når brukere viser tegn til økt risiko</li>
          <li>Bedre beslutningsgrunnlag og dokumentasjon</li>
          <li>Samspill med pårørende – med samtykkebasert innsikt</li>
          <li>Pilotklar løsning som ikke krever tunge integrasjoner</li>
        </ul>

        <div className="pt-6 space-y-3 text-gray-200">
          <h2 className="text-2xl font-semibold">Pilotmodell</h2>
          <ul className="list-disc pl-5 space-y-1 text-gray-300">
            <li>3–6 måneder</li>
            <li>20 kommuner</li>
            <li>25 brukere per kommune</li>
            <li>Fast lav pris: 25 000 NOK</li>
            <li>Ingen anbudsgrense, ingen bindinger</li>
          </ul>
        </div>

        <p className="text-gray-200 pt-4">
          <strong>Mål:</strong> Et felles læringsløp — der kommuner, brukere og pårørende får et verktøy som styrker 
          forebygging og tidlig innsats.
        </p>

        <div className="pt-8">
          <Link
            href="/kontakt"
            className="inline-block px-6 py-3 bg-green-600 hover:bg-green-500 text-black rounded-full font-semibold"
          >
            Bli pilotkommune
          </Link>
        </div>
      </section>
    </main>
  );
}
