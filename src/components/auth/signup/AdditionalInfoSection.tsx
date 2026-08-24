"use client";

import type { ChangeEvent } from "react";
import LogoUploadField from "./LogoUploadField";
import VerificationStatusBadge from "./VerificationStatusBadge";

type Props = {
	description: string;
	onDescriptionChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
	logo: File | null;
	logoError: string | null;
	onLogoChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export default function AdditionalInfoSection({
	description,
	onDescriptionChange,
	logo,
	logoError,
	onLogoChange,
}: Props) {
	return (
		<section className="mb-6">
			<h3 className="mb-3 text-sm font-semibold tracking-wide text-emerald-400">
				Tilleggsinformasjon
			</h3>
			<label className="block mb-4">
				<span className="block mb-1 text-sm text-slate-200">
					Organisasjonsbeskrivelse
				</span>
				<textarea
					value={description}
					onChange={onDescriptionChange}
					rows={3}
					placeholder="Beskriv kort organisasjonens formål og aktiviteter..."
					className="box-border w-full px-4 py-3 bg-transparent border rounded-lg resize-none border-emerald-700/60 text-slate-100 placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-emerald-400 focus:border-emerald-400"
				/>
			</label>
			<div className="grid grid-cols-1 gap-4 md:grid-cols-2">
				<LogoUploadField
					logo={logo}
					error={logoError}
					onChange={onLogoChange}
				/>
				<div>
					<span className="block mb-1 text-sm text-slate-200">
						Verifiseringsstatus
					</span>
					<VerificationStatusBadge />
					<p className="mt-2 text-xs text-slate-400">
						Verifisering utføres av Tablaid-teamet innen 2-5 virkedager.
					</p>
				</div>
			</div>
		</section>
	);
}
