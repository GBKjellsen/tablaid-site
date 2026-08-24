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
					<Link href="/innbyggere" className="hover:text-emerald-300">
						Innbyggere
					</Link>
					<Link href="/parorende" className="hover:text-emerald-300">
						Pårørende
					</Link>
					<Link href="/kommuner" className="hover:text-emerald-300">
						Kommuner
					</Link>
					<Link href="/investor" className="hover:text-emerald-300">
						Investor
					</Link>
					<Link href="/om" className="hover:text-emerald-300">
						Om Tablaid
					</Link>
					<Link href="/kontakt" className="button-primary">
						Kontakt oss
					</Link>
					<Link href="/support" className="hover:text-emerald-300">
						Support Tablaid
					</Link>
					<Link href="/login" className="hover:text-emerald-300">
						Logg inn
					</Link>
					<Link href="/signup" className="hover:text-emerald-300">
						Registrer
					</Link>

					{/* ENGLISH FLAG */}
					<Link href="/en">
						<Image
							src="/gb-flag.svg"
							alt="English"
							width={24}
							height={16}
							className="opacity-80 hover:opacity-100"
						/>
					</Link>
				</div>

				{/* MOBILE MENU BUTTON */}
				<button
					className="px-2 py-1 text-2xl text-white border rounded-md lg:hidden border-emerald-400"
					onClick={() => setOpen(!open)}
				>
					{open ? "✕" : "☰"}
				</button>
			</nav>

			{/* MOBILE MENU */}
			{open && (
				<div className="flex flex-col px-6 py-5 space-y-4 text-sm text-white border-t rounded-b-lg shadow-lg lg:hidden bg-slate-950 border-white/10">
					<Link href="/innbyggere" onClick={() => setOpen(false)}>
						Innbyggere
					</Link>
					<Link href="/parorende" onClick={() => setOpen(false)}>
						Pårørende
					</Link>
					<Link href="/kommuner" onClick={() => setOpen(false)}>
						Kommuner
					</Link>
					<Link href="/investor" onClick={() => setOpen(false)}>
						Investor
					</Link>
					<Link href="/om" onClick={() => setOpen(false)}>
						Om Tablaid
					</Link>
					<Link href="/support" onClick={() => setOpen(false)}>
						Support Tablaid
					</Link>
					<Link href="/login" onClick={() => setOpen(false)}>
						Logg inn
					</Link>
					<Link href="/signup" onClick={() => setOpen(false)}>
						Registrer
					</Link>
					<Link href="/en" onClick={() => setOpen(false)}>
						<Image src="/gb-flag.svg" width={26} height={18} alt="English" />
					</Link>
				</div>
			)}
		</header>
	);
}
