"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { DASHBOARD_NAV } from "@/data/dashboardNav";
import { BellIcon, LogOutIcon, PlusCircleIcon } from "../ui/Icons";
import { useAuth } from "../../hooks/useAuth";

// TODO: gate is intentionally open until real Supabase auth is restored — see note below.
const AUTH_GATE_ENABLED = false;

export default function DashboardLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const pathname = usePathname();
	const router = useRouter();
	const { user, loading, signOut } = useAuth();
	const active =
		DASHBOARD_NAV.find((n) => n.href === pathname) ?? DASHBOARD_NAV[0];

	if (AUTH_GATE_ENABLED && !loading && !user) {
		router.replace("/login");
		return null;
	}

	return (
		<div className="flex min-h-screen bg-[#0A0F1F] text-slate-100">
			<aside className="flex flex-col w-64 border-r shrink-0 border-white/10 bg-[#0A0F1F]">
				<div className="px-5 py-5">
					<span className="text-lg font-bold">
						TABLAID <span className="text-emerald-400">Org</span>
					</span>
				</div>

				<div className="flex items-center gap-3 px-5 py-3 mx-3 mb-4 border rounded-xl border-white/10 bg-white/5">
					<div className="flex items-center justify-center text-sm font-semibold rounded-full w-9 h-9 bg-emerald-500/20 text-emerald-300">
						{/* TODO: derive from real org/session data once auth is restored */}
						OS
					</div>
					<div className="text-sm">
						<div className="font-semibold">Oslo Kommune</div>
						<div className="text-xs text-emerald-400">Kommune • Verifisert</div>
					</div>
				</div>

				<div className="px-5 mb-2 text-xs font-semibold tracking-wide text-slate-500">
					NAVIGASJON
				</div>
				<nav className="flex-1 px-3 space-y-1">
					{DASHBOARD_NAV.map((item) => {
						const isActive = item.href === active.href;
						const Icon = item.icon;
						return (
							<Link
								key={item.href}
								href={item.href}
								className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition ${
									isActive
										? "bg-emerald-500/10 text-emerald-300"
										: "text-slate-300 hover:bg-white/5 hover:text-white"
								}`}
							>
								<Icon className="shrink-0" />
								{item.label}
								{isActive && (
									<span className="w-1.5 h-1.5 ml-auto rounded-full bg-emerald-400" />
								)}
							</Link>
						);
					})}
				</nav>

				<div className="p-3 border-t border-white/10">
					<button
						type="button"
						onClick={() => signOut().then(() => router.push("/login"))}
						className="flex items-center w-full gap-3 px-3 py-2 text-sm rounded-lg text-slate-300 hover:bg-white/5 hover:text-white"
					>
						<LogOutIcon />
						Logg ut
					</button>
				</div>
			</aside>

			<div className="flex-1 min-w-0">
				<header className="flex items-center justify-between px-8 py-4 border-b border-white/10">
					<div>
						<h1 className="text-xl font-bold">{active.label}</h1>
						<p className="text-xs text-slate-400">Dashbord • Oslo Kommune</p>
					</div>
					<div className="flex items-center gap-3">
						<Link
							href="/dashboard/opprett-tilbud"
							className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-lg bg-emerald-500 hover:bg-emerald-400"
						>
							<PlusCircleIcon /> Opprett tilbud
						</Link>
						<button
							type="button"
							aria-label="Varsler"
							className="flex items-center justify-center border rounded-lg h-9 w-9 border-white/10 text-slate-300 hover:text-white"
						>
							<BellIcon />
						</button>
					</div>
				</header>
				<main className="p-8">{children}</main>
			</div>
		</div>
	);
}
