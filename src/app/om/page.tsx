export default function OmPage() {
  return (
    <div className="max-w-3xl mx-auto py-20 px-6">
      <h1 className="text-4xl font-bold mb-6">Om Tablaid</h1>

      <p className="text-lg text-gray-300 mb-6">
        Tablaid er utviklet for å gi trygghet i hverdagen gjennom bedre oversikt
        over egen helse og legemiddelbruk – og for å gi kommuner tidligere
        signaler når behovet for støtte endrer seg.
      </p>

      <p className="text-lg text-gray-300 mb-6">
        Vi bygger et digitalt verktøy som kombinerer enkel egenrapportering,
        innsikt og samtykkebasert deling. Målet er tidlig oppdagelse,
        forebygging og redusert press på tjenestene – uten å gå på
        bekostning av autonomi eller personvern.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">Hvorfor Tablaid?</h2>

      <ul className="space-y-3 text-gray-300 mb-8">
        <li>• Antallet eldre med sammensatte behov øker raskt.</li>
        <li>• Funksjonsfall oppdages ofte for sent i primærhelsetjenesten.</li>
        <li>• Pårørende har for lite innsyn og støtte.</li>
        <li>• Kommuner mangler gode verktøy for tidlige signaler.</li>
        <li>• Riktig legemiddelbruk krever faktisk etterlevelse, ikke bare forskrivning.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-10 mb-4">Samarbeid</h2>

      <p className="text-lg text-gray-300 mb-6">
        Tablaid utvikles i samarbeid med brukere, pårørende, kommunale aktører og
        Podium – et utviklingsmiljø som kombinerer teknologi og
        samfunnsnyttige arbeidsmarkedstiltak. Sammen sikrer vi at løsningen
        bygger på reelle behov og faktisk bruk.
      </p>

      <a
        href="/kontakt"
        className="inline-block px-5 py-3 bg-[#01D1C1] text-black font-semibold rounded-lg hover:opacity-90"
      >
        Kontakt oss
      </a>
    </div>
  );
}
