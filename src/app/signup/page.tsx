import SignupForm from "../../components/auth/SignupForm";

export default function SignupPage() {
	return (
		<main className="min-h-screen bg-[radial-gradient(ellipse_at_top_left,#0b1220,#0b1316)] text-slate-100">
			<div className="px-6 py-16">
				<SignupForm />
			</div>
		</main>
	);
}
