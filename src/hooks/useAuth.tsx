"use client";

import type { ReactNode } from "react";
import { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "../lib/supabaseClient";
import type { User } from "@supabase/supabase-js";

type AuthContextValue = {
	user: User | null;
	loading: boolean;
	signIn: (email: string, password: string) => Promise<{ error?: unknown }>;
	signOut: () => Promise<void>;
};

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
	const [user, setUser] = useState<User | null>(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		// DISABLED (2026-08-24): Supabase auth not active. Re-enable by restoring
		// the supabase.auth.getUser()/onAuthStateChange calls below.
		setLoading(false);
	}, []);

	const signIn = async (_email: string, _password: string) => {
		// DISABLED (2026-08-24): see note above.
		return { error: new Error("Login is temporarily unavailable.") };
	};

	const signOut = async () => {
		// DISABLED (2026-08-24): see note above.
		// await supabase.auth.signOut();
		setUser(null);
	};

	return (
		<AuthContext.Provider value={{ user, loading, signIn, signOut }}>
			{children}
		</AuthContext.Provider>
	);
}

export function useAuth() {
	const ctx = useContext(AuthContext);
	if (!ctx) throw new Error("useAuth must be used within AuthProvider");
	return ctx;
}
