// app/page.tsx
import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  return (
    <>
      <main className="flex-1">
        <HeroSection />
        <AudienceSection />
        <FeaturesSection />   {/* ← RIKTIG seksjon (erstatter SmartTagSection) */}
        <NeedsSection />
        <VoicesSection />
      </main>
    </>
  );
}

/* -------------------------------------------------------------------------- */
/*                               HERO SECTION                                 */
/* -------------------------------------------------------------------------- */

function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-slate-950">
      {/* Bakgrunnsglød */}
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-72 bg-linear-to-b from-emerald-500/15 via-slate-900 to-slate-950 blur-3xl" />

      <div className="mx-auto flex max-w-6xl flex-col-reverse gap-10 px-4 pb-16 pt-20 sm:px-6 sm:pb-20 sm:pt-24 lg:flex-row lg:items-center lg:gap-16 lg:pb-24 lg:pt-28">

        {/* Bilde – app-triple.png */}
        <div className="relative flex flex-1 justify-center lg:justify-end">
          <div className="relative w-full max-w-md overflow-hidden rounded-3xl border border-slate-700/70 bg-slate-900/80 shadow-2xl shadow-emerald-500/20">
            <Image
              src="/app-triple.png"
              alt="Helsepersonell viser Tablaid-appen til bruker og pårørende"
              width={900}
              height={600}
              className="object-cover w-full h-full"
              priority
            />
          </div>
        </div>

        {/* Tekst */}
        <div className="max-w-xl">
          <span className="inline-flex items-center rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium uppercase tracking-wide text-emerald-300">
            Pilot våren 2026 • Tablaid
          </span>

          <h1 className="mt-4 text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl lg:text-5xl">
            En digital{" "}
            <span className="text-emerald-400">helse- og legemiddelassistent</span>{" "}
            for brukere, pårørende og kommuner.
          </h1>

          <p className="mt-4 text-base leading-relaxed text-slate-200 sm:text-lg">
            Tablaid kombinerer legemiddelassistent, helsekompass og
            pårørendestøtte for å fange opp tidlige signaler om
            funksjonsfall – før behovet for tjenester eskalerer.
          </p>

          {/* ⭐ OPPDATERT CTA-BLOKK */}
          <div className="mt-6 flex flex-wrap items-center gap-4">

            <Link
              href="/kommuner"
              className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-slate-900 shadow-lg shadow-emerald-500/30 transition hover:bg-emerald-400"
            >
              Kommunepilot 2026
            </Link>

            <Link
              href="/bruker"
              className="inline-flex items-center justify-center rounded-full border border-slate-600 px-5 py-2.5 text-sm font-semibold text-slate-100 hover:border-slate-400 hover:bg-slate-900/60"
            >
              Se hvordan Tablaid fungerer
            </Link>

          </div>

          <p className="mt-4 text-xs text-slate-400">
            Samutviklet med Bydel Østensjø og norske helsefaglige miljøer.
            Designet for å styrke samspill mellom bruker, pårørende og kommune.
          </p>
        </div>

      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*                            AUDIENCE SECTION                                */
/* -------------------------------------------------------------------------- */

