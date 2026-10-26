import Image from "next/image";
import Link from "next/link";

const features = [
	{
		title: "Samle legemidlene dine",
		text: "Registrer legemidlene dine og få en samlet oversikt over det du har lagt inn.",
	},
	{
		title: "Registrer dosering og inntak",
		text: "Legg inn relevant doseringsinformasjon og registrer inntak. Registreringen kan hjelpe deg med å holde oversikt over rutinene dine.",
	},
	{
		title: "Følg med på beholdningen",
		text: "Hold oversikt over hvor mye du har igjen, og bruk påminnelser om etterfylling for å planlegge videre.",
	},
	{
		title: "Finn legemidler",
		text: "Søk i legemiddeldatabasen eller bruk tilgjengelig skanning for å legge inn legemiddelinformasjon.",
	},
	{
		title: "Bruk notater",
		text: "Registrer notater om for eksempel glemte doser, endringer i beholdning eller opplevde bivirkninger. Notatene gir deg en oversikt over det du selv har registrert.",
	},
];

const steps = [
	{
		title: "Legg til legemidlene dine",
		text: "Finn legemidlene ved å søke i legemiddeldatabasen, eller bruk støttet skanning av strekkode eller QR-kode der dette er tilgjengelig. Legg deretter legemidlene til i det digitale medisinskapet ditt.",
	},
	{
		title: "Sett opp oversikten din",
		text: "Registrer dosering og hvor ofte legemidlene skal tas, basert på informasjonen du har fått fra lege eller apotek.",
	},
	{
		title: "Følg med i hverdagen",
		text: "Bruk oversikten til å holde øye med beholdningen og eventuelle påminnelser. Påminnelser kan hjelpe deg med å holde oversikt over rutinene dine, men erstatter ikke egne vurderinger eller råd fra helsepersonell.",
	},
	{
		title: "Registrer inntak og legg til egne notater",
		text: "Marker om du har tatt legemidlet. Hvis du ikke tok det, kan du registrere årsaken. Du kan også notere hendelser som påvirker beholdningen, skrive ned spørsmål eller registrere opplevde bivirkninger som du ønsker å ta opp med helsepersonell.",
	},
];

export default function MedisinskapetPage() {
	return (
		<main>
			<HeroSection />
			<FeaturesSection />
			<GettingStartedSection />
			<SmartTagSection />
			<MedicationAdviceSection />
			<SharingSection />
			<ImportantInformationSection />
		</main>
	);
}

function HeroSection() {
	return (
		<section className="section-dark mx-[7vw] px-6 py-20 sm:py-24">
			<div className="mx-auto grid max-w-(--max-w) items-center gap-10 lg:grid-cols-2">
				<div>
					<h1 className="text-4xl font-bold text-white sm:text-5xl">
						Medisinskapet – oversikt over legemidlene dine
					</h1>
					<p className="mt-6 text-lg leading-relaxed text-(--text-secondary)">
						Med Medisinskapet kan du samle legemidlene dine i én oversikt,
						registrere dosering og følge med på medisinrutinene dine. Du kan
						holde oversikt over beholdningen, registrere inntak og skrive egne
						notater.
					</p>
					<p className="mt-4 text-(--text-secondary)">
						Tablaid har verktøy som kan støtte medisinrutinene dine i hverdagen.
						Du beholder selv ansvaret for legemiddelbruken din og følger
						instruksjonene fra lege, apotek og pakningsvedlegg.
					</p>
				</div>
				<div className="relative mx-auto w-full max-w-md overflow-hidden rounded-3xl border border-white/10 bg-slate-900/60">
					<Image
						src="/app-hand.png"
						alt="Tablaid-appen på en mobiltelefon"
						width={900}
						height={700}
						className="h-auto w-full object-cover"
						priority
					/>
				</div>
			</div>
		</section>
	);
}

