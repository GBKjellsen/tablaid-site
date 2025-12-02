// app/layout.tsx
import type { Metadata } from "next";
import Link from "next/link";
import React from "react";
import "./globals.css";
import MobileNav from "./MobileNav";
import Footer from "./components/Footer";

import { Analytics } from "@vercel/analytics/next";



export const metadata: Metadata = {
  title: "Tablaid – Digital helse- og legemiddelassistent",
  description:
    "Tablaid hjelper mennesker, pårørende og kommuner å få oversikt over legemiddelbruk og funksjon over tid – for tidligere oppdagelse av funksjonsfall.",
  metadataBase: new URL("https://tablaid.no"),
  openGraph: {
    title: "Tablaid – Digital helse- og legemiddelassistent",
    description:
      "En digital helseassistent som kombinerer legemiddeloversikt, funksjonsdata og pårørendestøtte for tryggere hverdag og bedre beslutninger.",
    url: "https://tablaid.no",
    siteName: "Tablaid",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Tablaid – digital helse- og legemiddelassistent",
      },
    ],
    locale: "nb_NO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tablaid – Digital helse- og legemiddelassistent",
    description:
      "Tidlig oppdagelse av funksjonsfall gjennom legemiddelassistent, helsekompass og pårørendestøtte.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://tablaid.no",
    languages: {
      "nb-NO": "https://tablaid.no",
      en: "https://tablaid.no/en",
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="nb">
      <body className="min-h-screen bg-slate-950 text-slate-100">

        {/* HEADER */}
        <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/80 backdrop-blur">
          <div className="mx-auto max-w-6xl flex items-center gap-6 px-4 py-4 sm:px-6">

            {/* Logo */}
            <Link href="/" className="flex items-center gap-3">
              <img
                src="/tablaid-logo-negative.png"
                alt="Tablaid logo"
                className="h-7 w-auto"
              />
            </Link>

            {/* Spacer */}
            <div className="flex-1" />

            {/* Desktop Navigation */}
            <nav className="hidden sm:flex gap-6 text-xs text-slate-300">
              <Link href="/#for-brukere" className="hover:text-emerald-300">
                For personer
              </Link>
              <Link href="/#for-brukere" className="hover:text-emerald-300">
                Pårørende
              </Link>
              <Link href="/#kommunepilot" className="hover:text-emerald-300">
                Kommuner
              </Link>
              <Link href="/kontakt" className="hover:text-emerald-300">
                Kontakt
              </Link>
            </nav>

            {/* English Flag */}
            <Link href="/en" className="hidden sm:block hover:opacity-80">
              <img
                src="/gb-flag.svg"
                alt="English"
                className="h-4 w-auto"
              />
            </Link>

            {/* Mobile navigation */}
            <MobileNav />
          </div>
        </header>

        {/* PAGE CONTENT */}
        <div className="flex flex-col min-h-screen">
          <main className="grow">{children}</main>
          <Footer />
        </div>

        {/* ANALYTICS */}
        <Analytics />
        
      </body>
    </html>
  );
}
