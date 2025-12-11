// components/gevinster/DashboardMedicationImpact.tsx

export default function DashboardMedicationImpact() {
  return (
    <div className="rounded-3xl bg-slate-900/80 border border-emerald-500/20 p-8 shadow-lg mt-10">
      <h3 className="text-xl font-semibold text-emerald-300">Legemiddelbruk og risiko</h3>

      <p className="text-slate-300 mt-4">
        Rundt 50 % av alle legemiddelbrukere tar ikke medisinen som forskrevet. 
        Dette øker risiko for funksjonsfall, fallhendelser og akutte innleggelser.
      </p>

      <ul className="text-slate-300 mt-4 space-y-2">
        <li>• Bedre etterlevelse stabiliserer helsetilstanden</li>
        <li>• Forebygger fall og forverring tidlig</li>
        <li>• Gir trygghet for innbygger og pårørende</li>
        <li>• Reduserer behov for akutte tjenester</li>
      </ul>
    </div>
  );
}
