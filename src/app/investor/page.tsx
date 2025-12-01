import type { Metadata } from "next";
import Link from "next/link";
import BusinessModelCanvas from "../components/BusinessModelCanvas";

export const metadata: Metadata = {
  title: "For investorer – Tablaid",
  description:
    "Tablaid bygger en digital helse- og legemiddelassistent for tidlig oppdagelse av funksjonsfall. Les mer om investeringsmuligheten og pilotplanene våre.",
};

export default function InvestorPage() {
  return (
    <main className="bg-slate-950 text-slate-50">
      {/* HERO / INTRO */}
      <section className="border-b border-slate-800 bg-slate-950/80">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-300">
              For investorer
            </p>
            <h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl">
              Bygg morgendagens forebyggende helsetjenester sammen med Tablaid
            </h1>
            <p className="mt-4 text-sm leading-relaxed text-slate-300 sm:text-base">
              Tablaid utvikler en digital helse- og samhandlingsplattform som
              kombinerer legemiddelassistent, funksjonsdata og pårørendestøtte.
              Målet er å gi kommuner, pårørende og brukere et helt nytt grunnlag
              for å oppdage funksjonsfall tidlig – før behovet for tjenester eskalerer.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Link
                href="/kontakt"
                className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-5 py-2.5 text-xs font-semibold text-slate-900 hover:bg-emerald-400"
              >
                Book en prat om Tablaid
              </Link>
              <p className="text-xs text-slate-400">
                Vi søker investorer som kombinerer kapital med engasjement for
                helse, digitalisering og samfunnsnytte.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TIMING / HVORFOR NÅ */}
      <section className="border-b border-slate-800 bg-slate-950/90">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
              Hvorfor investere i Tablaid nå?
            </h2>
            <p className="mt-3 text-sm text-slate-300 sm:text-base">
              De neste 3–6 årene vil definere hvordan norsk kommunehelse
              digitaliseres. Tablaid posisjonerer seg midt i denne overgangen –
              med en løsning som favner legemidler, funksjon og pårørende.
            </p>
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
              <h3 className="text-sm font-semibold text-emerald-300">
                1. Demografisk trykk
              </h3>
              <p className="mt-2 text-sm text-slate-300">
                Norge står i et langsiktig demografisk skifte. Antallet eldre
                øker raskere enn kapasiteten i helse- og omsorgstjenestene, og
                kommunene må jobbe mer forebyggende for å henge med.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
              <h3 className="text-sm font-semibold text-emerald-300">
                2. Behov for tidlige signaler
              </h3>
              <p className="mt-2 text-sm text-slate-300">
                Helsedirektoratet, KS og kommunale fagmiljøer peker på behovet
                for verktøy som fanger opp endringer mellom hjemmebesøkene, ikke
                bare enkelmålinger. Egenrapporterte data får en stadig viktigere rolle.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
              <h3 className="text-sm font-semibold text-emerald-300">
                3. Økende digital modenhet
              </h3>
              <p className="mt-2 text-sm text-slate-300">
                Eldre bruker i økende grad smarttelefon og nettbrett. Det åpner
                for løsninger som Tablaid, der egenrapportering, støtte fra
                pårørende og deling av innsikt blir en naturlig del av hverdagen.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
              <h3 className="text-sm font-semibold text-emerald-300">
                4. Reguleringene går i riktig retning
              </h3>
              <p className="mt-2 text-sm text-slate-300">
                European Health Data Space (EHDS) og nasjonale føringer legger
                til rette for trygg og standardisert bruk av pasientgenererte
                data – som egenrapportering og funksjonsmålinger. Det styrker
                mulighetene for datadrevne beslutningsstøtteverktøy som Tablaid.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* HVA TABLAID LØSER */}
      <section className="border-b border-slate-800 bg-slate-950">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
              Hva Tablaid gjør – i praksis
            </h2>
            <p className="mt-3 text-sm text-slate-300 sm:text-base">
              Tablaid kombinerer tre byggesteiner til én sammenhengende tjeneste
              for brukere, pårørende og kommuner.
            </p>
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
              <h3 className="text-sm font-semibold text-emerald-300">
                1. Legemiddelassistent
              </h3>
              <p className="mt-2 text-sm text-slate-300">
                Smart påminnelse, scanning og NFC-basert logging gir oversikt
                over hva som faktisk tas – ikke bare hva som er ordinert.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
              <h3 className="text-sm font-semibold text-emerald-300">
                2. Helsekompass & funksjon
              </h3>
              <p className="mt-2 text-sm text-slate-300">
                Enkle, daglige sjekk-inn og periodiske funksjonsmålinger fanger
                opp endringer i energi, mestring og funksjonsnivå over tid.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
              <h3 className="text-sm font-semibold text-emerald-300">
                3. Pårørendestøtte & deling
              </h3>
              <p className="mt-2 text-sm text-slate-300">
                Pårørende får oversikt uten å måtte følge opp hver dag, og kan
                bidra tidligere når noe er i endring – med et felles språk mot
                kommunen og fastlege.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MARKED & FORRETNINGSMODELL */}
      <section className="border-b border-slate-800 bg-slate-950/95">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
              Marked og forretningsmodell
            </h2>
            <p className="mt-3 text-sm text-slate-300 sm:text-base">
              Tablaid bygger en modell som gjør det mulig å starte smått,
              dokumentere effekt og skalere kontrollert sammen med kommuner,
              brukere og pårørende.
            </p>
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
              <h3 className="text-sm font-semibold text-emerald-300">
                Kommunelisens
              </h3>
              <p className="mt-2 text-sm text-slate-300">
                Kommuner kan lisensiere Tablaid for utvalgte målgrupper –
                eksempelvis 25 brukere per distrikt. Prisingen tilpasses
                anbudsgrensene og muligheten for relasjonsbaserte piloter.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
              <h3 className="text-sm font-semibold text-emerald-300">
                Pårørendelisenser
              </h3>
              <p className="mt-2 text-sm text-slate-300">
                Pårørende kan få tilgang til innsikt, visualiseringer og varsler
                – enten som del av kommunale avtaler eller via rimelige
                privatabonnement.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
              <h3 className="text-sm font-semibold text-emerald-300">
                SmartTag og startpakker
              </h3>
              <p className="mt-2 text-sm text-slate-300">
                NFC-baserte SmartTags, klistremerker og enkle startpakker gir
                lav terskel for å komme i gang – både for piloter og privatbruk.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
              <h3 className="text-sm font-semibold text-emerald-300">
                Data og innsikt (på sikt)
              </h3>
              <p className="mt-2 text-sm text-slate-300">
                Når løsningen er moden og godt regulert, kan anonymiserte og
                aggregerte data gi verdi inn i forskningsprosjekter, innovasjon
                og tjenesteutvikling – innenfor tydelige etiske og juridiske rammer.
              </p>
            </div>
          </div>
        </div>
      </section>
