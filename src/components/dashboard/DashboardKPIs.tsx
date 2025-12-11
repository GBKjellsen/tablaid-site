export default function DashboardKPIs() {
  const cards = [
    { title: "Funksjonsnivå 75-90 år (CFS)", value: "3.2", desc: "Stabil siste 30 dager" },
    { title: "Medisinsk etterlevelse", value: "84%", desc: "Nedgang hos 12 brukere" },
    { title: "Tidlige signaler", value: "13", desc: "Brukere med endringer" },
    { title: "Risikoprofil", value: "3 høyrisiko", desc: "Basert på trender" },
    { title: "Varsler", value: "4", desc: "Store endringer siste uke" },
    { title: "Behov for oppfølging", value: "7", desc: "Kritiske brukere" },
  ];

  return (
    <div className="grid md:grid-cols-3 gap-6 px-8 py-10">
      {cards.map((c) => (
        <div
          key={c.title}
          className="bg-white/60 border border-slate-300 rounded-2xl p-6 shadow-sm"
        >
          <h3 className="text-slate-600 font-medium">{c.title}</h3>
          <p className="text-3xl font-bold text-emerald-600 mt-1">{c.value}</p>
          <p className="text-sm text-slate-500">{c.desc}</p>
        </div>
      ))}
    </div>
  );
}
