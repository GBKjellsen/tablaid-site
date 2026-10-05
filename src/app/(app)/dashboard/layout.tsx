import DashboardLayout from "@/components/auth/DashboardLayout";

export default function Layout({ children }: { children: React.ReactNode }) {
	return <DashboardLayout>{children}</DashboardLayout>;
}