<BusinessModelCanvas />

      {/* PILOT & MILEPÆLER */}
<section className="border-b border-slate-800 bg-slate-950">
  <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
    <div className="max-w-3xl">
      <h2 className="text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
        Pilotplan og milepæler
      </h2>
      <p className="mt-3 text-sm text-slate-300 sm:text-base">
        Tablaid følger en strukturert pilotstrategi der vi går fra lokal test
        til nasjonal læringspilot i løpet av første halvår 2026.
      </p>
    </div>

    <div className="mt-8 grid gap-6 sm:grid-cols-3">

      {/* Fase 1 */}
      <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5 text-sm text-slate-300">
        <p className="text-xs font-semibold uppercase tracking-wide text-emerald-300">
          Fase 1 – Februar 2026
        </p>
        <p className="mt-2 font-semibold text-slate-50">Østensjø-bydelen</p>
        <p className="mt-2">
          Første brukertest i samarbeid med Bydel Østensjø. Fokus på daglig bruk,
          funksjonsdata, deling og innsiktsbehov. Ambisjon: 20–25 deltakere.
        </p>
      </div>

      {/* Fase 2 */}
      <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5 text-sm text-slate-300">
        <p className="text-xs font-semibold uppercase tracking-wide text-emerald-300">
          Fase 2 – Mars–Juni 2026
        </p>
        <p className="mt-2 font-semibold text-slate-50">
          20 kommuner / 500 brukere
        </p>
        <p className="mt-2">
          Læringspilot med 20 kommuner og ca. 25 brukere per kommune.
          Tydelig læringsagenda og måling av funksjonsendring, etterlevelse og
          pårørendestøtte. Fokus på verdibevis og effekt.
        </p>
      </div>

      {/* Fase 3 */}
      <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5 text-sm text-slate-300">
        <p className="text-xs font-semibold uppercase tracking-wide text-emerald-300">
          Fase 3 – H2 2026 →
        </p>
        <p className="mt-2 font-semibold text-slate-50">
          Skalering og partnere
        </p>
        <p className="mt-2">
          Videre utrulling til flere kommuner. Integrasjon mot VKP,
          samarbeid med fastlegeordningen og potensielle forskningsmiljøer.
        </p>
      </div>

    </div>
  </div>
