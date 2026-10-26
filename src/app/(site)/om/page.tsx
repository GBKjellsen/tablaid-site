import Link from "next/link";

export default function OmPage() {
	return (
		<main>
			<HeroSection />
			<DirectionSection />
			<DevelopmentSection />
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
					Om Tablaid
				</h1>
				<p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-(--text-secondary)">
					Tablaid utvikler digitale verktøy som skal gjøre det enklere å holde
					oversikt over legemidler, dele informasjon på egne premisser og finne
					relevante helserelaterte tilbud.
				</p>
				<p className="mx-auto mt-4 max-w-3xl text-(--text-secondary)">
					Vi samler disse mulighetene i én løsning med tre hovedfunksjoner:
					Medisinskapet, Profildeling og Lavterskeltilbud.
				</p>
			</div>
		</section>
	);
}

function DirectionSection() {
	return (
		<section className="mx-[7vw] py-16 section-lighter">
			<div className="mx-auto max-w-(--max-w) px-6">
				<h2 className="text-3xl font-semibold text-white">Vår retning</h2>
				<p className="mt-4 max-w-3xl text-(--text-secondary)">
					Vi ønsker å gjøre nyttige verktøy mer tilgjengelige i hverdagen. En
					samlet legemiddeloversikt kan gjøre det enklere å holde orden på egne
					registreringer. Frivillig profildeling kan gi mulighet for støtte fra
					mennesker man stoler på. En samlet oversikt over relevante tilbud kan
					gjøre det enklere å oppdage aktiviteter, informasjon og fellesskap.
				</p>
				<p className="mt-3 max-w-3xl text-(--text-secondary)">
					Gjennom Tablaid ønsker vi å støtte brukernes egne valg og beholde
					selvbestemmelse som et sentralt prinsipp.
				</p>
			</div>
		</section>
	);
}

function DevelopmentSection() {
	return (
		<section className="mx-[7vw] py-16 section-dark">
			<div className="mx-auto max-w-(--max-w) px-6">
				<h2 className="text-3xl font-semibold text-white">
					Et produkt i videreutvikling
				</h2>
				<p className="mt-4 max-w-3xl text-(--text-secondary)">
					De tre hovedfunksjonene er tilgjengelige i Tablaid. Vi arbeider
					samtidig med å videreutvikle produktet og undersøke muligheter for
					tilleggsmoduler.
				</p>
			</div>
		</section>
	);
}

function TeamSection() {
	return (
		<section id="team" className="mx-[7vw] py-16 section-lighter">
			<div className="mx-auto max-w-(--max-w) px-6">
				<h2 className="text-3xl font-semibold text-white">Team og styre</h2>
				<p className="mt-4 max-w-3xl text-sm text-slate-400">
					Teamprofiler fylles inn når oppdatert selskapsinformasjon foreligger.
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
		<section id="kontakt" className="px-6 py-20 section-soft">
			<div className="mx-auto max-w-(--max-w) text-center">
				<h2 className="text-3xl font-semibold text-white">
					Samarbeid og henvendelser
				</h2>
				<div className="flex flex-col justify-center gap-3 mt-7 sm:flex-row">
					<Link href="/kontakt" className="button-primary">
						Kontakt oss
					</Link>
					<Link href="/investor" className="button-secondary">
						For investorer
					</Link>
				</div>
			</div>
		</section>
	);
}
