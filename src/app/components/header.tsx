"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#0A0F1F]/95 backdrop-blur border-b border-white/10 w-full">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3 w-full">

        {/* LOGO */}
        <Link href="/" className="flex items-center">
          <Image
            src="/tablaid-logo-negative.png"
            alt="Tablaid logo"
            width={300}
            height={100}
            className="object-contain h-10 w-auto"
            priority
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

        {/* MOBILE MENU TOGGLE BUTTON */}
        <button
          className="lg:hidden flex items-center text-white focus:outline-none"
          onClick={() => setOpen(!open)}
        >
          <span className="text-2xl">{open ? "✕" : "☰"}</span>
        </button>
      </nav>

      {/* MOBILE MENU (NEW VERSION) */}
      {open && (
        <div className="lg:hidden flex flex-col bg-[#0A0F1F] text-white px-6 py-4 space-y-4 border-t border-white/10 w-full">
          <Link href="/bruker" onClick={() => setOpen(false)}>Bruker</Link>
          <Link href="/parorende" onClick={() => setOpen(false)}>Pårørende</Link>
          <Link href="/kommuner" onClick={() => setOpen(false)}>Kommuner</Link>
          <Link href="/investor" onClick={() => setOpen(false)}>Investor</Link>
          <Link href="/om" onClick={() => setOpen(false)}>Om oss</Link>

          <Link
            href="/kontakt"
            onClick={() => setOpen(false)}
            className="block mt-2 px-4 py-2 rounded-full bg-green-600 hover:bg-green-500 text-black text-center font-semibold"
          >
            Kontakt oss
          </Link>
        </div>
      )}
    </header>
  );
}
