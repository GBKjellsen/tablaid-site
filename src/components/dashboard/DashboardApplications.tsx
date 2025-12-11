export default function DashboardApplications() {
  return (
    <div className="px-8 pb-10">
      <div className="bg-white/60 border border-slate-300 rounded-2xl p-6">

        <h3 className="text-lg font-semibold text-slate-700 mb-2">
          Søknader om omsorgstjenester (Tablaid-innsikt vedlagt)
        </h3>

        <p className="text-sm text-slate-600">
          Siste 90 dager: <span className="font-semibold">18 innsendinger</span>
        </p>

        <ul className="text-sm text-slate-600 mt-3 space-y-1">
          <li>• 6 fikk raskere saksbehandling</li>
          <li>• 4 fikk prioritet oppjustert</li>
          <li>• 7 fikk vedtak</li>
          <li>• 1 avslag (pga manglende kriterier)</li>
        </ul>

      </div>
    </div>
  );
}
