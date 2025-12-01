// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tablaid – Digital helse- og legemiddelassistent",
  description:
    "Tablaid hjelper brukere, pårørende og kommuner å få oversikt over legemiddelbruk og funksjon over tid – for tidligere oppdagelse av funksjonsfall.",
  metadataBase: new URL("https://tablaid.no"),
  openGraph: {
    title: "Tablaid – Digital helse- og legemiddelassistent",
    description:
      "En digital helseassistent som kombinerer legemiddeloversikt, funksjonsdata og pårørendestøtte for tryggere hverdag og bedre beslutninger i helsetjenesten.",
    url: "https://tablaid.no",
    siteName: "Tablaid",
    images: [
      {
        url: "/og-image.png", // legg inn faktisk fil i /public
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
      "en": "https://tablaid.no/en",
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
      <body className="min-h-screen bg-slate-950 text-slate-50 antialiased">
        <div className="flex min-h-screen flex-col">
          {children}
        </div>
      </body>
    </html>
  );
}
