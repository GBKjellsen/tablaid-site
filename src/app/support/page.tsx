"use client";

import Link from "next/link";

export default function SupportPage() {
	return (
		<main className="max-w-3xl px-6 py-20 mx-auto text-slate-100">
			<h1 className="mb-6 text-4xl font-bold text-slate-50">
				Støtt utviklingen av Tablaid
			</h1>

			<p className="mb-8 text-lg leading-relaxed opacity-90">
				Tablaid utvikles med et tydelig mål: å gi personer, pårørende og
				kommuner tryggere legemiddelbruk og tidligere innsikt i
				funksjonsendringer. Utviklingen er tidkrevende og kostbar – og din
				støtte betyr mer enn du tror.
			</p>

			<div className="p-6 mb-10 border shadow-lg rounded-3xl border-slate-700 bg-slate-900/70">
				<h2 className="mb-2 text-xl font-semibold text-emerald-300">
					En liten gave – stor betydning
				</h2>
				<p className="text-sm opacity-90">
					Bidragene går direkte til videre utvikling av appen: forbedret
					helsekompass, bedre funksjonsmålinger, og verktøy som gir både
					pårørende og kommuner bedre beslutningsgrunnlag.
				</p>

				{/* “Gavesjekk” */}
				<div className="p-5 mt-6 border rounded-2xl border-emerald-400/30 bg-emerald-400/5">
					<p className="text-sm font-medium text-emerald-300">
						«Takk for at du bidrar.»
					</p>
					<p className="mt-1 text-xs text-slate-300">
						Din gave gjør det mulig å utvikle en løsning som kan gjøre en reell
						forskjell for mennesker i sårbare faser av livet.
					</p>
				</div>

				{/* CTA */}
				<div className="mt-8">
					<a
						href="https://buy.stripe.com/aFacN693Oc2ydw8eZjdEs00"
						target="_blank"
						rel="noopener noreferrer"
						className="block px-6 py-3 font-semibold text-center transition rounded-full shadow-lg bg-emerald-500 hover:bg-emerald-400 text-slate-900 shadow-emerald-500/30"
					>
						Støtt Tablaid
					</a>
					<p className="text-[11px] text-center mt-3 text-slate-500">
						Du velger selv beløp • Ingen binding • Rent bidrag til utvikling
					</p>
				</div>
			</div>

			<div className="text-sm leading-relaxed opacity-70">
				<p className="mb-4">
					Tablaid mottar gaver fra enkeltpersoner og organisasjoner som ønsker å
					bidra til tryggere legemiddelbruk, bedre funksjonsoppfølging og
					forebyggende helsetjenester. Bidragene gir ingen juridiske rettigheter
					eller eierskap, men hjelper oss å bygge en løsning som er tilgjengelig
					for alle.
				</p>

				<p className="mb-4">
					Ønsker du heller å støtte oss gjennom samarbeid eller pilotering?
					<Link
						href="/kontakt"
						className="text-emerald-300 hover:text-emerald-200"
					>
						Ta kontakt med oss her.
					</Link>
				</p>
			</div>
		</main>
	);
}
