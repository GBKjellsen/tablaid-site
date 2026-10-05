export type FieldType =
	| "text"
	| "textarea"
	| "select"
	| "multiselect"
	| "datetime-range";

export type FormFieldDef = {
	id: string;
	label: string;
	type: FieldType;
	options?: string[];
	required?: boolean;
	visibleIf?: { fieldId: string; equals: string | string[] };
};

export type FormSection = { title: string; fields: FormFieldDef[] };

export type FormTemplate = {
	id: string;
	name: string;
	sections: FormSection[];
};

export type FormValues = Record<string, string | string[] | undefined>;
