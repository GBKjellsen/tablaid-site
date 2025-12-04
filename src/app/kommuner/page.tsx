import VpcKommuner from "@/components/vpc/VpcKommuner";

export default function KommunerPage() {
  return (
    <>
      <main className="min-h-screen bg-slate-950 text-slate-50">
        <div className="max-w-6xl mx-auto px-4 py-16">

          {/* TITLE */}
          <h1 className="text-4xl font-bold mb-6">
            Tablaid for kommuner
          </h1>

          <p className="text-lg opacity-90 mb-10 max-w-3xl">
            Tablaid gir kommuner og primærhelsetjenester et nytt beslutningsgrunnlag:
            en kombinasjon av faktisk legemiddelbruk, tidlige funksjonssignaler og
            trygg deling med pårørende. Målet er tidligere tiltak, bedre prioritering
            og økt trygghet – før behovet for tjenester eskalerer.
          </p>

          {/* WHY SECTION */}
          <h2 className="text-2xl font-semibold mt-10 mb-4">
            Hvorfor kommuner velger Tablaid
          </h2>

          <ul className="list-disc ml-6 space-y-3 opacity-90">
            <li>Oppdager tidlige endringer i funksjon og legemiddelbruk – basert på faktisk etterlevelse</li>
            <li>Gir et bedre grunnlag for prioritering i møte med økende tjenestebehov</li>
            <li>Forsterker samhandling mellom innbygger, pårørende og tjenestene</li>
            <li>Reduserer unødvendige henvendelser og øker forutsigbarhet i oppfølgingen</li>
            <li>Krever ingen integrasjoner for å komme i gang</li>
          </ul>

          {/* PILOT SECTION */}
          <h2 className="text-2xl font-semibold mt-12 mb-4">
            Pilot: 25 innbyggere fra din kommune
          </h2>

          <p className="opacity-90 mb-4 max-w-3xl">
            Piloten er utformet for å være rask, rimelig og innenfor terskelen for enkeltkjøp.
            Målet er å gi kommunen dokumenterbar innsikt i hva tidlige signaler kan bety for
            beslutninger, prioritering og kvalitet i tjenesten.
          </p>

          <ul className="list-disc ml-6 space-y-3 opacity-90">
            <li>Oppstartsmøte og tilpasning til kommunens behov</li>
            <li>Rekruttering gjennom treffsteder, forebyggende tjenester og pårørende</li>
            <li>Løpende støtte og faglig oppfølging fra Tablaid-teamet</li>
            <li>Månedlige funn og trendrapporter til kommunen</li>
            <li>Mulighet for overgang til kommunelisens for hele kommunen</li>
          </ul>

          {/* PRICING */}
          <h2 className="text-2xl font-semibold mt-12 mb-4">
            Pris og modell
          </h2>

          <p className="text-lg opacity-90 mb-6">
            <b>Pilot: 25 000 NOK</b> — Kommunelisens tilbys deretter for 
            <b> 100 000 NOK/år</b>, og piloten gir full lisens ut 2026.
          </p>

          {/* REGISTRATION FORM */}
          <h2 className="text-2xl font-semibold mt-12 mb-6">
            Registrer kommunen for pilotinformasjon
          </h2>

          <form
            action="https://formspree.io/f/xwpgbqaj"
            method="POST"
            className="max-w-lg space-y-4 bg-slate-900 border border-slate-700 p-6 rounded-xl shadow-lg"
          >
            <div>
              <label className="block text-sm mb-1">Kommunenavn</label>
              <input
                type="text"
                name="kommune"
                required
                className="w-full px-3 py-2 rounded bg-slate-800 border border-slate-600"
              />
            </div>

            <div>
              <label className="block text-sm mb-1">Kontaktperson</label>
              <input
                type="text"
                name="kontaktperson"
                required
                className="w-full px-3 py-2 rounded bg-slate-800 border border-slate-600"
              />
            </div>

            <div>
              <label className="block text-sm mb-1">E-post</label>
              <input
                type="email"
                name="epost"
                required
                className="w-full px-3 py-2 rounded bg-slate-800 border border-slate-600"
              />
            </div>

            <button
              type="submit"
              className="w-full mt-4 bg-emerald-500 hover:bg-emerald-400 text-black font-semibold py-3 rounded-lg"
            >
              Send forespørsel
            </button>
          </form>

          <p className="text-sm opacity-60 mt-4">
            Vi sender en PDF med pilotbeskrivelse og avtalealternativer.
          </p>

          {/* FULL VPC-LAYOUT FOR KOMMUNER */}
          <section className="mt-20 mb-16 w-full max-w-5xl mx-auto px-6">
            <VpcKommuner />
          </section>

        </div>
      </main>
    </>
  );
}
