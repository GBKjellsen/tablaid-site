export default function DashboardGevinster() {
  const gains = [
    "Redusert risiko for funksjonsfall ved tidlig oppdagelse",
    "Bedre prioritering i tjenestene",
    "Økt trygghet for innbyggere og pårørende",
    "Mer presis oppfølging og forebygging",
    "Bedre dialog på tvers av kommunen",
    "Bedre kvalitet på vurderinger og beslutningsgrunnlag",
  ];

  return (
    <div className="px-8 pb-12">
      <div className="bg-white/60 border border-slate-300 rounded-2xl p-6">

        <h3 className="text-lg font-semibold text-slate-700 mb-2">
          Kommunale gevinster (estimert)
        </h3>

        <ul className="mt-3 space-y-2 text-slate-700 text-sm">
          {gains.map(g => (
            <li key={g}>• {g}</li>
          ))}
        </ul>

      </div>
    </div>
  );
}
