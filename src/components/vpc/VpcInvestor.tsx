"use client";

import React from "react";

export default function VpcInvestor() {
  return (
    <div className="space-y-10">

      <h2 className="text-2xl sm:text-3xl font-semibold">Value Proposition – Investor</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* Investor – Hva du ønsker */}
        <div className="rounded-xl border border-slate-800 bg-slate-900/70 p-6">
          <h3 className="text-sm font-semibold text-emerald-300 mb-2">Hva investorer ønsker</h3>
          <ul className="space-y-1 text-slate-300 text-sm">
            <li>• Løsninger som treffer store samfunnsutfordringer</li>
            <li>• Sterk timing og dokumenterte markedsdrivere</li>
            <li>• Et team med faglig tyngde og gjennomføringsevne</li>
            <li>• Forretningsmodell med både B2C- og B2G-potensial</li>
            <li>• Datagrunnlag som blir mer verdifullt over tid</li>
          </ul>
        </div>

        {/* Tablaid – Hva vi tilbyr */}
        <div className="rounded-xl border border-slate-800 bg-slate-900/70 p-6">
          <h3 className="text-sm font-semibold text-emerald-300 mb-2">Hva Tablaid tilbyr</h3>
          <ul className="space-y-1 text-slate-300 text-sm">
            <li>• En unik kombinasjon av medisin, funksjon og trivsel</li>
            <li>• Pilotmodell med rask verdidokumentasjon</li>
            <li>• Høy brukeraksept blant både innbyggere og pårørende</li>
            <li>• Lav friksjon ved innføring – rask skalering</li>
            <li>• Et datagrunnlag som bygger prediktiv verdi</li>
          </ul>
        </div>

        {/* Investor – Utfordringer i markedet */}
        <div className="rounded-xl border border-slate-800 bg-slate-900/70 p-6">
          <h3 className="text-sm font-semibold text-emerald-300 mb-2">Utfordringer i markedet</h3>
          <ul className="space-y-1 text-slate-300 text-sm">
            <li>• Vanskelig å validere verdi i kommunal sektor</li>
            <li>• Få løsninger kombinerer funksjon, trivsel og legemidler</li>
            <li>• Lite kontinuerlige datakilder i primærhelsetjenesten</li>
            <li>• Fragmenterte systemer uten helhetlig brukerreise</li>
          </ul>
        </div>

        {/* Tablaid – Hvordan vi reduserer risiko */}
        <div className="rounded-xl border border-slate-800 bg-slate-900/70 p-6">
          <h3 className="text-sm font-semibold text-emerald-300 mb-2">Slik reduserer Tablaid risiko</h3>
          <ul className="space-y-1 text-slate-300 text-sm">
            <li>• Faglig forankret modell for funksjon og trivsel</li>
            <li>• Kombinerer tre datastrømmer ingen andre har samlet før</li>
            <li>• Testet med kommunesektorens behov og arbeidsflyt</li>
            <li>• Unik timing: demografisk press + digital modenhet</li>
            <li>• Klar vei til skalering og repeterbare piloter</li>
          </ul>
        </div>
      </div>

      {/* TRE KORTE VERDIBOKSER */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">

        <div className="rounded-xl bg-slate-900/60 border border-slate-800 p-6">
          <h3 className="text-sm font-semibold text-emerald-300">Innbyggertjeneste</h3>
          <p className="text-slate-300 text-sm mt-2">
            Appen kan brukes av innbyggere direkte, men er designet for at
            kommuner skal gjøre den gratis tilgjengelig gjennom lisensavtaler.
          </p>
        </div>

        <div className="rounded-xl bg-slate-900/60 border border-slate-800 p-6">
          <h3 className="text-sm font-semibold text-emerald-300">Kommunal støtte</h3>
          <p className="text-slate-300 text-sm mt-2">
            Pårørende og kommunale tjenester får innsikt som styrker dialog,
            forebygging og riktigere ressursbruk.
          </p>
        </div>

        <div className="rounded-xl bg-slate-900/60 border border-slate-800 p-6">
          <h3 className="text-sm font-semibold text-emerald-300">Tredjepartsverdi</h3>
          <p className="text-slate-300 text-sm mt-2">
            På sikt kan Tablaid samarbeide med tjenester innen syn, hørsel,
            ernæring og aktivitet – som både styrker brukeropplevelsen og
            øker inntektsgrunnlaget.
          </p>
        </div>

      </div>
    </div>
  );
}
