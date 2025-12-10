// src/components/Glow.tsx
"use client";

import Image from "next/image";

/* -----------------------------------------
   PAGE BACKGROUND GLOWS
----------------------------------------- */

export function PageGlow() {
  return (
    <div
      className="
        pointer-events-none absolute inset-x-0 top-0 -z-10 
        h-40 bg-white/10 blur-[100px]
      "
    />
  );
}

export function HeroGlow() {
  return (
    <div
      className="
        pointer-events-none absolute inset-x-0 top-0 -z-10 
        h-72 bg-white/15 blur-[140px]
      "
    />
  );
}

/* -----------------------------------------
   UNIVERSAL IMAGE GLOW (MATCHES THE FRONT PAGE)
----------------------------------------- */

export function GlowImage({
  src,
  alt,
  width,
  height,
  className = "",
  priority = false,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  priority?: boolean;
}) {
  return (
    <div className="relative w-fit mx-auto">

      {/* Emerald aura glow (subtle but beautiful) */}
      <div
        className="
          absolute inset-0 scale-110 blur-2xl
          bg-emerald-500/20
          -z-10 rounded-2xl
        "
      />

      {/* Modern frame + emerald shadow */}
      <div
        className="
          relative overflow-hidden rounded-2xl
          border border-white/10 bg-[#0F172A]/70
          shadow-[0_0_44px_-12px_rgba(16,185,129,0.35)]
        "
      >
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          priority={priority}
          className={`object-cover ${className}`}
        />
      </div>

    </div>
  );
}