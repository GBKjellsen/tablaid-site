"use client";
import type { InputHTMLAttributes, ReactNode } from "react";

type Props = InputHTMLAttributes<HTMLInputElement> & {
	label?: string;
	error?: string | null;
	icon?: ReactNode;
	rightElement?: ReactNode;
};

export default function Input({
	label,
	error,
	icon,
	rightElement,
	...rest
}: Props) {
	return (
		<label className="block w-full">
			{label && (
				<span className="block mb-1 text-sm text-slate-200">{label}</span>
			)}
			<div className="relative w-full">
				{icon && (
					<span className="absolute -translate-y-1/2 left-3 top-1/2 text-slate-400">
						{icon}
					</span>
				)}
				<input
					{...rest}
					className={`w-full box-border rounded-lg border border-emerald-700/60 bg-transparent px-4 py-3 text-slate-100 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-400
                        ${icon ? "pl-10" : "pl-4"} ${rightElement ? "pr-10" : "pr-4"}`}
				/>
				{rightElement && (
					<span className="absolute -translate-y-1/2 right-3 top-1/2">
						{rightElement}
					</span>
				)}
			</div>
			{error && (
				<span className="block mt-1 text-xs text-rose-400">{error}</span>
			)}
		</label>
	);
}
