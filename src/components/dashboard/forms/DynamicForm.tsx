"use client";

import Input from "@/components/ui/Input";
import Select from "@/components/ui/Select";
import type {
	FormTemplate,
	FormFieldDef,
	FormValues,
} from "@/types/formTemplate";

type Props = {
	template: FormTemplate;
	values: FormValues;
	onChange: (id: string, value: string | string[]) => void;
};

function isVisible(field: FormFieldDef, values: FormValues): boolean {
	if (!field.visibleIf) return true;
	const current = values[field.visibleIf.fieldId];
	const target = field.visibleIf.equals;
	return Array.isArray(target)
		? target.includes(current as string)
		: current === target;
}

function MultiSelectField({
	field,
	values,
	onChange,
}: {
	field: FormFieldDef;
	values: FormValues;
	onChange: Props["onChange"];
}) {
	const selected = (values[field.id] as string[]) ?? [];
	const toggle = (option: string) => {
		const next = selected.includes(option)
			? selected.filter((o) => o !== option)
			: [...selected, option];
		onChange(field.id, next);
	};
	return (
		<div className="block w-full">
			<span className="block mb-1 text-sm text-slate-200">{field.label}</span>
			<div className="flex flex-wrap gap-2">
				{field.options?.map((option) => {
					const active = selected.includes(option);
					return (
						<button
							key={option}
							type="button"
							onClick={() => toggle(option)}
							className={`rounded-full border px-3 py-1.5 text-sm transition ${
								active
									? "border-emerald-400 bg-emerald-500/15 text-emerald-300"
									: "border-emerald-700/60 text-slate-300 hover:border-emerald-400"
							}`}
						>
							{option}
						</button>
					);
				})}
			</div>
		</div>
	);
}

function Field({
	field,
	values,
	onChange,
}: {
	field: FormFieldDef;
	values: FormValues;
	onChange: Props["onChange"];
}) {
	const value = values[field.id];

	switch (field.type) {
		case "text":
			return (
				<Input
					label={field.label}
					required={field.required}
					value={(value as string) ?? ""}
					onChange={(e) => onChange(field.id, e.target.value)}
				/>
			);
		case "textarea":
			return (
				<label className="block w-full">
					<span className="block mb-1 text-sm text-slate-200">
						{field.label}
					</span>
					<textarea
						rows={3}
						value={(value as string) ?? ""}
						onChange={(e) => onChange(field.id, e.target.value)}
						className="box-border w-full px-4 py-3 bg-transparent border rounded-lg resize-none border-emerald-700/60 text-slate-100 placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-emerald-400 focus:border-emerald-400"
					/>
				</label>
			);
		case "select":
			return (
				<Select
					label={field.label}
					value={(value as string) ?? ""}
					onChange={(v) => onChange(field.id, v)}
					placeholder="Velg"
					options={(field.options ?? []).map((o) => ({ value: o, label: o }))}
				/>
			);
		case "multiselect":
			return (
				<MultiSelectField field={field} values={values} onChange={onChange} />
			);
		case "datetime-range": {
			const [start, end] = (value as string[]) ?? ["", ""];
			return (
				<div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
					<Input
						label="Starttid"
						type="datetime-local"
						value={start ?? ""}
						onChange={(e) => onChange(field.id, [e.target.value, end ?? ""])}
					/>
					<Input
						label="Sluttid"
						type="datetime-local"
						value={end ?? ""}
						onChange={(e) => onChange(field.id, [start ?? "", e.target.value])}
					/>
				</div>
			);
		}
	}
}

export default function DynamicForm({ template, values, onChange }: Props) {
	return (
		<div className="space-y-8">
			{template.sections.map((section) => (
				<section key={section.title}>
					<h3 className="mb-3 text-sm font-semibold tracking-wide text-emerald-400">
						{section.title}
					</h3>
					<div className="grid grid-cols-1 gap-4 md:grid-cols-2">
						{section.fields
							.filter((field) => isVisible(field, values))
							.map((field) => (
								<div
									key={field.id}
									className={
										field.type === "textarea" || field.type === "multiselect"
											? "md:col-span-2"
											: ""
									}
								>
									<Field field={field} values={values} onChange={onChange} />
								</div>
							))}
					</div>
				</section>
			))}
		</div>
	);
}
