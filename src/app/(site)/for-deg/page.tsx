import Link from "next/link";

const sharingChoices = [
	{
		title: "Du velger informasjonen",
		text: "Du kan tilpasse hva du deler med hver enkelt kontakt. Det kan omfatte informasjon om legemidler, doseringsfrekvens og notater, avhengig av hvilke opplysninger du har registrert og hvilke delingsvalg som er tilgjengelige.",
	},
	{
		title: "Den andre personen kan se – ikke endre",
		text: "Personen du deler med, får innsyn i informasjonen du har gitt tilgang til. Vedkommende kan ikke endre opplysningene i profilen din gjennom delingen.",
	},
	{
		title: "Delingen er frivillig",
		text: "Du velger selv om du vil dele informasjon. Du kan også avslutte en deling når du ikke lenger ønsker at personen skal ha tilgang.",
	},
	{
		title: "Tilpass delingen til hver person",
		text: "Du kan velge ulike opplysninger for ulike kontakter. Du trenger ikke dele det samme med alle.",
	},
];

const sharingSteps = [
	{
		title: "Del din personlige kode",
		text: "Når du oppretter konto, får du en personlig kode. Hvis du ønsker å dele informasjon med en pårørende, kan du gi koden til personen du vil dele med.",
	},
	{
		title: "Den pårørende ber om tilgang",
		text: "Den pårørende bruker koden for å be om tilgang til informasjonen du har valgt å dele.",
	},
	{
		title: "Du godkjenner forespørselen",
		text: "Delingen blir ikke etablert før du har bekreftet tilgangen. Det er du som bestemmer om forespørselen skal godkjennes.",
	},
	{
		title: "Du beholder kontrollen",
		text: "Du kan når som helst avslutte delingen. Det er frivillig å dele, og du bestemmer selv hvilke legemidler du vil gjøre tilgjengelige.",
	},
];

export default function ForDegPage() {
	return (
		<main>
			<HeroSection />
			<UseTablaidSection />
			<SharingSection />
			<SharingStepsSection />
			<PrivacySection />
			<OffersSection />
		</main>
	);
}

function HeroSection() {
	return (
		<section className="section-dark mx-[7vw] px-6 py-20 sm:py-24">
			<div className="mx-auto max-w-(--max-w) text-center">
				<h1 className="text-4xl font-bold text-white sm:text-5xl">
					Du bestemmer hvordan Tablaid passer inn i hverdagen din
				</h1>
				<p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-(--text-secondary)">
					Tablaid er for voksne som ønsker bedre oversikt over egne legemidler
					og medisinrutiner. Det er et verktøy du kan bruke til å holde oversikt
					over legemidlene dine, dele informasjon med personer du stoler på og
					oppdage helserelaterte tilbud.
				</p>
				<p className="mx-auto mt-4 max-w-3xl text-(--text-secondary)">
					Du trenger ikke bruke alle funksjonene, for du velger selv hva du vil
					bruke, og hvordan du vil bruke det.
				</p>
			</div>
		</section>
	);
}

function UseTablaidSection() {
	return (
		<section className="mx-[7vw] py-16 section-lighter">
			<div className="mx-auto grid max-w-(--max-w) gap-8 px-6 md:grid-cols-2">
				<div className="card">
					<h2 className="text-2xl font-semibold text-emerald-300">
						Bruk Tablaid på din måte
					</h2>
					<p className="mt-4 text-(--text-secondary)">
						Noen ønsker først og fremst en oversikt over legemidler og
						beholdning. Andre ønsker å registrere inntak mer detaljert eller
						bruke funksjoner som gjør rutinene enklere å følge.
					</p>
					<p className="mt-3 text-(--text-secondary)">
						Du velger selv hvordan du vil bruke funksjonene som er tilgjengelige
						i Tablaid.
					</p>
				</div>
				<div className="flex flex-col justify-center card">
					<h2 className="text-2xl font-semibold text-white">
						Medisinskapet er ditt
					</h2>
					<p className="mt-4 text-(--text-secondary)">
						Samle legemidlene dine, følg med på beholdningen og registrer inntak
						og egne notater. Du bestemmer selv hvilke av funksjonene du vil
						bruke.
					</p>
					<Link
						href="/medisinskapet"
						className="inline-block mt-5 text-emerald-300 hover:text-emerald-200"
					>
						Les om Medisinskapet →
					</Link>
				</div>
			</div>
		</section>
	);
}

