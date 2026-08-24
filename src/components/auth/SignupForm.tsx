"use client";

import { useState } from "react";
import type { ChangeEvent, SubmitEvent } from "react";
import Button from "../ui/Button";
import { useKommuner } from "../../hooks/useKommuner";
import OrganizationInfoSection from "./signup/OrganizationInfoSection";
import ContactInfoSection from "./signup/ContactInfoSection";
import AdditionalInfoSection from "./signup/AdditionalInfoSection";
import AdminInviteSection from "./signup/AdminInviteSection";
import SignupSuccess from "./signup/SignupSuccess";

// TODO: no `organizations` table exists yet in Supabase — submit is stubbed until schema is added.
export default function SignupForm() {
	const [orgName, setOrgName] = useState("");
	const [orgType, setOrgType] = useState("");
	const [orgNumber, setOrgNumber] = useState("");
	const [website, setWebsite] = useState("");
	const [contactName, setContactName] = useState("");
	const [contactEmail, setContactEmail] = useState("");
	const [contactPhone, setContactPhone] = useState("");
	const [address, setAddress] = useState("");
	const [kommuneId, setKommuneId] = useState("");
	const [fylke, setFylke] = useState("");
	const [description, setDescription] = useState("");
	const [logo, setLogo] = useState<File | null>(null);
	const [logoError, setLogoError] = useState<string | null>(null);
	const [adminEmail, setAdminEmail] = useState("");
	const [admins, setAdmins] = useState<string[]>([]);
	const [error, setError] = useState<string | null>(null);
	const [submitting, setSubmitting] = useState(false);
	const [submitted, setSubmitted] = useState(false);

	const kommuner = useKommuner();

	const onLogoChange = (e: ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files?.[0] ?? null;
		setLogoError(null);
		if (file && file.size > 2 * 1024 * 1024) {
			setLogoError("Filen må være maks 2MB.");
			setLogo(null);
			return;
		}
		setLogo(file);
	};

	const addAdmin = () => {
		const email = adminEmail.trim();
		if (!email) return;
		if (!/^\S+@\S+\.\S+$/.test(email)) {
			setError("Ugyldig e-postadresse for administrator.");
			return;
		}
		if (admins.includes(email)) return;
		setAdmins((prev) => [...prev, email]);
		setAdminEmail("");
		setError(null);
	};

	const removeAdmin = (email: string) => {
		setAdmins((prev) => prev.filter((a) => a !== email));
	};

	const submit = async (e: SubmitEvent<HTMLFormElement>) => {
		e.preventDefault();
		setError(null);

		if (!orgName || !orgType || !contactName || !contactEmail) {
			setError("Vennligst fyll ut alle obligatoriske felt.");
			return;
		}

		setSubmitting(true);
		// Placeholder payload — replace with a real insert/RPC once `organizations` exists.
		const payload = {
			orgName,
			orgType,
			orgNumber,
			website,
			contactName,
			contactEmail,
			contactPhone,
			address,
			kommuneId,
			fylke,
			description,
			logoName: logo?.name ?? null,
			admins,
		};
		console.log("Organization signup request (stub):", payload);
		await new Promise((r) => setTimeout(r, 600));
		setSubmitting(false);
		setSubmitted(true);
	};

	if (submitted) {
		return <SignupSuccess />;
	}

	return (
		<form onSubmit={submit} className="w-full max-w-3xl mx-auto">
			<div className="p-8 border bg-slate-800/60 border-slate-700 rounded-2xl">
				<h2 className="mb-1 text-2xl font-bold text-center text-white">
					Registrer din organisasjon
				</h2>
				<p className="mb-6 text-sm text-center text-slate-400">
					Bli en del av Tablaid-nettverket for å administrere tilbud og
					koordinere med deltakere.
				</p>

				<OrganizationInfoSection
					orgName={orgName}
					onOrgNameChange={(e) => setOrgName(e.target.value)}
					orgType={orgType}
					onOrgTypeChange={setOrgType}
					orgNumber={orgNumber}
					onOrgNumberChange={(e) => setOrgNumber(e.target.value)}
					website={website}
					onWebsiteChange={(e) => setWebsite(e.target.value)}
				/>

				<ContactInfoSection
					contactName={contactName}
					onContactNameChange={(e) => setContactName(e.target.value)}
					contactEmail={contactEmail}
					onContactEmailChange={(e) => setContactEmail(e.target.value)}
					contactPhone={contactPhone}
					onContactPhoneChange={(e) => setContactPhone(e.target.value)}
					address={address}
					onAddressChange={(e) => setAddress(e.target.value)}
					kommuneId={kommuneId}
					onKommuneChange={setKommuneId}
					kommuner={kommuner}
					fylke={fylke}
					onFylkeChange={setFylke}
				/>

				<AdditionalInfoSection
					description={description}
					onDescriptionChange={(e) => setDescription(e.target.value)}
					logo={logo}
					logoError={logoError}
					onLogoChange={onLogoChange}
				/>

				<AdminInviteSection
					adminEmail={adminEmail}
					onAdminEmailChange={(e) => setAdminEmail(e.target.value)}
					admins={admins}
					onAdd={addAdmin}
					onRemove={removeAdmin}
				/>

				{error && <div className="mb-4 text-sm text-rose-400">{error}</div>}

				<div className="flex items-center justify-between pt-4 border-t border-slate-700">
					<span className="text-xs text-slate-400">
						* Obligatoriske felt. Du kan fylle inn valgfrie felt eller senere.
					</span>
					<Button type="submit" disabled={submitting}>
						{submitting ? "Sender…" : "Registrer organisasjon →"}
					</Button>
				</div>

				<div className="mt-4 text-sm text-center text-slate-400">
					Allerede registrert?{" "}
					<a href="/login" className="text-emerald-300 hover:underline">
						Logg inn på din konto
					</a>
				</div>
			</div>
		</form>
	);
}
