"use client";

export default function VpcParorende() {
  return (
    <section className="mb-16 w-full">
      {/* Header */}
      <h2 className="text-2xl font-semibold text-slate-50 mb-6">
        Verdiforslag – Pårørende
      </h2>

      {/* GRID: 2 kolonner × 3 rader */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* Customer Jobs */}
        <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-5">
          <h3 className="text-emerald-300 font-semibold mb-2">Dine oppgaver</h3>
          <ul className="text-slate-300 text-sm space-y-1">
            <li> Du ønsker trygghet for at den du bryr deg om tar medisiner som avtalt.</li>
            <li> Du ønsker innsikt i hvordan helse og funksjon utvikler seg over tid.</li>
            <li> Du vil støtte uten å virke kontrollerende.</li>
            <li> Du prøver å balansere omsorg med jobb, familie og egne behov.</li>
          </ul>
        </div>

        {/* Produkte & tjenester */}
        <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-5">
          <h3 className="text-emerald-300 font-semibold mb-2">Det vi tilbyr deg</h3>
          <ul className="text-slate-300 text-sm space-y-1">
            <li> Innsikt fra medisinlogg og Helsekompasset.</li>
            <li> Tidlige signaler basert på funksjonskartlegging</li>
            <li> Oversiktlig dashbord for pårørende.</li>
            <li> Månedstrender som gjør endringer lettere å forstå.</li>
            <li> Trygg, samtykkebasert deling — uten overvåkning.</li>
          </ul>
        </div>

        {/* Pains */}
        <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-5">
          <h3 className="text-emerald-300 font-semibold mb-2">Dine utfordringer</h3>
          <ul className="text-slate-300 text-sm space-y-1">
            <li> Du bekymrer deg for om medisiner blir tatt.</li>
            <li> Du får ofte informasjon for sent.</li>
            <li> Funksjonsfall kan komme brått og uforberedt.</li>
            <li> Du føler ansvar alene og savner støtte fra tjenestene.</li>
          </ul>
        </div>

        {/* Pain relievers */}
        <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-5">
          <h3 className="text-emerald-300 font-semibold mb-2">Slik reduserer vi det som plager deg</h3>
          <ul className="text-slate-300 text-sm space-y-1">
            <li> Du får klart svar på om medisiner er tatt.</li>
            <li> Du varsles om tidlige endringer som trenger oppmerksomhet.</li>
            <li> Du får hjelp til å tolke og forstå funksjonsfall.</li>
            <li> Du reduserer risikoen for brå hendelser og kriser.</li>
          </ul>
        </div>

        {/* Gains */}
        <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-5">
          <h3 className="text-emerald-300 font-semibold mb-2">Dine gevinster</h3>
          <ul className="text-slate-300 text-sm space-y-1">
            <li> Du får roligere hverdag og bedre oversikt.</li>
            <li> Du kan støtte mer systematisk — uten å være pågående.</li>
            <li> Du får et felles språk med helsepersonell.</li>
            <li> Du kjenner deg tryggere på at utviklingen følges opp.</li>
          </ul>
        </div>

        {/* Gain creators */}
        <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-5">
          <h3 className="text-emerald-300 font-semibold mb-2">Slik gir vi deg verdi</h3>
          <ul className="text-slate-300 text-sm space-y-1">
            <li> Du får trygghet basert på data, ikke bare magefølelse.</li>
            <li> Du kan bidra tidligere — med større treffsikkerhet.</li>
            <li> Bedre samarbeid med tjenester og fastlege.</li>
            <li> Mer tid til å være pårørende — ikke koordinator.</li>
          </ul>
        </div>

      </div>
    </section>
  );
}
