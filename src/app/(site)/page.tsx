import Link from "next/link";

export default function HomePage() {
	return (
		<>
			<HeroSection />
			<MainFeaturesSection />
			<ControlSection />
			<OrganizationsSection />
			<MedicationAdviceSection />
			<DevelopmentSection />
		</>
	);
}

function HeroSection() {
	return (
		<section className="relative mx-[7vw] overflow-hidden section-dark px-6 py-24">
			<div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-72 bg-emerald-500/20 blur-[120px]" />
			<div className="mx-auto max-w-(--max-w) text-center">
				<h1 className="text-4xl font-bold text-white sm:text-5xl">
					Tablaid – tre funksjoner. Én app.{" "}
					<span className="text-emerald-400">På dine premisser.</span>
				</h1>
				<p className="mx-auto mt-6 max-w-3xl text-lg text-(--text-secondary)">
					Tablaid samler tre funksjoner som kan gjøre det enklere å håndtere
					egen medisinoversikt, dele informasjon med personer du stoler på, og
					finne helserelaterte tilbud. Du bestemmer selv hvordan du bruker
					appen, hvilken informasjon du deler, og hvem du deler den med.
				</p>
				<div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
					<Link href="/medisinskapet" className="button-primary">
						Se hvordan Medisinskapet fungerer
					</Link>
					<Link href="/lavterskeltilbud" className="button-secondary">
						Utforsk lavterskeltilbud
					</Link>
				</div>
			</div>
		</section>
	);
}

function MainFeaturesSection() {
	return (
		<section className="mx-[7vw] py-20 section-lighter">
			<div className="mx-auto max-w-(--max-w) px-6">
				<div className="grid gap-6 lg:grid-cols-3">
					<FeatureCard
						title="Medisinskapet – oversikt over legemidlene dine"
						text="Med Medisinskapet kan du samle informasjon om legemidlene dine, registrere dosering og inntak og følge med på beholdningen. Du kan også bruke påminnelser og egne notater som støtte i medisinrutinene dine."
						link="/medisinskapet"
						linkLabel="Utforsk Medisinskapet"
					/>
					<FeatureCard
						title="Profildeling – du bestemmer hva du deler"
						text="Ønsker du støtte fra en pårørende eller en annen person du stoler på? Med Tablaid kan du dele profilen din på dine egne premisser. Du bestemmer hvem du deler med, og hvilken informasjon vedkommende får tilgang til. Deling er frivillig, og du kan avslutte den når du ønsker det."
						link="/for-deg#deling"
						linkLabel="Les om deling"
					/>
					<FeatureCard
						title="Lavterskeltilbud – finn tilbud som kan passe for deg"
						text="Grupper, møteplasser, kurs og helserelaterte arrangementer kan gjøre det enklere å finne informasjon, fellesskap eller støtte. Tablaid skal samle slike tilbud fra registrerte organisasjoner og gjøre dem lettere å oppdage."
						link="/lavterskeltilbud"
						linkLabel="Slik fungerer lavterskeltilbud"
					/>
				</div>
			</div>
		</section>
	);
}

function FeatureCard({
	title,
	text,
	link,
	linkLabel,
}: {
	title: string;
	text: string;
	link: string;
	linkLabel: string;
}) {
	return (
		<article className="card flex flex-col">
			<h2 className="text-lg font-semibold text-emerald-300">{title}</h2>
			<p className="mt-3 flex-1 text-(--text-secondary)">{text}</p>
			<Link
				href={link}
				className="mt-5 inline-block text-sm text-emerald-300 hover:text-emerald-200"
			>
				{linkLabel} →
			</Link>
		</article>
	);
}

function ControlSection() {
	return (
		<section className="mx-[7vw] py-20 section-dark">
			<div className="mx-auto max-w-(--max-w) px-6 text-center">
				<h2 className="text-3xl font-semibold text-white">
					Tablaid tilpasser seg dine behov – du beholder kontrollen.
				</h2>
				<p className="mx-auto mt-4 max-w-3xl text-lg text-(--text-secondary)">
					Bruk Medisinskapet til å holde oversikt over egne legemidler, velg om
					du vil dele profilen din med noen du stoler på, og utforsk
					lavterskeltilbud når du ønsker det. Du velger selv hvilke funksjoner
					du vil bruke.
				</p>
			</div>
		</section>
	);
}

function OrganizationsSection() {
	return (
		<section className="mx-[7vw] py-20 section-lighter">
			<div className="mx-auto max-w-(--max-w) px-6 text-center">
				<h2 className="text-3xl font-semibold text-white">
					For organisasjoner som tilbyr støtte og aktiviteter
				</h2>
				<p className="mx-auto mt-4 max-w-3xl text-(--text-secondary)">
					Organisasjoner kan registrere seg hos Tablaid og sende inn informasjon
					om tilbud de ønsker å gjøre synlige for brukerne våre. Organisasjoner
					og tilbud gjennomgår Tablaids kontrollprosess før publisering.
				</p>
				<Link
					href="/organisasjoner"
					className="button-primary mt-6 inline-flex"
				>
					For organisasjoner
				</Link>
			</div>
		</section>
	);
}

function MedicationAdviceSection() {
	return (
		<section className="mx-[7vw] py-16 section-dark">
			<div className="mx-auto max-w-(--max-w) px-6 text-center">
				<h2 className="text-3xl font-semibold text-white">Legemiddelvett</h2>
				<p className="mx-auto mt-3 max-w-2xl text-(--text-secondary)">
					Finn praktiske råd om legemiddelbruk, rutiner, oppbevaring,
					pakningsvedlegg og når du bør kontakte helsepersonell.
				</p>
				<Link
					href="/medisinskapet/legemiddelvett"
					className="mt-5 inline-block text-emerald-300 hover:text-emerald-200"
				>
					Les Legemiddelvett →
				</Link>
			</div>
		</section>
	);
}

function DevelopmentSection() {
	return (
		<section className="section-soft px-6 py-20">
			<div className="mx-auto max-w-(--max-w) text-center">
				<h2 className="text-3xl font-semibold text-white">
					Tablaid er i utvikling – og bygges videre
				</h2>
				<p className="mx-auto mt-4 max-w-3xl text-lg text-(--text-secondary)">
					Tablaid har tre hovedfunksjoner: Medisinskapet, Profildeling og
					Lavterskeltilbud. Vi arbeider også med videreutvikling av eksisterende
					funksjoner og mulige tilleggsmoduler.
				</p>
				<div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
					<Link href="/om" className="button-secondary">
						Les om Tablaid
					</Link>
					<Link href="/investor" className="button-secondary">
						For investorer
					</Link>
				</div>
			</div>
		</section>
	);
}
