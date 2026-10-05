// src/app/kommuner/registrer/page.tsx
"use client";

import { useState } from "react";

export default function RegistrerKommune() {
  const [sent, setSent] = useState(false);

  return (
    <section className="min-h-screen bg-slate-950 text-slate-100 py-16 px-6">
      <div className="mx-auto max-w-xl">

        <h1 className="text-2xl font-semibold text-emerald-400">
          Registrer din kommune
        </h1>

        <p className="mt-4 text-sm text-slate-300">
          Fyll ut skjemaet for å motta pilotinformasjon, pris og avtaledetaljer.
        </p>

        {!sent ? (
          <form
            action="https://formspree.io/f/xwpgbqaj"
            method="POST"
            className="mt-8 space-y-4"
            onSubmit={() => setSent(true)}
          >
            {/* NAVN PÅ KOMMUNE */}
            <div>
              <label className="text-sm text-slate-200">Kommune</label>
              <input
                type="text"
                name="kommune"
                required
                className="mt-1 w-full rounded-lg bg-slate-900 border border-slate-700 px-3 py-2 text-sm text-white"
              />
            </div>

            {/* KONTAKTPERSON */}
            <div>
              <label className="text-sm text-slate-200">Kontaktperson</label>
              <input
                type="text"
                name="kontaktperson"
                required
                className="mt-1 w-full rounded-lg bg-slate-900 border border-slate-700 px-3 py-2 text-sm text-white"
              />
            </div>

            {/* EPOST */}
            <div>
              <label className="text-sm text-slate-200">E-post</label>
              <input
                type="email"
                name="email"
                required
                className="mt-1 w-full rounded-lg bg-slate-900 border border-slate-700 px-3 py-2 text-sm text-white"
              />
            </div>

            {/* TELEFON */}
            <div>
              <label className="text-sm text-slate-200">Telefon (valgfritt)</label>
              <input
                type="tel"
                name="telefon"
                className="mt-1 w-full rounded-lg bg-slate-900 border border-slate-700 px-3 py-2 text-sm text-white"
              />
            </div>

            {/* SUBMIT */}
            <button
              type="submit"
              className="w-full rounded-full bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-slate-900 shadow-lg shadow-emerald-500/30 hover:bg-emerald-400 transition"
            >
              Send inn – få pilotinformasjon
            </button>
          </form>
        ) : (
          <p className="mt-8 text-sm text-emerald-400">
            Takk! Du vil snart motta pilotinformasjonen på e-post.
          </p>
        )}

      </div>
    </section>
  );
}
