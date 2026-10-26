import {
	GridIcon,
	PlusCircleIcon,
	ListIcon,
	BuildingIcon,
	DocumentIcon,
	ShieldCheckIcon,
} from "@/components/ui/Icons";

export const DASHBOARD_NAV = [
	{ label: "Oversikt", href: "/dashboard", icon: GridIcon },
	{
		label: "Opprett tilbud",
		href: "/dashboard/opprett-tilbud",
		icon: PlusCircleIcon,
	},
	{
		label: "Administrer tilbud",
		href: "/dashboard/administrer-tilbud",
		icon: ListIcon,
	},
	{
		label: "Organisasjonsprofil",
		href: "/dashboard/organisasjonsprofil",
		icon: BuildingIcon,
	},
	{ label: "Maler", href: "/dashboard/maler", icon: DocumentIcon },
	{
		label: "Modereringsstatus",
		href: "/dashboard/modereringsstatus",
		icon: ShieldCheckIcon,
	},
] as const;
