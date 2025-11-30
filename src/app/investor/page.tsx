"use client";

import Image from "next/image";
import Link from "next/link";

export default function InvestorPage() {
  return (
    <main className="bg-[#0A0F1F] text-white">
      {/* HERO */}
      <section className="max-w-5xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl font-bold mb-4">
            En ny standard for forebygging og digital legemiddelstøtte
          </h1>
          <p className="text-gray-300 text-lg mb-6">
            Tablaid kombinerer medisinloggføring, funksjonsdata og pårørendestøtte i én helhetlig løsning.
            Det gjør oss unike i et marked som nå beveger seg raskt mot proaktiv og datadrevet oppfølging.
          </p>
        </div>

        <div className="flex justify-center">
          <Image
            src="/Tablaid tripple m skygge.png"
            alt="Tablaid produktmockup"
            width={360}
            height={320}
            className="object-contain"
          />
        </div>
      </section>

      {/* INNHOLD */}
      <section className="max-w-5xl mx-auto px-4 pb-20 space-y-6">
        <p className="text-gray-200">
          Tablaid representerer en ny kategori: en digital helsekompanjong som fanger opp risiko tidlig og 
          styrker samspillet mellom bruker, pårørende og kommune.
        </p>

        <h2 className="text-2xl font-semibold pt-4">Marked og drivere</h2>
        <ul className="list-disc pl-5 space-y-2 text-gray-300">
          <li>Demografisk press øker behovet for forebyggende løsninger</li>
          <li>Kommuner etterspør lavterskel digitale tjenester</li>
          <li>Pårørende blir en større del av omsorgssystemet</li>
          <li>Funksjonsdata og etterlevelse er et underutforsket, men kritisk område</li>
          <li>Internasjonale rammeverk (ICOPE, EHDS m.m.) peker i samme retning</li>
        </ul>

        <h2 className="text-2xl font-semibold pt-4">Status</h2>
        <ul className="list-disc pl-5 space-y-2 text-gray-300">
          <li>MVP utviklet</li>
          <li>Tromsø-pilot og Østensjø-testløp</li>
          <li>Rigg for 20-kommunepiloten</li>
          <li>Samarbeid med Podium gir kostnadseffektiv utvikling</li>
        </ul>

        <p className="text-gray-200 pt-4">
          Vi søker investorer som vil bygge en bærekraftig, evidensbasert helseplattform — steg for steg, 
          med ekte brukerinnsikt og realistisk vekst.
        </p>

        <div className="pt-8">
          <Link
            href="/kontakt"
            className="inline-block px-6 py-3 bg-green-600 hover:bg-green-500 text-black rounded-full font-semibold"
          >
            Kontakt oss for investor-informasjon
          </Link>
        </div>
      </section>
    </main>
  );
}
