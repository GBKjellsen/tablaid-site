"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import ToggleCTA from "@/components/ui/ToggleCTA";

export default function InfoskrivPage() {
  const router = useRouter();
  const [state, setState] = useState("idle");

  async function handleSubmit(e: any) {
    e.preventDefault();
    setState("loading");

    const formData = new FormData(e.target);

    // Tag submission so you see it clearly in Formspree
    formData.append("_source", "Infoskriv nedlasting");

    const res = await fetch("https://formspree.io/f/xwpgbqaj", {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    });

    if (res.ok) {
      router.push("/pilot-infoskriv");
    } else {
      alert("Noe gikk galt — prøv igjen.");
      setState("idle");
    }
  }

  return (
    <div className="mx-auto max-w-lg px-6 py-20">
      <h1 className="text-3xl font-bold mb-6">Last ned infoskriv</h1>

      <p className="text-slate-300 mb-6">
        For å få tilgang til infoskrivet om kommunepiloten ber vi om noen korte
        kontaktopplysninger. Du mottar også infoskrivet på e-post.
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">

        <input
          required
          name="name"
          className="input"
          placeholder="Fullt navn"
        />

        <input
          required
          name="role"
          className="input"
          placeholder="Stilling / rolle"
        />

        <input
          required
          name="kommune"
          className="input"
          placeholder="Kommune / bydel"
        />

        <input
          required
          name="email"
          type="email"
          className="input"
          placeholder="E-postadresse"
        />

<ToggleCTA
  toggled={false}
  onClick={() => {}}
  labelOn={state === "loading" ? "Sender..." : "Last ned infoskriv"}
  labelOff={state === "loading" ? "Sender..." : "Last ned infoskriv"}
  disabled={state === "loading"}
/>



      </form>
    </div>
  );
}
