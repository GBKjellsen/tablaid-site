// components/gevinster/DashboardSavingsSummary.tsx

export default function DashboardSavingsSummary({ savings }: { savings: number }) {
  return (
    <div className="rounded-3xl bg-emerald-500/10 border border-emerald-400/20 p-8 shadow-lg mt-10">
      <h3 className="text-xl font-semibold text-emerald-300">Oppsummering av potensiell gevinst</h3>

      <p className="text-slate-300 mt-4">
        Basert på dagens innsatsnivå kan kommunen oppnå følgende kostnadsreduksjon:
      </p>

      <div className="text-5xl font-bold text-emerald-300 mt-6">
        {savings.toLocaleString("no-NO")} kr
      </div>

      <p className="text-slate-400 text-sm mt-3 italic">
        Estimatet avhenger av implementering, innsats, og antall innbyggere i innsiktssporet.
      </p>
    </div>
  );
}
