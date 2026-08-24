import { createClient } from "@supabase/supabase-js";
import { Database } from "./database.types";

// DISABLED (2026-08-24): DB not in active use yet. To re-enable, restore the
// createClient call below and remove the stub, then set the env vars in Vercel.
// const url = process.env.NEXT_PUBLIC_SUPABASE_URL!;
// const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
// export const supabase = createClient<Database>(url, anonKey, {
//   realtime: { params: { eventsPerSecond: 10 } },
// });

export const supabase = null as unknown as ReturnType<
	typeof createClient<Database>
>;
export default supabase;
