import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950/90 mt-20">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Logo + beskrivelse */}
          <div>
            <img
              src="/tablaid-logo-negative.png"
              alt="Tablaid logo"
              className="h-8 w-auto mb-4"
            />
            <p className="text-sm text-slate-400 leading-relaxed">
              Digital helse- og legemiddelassistent utviklet i Norge.
            </p>
            <p className="text-sm text-slate-500 mt-3 leading-relaxed">
              Et samhandlingsverktøy for bedre beslutningsgrunnlag i
              hjemmetjenester, pårørendearbeid og fastlegeoppfølging.
            </p>
          </div>

          {/* Navigasjon */}
          <div>
            <h4 className="text-sm font-semibold text-slate-200 mb-3">Navigasjon</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><Link href="/" className="hover:text-emerald-300">Forside</Link></li>
              <li><Link href="/om" className="hover:text-emerald-300">Om Tablaid</Link></li>
              <li><Link href="/kontakt" className="hover:text-emerald-300">Kontakt</Link></li>
              <li><Link href="/en" className="hover:text-emerald-300">English summary</Link></li>
            </ul>
          </div>

          {/* Personvern */}
          <div>
            <h4 className="text-sm font-semibold text-slate-200 mb-3">Personvern</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><Link href="/personvern" className="hover:text-emerald-300">Personvernerklæring</Link></li>
              <li>GDPR • Normen • EU Data Act (coming)</li>
            </ul>
          </div>

          {/* Pilot & dialog */}
          <div>
            <h4 className="text-sm font-semibold text-slate-200 mb-3">Pilot & dialog</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><Link href="/pilot" className="hover:text-emerald-300">Kommunepilot 2026</Link></li>
              <li><Link href="/investor" className="hover:text-emerald-300">For investorer</Link></li>
              <Link href="/support" className="hover:text-emerald-300">
  Support Tablaid
</Link>

            </ul>
          </div>

        </div>

        {/* Copyright */}
        <div className="border-t border-slate-800 mt-12 pt-6 text-center">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} Tablaid AS. Alle rettigheter reservert.
          </p>
        </div>

      </div>
    </footer>
  );
}
