import type { Metadata } from "next";
import "../globals.css";
import Header from "@/components/header";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
	/* unchanged */
};

export default function SiteLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="nb">
			<body className="min-h-screen transition-colors duration-500">
				<Header />
				<div className="flex flex-col min-h-screen">
					<main className="grow lg:px20">{children}</main>
					<Footer />
				</div>
				<Analytics />
			</body>
		</html>
	);
}
