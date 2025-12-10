"use client";

import React from "react";

export default function BmcInvestor() {
  return (
    <div className="space-y-10">

      {/* TITLE */}
      <h2 className="text-2xl sm:text-3xl font-semibold mb-6">
        Business Model Canvas – Tablaid
      </h2>

      {/* GRID */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* Kundesegmenter */}
        <div className="rounded-xl border border-slate-800 bg-slate-900/70 p-5">
          <h3 className="text-sm font-semibold text-emerald-300 mb-2">Kundesegmenter</h3>
          <ul className="space-y-1 text-slate-300 text-sm leading-relaxed">
            <li>• Kommuner og primærhelsetjenesten</li>
            <li>• Innbyggere som bruker appen direkte</li>
            <li>• Pårørende med høy betalingsvilje</li>
            <li>• Fagmiljøer innen funksjon, syn, hørsel, ernæring</li>
            <li>• Internasjonale kommuner (på sikt)</li>
          </ul>
        </div>

        {/* Verdiforslag */}
        <div className="rounded-xl border border-slate-800 bg-slate-900/70 p-5">
          <h3 className="text-sm font-semibold text-emerald-300 mb-2">Verdiforslag</h3>
          <ul className="space-y-1 text-slate-300 text-sm leading-relaxed">
            <li>• Tidlige signaler om funksjon, trivsel og medisinbruk</li>
            <li>• Unik kombinasjon: brukerdata + pårørendedata + kommunedata</li>
            <li>• Understøtter forebygging og riktigere ressursbruk</li>
            <li>• En human og enkel helseassistent for brukeren</li>
            <li>• Innsikt som reduserer belastning for pårørende</li>
            <li>• Datagrunnlag som vokser og styrkes over tid</li>
          </ul>
        </div>

        {/* Kanaler */}
        <div className="rounded-xl border border-slate-800 bg-slate-900/70 p-5">
          <h3 className="text-sm font-semibold text-emerald-300 mb-2">Kanaler</h3>
          <ul className="space-y-1 text-slate-300 text-sm leading-relaxed">
            <li>• Pilotprogram med 20 kommuner</li>
            <li>• Direkte dialog med helseledere og fagmiljøer</li>
            <li>• Organisk vekst via brukere og pårørende</li>
            <li>• Konferanser, fagfora og innovasjonsmiljøer</li>
            <li>• Fremtidige samarbeidspartnere</li>
          </ul>
        </div>

        {/* Kunderelasjoner */}
        <div className="rounded-xl border border-slate-800 bg-slate-900/70 p-5">
          <h3 className="text-sm font-semibold text-emerald-300 mb-2">Kunderelasjoner</h3>
          <ul className="space-y-1 text-slate-300 text-sm leading-relaxed">
            <li>• Strukturerte pilotløp med tydelig verdimåling</li>
            <li>• Dialogbasert samarbeid med kommunale tjenester</li>
            <li>• Selvbetjent og intuitiv app for brukere</li>
            <li>• Trygg og enkel deling for pårørende</li>
          </ul>
        </div>

        {/* Inntektsstrømmer */}
        <div className="rounded-xl border border-slate-800 bg-slate-900/70 p-5">
          <h3 className="text-sm font-semibold text-emerald-300 mb-2">Inntektsstrømmer</h3>
          <ul className="space-y-1 text-slate-300 text-sm leading-relaxed">
            <li>• Pilotavtaler med kommuner</li>
            <li>• Årlig kommunelisens</li>
            <li>• Abonnement for pårørende</li>
            <li>• Brukerabonnement der kommunen ikke dekker</li>
            <li>• SmartTags og tilleggsprodukter</li>
            <li>• Fremtidig partnerøkonomi</li>
          </ul>
        </div>

        {/* Nøkleressurser */}
        <div className="rounded-xl border border-slate-800 bg-slate-900/70 p-5">
          <h3 className="text-sm font-semibold text-emerald-300 mb-2">Nøkleressurser</h3>
          <ul className="space-y-1 text-slate-300 text-sm leading-relaxed">
            <li>• Klinisk fagforankring og rammeverk for funksjon</li>
            <li>• App, backend og innsiktsmotor</li>
            <li>• Pilotmetodikk og kommunesamarbeid</li>
            <li>• Brukeropplevelse og design</li>
            <li>• Datagrunnlag som styrkes over tid</li>
          </ul>
        </div>

        {/* Nøkkelaktiviteter */}
        <div className="rounded-xl border border-slate-800 bg-slate-900/70 p-5">
          <h3 className="text-sm font-semibold text-emerald-300 mb-2">Nøkkelaktiviteter</h3>
          <ul className="space-y-1 text-slate-300 text-sm leading-relaxed">
            <li>• Teknisk utvikling</li>
            <li>• Pilotering og datainnsamling</li>
            <li>• Drift, support og sikkerhet</li>
            <li>• Forretningsutvikling og salg mot kommuner</li>
          </ul>
        </div>

        {/* Partnere */}
        <div className="rounded-xl border border-slate-800 bg-slate-900/70 p-5">
          <h3 className="text-sm font-semibold text-emerald-300 mb-2">Partnere</h3>
          <ul className="space-y-1 text-slate-300 text-sm leading-relaxed">
            <li>• Kommuner og bydeler</li>
            <li>• Fagmiljøer innen funksjon, syn, hørsel, ernæring</li>
            <li>• Organisasjoner og pasientforbund</li>
            <li>• Teknologiske samarbeidspartnere</li>
            <li>• Innovasjonsmiljøer</li>
          </ul>
        </div>

        {/* Kostnadsstruktur */}
        <div className="rounded-xl border border-slate-800 bg-slate-900/70 p-5">
          <h3 className="text-sm font-semibold text-emerald-300 mb-2">Kostnadsstruktur</h3>
          <ul className="space-y-1 text-slate-300 text-sm leading-relaxed">
            <li>• Utvikling (app, backend, innsikt)</li>
            <li>• Drift, support, sikkerhet</li>
            <li>• Pilotgjennomføring og onboarding</li>
            <li>• Analyse og rapportering</li>
            <li>• Salg, møtevirksomhet og fagarbeid</li>
            <li>• Markedsføring mot kommuner og pårørende</li>
          </ul>
        </div>

      </div>
    </div>
  );
}
