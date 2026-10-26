import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

const footerLinkClass =
	"text-slate-400 transition-colors hover:text-emerald-300";

export default function Footer() {
	return (
		<footer className="mt-20 border-t border-slate-800 bg-slate-950/90">
			<div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
				<div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5">
					<div>
						<Image
							src="/tablaid-logo-negative.png"
							alt="Tablaid logo"
							width={200}
							height={60}
							className="mb-4 h-8 w-auto"
						/>
						<p className="text-sm leading-relaxed text-slate-400">
							Tablaid – digitale verktøy for legemiddeloversikt, kontrollert
							deling og helserelaterte tilbud.
						</p>
					</div>

					<FooterLinkGroup title="Utforsk">
						<li>
							<Link href="/medisinskapet" className={footerLinkClass}>
								Medisinskapet
							</Link>
						</li>
						<li>
							<Link href="/for-deg" className={footerLinkClass}>
								For deg
							</Link>
						</li>
						<li>
							<Link href="/lavterskeltilbud" className={footerLinkClass}>
								Lavterskeltilbud
							</Link>
						</li>
					</FooterLinkGroup>

					<FooterLinkGroup title="For organisasjoner">
						<li>
							<Link href="/signup" className={footerLinkClass}>
								Søk om organisasjonskonto
							</Link>
						</li>
						<li>
							<Link href="/login" className={footerLinkClass}>
								Logg inn
							</Link>
						</li>
					</FooterLinkGroup>

					<FooterLinkGroup title="Om Tablaid">
						<li>
							<Link href="/om" className={footerLinkClass}>
								Om oss
							</Link>
						</li>
						<li>
							<Link href="/team" className={footerLinkClass}>
								Team og styre
							</Link>
						</li>
						<li>
							<Link href="/kontakt" className={footerLinkClass}>
								Kontakt
							</Link>
						</li>
						<li>
							<Link href="/investor" className={footerLinkClass}>
								For investorer
							</Link>
						</li>
						<li>
							<Link href="/support" className={footerLinkClass}>
								Støtt Tablaid (formål oppdateres)
							</Link>
						</li>
					</FooterLinkGroup>

					<FooterLinkGroup title="Informasjon">
						<li>
							<Link href="/personvern" className={footerLinkClass}>
								Personvern (venter på oppdatering)
							</Link>
						</li>
						<li>
							<Link
								href="/medisinskapet/legemiddelvett"
								className={footerLinkClass}
							>
								Legemiddelvett
							</Link>
						</li>
					</FooterLinkGroup>
				</div>

				<div className="mt-12 border-t border-slate-800 pt-6 text-center">
					<p className="text-xs text-slate-500">
						© {new Date().getFullYear()} Tablaid. Alle rettigheter forbeholdt.
					</p>
				</div>
			</div>
		</footer>
	);
}

function FooterLinkGroup({
	title,
	children,
}: {
	title: string;
	children: ReactNode;
}) {
	return (
		<div>
			<h2 className="mb-3 text-sm font-semibold text-slate-200">{title}</h2>
			<ul className="space-y-2 text-sm">{children}</ul>
		</div>
	);
}
