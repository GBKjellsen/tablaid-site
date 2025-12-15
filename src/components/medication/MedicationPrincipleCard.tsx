type MedicationPrinciple = {
  id: number;
  title: string;
  shortText: string;
  longText: string;
  sources: string[];
  copyright: string;
  category: string;
};

export default function MedicationPrincipleCard({
  principle,
}: {
  principle: MedicationPrinciple;
}) {
  return (
    <div className="card flex flex-col justify-between">
      
      {/* Tittel */}
      <h3 className="text-emerald-300 font-semibold text-sm">
        {principle.title}
      </h3>

      {/* Kort tekst */}
      <p className="mt-2 text-sm text-[var(--text-secondary)]">
        {principle.shortText}
      </p>

      {/* Lang forklaring */}
      <p className="mt-3 text-sm text-slate-300 leading-relaxed">
        {principle.longText}
      </p>

      {/* Kilder */}
      <ul className="mt-4 text-xs text-slate-400 space-y-1">
        {principle.sources.map((src, i) => (
          <li key={i}> {src}</li>
        ))}
      </ul>

      {/* Copyright */}
      <p className="mt-3 text-xs text-slate-500">
        {principle.copyright}
      </p>
    </div>
  );
}
