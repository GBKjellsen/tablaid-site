// src/app/parorende/page.tsx
"use client";

import Link from "next/link";

export default function ParorendePage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold mb-6">For pårørende</h1>

      <p className="text-lg opacity-90 mb-10">
        Tablaid er utviklet for å gi pårørende trygghet, oversikt og mulighet til 
        å støtte sine nærmeste – uten å oppleves kontrollerende eller krevende. 
        Når dine nærmeste ønsker det, kan dere dele innsikt og få et felles bilde 
        av hvordan hverdagen faktisk går.
      </p>

      <h2 className="text-2xl font-semibold mt-12 mb-4">
        Hva får du som pårørende?
      </h2>

      <ul className="list-disc ml-6 space-y-3 opacity-90">
        <li>Trygg oversikt over hvordan det går i hverdagen</li>
        <li>Varsler ved endringer som kan være viktige å følge opp</li>
        <li>Mulighet til å bidra – kun når brukeren ønsker det</li>
        <li>Bedre dialog om helse og trivsel</li>
        <li>Støtte for å vite når du bør reagere – og når du kan senke skuldrene</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-12 mb-4">
        Innsikt som gjør en forskjell
      </h2>

      <p className="opacity-90 mb-6">
        Mange pårørende kjenner på utrygghet:  
        “Hvordan går det egentlig hjemme – mellom legetimene, mellom besøkene?”  
      </p>

      <div className="border-l-4 border-blue-600 pl-4 mb-6 italic opacity-90">
        Tablaid gir et helhetlig bilde basert på små, daglige signaler – 
        om energi, humør, søvn, ernæring og legemiddelbruk.
      </div>

      <p className="opacity-90 mb-6">
        Når noe endrer seg over tid, blir det lettere å fange det opp tidlig.
        Uten unødvendig bekymring – og uten at pårørende må gjette.
      </p>

      <h2 className="text-2xl font-semibold mt-12 mb-4">
        Hva betyr dette i praksis?
      </h2>

      <ul className="list-disc ml-6 space-y-3 opacity-90">
        <li>Enkel varsling når trender går feil vei</li>
        <li>Tidlig oppdagelse av funksjonsfall</li>
        <li>Støtte til å snakke om viktige endringer i familien</li>
        <li>Et verktøy som gir mer trygghet – ikke mer arbeid</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-12 mb-4">Kostnad</h2>

      <p className="text-lg opacity-90 mb-6">
        Som pårørende kan du få tilgang for en rimelig månedspris – og i kommuner 
        som deltar i pilot dekker kommunen dette for familien.
      </p>

      <h2 className="text-2xl font-semibold mt-12 mb-4">Vil du vite mer?</h2>
      <p className="opacity-90 mb-8">
        Vi sender gjerne en kort introduksjon eller informasjonspakke.
      </p>

      <Link
        href="/kontakt"
        className="px-8 py-4 rounded-xl bg-blue-600 text-white text-lg font-semibold hover:bg-blue-700 transition inline-block"
      >
        Kontakt oss
      </Link>
    </main>
  );
}
