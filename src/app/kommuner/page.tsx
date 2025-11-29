export default function KommunerPage() {
  return (
    <div className="max-w-3xl mx-auto py-20 px-6">
      <h1 className="text-4xl font-bold mb-6">For kommuner</h1>

      <p className="text-lg text-gray-300 mb-6">
        Tablaid hjelper kommuner med tidlig avdekking av funksjonsfall,
        tryggere legemiddelbruk og bedre samarbeidsflater mellom bruker,
        pårørende og tjenestene.
      </p>

      <p className="text-lg text-gray-300 mb-6">
        Les mer om vårt pilotprogram:
      </p>

      <a
        href="/pilot"
        className="inline-block px-5 py-3 bg-[#01D1C1] text-black font-semibold rounded-lg hover:opacity-90"
      >
        Gå til pilot for kommuner
      </a>
    </div>
  );
}
