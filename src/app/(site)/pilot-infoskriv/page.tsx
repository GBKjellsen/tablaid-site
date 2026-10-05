"use client";
import PageLayout from "@/components/layout/PageLayout";
import Image from "next/image";

export default function PilotInfoskriv() {
  return (
    <PageLayout>
      <div className="mx-auto max-w-3xl px-6 py-16 text-slate-200 space-y-10 print:mt-0">

        {/* LOGO */}
        <div className="flex justify-center mb-8">
          <Image
            src="/Tablaid-Logo-svart-tekst.png"
            alt="Tablaid logo"
            width={160}
            height={40}
            className="opacity-90"
          />
        </div>

        {/* TITLE */}
        <h1 className="text-4xl font-bold text-center">
          Tablaid – Kommunepilot 2026
        </h1>

        <p className="text-center text-lg text-slate-300 font-medium mt-2">
          Digitalt samhandlingsverktøy for tryggere, tidligere og mer treffsikre tjenester
        </p>

        <p className="text-center text-slate-400 italic mt-1">
          Tidlige signaler. Bedre beslutninger. Tryggere tjenester.
        </p>

        <hr className="border-slate-700 my-8" />

        {/* ------------------------------------------------------ */}
        {/* 1. FORMÅL */}
        {/* ------------------------------------------------------ */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">1. Formål</h2>
          <p>
            Kommunene står i økende press: flere eldre, høy kompleksitet og mangel på
            helsepersonell. Tablaid gir dere et nytt beslutningsgrunnlag – direkte basert på 
            innbyggernes egenrapporterte helse, funksjon og legemiddelrutiner.
          </p>

          <p>
            Tablaid hjelper dere å oppdage tidlige endringer, prioritere riktigere og styrke
            samhandlingen mellom innbygger, pårørende og tjenesteapparatet. Mange innbyggere
            bor langt unna sine nærmeste og langt fra kommunens tjenestepunkter – Tablaid 
            gir dere en trygg kanal for oppdatert innsikt i hverdagen deres.
          </p>

          <p>
            Vår legemiddelmodul gir innbyggerne et digitalt alternativ til dagens
            medisindispensere – uten kostbar infrastruktur, uten kalibreringsproblemer og
            med langt lavere administrativ belastning. Dere får et system som støtter 
            egenmestring, logger rutiner og gir bedre innsikt før behov eskalerer.
          </p>
        </section>

        {/* ------------------------------------------------------ */}
        {/* 2. KOMMUNENS BIDRAG */}
        {/* ------------------------------------------------------ */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">2. Kommunens bidrag</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Rekruttering av minimum 25 deltakere (gjerne via treffsenter, friskliv eller forebyggende tjenester)</li>
            <li>Én kontaktperson for koordinering og evaluering</li>
            <li>
              En oversikt over kommunale tjenester som Tablaid legger inn i appen, slik at 
              innbyggere får målrettet informasjon og ev. bookingstøtte der det er relevant
            </li>
          </ul>
        </section>

        {/* ------------------------------------------------------ */}
        {/* 3. DELTAKERNE MOTAR */}
        {/* ------------------------------------------------------ */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">3. Deltakerne mottar</h2>

          <ul className="list-disc pl-5 space-y-2">
            <li>Velkomstpakke med SmartTags for enkel medisinsk logging</li>
            <li>Full tilgang til Tablaid-appen i pilotperioden</li>
            <li>Støtte, onboarding og veiledning</li>
            <li>Mulighet til å invitere pårørende for trygg og samtykkebasert innsiktdeling</li>
          </ul>
        </section>

        {/* ------------------------------------------------------ */}
        {/* 4. KOMMUNENS DASHBOARD */}
        {/* ------------------------------------------------------ */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">4. Kommunens dashboard</h2>
          <p>
            Dere får tilgang til et eget dashboard med aggregert innsikt 
            (aktivert ved tilstrekkelig antall brukere for å ivareta personvern).
          </p>

          <p>Dashboardet viser:</p>

          <ul className="list-disc pl-5 space-y-2">
            <li>Funksjonsutvikling over tid (CFS/ICOPE-inspirert)</li>
            <li>Etterlevelse av legemiddelrutiner</li>
            <li>Endringer i søvn, energi, kognitiv opplevelse og psykososiale markører</li>
            <li>Tidlige faresignaler og risikoprofiler</li>
            <li>Kommunale utviklingstrekk basert på anonymiserte data</li>
          </ul>
        </section>

        {/* ------------------------------------------------------ */}
        {/* 5. PERSONVERN */}
        {/* ------------------------------------------------------ */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">5. Personvern & DPIA</h2>

          <p>
            Tablaid følger GDPR, Normen og prinsippene for innebygd personvern.  
            Før oppstart leverer vi:
          </p>

          <ul className="list-disc pl-5 space-y-2">
            <li>DPIA (personvernkonsekvensvurdering)</li>
            <li>Databehandleravtale (DPA)</li>
            <li>Risikovurdering og oversikt over tekniske og organisatoriske tiltak</li>
          </ul>

          <p>
            All deling skjer med eksplisitt samtykke, og kun aggregert data 
            er tilgjengelig i dashboardet.
          </p>
        </section>

        {/* ------------------------------------------------------ */}
        {/* 6. FUNKSJONALITET (UTVIKLES LØPENDE) */}
        {/* ------------------------------------------------------ */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">6. Funksjonalitet som utvikles fortløpende</h2>

          <p>
            Tablaid utvikles agilt og iterativt i tett samarbeid med pilotkommunene.  
            Ønsker dere nye funksjoner, prioriterer vi dette som del av piloten.
          </p>

          <p>Under piloten kan vi utforske:</p>

          <ul className="list-disc pl-5 space-y-2">
            <li>Digital tjenesteforespørsel direkte fra innbygger</li>
            <li>Forespørsel med vedlagt funksjons- og trenddata</li>
            <li>Informasjonskort og varslinger om relevante tilbud i kommunen</li>
            <li>Mer avansert støtte for legemiddeloppfølging</li>
            <li>Moduler for forebyggende seniorhelse og trygghetstiltak</li>
          </ul>
        </section>

        {/* ------------------------------------------------------ */}
        {/* 7. PILOTGJENNOMFØRING */}
        {/* ------------------------------------------------------ */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">7. Pilotgjennomføring</h2>

          <p>
            Varighet: <strong>3 måneder</strong><br />
            Oppstart: etter avtale<br />
            Evalueringsmøte gjennomføres ved pilotens slutt
          </p>

          <p>
            Tablaid bistår med rekruttering, materiell, oppfølging og løpende teknisk støtte.
          </p>
        </section>

        {/* ------------------------------------------------------ */}
        {/* 8. PRIS */}
        {/* ------------------------------------------------------ */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">8. Pris</h2>

          <p>
            <strong>Pilotpris: 25 000 kr</strong>  
            (inkluderer SmartTags, drift, onboarding, dashboard og support)
          </p>

          <p>
            Kommunen beholder tjenesten kostnadsfritt ut 2026.  
            Fra 2027 er lisensprisen: <strong>100 000 kr per år</strong>  
            (alle innbyggere i kommunen får tilgang).
          </p>
        </section>

        {/* ------------------------------------------------------ */}
        {/* 9. KONTAKT */}
        {/* ------------------------------------------------------ */}
        <section className="space-y-2">
          <h2 className="text-2xl font-semibold">9. Kontakt</h2>
          <p>
            Gaute Birkeland Kjellsen<br/>
            Daglig leder, Tablaid AS<br/>
            gaute@tablaid.no
          </p>
        </section>


        {/* PRINT BUTTON */}
        <button
          onClick={() => window.print()}
          className="button-outline mx-auto mt-10 block"
        >
          Skriv ut infoskriv (PDF)
        </button>
      </div>
    </PageLayout>
  );
 
}
