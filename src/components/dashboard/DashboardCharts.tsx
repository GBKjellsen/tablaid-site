"use client";
import {
  LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid
} from "recharts";

const functionData = [
  { month: "Aug", score: 3.1 },
  { month: "Sep", score: 3.2 },
  { month: "Oct", score: 3.2 },
  { month: "Nov", score: 3.3 },
  { month: "Dec", score: 3.2 },
];

const adherenceData = [
  { month: "Aug", pct: 82 },
  { month: "Sep", pct: 85 },
  { month: "Oct", pct: 88 },
  { month: "Nov", pct: 86 },
  { month: "Dec", pct: 84 },
];

export default function DashboardCharts() {
  return (
    <div className="grid md:grid-cols-2 gap-8 px-8 pb-10">

      {/* Funksjonsnivå */}
      <div className="bg-white/60 border border-slate-300 rounded-2xl p-6">
       <h3 className="text-lg font-semibold text-slate-700">
  Funksjonsutvikling (selvrapportert)
</h3>
<p className="text-sm text-slate-500 mb-3 max-w-sm">
  Viser utvikling i brukerens egenrapporterte funksjon over tid.
  Kartleggingen er forankret i anerkjente funksjons- og
  skrøpelighetsrammeverk brukt i helsetjenesten, og gir et tidlig
  signal om endringer som kan være relevante for oppfølging.
</p>


        <ResponsiveContainer width="100%" height={240}>
          <LineChart data={functionData}>
            <CartesianGrid stroke="#ddd" />
            <XAxis dataKey="month" />
            <YAxis domain={[3, 4]} />
            <Tooltip />
            <Line type="monotone" dataKey="score" stroke="#10b981" strokeWidth={3} />
          </LineChart>
        </ResponsiveContainer>
        <p className="text-xs text-slate-500 mt-3 italic">
  Inspirert av Clinical Frailty Scale (Rockwood et al., Dalhousie University),
  tilpasset selvrapportert bruk.
</p>
      </div>


      {/* Etterlevelse */}
      <div className="bg-white/60 border border-slate-300 rounded-2xl p-6">
        <h3 className="text-lg font-semibold text-slate-700 mb-4">
          Etterlevelse siste 6 mnd
        </h3>

        <ResponsiveContainer width="100%" height={240}>
          <LineChart data={adherenceData}>
            <CartesianGrid stroke="#ddd" />
            <XAxis dataKey="month" />
            <YAxis domain={[70, 100]} />
            <Tooltip />
            <Line type="monotone" dataKey="pct" stroke="#059669" strokeWidth={3} />
          </LineChart>
        </ResponsiveContainer>
      </div>

    </div>
  );
}
