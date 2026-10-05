import Link from "next/link";
import Image from "next/image";

export default function SmartTagOrderPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold text-center mb-6">
        Bestill SmartTags
      </h1>

      <p className="text-lg text-slate-300 text-center mb-10">
        SmartTags gjør det raskt og enkelt å registrere medisininntak ved å 
        holde telefonen inntil etiketten. NFC-etikettene fungerer med både iPhone 
        og Android – ingen app-åpning nødvendig.
      </p>

      {/* CARD */}
      <div className="bg-slate-900/60 border border-slate-700 rounded-2xl p-8 shadow-xl">
        <div className="flex flex-col items-center text-center">
          <Image
            src="/SmartTag.png"
            alt="SmartTag produktbilde"
            width={220}
            height={220}
            className="mb-6 rounded-xl border border-slate-700"
          />

          <h2 className="text-2xl font-semibold mb-2 text-white">
            SmartTag – 4-pakning
          </h2>

          <p className="text-slate-300 mb-6 max-w-sm">
            Rask og pålitelig registrering av medisiner. Perfekt for brukere, 
            pårørende og kommuner som ønsker enkel og trygg etterlevelsesstøtte.
          </p>

          {/* BUTTON */}
          <a
            href="https://buy.stripe.com/6oU28seo83w263G3gBdEs01"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-semibold px-6 py-3 rounded-full transition shadow-lg shadow-emerald-500/30"
          >
            Bestill SmartTags →
          </a>

          <p className="text-xs text-slate-400 mt-4">
            Betaling skjer sikkert via Stripe.
          </p>
        </div>
      </div>
    </main>
  );
}
