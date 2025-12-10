"use client";

import { PageGlow } from "@/components/Glow";

export default function PageLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="relative min-h-screen bg-slate-950 text-white">
      {/* Global emerald glow for ALL pages */}
      <PageGlow />

      <div className="relative z-10">
        {children}
      </div>
    </main>
  );
}