function SharingSection() {
	return (
		<section id="deling" className="mx-[7vw] scroll-mt-24 py-20 section-dark">
			<div className="mx-auto max-w-(--max-w) px-6">
				<div className="max-w-3xl mx-auto">
					<h2 className="text-3xl font-semibold text-center text-white">
						Del med pårørende — på dine premisser
					</h2>
					{/* <p className="mt-4 text-(--text-secondary)">
						Noen ønsker å håndtere medisinene sine helt selv. Andre synes det er
						nyttig å få støtte fra familie eller en annen person de stoler på.
						Med Tablaid kan du velge om du vil dele informasjon, hvilken
						informasjon du ønsker å dele og hvem du ønsker å dele den med.
					</p>
					<p className="mt-3 text-(--text-secondary)">
						Hvis du ønsker det, kan du gi en godkjent person tilgang til utvalgt
						informasjon. Målet er å gjøre det enklere å hjelpe når du ønsker
						støtte, uten at du må gi fra deg kontrollen over egne opplysninger.
						Du bestemmer selv hvilke legemidler du vil dele, og hvem du vil dele
						dem med.
					</p>
					<p className="mt-6 text-xl font-semibold text-emerald-300">
						Profildeling – støtte uten å gi fra deg kontrollen
					</p>
					<p className="mt-3 text-(--text-secondary)">
						Det kan være nyttig å la en person du stoler på, få innsyn i deler
						av informasjonen din. Det kan for eksempel være en pårørende som
						ønsker å hjelpe deg med å holde oversikt over legemidlene dine. Med
						profildeling i Tablaid bestemmer du selv hvem du deler med, og
						hvilken informasjon hver person får se.
					</p> */}
				</div>

				<div className="grid gap-6 mt-10 sm:grid-cols-2">
					{sharingChoices.map((choice) => (
						<article key={choice.title} className="card">
							<h3 className="text-lg font-semibold text-emerald-300">
								{choice.title}
							</h3>
							<p className="mt-3 text-(--text-secondary)">{choice.text}</p>
						</article>
					))}
				</div>
			</div>
		</section>
	);
}

function SharingStepsSection() {
	return (
		<section className="mx-[7vw] py-20 section-lighter">
			<div className="mx-auto max-w-(--max-w) px-6">
				<h2 className="text-3xl font-semibold text-center text-white">
					Hvordan oppretter jeg deling?
				</h2>
				<ol className="grid gap-6 mt-8 list-none sm:grid-cols-2">
					{sharingSteps.map((step, index) => (
						<li key={step.title} className="card">
							<p className="text-sm font-semibold text-emerald-300">
								Steg {index + 1}
							</p>
							<h3 className="mt-2 text-lg font-semibold text-white">
								{step.title}
							</h3>
							<p className="mt-3 text-(--text-secondary)">{step.text}</p>
						</li>
					))}
				</ol>
			</div>
		</section>
	);
}

function PrivacySection() {
	return (
		<section className="mx-[7vw] py-16 section-dark">
			<div className="mx-auto max-w-(--max-w) px-6">
				<h2 className="text-2xl font-semibold text-white">
					Personvern og kontroll
				</h2>
				<p className="mt-4 max-w-3xl text-(--text-secondary)">
					Legemiddelopplysninger er personlige. Før du deler informasjon, bør du
					vite hvilke opplysninger den andre personen får tilgang til.
				</p>
				<p className="mt-4 text-sm text-slate-400">
					Personvernsiden venter på oppdatering.
				</p>
			</div>
		</section>
	);
}

function OffersSection() {
	return (
		<section className="mx-[7vw] py-20 section-lighter">
			<div className="mx-auto max-w-(--max-w) px-6 text-center">
				<h2 className="text-3xl font-semibold text-white">
					Finn tilbud og møteplasser
				</h2>
				<p className="mx-auto mt-4 max-w-3xl text-(--text-secondary)">
					Gjennom Lavterskeltilbud kan du utforske helserelaterte grupper, kurs,
					seminarer, møteplasser og andre tilbud. Du må logge inn i appen for å
					se tilbudene. Når du finner noe interessant, kan du lese informasjonen
					som er tilgjengelig og følge opp videre slik tilbudet beskriver.
				</p>
				<p className="mx-auto mt-3 max-w-3xl text-(--text-secondary)">
					Det er du som vurderer om et tilbud passer for deg. At et tilbud er
					oppført i Tablaid, betyr ikke at det er en medisinsk anbefaling eller
					at det nødvendigvis passer for alle.
				</p>
				<Link
					href="/lavterskeltilbud"
					className="inline-flex mt-6 button-primary"
				>
					Utforsk lavterskeltilbud
				</Link>
			</div>
		</section>
	);
}
