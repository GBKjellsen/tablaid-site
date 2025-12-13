"use client";

export default function VpcKommuner() {
  return (
    <section className="mb-16 w-full">

      {/* Header */}
      <h2 className="text-2xl font-semibold text-slate-50 mb-6">
        Kommunens verdiforslag – strategisk oversikt
      </h2>

      {/* GRID: 2 kolonner × 3 rader */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* Kommunens oppgaver */}
        <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-5">
          <h3 className="text-emerald-300 font-semibold mb-2">Kommunens oppgaver</h3>
          <ul className="text-slate-300 text-sm space-y-1">
            <li> Forebygge og identifisere funksjonsfall tidlig, før tjenestebehovet øker.</li>
            <li> Ivareta legemiddelsikkerhet og riktig oppfølging av etterlevelse.</li>
            <li> Prioritere ressurser i møte med økende tjenestepress og færre ansatte.</li>
            <li> Understøtte selvstendighet og trygghet hjemme lengst mulig.</li>
            <li> Levere tjenester i tråd med nasjonale føringer for tidlig innsats og helhetlige pasientforløp.</li>
          </ul>
        </div>

        {/* Dette tilbyr Tablaid */}
        <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-5">
          <h3 className="text-emerald-300 font-semibold mb-2">Dette tilbyr Tablaid</h3>
          <ul className="text-slate-300 text-sm space-y-1">
            <li> Kontinuerlige signaler om funksjon, etterlevelse og endringer over tid.</li>
            <li> Rammeverkbasert oppfølging inspirert av WHO ICOPE og CFS for trygg funksjonskartlegging.</li>
            <li> Innsiktsdashbord for samtykkebaserte trenddata og nøkkelfunn.</li>
            <li> Verktøy som styrker samhandling mellom innbygger, pårørende og kommunen.</li>
            <li> Lavterskel implementering uten integrasjoner eller IT-prosjekter.</li>
          </ul>
        </div>

        {/* Kommunens utfordringer */}
        <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-5">
          <h3 className="text-emerald-300 font-semibold mb-2">Kommunens utfordringer</h3>
          <ul className="text-slate-300 text-sm space-y-1">
            <li> Funksjonsfall og helseendringer oppdages ofte sent, når tiltak er mer krevende.</li>
            <li> Ulik og fragmentert informasjonsflyt mellom tjenester, fastlege og pårørende.</li>
            <li> Økende press på hjemmetjeneste og forebyggende tjenester.</li>
            <li> Tidkrevende kartlegginger som må gjentas, og manglende kontinuitet mellom dem.</li>
            <li> Begrenset kapasitet til å følge opp store grupper med risiko for forverring.</li>
          </ul>
        </div>

        {/* Slik reduserer Tablaid utfordringer */}
        <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-5">
          <h3 className="text-emerald-300 font-semibold mb-2">Slik reduserer Tablaid disse utfordringene</h3>
          <ul className="text-slate-300 text-sm space-y-1">
            <li> Tidlig identifisering gir bedre målretting og mer effektive tiltak.</li>
            <li> Reduserer risiko for hendelser knyttet til funksjonsfall og legemiddelbruk.</li>
            <li> Samler innsikt i ett felles språk som kan deles trygt etter samtykke.</li>
            <li> Forbedrer beslutninger gjennom kontinuerlige trenddata fremfor punktmålinger.</li>
            <li> Krever minimalt med opplæring og ingen endringer i eksisterende IT-systemer.</li>
          </ul>
        </div>

        {/* Kommunens gevinster */}
        <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-5">
          <h3 className="text-emerald-300 font-semibold mb-2">Kommunens gevinster</h3>
          <ul className="text-slate-300 text-sm space-y-1">
            <li> Tidlig innsats muliggjør forebygging og bevarer funksjon lenger.</li>
            <li> Bedre prioriteringsgrunnlag for riktige tjenester til riktig tid.</li>
            <li> Frigjør tid i hjemmetjenesten og forebyggende tjenester.</li>
            <li> Økt trygghet for innbyggere, tjenesten og pårørende.</li>
            <li> Bygger kapasitet og robusthet i en sektor med økende press.</li>
          </ul>
        </div>

        {/* Slik skaper Tablaid verdi */}
        <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-5">
          <h3 className="text-emerald-300 font-semibold mb-2">Slik skaper Tablaid økt samfunnsverdi</h3>
          <ul className="text-slate-300 text-sm space-y-1">
            <li> Underbygger kommunens strategier for tidlig innsats og forebygging.</li>
            <li> Styrker samarbeidet mellom innbygger, pårørende, fastlege og kommunen.</li>
            <li> Bidrar til bedre pasientsikkerhet og reduserer uønsket variasjon.</li>
            <li> Gir kommunen et verktøy for kunnskapsbasert styring og planlegging.</li>
            <li> Kombinerer funksjonsdata, etterlevelse og legemiddeloppfølging i én strukturert løsning.</li>
          </ul>
        </div>

      </div>
    </section>
  );
}
