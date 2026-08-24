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
const init = async () => {
const { data } = await supabase.auth.getUser();
setUser(data.user ?? null);
setLoading(false);
};
init();

const { data: sub } = supabase.auth.onAuthStateChange((_event, session) => {
setUser(session?.user ?? null);
setLoading(false);
});

return () => {
sub.subscription?.unsubscribe?.();
};
}, []);

const signIn = async (email: string, password: string) => {
setLoading(true);
const { error } = await supabase.auth.signInWithPassword({ email, password });
setLoading(false);
return { error };
};

const signOut = async () => {
await supabase.auth.signOut();
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