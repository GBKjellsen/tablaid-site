"use client";

import type { ChangeEvent } from "react";
import Input from "../../ui/Input";
import Select from "../../ui/Select";
import { ORG_TYPES } from "../../../data/signupOptions";

type Props = {
	orgName: string;
	onOrgNameChange: (e: ChangeEvent<HTMLInputElement>) => void;
	orgType: string;
	onOrgTypeChange: (value: string) => void; // was: (e: ChangeEvent<HTMLSelectElement>) => void
	orgNumber: string;
	onOrgNumberChange: (e: ChangeEvent<HTMLInputElement>) => void;
	website: string;
	onWebsiteChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export default function OrganizationInfoSection({
	orgName,
	onOrgNameChange,
	orgType,
	onOrgTypeChange,
	orgNumber,
	onOrgNumberChange,
	website,
	onWebsiteChange,
}: Props) {
	return (
		<section className="mb-6">
			<h3 className="mb-3 text-sm font-semibold tracking-wide text-emerald-400">
				Organisasjonsinformasjon
			</h3>
			<div className="grid grid-cols-1 gap-4 md:grid-cols-2">
				<Input
					label="Organisasjonsnavn *"
					value={orgName}
					onChange={onOrgNameChange}
					placeholder="Skriv inn organisasjonsnavn"
				/>
				<Select
					label="Organisasjonstype *"
					value={orgType}
					onChange={onOrgTypeChange}
					placeholder="Velg type"
					options={ORG_TYPES.map((t) => ({ value: t, label: t }))}
				/>
				<Input
					label="Organisasjonsnummer"
					value={orgNumber}
					onChange={onOrgNumberChange}
					placeholder="f.eks. 123 456 789"
				/>
				<Input
					label="Nettside"
					value={website}
					onChange={onWebsiteChange}
					placeholder="https://dinorganisasjon.no"
				/>
			</div>
		</section>
	);
}
