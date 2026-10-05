import Header from "@/components/header";
import Footer from "@/components/Footer";

export default function AuthLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<>
			<Header />
			<div className="flex flex-col min-h-screen">
				<main className="grow">{children}</main>
			</div>
			<Footer />
		</>
	);
}
