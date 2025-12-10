import Link from "next/link";
import Image from "next/image";
import { GlowImage } from "@/components/Glow";

/* -------------------------------------------------------------------------- */
/*                                   PAGE                                      */
/* -------------------------------------------------------------------------- */

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AudienceSection />
      <FeaturesSection />
      <NeedsSection />
      <VoicesSection />
      <PlatformsSection />
    </>
  );
}

/* -------------------------------------------------------------------------- */
/*                               HERO SECTION                                 */
/* -------------------------------------------------------------------------- */

function HeroSection() {
  return (
    <section className="relative overflow-hidden section-dark pb-20 pt-24">
      {/* Glow */}
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-72 
                      bg-emerald-500/20 blur-[120px]" />

      <div className="mx-auto flex max-w-[var(--max-w)] flex-col-reverse gap-12 px-6 
                      lg:flex-row lg:items-center">
        
        {/* Text */}
        <div className="flex-1">
          <span className="badge">Pilot våren 2026 • Tablaid</span>

          <h1 className="mt-4 text-4xl font-bold text-white sm:text-5xl">
            En digital{" "}
            <span className="text-emerald-400">helse- og legemiddelassistent</span>{" "}
            for innbyggere, pårørende og kommuner.
          </h1>

          <p className="mt-4 text-lg text-[var(--text-secondary)]">
            Tablaid kombinerer legemiddelassistent, helsekompass og
            pårørendestøtte for å fange opp tidlige signaler om funksjonsfall
            – før behovet for tjenester øker.
          </p>

       <Link href="/kommuner" className="button-primary">
  Kommunepilot 2026
</Link>

 <Link href="/innbyggere" className="button-secondary">
  Se hvordan Tablaid fungerer
</Link>


          <p className="mt-4 text-xs text-[var(--text-secondary)]">
            Du velger selv om du vil dele innsikt med pårørende eller kommunen.
          </p>
        </div>

        {/* Image */}
        <div className="flex flex-1 justify-center">
          <div className="relative w-full max-w-md overflow-hidden rounded-3xl 
                          border border-white/10 bg-[#0F172A]/70 shadow-[0_0_40px_-10px_#10b981]">
           
            <GlowImage
              src="/app-triple.png"
              alt="Tablaid app"
              width={900}
              height={700}
              className="object-cover"
            />
          </div>
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
    <section className="section-lighter py-10">
      <div className="mx-auto max-w-[var(--max-w)] px-6">

        <h2 className="text-3xl font-semibold text-white">
          Én løsning – tre perspektiver
        </h2>

        <p className="mt-2 text-[var(--text-secondary)] max-w-xl">
          Tablaid er laget for samspill mellom innbygger, pårørende og kommunen.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          
          <AudienceCard
            title="For innbyggere"
            text="En trygg og enkel oversikt over helse og legemidler."
            bullets={[
              "Oversiktlig funksjonsdashboard",
              "Daglig helsekompass",
              "Valgfri deling av innsikt",
            ]}
            href="/innbyggere"
          />

          <AudienceCard
            title="For pårørende"
            text="Innsikt uten overvåking – kun når innbygger ønsker det."
            bullets={[
              "Tidlige signaler",
              "Bedre dialog og oversikt",
              "Støtte uten å overstyre",
            ]}
            href="/parorende"
          />

          <AudienceCard
            title="For kommuner"
            text="Tidlige signaler og bedre grunnlag for riktige tjenester."
            bullets={[
              "Pilotoppsett for 25 innbyggere",
              "Trendinnsikt over tid",
              "Under anbudsgrensen",
            ]}
            href="/kommuner"
          />

        </div>
      </div>
    </section>
  );
}

function AudienceCard({
  title,
  text,
  bullets,
  href,
}: {
  title: string;
  text: string;
  bullets: string[];
  href: string;
}) {

  return (
    <div className="card">
      <h3 className="text-sm text-emerald-300 font-semibold">{title}</h3>
      <p className="mt-2 text-[var(--text-secondary)]">{text}</p>

      <ul className="mt-3 space-y-1 text-sm text-[var(--text-secondary)]">
        {bullets.map((b, i) => (
          <li key={i}>• {b}</li>
        ))}
      </ul>

      <Link
        href={href}
        className="mt-4 inline-block text-sm text-emerald-300 hover:text-emerald-200"
      >
        Les mer →
      </Link>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*                          FEATURES SECTION                                  */
/* -------------------------------------------------------------------------- */

function FeaturesSection() {
  return (
    <>
      <section className="section-dark py-20">
        <div className="mx-auto max-w-[var(--max-w)] px-6">

          <h2 className="text-3xl font-semibold text-white text-center">
            Nøkkelfunksjoner i Tablaid
          </h2>

          <p className="mt-2 text-center text-[var(--text-secondary)] max-w-xl mx-auto">
            Tre funksjoner som sammen gir et komplett bilde av helse og etterlevelse.
          </p>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

            <FeatureCard
  title="SmartTag"
  text="Gjør medisinhverdagen enklere med et raskt NFC-tapp. Perfekt for presis etterlevelse – uten stress."
  bullets={[
    "Tæpp for loggføring",
    "Faktiske inntaksdata",
    "Smartifiserer medisinskap, esker og dosetter",
  ]}
  image="/SmartTag.png"
  cta={{
    label: "Bestill SmartTags",
    href: "/smarttag",
    sub: "Betaling skjer sikkert via Stripe",
  }}
/>


            <FeatureCard
              title="Helsekompass"
              text="Daglige mikromålinger som avslører tidlige signaler om endringer."
              bullets={[
                "8-dagers rotasjon",
                "Korte spørsmål",
                "Bedre trendinnsikt",
              ]}
            />

            <FeatureCard
              title="Legemiddelassistent"
              text="Påminnelser, oversikt og trygghet – enklere etterlevelse."
              bullets={[
                "Skanning av medisiner",
                "Automatisk dosettoversikt",
                "Varsler ved manglende inntak",
              ]}
            />

          </div>
        </div>
      </section>


       </>
  );
}


function FeatureCard({
  title,
  text,
  bullets,
  image,
  cta,
}: {
  title: string;
  text: string;
  bullets: string[];
  image?: string;
  cta?: { label: string; href: string; sub?: string };
}) {


  return (
    <div className="card">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-semibold text-emerald-300 uppercase tracking-wide">
          {title}
        </h3>

        {image && (
          <Image src={image} alt="Icon" width={40} height={40} />
        )}
      </div>

      <p className="text-[var(--text-secondary)] text-sm">{text}</p>

      <ul className="mt-4 space-y-1 text-sm text-[var(--text-secondary)]">
        {bullets.map((b, i) => (
          <li key={i}>• {b}</li>
        ))}
      </ul>
      {cta && (
  <div className="mt-6">
    <Link
      href={cta.href}
      className="inline-flex items-center justify-center w-full rounded-full 
                 bg-emerald-500 hover:bg-emerald-400 text-black font-semibold 
                 py-2.5 text-sm transition"
    >
      {cta.label} →
    </Link>

    {cta.sub && (
      <p className="text-xs text-[var(--text-secondary)] mt-1 text-center">
        {cta.sub}
      </p>
    )}
  </div>
)}

    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*              NEEDS SECTION (dokumenterte utfordringer)                     */
/* -------------------------------------------------------------------------- */

function NeedsSection() {
  return (
    <section className="section-lighter py-20">
      <div className="mx-auto max-w-[var(--max-w)] px-6">

        <h2 className="text-3xl font-semibold text-white">
          Dokumenterte behov i helsetjenesten
        </h2>

        <p className="mt-3 text-[var(--text-secondary)] max-w-xl">
          Tilsyn og strategidokumenter peker på tre gjennomgående utfordringer.
        </p>

        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <NeedCard
            title="Legemiddelbruk"
            text="Risiko ved uklare lister og fravær av system for faktisk etterlevelse hjemme."
            bottom="Tablaid gir innsikt der legemidlene faktisk tas – i hjemmet."
          />

          <NeedCard
            title="Funksjon & skrøpelighet"
            text="Kommunene etterlyser løpende innsikt – ikke sjeldne enkeltmålinger."
            bottom="Helsekompasset gir korte daglige datapunkter som avslører trender."
          />

          <NeedCard
            title="Pårørende som ressurs"
            text="Viktige observasjoner kan deles trygt med samtykke fra innbygger."
            bottom="Tablaid styrker samarbeid rundt innbyggeren."
          />
        </div>

      </div>
    </section>
  );
}

function NeedCard({
  title,
  text,
  bottom,
}: {
  title: string;
  text: string;
  bottom: string;
}) {

  return (
    <div className="card">
      <p className="text-sm text-emerald-300 uppercase">{title}</p>
      <p className="mt-2 text-[var(--text-secondary)]">{text}</p>
      <p className="mt-3 text-sm text-[var(--text-secondary)]">{bottom}</p>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*                             VOICES SECTION                                 */
/* -------------------------------------------------------------------------- */

function VoicesSection() {
  return (
    <section className="section-dark py-20">
      <div className="mx-auto max-w-[var(--max-w)] px-6">
        <h2 className="text-3xl font-semibold text-white">
          Myndighetenes budskap
        </h2>

        <p className="mt-3 text-[var(--text-secondary)] max-w-xl">
          Tablaid bygger på føringer fra Helsedirektoratet, KS og nasjonale reformer.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">

          <QuoteCard 
            quote="Utvikling over tid er avgjørende for å identifisere økende risiko tidlig."
            source="Helsedirektoratet, Samhandlingsstrategi 2024–2030"
          />

          <QuoteCard 
            quote="Pasienter og pårørende er en ressurs i forbedringsarbeidet."
            source="Helsetilsynet, Tilsynsmelding 2023"
          />

          <QuoteCard 
            quote="Det er behov for å styrke helsepersonells kunnskap om legemidler."
            source="Helsetilsynet, Tilsynsmelding 2025"
          />

          <QuoteCard 
            quote="Hovedmålet er å flytte hjemmetjenestene fra reaktiv til proaktiv oppfølging."
            source="Regjeringens Bo Trygt Hjemme-reform"
          />

        </div>
      </div>
    </section>
  );
}

function QuoteCard({
  quote,
  source,
}: {
  quote: string;
  source: string;
}) {

  return (
    <div className="card">
      <p className="italic text-[var(--text-secondary)]">{quote}</p>
      <p className="mt-2 text-xs text-[var(--text-secondary)]">{source}</p>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*                        PLATFORM ANNOUNCEMENT SECTION                        */
/* -------------------------------------------------------------------------- */

function PlatformsSection() {
  return (
    <section className="section-soft py-20">
      <div className="mx-auto max-w-[var(--max-w)] px-6 text-center">
        
        <h2 className="text-3xl font-semibold text-white">
          Kommer på alle plattformer
        </h2>

        <p className="mt-4 text-[var(--text-secondary)] max-w-xl mx-auto text-lg">
          Den fullverdige Tablaid-appen lanseres for 
          <span className="text-emerald-400 font-semibold"> iOS</span> og 
          <span className="text-emerald-400 font-semibold"> Android</span> i 2026.
          Pilotkommuner får tilgang til en moderne web-app som fungerer på alle enheter.
        </p>

      </div>
    </section>
  );
}
