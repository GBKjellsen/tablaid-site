import Link from "next/link";

const offerDetails = [
	"Navn og beskrivelse av tilbudet",
	"Tema og målgruppe",
	"Hva deltakerne kan forvente",
	"Tidspunkt og sted, eller om tilbudet foregår digitalt",
	"Kontaktinformasjon og eventuell informasjon om påmelding",
	"Andre opplysninger som er nødvendige for å forstå tilbudet",
];

const steps = [
	{
		title: "Registrer organisasjonen",
		text: "Søk om organisasjonskonto og fyll ut opplysningene som kreves for å identifisere og vurdere organisasjonen. Søknaden gjennomgås av Tablaid, og kontoen får tilgang først etter at organisasjonen er verifisert.",
	},
	{
		title: "Beskriv tilbudet",
		text: "Fyll ut informasjon om tilbudet dere ønsker å publisere. Det kan blant annet omfatte:",
		details: offerDetails,
	},
	{
		title: "Send inn til vurdering",
		text: "Organisasjonen og informasjonen om hvert tilbud gjennomgår Tablaids kontrollprosess før publisering.",
	},
	{
		title: "Gjør tilbudet synlig",
		text: "Når tilbudet er godkjent og publisert, kan brukere oppdage det gjennom Tablaid.",
	},
	{
		title: "Følg opp tilbudet",
		text: "Organisasjoner skal kunne administrere informasjon om tilbudene sine og få tilgang til den statistikken som tilbys gjennom organisasjonsløsningen. Detaljene rundt administrasjon og statistikk vil bli beskrevet nærmere når funksjonene er endelig fastsatt.",
	},
];

export default function RegistrerTilbudPage() {
	return (
		<main>
			<HeroSection />
			<StepsSection />
			<CriteriaSection />
			<ResponsibilitySection />
			<CtaSection />
		</main>
	);
}

function HeroSection() {
	return (
		<section className="section-dark mx-[7vw] px-6 py-20 sm:py-24">
			<div className="mx-auto max-w-(--max-w) text-center">
				<h1 className="text-4xl font-bold text-white sm:text-5xl">
					Slik registrerer dere et tilbud
				</h1>
				<p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-(--text-secondary)">
					Her finner dere en oversikt over hvordan en organisasjon registreres
					og hvordan et tilbud sendes inn, vurderes og publiseres i Tablaid.
				</p>
			</div>
		</section>
	);
}

function StepsSection() {
	return (
		<section className="mx-[7vw] py-20 section-lighter">
			<div className="mx-auto max-w-(--max-w) px-6">
				<h2 className="text-3xl font-semibold text-white">
					Fra søknad til publisert tilbud
				</h2>
				<ol className="grid gap-6 mt-8 list-none sm:grid-cols-2">
					{steps.map((step, index) => (
						<li key={step.title} className="card">
							<p className="text-sm font-semibold text-emerald-300">
								Steg {index + 1}
							</p>
							<h3 className="mt-2 text-lg font-semibold text-white">
								{step.title}
							</h3>
							<p className="mt-3 text-(--text-secondary)">{step.text}</p>
							{step.details && (
								<ul className="mt-3 space-y-1 text-sm list-disc list-inside text-(--text-secondary)">
									{step.details.map((detail) => (
										<li key={detail}>{detail}</li>
									))}
								</ul>
							)}
						</li>
					))}
				</ol>
			</div>
		</section>
	);
}

function CriteriaSection() {
	return (
		<section className="mx-[7vw] py-16 section-dark">
			<div className="mx-auto max-w-(--max-w) px-6">
				<h2 className="text-3xl font-semibold text-white">
					Krav før publisering
				</h2>
				<p className="mt-4 max-w-3xl text-(--text-secondary)">
					Organisasjoner og tilbud må vurderes av Tablaid før de publiseres.
					Vi prioriterer tilbud med helserelatert relevans, og ønsker særlig å
					gjøre tilbud fra etablerte og aktive organisasjoner synlige.
				</p>
				<p className="mt-4 text-sm text-slate-400">
					De detaljerte kravene til organisasjoner og tilbud oppdateres senere.
				</p>
			</div>
		</section>
	);
}

function ResponsibilitySection() {
	return (
		<section className="mx-[7vw] py-16 section-lighter">
			<div className="mx-auto max-w-(--max-w) px-6">
				<h2 className="text-3xl font-semibold text-white">
					Kontroll og ansvar
				</h2>
				<p className="mt-4 max-w-3xl text-(--text-secondary)">
					Kontrollen er ikke en garanti for kvaliteten på selve aktiviteten
					eller for at tilbudet passer for alle. Organisasjonen som tilbyr
					aktiviteten, har ansvar for innholdet og gjennomføringen av sitt
					tilbud.
				</p>
				<p className="mt-3 max-w-3xl text-(--text-secondary)">
					Organisasjoner får ikke tilgang til identiteten eller individuelle
					helseopplysninger om brukerne gjennom tilbudsplattformen.
				</p>
			</div>
		</section>
	);
}

function CtaSection() {
	return (
		<section className="px-6 py-20 section-soft">
			<div className="mx-auto max-w-(--max-w) text-center">
				<h2 className="text-3xl font-semibold text-white">
					Klare for å komme i gang?
				</h2>
				<div className="flex flex-col justify-center gap-3 mt-7 sm:flex-row">
					<Link href="/signup" className="button-primary">
						Søk om organisasjonskonto
					</Link>
					<Link href="/login" className="button-secondary">
						Logg inn
					</Link>
					<Link href="/organisasjoner" className="button-secondary">
						Tilbake til For organisasjoner
					</Link>
				</div>
				<p className="mt-4 text-sm text-(--text-secondary)">
					Har dere spørsmål om registrering eller publisering?{" "}
					<Link
						href="/kontakt"
						className="text-emerald-300 hover:text-emerald-200"
					>
						Kontakt oss
					</Link>
				</p>
			</div>
		</section>
	);
}
