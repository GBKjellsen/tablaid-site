"use client";

import type { SubmitEvent } from "react";
import { useState } from "react";
import Input from "../ui/Input";
import Button from "../ui/Button";
import { useAuth } from "../../hooks/useAuth";
import { MailIcon, LockIcon, EyeIcon, ArrowIcon } from "../ui/icons";

type Props = {
	asModal?: boolean;
	onSuccess?: () => void;
};

export default function LoginForm({ asModal = false, onSuccess }: Props) {
	const { signIn } = useAuth();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [show, setShow] = useState(false);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<string | null>(null);

	const submit = async (e: SubmitEvent<HTMLFormElement>) => {
		e.preventDefault();
		setError(null);
		if (!email || !password) {
			setError("Please provide email and password.");
			return;
		}
		setLoading(true);
		const { error } = await signIn(email, password);
		setLoading(false);
		if (error) {
			setError((error as any)?.message ?? "Sign in failed");
			return;
		}
		onSuccess?.();
	};

	return (
		<form onSubmit={submit} className={asModal ? "w-full" : "w-full max-w-md"}>
			<div className="grid grid-cols-1 gap-4 px-8 py-6 border bg-slate-800/60 border-slate-700 rounded-2xl">
				<div>
					<h2 className="text-xl font-bold text-white">Logg inn</h2>
					<p className="mt-1 text-sm text-slate-400">
						Få tilgang til organisasjonsdashbordet
					</p>
				</div>

				<div className="space-y-1">
					<Input
						label="E-postadresse"
						type="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						placeholder="kontakt@organisasjon.no"
						icon={<MailIcon />}
					/>
				</div>

				<div>
					<div className="flex items-center justify-between mb-1">
						<span className="text-sm text-slate-200">Passord</span>
						<a className="text-sm text-emerald-300 hover:underline">
							Glemt passord?
						</a>
					</div>
					<div className="relative">
						<Input
							type={show ? "text" : "password"}
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							placeholder="••••••••"
							icon={<LockIcon />}
							rightElement={
								<button
									type="button"
									onClick={() => setShow((s) => !s)}
									aria-label={show ? "Skjul passord" : "Vis passord"}
									className="inline-flex items-center justify-center w-8 h-8 p-0 leading-none bg-transparent border-0 text-slate-400 hover:text-slate-200 focus:outline-none"
								>
									<EyeIcon off={show} />
								</button>
							}
						/>
					</div>
				</div>

				{error && <div className="text-sm text-rose-400">{error}</div>}

				<Button
					type="submit"
					disabled={loading}
					className="w-full gap-2 my-4 border"
				>
					{loading ? "Logger inn…" : "Logg inn på dashbordet"}
					{!loading && <ArrowIcon />}
				</Button>

				<div className="pt-4 mt-1 text-sm text-center border-t border-slate-700 text-slate-400">
					Ny hos Tablaid?{" "}
					<a className="text-emerald-300 hover:underline" href="/signup">
						Registrer din organisasjon
					</a>
				</div>
			</div>
		</form>
	);
}
