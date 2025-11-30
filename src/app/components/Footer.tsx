"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0A0F1F] text-gray-300 border-t border-white/10 mt-20">
      <div className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-3 gap-12">

        {/* LEFT: Logo + text + SmartTags CTA */}
        <div>
          <Image
            src="/tablaid-symbol.png"
            alt="Tablaid symbol"
            width={55}
            height={55}
            className="mb-5"
          />

          <p className="text-sm text-gray-400 leading-relaxed mb-6 max-w-xs">
            En digital helse- og legemiddelassistent som gir trygghet, oversikt og bedre samspill mellom brukere, pårørende og kommunale tjenester.
          </p>

          <Link
            href="/smarttag"
            className="inline-block px-5 py-2.5 bg-green-600 hover:bg-green-500 text-black font-semibold rounded-full text-sm transition"
          >
            Bestill SmartTags
          </Link>
        </div>

        {/* RIGHT GRID: two columns of links + contact info */}
        <div className="md:col-span-2 grid grid-cols-2 gap-12">

          {/* Column 1 */}
          <div>
            <h3 className="font-semibold text-white mb-4">For brukere</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/bruker" className="hover:underline">Bruker</Link></li>
              <li><Link href="/parorende" className="hover:underline">Pårørende</Link></li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="font-semibold text-white mb-4">For kommuner</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/kommuner" className="hover:underline">Kommunepilot</Link></li>
              <li><Link href="/investor" className="hover:underline">Investorinfo</Link></li>
              <li><Link href="/om" className="hover:underline">Om oss</Link></li>
              <li><Link href="/kontakt" className="hover:underline">Kontakt oss</Link></li>
            </ul>
          </div>

          {/* CONTACT — spans across both columns */}
          <div className="col-span-2 border-t border-white/10 pt-6">
            <div className="text-sm text-gray-400 space-y-1">
              <p>
                E-post:{" "}
                <a href="mailto:post@tablaid.no" className="hover:underline">
                  post@tablaid.no
                </a>
              </p>
              <p>Daglig leder: Gaute Birkeland Kjellsen</p>
              <p>Telefon: 913 43 663</p>
            </div>
          </div>

        </div>
      </div>

      {/* COPYRIGHT */}
      <p className="text-center text-xs text-gray-600 pb-8">
        © {new Date().getFullYear()} Tablaid AS — alle rettigheter forbeholdt.
      </p>
    </footer>
  );
}
