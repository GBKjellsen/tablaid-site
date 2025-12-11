// components/gevinster/DashboardCostCalculator.tsx

"use client";
import { useState, useEffect } from "react";

export default function DashboardCostCalculator({ onSavingsChange }: { onSavingsChange: (v: number) => void }) {
  const [users, setUsers] = useState(25);
  const [visits, setVisits] = useState(2);
  const [duration, setDuration] = useState(90);
  const [hourlyCost, setHourlyCost] = useState(700);

  // Beregninger
  const hoursPerVisit = duration / 60;
  const savedVisitsYear = users * visits * 12;
  const savedHours = savedVisitsYear * hoursPerVisit;
  const savedCost = savedHours * hourlyCost;

  // Send tall opp til wrapper
  useEffect(() => {
    onSavingsChange(savedCost);
  }, [savedCost, onSavingsChange]);

  return (
    <div className="rounded-3xl bg-slate-900/80 border border-emerald-500/20 p-8 shadow-lg mt-10">
      <h3 className="text-xl font-semibold text-emerald-300">Kostnadsberegning – unngåtte hjemmebesøk</h3>

      <p className="text-slate-300 mt-3 mb-6">
        Basert på standardparametere for hjemmebaserte tjenester.
      </p>

      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <label className="input-label">Innbyggere i innsiktssporet</label>
          <input className="input" type="number" value={users} onChange={e => setUsers(+e.target.value)} />
        </div>

        <div>
          <label className="input-label">Unødvendige besøk per måned</label>
          <input className="input" type="number" value={visits} onChange={e => setVisits(+e.target.value)} />
        </div>

        <div>
          <label className="input-label">Varighet per besøk (minutter)</label>
          <input className="input" type="number" value={duration} onChange={e => setDuration(+e.target.value)} />
        </div>

        <div>
          <label className="input-label">Kostnad per time (kr)</label>
          <input className="input" type="number" value={hourlyCost} onChange={e => setHourlyCost(+e.target.value)} />
        </div>
      </div>

      <div className="mt-8 rounded-2xl bg-slate-800/60 border border-slate-700 p-6 text-center">
        <p className="text-slate-300">Årlig spart tid</p>
        <div className="text-3xl font-bold text-emerald-300">{savedHours.toFixed(1)} timer</div>

        <p className="text-slate-300 mt-4">Årlig spart kostnad</p>
        <div className="text-3xl font-bold text-emerald-300">
          {savedCost.toLocaleString("no-NO")} kr
        </div>
      </div>
    </div>
  );
}
