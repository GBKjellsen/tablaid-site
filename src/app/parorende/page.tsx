"use client";

import Image from "next/image";
import Link from "next/link";

export default function ParorendePage() {
  return (
    <main className="bg-[#0A0F1F] text-white">
      {/* HERO */}
      <section className="max-w-5xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl font-bold mb-4">
            Mer innsikt. Mindre bekymring.
          </h1>
          <p className="text-gray-300 text-lg mb-6">
            Som pårørende står du ofte alene med ansvar, spørsmål og usikkerhet. 
            Tablaid gir deg tilgang til riktig informasjon — på en måte som styrker tryggheten, ikke uroen.
          </p>
        </div>

        <div className="flex justify-center">
          <Image
            src="/mor-datter.png"
            alt="Pårørende sammen med bruker"
            width={360}
            height={320}
            className="rounded-xl shadow-xl object-cover"
          />
        </div>
      </section>

      {/* INNHOLD */}
      <section className="max-w-5xl mx-auto px-4 pb-20 space-y-6">
        <p className="text-gray-200">
          Med Tablaid kan du:
        </p>

        <ul className="list-disc pl-5 space-y-2 text-gray-300">
          <li>Følge med på medisiner (kun etter samtykke)</li>
          <li>Få tidlige signaler på endringer i funksjon og helse</li>
          <li>Se utvikling over tid gjennom trygg og enkel deling</li>
          <li>Bidra i oppfølgingen før situasjoner blir akutte eller krevende</li>
          <li>Støtte den du er glad i, uten å måtte være fysisk til stede</li>
        </ul>

        <p className="text-gray-200">
          Tablaid er utviklet for å skape samspill mellom brukere, pårørende og kommunale tjenester — 
          ikke for å erstatte noen, men for å gjøre samarbeidet enklere.
        </p>

        <div className="pt-8">
          <Link
            href="/kontakt"
            className="inline-block px-6 py-3 bg-green-600 hover:bg-green-500 text-black rounded-full font-semibold"
          >
            Snakk med oss
          </Link>
        </div>
      </section>
    </main>
  );
}
