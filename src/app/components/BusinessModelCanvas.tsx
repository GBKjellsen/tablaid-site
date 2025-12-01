"use client";

import { useRef } from "react";

export default function BusinessModelCanvas() {
  const canvasRef = useRef<HTMLDivElement | null>(null);

 const handlePrint = () => {
  if (!canvasRef.current) return;

  const html = canvasRef.current.innerHTML;

  const win = window.open("", "", "width=900,height=600");
  if (!win) return;

  // 🔥 1: ABSOLUTT URL – bytt ut domenet med ditt faktiske Vercel-domene når du deployer
  const logoUrl = `${window.location.origin}/Tablaid%20Logo%20Horizontal%20Positive.png`;

  win.document.write(`
    <html>
      <head>
        <title>Tablaid – Business Model Canvas</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            padding: 32px;
            color: #000;
            background: #ffffff;
            line-height: 1.5;
          }

          .header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 24px;
            padding-bottom: 12px;
            border-bottom: 2px solid #333;
          }

          .header img {
            height: 50px;
            width: auto;
          }

          .contact {
            text-align: right;
            font-size: 12px;
            line-height: 1.3;
          }

          .footer {
            margin-top: 40px;
            padding-top: 12px;
            border-top: 1px solid #ccc;
            font-size: 12px;
            text-align: center;
            color: #444;
          }
        </style>
      </head>

      <body>
        <div class="header">
          <img src="${logoUrl}" alt="Tablaid logo" />

          <div class="contact">
            <strong>Tablaid AS</strong><br />
            Gaute Birkeland Kjellsen, Founder & CEO<br />
            Tel: +47 913 43 663<br />
            post@tablaid.no<br />
            www.tablaid.no
          </div>
        </div>

        ${html}

        <div class="footer">
          © ${new Date().getFullYear()} Tablaid AS – Business Model Canvas
        </div>
      </body>
    </html>
  `);

  win.document.close();
  win.focus();
  win.print();
  win.close();
};


  return (
    <div className="mb-12">
      {/* PRINT-KNAPP */}
      <button
        onClick={handlePrint}
        className="mb-4 rounded-full bg-emerald-500 px-4 py-2 text-xs font-semibold text-slate-900 hover:bg-emerald-400"
      >
        📄 Last ned / skriv ut
      </button>

      {/* SELVE BMC-INNHOLDET */}
      <div
        ref={canvasRef}
        className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6"
      >
        <h2 className="text-xl font-semibold text-slate-50">
          Business Model Canvas – Tablaid
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {/* Kundesegmenter */}
          <div className="bmc-box border border-slate-800 rounded-xl bg-slate-900/50 p-4">
            <h3 className="bmc-title text-emerald-300">Kundesegmenter</h3>
            <ul className="text-slate-300 text-sm">
              <li>Kommunal primærhelsetjeneste</li>
              <li>Kronisk syke og legemiddelbrukere</li>
              <li>Pårørende</li>
              <li>Myndigheter og forskningsmiljøer</li>
            </ul>
          </div>

          {/* Verdiforslag */}
          <div className="bmc-box border border-slate-800 rounded-xl bg-slate-900/50 p-4">
            <h3 className="bmc-title text-emerald-300">Verdiforslag</h3>
            <ul className="text-slate-300 text-sm">
              <li>Digital legemiddelassistent</li>
              <li>Funksjonskompass (ICOPE + CFS)</li>
              <li>Tidlige trendsignaler</li>
              <li>Deling med kommune og pårørende</li>
            </ul>
          </div>

          {/* Kanaler */}
          <div className="bmc-box border border-slate-800 rounded-xl bg-slate-900/50 p-4">
            <h3 className="bmc-title text-emerald-300">Kanaler</h3>
            <ul className="text-slate-300 text-sm">
              <li>Kommunedialog</li>
              <li>Faglige nettverk</li>
              <li>Nettside</li>
              <li>Treffsentere</li>
            </ul>
          </div>

          {/* Kunderelasjoner */}
          <div className="bmc-box border border-slate-800 rounded-xl bg-slate-900/50 p-4">
            <h3 className="bmc-title text-emerald-300">Kunderelasjoner</h3>
            <ul className="text-slate-300 text-sm">
              <li>Selvbetjeningsapp</li>
              <li>Pilotoppfølging</li>
              <li>Support</li>
              <li>Pårørendedialog</li>
            </ul>
          </div>

          {/* Inntektsstrømmer */}
          <div className="bmc-box border border-slate-800 rounded-xl bg-slate-900/50 p-4">
            <h3 className="bmc-title text-emerald-300">Inntektsstrømmer</h3>
            <ul className="text-slate-300 text-sm">
              <li>Pilotinntekter (25k × 20 kommuner)</li>
              <li>Kommunelisens</li>
              <li>Pårørende-abonnement</li>
              <li>Affiliate (syn/hørsel)</li>
            </ul>
          </div>

          {/* Ressurser */}
          <div className="bmc-box border border-slate-800 rounded-xl bg-slate-900/50 p-4">
            <h3 className="bmc-title text-emerald-300">Ressurser</h3>
            <ul className="text-slate-300 text-sm">
              <li>Utviklerteam</li>
              <li>Helsefaglig kompetanse</li>
              <li>ICOPE + CFS</li>
              <li>Eksterne partnere & styre</li>
            </ul>
          </div>

          {/* Aktiviteter */}
          <div className="bmc-box border border-slate-800 rounded-xl bg-slate-900/50 p-4">
            <h3 className="bmc-title text-emerald-300">Kjerneaktiviteter</h3>
            <ul className="text-slate-300 text-sm">
              <li>Apputvikling & stabilitet</li>
              <li>Pilotfase Østensjø</li>
              <li>20-kommuners læringspilot</li>
              <li>Brukerinnsikt</li>
            </ul>
          </div>

          {/* Partnere */}
          <div className="bmc-box border border-slate-800 rounded-xl bg-slate-900/50 p-4">
            <h3 className="bmc-title text-emerald-300">Partnere</h3>
            <ul className="text-slate-300 text-sm">
              <li>Bydel Østensjø</li>
              <li>SmartOslo</li>
              <li>Podium</li>
              <li>Flere kommuner</li>
            </ul>
          </div>

          {/* Kostnadsstruktur */}
          <div className="bmc-box border border-slate-800 rounded-xl bg-slate-900/50 p-4">
            <h3 className="bmc-title text-emerald-300">Kostnadsstruktur</h3>
            <ul className="text-slate-300 text-sm">
              <li>Utvikling</li>
              <li>Pilotdrift</li>
              <li>Markedsføring</li>
              <li>Teknisk drift</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
