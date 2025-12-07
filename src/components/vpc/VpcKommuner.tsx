"use client";

export default function VpcKommuner() {
  return (
    <section className="mb-16 w-full">

      {/* Header */}
      <h2 className="text-2xl font-semibold text-slate-50 mb-6">

        Verdiforslag – Kommuner
      </h2>

      {/* GRID: 2 kolonner × 3 rader */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* Kommunens oppgaver */}
        <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-5">
          <h3 className="text-emerald-300 font-semibold mb-2">Kommunens oppgaver</h3>
          <ul className="text-slate-300 text-sm space-y-1">
            <li>• Styrke forebygging og tidlig identifisering av funksjonsfall.</li>
            <li>• Ivareta pasientsikkerhet og kvalitet i legemiddelbruk.</li>
            <li>• Prioritere ressursbruk i møte med økende tjenestebehov.</li>
            <li>• Sikre samhandling mellom bruker, pårørende og tjenestene.</li>
            <li>• Levere tjenester i tråd med nasjonale føringer og reformkrav.</li>
          </ul>
        </div>

        {/* Dette tilbyr Tablaid */}
        <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-5">
          <h3 className="text-emerald-300 font-semibold mb-2">Dette tilbyr Tablaid</h3>
          <ul className="text-slate-300 text-sm space-y-1">
            <li>• Tidlige signaler om funksjon og etterlevelse.</li>
            <li>• Verktøy for forebyggingsarbeid og risikovurdering.</li>
            <li>• Strukturert innsikt som forbedrer beslutningsgrunnlaget.</li>
            <li>• Trygg deling av informasjon mellom aktørene.</li>
            <li>• Et lavterskel digitalt tilbud uten tunge integrasjoner.</li>
          </ul>
        </div>

        {/* Kommunens utfordringer */}
        <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-5">
          <h3 className="text-emerald-300 font-semibold mb-2">Kommunens utfordringer</h3>
          <ul className="text-slate-300 text-sm space-y-1">
            <li>• Funksjonsfall oppdages ofte sent – når tiltak er mer krevende.</li>
            <li>• Ujevn informasjonsflyt mellom brukere, pårørende og tjenester.</li>
            <li>• Økende press på hjemmetjenesten og forebyggende tjenester.</li>
            <li>• Krav om dokumentasjon, tidlig innsats og kvalitet i tjenesten.</li>
            <li>• Vansker med å følge opp mange brukere med begrensede ressurser.</li>
          </ul>
        </div>

        {/* Slik reduserer Tablaid utfordringer */}
        <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-5">
          <h3 className="text-emerald-300 font-semibold mb-2">Slik reduserer Tablaid utfordringer</h3>
          <ul className="text-slate-300 text-sm space-y-1">
            <li>• Tidlig identifisering gjør oppfølging mer målrettet.</li>
            <li>• Reduserer risiko for uforutsigbare hendelser.</li>
            <li>• Forbedrer informasjonsflyten mellom tjenester.</li>
            <li>• Bedrer legemiddelsikkerheten og etterlevelsen.</li>
            <li>• Krever minimal opplæring og teknisk tilrettelegging.</li>
          </ul>
        </div>

        {/* Kommunens gevinster */}
        <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-5">
          <h3 className="text-emerald-300 font-semibold mb-2">Kommunens gevinster</h3>
          <ul className="text-slate-300 text-sm space-y-1">
            <li>• Tidlig innsikt muliggjør forebyggende tiltak.</li>
            <li>• Bedre datagrunnlag for prioritering og planlegging.</li>
            <li>• Mer treffsikre tjenester og bedre ressursutnyttelse.</li>
            <li>• Økt trygghet for brukere og pårørende.</li>
            <li>• Dokumenterbare kvalitetsforbedringer.</li>
          </ul>
        </div>

        {/* Slik skaper Tablaid verdi */}
        <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-5">
          <h3 className="text-emerald-300 font-semibold mb-2">Slik skaper Tablaid verdi</h3>
          <ul className="text-slate-300 text-sm space-y-1">
            <li>• Underbygger kommunens forebyggingsstrategi.</li>
            <li>• Frigir tid i hjemmetjenesten og forebyggende tjenester.</li>
            <li>• Gir bedre beslutningsgrunnlag og saksflyt.</li>
            <li>• Øker trygghet og forutsigbarhet i tjenesteforløpet.</li>
            <li>• Styrker samarbeidet mellom kommune, fastlege og pårørende.</li>
          </ul>
        </div>

      </div>
    </section>
  );
}
