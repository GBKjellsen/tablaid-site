import {
	ActivityIcon,
	CalendarIcon,
	UsersIcon,
	BarChartIcon,
} from "@/components/ui/Icons";

const KPIS = [
	{
		label: "Aktive tilbud",
		value: "12",
		trend: "+3 denne måneden",
		icon: ActivityIcon,
	},
	{
		label: "Kommende tilbud",
		value: "5",
		trend: "Neste 30 dager",
		icon: CalendarIcon,
	},
	{
		label: "Antall besøkende",
		value: "48",
		trend: "+12 denne uken",
		icon: UsersIcon,
	},
	{
		label: "Antall tilbudsvisninger",
		value: "187",
		trend: "+24 % vs forrige måned",
		icon: BarChartIcon,
	},
];

const OFFERS = [
	{
		name: "Kurs i legemiddelbruk",
		status: "Publisert",
		regs: 32,
		date: "15. jul 2026",
	},
	{
		name: "Hjemmetrygglelksvurdering",
		status: "Godkjent",
		regs: 18,
		date: "22. jul 2026",
	},
	{
		name: "Pårørendestøttegruppe",
		status: "Innsendt",
		regs: 7,
		date: "1. aug 2026",
	},
	{
		name: "Introduksjonskurs i digital helse",
		status: "Utkast",
		regs: null,
		date: "TBD",
	},
];

const STATUS_STYLES: Record<string, string> = {
	Utkast: "bg-slate-700 text-slate-200",
	Innsendt: "bg-amber-900/40 text-amber-300",
	Godkjent: "bg-indigo-900/40 text-indigo-300",
	Publisert: "bg-emerald-900/40 text-emerald-300",
};

const PIPELINE = [
	{ label: "Utkast", count: 2, dot: "bg-slate-400" },
	{ label: "Innsendt", count: 3, dot: "bg-amber-400" },
	{ label: "Godkjent", count: 4, dot: "bg-indigo-400" },
	{ label: "Publisert", count: 12, dot: "bg-emerald-400" },
	{ label: "Arkivert", count: 8, dot: "bg-purple-400" },
];

export default function DashboardPage() {
	return (
		<div className="space-y-6">
			<div className="grid grid-cols-1 gap-4 md:grid-cols-4">
				{KPIS.map((k) => (
					<div
						key={k.label}
						className="p-5 border rounded-xl border-white/10 bg-white/5"
					>
						<div className="flex items-start justify-between mb-3">
							<span className="text-sm text-slate-400">{k.label}</span>
							<span className="flex items-center justify-center w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-300">
								<k.icon />
							</span>
						</div>
						<div className="text-3xl font-bold">{k.value}</div>
						<div className="mt-1 text-xs text-emerald-400">{k.trend}</div>
					</div>
				))}
			</div>

			<div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
				<div className="p-5 border lg:col-span-2 rounded-xl border-white/10 bg-white/5">
					<div className="flex items-center justify-between mb-4">
						<h2 className="font-semibold text-emerald-300">
							Administrer tilbud
						</h2>
						<a
							href="/dashboard/administrer-tilbud"
							className="text-sm text-emerald-300 hover:underline"
						>
							Se alle →
						</a>
					</div>
					<table className="w-full text-sm">
						<thead>
							<tr className="text-xs text-left border-b text-slate-400 border-white/10">
								<th className="pb-2 font-medium">Tilbudsnavn</th>
								<th className="pb-2 font-medium">Status</th>
								<th className="pb-2 font-medium">Registreringer</th>
								<th className="pb-2 font-medium">Dato</th>
							</tr>
						</thead>
						<tbody>
							{OFFERS.map((o) => (
								<tr
									key={o.name}
									className="border-b border-white/5 last:border-0"
								>
									<td className="py-3">{o.name}</td>
									<td className="py-3">
										<span
											className={`rounded-full px-2 py-0.5 text-xs font-medium ${STATUS_STYLES[o.status]}`}
										>
											{o.status}
										</span>
									</td>
									<td className="py-3">{o.regs ?? "—"}</td>
									<td className="py-3 text-slate-400">{o.date}</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>

				<div className="space-y-6">
					<div className="p-5 border rounded-xl border-white/10 bg-white/5">
						<h2 className="mb-1 font-semibold text-emerald-300">
							Modereringsstatus
						</h2>
						<p className="mb-4 text-xs text-slate-400">
							Tilbudspipeline etter gjennomgangssteg
						</p>
						<div className="space-y-2">
							{PIPELINE.map((p) => (
								<div
									key={p.label}
									className="flex items-center justify-between px-3 py-2 text-sm rounded-lg bg-white/5"
								>
									<span className="flex items-center gap-2">
										<span className={`h-2 w-2 rounded-full ${p.dot}`} />
										{p.label}
									</span>
									<span className="font-semibold">{p.count}</span>
								</div>
							))}
						</div>
					</div>

					<div className="p-5 border rounded-xl border-white/10 bg-white/5">
						<h2 className="mb-4 font-semibold text-emerald-300">
							Hurtighandlinger
						</h2>
						<div className="space-y-2">
							<a
								href="/dashboard/opprett-tilbud"
								className="block px-3 py-2 text-sm rounded-lg bg-white/5 hover:bg-white/10"
							>
								Opprett nytt tilbud
							</a>
							<a
								href="/dashboard/maler"
								className="block px-3 py-2 text-sm rounded-lg bg-white/5 hover:bg-white/10"
							>
								Bla gjennom maler
							</a>
							<a
								href="/dashboard/organisasjonsprofil"
								className="block px-3 py-2 text-sm rounded-lg bg-white/5 hover:bg-white/10"
							>
								Rediger organisasjonsprofil
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
