"use client";

export default function VpcInnbyggere() {
  return (
    <section className="mb-16 w-full">
      {/* Header */}
      <h2 className="text-2xl font-semibold text-slate-50 mb-6">
        Vårt verdiforslag:
      </h2>

      {/* GRID: 2 kolonner × 3 rader */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* Dine oppgaver */}
        <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-5">
          <h3 className="text-emerald-300 font-semibold mb-2">Dine oppgaver</h3>
          <ul className="text-slate-300 text-sm space-y-1">
            <li>• Huske daglige medisiner</li>
            <li>• Ta riktig dose til riktig tid</li>
            <li>• Opprettholde funksjon og trygghet i hverdagen</li>
            <li>• Forstå egen helseutvikling over tid</li>
            <li>• Unngå feilmedisinering og unødvendige legebesøk</li>
          </ul>
        </div>

        {/* Det vi tilbyr deg */}
        <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-5">
          <h3 className="text-emerald-300 font-semibold mb-2">Det vi tilbyr deg</h3>
          <ul className="text-slate-300 text-sm space-y-1.5">
            <li>• Legemiddelassistent med smarte påminnelser</li>
            <li>• Daglige funksjonssjekker gjennom Helsekompasset</li>
            <li>• SmartTags for enkel registrering av medisininntak</li>
            <li>• Månedlige sammendrag og refleksjon basert på ditt helsekompass</li>
            <li>• Mulighet for trygg deling av innsikt til pårørende</li>
          </ul>
        </div>

        {/* Dine utfordringer */}
        <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-5">
          <h3 className="text-emerald-300 font-semibold mb-2">Dine utfordringer</h3>
          <ul className="text-slate-300 text-sm space-y-1">
            <li>• Du glemmer doser eller mister oversikten</li>
            <li>• Du kan føle deg utrygg eller uinformert</li>
            <li>• Stress knyttet til helse og funksjon</li>
            <li>• Lite feedback på hvordan ting utvikler seg</li>
          </ul>
        </div>

        {/* Måter vi reduserer det som plager deg */}
        <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-5">
          <h3 className="text-emerald-300 font-semibold mb-2">
            Måter vi reduserer det som plager deg
          </h3>
          <ul className="text-slate-300 text-sm space-y-1">
            <li>• Reduserer stress og forglemmelser</li>
            <li>• Gir deg oversikt i en enkel digital logg</li>
            <li>• Skaper forutsigbarhet og trygghet i hverdagen</li>
            <li>• Viser deg tydelig utvikling over tid</li>
          </ul>
        </div>

        {/* Dine gevinster */}
        <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-5">
          <h3 className="text-emerald-300 font-semibold mb-2">Dine gevinster</h3>
          <ul className="text-slate-300 text-sm space-y-1">
            <li>• Opplevelse av mestring, kontroll og ro</li>
            <li>• Tidlige signaler som gir trygghet</li>
            <li>• Enklere dialog med pårørende og helsetjenesten</li>
            <li>• Bedre forståelse av egen helse</li>
          </ul>
        </div>

        {/* Slik gir vi deg verdi */}
        <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-5">
          <h3 className="text-emerald-300 font-semibold mb-2">Slik gir vi deg verdi</h3>
          <ul className="text-slate-300 text-sm space-y-1">
            <li>• Økt trygghet i hverdagen</li>
            <li>• Bedre oversikt over funksjon og medisiner</li>
            <li>• Klar kommunikasjon med pårørende og helsepersonell</li>
            <li>• Bedre innsikt som støtter egen mestring</li>
          </ul>
        </div>

      </div>
    </section>
  );
}