</section>


      {/* INVESTOR-DOWNLOAD / SKJEMA */}
      <section className="bg-slate-950/95">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
              Investor-dokumenter og videre dialog
            </h2>
            <p className="mt-3 text-sm text-slate-300 sm:text-base">
              Vi har utarbeidet et sett med korte, konsise dokumenter for
              investorer. Her finner du blant annet one-pager, two-pager,
              Business Model Canvas, Value Proposition Canvas og en enkel
              endringsteori for Tablaid.
            </p>
            <p className="mt-2 text-sm text-slate-400">
              Fyll inn skjemaet for å få dokumentene tilsendt på e-post. Dette
              er uforpliktende og gir oss samtidig mulighet til å følge deg opp
              på en strukturert måte.
            </p>
          </div>

          <div className="mt-8 rounded-2xl border border-slate-800 bg-slate-900/70 p-6 sm:p-7">
            <form className="grid gap-4 sm:grid-cols-2">
              <div className="sm:col-span-1">
                <label className="block text-xs font-medium text-slate-300">
                  Navn
                </label>
                <input
                  type="text"
                  className="mt-1 w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-50 placeholder-slate-500 focus:border-emerald-400 focus:outline-none"
                  placeholder="Fornavn og etternavn"
                />
              </div>

              <div className="sm:col-span-1">
                <label className="block text-xs font-medium text-slate-300">
                  E-post
                </label>
                <input
                  type="email"
                  className="mt-1 w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-50 placeholder-slate-500 focus:border-emerald-400 focus:outline-none"
                  placeholder="din@epost.no"
                />
              </div>

              <div className="sm:col-span-1">
                <label className="block text-xs font-medium text-slate-300">
                  Type investor
                </label>
                <select className="mt-1 w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-50 focus:border-emerald-400 focus:outline-none">
                  <option>Velg</option>
                  <option>Privat investor</option>
                  <option>Engleinvestor</option>
                  <option>Fond</option>
                  <option>Selskap / corporate</option>
                </select>
              </div>

              <div className="sm:col-span-1">
                <label className="block text-xs font-medium text-slate-300">
                  Investeringsnivå (uforpliktende)
                </label>
                <select className="mt-1 w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-50 focus:border-emerald-400 focus:outline-none">
  <option>Velg</option>
  <option>&lt; 250 000 NOK</option>
    <option>&lt;1 000 000 NOK</option>
  <option>&lt;5 millioner NOK</option>
  <option>&gt; 5 millioner NOK</option>
</select>

              </div>

              <div className="sm:col-span-2">
                <label className="block text-xs font-medium text-slate-300">
                  Interesseområde
                </label>
                <select className="mt-1 w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-50 focus:border-emerald-400 focus:outline-none">
                  <option>Velg</option>
                  <option>Helse</option>
                  <option>Digitalisering</option>
                  <option>Velferdsteknologi</option>
                  <option>Samfunnsnytte</option>
                  <option>Annet</option>
                </select>
              </div>

              <div className="sm:col-span-2">
                <label className="block text-xs font-medium text-slate-300">
                  Eventuell kort kommentar
                </label>
                <textarea
                  rows={3}
                  className="mt-1 w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-50 placeholder-slate-500 focus:border-emerald-400 focus:outline-none"
                  placeholder="F.eks. interesseområde, bakgrunn eller hvordan du ønsker å bidra."
                />
              </div>

              <div className="sm:col-span-2 mt-2 flex flex-wrap items-center justify-between gap-4">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-5 py-2.5 text-xs font-semibold text-slate-900 hover:bg-emerald-400"
                >
                  Send inn og få tilsendt investor-dokumenter
                </button>
                <p className="text-[11px] text-slate-500">
                  Skjemaet er uforpliktende. Vi deler ikke informasjon med tredjeparter.
                </p>
              </div>
            </form>
          </div>

          <div className="mt-8 text-sm text-slate-400">
            <p>
              Du kan også kontakte oss direkte på{" "}
              <a
                href="mailto:post@tablaid.no"
                className="text-emerald-300 hover:text-emerald-200"
              >
                post@tablaid.no
              </a>{" "}
              for å avtale et møte.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
