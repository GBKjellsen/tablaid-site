import Link from "next/link";
import MedicationPrincipleCard from "@/components/medication/MedicationPrincipleCard";
import { medicationPrinciples } from "@/data/medicationPrinciples";

export default function LegemiddelvettPage() {
	return (
		<main>
			<section className="section-dark mx-[7vw] px-6 py-20 sm:py-24">
				<div className="mx-auto max-w-(--max-w) text-center">
					<h1 className="text-4xl font-bold text-white sm:text-5xl">
						Legemiddelvett – kunnskap for tryggere legemiddelrutiner
					</h1>
					<p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-(--text-secondary)">
						Legemiddelvett samler praktiske råd som kan hjelpe deg med å bruke
						legemidler på en trygg og gjennomtenkt måte.
					</p>
					<p className="mx-auto mt-4 max-w-3xl text-(--text-secondary)">
						God oversikt kan være nyttig, men generelle råd erstatter ikke
						informasjonen i pakningsvedlegget eller individuell veiledning fra
						lege og apotek.
					</p>
				</div>
			</section>

			<section className="mx-[7vw] py-16 section-lighter">
				<div className="mx-auto max-w-(--max-w) px-6">
					<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
						{medicationPrinciples.map((principle) => (
							<MedicationPrincipleCard key={principle.id} principle={principle} />
						))}
					</div>
					<p className="mt-8 text-sm text-slate-400">
						Rådene, kildene og formuleringene gjennomgås og oppdateres.
					</p>
				</div>
			</section>

			<section className="px-6 py-20 section-soft">
				<div className="mx-auto max-w-(--max-w) text-center">
					<h2 className="text-3xl font-semibold text-white">
						Bruk Medisinskapet som støtte for oversikt
					</h2>
					<p className="max-w-3xl mx-auto mt-4 text-(--text-secondary)">
						Medisinskapet kan hjelpe deg med å holde oversikt over legemidler,
						registrert dosering, inntak, beholdning og egne notater. Appen
						erstatter ikke medisinsk rådgivning.
					</p>
					<Link href="/medisinskapet" className="button-primary mt-7 inline-flex">
						Les om Medisinskapet
					</Link>
				</div>
			</section>
		</main>
	);
}
