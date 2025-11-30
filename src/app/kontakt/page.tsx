"use client";

import Link from "next/link";

export default function KontaktPage() {
  return (
    <main className="bg-[#0A0F1F] text-white min-h-screen">
      <section className="max-w-4xl mx-auto px-4 py-20 text-center">
        <h1 className="text-4xl font-bold mb-6">Kontakt oss</h1>
        <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
          Vi hører gjerne fra deg — enten du er kommune, pårørende, bruker, fagperson eller investor.
        </p>

        <div className="bg-[#0F172A] border border-white/10 rounded-xl p-10 inline-block text-left">
          <p className="text-gray-300 mb-2">
            <span className="font-semibold">E-post:</span>{" "}
            <Link href="mailto:post@tablaid.no" className="underline">
              post@tablaid.no
            </Link>
          </p>
          <p className="text-gray-300 mb-2">
            <span className="font-semibold">Daglig leder:</span> Gaute Birkeland Kjellsen
          </p>
          <p className="text-gray-300 mb-6">
            <span className="font-semibold">Telefon:</span> 913 43 663
          </p>

          <p className="text-gray-200 mb-4">
            Vil du:
          </p>
          <ul className="list-disc pl-5 text-gray-300 space-y-1 mb-6">
            <li>teste Tablaid i din kommune?</li>
            <li>få et innblikk i dashbord og funksjonsdata?</li>
            <li>bidra som testbruker eller pårørende?</li>
          </ul>

          <Link
            href="mailto:post@tablaid.no"
            className="px-8 py-3 bg-green-600 hover:bg-green-500 text-black rounded-full font-semibold"
          >
            Book et uforpliktende møte
          </Link>
        </div>
      </section>
    </main>
  );
}
