"use client";

import { useEffect, useId, useMemo, useRef, useState } from "react";
import { ChevronDownIcon } from "./icons";

type Option = { value: string; label: string };

type Props = {
	label?: string;
	options: Option[];
	value: string;
	onChange: (value: string) => void;
	placeholder?: string;
	error?: string | null;
	disabled?: boolean;
	searchable?: boolean; // turn on for long lists like Kommune
};

export default function Select({
	label,
	options,
	value,
	onChange,
	placeholder,
	error,
	disabled,
	searchable = false,
}: Props) {
	const [open, setOpen] = useState(false);
	const [query, setQuery] = useState("");
	const [activeIndex, setActiveIndex] = useState(-1);
	const rootRef = useRef<HTMLDivElement>(null);
	const listId = useId();
	const labelId = useId();

	const filtered = useMemo(
		() =>
			searchable && query
				? options.filter((o) =>
						o.label.toLowerCase().includes(query.toLowerCase()),
					)
				: options,
		[options, query, searchable],
	);

	const selected = options.find((o) => o.value === value);

	// close on outside click
	useEffect(() => {
		const onDocClick = (e: MouseEvent) => {
			if (rootRef.current && !rootRef.current.contains(e.target as Node)) {
				setOpen(false);
			}
		};
		document.addEventListener("mousedown", onDocClick);
		return () => document.removeEventListener("mousedown", onDocClick);
	}, []);

	const commit = (v: string) => {
		onChange(v);
		setOpen(false);
		setQuery("");
	};

	const onKeyDown = (e: React.KeyboardEvent) => {
		if (
			!open &&
			(e.key === "Enter" || e.key === " " || e.key === "ArrowDown")
		) {
			e.preventDefault();
			setOpen(true);
			return;
		}
		if (!open) return;
		if (e.key === "ArrowDown") {
			e.preventDefault();
			setActiveIndex((i) => Math.min(i + 1, filtered.length - 1));
		} else if (e.key === "ArrowUp") {
			e.preventDefault();
			setActiveIndex((i) => Math.max(i - 1, 0));
		} else if (e.key === "Enter") {
			e.preventDefault();
			if (filtered[activeIndex]) commit(filtered[activeIndex].value);
		} else if (e.key === "Escape") {
			setOpen(false);
		}
	};

	return (
		<div className="block w-full" ref={rootRef}>
			{label && (
				<span id={labelId} className="block mb-1 text-sm text-slate-200">
					{label}
				</span>
			)}
			<div className="relative w-full">
				<button
					type="button"
					disabled={disabled}
					role="combobox"
					aria-haspopup="listbox"
					aria-expanded={open}
					aria-controls={listId}
					aria-labelledby={labelId}
					onClick={() => setOpen((o) => !o)}
					onKeyDown={onKeyDown}
					className="box-border w-full px-4 py-3 pr-10 text-left bg-transparent border rounded-lg border-emerald-700/60 text-slate-100 focus:outline-none focus:ring-1 focus:ring-emerald-400 focus:border-emerald-400 disabled:opacity-60"
				>
					{selected ? (
						selected.label
					) : (
						<span className="text-slate-400">{placeholder}</span>
					)}
				</button>
				<span className="absolute -translate-y-1/2 pointer-events-none right-3 top-1/2 text-emerald-400">
					<ChevronDownIcon />
				</span>

				{open && (
					<div className="absolute z-20 w-full mt-1 overflow-hidden border rounded-lg shadow-lg bg-slate-900 border-emerald-700/60">
						{searchable && (
							<input
								autoFocus
								value={query}
								onChange={(e) => setQuery(e.target.value)}
								placeholder="Søk..."
								className="w-full px-3 py-2 text-sm bg-transparent border-b border-emerald-700/40 text-slate-100 placeholder:text-slate-500 focus:outline-none"
							/>
						)}
						<ul
							id={listId}
							role="listbox"
							className="p-0 m-0 overflow-y-auto list-none max-h-60"
						>
							{filtered.map((o, i) => (
								<li
									key={o.value}
									role="option"
									aria-selected={o.value === value}
									onMouseEnter={() => setActiveIndex(i)}
									onClick={() => commit(o.value)}
									className={`cursor-pointer px-4 py-2 text-sm ${
										o.value === value
											? "bg-emerald-500/15 text-emerald-400"
											: i === activeIndex
												? "bg-emerald-500/10 text-slate-100"
												: "text-slate-100"
									}`}
								>
									{o.label}
								</li>
							))}
							{filtered.length === 0 && (
								<li className="px-4 py-2 text-sm text-slate-500">
									Ingen treff
								</li>
							)}
						</ul>
					</div>
				)}
			</div>
			{error && (
				<span className="block mt-1 text-xs text-rose-400">{error}</span>
			)}
		</div>
	);
}

// "use client";

// import type { SelectHTMLAttributes } from "react";
// import { ChevronDownIcon } from "./icons";

// type Option = { value: string; label: string };

// type Props = SelectHTMLAttributes<HTMLSelectElement> & {
// 	label?: string;
// 	options: Option[];
// 	placeholder?: string;
// 	error?: string | null;
// };

// export default function Select({
// 	label,
// 	options,
// 	placeholder,
// 	error,
// 	...rest
// }: Props) {
// 	return (
// 		<label className="block w-full">
// 			{label && (
// 				<span className="block mb-1 text-sm text-slate-200">{label}</span>
// 			)}
// 			<div className="relative w-full">
// 				<select
// 					{...rest}
// 					className="box-border w-full px-4 py-3 pr-10 bg-transparent border rounded-lg appearance-none border-emerald-700/60 text-slate-100 focus:outline-none focus:ring-1 focus:ring-emerald-400 focus:border-emerald-400"
// 				>
// 					{placeholder && (
// 						<option value="" className="border text-slate-100 bg-slate-900">
// 							{placeholder}
// 						</option>
// 					)}
// 					{options.map((o) => (
// 						<option
// 							key={o.value}
// 							value={o.value}
// 							className="border text-slate-100 bg-slate-900"
// 						>
// 							{o.label}
// 						</option>
// 					))}
// 				</select>
// 				<span className="absolute -translate-y-1/2 pointer-events-none right-3 top-1/2 text-emerald-400">
// 					<ChevronDownIcon />
// 				</span>
// 			</div>
// 			{error && (
// 				<span className="block mt-1 text-xs text-rose-400">{error}</span>
// 			)}
// 		</label>
// 	);
// }
