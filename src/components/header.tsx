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
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/tablaid-logo-negative.png"
            alt="Tablaid logo"
            width={130}
            height={40}
            className="h-8 w-auto object-contain"
            priority
          />
        </Link>

        {/* SPACER */}
        <div className="flex-1" />

        {/* DESKTOP MENU */}
        <div className="hidden lg:flex items-center gap-8 text-white text-sm">

  <Link href="/innbyggere" className="hover:text-emerald-300">
    Innbyggere
  </Link>

  <Link href="/parorende" className="hover:text-emerald-300">
    Pårørende
  </Link>

  <Link href="/kommuner" className="hover:text-emerald-300">
    Kommuner
  </Link>

  <Link href="/investor" className="hover:text-emerald-300">
    Investor
  </Link>

  <Link href="/om" className="hover:text-emerald-300">
    Om Tablaid
  </Link>

  <Link
    href="/kontakt"
    className="px-4 py-2 rounded-full bg-emerald-500 hover:bg-emerald-400 text-black font-semibold transition shadow-lg shadow-emerald-500/30"
  >
    Kontakt oss
  </Link>


          {/* ENGLISH FLAG */}
          <Link href="/en" className="hover:opacity-80">
            <Image
              src="/gb-flag.svg"
              alt="English"
              width={22}
              height={14}
              className="object-contain"
            />
          </Link>
          <Link href="/support" className="hover:text-emerald-300">
  Support Tablaid
</Link>

        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          className="lg:hidden flex items-center text-white focus:outline-none"
          onClick={() => setOpen(!open)}
        >
          <span className="text-2xl">{open ? "✕" : "☰"}</span>
        </button>
      </nav>

      {/* MOBILE MENU */}
      {open && (
        <div className="lg:hidden flex flex-col bg-[#0A0F1F] text-white px-6 py-4 space-y-4 border-t border-white/10 w-full">

          <Link href="/innbyggere" onClick={() => setOpen(false)} className="hover:text-emerald-300">
            For personer
          </Link>

          <Link href="/parorende" onClick={() => setOpen(false)} className="hover:text-emerald-300">
            Pårørende
          </Link>

          <Link href="/kommuner" onClick={() => setOpen(false)} className="hover:text-emerald-300">
            Kommuner
          </Link>

          <Link href="/kontakt" onClick={() => setOpen(false)} className="hover:text-emerald-300">
            Kontakt
          </Link>
          <Link href="/support" className="hover:text-emerald-300">
  Support Tablaid
</Link>

          <Link href="/en" onClick={() => setOpen(false)} className="hover:opacity-80">
            <Image
              src="/gb-flag.svg"
              alt="English"
              width={26}
              height={18}
              className="object-contain"
            />
          </Link>
        </div>
      )}
    </header>
  );
}
