"use client";

import { useRef, useState } from "react";
import { medicationPrinciples } from "@/data/medicationPrinciples";
import MedicationPrincipleCard from "./MedicationPrincipleCard";

export default function MedicationPrinciplesSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const scrollX = scrollRef.current.scrollLeft;
    const width = scrollRef.current.offsetWidth;
    const index = Math.round(scrollX / width);
    setActiveIndex(index);
  };

  return (
    <section className="section-dark py-20">
      {/* TEKST – sentrert og i normal sidebredde */}
      <div className="mx-auto max-w-[var(--max-w)] px-6 text-center">
        <h2 className="text-3xl font-semibold text-white">
          Legemiddelvett – trygg bruk i hverdagen
        </h2>

        <p className="mt-2 max-w-xl mx-auto text-[var(--text-secondary)]">
          Praktiske prinsipper for trygg og riktig legemiddelbruk.
        </p>
      </div>

      {/* ================= MOBILE ================= */}
      <div className="mt-10 sm:hidden">
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="
            flex gap-4
            overflow-x-auto
            scroll-smooth
            snap-x snap-mandatory
            px-4
          "
        >
          {medicationPrinciples.map((p) => (
            <div
              key={p.id}
              className="snap-center flex-shrink-0 w-[90vw]"
            >
              <MedicationPrincipleCard principle={p} />
            </div>
          ))}
        </div>

        {/* PRIKKER */}
        <div className="mt-4 flex justify-center gap-2">
          {medicationPrinciples.map((_, i) => (
            <span
              key={i}
              className={`h-2 w-2 rounded-full transition ${
                i === activeIndex
                  ? "bg-emerald-400"
                  : "bg-slate-600"
              }`}
            />
          ))}
        </div>
      </div>

      {/* ================= DESKTOP ================= */}
      <div className="hidden sm:block mt-12">
        <div className="mx-auto max-w-[1400px] px-6">
          <div
            className="
              flex gap-6
              overflow-x-auto
              scroll-smooth
              snap-x snap-mandatory
              pb-6
            "
          >
            {medicationPrinciples.map((p) => (
              <div
                key={p.id}
                className="
                  snap-start
                  flex-shrink-0
                  w-[260px]
                  lg:w-[280px]
                "
              >
                <MedicationPrincipleCard principle={p} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
