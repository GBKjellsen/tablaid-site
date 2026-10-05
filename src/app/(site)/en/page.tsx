// app/en/page.tsx
import Link from "next/link";

export default function EnglishPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20">
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Tablaid – an intelligent medicine and health companion
        </h1>
        <p className="mt-4 text-sm text-slate-200 sm:text-base">
          Tablaid is a Norwegian digital health companion that combines a
          smart medication assistant, daily functional check-ins and a simple
          caregiver dashboard. The goal is to detect early signals of
          functional decline and support collaboration between citizens,
          relatives and municipal health services.
        </p>

        <p className="mt-4 text-sm text-slate-200 sm:text-base">
          We are currently preparing a multi-municipality pilot in 2026 with a
          focus on older adults and people with long-term medication needs.
          The solution is not an electronic health record, but a lightweight
          decision-support and engagement tool.
        </p>

        <p className="mt-4 text-sm text-slate-200 sm:text-base">
          If you are interested in learning more, piloting Tablaid in your
          municipality or discussing investment opportunities, please{" "}
          <Link href="/kontakt" className="text-emerald-300 underline">
            get in touch
          </Link>
          .
        </p>
      </div>
    </main>
  );
}
