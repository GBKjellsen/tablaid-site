// components/gevinster/DashboardCostChart.tsx

"use client";

import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

export default function DashboardCostChart({ annualSavings }: { annualSavings: number }) {
  const data = Array.from({ length: 12 }).map((_, i) => ({
    month: `M${i + 1}`,
    saved: (annualSavings / 12) * (i + 1),
  }));

  return (
    <div className="rounded-3xl bg-slate-900/80 border border-emerald-500/20 p-8 shadow-lg mt-10">
      <h3 className="text-xl font-semibold text-emerald-300 mb-6">
        Gevinstutvikling (kumulativt gjennom året)
      </h3>

      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <Line type="monotone" dataKey="saved" stroke="#34d399" strokeWidth={3} />
            <XAxis dataKey="month" stroke="#94a3b8" />
            <YAxis stroke="#94a3b8" tickFormatter={(v) => v.toLocaleString("no-NO")} />
            <Tooltip formatter={(v) => `${v.toLocaleString("no-NO")} kr`} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
