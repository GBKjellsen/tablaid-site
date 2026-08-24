"use client";

import type { ChangeEvent } from "react";
import Input from "../../ui/Input";
import Select from "../../ui/Select";
import { FYLKER } from "../../../data/signupOptions";
import type { Kommune } from "../../../hooks/useKommuner";

type Props = {
	contactName: string;
	onContactNameChange: (e: ChangeEvent<HTMLInputElement>) => void;
	contactEmail: string;
	onContactEmailChange: (e: ChangeEvent<HTMLInputElement>) => void;
	contactPhone: string;
	onContactPhoneChange: (e: ChangeEvent<HTMLInputElement>) => void;
	address: string;
	onAddressChange: (e: ChangeEvent<HTMLInputElement>) => void;
	kommuneId: string;
	onKommuneChange: (value: string) => void; // was: (e: ChangeEvent<HTMLSelectElement>) => void
	kommuner: Kommune[];
	fylke: string;
	onFylkeChange: (value: string) => void; // was: (e: ChangeEvent<HTMLSelectElement>) => void
};

export default function ContactInfoSection({
	contactName,
	onContactNameChange,
	contactEmail,
	onContactEmailChange,
	contactPhone,
	onContactPhoneChange,
	address,
	onAddressChange,
	kommuneId,
	onKommuneChange,
	kommuner,
	fylke,
	onFylkeChange,
}: Props) {
	return (
		<section className="mb-6">
			<h3 className="mb-3 text-sm font-semibold tracking-wide text-emerald-400">
				Primær kontaktperson
			</h3>
			<div className="grid grid-cols-1 gap-4 md:grid-cols-2">
				<Input
					label="Kontaktpersonens navn *"
					value={contactName}
					onChange={onContactNameChange}
					placeholder="Fullt navn"
				/>
				<Input
					label="Kontaktpersonens e-post *"
					type="email"
					value={contactEmail}
					onChange={onContactEmailChange}
					placeholder="kontakt@organisasjon.no"
				/>
				<Input
					label="Kontaktpersonens telefon"
					value={contactPhone}
					onChange={onContactPhoneChange}
					placeholder="+47 000 00 000"
				/>
				<Input
					label="Postadresse"
					value={address}
					onChange={onAddressChange}
					placeholder="Gateadresse, postnummer"
				/>
				<Select
					label="Kommune"
					value={kommuneId}
					onChange={onKommuneChange}
					placeholder="Velg kommune"
					options={kommuner.map((k) => ({
						value: k.municipality_id ?? "",
						label: k.municipality_name ?? "",
					}))}
				/>
				<Select
					label="Fylke"
					value={fylke}
					onChange={onFylkeChange}
					placeholder="Velg fylke"
					options={FYLKER.map((f) => ({ value: f, label: f }))}
				/>
			</div>
		</section>
	);
}
