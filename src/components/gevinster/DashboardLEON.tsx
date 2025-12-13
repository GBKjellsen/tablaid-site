// components/gevinster/DashboardLEON.tsx

export default function DashboardLEON() {
  return (
    <div className="rounded-3xl bg-slate-900/80 border border-emerald-500/20 p-8 shadow-lg mt-10">
      <h3 className="text-xl font-semibold text-emerald-300">LEON-effekt – tidligere og billigere tiltak</h3>

      <p className="text-slate-300 mt-4">
        Tablaid ligger på et nivå tidligere enn tradisjonell velferdsteknologi som 
        medisindispensere. Løsningen gir signaler lenge før behovet når et kostbart 
        omsorgsnivå.
      </p>

      <ul className="text-slate-300 mt-4 space-y-2">
        <li> Tidlig oversikt over funksjonsendringer</li>
        <li> Færre ekstra hjemmebesøk</li>
        <li> Bedre samspill mellom kommune, innbygger og pårørende</li>
        <li> Bedre prioritering av knappe ressurser</li>
        <li> Lavere belastning på hjemmetjenesten</li>
      </ul>
    </div>
  );
}
