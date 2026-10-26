"use client";

import { useState } from "react";
import DynamicForm from "@/components/dashboard/forms/DynamicForm";
import Button from "@/components/ui/Button";
import { LAVTERSKELTILBUD_TEMPLATE } from "@/data/lavterskeltilbudTemplate";
import type { FormValues } from "@/types/formTemplate";

export default function OpprettTilbudPage() {
	const [values, setValues] = useState<FormValues>({});

	const onChange = (id: string, value: string | string[]) => {
		setValues((prev) => ({ ...prev, [id]: value }));
	};

	return (
		<div className="p-8 border rounded-xl border-white/10 bg-white/5">
			<h2 className="mb-1 text-lg font-semibold text-white">
				{LAVTERSKELTILBUD_TEMPLATE.name}
			</h2>
			<p className="mb-6 text-sm text-slate-400">
				Registrer et nytt lavterskeltilbud for organisasjonen din.
			</p>

			<DynamicForm
				template={LAVTERSKELTILBUD_TEMPLATE}
				values={values}
				onChange={onChange}
			/>

			<div className="flex justify-end pt-6 mt-8 border-t border-white/10">
				{/* TODO: wire to real submit + import/export once formats are confirmed */}
				<Button type="button">Lagre tilbud</Button>
			</div>
		</div>
	);
}
