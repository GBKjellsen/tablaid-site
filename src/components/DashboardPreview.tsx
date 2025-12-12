"use client";
import Image from "next/image";

export default function DashboardPreview() {
  return (
    <div className="w-full max-w-6xl mx-auto mt-10">

      {/* ------------------------------------------------------ */}
      {/* DASHBOARD TOP BAR */}
      {/* ------------------------------------------------------ */}
      <div className="rounded-t-3xl bg-slate-800/90 border border-slate-700 px-6 py-5 flex items-center justify-between shadow-xl shadow-black/40">

        <div className="flex items-center gap-4">
          {/* Kommunevåpen */}
          <div className="w-30 h-30">
            <Image 
              src="/Vinje_kommune.png" 
              alt="Vinje_kommune.png"
              width={200}
              height={200}
            />
          </div>

          <div>
            <h3 className="text-xl font-semibold text-emerald-300">
              Vinje kommune – Dashboard (Kommune valgt kun som eksempel)
            </h3>
            <p className="text-xs text-slate-400">
              Sist oppdatert: 12. desember 2025 kl. 08:13
            </p>
          </div>
        </div>

        {/* Dashboard Navigation */}
        <div className="hidden sm:flex gap-6 text-sm font-medium">
          <span className="text-slate-300 hover:text-emerald-300 cursor-pointer">
            Innsikt
          </span>
          <span className="text-slate-300 hover:text-emerald-300 cursor-pointer">
            Varsler
          </span>
          <span className="text-slate-300 hover:text-emerald-300 cursor-pointer">
            Brukere
          </span>
          <span className="text-slate-300 hover:text-emerald-300 cursor-pointer">
            Trender
          </span>
        </div>
      </div>


      {/* ------------------------------------------------------ */}
      {/* BEHOV FOR OPPFØLGING – PRIORITERT MODUL */}
      {/* ------------------------------------------------------ */}
      <div className="bg-slate-900/80 border-x border-b border-slate-700 p-8 rounded-b-3xl">

        <div className="rounded-2xl bg-emerald-900/10 border border-emerald-500/20 p-6 mb-10 shadow-lg">
          <h4 className="text-xl font-semibold text-emerald-300">
            Brukere med behov for oppfølging nå
          </h4>
          <p className="text-slate-300 text-sm mt-2">
            7 brukere viser tydelige endringer siste uke.
          </p>

          <ul className="mt-4 space-y-2 text-sm text-slate-200">
            <li>• 3 med fallende etterlevelse</li>
            <li>• 2 med endringer i energi/søvn</li>
            <li>• 1 med økt smerterapportering</li>
            <li>• 1 med gradvis kognitiv endring</li>
          </ul>

          <div className="mt-4 text-xs text-slate-500">
            Basert på algoritmisk risikomodell + innbyggernes egenrapporterte data
          </div>
        </div>


        {/* ------------------------------------------------------ */}
        {/* MAIN GRID – NY OG MER PROFESJONELL */}
        {/* ------------------------------------------------------ */}
        <div className="grid md:grid-cols-3 gap-8">

          {/* FUNKSJONSNIVÅ */}
          <DashboardCard
            title="Funksjonsnivå (CFS/ICOPE)"
            subtitle="Gjennomsnitt: CFS 3.2"
            details={[
              "Stabil utvikling siste 30 dager",
              "2 brukere med progresjon fra 3→4"
            ]}
            placeholder="Funksjonsgraf"
          />

          {/* ETTERLEVELSE */}
          <DashboardCard
            title="Etterlevelse"
            subtitle="84% gjennomsnitt"
            details={[
              "Nedgang hos 12 brukere",
              "Stabilt hos 61 brukere"
            ]}
            placeholder="Pill-adherence graf"
          />

          {/* TIDLIGE SIGNALER */}
          <DashboardCard
            title="Tidlige signaler"
            subtitle="Basert på energi, søvn, mobilitet"
            details={[
              "Energi: nedgang hos 6",
              "Søvn: nedgang hos 4",
              "Mobilitet: nedgang hos 3"
            ]}
            placeholder="Signal heatmap"
          />

          {/* BRUKEROVERSIKT */}
          <DashboardCard
            title="Brukeroversikt"
            subtitle="87 registrerte brukere"
            details={[
              "21 aktive pårørende",
              "3 kommunale teamtilganger"
            ]}
            placeholder="Antallsutvikling"
          />

          {/* VARSLER */}
          <DashboardCard
            title="Varsler"
            subtitle="Forebyggende indikatorer"
            details={[
              "4 store endringsmønstre siste uke",
              "2 anbefalte oppfølgingsvurderinger"
            ]}
            placeholder="Alert timeline"
          />

          {/* INNSIKTSLOGG */}
          <DashboardCard
            title="Innsiktslogg"
            subtitle="Samlet trendhistorikk"
            details={[
              "Anbefalte tiltak registrert per bruker",
              "Viser utvikling per intervensjon"
            ]}
            placeholder="Trend timeline"
          />

        </div>
      </div>
    </div>
  );
}


/* ------------------------------------------------------ */
/* GENERISK DASHBOARD-KORT – REUSABLE */
/* ------------------------------------------------------ */
type DashboardCardProps = {
  title: string;
  subtitle?: string;
  details?: string[];
  placeholder?: string;
};

function DashboardCard({ title, subtitle, details, placeholder }: DashboardCardProps) {

  return (
    <div className="rounded-2xl bg-slate-900/80 border border-slate-700 p-6 shadow-lg shadow-black/30">
      <h4 className="text-lg font-semibold text-emerald-300">{title}</h4>
      <p className="text-slate-300 mt-1 text-sm">{subtitle}</p>

      {details && (
  <ul className="text-sm text-slate-300 mt-3 space-y-1">
    {details.map((d, i) => (
      <li key={i}>• {d}</li>
    ))}
  </ul>
)}


      <div className="h-20 bg-slate-800/40 rounded-xl mt-4 flex items-center justify-center text-slate-500 text-xs">
        {placeholder}
      </div>
    </div>
  );
}
