"use client";
import type { ButtonHTMLAttributes, ReactNode } from "react";

export default function Button({
	children,
	className = "",
	...rest
}: ButtonHTMLAttributes<HTMLButtonElement> & { children?: ReactNode }) {
	return (
		<button
			{...rest}
			className={`inline-flex items-center justify-center rounded-3xl bg-emerald-500 px-4 py-2 focus:outline-none border-0 text-sm font-semibold text-white hover:bg-emerald-400 disabled:opacity-60 ${className}`}
		>
			{children}
		</button>
	);
}
