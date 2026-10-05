import type { FormTemplate } from "@/types/formTemplate";

export const LAVTERSKELTILBUD_TEMPLATE: FormTemplate = {
	id: "lavterskeltilbud-standard",
	name: "Lavterskeltilbud (standard)",
	sections: [
		{
			title: "Grunnleggende informasjon",
			fields: [
				{ id: "tittel", label: "Tittel", type: "text", required: true },
				{
					id: "kortBeskrivelse",
					label: "Kort beskrivelse",
					type: "text",
					required: true,
				},
				{ id: "fullBeskrivelse", label: "Full beskrivelse", type: "textarea" },
			],
		},
		{
			title: "Tilbudstype",
			fields: [
				{
					id: "tilbudstype",
					label: "Tilbudstype",
					type: "select",
					required: true,
					options: [
						"Arrangement",
						"Kurs",
						"Støttegruppe",
						"Aktivitet",
						"Veiledning",
						"Webinar",
						"Frivillig aktivitet",
						"Informasjonstjeneste",
						"Rehabiliteringsprogram",
						"Annet",
					],
				},
			],
		},
		{
			title: "Format og lokasjon",
			fields: [
				{
					id: "format",
					label: "Format",
					type: "select",
					required: true,
					options: ["Fysisk", "Digitalt", "Hybrid"],
				},
				{
					id: "adresse",
					label: "Adresse",
					type: "text",
					visibleIf: { fieldId: "format", equals: ["Fysisk", "Hybrid"] },
				},
				{
					id: "kommune",
					label: "Kommune",
					type: "text",
					visibleIf: { fieldId: "format", equals: ["Fysisk", "Hybrid"] },
				},
				{
					id: "fylke",
					label: "Fylke",
					type: "text",
					visibleIf: { fieldId: "format", equals: ["Fysisk", "Hybrid"] },
				},
				{
					id: "lokale",
					label: "Lokale/rom",
					type: "text",
					visibleIf: { fieldId: "format", equals: ["Fysisk", "Hybrid"] },
				},
				{
					id: "tilgjengelighet",
					label: "Tilgjengelighetsinformasjon",
					type: "textarea",
				},
			],
		},
		{
			title: "Tidspunkt og gjentakelse",
			fields: [
				{
					id: "frekvens",
					label: "Gjentakelse",
					type: "select",
					required: true,
					options: [
						"Engangsarrangement",
						"Ukentlig",
						"Annenhver uke",
						"Månedlig",
						"Tilpasset gjentakelse",
					],
				},
				{ id: "tidsrom", label: "Starttid / Sluttid", type: "datetime-range" },
			],
		},
		{
			title: "Påmelding",
			fields: [
				{
					id: "pameldingType",
					label: "Påmelding",
					type: "select",
					required: true,
					options: [
						"Ingen påmelding nødvendig",
						"Ekstern påmeldingslenke",
						"Påmelding gjennom plattformen",
					],
				},
				{
					id: "kapasitet",
					label: "Kapasitet",
					type: "text",
					visibleIf: {
						fieldId: "pameldingType",
						equals: "Påmelding gjennom plattformen",
					},
				},
				{
					id: "venteliste",
					label: "Venteliste",
					type: "select",
					options: ["Ja", "Nei"],
					visibleIf: {
						fieldId: "pameldingType",
						equals: "Påmelding gjennom plattformen",
					},
				},
			],
		},
		{
			title: "Målgruppe",
			fields: [
				{
					id: "malgruppe",
					label: "Målgruppe",
					type: "multiselect",
					options: [
						"Barn (0–12)",
						"Ungdom (13–17)",
						"Unge voksne (18–25)",
						"Voksne (26–66)",
						"Seniorer (67+)",
						"Alle aldre",
					],
				},
			],
		},
		{
			title: "Tilstander",
			fields: [
				{
					id: "tilstander",
					label: "Tilstander",
					type: "multiselect",
					options: [
						"Kroniske smerter",
						"Epilepsi",
						"ADHD",
						"Autisme",
						"Angst",
						"Depresjon",
						"Kreft",
						"Parkinson",
						"Diabetes",
						"Migrene",
						"Annet",
					],
				},
			],
		},
	],
};
