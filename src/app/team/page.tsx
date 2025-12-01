"use client";

import Link from "next/link";

export default function TeamPage() {
  return (
    <main className="bg-[#0A0F1F] text-white min-h-screen pb-24">
      {/* HEADER */}
      <section className="max-w-5xl mx-auto px-4 pt-20 pb-10">
        <h1 className="text-4xl font-bold mb-4">Team & styre</h1>

        <p className="text-gray-300 max-w-3xl leading-relaxed">
          Tablaid utvikles av et tverrfaglig team med klinisk innsikt, teknisk
          kapasitet og sterk forståelse for forebygging og tidlige signaler.
          Appen utvikles i samarbeid med Podium gjennom et arbeidsinkluderende
          utviklingsløp som kombinerer kompetansebygging, samfunnsverdi og høy
          utviklingsfart.
        </p>
      </section>

      {/* TEAM */}
      <section className="max-w-5xl mx-auto px-4 py-10">
        <h2 className="text-2xl font-semibold mb-6">Team</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Gaute */}
          <PersonCard
            initials="GB"
            name="Gaute Birkeland Kjellsen"
            role="Daglig leder & grunnlegger"
          />

          {/* Podium-team */}
          <PersonCard initials="RA" name="Robin André" role="Tech Lead (Podium)" />
          <PersonCard initials="SA" name="Sami Ahmed" role="Backend-utvikler (Podium)" />
          <PersonCard initials="AR" name="Arthur" role="UX Designer (Podium)" />
          <PersonCard initials="OH" name="Ole Kristian Hexeberg" role="UX/UI (Podium)" />

          {/* Ekstern rådgiver */}
          <PersonCard
            initials="CH"
            name="Christian Håland"
            role="Sikkerhetsrådgiver – Binary Security"
          />
        </div>
      </section>

      {/* PODIUM-SAMARBEID */}
      <section className="max-w-5xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-semibold mb-4">Utvikling gjennom Podium</h2>
        <p className="text-gray-300 max-w-3xl leading-relaxed mb-6">
          Tablaid utvikles gjennom Podium – et arbeidsmarkedstiltak som kobler
          dyktige kandidater med relevante teknologiprosjekter. Dette gir både
          kontinuitet, samfunnsverdi og tilgang på tverrfaglig kompetanse.
        </p>
        <p className="text-gray-400 text-sm">
          Podium leveres gjennom JobZone / Job & Talent.
        </p>
      </section>

      {/* STYRE */}
      <section className="max-w-5xl mx-auto px-4 py-10">
        <h2 className="text-2xl font-semibold mb-6">Styre</h2>

        <div className="grid md:grid-cols-3 gap-6">
          <PersonCard
            initials="KB"
            name="Karina Birkeland"
            role="Styreleder – HR-direktør i Innovasjon Norge"
            linkedIn="https://linkedin.com/in/karinabirkeland"
          />

          <PersonCard
            initials="RW"
            name="Randi Willa"
            role="Styremedlem"
            linkedIn="https://linkedin.com/in/randi-willa-8865b163"
          />

          <PersonCard
            initials="AS"
            name="Amir Sasson"
            role="Styremedlem"
            linkedIn="https://linkedin.com/in/amir-sasson-84750a3"
          />
        </div>
      </section>

      {/* Tilbake-link */}
      <section className="max-w-5xl mx-auto px-4 py-10 text-center">
        <Link
          href="/"
          className="text-green-400 hover:text-green-300 text-sm underline"
        >
          ← Tilbake til forsiden
        </Link>
      </section>
    </main>
  );
}

/* COMPONENT: PersonCard */
function PersonCard({
  initials,
  name,
  role,
  linkedIn,
}: {
  initials: string;
  name: string;
  role: string;
  linkedIn?: string;
}) {
  return (
    <div className="bg-[#0F172A] border border-white/10 rounded-2xl p-6 flex flex-col gap-3">
      <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center text-lg font-semibold">
        {initials}
      </div>

      <h3 className="text-lg font-medium">{name}</h3>

      <p className="text-sm text-gray-300 leading-relaxed">{role}</p>

      {linkedIn && (
        <a
          href={linkedIn}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-green-400 hover:text-green-300"
        >
          LinkedIn →
        </a>
      )}
    </div>
  );
}
