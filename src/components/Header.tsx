"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        backdropFilter: "blur(12px)",
        background: "rgba(2, 6, 23, 0.7)",
        borderBottom: "1px solid rgba(148,163,184,0.1)",
      }}
    >
      <div
        className="page-container"
        style={{
          height: "var(--nav-height)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <Link
          href="/"
          style={{
            fontSize: "1.2rem",
            fontWeight: 600,
            letterSpacing: "-0.02em",
            color: "var(--color-text)",
          }}
        >
          Tablaid
        </Link>

        {/* Desktop Menu */}
        <nav
          className="hidden md:flex gap-8 text-sm"
          style={{ alignItems: "center" }}
        >
          <Link href="/bruker">Bruker</Link>
          <Link href="/parorende">Pårørende</Link>
          <Link href="/kommuner">Kommuner</Link>
          <Link href="/investor">Investor</Link>
          <Link href="/om">Om oss</Link>

          <Link
            href="/kontakt"
            className="button button-primary"
            style={{ padding: "0.5rem 1rem", fontSize: "0.85rem" }}
          >
            Kontakt oss
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
          style={{
            width: "36px",
            height: "36px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "8px",
            border: "1px solid rgba(148,163,184,0.3)",
            background: "rgba(15,23,42,0.4)",
            color: "var(--color-text)",
          }}
        >
          ☰
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          className="md:hidden"
          style={{
            padding: "1rem",
            background: "rgba(2,6,23,0.95)",
            borderTop: "1px solid rgba(148,163,184,0.15)",
          }}
        >
          <nav className="flex flex-col gap-4 text-base">
            <Link href="/bruker">Bruker</Link>
            <Link href="/parorende">Pårørende</Link>
            <Link href="/kommuner">Kommuner</Link>
            <Link href="/investor">Investor</Link>
            <Link href="/om">Om oss</Link>
            <Link href="/kontakt" className="button button-primary">
              Kontakt oss
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
