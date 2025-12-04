"use client";

export default function BmcInvestor() {
  return (
    <section className="mb-20 w-full">
      <h2 className="text-3xl font-semibold text-slate-50 mb-10">
        Business Model Canvas – Tablaid
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">

        {/* ------------------------------- */}
        {/* CUSTOMER SEGMENTS               */}
        {/* ------------------------------- */}
        <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-6 space-y-2">
          <h3 className="text-emerald-300 font-semibold mb-2">Kundesegmenter</h3>
          <ul className="text-slate-300 text-sm space-y-1">
            <li>• Kommuner og primærhelsetjenesten (hovedsegment).</li>
            <li>• Innbyggere som får gratis tilgang via kommunelisens.</li>
            <li>• Pårørende med høy betalingsvilje for innsikt.</li>
            <li>• Fremtidige partnere: HLF, Epilepsiforbundet m.fl.</li>
            <li>• Mulige fremtidige add-ons: trygghetsteknologi, medisindispensere.</li>
          </ul>
        </div>

        {/* ------------------------------- */}
        {/* VALUE PROPOSITION               */}
        {/* ------------------------------- */}
        <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-6 space-y-2">
          <h3 className="text-emerald-300 font-semibold mb-2">Verdiforslag</h3>
          <ul className="text-slate-300 text-sm space-y-1">
            <li>• Tidlige signaler om funksjon, trivsel og medisinbruk.</li>
            <li>• Bedre samhandling mellom innbygger, pårørende og kommunen.</li>
            <li>• Ingen tunge integrasjoner – lav implementeringskost.</li>
            <li>• For pårørende: trygg innsikt uten overvåking.</li>
            <li>• For kommuner: dokumenterbar verdi i forebygging og prioritering.</li>
          </ul>
        </div>

        {/* ------------------------------- */}
        {/* CHANNELS                        */}
        {/* ------------------------------- */}
        <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-6 space-y-2">
          <h3 className="text-emerald-300 font-semibold mb-2">Distribusjonskanaler</h3>
          <ul className="text-slate-300 text-sm space-y-1">
            <li>• H1 2026: Pilotkohort med 20 kommuner × 25 innbyggere.</li>
            <li>• Direkte B2G-innsalg, nettside og referansekommuner.</li>
            <li>• Konferanser: KS, eHelse, SmartOslo.</li>
            <li>• Organisk vekst gjennom pårørende og innbyggere.</li>
            <li>• Partnerorganisasjoner (HLF, Epilepsiforbundet) – fremtidig kanal.</li>
          </ul>
        </div>

        {/* ------------------------------- */}
        {/* CUSTOMER RELATIONSHIPS          */}
        {/* ------------------------------- */}
        <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-6 space-y-2">
          <h3 className="text-emerald-300 font-semibold mb-2">Kunderelasjoner</h3>
          <ul className="text-slate-300 text-sm space-y-1">
            <li>• Strukturert pilotopplegg med innsiktsmøter og rapportering.</li>
            <li>• Kommunene får tett oppfølging og rask validering av verdi.</li>
            <li>• Innbyggere får en trygg, selvbetjent brukeropplevelse.</li>
            <li>• Pårørende får varsel, innsikt og støtte uten overvåking.</li>
            <li>• Skalering 2026–2027: lisensmodell med support og onboarding.</li>
          </ul>
        </div>

        {/* ------------------------------- */}
        {/* REVENUE STREAMS                 */}
        {/* ------------------------------- */}
        <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-6 space-y-2">
          <h3 className="text-emerald-300 font-semibold mb-2">Inntektsstrømmer</h3>
          <ul className="text-slate-300 text-sm space-y-1">
            <li>• Pilot: 25 000 kr per kommune.</li>
            <li>• Årlig kommunelisens: 100 000 kr.</li>
            <li>• Pårørende-abonnement (innsiktsdeling).</li>
            <li>• Innbygger-abonnement der kommunen ikke kjøper lisens.</li>
            <li>• SmartTags (engangssalg, høy margin).</li>
            <li>• Affiliate – HLF, Epilepsiforbundet m.fl.</li>
            <li>• Fremtid: prediktiv innsikt og kommunal premium-modul.</li>
          </ul>
        </div>

        {/* ------------------------------- */}
        {/* KEY RESOURCES                   */}
        {/* ------------------------------- */}
        <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-6 space-y-2">
          <h3 className="text-emerald-300 font-semibold mb-2">Nøkleressurser</h3>
          <ul className="text-slate-300 text-sm space-y-1">
            <li>• Helhetlig fagrammeverk (sykepleie, funksjon, egenrapportering).</li>
            <li>• App, backend, innsiktsmoduler og analysemotor.</li>
            <li>• SmartTag-teknologi (NFC).</li>
            <li>• Designet pilotmetodikk og kommunale samarbeidsmodeller.</li>
            <li>• Datagrunnlag som vokser og styrker verdiforslaget.</li>
          </ul>
        </div>

        {/* ------------------------------- */}
        {/* KEY ACTIVITIES                  */}
        {/* ------------------------------- */}
        <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-6 space-y-2">
          <h3 className="text-emerald-300 font-semibold mb-2">Nøkkelaktiviteter</h3>
          <ul className="text-slate-300 text-sm space-y-1">
            <li>• Utvikling av app, backend og innsiktsmoduler.</li>
            <li>• Rekruttering og gjennomføring av pilotkohorter.</li>
            <li>• Analyse av pilotdata og dokumentasjon av verdi.</li>
            <li>• Kontinuerlig forbedring av funksjonsmodellen.</li>
            <li>• Drift av SmartTag-logistikk og kundeservice.</li>
          </ul>
        </div>

        {/* ------------------------------- */}
        {/* KEY PARTNERS                    */}
        {/* ------------------------------- */}
        <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-6 space-y-2">
          <h3 className="text-emerald-300 font-semibold mb-2">Nøkkelpartnere</h3>
          <ul className="text-slate-300 text-sm space-y-1">
            <li>• Kommuner og bydeler (pilot + skalering).</li>
            <li>• HLF, Epilepsiforbundet m.fl.</li>
            <li>• NFC-leverandører.</li>
            <li>• Hardware-aktører (medisindispensere, trygghetsteknologi).</li>
            <li>• Innovasjonsmiljøer (SmartOslo, KS m.fl.).</li>
          </ul>
        </div>

        {/* ------------------------------- */}
        {/* COST STRUCTURE                  */}
        {/* ------------------------------- */}
        <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-6 space-y-2 md:col-span-2">
          <h3 className="text-emerald-300 font-semibold mb-2">Kostnadsstruktur</h3>
          <ul className="text-slate-300 text-sm space-y-1">
            <li>• Utvikling (app, backend, innsiktsmoduler).</li>
            <li>• Drift og support.</li>
            <li>• Rekruttering av kommuner + pilotgjennomføring.</li>
            <li>• Cloud, hosting, sikkerhet og analyse.</li>
            <li>• NFC-produksjon og logistikk.</li>
            <li>• Salg, forretningsutvikling og partnerskap.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
