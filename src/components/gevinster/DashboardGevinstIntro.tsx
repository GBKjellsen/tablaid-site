// components/gevinster/DashboardGevinstIntro.tsx

export default function DashboardGevinstIntro() {
  return (
    <div className="rounded-3xl bg-slate-900/80 border border-emerald-500/20 p-8 shadow-lg">
      <h2 className="text-2xl font-semibold text-emerald-300">Potensielle gevinster for kommunen</h2>

      <p className="text-slate-300 mt-4 leading-relaxed">
        Gevinstene nedenfor er basert på realistiske, nasjonale enhetskostnader 
        (KS, Helsedirektoratet, SSB) og prinsippet om tidlig innsats og LEON – 
        laveste effektive omsorgsnivå.
      </p>

      <p className="text-slate-400 text-sm mt-3 italic">
        Tallene er estimater og gir et bilde av hvilken økonomisk og tjenestemessig 
        gevinst tidlig innsikt kan bidra til i kommunen.
      </p>
    </div>
  );
}
