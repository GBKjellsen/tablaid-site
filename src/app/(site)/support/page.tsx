import Link from "next/link";

export default function SupportPage() {
	return (
		<main>
			<section className="section-dark mx-[7vw] px-6 py-20 sm:py-24">
				<div className="mx-auto max-w-(--max-w) text-center">
					<h1 className="text-4xl font-bold text-white sm:text-5xl">
						Støtt utviklingen av Tablaid
					</h1>
					<p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-(--text-secondary)">
						Tablaid utvikler digitale verktøy for legemiddeloversikt,
						kontrollert deling og helserelaterte tilbud. Utviklingen er
						tidkrevende, og din støtte bidrar til videreutviklingen.
					</p>
					<p className="mt-4 text-sm text-slate-400">
						Denne siden er under revisjon – formål oppdateres.
					</p>
				</div>
			</section>

			<section className="mx-[7vw] py-16 section-lighter">
				<div className="mx-auto max-w-(--max-w) px-6">
					<div className="max-w-3xl mx-auto card">
						<h2 className="text-xl font-semibold text-emerald-300">
							Bidra til videre utvikling
						</h2>
						<p className="mt-3 text-(--text-secondary)">
							Bidragene går til videreutvikling av Tablaid. Du velger selv
							beløp, og det er ingen binding.
						</p>
						<a
							href="https://buy.stripe.com/aFacN693Oc2ydw8eZjdEs00"
							target="_blank"
							rel="noopener noreferrer"
							className="button-primary mt-6 inline-flex"
						>
							Støtt Tablaid
						</a>
						<p className="mt-6 text-sm text-slate-400">
							Bidrag gir ingen juridiske rettigheter eller eierskap.
						</p>
						<p className="mt-4 text-sm text-(--text-secondary)">
							Vil du heller støtte oss gjennom samarbeid eller investering?{" "}
							<Link
								href="/investor"
								className="text-emerald-300 hover:text-emerald-200"
							>
								Les om investering
							</Link>{" "}
							eller{" "}
							<Link
								href="/kontakt"
								className="text-emerald-300 hover:text-emerald-200"
							>
								ta kontakt
							</Link>
							.
						</p>
					</div>
				</div>
			</section>
		</main>
	);
}
