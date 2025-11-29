import "./globals.css";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  title: "Tablaid – Digital helse- og legemiddelassistent",
  description:
    "Tablaid gir tidlige signaler, tryggere legemiddelbruk og bedre samspill mellom brukere, pårørende og kommuner.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="nb">
      <body className="bg-background text-foreground">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>

          {/* HEADER */}
          <header className="w-full border-b border-gray-200 dark:border-gray-800 py-4 bg-white/70 backdrop-blur dark:bg-black/40">
            <nav className="max-w-5xl mx-auto flex justify-between items-center px-4">
              <Link href="/" className="flex items-center gap-2">
  <Image
    src="/tablaid-full-logo.png"
    alt="Tablaid logo"
    width={180}
    height={50}
    className="object-contain"
  />
</Link>



            <div className="flex gap-6 text-sm">
  <Link href="/bruker" className="hover:opacity-70">Brukere</Link>
  <Link href="/parorende" className="hover:opacity-70">Pårørende</Link>
  <Link href="/pilot" className="hover:opacity-70">Kommuner</Link>
  <Link href="/investor" className="hover:opacity-70 font-medium">Investorer</Link>
  <Link href="/om" className="hover:opacity-70">Om oss</Link>
  <Link href="/kontakt" className="px-4 py-2 bg-[#01D1C1] text-white rounded-lg hover:opacity-90">
    Kontakt
  </Link>
</div>

            </nav>
          </header>

          {/* MAIN CONTENT */}
          <main className="pt-10">{children}</main>

          {/* FOOTER */}
          {/* FOOTER */}
<footer className="w-full bg-gray-100 dark:bg-neutral-900 border-t border-gray-200 dark:border-neutral-800 mt-20">
  <div className="max-w-6xl mx-auto py-10 px-6 grid md:grid-cols-3 gap-10 text-sm">
    
    <div>
      <h4 className="font-semibold mb-3">Tablaid AS</h4>
      <p className="opacity-75">Org.nr: 930 932 608</p>
      <p className="opacity-75 mt-1">post@tablaid.no</p>
      <p className="opacity-75">Daglig leder: Gaute Birkeland Kjellsen</p>
      <p className="opacity-75">Tlf: 913 43 663</p>
    </div>

    <div>
      <h4 className="font-semibold mb-3">Snarveier</h4>
      <ul className="space-y-2 opacity-75">
        <li><Link href="/pilot" className="hover:opacity-60">Pilot for kommuner</Link></li>
        <li><Link href="/investor" className="hover:opacity-60">Investor-info</Link></li>
        <li><Link href="/parorende" className="hover:opacity-60">For pårørende</Link></li>
        <li><Link href="/om" className="hover:opacity-60">Om Tablaid</Link></li>
      </ul>
    </div>

    <div>
      <h4 className="font-semibold mb-3">Sosiale kanaler</h4>
      <p className="opacity-75">LinkedIn – Tablaid AS</p>
      <p className="opacity-75">Instagram – @tablaid</p>
    </div>
  </div>

  <div className="border-t border-gray-300 dark:border-neutral-800 py-4 text-center text-xs opacity-75">
    © {new Date().getFullYear()} Tablaid AS. Alle rettigheter forbeholdt.
  </div>
</footer>

        </ThemeProvider>
      </body>
      {/* HEADER */}
<header className="w-full border-b border-gray-200 dark:border-neutral-800 bg-white/70 dark:bg-black/40 backdrop-blur-sm">
  <nav className="max-w-6xl mx-auto flex items-center justify-between py-4 px-6">
    <Link href="/" className="flex items-center gap-2">
      <Image src="/logo.png" alt="Tablaid logo" width={140} height={40} />
    </Link>

    <div className="hidden md:flex gap-8 text-sm font-medium">
      <Link href="/" className="hover:opacity-70">Hjem</Link>
      <Link href="/bruker" className="hover:opacity-70">Brukere</Link>
      <Link href="/parorende" className="hover:opacity-70">Pårørende</Link>
      <Link href="/pilot" className="hover:opacity-70">Kommuner</Link>
      <Link href="/investor" className="hover:opacity-70">Investorer</Link>
      <Link href="/om-oss" className="hover:opacity-70">Om oss</Link>
    </div>

    <Link
      href="/kontakt"
      className="px-4 py-2 rounded-lg bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 transition"
    >
      Kontakt oss
    </Link>
  </nav>
</header>

    </html>
  );
}
