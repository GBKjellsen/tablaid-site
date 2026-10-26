import Link from "next/link";

const functions = [
	{
		title: "Medisinskapet",
		text: "En samlet oversikt over registrerte legemidler, dosering, inntak, beholdning, påminnelser og notater.",
	},
	{
		title: "Profildeling",
		text: "En funksjon som lar brukeren velge hvilken informasjon hver enkelt kontakt får se. Delingen er brukerens valg, og mottakeren kan ikke endre informasjonen gjennom delingsfunksjonen.",
	},
	{
		title: "Lavterskeltilbud",
		text: "En løsning for å oppdage helserelaterte grupper, møteplasser, kurs og andre tilbud fra registrerte organisasjoner.",
	},
];

const investmentGoals = [
	"Videreutvikling av Medisinskapet, Profildeling og Lavterskeltilbud",
	"Utvikling og evaluering av tilleggsmoduler",
	"Forbedring av brukeropplevelse og sentrale produktprosesser",
	"Videre teknisk utvikling og arbeid med neste utviklingsfaser",
];

export default function InvestorPage() {
	return (
		<main>
			<HeroSection />
			<ChallengeSection />
			<SolutionSection />
			<StatusSection />
			<MarketSection />
			<BusinessModelSection />
			<TeamSection />
			<ContactSection />
		</main>
	);
}

function HeroSection() {
	return (
		<section className="section-dark mx-[7vw] px-6 py-20 sm:py-24">
			<div className="mx-auto max-w-(--max-w) text-center">
				<h1 className="text-4xl font-bold text-white sm:text-5xl">
					Invester i videreutviklingen av Tablaid
				</h1>
				<p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-(--text-secondary)">
					Tablaid bygger en digital løsning som samler tre funksjoner: oversikt
					over legemidler, kontrollert deling av informasjon og tilgang til
					helserelaterte lavterskeltilbud.
				</p>
				<p className="mx-auto mt-4 max-w-3xl text-(--text-secondary)">
					Vi søker investorer som ønsker å bidra til videreutvikling av
					produktet og den langsiktige utviklingen av Tablaid.
				</p>
				<Link href="/kontakt" className="button-primary mt-8 inline-flex">
					Ta kontakt om investering
				</Link>
			</div>
		</section>
	);
}

function ChallengeSection() {
	return (
		<section className="mx-[7vw] py-16 section-lighter">
			<div className="mx-auto max-w-(--max-w) px-6">
				<h2 className="text-3xl font-semibold text-white">
					Utfordringen vi ønsker å løse
				</h2>
				<p className="mt-4 max-w-3xl text-(--text-secondary)">
					Informasjon om legemidler, støtte fra andre og helserelaterte tilbud
					kan være fordelt på ulike steder og løsninger. Det kan gjøre det
					vanskeligere å holde oversikt, dele relevant informasjon på en
					kontrollert måte og oppdage tilbud som kan være nyttige.
				</p>
				<p className="mt-3 max-w-3xl text-(--text-secondary)">
					Tablaid arbeider med å samle disse mulighetene i én løsning, med
					brukerens selvbestemmelse som et sentralt prinsipp.
				</p>
			</div>
		</section>
	);
}

function SolutionSection() {
	return (
		<section className="mx-[7vw] py-20 section-dark">
			<div className="mx-auto max-w-(--max-w) px-6">
				<h2 className="text-3xl font-semibold text-white">
					Løsningen: tre funksjoner i én app
				</h2>
				<div className="grid gap-6 mt-8 lg:grid-cols-3">
					{functions.map((item) => (
						<article key={item.title} className="card">
							<h3 className="text-lg font-semibold text-emerald-300">
								{item.title}
							</h3>
							<p className="mt-3 text-(--text-secondary)">{item.text}</p>
						</article>
					))}
				</div>
			</div>
		</section>
	);
}