function FeaturesSection() {
	return (
		<section className="mx-[7vw] py-20 section-lighter">
			<div className="mx-auto max-w-(--max-w) px-6">
				<h2 className="text-3xl font-semibold text-white">
					Hva kan du gjøre i Medisinskapet?
				</h2>
				<div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
					{features.map((feature) => (
						<article key={feature.title} className="card">
							<h3 className="text-lg font-semibold text-emerald-300">
								{feature.title}
							</h3>
							<p className="mt-3 text-(--text-secondary)">
								{feature.text}
							</p>
						</article>
					))}
				</div>
			</div>
		</section>
	);
}

function GettingStartedSection() {
	return (
		<section className="mx-[7vw] py-20 section-dark">
			<div className="mx-auto max-w-(--max-w) px-6">
				<h2 className="text-3xl font-semibold text-white">
					Slik kommer du i gang
				</h2>
				<ol className="mt-8 grid list-none gap-6 sm:grid-cols-2">
					{steps.map((step, index) => (
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

function SmartTagSection() {
	return (
		<section className="mx-[7vw] py-16 section-lighter">
			<div className="mx-auto grid max-w-(--max-w) items-center gap-8 px-6 md:grid-cols-[1fr_auto]">
				<div>
					<h2 className="text-3xl font-semibold text-white">
						SmartTag – en snarvei til registrering
					</h2>
					<p className="mt-4 max-w-3xl text-(--text-secondary)">
						SmartTag bruker NFC-teknologi for å gjøre registrering av
						legemiddelinntak enklere. Når du bruker en støttet etikett med
						telefonen, kan du registrere inntak uten å måtte finne frem til
						hvert legemiddel manuelt. Nøyaktig hvordan SmartTag fungerer,
						avhenger av støtten i appen og på telefonen din.
					</p>
					<div className="mt-6 flex flex-col gap-3 sm:flex-row">
						<Link href="/smarttag" className="button-primary">
							Les mer om Smarttags her
						</Link>
						<Link href="/smarttag/order" className="button-secondary">
							Bestill SmartTags
						</Link>
					</div>
				</div>
				<Image
					src="/SmartTag.png"
					alt="SmartTag NFC-etikett"
					width={180}
					height={180}
					className="mx-auto h-auto w-36 rounded-xl"
				/>
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
					Praktiske råd om rutiner, oppbevaring, pakningsvedlegg og når du bør
					kontakte helsepersonell.
				</p>
				<Link
					href="/medisinskapet/legemiddelvett"
					className="mt-5 inline-block text-emerald-300 hover:text-emerald-200"
				>
					Les alle rådene i Legemiddelvett →
				</Link>
			</div>
		</section>
	);
}

function SharingSection() {
	return (
		<section className="mx-[7vw] py-16 section-lighter">
			<div className="mx-auto max-w-(--max-w) px-6 text-center">
				<h2 className="text-3xl font-semibold text-white">
					Bruk Medisinskapet på din måte
				</h2>
				<p className="mx-auto mt-4 max-w-3xl text-(--text-secondary)">
					Du kan bruke Medisinskapet til å holde oversikt over egne legemidler.
					Hvis du ønsker det, kan du også dele utvalgte legemidler med en person
					du stoler på. Du bestemmer selv hva du deler, og du kan velge å ikke
					dele noe.
				</p>
				<Link
					href="/for-deg#deling"
					className="mt-5 inline-block text-emerald-300 hover:text-emerald-200"
				>
					Les om deling med pårørende →
				</Link>
			</div>
		</section>
	);
}

function ImportantInformationSection() {
	return (
		<section className="mx-[7vw] py-16 section-dark">
			<div className="mx-auto max-w-(--max-w) px-6">
				<h2 className="text-2xl font-semibold text-white">Hva bør du vite?</h2>
				<div className="mt-4 space-y-3 text-(--text-secondary)">
					<p>
						Tablaid er et verktøy for oversikt og registrering. Appen erstatter
						ikke råd fra lege eller apotek, og registreringer og påminnelser må
						ikke brukes som grunnlag for å endre dosering uten å avklare dette
						med helsepersonell.
					</p>
					<p>
						Notater om opplevde bivirkninger er brukerens egne registreringer
						og er ikke en medisinsk vurdering.
					</p>
				</div>
			</div>
		</section>
	);
}
