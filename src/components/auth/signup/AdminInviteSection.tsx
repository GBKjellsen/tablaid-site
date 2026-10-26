"use client";

import type { ChangeEvent } from "react";
import Input from "../../ui/Input";
import Button from "../../ui/Button";

type Props = {
	adminEmail: string;
	onAdminEmailChange: (e: ChangeEvent<HTMLInputElement>) => void;
	admins: string[];
	onAdd: () => void;
	onRemove: (email: string) => void;
};

export default function AdminInviteSection({
	adminEmail,
	onAdminEmailChange,
	admins,
	onAdd,
	onRemove,
}: Props) {
	return (
		<section className="mb-6">
			<h3 className="mb-3 text-sm font-semibold tracking-wide text-emerald-400">
				Administratorer / Brukere
			</h3>
			<span className="block mb-1 text-sm text-slate-200">
				Inviter administrator via e-post
			</span>
			<div className="flex gap-2">
				<div className="flex-1">
					<Input
						type="email"
						value={adminEmail}
						onChange={onAdminEmailChange}
						placeholder="admin@organisasjon.no"
					/>
				</div>
				<Button type="button" onClick={onAdd}>
					+ Legg til bruker
				</Button>
			</div>
			{admins.length > 0 && (
				<ul className="mt-3 space-y-1">
					{admins.map((a) => (
						<li
							key={a}
							className="flex items-center justify-between px-3 py-2 text-sm rounded-lg bg-slate-900/50 text-slate-200"
						>
							{a}
							<button
								type="button"
								onClick={() => onRemove(a)}
								className="text-rose-400 hover:underline"
							>
								Fjern
							</button>
						</li>
					))}
				</ul>
			)}
		</section>
	);
}
