"use client";

import { useEffect, useState } from "react";
// import { supabase } from "../lib/supabaseClient";

export type Kommune = {
	municipality_id: string | null;
	municipality_name: string | null;
};

export function useKommuner() {
	const [kommuner, setKommuner] = useState<Kommune[]>([]);

	useEffect(() => {
		// DISABLED (2026-08-24): municipality_allowlist query disabled until DB is active.
		// Re-enable by restoring the supabase.from(...).select(...) call below.
		setKommuner([]);
	}, []);

	return kommuner;
}