function AudienceSection() {
  return (
    <section id="for-brukere" className="bg-slate-950 py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">

        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
            Én løsning – tre perspektiver
          </h2>
          <p className="mt-3 text-sm text-slate-300 sm:text-base">
            Tablaid er laget for samspill mellom innbygger, pårørende og kommune.
            Samme innsikt – ulike behov og ansvar.
          </p>
        </div>

        <div className="mt-8 grid gap-5 sm:mt-10 sm:grid-cols-2 lg:grid-cols-3">

          {/* INNBYGGER / BRUKER */}
          <div className="flex flex-col rounded-3xl border border-slate-800 bg-slate-900/70 p-5 shadow-sm">
            <h3 className="text-sm font-semibold text-emerald-300">For deg</h3>
            <p className="mt-2 text-sm text-slate-200">
              Enkel legemiddelassistent med påminnelser, skanning og daglige sjekk-inn.
            </p>

            <ul className="mt-3 space-y-1.5 text-xs text-slate-300">
              <li>• Oversiktlig helse- og funksjonsdashbord</li>
              <li>• Daglige spørsmål om energi, balanse og trygghet</li>
              <li>• Valgfri deling av innsikt</li>
            </ul>

            <div className="mt-4">
              <Link href="/bruker" className="text-xs font-medium text-emerald-300 hover:text-emerald-200">
                Les mer →
              </Link>
            </div>
          </div>

          {/* PÅRØRENDE */}
          <div className="flex flex-col rounded-3xl border border-slate-800 bg-slate-900/70 p-5 shadow-sm">
            <h3 className="text-sm font-semibold text-emerald-300">For pårørende</h3>
            <p className="mt-2 text-sm text-slate-200">
              Få oversikt uten å måtte følge opp hver dag – se utvikling, ikke detaljer.
            </p>

            <ul className="mt-3 space-y-1.5 text-xs text-slate-300">
              <li>• Varsler ved negative trender</li>
              <li>• Trygt og enkelt pårørendedashbord</li>
              <li>• Et felles språk når noe må følges opp</li>
            </ul>

            <div className="mt-4">
              <Link href="/parorende" className="text-xs font-medium text-emerald-300 hover:text-emerald-200">
                Les mer →
              </Link>
            </div>
          </div>

          {/* KOMMUNER */}
          <div id="kommunepilot" className="flex flex-col rounded-3xl border border-slate-800 bg-slate-900/70 p-5 shadow-sm">
            <h3 className="text-sm font-semibold text-emerald-300">For kommuner</h3>
            <p className="mt-2 text-sm text-slate-200">
              Aggregert innsikt om funksjon og legemiddelbruk – uten nye journalsystemer.
            </p>

            <ul className="mt-3 space-y-1.5 text-xs text-slate-300">
              <li>• Pilotoppsett: 25 personer per kommune</li>
              <li>• Tidlige signaler og bedre ressursutnyttelse</li>
              <li>• Under anbudsgrensen – med tydelig læringsagenda</li>
            </ul>

            <div className="mt-4">
              <Link href="/kommuner" className="text-xs font-medium text-emerald-300 hover:text-emerald-200">
                Les mer →
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}


/* -------------------------------------------------------------------------- */
/*                          FEATURES SECTION (3 cards)                        */
/* -------------------------------------------------------------------------- */

function FeaturesSection() {
  return (
    <section className="bg-slate-950 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">

        {/* Tittel */}
        <div className="mx-auto max-w-3xl text-center mb-12">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl">
            Nøkkelfunksjoner i Tablaid
          </h2>
          <p className="mt-3 text-base text-slate-300">
            Tre funksjoner som sammen gir et komplett bilde av helse og etterlevelse.
          </p>
        </div>

        {/* GRID: SmartTag – Helsekompass – Legemiddelassistent */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

          {/* SMARTTAG */}
          <div className="rounded-3xl border border-slate-800 bg-slate-900/60 backdrop-blur-xl
                          p-6 shadow-lg hover:shadow-emerald-500/10 transition">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-semibold text-emerald-300 uppercase tracking-wide">
                SmartTag
              </h3>
              <Image
                src="/SmartTag.png"
                alt="SmartTag ikon"
                width={48}
                height={48}
                className="object-contain"
              />
            </div>

            <p className="text-slate-200 text-sm">
              NFC-etiketter som lar brukeren logge faktisk inntak ved å berøre mobilen.
            </p>

            <ul className="mt-4 space-y-2 text-xs text-slate-300">
              <li>• Ett-trykks logging</li>
              <li>• Faktisk inntaksdata (ikke planer)</li>
              <li>• Leveres i pilot-startpakken</li>
            </ul>

           <Link
  href="/smarttag/order"
  className="inline-flex mt-5 items-center justify-center rounded-full 
             border border-emerald-400/50 px-4 py-2 text-xs font-semibold 
             text-emerald-300 hover:bg-emerald-400/10"
>
  Bestill SmartTags
</Link>

          </div>

          {/* HELSEKOMPASS MOCKUP — NYTT KORT */}
          <div className="rounded-3xl border border-slate-800 bg-slate-900/60 backdrop-blur-xl
                          p-6 shadow-lg hover:shadow-emerald-500/10 transition">
            <h3 className="text-sm font-semibold text-emerald-300 uppercase tracking-wide mb-4">
              Helsekompass
            </h3>

            <p className="text-slate-200 text-sm mb-4">
              Daglige mikromålinger som avslører tidlige signaler om endringer i funksjon.
            </p>

            {/* Helsekompass mini-mockup */}
            <div className="mx-auto w-40 rounded-3xl border border-slate-700 bg-slate-900 p-3 
                            shadow-inner shadow-black/40">
              
              {/* Header */}
              <div className="flex items-center justify-between rounded-2xl bg-slate-950/70 
                              px-3 py-1.5">
                <span className="text-[10px] text-slate-200">Helsekompass</span>
                <span className="text-[9px] text-emerald-300">Dag 3 av 8</span>
              </div>

              {/* Spørsmål */}
              <div className="mt-3 space-y-2">
                {[
                  "Hvordan har energinivået ditt vært i dag?",
                  "Har du hatt problemer med å huske avtaler?",
                  "Har du vært mer ustø enn vanlig?",
                ].map((q, idx) => (
                  <div
                    key={idx}
                    className="rounded-xl border border-slate-700 bg-slate-900 px-2 py-2"
                  >
                    <p className="text-[10px] text-slate-100">{q}</p>
                    <div className="mt-1 flex gap-1">
                      <span className="flex-1 text-center rounded-full bg-slate-800 
                                        px-1.5 py-0.5 text-[9px]">
                        Stabilt
                      </span>
                      <span className="flex-1 text-center rounded-full bg-slate-800 
                                        px-1.5 py-0.5 text-[9px]">
                        Litt verre
                      </span>
                      <span className="flex-1 text-center rounded-full bg-slate-800 
                                        px-1.5 py-0.5 text-[9px]">
                        Mye verre
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Tidlige signaler */}
              <div className="mt-3 rounded-xl bg-slate-950/70 p-2">
                <p className="text-[10px] font-medium text-emerald-300">
                  Tidlige signaler
                </p>
                <p className="mt-0.5 text-[9px] text-slate-400">
                  Endringer i energi, balanse og hukommelse kan deles med pårørende
                  eller kommunen.
                </p>
              </div>
            </div>

            <p className="mt-4 text-[11px] text-slate-400">
              Bygger på ICOPE og CFS – designet for daglig bruk.
            </p>
          </div>

          {/* LEGEMIDDELASSISTENT */}
          <div className="rounded-3xl border border-slate-800 bg-slate-900/60 backdrop-blur-xl
                          p-6 shadow-lg hover:shadow-emerald-500/10 transition">
            <h3 className="text-sm font-semibold text-emerald-300 uppercase tracking-wide">
              Legemiddelassistent
            </h3>

            <p className="mt-3 text-slate-200 text-sm">
              Påminnelser, oversikt og trygghet – alt samlet for enklere etterlevelse.
            </p>

            <ul className="mt-4 space-y-2 text-xs text-slate-300">
              <li>• Skanning av medisiner</li>
              <li>• Automatisk dosettoversikt</li>
              <li>• Varsler ved manglende inntak</li>
            </ul>

            <Link
              href="/bruker"
              className="inline-flex mt-5 items-center justify-center rounded-full 
                         border border-emerald-400/50 px-4 py-2 text-xs font-semibold 
                         text-emerald-300 hover:bg-emerald-400/10"
            >
              Se hvordan det fungerer
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*                               NEEDS SECTION                                */
/* -------------------------------------------------------------------------- */

function NeedsSection() {
  return (
    <section className="bg-slate-950 py-14 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">

        <div className="max-w-3xl">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
            Dokumenterte behov i helsetjenesten
          </h2>
          <p className="mt-3 text-sm text-slate-300 sm:text-base">
            Tilsyn og strategidokumenter peker på tre gjennomgående utfordringer.
          </p>
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-5 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-wide text-emerald-300">
              Legemiddelbruk
            </p>
            <p className="mt-2 text-sm text-slate-200">
              Risiko ved uklare lister og fravær av system for faktisk etterlevelse hjemme.
            </p>
            <p className="mt-3 text-xs text-slate-400">
              Tablaid gir innsikt der legemidlene faktisk tas – i hjemmet.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-5 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-wide text-emerald-300">
              Funksjon & skrøpelighet
            </p>
            <p className="mt-2 text-sm text-slate-200">
              Kommunene etterlyser løpende innsikt – ikke sjeldne enkeltmålinger.
            </p>
            <p className="mt-3 text-xs text-slate-400">
              Helsekompasset gir korte, daglige datapunkter som avslører trender.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-5 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-wide text-emerald-300">
              Pårørende som ressurs
            </p>
            <p className="mt-2 text-sm text-slate-200">
              Viktige observasjoner systematiseres og deles med brukerens samtykke.
            </p>
            <p className="mt-3 text-xs text-slate-400">
              Tablaid styrker samarbeid rundt brukeren.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*                               VOICES SECTION                               */
/* -------------------------------------------------------------------------- */

function VoicesSection() {
  return (
    <section className="bg-slate-950 py-14 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">

        <div className="max-w-3xl">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
            Myndighetenes budskap
          </h2>
          <p className="mt-3 text-sm text-slate-300 sm:text-base">
            Tablaid bygger på føringer fra Helsedirektoratet, KS og Helsetilsynet.
          </p>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2">

          {/* Helsedirektoratet */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
            <p className="text-sm text-slate-300 italic">
              «Utvikling over tid er avgjørende for å identifisere økende risiko tidlig.»
            </p>
            <p className="mt-3 text-xs text-slate-500">
              – Helsedirektoratet, Samhandlingsstrategi 2024–2030
            </p>
          </div>

          {/* Helsetilsynet 2023 */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
            <p className="text-sm text-slate-300 italic">
              «Pasienter og pårørende er en ressurs i forbedringsarbeidet.»
            </p>
            <p className="mt-3 text-xs text-slate-500">
              – Helsetilsynet, Tilsynsmelding 2023
            </p>
          </div>

          {/* Helsetilsynet 2025 */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
            <p className="text-sm text-slate-300 italic">
              «Det er behov for å styrke helsepersonells kunnskap om legemidler.»
            </p>
            <p className="mt-3 text-xs text-slate-500">
              – Helsetilsynet, Tilsynsmelding 2025
            </p>
          </div>

          {/* Bo Trygt Hjemme */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
            <p className="text-sm text-slate-300">
              <strong>
                Hovedmålet i reformen er å flytte hjemmetjenestene fra reaktiv til proaktiv oppfølging.
              </strong>
            </p>
            <p className="mt-3 text-xs text-slate-500">
              – Basert på Regjeringens «Bo Trygt Hjemme»-reform
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
