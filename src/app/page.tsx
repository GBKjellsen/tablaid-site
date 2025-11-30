"use client";

import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="text-white bg-[#0A0F1F]">

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-4 py-24 grid md:grid-cols-2 gap-12 items-center">
        
        {/* LEFT TEXT */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Digital helse- og legemiddelassistent  
            <span className="block text-green-400">for en tryggere hverdag</span>
          </h1>

          <p className="text-lg text-gray-300 mb-8">
            Tablaid kombinerer legemiddeloversikt, daglige helsesignaler og 
            pårørendestøtte — utviklet for trygghet, mestring og tidlig 
            oppdagelse av funksjonsfall.
          </p>

          <div className="flex gap-4">
            <Link
              href="/kontakt"
              className="px-6 py-3 bg-green-600 hover:bg-green-500 rounded-full font-semibold text-black"
            >
              Kontakt oss
            </Link>

            <Link
              href="/om"
              className="px-6 py-3 border border-white/30 rounded-full hover:bg-white/10 transition"
            >
              Les mer
            </Link>
          </div>
        </div>

        {/* RIGHT IMAGE – SMALLER */}
        <div className="flex justify-center">
          <Image
            src="/tablaid-startside-gronn.png"
            alt="Tablaid app mockup"
            width={300}
            height={390}
            className="drop-shadow-2xl object-contain"
          />
        </div>
      </section>

      {/* SEKSJON 1 – Menneskelig verdi */}
      <section className="max-w-6xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-12 items-center">

        <div>
          <h2 className="text-3xl font-bold mb-4">Teknologi som skaper trygghet</h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            Tablaid styrker samspillet mellom brukere, pårørende og helsepersonell.
            Enklere legemiddelbruk, tydeligere signaler og bedre oversikt — uten stress.
          </p>
        </div>

        <div className="flex justify-center">
          <Image
            src="/mor-datter.png"
            alt="Pårørende hjelper eldre kvinne med mobil"
            width={350}
            height={260}
            className="rounded-xl shadow-xl object-cover"
          />
        </div>

      </section>

      {/* SEKSJON 2 – Hvordan det fungerer */}
      <section className="bg-[#0F172A] py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">

          <h2 className="text-3xl font-bold text-white mb-6">
            Hvordan Tablaid fungerer
          </h2>

          <p className="text-gray-300 max-w-2xl mx-auto mb-10">
            En brukervennlig app som hjelper deg med medisiner, helsesignaler og deling
            av innsikt – alt på ett sted.
          </p>

          <Image
            src="/app-triple.png"
            alt="Tablaid app visning"
            width={600}
            height={380}
            className="mx-auto object-contain drop-shadow-xl"
          />

        </div>
      </section>

      {/* SEKSJON 3 – Bruker */}
      <section className="max-w-6xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-12 items-center">

        <div className="flex justify-center">
          <Image
            src="/app-hand.png"
            alt="Bruker holder Tablaid-appen"
            width={330}
            height={260}
            className="rounded-xl shadow-lg object-cover"
          />
        </div>

        <div>
          <h2 className="text-3xl font-bold mb-4">En enklere hverdag for brukere</h2>
          <p className="text-lg text-gray-300">
            Tablaid hjelper deg å holde kontroll på medisiner og helse – med påminnelser,
            oversikt og daglige innsjekkinger.
          </p>
        </div>

      </section>

      {/* SEKSJON 4 – Pårørende */}
      <section className="max-w-6xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-12 items-center">

        <div className="flex justify-center">
          <Image
            src="/app-triple-2.png"
            alt="Sykepleier forklarer Tablaid til familie"
            width={350}
            height={260}
            className="rounded-xl shadow-lg object-cover"
          />
        </div>

        <div>
          <h2 className="text-3xl font-bold mb-4">Trygghet for pårørende</h2>
          <p className="text-lg text-gray-300">
            Med samtykke kan pårørende følge utviklingen, se etterlevelse og få tidlige tegn
            på endringer i helse og funksjon.
          </p>
        </div>

      </section>

      {/* SEKSJON 5 – Kommuner */}
      <section className="max-w-6xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-12 items-center">

        <div className="flex justify-center">
          <Image
            src="/app-triple_3.png"
            alt="Helseteam ser på data"
            width={360}
            height={260}
            className="rounded-xl shadow-lg object-cover"
          />
        </div>

        <div>
          <h2 className="text-3xl font-bold mb-4">Bedre grunnlag for kommunehelsetjenesten</h2>
          <p className="text-lg text-gray-300">
            Tablaid gir kommuner tidlige signaler, funksjonstrender og oversikt – uten å belaste tjenesten.
          </p>

          <Link
            href="/kommuner"
            className="inline-block mt-6 px-6 py-3 bg-white text-black rounded-full font-semibold hover:bg-gray-200 transition"
          >
            Les mer om kommunepiloten
          </Link>
        </div>

      </section>

      {/* SEKSJON – Offentlige innsikter */}
      <section className="bg-[#0A0F1F] py-20 border-t border-white/10">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Hva offentlige aktører sier om behovene i helsetjenesten
          </h2>

          <div className="grid md:grid-cols-2 gap-8 text-gray-300">

            <div className="bg-[#0F172A] p-6 rounded-xl shadow-lg border border-white/10">
              <p className="leading-relaxed">
                «Helsesituasjonen utvikler seg gradvis, og tidlige signaler er avgjørende for å identifisere økt risiko i tide.»
              </p>
              <p className="mt-4 text-sm text-gray-400">– Helsedirektoratet</p>
            </div>

            <div className="bg-[#0F172A] p-6 rounded-xl shadow-lg border border-white/10">
              <p className="leading-relaxed">
                «Mangelfull oversikt over legemidler og oppfølging er en hyppig årsak til alvorlige hendelser i tjenestene.»
              </p>
              <p className="mt-4 text-sm text-gray-400">– Helsetilsynet</p>
            </div>

            <div className="bg-[#0F172A] p-6 rounded-xl shadow-lg border border-white/10">
              <p className="leading-relaxed">
                «Regelmessig egenrapportering av funksjon og helse gjør det mulig å oppdage endringer tidlig og tilby riktigere støtte.»
              </p>
              <p className="mt-4 text-sm text-gray-400">– WHO ICOPE</p>
            </div>

            <div className="bg-[#0F172A] p-6 rounded-xl shadow-lg border border-white/10">
              <p className="leading-relaxed">
                «Pårørende er en stor ressurs når de får innsikt, støtte og mulighet til å bidra i oppfølgingen.»
              </p>
              <p className="mt-4 text-sm text-gray-400">– Helsetilsynet</p>
            </div>

            <div className="bg-[#0F172A] p-6 rounded-xl shadow-lg border border-white/10 md:col-span-2">
              <p className="leading-relaxed">
                «Kommunene trenger digitale løsninger som styrker forebygging, gir bedre oversikt og frigjør tid til direkte tjenesteyting.»
              </p>
              <p className="mt-4 text-sm text-gray-400">– KS</p>
            </div>

          </div>
        </div>
      </section>
{/* SEKSJON – Faglig rammeverk */}
<section className="bg-[#0F172A] py-20 border-t border-white/10">
  <div className="max-w-5xl mx-auto px-4">

    <h2 className="text-3xl font-bold text-white text-center mb-10">
      Den faglige rammen bak Tablaid
    </h2>

    <p className="text-gray-300 text-center max-w-3xl mx-auto mb-14">
      Tablaid bygger på anerkjente internasjonale rammeverk for funksjon og helsesignaler. 
      Målet er ikke å stille diagnose — men å gi brukere, pårørende og kommuner et 
      tydeligere bilde av utviklingen over tid, slik at man kan handle <strong>proaktivt</strong> 
      før behov blir akutte.
    </p>

    <div className="grid md:grid-cols-3 gap-8">

      {/* ICOPE */}
      <div className="bg-[#0A0F1F] p-6 rounded-xl border border-white/10 shadow-lg">
        <h3 className="text-xl font-semibold text-white mb-3">WHO ICOPE</h3>
        <p className="text-gray-300 text-sm leading-relaxed">
          Et internasjonalt rammeverk for tidlig oppdagelse av endringer innen syn, hørsel, 
          mobilitet, energi, psykisk helse og kognitiv funksjon.  
          Tablaid bruker en forenklet digital variant inspirert av ICOPE for daglige helsesignaler.
        </p>
        <p className="text-xs text-gray-500 mt-3">
          *ICOPE brukes som inspirasjon, ikke som diagnostisk verktøy.
        </p>
      </div>

      {/* CFS */}
      <div className="bg-[#0A0F1F] p-6 rounded-xl border border-white/10 shadow-lg">
        <h3 className="text-xl font-semibold text-white mb-3">Clinical Frailty Scale</h3>
        <p className="text-gray-300 text-sm leading-relaxed">
          CFS er en etablert skala for funksjonsnivå. 
          I Tablaid brukes en egenrapportert, forenklet modell for å vise utvikling over tid — 
          ikke for medisinsk klassifisering, men for å fange opp viktige tendenser.
        </p>
        <p className="text-xs text-gray-500 mt-3">
          *Basert på prinsippene fra CFS. Ikke en klinisk vurdering.
        </p>
      </div>

      {/* NFC */}
      <div className="bg-[#0A0F1F] p-6 rounded-xl border border-white/10 shadow-lg">
        <h3 className="text-xl font-semibold text-white mb-3">NFC medisinregistrering</h3>
        <p className="text-gray-300 text-sm leading-relaxed">
          Med et enkelt “tæpp” mot mobilen registrerer brukeren medisintaking. 
          Det gir et presist og lavterskel grunnlag for å se både etterlevelse og 
          sammenheng mellom medisiner og funksjon.
        </p>
      </div>

    </div>

    <div className="text-center mt-14 max-w-3xl mx-auto">
      <p className="text-gray-300 text-lg leading-relaxed">
        Når vi forstår <strong>hvordan funksjon, helse og medisinbruk utvikler seg</strong>, 
        kan kommuner og pårørende støtte brukeren riktig — før utfordringer blir 
        akutte. Det er dette brytningspunktet Tablaid er laget for.
      </p>
    </div>

  </div>
</section>

      {/* CTA – Pilot & Demo */}
<section className="bg-[#0F172A] py-24 text-center border-t border-white/10">
  <h2 className="text-3xl font-bold text-white mb-4">
    Vil du se hvordan Tablaid fungerer i praksis?
  </h2>

  <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto">
    Vi viser deg hvordan tidlige signaler, funksjonstrender og legemiddeloppfølging
    kan gi bedre tjenester – uten mer administrasjon.
  </p>

  <div className="flex justify-center gap-4 flex-wrap">
    <Link
      href="/kontakt"
      className="px-8 py-4 bg-green-600 hover:bg-green-500 rounded-full font-semibold text-black"
    >
      Book demo
    </Link>

    <Link
      href="/kommuner"
      className="px-8 py-4 bg-white hover:bg-gray-200 text-black rounded-full font-semibold"
    >
      Meld interesse for pilot
    </Link>
  </div>
</section>

    </main>
  );
}
