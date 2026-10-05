// app/personvern/page.tsx
export default function PersonvernPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20">
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Personvern og informasjonssikkerhet i Tablaid
        </h1>

        <p className="mt-4 text-sm text-slate-200 sm:text-base">
          Tablaid er utviklet for å styrke samspill mellom brukere, pårørende
          og kommunale helsetjenester – innenfor rammene av gjeldende regelverk
          for personvern og informasjonssikkerhet.
        </p>

        <section className="mt-8 space-y-6 text-sm text-slate-200 sm:text-base">
          <div>
            <h2 className="text-lg font-semibold text-slate-50">
              Behandlingsansvar og databehandlere
            </h2>
            <p className="mt-2">
              I pilotfasen vil Tablaid AS normalt være databehandler på vegne
              av den kommunen som deltar i piloten, eller behandle data på
              grunnlag av samtykke fra brukeren. Endelig rollefordeling
              avklares i egne avtaler med kommunen og beskrives i
              databehandleravtale.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-slate-50">
              Hvilke opplysninger behandles?
            </h2>
            <p className="mt-2">
              Tablaid behandler i hovedsak:
            </p>
            <ul className="mt-2 list-disc pl-5">
              <li>Opplysninger om legemiddelbruk og påminnelser</li>
              <li>
                Svar på korte, funksjonsrelaterte spørsmål (helsekompasset)
              </li>
              <li>
                Valgfri deling av innsikt med pårørende og/eller kommune
              </li>
              <li>
                Tekniske loggdata som er nødvendige for drift og sikkerhet
              </li>
            </ul>
            <p className="mt-2">
              Opplysningene brukes for å gi brukeren oversikt, støtte
              pårørende og – der det er avtalt – gi kommunen aggregert innsikt
              om trender.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-slate-50">
              Rettslig grunnlag (GDPR)
            </h2>
            <p className="mt-2">
              Behandling av personopplysninger i Tablaid skal alltid ha et
              gyldig behandlingsgrunnlag etter GDPR. I piloter vil dette typisk
              være samtykke, eller at kommunen bruker løsningen som del av sin
              tjenesteyting med hjemmel i helselovgivningen. Detaljer
              spesifiseres i avtaler med kommunen og i informasjon til
              brukerne.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-slate-50">
              Normen og informasjonssikkerhet
            </h2>
            <p className="mt-2">
              Tablaid utvikles med utgangspunkt i kravene i Norm for
              informasjonssikkerhet i helse- og omsorgstjenesten
              (&quot;Normen&quot;). Det innebærer blant annet bruk av kryptering,
              tilgangsstyring, logging og rutiner for håndtering av avvik.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-slate-50">
              EU Data Act og videre utvikling
            </h2>
            <p className="mt-2">
              Vi følger utviklingen knyttet til EU Data Act og annen relevant
              regulering for deling av data. Tablaid skal være et verktøy som
              gjør det enklere å dele data på en trygg og rettferdig måte – med
              brukeren i centrum og klare avtaler mellom partene.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-slate-50">
              Dine rettigheter
            </h2>
            <p className="mt-2">
              Brukere av Tablaid har rett til innsyn, retting og i noen tilfeller
              sletting av opplysninger som er lagret om dem. I pilotprosjekter
              vil praktisk håndtering av dette beskrives i informasjonen du
              får når du tas inn i piloten.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-slate-50">
              Kontakt
            </h2>
            <p className="mt-2">
              Har du spørsmål om personvern eller sikkerhet i Tablaid, kan du
              kontakte oss via kontaktskjemaet på nettsiden eller på e-post
              (kontaktinformasjon kommer i pilotinformasjonen).
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
