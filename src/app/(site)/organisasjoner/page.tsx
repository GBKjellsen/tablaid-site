import Link from "next/link";

const organizationTypes = [
	"Pasient- og interesseorganisasjoner",
	"Frivillige organisasjoner",
	"Kommunale og offentlige aktører",
	"Private aktører med relevante helserelaterte tilbud",
	"Andre organisasjoner som tilbyr informasjon, støtte, aktiviteter eller møteplasser med helserelatert relevans",
];

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
		text: "Opprett en organisasjonskonto og fyll ut opplysningene som kreves for å identifisere og vurdere organisasjonen.",
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

export default function OrganisasjonerPage() {
	return (
		<main>
			<HeroSection />
			<WhoSection />
			<HowItWorksSection />
			<TrustSection />
			<PrivacySection />
			<RegisterSection />
			<SubpagesSection />
		</main>
	);
}

function HeroSection() {
	return (
		<section className="section-dark mx-[7vw] px-6 py-20 sm:py-24">
			<div className="mx-auto max-w-(--max-w) text-center">
				<h1 className="text-4xl font-bold text-white sm:text-5xl">
					Gjør tilbudet deres enklere å finne
				</h1>
				<p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-(--text-secondary)">
					Tablaid skal gjøre det enklere for mennesker å oppdage helserelaterte
					tilbud. Gjennom plattformen kan organisasjoner søke om registrering og
					sende inn informasjon om grupper, kurs, møteplasser, arrangementer og
					andre relevante tilbud.
				</p>
				<Link href="/signup" className="button-primary mt-8 inline-flex">
					Søk om organisasjonskonto
				</Link>
			</div>
		</section>
	);
}

function WhoSection() {
	return (
		<section className="mx-[7vw] py-20 section-lighter">
			<div className="mx-auto max-w-(--max-w) px-6">
				<h2 className="text-3xl font-semibold text-white">
					Hvem kan registrere tilbud?
				</h2>
				<p className="mt-4 max-w-3xl text-(--text-secondary)">
					Alle organisasjoner kan søke om å bli registrert i Tablaid. Vi
					prioriterer tilbud med helserelatert relevans, og ønsker særlig å
					gjøre tilbud fra etablerte og aktive organisasjoner synlige.
				</p>
				<ul className="mt-4 space-y-2 list-disc list-inside text-(--text-secondary)">
					{organizationTypes.map((type) => (
						<li key={type}>{type}</li>
					))}
				</ul>
			</div>
		</section>
	);
}

function HowItWorksSection() {
	return (
		<section className="mx-[7vw] py-20 section-dark">
			<div className="mx-auto max-w-(--max-w) px-6">
				<h2 className="text-3xl font-semibold text-white">Slik fungerer det</h2>
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

function TrustSection() {
	return (
		<section className="mx-[7vw] py-16 section-lighter">
			<div className="mx-auto max-w-(--max-w) px-6">
				<h2 className="text-3xl font-semibold text-white">Kontroll og tillit</h2>
				<p className="mt-4 max-w-3xl text-(--text-secondary)">
					Vi vurderer organisasjoner som ønsker å registrere seg, og går
					gjennom informasjonen om hvert tilbud før det eventuelt publiseres.
					Målet er å gi brukerne tydelig informasjon om hvem som står bak
					tilbudet, og hva det innebærer.
				</p>
				<p className="mt-3 max-w-3xl text-(--text-secondary)">
					Kontrollen er ikke en garanti for kvaliteten på selve aktiviteten
					eller for at tilbudet passer for alle. Organisasjonen som tilbyr
					aktiviteten, har ansvar for innholdet og gjennomføringen av sitt
					tilbud.
				</p>
			</div>
		</section>
	);
}

function PrivacySection() {
	return (
		<section className="mx-[7vw] py-16 section-dark">
			<div className="mx-auto max-w-(--max-w) px-6">
				<h2 className="text-3xl font-semibold text-white">
					Personvern og innsikt
				</h2>
				<p className="mt-4 max-w-3xl text-(--text-secondary)">
					Organisasjoner skal ikke få tilgang til identiteten eller individuelle
					helseopplysninger om brukerne gjennom tilbudsplattformen.
				</p>
				<p className="mt-3 max-w-3xl text-(--text-secondary)">
					Organisasjonsløsningen er planlagt med anonymisert statistikk som kan
					gi innsikt i interessen for tilbudene. Hvilke målinger som blir
					tilgjengelige, hvordan de presenteres, og hvordan anonymitet sikres,
					må fastsettes før funksjonen beskrives mer detaljert.
				</p>
			</div>
		</section>
	);
}

function RegisterSection() {
	return (
		<section className="px-6 py-20 section-soft">
			<div className="mx-auto max-w-(--max-w) text-center">
				<h2 className="text-3xl font-semibold text-white">
					Vil dere registrere organisasjonen deres?
				</h2>
				<p className="max-w-3xl mx-auto mt-4 text-(--text-secondary)">
					Les gjennom registreringskravene og informasjonen som skal oppgis,
					før dere oppretter konto.
				</p>
				<div className="flex flex-col justify-center gap-3 mt-7 sm:flex-row">
					<Link href="/signup" className="button-primary">
						Opprett organisasjonskonto
					</Link>
					<Link href="/kontakt" className="button-secondary">
						Kontakt oss
					</Link>
				</div>
				<p className="mt-4 text-sm text-(--text-secondary)">
					Har dere spørsmål om registrering eller publisering?
				</p>
			</div>
		</section>
	);
}

function SubpagesSection() {
	return (
		<section className="mx-[7vw] py-16 section-lighter">
			<div className="mx-auto max-w-(--max-w) px-6">
				<h2 className="text-2xl font-semibold text-white">Les mer</h2>
				<ul className="mt-4 space-y-3 text-(--text-secondary)">
					<li>
						<Link
							href="/organisasjoner/registrer-tilbud"
							className="text-emerald-300 hover:text-emerald-200"
						>
							Slik registrerer dere et tilbud →
						</Link>
					</li>
					<li>
						Krav til organisasjoner og tilbud{" "}
						<span className="text-sm text-slate-400">(oppdateres senere)</span>
					</li>
					<li>
						<Link
							href="/personvern"
							className="text-emerald-300 hover:text-emerald-200"
						>
							Personvern og statistikk →
						</Link>{" "}
						<span className="text-sm text-slate-400">(venter på oppdatering)</span>
					</li>
				</ul>
			</div>
		</section>
	);
}
