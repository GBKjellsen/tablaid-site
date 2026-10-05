import type { Metadata } from "next";
import "../globals.css";
import { AuthProvider } from "@/hooks/useAuth";

export const metadata: Metadata = { title: "Tablaid – Dashboard" };

export default function AppLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="nb">
			<body className="min-h-screen transition-colors duration-500">
				<AuthProvider>{children}</AuthProvider>
			</body>
		</html>
	);
}
