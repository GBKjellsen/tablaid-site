"use client";

import { useEffect, useState } from "react";
import { supabase } from "../lib/supabaseClient";

export type Kommune = {
	municipality_id: string | null;
	municipality_name: string | null;
};

export function useKommuner() {
	const [kommuner, setKommuner] = useState<Kommune[]>([]);

	useEffect(() => {
		const load = async () => {
			const { data } = await supabase
				.from("municipality_allowlist")
				.select("municipality_id, municipality_name");
			if (data) setKommuner(data);
		};
		load();
	}, []);

	return kommuner;
}
