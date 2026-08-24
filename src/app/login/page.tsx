"use client";

import LoginForm from "../../components/auth/LoginForm";
import { AuthProvider } from "../../hooks/useAuth";

export default function LoginPage() {
	return (
		<AuthProvider>
			<main className="min-h-screen bg-[radial-gradient(ellipse_at_top_left,#0b1220,#0b1316)] text-slate-100">
				<div className="grid items-center justify-center grid-cols-1 px-6 py-20 mx-[5vw] max-w-7xl md:grid-cols-12">
					<section className="space-y-6 md:col-span-6">
						<h1 className="text-4xl font-extrabold">Velkommen tilbake</h1>
						<p className="max-w-xl text-slate-300">
							Logg inn på organisasjonskontoen din for å administrere tilbud,
							deltakere og organisasjonsprofilen.
						</p>
						<ul className="space-y-2 text-slate-300">
							<li>• Administrer aktive og kommende tilbud</li>
							<li>• Følg med på deltakelse og registreringer</li>
							<li>• Se modereringsstatus for innsendte tilbud</li>
							<li>• Oppdater organisasjonsprofilen din</li>
						</ul>
					</section>

					<section className="md:col-span-6">
						<div className="max-w-md mx-auto">
							<LoginForm />
						</div>
					</section>
				</div>
			</main>
		</AuthProvider>
	);
}
