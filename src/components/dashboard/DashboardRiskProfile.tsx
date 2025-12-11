"use client";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const data = [
  { name: "Lav risiko", value: 73, color: "#6ee7b7" },
  { name: "Moderat", value: 11, color: "#34d399" },
  { name: "Høy risiko", value: 3, color: "#ef4444" },
];

export default function DashboardRiskProfile() {
  return (
    <div className="px-8 pb-10">
      <div className="bg-white/60 border border-slate-300 rounded-2xl p-6">
        <h3 className="text-lg font-semibold text-slate-700 mb-4">
          Risikoprofil (uke 49)
        </h3>

        <div className="w-full h-60">
          <ResponsiveContainer>
            <PieChart>
              <Pie data={data} dataKey="value" innerRadius={40} outerRadius={80}>
                {data.map((entry, i) => (
                  <Cell key={i} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
