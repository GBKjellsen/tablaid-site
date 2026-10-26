import Link from "next/link";

const functions = [
	{
		title: "Medisinskapet",
		text: "An overview of registered medications, dosage, intake, supply, reminders and notes.",
	},
	{
		title: "Profile sharing",
		text: "Users choose what information each contact can see. Sharing is voluntary, and recipients cannot edit the information.",
	},
	{
		title: "Low-threshold offers",
		text: "A way to discover health-related groups, meeting places, courses and other offers from registered organizations.",
	},
];

export default function EnglishPage() {
	return (
		<main>
			<section className="section-dark mx-[7vw] px-6 py-20 sm:py-24">
				<div className="mx-auto max-w-(--max-w) text-center">
					<h1 className="text-4xl font-bold text-white sm:text-5xl">
						Tablaid
					</h1>
					<p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-(--text-secondary)">
						Tablaid is a Norwegian company developing digital tools for
						medication overview, controlled sharing of information and access
						to health-related offers.
					</p>
				</div>
			</section>

			<section className="mx-[7vw] py-16 section-lighter">
				<div className="mx-auto max-w-(--max-w) px-6">
					<h2 className="text-3xl font-semibold text-white">
						Three functions in one app
					</h2>
					<div className="grid gap-6 mt-8 lg:grid-cols-3">
						{functions.map((item) => (
							<article key={item.title} className="card">
								<h3 className="text-lg font-semibold text-emerald-300">
									{item.title}
								</h3>
								<p className="mt-3 text-(--text-secondary)">
									{item.text}
								</p>
							</article>
						))}
					</div>
					<p className="mt-6 max-w-3xl text-sm text-slate-400">
						The Norwegian site is the primary version. This page is a short
						summary.
					</p>
				</div>
			</section>

			<section className="px-6 py-20 section-soft">
				<div className="mx-auto max-w-(--max-w) text-center">
					<h2 className="text-3xl font-semibold text-white">Get in touch</h2>
					<p className="max-w-3xl mx-auto mt-4 text-(--text-secondary)">
						For questions, collaboration or investment inquiries, please
						contact us.
					</p>
					<Link href="/kontakt" className="button-primary mt-7 inline-flex">
						Contact Tablaid
					</Link>
				</div>
			</section>
		</main>
	);
}
