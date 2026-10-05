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

export const GridIcon = (props: IconProps) => (
	<svg
		width="18"
		height="18"
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeWidth="2"
		{...props}
	>
		<rect x="3" y="3" width="8" height="8" rx="1.5" />
		<rect x="13" y="3" width="8" height="8" rx="1.5" />
		<rect x="3" y="13" width="8" height="8" rx="1.5" />
		<rect x="13" y="13" width="8" height="8" rx="1.5" />
	</svg>
);

export const PlusCircleIcon = (props: IconProps) => (
	<svg
		width="18"
		height="18"
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeWidth="2"
		{...props}
	>
		<circle cx="12" cy="12" r="9" />
		<path d="M12 8v8M8 12h8" />
	</svg>
);

export const ListIcon = (props: IconProps) => (
	<svg
		width="18"
		height="18"
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeWidth="2"
		{...props}
	>
		<path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01" />
	</svg>
);

export const BuildingIcon = (props: IconProps) => (
	<svg
		width="18"
		height="18"
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeWidth="2"
		{...props}
	>
		<rect x="4" y="3" width="16" height="18" rx="1" />
		<path d="M9 8h1M14 8h1M9 12h1M14 12h1M9 16h1M14 16h1" />
	</svg>
);

export const DocumentIcon = (props: IconProps) => (
	<svg
		width="18"
		height="18"
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeWidth="2"
		{...props}
	>
		<path d="M7 3h7l5 5v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z" />
		<path d="M14 3v5h5" />
	</svg>
);

export const ShieldCheckIcon = (props: IconProps) => (
	<svg
		width="18"
		height="18"
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeWidth="2"
		{...props}
	>
		<path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3Z" />
		<path d="m9 12 2 2 4-4" />
	</svg>
);

export const BellIcon = (props: IconProps) => (
	<svg
		width="18"
		height="18"
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeWidth="2"
		{...props}
	>
		<path d="M6 8a6 6 0 1 1 12 0c0 5 2 6 2 6H4s2-1 2-6Z" />
		<path d="M10 20a2 2 0 0 0 4 0" />
	</svg>
);

export const LogOutIcon = (props: IconProps) => (
	<svg
		width="18"
		height="18"
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeWidth="2"
		{...props}
	>
		<path d="M9 21H5a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h4" />
		<path d="M16 17l5-5-5-5M21 12H9" />
	</svg>
);

export const ActivityIcon = (props: IconProps) => (
	<svg
		width="18"
		height="18"
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeWidth="2"
		{...props}
	>
		<path d="M22 12h-4l-3 9-6-18-3 9H2" />
	</svg>
);

export const CalendarIcon = (props: IconProps) => (
	<svg
		width="18"
		height="18"
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeWidth="2"
		{...props}
	>
		<rect x="3" y="5" width="18" height="16" rx="2" />
		<path d="M16 3v4M8 3v4M3 10h18" />
	</svg>
);

export const UsersIcon = (props: IconProps) => (
	<svg
		width="18"
		height="18"
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeWidth="2"
		{...props}
	>
		<circle cx="9" cy="8" r="3" />
		<path d="M2 20c0-3 3-5 7-5s7 2 7 5" />
		<circle cx="17" cy="9" r="2.5" />
		<path d="M22 20c0-2.2-1.7-4-4-4.5" />
	</svg>
);

export const BarChartIcon = (props: IconProps) => (
	<svg
		width="18"
		height="18"
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeWidth="2"
		{...props}
	>
		<path d="M4 20V10M12 20V4M20 20v-7" />
	</svg>
);
