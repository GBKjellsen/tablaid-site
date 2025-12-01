"use client";

import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="text-white bg-[#0A0F1F]">
      {/* HERO */}
      <section className="max-w-6xl mx-auto px-4 py-20 md:py-24 grid md:grid-cols-2 gap-12 items-center">
        {/* LEFT TEXT */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Digital helse- og legemiddelassistent{" "}
            <span className="block text-green-400">
              for en tryggere hverdag
            </span>
          </h1>

          <p className="text-lg text-gray-300 mb-8">
            Tablaid kombinerer legemiddeloversikt, daglige helsesignaler og
            pårørendestøtte – utviklet for trygghet, mestring og tidligere
            oppmerksomhet når noe er i endring.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/kontakt"
              className="px-6 py-3 bg-green-600 hover:bg-green-500 rounded-full font-semibold text-black"
            >
              Kontakt oss
            </Link>

            <Link
              href="/om"
              className="px-6 py-3 border border-white/30 rounded-full hover:bg-white/10 transition"
            >
              Les mer om Tablaid
            </Link>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center">
          <Image
            src="/tablaid-startside-gronn.png"
            alt="Tablaid app på mobil"
            width={320}
            height={420}
            className="rounded-2xl drop-shadow-2xl object-contain"
            priority
          />
        </div>
      </section>

      {/* VERDIKORT – BRUKER / PÅRØRENDE / KOMMUNE */}
      <section className="max-w-6xl mx-auto px-4 pb-12">
        <div className="grid md:grid-cols-3 gap-6">
          {/* Bruker */}
          <div className="bg-[#0F172A] border border-white/10 rounded-2xl p-6 flex flex-col gap-3">
            <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-300 font-semibold text-lg">
              B
            </div>
            <h2 className="text-xl font-semibold">For brukere</h2>
            <p className="text-sm text-gray-300">
              Enklere hverdag med påminnelser, oversikt over medisiner og korte
              daglige innsjekkinger på egen helse.
            </p>
            <Link
              href="/bruker"
              className="mt-auto text-sm text-green-400 hover:text-green-300"
            >
              Les mer for brukere →
            </Link>
          </div>

          {/* Pårørende */}
          <div className="bg-[#0F172A] border border-white/10 rounded-2xl p-6 flex flex-col gap-3">
            <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-300 font-semibold text-lg">
              P
            </div>
            <h2 className="text-xl font-semibold">For pårørende</h2>
            <p className="text-sm text-gray-300">
              Mer innsikt, mindre bekymring. Samtykkebasert innsyn i utvikling
              og etterlevelse – uten å ta over ansvaret.
            </p>
            <Link
              href="/parorende"
              className="mt-auto text-sm text-green-400 hover:text-green-300"
            >
              Les mer for pårørende →
            </Link>
          </div>

          {/* Kommuner */}
          <div className="bg-[#0F172A] border border-white/10 rounded-2xl p-6 flex flex-col gap-3">
            <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-300 font-semibold text-lg">
              K
            </div>
            <h2 className="text-xl font-semibold">For kommuner</h2>
            <p className="text-sm text-gray-300">
              Tidlige signaler om funksjonsendring, bedre oversikt og et
              lavterskel pilotløp uten tunge integrasjoner.
            </p>
            <Link
              href="/kommuner"
              className="mt-auto text-sm text-green-400 hover:text-green-300"
            >
              Les mer for kommuner →
            </Link>
          </div>
        </div>
      </section>

      {/* HVORDAN TABLAID FUNGERER */}
      <section className="bg-[#0F172A] py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Hvordan Tablaid fungerer
          </h2>

          <p className="text-gray-300 max-w-2xl mx-auto mb-10">
            En brukervennlig app som hjelper deg med medisiner, helsesignaler
            og deling av innsikt – alt på ett sted. Bygget for å støtte
            hverdagen, ikke styre den.
          </p>

          <Image
            src="/app-triple.png"
            alt="Tablaid app-visning"
            width={640}
            height={420}
            className="mx-auto rounded-2xl object-contain drop-shadow-xl"
          />
        </div>
      </section>

      {/* SEKSJON – TIDLIGE SIGNALER, ICOPE, CFS, NFC */}
      <section className="max-w-6xl mx-auto px-4 py-20 space-y-10">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold mb-4">
            Tidlige signaler – før små endringer blir store
          </h2>
          <p className="text-gray-300 leading-relaxed">
            Funksjon og hverdag endrer seg gradvis. Mange endringer oppdages
            først når behovet har blitt stort. Tablaid hjelper brukere,
            pårørende og kommuner med å følge utviklingen over tid – slik at det
            blir enklere å reagere tidligere, med riktigere støtte.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-[#0F172A] border border-white/10 rounded-2xl p-5">
            <h3 className="font-semibold mb-2">Helsekompass (ICOPE-inspirert)</h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              Korte, jevnlige spørsmål om syn, hørsel, mobilitet, kognisjon,
              psykisk helse og energinivå gir et bilde av funksjonen over tid –
              ikke bare i øyeblikket.
            </p>
          </div>

          <div className="bg-[#0F172A] border border-white/10 rounded-2xl p-5">
            <h3 className="font-semibold mb-2">Egenvurdert funksjon (CFS)</h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              Brukeren gjør en enkel egenvurdering av funksjonsnivå med
              utgangspunkt i Clinical Frailty Scale (CFS). Dette gir et felles
              språk for utvikling – både for bruker, pårørende og tjenester.
            </p>
          </div>

          <div className="bg-[#0F172A] border border-white/10 rounded-2xl p-5">
            <h3 className="font-semibold mb-2">Smart medisinbruk med SmartTags</h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              Med Tablaids NFC-baserte SmartTags kan brukeren enkelt registrere
              når medisiner tas – ved å tappe mobilen mot merket på dosett,
              pakning eller medisinskap.
            </p>
          </div>
        </div>

        <p className="text-sm text-gray-400 max-w-3xl">
          Tablaid er inspirert av WHO sitt ICOPE-rammeverk og Clinical Frailty
          Scale (CFS), men er ikke et medisinsk beslutningsverktøy. Løsningen
          er laget for å støtte dialog, oversikt og forebyggende arbeid – ikke
          for å stille diagnoser.
        </p>
      </section>

      {/* OFFENTLIGE INNSIKTER / SITATER */}
      <section className="bg-[#0A0F1F] py-20 border-t border-white/10">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Behovene Tablaid adresserer er godt dokumentert
          </h2>

          <div className="grid md:grid-cols-2 gap-8 text-gray-300">
            <div className="bg-[#0F172A] p-6 rounded-2xl shadow-lg border border-white/10">
              <p className="leading-relaxed">
                «Helsesituasjonen utvikler seg gradvis, og tidlige signaler er
                avgjørende for å identifisere økt risiko i tide.»
              </p>
              <p className="mt-4 text-sm text-gray-400">– Helsedirektoratet</p>
            </div>

            <div className="bg-[#0F172A] p-6 rounded-2xl shadow-lg border border-white/10">
              <p className="leading-relaxed">
                «Mangelfull oversikt over legemidler og oppfølging er en hyppig
                årsak til alvorlige hendelser i tjenestene.»
              </p>
              <p className="mt-4 text-sm text-gray-400">– Helsetilsynet</p>
            </div>

            <div className="bg-[#0F172A] p-6 rounded-2xl shadow-lg border border-white/10">
              <p className="leading-relaxed">
                «Regelmessig egenrapportering av funksjon og helse gjør det
                mulig å oppdage endringer tidlig og tilby riktigere støtte.»
              </p>
              <p className="mt-4 text-sm text-gray-400">– WHO ICOPE</p>
            </div>

            <div className="bg-[#0F172A] p-6 rounded-2xl shadow-lg border border-white/10">
              <p className="leading-relaxed">
                «Pårørende er en stor ressurs når de får innsikt, støtte og
                mulighet til å bidra i oppfølgingen.»
              </p>
              <p className="mt-4 text-sm text-gray-400">– Helsetilsynet</p>
            </div>

            <div className="bg-[#0F172A] p-6 rounded-2xl shadow-lg border border-white/10 md:col-span-2">
              <p className="leading-relaxed">
                «Kommunene trenger digitale løsninger som styrker forebygging,
                gir bedre oversikt og frigjør tid til direkte tjenesteyting.»
              </p>
              <p className="mt-4 text-sm text-gray-400">– KS</p>
            </div>
          </div>
        </div>
      </section>

      {/* SMARTTAGS – BESTILLING / INTRO */}
      <section className="max-w-6xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-4">
            SmartTags – gjør medisinskapet litt smartere
          </h2>
          <p className="text-gray-300 mb-4">
            Tablaids SmartTags er små NFC-klistremerker som kan settes på
            dosett, legemiddelpakninger eller innsiden av medisinskapet. Når
            brukeren tapper mobilen lett mot merket, registreres dosen som
            tatt.
          </p>
          <p className="text-gray-300 mb-4">
            SmartTags gjør det enklere å holde oversikt – uten nye dingser eller
            komplisert utstyr. Kun mobilen og en enkel vane.
          </p>
          <p className="text-sm text-gray-400 mb-6">
            SmartTags tilbys i pakker á 4 stk. i pilotfasen. Bestilling og
            betaling skjer foreløpig manuelt etter kontakt med Tablaid.
          </p>

          <Link
            href="/smarttag"
            className="inline-block px-6 py-3 bg-white text-black rounded-full font-semibold hover:bg-gray-200 transition"
          >
            Les mer og bestill SmartTags
          </Link>
        </div>

        <div className="flex justify-center">
          <Image
            src="/tablaid-symbol.png"
            alt="Tablaid symbol"
            width={160}
            height={160}
            className="rounded-2xl object-contain opacity-80"
          />
        </div>
      </section>

      {/* CTA – KONTAKT */}
      <section className="bg-[#0F172A] py-24 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">
          Klar for å ta neste steg?
        </h2>

        <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto">
          Enten du representerer en kommune, er pårørende, bruker eller
          potensiell investor – ta kontakt for en uforpliktende prat om Tablaid
          og mulighetene i pilotfasen.
        </p>

        <Link
          href="/kontakt"
          className="px-8 py-4 bg-green-600 hover:bg-green-500 rounded-full font-semibold text-black"
        >
          Kontakt oss
        </Link>
      </section>
    </main>
  );
}
