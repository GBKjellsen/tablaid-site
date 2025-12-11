import Image from "next/image";

export default function DashboardHeader() {
  return (
    <div className="border-b border-slate-300 px-8 py-6 flex flex-col md:flex-row md:items-center md:justify-between bg-slate-100/60 rounded-t-3xl">
      
      <div className="flex items-center gap-4">
        <Image 
          src="/Vinje_kommune.png"
          width={150}
          height={150}
          alt="Vinje kommune"
        />
        <div>
          <h1 className="text-2xl font-semibold text-slate-800">
            Vinje kommune – Dashboard (Beta)
          </h1>
          <p className="text-xs text-slate-500">
            Sist oppdatert: 12. desember 2025 kl. 08:13
          </p>
        </div>
      </div>

      <div className="flex gap-6 mt-4 md:mt-0 text-sm text-slate-700 font-medium">
        <button className="hover:text-emerald-600">Innsikt</button>
        <button className="hover:text-emerald-600">Varsler</button>
        <button className="hover:text-emerald-600">Brukere</button>
        <button className="hover:text-emerald-600">Trender</button>
        <button className="hover:text-emerald-600">Gevinster</button>
        <button className="hover:text-emerald-600">Søknader</button>
      </div>

    </div>
  );
}
