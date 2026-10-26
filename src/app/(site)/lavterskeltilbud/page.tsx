import Link from "next/link";

const offerTypes = [
	"Støtte- og samtalegrupper",
	"Informasjonsmøter og seminarer",
	"Kurs og temakvelder",
	"Tilbud fra pasient- og interesseorganisasjoner",
	"Aktiviteter og møteplasser med helserelatert tematikk",
];

const steps = [
	"Registrer deg og logg inn i Tablaid-appen.",
	"Utforsk tilgjengelige tilbud.",
	"Les informasjonen om målgruppe, innhold og arrangør.",
	"Vurder selv om du ønsker å gå videre med tilbudet.",
	"Følg informasjonen om kontakt eller påmelding som er oppgitt for tilbudet.",
];

export default function LavterskeltilbudPage() {
	return (
		<main>
			<HeroSection />
			<OfferTypesSection />
			<HowToSection />
			<ControlledOrganizationsSection />
			<YourChoiceSection />
			<PrivacySection />
			<OrganizationsCtaSection />
		</main>
	);
}

function HeroSection() {
	return (
		<section className="section-dark mx-[7vw] px-6 py-20 sm:py-24">
			<div className="mx-auto max-w-(--max-w) text-center">
				<h1 className="text-4xl font-bold text-white sm:text-5xl">
					Finn helserelaterte tilbud som kan passe for deg
				</h1>
				<p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-(--text-secondary)">
					Det kan være vanskelig å finne grupper, møteplasser og aktiviteter som
					er relevante for egen livssituasjon. Lavterskeltilbud i Tablaid samler
					informasjon om helserelaterte tilbud slik at det blir enklere å
					oppdage muligheter.
				</p>
				<p className="mx-auto mt-4 max-w-3xl text-(--text-secondary)">
					Du kan utforske tilbud fra organisasjoner som arbeider med
					informasjon, støtte, aktivitet og fellesskap.
				</p>
			</div>
		</section>
	);
}

function OfferTypesSection() {
	return (
		<section className="mx-[7vw] py-20 section-lighter">
			<div className="mx-auto max-w-(--max-w) px-6">
				<h2 className="text-3xl font-semibold text-white">
					Hvilke tilbud kan du finne?
				</h2>
				<p className="mt-4 text-(--text-secondary)">
					Lavterskeltilbud kan for eksempel være:
				</p>
				<ul className="mt-4 space-y-2 list-disc list-inside text-(--text-secondary)">
					{offerTypes.map((type) => (
						<li key={type}>{type}</li>
					))}
				</ul>
				<p className="mt-6 max-w-3xl text-(--text-secondary)">
					Hvilke tilbud som er tilgjengelige, vil avhenge av hva organisasjonene
					registrerer og hva som blir godkjent for publisering.
				</p>
			</div>
		</section>
	);
}

function HowToSection() {
	return (
		<section className="mx-[7vw] py-20 section-dark">
			<div className="mx-auto max-w-(--max-w) px-6">
				<h2 className="text-3xl font-semibold text-white">
					Slik bruker du Lavterskeltilbud
				</h2>
				<ol className="grid gap-6 mt-8 list-none sm:grid-cols-2 lg:grid-cols-3">
					{steps.map((step, index) => (
						<li key={step} className="card">
							<p className="text-sm font-semibold text-emerald-300">
								Steg {index + 1}
							</p>
							<p className="mt-2 text-(--text-secondary)">{step}</p>
						</li>
					))}
				</ol>
			</div>
		</section>
	);
}

function ControlledOrganizationsSection() {
	return (
		<section className="mx-[7vw] py-16 section-lighter">
			<div className="mx-auto max-w-(--max-w) px-6">
				<h2 className="text-3xl font-semibold text-white">
					Tilbud fra kontrollerte organisasjoner
				</h2>
				<p className="mt-4 max-w-3xl text-(--text-secondary)">
					Organisasjoner må vurderes av Tablaid før de kan publisere tilbud
					gjennom plattformen. Vi kontrollerer at organisasjonen er en reell og
					aktiv aktør, og går gjennom informasjonen som sendes inn om tilbudet
					før publisering.
				</p>
				<p className="mt-3 max-w-3xl text-(--text-secondary)">
					Kontrollen er ikke en garanti for kvaliteten på selve aktiviteten
					eller for at tilbudet passer for alle. Du bør lese informasjonen
					nøye og kontakte arrangøren dersom du trenger flere opplysninger.
				</p>
			</div>
		</section>
	);
}

function YourChoiceSection() {
	return (
		<section className="mx-[7vw] py-16 section-dark">
			<div className="mx-auto max-w-(--max-w) px-6 text-center">
				<h2 className="text-3xl font-semibold text-white">
					Ditt valg – på dine premisser
				</h2>
				<p className="max-w-3xl mx-auto mt-4 text-(--text-secondary)">
					Et tilbud kan være relevant uten at det nødvendigvis er riktig for
					deg. Du står fritt til å utforske informasjonen og selv vurdere om du
					vil delta.
				</p>
			</div>
		</section>
	);
}

function PrivacySection() {
	return (
		<section className="mx-[7vw] py-16 section-lighter">
			<div className="mx-auto max-w-(--max-w) px-6">
				<h2 className="text-2xl font-semibold text-white">Personvern</h2>
				<p className="mt-4 max-w-3xl text-(--text-secondary)">
					Organisasjoner skal ikke få tilgang til identiteten din eller dine
					individuelle helseopplysninger gjennom tilbudsplattformen. Eventuell
					statistikk som deles med organisasjoner, skal være anonymisert.
				</p>
				<p className="mt-3 max-w-3xl text-(--text-secondary)">
					Hvordan Tablaid bruker opplysninger for å vise eller tilpasse tilbud,
					må beskrives i personvernerklæringen når denne funksjonen er endelig
					avklart.
				</p>
			</div>
		</section>
	);
}

function OrganizationsCtaSection() {
	return (
		<section className="px-6 py-20 section-soft">
			<div className="mx-auto max-w-(--max-w) text-center">
				<h2 className="text-3xl font-semibold text-white">
					Har organisasjonen din et relevant tilbud?
				</h2>
				<p className="max-w-3xl mx-auto mt-4 text-(--text-secondary)">
					Organisasjoner kan søke om registrering og sende inn tilbud for
					vurdering. Det er for tiden ingen avgift for å publisere tilbud i
					Tablaid.
				</p>
				<div className="flex flex-col justify-center gap-3 mt-7 sm:flex-row">
					<Link href="/organisasjoner" className="button-primary">
						For organisasjoner
					</Link>
					<Link href="/personvern" className="button-secondary">
						Les om personvern
					</Link>
				</div>
			</div>
		</section>
	);
}
