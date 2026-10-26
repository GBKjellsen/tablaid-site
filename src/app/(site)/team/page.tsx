import Link from "next/link";

const team = [
	{ name: "[Navn på person]", role: "[Rolle i Tablaid]" },
	{ name: "[Navn på person]", role: "[Rolle i Tablaid]" },
];

export default function TeamPage() {
	return (
		<main>
			<section className="section-dark mx-[7vw] px-6 py-20 sm:py-24">
				<div className="mx-auto max-w-(--max-w) text-center">
					<h1 className="text-4xl font-bold text-white sm:text-5xl">
						Menneskene bak Tablaid
					</h1>
					<p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-(--text-secondary)">
						Bak Tablaid står et team som arbeider med å utvikle digitale verktøy
						for legemiddeloversikt, kontrollert deling og tilgang til
						helserelaterte tilbud.
					</p>
					<p className="mx-auto mt-4 max-w-3xl text-(--text-secondary)">
						Her presenterer vi menneskene som utvikler produktet, og
						kompetansen de bringer inn i arbeidet.
					</p>
				</div>
			</section>

			<section className="mx-[7vw] py-16 section-lighter">
				<div className="mx-auto max-w-(--max-w) px-6">
					<h2 className="text-3xl font-semibold text-white">Teamet</h2>
					<div className="grid gap-6 mt-8 md:grid-cols-2">
						{team.map((person, i) => (
							<article key={i} className="card">
								<h3 className="text-lg font-semibold text-emerald-300">
									{person.name} — {person.role}
								</h3>
								<p className="mt-3 text-sm text-slate-400">
									[Kort biografi med bekreftet informasjon om relevant
									erfaring, kompetanse og ansvarsområde.]
								</p>
							</article>
						))}
					</div>
				</div>
			</section>

			<section className="mx-[7vw] py-16 section-dark">
				<div className="mx-auto max-w-(--max-w) px-6">
					<h2 className="text-3xl font-semibold text-white">Styret</h2>
					<p className="mt-4 text-sm text-slate-400">
						[Navn på styremedlem] — [Bekreftet styreverv og relevant bakgrunn.]
					</p>
				</div>
			</section>

			<section className="mx-[7vw] py-16 section-lighter">
				<div className="mx-auto max-w-(--max-w) px-6">
					<h2 className="text-3xl font-semibold text-white">Samarbeid</h2>
					<p className="mt-4 max-w-3xl text-sm text-slate-400">
						[Legg inn samarbeidspartnere som har bekreftet at de kan omtales
						offentlig, med korrekt beskrivelse av samarbeidet.]
					</p>
				</div>
			</section>

			<section className="px-6 py-20 section-soft">
				<div className="mx-auto max-w-(--max-w) text-center">
					<Link href="/kontakt" className="button-primary">
						Kontakt oss
					</Link>
				</div>
			</section>
		</main>
	);
}
