"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#0A0F1F]/90 backdrop-blur border-b border-white/10">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
        
        {/* LOGO */}
        <Link href="/" className="flex items-center">
          <Image
            src="/tablaid-logo-negative.png"
            alt="Tablaid logo"
            width={170}
            height={50}
            priority
            className="object-contain"
          />
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden lg:flex items-center gap-8 text-white text-sm">
          <Link href="/bruker">Bruker</Link>
          <Link href="/parorende">Pårørende</Link>
          <Link href="/kommuner">Kommuner</Link>
          <Link href="/investor">Investor</Link>
          <Link href="/om">Om oss</Link>

          <Link
            href="/kontakt"
            className="px-4 py-2 rounded-full bg-green-600 hover:bg-green-500 text-black font-semibold transition"
          >
            Kontakt oss
          </Link>
        </div>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden border border-white/20 rounded-md w-10 h-10 flex items-center justify-center text-white"
        >
          ☰
        </button>
      </nav>

      {/* MOBILE DROPDOWN */}
      {open && (
        <div className="lg:hidden bg-[#0A0F1F] text-white px-6 pb-4 space-y-4 border-t border-white/10">
          <Link href="/bruker" onClick={() => setOpen(false)}>Bruker</Link>
          <Link href="/parorende" onClick={() => setOpen(false)}>Pårørende</Link>
          <Link href="/kommuner" onClick={() => setOpen(false)}>Kommuner</Link>
          <Link href="/investor" onClick={() => setOpen(false)}>Investor</Link>
          <Link href="/om" onClick={() => setOpen(false)}>Om oss</Link>

          <Link
            href="/kontakt"
            onClick={() => setOpen(false)}
            className="block mt-2 px-4 py-2 rounded-full bg-green-600 text-black text-center font-semibold"
          >
            Kontakt oss
          </Link>
        </div>
      )}
    </header>
  );
}
