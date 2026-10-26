"use client";

import { useEffect, useState } from "react";
import type { ChangeEvent } from "react";

type Props = {
	logo: File | null;
	error: string | null;
	onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export default function LogoUploadField({ logo, error, onChange }: Props) {
	const [previewUrl, setPreviewUrl] = useState<string | null>(null);

	useEffect(() => {
		if (!logo) {
			setPreviewUrl(null);
			return;
		}
		const url = URL.createObjectURL(logo);
		setPreviewUrl(url);
		return () => URL.revokeObjectURL(url);
	}, [logo]);

	return (
		<div className="block">
			<span className="block mb-1 text-sm text-slate-200">
				Organisasjonslogo
			</span>
			<div className="box-border flex items-center justify-center gap-3 px-4 py-6 text-sm text-center border rounded-lg cursor-pointer border-emerald-700/60 text-slate-400 hover:border-emerald-400 hover:text-slate-300 focus-within:border-emerald-400 focus-within:ring-1 focus-within:ring-emerald-400">
				<input
					type="file"
					accept=".png,.svg"
					onChange={onChange}
					className="hidden"
					id="logo-upload"
				/>
				{previewUrl ? (
					<label
						htmlFor="logo-upload"
						className="flex items-center gap-3 cursor-pointer"
					>
						<img
							src={previewUrl}
							alt="Forhåndsvisning av logo"
							className="object-contain w-12 h-12 border rounded-md border-slate-700 bg-slate-900"
						/>
						<span className="text-left">
							<span className="block text-slate-200">{logo!.name}</span>
							<span className="block text-xs text-slate-400">
								Klikk for å endre logo
							</span>
						</span>
					</label>
				) : (
					<label htmlFor="logo-upload" className="cursor-pointer">
						Klikk for å laste opp logo (PNG, SVG, maks 2MB)
					</label>
				)}
			</div>
			{error && (
				<span className="block mt-1 text-xs text-rose-400">{error}</span>
			)}
		</div>
	);
}
