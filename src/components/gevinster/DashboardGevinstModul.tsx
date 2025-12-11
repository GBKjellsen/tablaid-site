// components/gevinster/DashboardGevinstModul.tsx

"use client";

import { useState } from "react";
import DashboardGevinstIntro from "./DashboardGevinstIntro";
import DashboardCostCalculator from "./DashboardCostCalculator";
import DashboardCostChart from "./DashboardCostChart";
import DashboardLEON from "./DashboardLEON";
import DashboardMedicationImpact from "./DashboardMedicationImpact";
import DashboardSavingsSummary from "./DashboardSavingsSummary";

export default function DashboardGevinstModul() {
  const [annualSavings, setAnnualSavings] = useState(450000);

  return (
    <div className="mt-16 space-y-16">
      <DashboardGevinstIntro />

      <DashboardCostCalculator onSavingsChange={setAnnualSavings} />

      <DashboardCostChart annualSavings={annualSavings} />

      <DashboardLEON />
      <DashboardMedicationImpact />

      <DashboardSavingsSummary savings={annualSavings} />
    </div>
  );
}
