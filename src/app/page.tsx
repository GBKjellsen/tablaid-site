// app/page.tsx
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <main className="flex-1">
        <HeroSection />
        <AudienceSection />
        <SmartTagSection />
        <NeedsSection />
        <VoicesSection />
      </main>
          </>
  );
}

function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-slate-950">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-72 bg-gradient-to-b from-emerald-500/15 via-slate-900 to-slate-950 blur-3xl" />
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 pb-16 pt-20 sm:px-6 sm:pb-20 sm:pt-24 lg:flex-row lg:items-center lg:gap-16 lg:pb-24 lg:pt-28">
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
            pårørendestøtte for å fange opp tidlige signaler om funksjonsfall –
            før behovet for tjenester eskalerer.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-4">
            <Link
              href="#kommunepilot"
              className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-slate-900 shadow-lg shadow-emerald-500/30 transition hover:bg-emerald-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
            >
              Les om kommunepiloten
            </Link>
            <Link
              href="#for-brukere"
              className="inline-flex items-center justify-center rounded-full border border-slate-600 px-5 py-2.5 text-sm font-semibold text-slate-100 hover:border-slate-400 hover:bg-slate-900/60"
            >
              Se hvordan Tablaid fungerer
            </Link>
          </div>

          <p className="mt-4 text-xs text-slate-400">
            Samutviklet med Bydel Østensjø og norske helsefaglige miljøer. Designet
            for å styrke samspill mellom bruker, pårørende og kommune.
          </p>
        </div>

        {/* Illustrasjon / mockup */}
        <div className="relative flex flex-1 justify-center lg:justify-end">
          <div className="relative aspect-[9/16] w-64 max-w-xs rounded-3xl border border-slate-700/70 bg-slate-900/80 p-3 shadow-2xl shadow-emerald-500/20 backdrop-blur sm:w-72">
            <div className="flex items-center justify-between rounded-2xl bg-slate-950/70 px-3 py-2">
              <span className="text-xs font-medium text-slate-200">
                Helsekompass
              </span>
              <span className="text-[10px] text-emerald-300">Dag 3 av 8</span>
            </div>
            <div className="mt-4 space-y-3">
              {[
                "Hvordan har energinivået ditt vært i dag?",
                "Har du hatt problemer med å huske avtaler?",
                "Har du vært mer ustø enn vanlig?",
              ].map((q, idx) => (
                <button
                  key={idx}
                  className="w-full rounded-2xl border border-slate-700/80 bg-slate-900/80 px-3 py-3 text-left text-[11px] text-slate-100 hover:border-emerald-500/40 hover:bg-slate-900"
                >
                  {q}
                  <div className="mt-2 flex gap-1 text-[10px] text-slate-400">
                    <span className="inline-flex flex-1 justify-center rounded-full bg-slate-800 px-2 py-1">
                      Stabilt
                    </span>
                    <span className="inline-flex flex-1 justify-center rounded-full bg-slate-800 px-2 py-1">
                      Litt verre
                    </span>
                    <span className="inline-flex flex-1 justify-center rounded-full bg-slate-800 px-2 py-1">
                      Mye verre
                    </span>
                  </div>
                </button>
              ))}
            </div>

            <div className="mt-4 rounded-2xl bg-slate-950/80 p-3">
              <p className="text-[11px] font-medium text-emerald-300">
                Tidlige signaler
              </p>
              <p className="mt-1 text-[10px] text-slate-300">
                Små endringer i gangfunksjon, energi og hukommelse fanges opp og
                kan deles med pårørende eller kommune etter samtykke.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AudienceSection() {
  return (
    <section
      id="for-brukere"
      className="bg-slate-950 py-12 sm:py-16 lg:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
            Én løsning – tre perspektiver
          </h2>
          <p className="mt-3 text-sm text-slate-300 sm:text-base">
            Tablaid er laget for samspill mellom bruker, pårørende og kommune.
            Samme data – ulike innganger og ansvar.
          </p>
        </div>

        <div className="mt-8 grid gap-5 sm:mt-10 sm:grid-cols-2 lg:grid-cols-3">
          {/* Brukere */}
          <div className="flex flex-col rounded-3xl border border-slate-800 bg-slate-900/70 p-5 shadow-sm shadow-slate-900/60">
            <h3 className="text-sm font-semibold text-emerald-300">For brukere</h3>
            <p className="mt-2 text-sm text-slate-200">
              Enkel legemiddelassistent med påminnelser, skanning og daglige
              sjekk-inn.
            </p>
            <ul className="mt-3 space-y-1.5 text-xs text-slate-300">
              <li>• Oversiktlig dashbord over egen helse</li>
              <li>• Daglige spørsmål om funksjon, energi og trygghet</li>
              <li>• Valgfri deling av innsikt</li>
            </ul>
            <div className="mt-4">
              <Link
                href="/bruker"
                className="text-xs font-medium text-emerald-300 hover:text-emerald-200"
              >
                Les mer →
              </Link>
            </div>
          </div>

          {/* Pårørende */}
          <div className="flex flex-col rounded-3xl border border-slate-800 bg-slate-900/70 p-5 shadow-sm shadow-slate-900/60">
            <h3 className="text-sm font-semibold text-emerald-300">For pårørende</h3>
            <p className="mt-2 text-sm text-slate-200">
              Oversikt uten å måtte følge opp hver dag. Du ser utvikling – ikke
              detaljer.
            </p>
            <ul className="mt-3 space-y-1.5 text-xs text-slate-300">
              <li>• Varsler ved negative trender</li>
              <li>• Enkelt dashbord</li>
              <li>• Felles språk når noe må følges opp</li>
            </ul>
            <div className="mt-4">
              <Link
                href="/parorende"
                className="text-xs font-medium text-emerald-300 hover:text-emerald-200"
              >
                Les mer →
              </Link>
            </div>
          </div>

          {/* Kommuner */}
          <div
            id="kommunepilot"
            className="flex flex-col rounded-3xl border border-slate-800 bg-slate-900/70 p-5 shadow-sm shadow-slate-900/60"
          >
            <h3 className="text-sm font-semibold text-emerald-300">For kommuner</h3>
            <p className="mt-2 text-sm text-slate-200">
              Aggregert innsikt om funksjon og etterlevelse – uten nye
              journalsystemer. Tablaid spiller på lag med det dere har.
            </p>
            <ul className="mt-3 space-y-1.5 text-xs text-slate-300">
              <li>• Pilotoppsett: 25 brukere per kommune</li>
              <li>• Tidlige signaler og bedre ressursutnyttelse</li>
              <li>• Under anbudsgrensen – med tydelig læringsagenda</li>
            </ul>
            <div className="mt-4">
              <Link
                href="/kontakt"
                className="text-xs font-medium text-emerald-300 hover:text-emerald-200"
              >
                Les mer om pilot →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SmartTagSection() {
  return (
    <section className="bg-slate-950 pb-14 pt-4 sm:pb-16 sm:pt-2 lg:pb-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-xl">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-5 shadow-md shadow-slate-900/80">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-emerald-300">
                  SmartTag
                </p>
                <h3 className="mt-1 text-lg font-semibold text-slate-50">
                  NFC-etiketter som gjør logging like enkelt som å ta medisinen.
                </h3>
              </div>
              <div className="hidden h-16 w-16 flex-none items-center justify-center overflow-hidden rounded-2xl border border-slate-700 bg-slate-900 sm:flex">
                <img
                  src="/SmartTag.png"
                  alt="SmartTag NFC illustrasjon"
                  className="h-full w-full object-contain"
                />
              </div>
            </div>

            <p className="mt-3 text-sm text-slate-200">
              Med SmartTag kan brukeren logge inntak ved å berøre mobilen mot en
              NFC-etikett på dosetten eller medisinesken. Ingen menyer – bare et
              faktisk inntak som registreres.
            </p>

            <ul className="mt-3 space-y-1.5 text-xs text-slate-300">
              <li>• Fjerner friksjon ved registrering av legemiddelbruk</li>
              <li>• Gir pålitelig data om faktisk inntak – ikke bare planer</li>
              <li>• Kan bestilles som startpakke for piloter og privatbruk</li>
            </ul>

            <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
              <Link
                href="/kontakt"
                className="inline-flex items-center justify-center rounded-full border border-emerald-500/60 px-4 py-2 text-xs font-semibold text-emerald-300 hover:bg-emerald-500/10"
              >
                Bestill SmartTag-pakke
              </Link>
              <button
                type="button"
                className="text-xs font-medium text-slate-400 hover:text-slate-200"
              >
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function NeedsSection() {
  return (
    <section className="bg-slate-950 py-14 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
            Dokumenterte behov i helsetjenesten
          </h2>
          <p className="mt-3 text-sm text-slate-300 sm:text-base">
            Norske tilsynsrapporter, strategier og faglige vurderinger peker på
            de samme utfordringene: manglende oversikt over faktisk
            legemiddelbruk, lite systematikk i funksjonsdata – og utilstrekkelig
            involvering av pårørende.
          </p>
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-5 shadow-sm shadow-slate-900/60">
            <p className="text-xs font-semibold uppercase tracking-wide text-emerald-300">
              Legemiddelbruk
            </p>
            <p className="mt-2 text-sm text-slate-200">
              Tilsyn viser risiko ved uklare lister, lite oppfølging og fravær
              av system for faktisk etterlevelse hjemme.
            </p>
            <p className="mt-3 text-xs text-slate-400">
              Tablaid gir innsikt der legemidlene faktisk tas – i hjemmet.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-5 shadow-sm shadow-slate-900/60">
            <p className="text-xs font-semibold uppercase tracking-wide text-emerald-300">
              Funksjon & skrøpelighet
            </p>
            <p className="mt-2 text-sm text-slate-200">
              Kommunene etterlyser løpende innsikt – ikke kun enkeltmålinger
              eller skjemaer fylt ut ved enkeltbesøk.
            </p>
            <p className="mt-3 text-xs text-slate-400">
              Helsekompasset er laget for korte, daglige datapunkter som gir
              trender.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-5 shadow-sm shadow-slate-900/60">
            <p className="text-xs font-semibold uppercase tracking-wide text-emerald-300">
              Pårørende som ressurs
            </p>
            <p className="mt-2 text-sm text-slate-200">
              Pårørende sitter med verdifulle observasjoner som sjelden blir
              systematisk fanget opp.
            </p>
            <p className="mt-3 text-xs text-slate-400">
              Tablaid strukturerer disse signalene – og deler dem med brukerens
              samtykke.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function VoicesSection() {
  return (
    <section className="bg-slate-950 py-14 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
            Erfaringer fra helsetjenesten
          </h2>
          <p className="mt-3 text-sm text-slate-300 sm:text-base">
            Tablaid er utviklet med innsikt fra kommunale tjenester, fastleger,
            sykepleiere og pårørende. Pilotene skal dokumentere både
            pasientsikkerhet, pårørendestøtte og ressursbruk.
          </p>
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          <figure className="rounded-3xl border border-slate-800 bg-slate-900/70 p-5">
            <blockquote className="text-sm text-slate-100">
              «Vi trenger verktøy som viser utvikling mellom vedtak og vedtak –
              ikke bare et øyeblikksbilde når vi er på hjemmebesøk.»
            </blockquote>
            <figcaption className="mt-3 text-xs text-slate-400">
              Kommunal leder, hjemmebaserte tjenester
            </figcaption>
          </figure>

          <figure className="rounded-3xl border border-slate-800 bg-slate-900/70 p-5">
            <blockquote className="text-sm text-slate-100">
              «Pårørende sitter ofte med nøkkelinformasjon. Hvis vi kan gjøre det
              enklere å dele den systematisk, kan vi oppdage funksjonsfall
              tidligere.»
            </blockquote>
            <figcaption className="mt-3 text-xs text-slate-400">
              Sykepleier med ansvar for legemiddelgjennomgang
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
