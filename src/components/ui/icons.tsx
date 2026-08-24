import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

export const MailIcon = (props: IconProps) => (
	<svg
		width="18"
		height="18"
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeWidth="2"
		{...props}
	>
		<rect x="3" y="5" width="18" height="14" rx="2" />
		<path d="m3 7 9 6 9-6" />
	</svg>
);

export const LockIcon = (props: IconProps) => (
	<svg
		width="18"
		height="18"
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeWidth="2"
		{...props}
	>
		<rect x="4" y="11" width="16" height="9" rx="2" />
		<path d="M8 11V7a4 4 0 0 1 8 0v4" />
	</svg>
);

export const EyeIcon = ({ off, ...props }: IconProps & { off: boolean }) =>
	off ? (
		<svg
			width="18"
			height="18"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			{...props}
		>
			<path d="M17.94 17.94A10.94 10.94 0 0 1 12 20c-6 0-10-6-10-8a17.9 17.9 0 0 1 4.22-5.06M9.9 4.24A10.4 10.4 0 0 1 12 4c6 0 10 6 10 8a17.9 17.9 0 0 1-2.16 3.19M14.12 14.12a3 3 0 1 1-4.24-4.24" />
			<path d="m1 1 22 22" />
		</svg>
	) : (
		<svg
			width="18"
			height="18"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			{...props}
		>
			<path d="M2 12s4-8 10-8 10 8 10 8-4 8-10 8-10-8-10-8Z" />
			<circle cx="12" cy="12" r="3" />
		</svg>
	);

export const ArrowIcon = (props: IconProps) => (
	<svg
		width="16"
		height="16"
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeWidth="2"
		{...props}
	>
		<path d="M5 12h14M13 6l6 6-6 6" />
	</svg>
);

export const ChevronDownIcon = (props: IconProps) => (
	<svg
		width="16"
		height="16"
		viewBox="0 0 20 20"
		fill="none"
		stroke="currentColor"
		strokeWidth="2"
		{...props}
	>
		<path d="m6 9 6 6 6-6" />
	</svg>
);
