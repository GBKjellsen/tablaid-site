"use client";

import React from "react";
import Link from "next/link";

export default function MobileNav() {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="sm:hidden">
     {/* Hamburger Button */}
<button
  onClick={() => setOpen(!open)}
  aria-label="Åpne meny"
  className="
    text-slate-200 hover:text-emerald-300 
    focus:outline-none 
    bg-transparent      /* <-- Hindrer grå bakgrunn på Safari */
    border-0            /* <-- Fjern default knappestil */
    p-0                 /* <-- Unngå padding som kan trigge highlight */
    appearance-none     /* <-- iOS fix */
  "
>
  <svg
    className="h-6 w-6"
    fill="none"          /* <-- kritisk for å unngå fyll */
    stroke="currentColor"
    strokeWidth={2}
    viewBox="0 0 24 24"
    style={{ background: "transparent" }} /* <-- ekstra forsikring */
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d={
        open
          ? "M6 18L18 6M6 6l12 12"  // X icon
          : "M4 6h16M4 12h16M4 18h16" // hamburger
      }
    />
  </svg>
</button>

      {/* Mobile Menu Panel */}
      {open && (
        <div className="absolute left-0 top-full w-full bg-slate-950 border-b border-slate-800 shadow-xl">
          <nav className="flex flex-col px-6 py-4 text-sm text-slate-200 space-y-3">
            <Link href="/#for-brukere" onClick={() => setOpen(false)} className="hover:text-emerald-300">
              For brukere
            </Link>
            <Link href="/#for-brukere" onClick={() => setOpen(false)} className="hover:text-emerald-300">
              Pårørende
            </Link>
            <Link href="/#kommunepilot" onClick={() => setOpen(false)} className="hover:text-emerald-300">
              Kommuner
            </Link>
            <Link href="/kontakt" onClick={() => setOpen(false)} className="hover:text-emerald-300">
              Kontakt
            </Link>
          </nav>
        </div>
      )}
    </div>
  );
}
