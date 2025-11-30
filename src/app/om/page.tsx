"use client";

import Image from "next/image";

export default function OmPage() {
  return (
    <main className="bg-[#0A0F1F] text-white">
      {/* HERO */}
      <section className="max-w-5xl mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-4">Hvorfor Tablaid finnes</h1>
        <p className="text-gray-300 text-lg max-w-3xl">
          Tablaid er bygget på én grunnidé: <br />
          <span className="font-semibold">Tidlige signaler kan endre forløp.</span>
        </p>
        <p className="text-gray-300 text-lg max-w-3xl mt-4">
          Når medisinbruk, funksjon og hverdag endrer seg, skjer det som regel gradvis. 
          Da trengs et verktøy som ser utviklingen — ikke bare enkeltøyeblikk.
        </p>
      </section>

      <section className="max-w-6xl mx-auto px-4 pb-20 grid md:grid-cols-2 gap-10 items-start">
        <Image
          src="/Bilde_om_selskapsnavnet_oppdateringsmail.png"
          alt="Historien bak Tablaid"
          width={380}
          height={320}
          className="rounded-xl shadow-xl object-cover"
        />

        <div className="space-y-4">
          <p className="text-gray-200">
            Tablaid er grunnlagt av:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-gray-300">
            <li>
              <strong>Gaute Birkeland Kjellsen</strong>, anestesisykepleier med lang klinisk erfaring, kombinert med flere år i helseteknologiske prosjekter og innovasjonsarbeid. Hans personlige erfaring med å leve med kronisk behandling gjennom mange år har gitt verdifull innsikt i etterlevelse, medisinbruk og samspill i helsevesenet — og er en av grunnpilarene i hvordan Tablaid er utviklet.
            </li>
            <li>Samarbeid med Podium og tverrfaglige utviklere</li>
            <li>Dialog med kommuner, treffsentre, pårørende og fagmiljøer</li>
            <li>Støtte fra SmartOslo og flere innovative miljøer</li>
          </ul>

          <h2 className="text-2xl font-semibold pt-4">Vår filosofi</h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-300">
            <li>Brukeren først</li>
            <li>Datadrevet trygghet</li>
            <li>Enkel UX for alle aldersgrupper</li>
            <li>Forebygging før behandling</li>
            <li>Pårørende som ressurs, ikke kriseløsning</li>
            <li>Kommuner som trenger smart verktøy, ikke mer skjemaer</li>
          </ul>

          <p className="text-gray-200 pt-4">
            Tablaid er ikke nok en app. Det er et helsekompass — bygget for å skape trygghet, 
            oversikt og bedre samspill.
          </p>
        </div>
      </section>
    </main>
  );
}
