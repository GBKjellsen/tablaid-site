// components/gevinster/DashboardCostChart.tsx

"use client";

import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	Tooltip,
	ResponsiveContainer,
} from "recharts";

export default function DashboardCostChart({
	annualSavings,
}: {
	annualSavings: number;
}) {
	const data = Array.from({ length: 12 }).map((_, i) => ({
		month: `M${i + 1}`,
		saved: (annualSavings / 12) * (i + 1),
	}));

	return (
		<div className="p-8 mt-10 border shadow-lg rounded-3xl bg-slate-900/80 border-emerald-500/20">
			<h3 className="mb-6 text-xl font-semibold text-emerald-300">
				Gevinstutvikling (kumulativt gjennom året)
			</h3>

			<div className="h-64">
				<ResponsiveContainer width="100%" height="100%">
					<LineChart data={data}>
						<Line
							type="monotone"
							dataKey="saved"
							stroke="#34d399"
							strokeWidth={3}
						/>
						<XAxis dataKey="month" stroke="#94a3b8" />
						<YAxis
							stroke="#94a3b8"
							tickFormatter={(v) => v.toLocaleString("no-NO")}
						/>
						<Tooltip
							formatter={(v) =>
								v == null ? "" : `${Number(v).toLocaleString("no-NO")} kr`
							}
						/>
					</LineChart>
				</ResponsiveContainer>
			</div>
		</div>
	);
}
