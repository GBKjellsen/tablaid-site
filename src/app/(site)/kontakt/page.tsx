import Link from "next/link";

export default function KontaktPage() {
	return (
		<main>
			<section className="section-dark mx-[7vw] px-6 py-20 sm:py-24">
				<div className="mx-auto max-w-(--max-w) text-center">
					<h1 className="text-4xl font-bold text-white sm:text-5xl">
						Ta kontakt med Tablaid
					</h1>
					<p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-(--text-secondary)">
						Har du spørsmål om Tablaid, ønsker du å registrere et helserelatert
						tilbud, eller vil du diskutere samarbeid eller investering? Ta
						gjerne kontakt.
					</p>
				</div>
			</section>

			<section className="mx-[7vw] py-16 section-lighter">
				<div className="mx-auto max-w-(--max-w) px-6">
					<div className="grid gap-6 md:grid-cols-2">
						<article className="card">
							<h2 className="text-xl font-semibold text-emerald-300">
								Generelle henvendelser
							</h2>
							<p className="mt-3 text-(--text-secondary)">
								Har du spørsmål om produktet eller ønsker å komme i kontakt med
								oss?
							</p>
							<p className="mt-3 text-(--text-secondary)">
								E-post:{" "}
								<a
									href="mailto:post@tablaid.no"
									className="text-emerald-300 hover:text-emerald-200"
								>
									post@tablaid.no
								</a>{" "}
								<span className="text-sm text-slate-400">
									(midlertidig – oppdateres)
								</span>
							</p>
						</article>

						<article className="card">
							<h2 className="text-xl font-semibold text-emerald-300">
								Organisasjoner og tilbud
							</h2>
							<p className="mt-3 text-(--text-secondary)">
								Representerer du en organisasjon som ønsker å registrere seg
								eller publisere et tilbud? Organisasjonsregistrering og
								innlogging skjer på Tablaid.no.
							</p>
							<Link
								href="/organisasjoner"
								className="button-secondary mt-4 inline-flex"
							>
								For organisasjoner
							</Link>
						</article>

						<article className="card">
							<h2 className="text-xl font-semibold text-emerald-300">
								Samarbeid og presse
							</h2>
							<p className="mt-3 text-sm text-slate-400">
								Kontakt: [bekreftet kontaktperson eller e-postadresse –
								oppdateres senere]
							</p>
						</article>

						<article className="card">
							<h2 className="text-xl font-semibold text-emerald-300">
								Investering
							</h2>
							<Link
								href="/investor"
								className="button-secondary mt-4 inline-flex"
							>
								For investorer
							</Link>
						</article>

						<article className="card md:col-span-2">
							<h2 className="text-xl font-semibold text-emerald-300">
								Brukerstøtte
							</h2>
							<p className="mt-3 text-(--text-secondary)">
								For spørsmål om bruk av appen:{" "}
								<span className="text-sm text-slate-400">
									[supportkanal oppdateres før publisering]
								</span>
							</p>
						</article>
					</div>
				</div>
			</section>
		</main>
	);
}
