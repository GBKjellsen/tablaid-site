"use client";

import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

/**
 * Endringsnivå:
 * - green  = Stabil situasjon
 * - yellow = Begynnende endring
 * - red    = Tydelig endring over tid
 *
 * Dette er et prioriteringssignal, ikke medisinsk risiko.
 */
const level: "green" | "yellow" | "red" = "red";

/**
 * Visualisering av endringsandel vs stabilitet
 * (indeks-basert, ikke prosentvis risiko)
 */
const pieData = [
  {
    name: "Endring",
    value: level === "red" ? 65 : level === "yellow" ? 35 : 15,
    color:
      level === "red"
        ? "#ef4444"
        : level === "yellow"
        ? "#facc15"
        : "#10b981",
  },
  {
    name: "Stabil",
    value: 100 - (level === "red" ? 65 : level === "yellow" ? 35 : 15),
    color: "#e5e7eb",
  },
];

export default function DashboardRiskProfile() {
  return (
    <div className="px-4 sm:px-8 pb-10">
      <div className="bg-white/60 border border-slate-300 rounded-2xl p-6">
        {/* Tittel */}
        <h3 className="text-lg font-semibold text-slate-700">
          Samlet endringsprofil
        </h3>

        {/* Forklaring */}
        <p className="mt-2 text-sm text-slate-500 max-w-xl">
          Viser graden av endring i selvrapportert funksjon og
          legemiddeladferd over tid. Profilen gir kommunen et tidlig
          prioriteringssignal og er ikke en medisinsk vurdering.
        </p>

        {/* SIRKEL */}
        <div className="relative w-full h-56 mt-6 flex items-center justify-center">
          <ResponsiveContainer width={200} height={200}>
            <PieChart>
              <Pie
                data={pieData}
                dataKey="value"
                innerRadius={65}
                outerRadius={85}
                startAngle={90}
                endAngle={-270}
                stroke="none"
              >
                {pieData.map((entry, i) => (
                  <Cell key={i} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>

          {/* MIDTTEKST */}
          <div className="absolute text-center pointer-events-none">
            <p className="text-xs uppercase tracking-wide text-slate-500">
              Endringsnivå
            </p>

            <p
              className={`mt-1 text-sm font-semibold ${
                level === "red"
                  ? "text-red-500"
                  : level === "yellow"
                  ? "text-yellow-500"
                  : "text-emerald-500"
              }`}
            >
              {level === "red" && "Tydelig endring"}
              {level === "yellow" && "Begynnende endring"}
              {level === "green" && "Stabil situasjon"}
            </p>
          </div>
        </div>

        {/* Forklaring av nivå */}
        <div className="mt-4 text-sm text-slate-500 max-w-xl">
          {level === "red" && (
            <>
              <span className="font-medium text-red-500">Rødt nivå:</span>{" "}
              Vedvarende endringer i både funksjon og legemiddeladferd over tid,
              som kan indikere økt behov for oppfølging eller dialog.
            </>
          )}

          {level === "yellow" && (
            <>
              <span className="font-medium text-yellow-500">Gult nivå:</span>{" "}
              Begynnende eller ujevne endringer som kan være relevante å følge
              med på.
            </>
          )}

          {level === "green" && (
            <>
              <span className="font-medium text-emerald-500">Grønt nivå:</span>{" "}
              Stabil situasjon uten tydelige endringer over tid.
            </>
          )}
        </div>

        {/* Juridisk / faglig presisering */}
        <p className="mt-3 text-xs text-slate-500 italic max-w-xl">
          Basert på kombinerte trender i selvrapportert funksjon og
          legemiddelbruk. Viser mønstre over tid, ikke individuell risiko
          eller diagnose.
        </p>
      </div>
    </div>
  );
}
