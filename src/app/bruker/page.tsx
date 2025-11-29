"use client";

import Link from "next/link";

export default function BrukerePage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold mb-6">For brukere</h1>

      <p className="text-lg opacity-90 mb-10">
        Tablaid er en enkel og trygg helse- og legemiddelassistent som hjelper deg 
        å holde oversikt – uten stress, uten kompliserte systemer, og uten at 
        du trenger å “gjøre alt riktig” hele tiden. Den er utviklet for mennesker 
        som lever med én eller flere faste medisiner, og som ønsker bedre innsikt 
        i egen helse.
      </p>

      <h2 className="text-2xl font-semibold mt-12 mb-4">
        Hva får du som bruker?
      </h2>

      <ul className="list-disc ml-6 space-y-3 opacity-90">
        <li>Enkel påminnelse og oversikt over medisiner</li>
        <li>NFC-registrering som gjør logging raskt og intuitivt</li>
        <li>Et helsekompass som gir daglig innsikt i egen funksjon</li>
        <li>Trygg oversikt over søvn, energi, humør, mobilitet og mer</li>
        <li>Mulighet til å dele innsikt med pårørende dersom du ønsker det</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-12 mb-4">
        Hvorfor betyr dette noe?
      </h2>

      <p className="opacity-90 mb-6">
        Mange som bruker faste medisiner ønsker større trygghet – både for seg selv 
        og for familien. Samtidig vil de fleste unngå tunge systemer eller apper 
        som føles kompliserte.
      </p>

      <div className="border-l-4 border-blue-600 pl-4 mb-6 italic opacity-90">
        Verdien ligger i de små, daglige signalene – og hvordan de samlet gir et 
        bilde av helsen din over tid.
      </div>

      <p className="opacity-90 mb-6">
        Når du får innsikt, blir det lettere å forstå når ting går bra – og når 
        noe bør tas tak i. Tablaid handler om å skape mestring og forutsigbarhet.
      </p>

      <h2 className="text-2xl font-semibold mt-12 mb-4">
        Et verktøy som arbeider for deg – i bakgrunnen
      </h2>

      <ul className="list-disc ml-6 space-y-3 opacity-90">
        <li>Automatiske påminnelser når du ikke er hjemme</li>
        <li>Trendanalyse som viser hvordan ting utvikler seg</li>
        <li>Tidlige signaler på endringer du bør være oppmerksom på</li>
        <li>Trygg datalagring og full kontroll over deling og tilgang</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-12 mb-4">Kostnad</h2>

      <p className="text-lg opacity-90 mb-6">
        Appen vil koste en rimelig månedspris, men i kommuner som deltar i pilot 
        kan den dekkes for deg og dine pårørende.
      </p>

      <h2 className="text-2xl font-semibold mt-12 mb-4">Vil du prøve Tablaid?</h2>
      <p className="opacity-90 mb-8">
        Meld interesse for å teste appen i pilot sammen med din kommune eller som privat bruker.
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
