"use client";

import Image from "next/image";

export default function SmartTagPage() {
  return (
    <main className="bg-[#0A0F1F] text-white">

      {/* HERO */}
      <section className="max-w-5xl mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-4">Bestill Tablaid SmartTags</h1>

        <p className="text-lg text-gray-300 max-w-2xl">
          SmartTags gjør det enkelt å registrere medisiner med et «tæpp». 
          Fest dem på medisinesker, blisterpakker eller dosetten din — og 
          registrer inntak på ett sekund.
        </p>
      </section>

      {/* VISUAL */}
      <section className="max-w-5xl mx-auto px-4 pb-10 flex justify-center">
        <Image
          src="/app-hand.png"
          alt="SmartTag bruk"
          width={330}
          height={330}
          className="rounded-xl shadow-xl object-contain"
        />
      </section>

      {/* INSTRUKSJON */}
      <section className="max-w-5xl mx-auto px-4 pb-20 space-y-6">
        <h2 className="text-2xl font-bold mb-2">Hvordan fungerer SmartTags?</h2>

        <div className="space-y-3 text-gray-300 leading-relaxed">
          <p>
            Med SmartTags kan du «smartifisere» all legemiddelemballasje — 
            fra pillebokser og blisterpakker til en vanlig analog dosett.
          </p>

          <ul className="list-disc pl-5 space-y-2">
            <li>Fest en SmartTag på medisineske, blisterpakke eller dosett</li>
            <li>Hold mobilen lett mot taggen når du tar medisinen</li>
            <li>Tablaid registrerer inntaket automatisk — ingen menyer, ingen knapper</li>
            <li>Perfekt når du ønsker enkel og presis loggføring</li>
          </ul>
        </div>
      </section>

      {/* BESTILLINGSFORM */}
      <section className="bg-[#0F172A] py-20 border-t border-white/10">
        <div className="max-w-5xl mx-auto px-4">

          <h2 className="text-3xl font-bold text-white text-center mb-6">
            Bestill SmartTags
          </h2>

          <p className="text-gray-300 text-center max-w-2xl mx-auto mb-10">
            Pris: <strong>89 kr</strong> per pakke (4 SmartTags) + porto.  
            Du får betalingsinformasjon (Vipps eller faktura) etter innsending.
          </p>

          <div className="bg-[#0A0F1F] border border-white/10 rounded-xl p-8 shadow-lg">
            <form
              action="https://formsubmit.co/post@tablaid.no"
              method="POST"
              className="grid gap-4 max-w-md mx-auto"
            >
              <input type="hidden" name="_subject" value="Bestilling: SmartTags" />
              <input type="hidden" name="_captcha" value="false" />

              <input
                type="text"
                name="navn"
                placeholder="Fullt navn"
                required
                className="p-3 rounded-md bg-[#1E293B] border border-white/10 text-white"
              />

              <input
                type="text"
                name="adresse"
                placeholder="Adresse"
                required
                className="p-3 rounded-md bg-[#1E293B] border border-white/10 text-white"
              />

              <input
                type="text"
                name="postnummer_og_sted"
                placeholder="Postnummer og sted"
                required
                className="p-3 rounded-md bg-[#1E293B] border border-white/10 text-white"
              />

              <input
                type="tel"
                name="mobil"
                placeholder="Mobilnummer"
                required
                className="p-3 rounded-md bg-[#1E293B] border border-white/10 text-white"
              />

              <input
                type="number"
                name="antall_pakker"
                placeholder="Antall pakker (á 4)"
                min="1"
                required
                className="p-3 rounded-md bg-[#1E293B] border border-white/10 text-white"
              />

              <button
                type="submit"
                className="w-full mt-2 px-6 py-3 bg-green-600 hover:bg-green-500 text-black font-semibold rounded-full"
              >
                Send bestilling
              </button>
            </form>

            <p className="text-gray-400 text-center text-sm mt-6">
              Betaling skjer via Vipps eller faktura før utsendelse.
            </p>
          </div>
        </div>
      </section>

    </main>
  );
}
