"use client";

import PageLayout from "@/components/layout/PageLayout";
import DashboardWrapper from "@/components/dashboard/DashboardWrapper";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import DashboardKPIs from "@/components/dashboard/DashboardKPIs";
import DashboardCharts from "@/components/dashboard/DashboardCharts";
import DashboardRiskProfile from "@/components/dashboard/DashboardRiskProfile";
import DashboardApplications from "@/components/dashboard/DashboardApplications";
import DashboardGevinster from "@/components/dashboard/DashboardGevinster";
import Link from "next/link";

// Gevinstmodul (ny mappe)
import DashboardGevinstModul from "@/components/gevinster/DashboardGevinstModul";

export default function KommuneLoginPage() {
  return (
    <PageLayout>

      {/* HERO SECTION */}
      <section className="pt-24 pb-16 text-center max-w-3xl mx-auto px-6">
        <h1 className="text-3xl sm:text-4xl font-semibold text-emerald-300">
          Tablaid Kommuneportal
        </h1>

        <p className="text-slate-300 mt-4 leading-relaxed">
          Dette er en forhåndsvisning av Tablaid sin kommende kommuneportal.
          Dashboardet viser hvordan kommunen kan få tilgang til aggregert innsikt,
          tidlige signaler og estimerte gevinster basert på samtykkede data.
        </p>

        <p className="text-slate-400 text-sm italic mt-2">
          Portal åpnes gradvis i forbindelse med piloteringen i 2026.
        </p>
      </section>

      {/* DASHBOARD – ENTERPRISE INSIGHTS */}
      <DashboardWrapper>
        <DashboardHeader />
        <DashboardKPIs />
        <DashboardCharts />
        <DashboardRiskProfile />
        <DashboardApplications />
        <DashboardGevinster />
      </DashboardWrapper>
{/* ------------------------------------------------------- */}
      {/* 🔙 TILBAKE TIL TABLAID – AVSLUTTENDE HANDLING           */}
      {/* ------------------------------------------------------- */}

      <div className="mt-24 mb-20 text-center">
        <Link
          href="/kommuner"
          className="inline-flex items-center gap-2 text-m font-medium text-slate-400 hover:text-slate-200 transition"
        >
          ← Tilbake til Tablaid
        </Link>
      </div> 
      {/* ------------------------------------------------------- */}
      {/* GEVINSTMODUL – KOSTNADSREDUKSJON / LEON / ETTERLEVELSE */}
      {/* ------------------------------------------------------- */}

      <section className="mt-20 px-6 max-w-5xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-semibold text-emerald-300 text-center mb-8">
          Økonomiske og tjenestemessige gevinster
        </h2>

        <p className="text-slate-300 text-center max-w-2xl mx-auto mb-10">
          Under finner dere en full beregningsmodul basert på nasjonale enhetskostnader
          (KS, Helsedirektoratet, SSB). Dette gir et realistisk bilde av hvordan tidlig innsikt
          kan frigjøre tid, redusere akutte hendelser og bidra til smartere ressursbruk.
        </p>

        <DashboardGevinstModul />
      </section>

     

    </PageLayout>
  );
}