function StatusSection() {
	return (
		<section className="mx-[7vw] py-16 section-lighter">
			<div className="mx-auto max-w-(--max-w) px-6">
				<h2 className="text-3xl font-semibold text-white">
					Produktstatus og videre utvikling
				</h2>
				<p className="mt-4 max-w-3xl text-(--text-secondary)">
					De tre hovedfunksjonene er tilgjengelige i Tablaid. Arbeidet fremover
					skal blant annet videreutvikle disse modulene, forbedre
					brukeropplevelsen og undersøke muligheter for tilleggsmoduler.
				</p>
				<p className="mt-3 max-w-3xl text-(--text-secondary)">
					Dette omfatter videre utviklingsarbeid knyttet til ICOPE og andre
					mulige utvidelser. Slike tilleggsmoduler skal ikke forstås som ferdige
					funksjoner i dagens produkt.
				</p>

				<h3 className="mt-8 text-xl font-semibold text-emerald-300">
					Hva skal investeringene bidra til?
				</h3>
				<ul className="mt-3 space-y-2 list-disc list-inside text-(--text-secondary)">
					{investmentGoals.map((goal) => (
						<li key={goal}>{goal}</li>
					))}
				</ul>
				<p className="mt-4 max-w-3xl text-(--text-secondary)">
					Den konkrete fordelingen av kapital, finansieringsramme og milepæler
					presenteres når dette er fastsatt.
				</p>
			</div>
		</section>
	);
}

function MarketSection() {
	return (
		<section className="mx-[7vw] py-16 section-dark">
			<div className="mx-auto max-w-(--max-w) px-6">
				<h2 className="text-3xl font-semibold text-white">
					Marked og videre muligheter
				</h2>
				<p className="mt-4 max-w-3xl text-(--text-secondary)">
					Tablaid retter seg først og fremst mot det norske markedet. Produktets
					tre funksjoner dekker ulike, men beslektede behov: legemiddeloversikt,
					frivillig deling og tilgang til helserelaterte tilbud.
				</p>
				<p className="mt-3 max-w-3xl text-(--text-secondary)">
					Muligheter for videre vekst, distribusjon, partnerskap og
					inntektsmodeller må vurderes på grunnlag av dokumenterte brukerbehov,
					faktisk bruk og en tydelig forretningsmodell.
				</p>
			</div>
		</section>
	);
}

function BusinessModelSection() {
	return (
		<section className="mx-[7vw] py-16 section-lighter">
			<div className="mx-auto max-w-(--max-w) px-6">
				<h2 className="text-3xl font-semibold text-white">Forretningsmodell</h2>
				<p className="mt-4 max-w-3xl text-(--text-secondary)">
					Tablaid arbeider videre med hvordan produktet skal finansieres og
					skaleres over tid. Det er for tiden ingen avgift for organisasjoner
					som publiserer tilbud. Den langsiktige forretningsmodellen, eventuelle
					inntektsstrømmer og kommersielle vilkår må beskrives når disse er
					besluttet.
				</p>
				<p className="mt-4 text-sm text-slate-400">
					Tablaid kan også støttes via{" "}
					<Link href="/support" className="text-emerald-300 hover:text-emerald-200">
						støtteside
					</Link>{" "}
					(formål oppdateres).
				</p>
			</div>
		</section>
	);
}

function TeamSection() {
	return (
		<section className="mx-[7vw] py-16 section-dark">
			<div className="mx-auto max-w-(--max-w) px-6">
				<h2 className="text-3xl font-semibold text-white">
					Team og gjennomføring
				</h2>
				<p className="mt-4 max-w-3xl text-sm text-slate-400">
					Team, styre, nøkkelkompetanse, relevante erfaringer og bekreftede
					samarbeidspartnere fylles inn når oppdatert selskapsinformasjon
					foreligger.
				</p>
				<Link href="/team" className="button-secondary mt-6 inline-flex">
					Se team og styre
				</Link>
			</div>
		</section>
	);
}

function ContactSection() {
	return (
		<section className="px-6 py-20 section-soft">
			<div className="mx-auto max-w-(--max-w) text-center">
				<h2 className="text-3xl font-semibold text-white">
					La oss ta en samtale
				</h2>
				<p className="max-w-3xl mx-auto mt-4 text-(--text-secondary)">
					Vi ønsker dialog med investorer som er interessert i å bidra til neste
					fase av Tablaid.
				</p>
				<Link href="/kontakt" className="button-primary mt-7 inline-flex">
					Kontakt Tablaid om investering
				</Link>
			</div>
		</section>
	);
}
