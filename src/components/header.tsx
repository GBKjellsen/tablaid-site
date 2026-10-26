"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
	const [open, setOpen] = useState(false);

	return (
		<header className="sticky top-0 z-50 w-full bg-[#0A0F1F]/95 backdrop-blur border-b border-white/10">
			<nav className="flex items-center justify-between max-w-6xl px-4 py-3 mx-auto">
				{/* LOGO */}
				<Link href="/" className="flex items-center">
					<Image
						src="/tablaid-logo-negative.png"
						alt="Tablaid logo"
						width={200}
						height={60}
						priority
					/>
				</Link>

				{/* DESKTOP MENU */}
				<div className="items-center hidden gap-8 text-sm lg:flex">
					<Link href="/medisinskapet" className="hover:text-emerald-300">
						Medisinskapet
					</Link>
					<Link href="/for-deg" className="hover:text-emerald-300">
						For deg
					</Link>
					<Link href="/lavterskeltilbud" className="hover:text-emerald-300">
						Lavterskeltilbud
					</Link>
					<Link href="/organisasjoner" className="hover:text-emerald-300">
						For organisasjoner
					</Link>
					<Link href="/investor" className="hover:text-emerald-300">
						For investorer
					</Link>
					<Link href="/om" className="hover:text-emerald-300">
						Om Tablaid
					</Link>
					<Link href="/login" className="button-primary">
						Logg inn
					</Link>
					<Link href="/en" aria-label="English">
						<Image src="/gb-flag.svg" alt="English" width={28} height={20} />
					</Link>
				</div>

				{/* MOBILE MENU BUTTON */}
				<button
					className="px-2 py-1 text-2xl text-white border rounded-md lg:hidden border-emerald-400"
					onClick={() => setOpen(!open)}
					aria-expanded={open}
					aria-label={open ? "Lukk meny" : "Åpne meny"}
				>
					{open ? "✕" : "☰"}
				</button>
			</nav>

			{/* MOBILE MENU */}
			{open && (
				<div className="flex flex-col px-6 py-5 space-y-4 text-sm text-white border-t rounded-b-lg shadow-lg lg:hidden bg-slate-950 border-white/10">
					<Link href="/medisinskapet" onClick={() => setOpen(false)}>
						Medisinskapet
					</Link>
					<Link href="/for-deg" onClick={() => setOpen(false)}>
						For deg
					</Link>
					<Link href="/lavterskeltilbud" onClick={() => setOpen(false)}>
						Lavterskeltilbud
					</Link>
					<Link href="/organisasjoner" onClick={() => setOpen(false)}>
						For organisasjoner
					</Link>
					<Link href="/investor" onClick={() => setOpen(false)}>
						For investorer
					</Link>
					<Link href="/om" onClick={() => setOpen(false)}>
						Om Tablaid
					</Link>
					<Link href="/login" onClick={() => setOpen(false)}>
						Logg inn
					</Link>
					<Link href="/en" onClick={() => setOpen(false)} aria-label="English">
						<Image src="/gb-flag.svg" alt="English" width={28} height={20} />
					</Link>
				</div>
			)}
		</header>
	);
}
