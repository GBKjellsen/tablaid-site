"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-[#0A0F1F]/95 backdrop-blur border-b border-white/10">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">

        {/* LOGO */}
        <Link href="/" className="flex items-center">
          <Image
            src="/tablaid-logo-negative.png"
            alt="Tablaid logo"
            width={150}
            height={40}
            priority
          />
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden lg:flex items-center gap-8 text-sm">
          <Link href="/innbyggere" className="hover:text-emerald-300">Innbyggere</Link>
          <Link href="/parorende" className="hover:text-emerald-300">Pårørende</Link>
          <Link href="/kommuner" className="hover:text-emerald-300">Kommuner</Link>
          <Link href="/investor" className="hover:text-emerald-300">Investor</Link>
          <Link href="/om" className="hover:text-emerald-300">Om Tablaid</Link>
          <Link href="/kontakt" className="button-primary">
  Kontakt oss
</Link>


          <Link href="/support" className="hover:text-emerald-300">
            Support Tablaid
          </Link>

          {/* ENGLISH FLAG */}
          <Link href="/en">
            <Image
              src="/gb-flag.svg"
              alt="English"
              width={24}
              height={16}
              className="opacity-80 hover:opacity-100"
            />
          </Link>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          className="lg:hidden text-white text-2xl"
          onClick={() => setOpen(!open)}
        >
          {open ? "✕" : "☰"}
        </button>
      </nav>

      {/* MOBILE MENU */}
      {open && (
        <div className="lg:hidden flex flex-col bg-[#0A0F1F]/95 backdrop-blur border-t border-white/10 px-6 py-5 space-y-4 text-white text-sm">
          <Link href="/innbyggere" onClick={() => setOpen(false)}>Innbyggere</Link>
          <Link href="/parorende" onClick={() => setOpen(false)}>Pårørende</Link>
          <Link href="/kommuner" onClick={() => setOpen(false)}>Kommuner</Link>
          <Link href="/investor" onClick={() => setOpen(false)}>Investor</Link>
          <Link href="/om" onClick={() => setOpen(false)}>Om Tablaid</Link>
          <Link href="/support" onClick={() => setOpen(false)}>Support Tablaid</Link>
          <Link href="/en" onClick={() => setOpen(false)}>
            <Image
              src="/gb-flag.svg"
              width={26}
              height={18}
              alt="English"
            />
          </Link>
        </div>
      )}
    </header>
  );
}
