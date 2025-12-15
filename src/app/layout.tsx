import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  title: "Tablaid – Digital helse- og legemiddelassistent",
  description:
    "Tablaid hjelper mennesker, pårørende og kommuner å få oversikt over legemiddelbruk og funksjon over tid – for tidligere oppdagelse av funksjonsfall.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="nb">

      <body className="min-h-screen transition-colors duration-500">

        {/* GLOBAL HEADER */}
        <Header />

        {/* PAGE CONTENT */}
        <div className="flex flex-col min-h-screen">
          <main className="grow lg:px20">{children}</main>
          <Footer />
        </div>

        {/* ANALYTICS */}
        <Analytics />
      </body>
    </html>
  );
}
