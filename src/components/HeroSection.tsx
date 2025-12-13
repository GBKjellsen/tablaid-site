"use client";

import Link from "next/link";
import { GlowImage } from "@/components/Glow";

type HeroProps = {
  badge?: string;
  title: string;
  subtitle?: string;
  supportText?: string;
  image: string;
  imageLeft?: boolean; // kun desktop
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  verticalImage?: boolean;
  glow?: "default" | "focus";
};

export default function HeroSection({
  badge,
  title,
  subtitle,
  supportText,
  image,
  imageLeft = false,
  primaryCta,
  secondaryCta,
  verticalImage = false,
  glow = "default",
}: HeroProps) {
  return (
    <section className="relative overflow-hidden pt-20 pb-20">
      {/* Glow */}
      {glow === "focus" && (
        <div
          className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-72
                     bg-emerald-500/20 blur-[120px]"
        />
      )}

      {glow === "default" && (
  <div className="absolute inset-0 pointer-events-none opacity-60">
    <div className="hero-glow" />
  </div>
)}


      {/* CONTENT */}
      <div
        className={`
          relative z-10
          mx-auto max-w-[var(--max-w)] px-6 lg:px-20
          flex flex-col
          gap-10
          ${imageLeft ? "lg:flex-row" : "lg:flex-row-reverse"}
          lg:items-center
        `}
      >
        {/* MOBILE BADGE – OVER IMAGE */}
{badge && (
  <div className="flex justify-center lg:hidden -mb-4">
    <span className="badge z-10">
      {badge}
    </span>
  </div>
)}

{/* IMAGE (ALLTID ØVERST PÅ MOBIL) */}
<div className="flex w-full justify-center">
  <GlowImage
    src={image}
    alt={title}
    width={verticalImage ? 300 : 540}
    height={verticalImage ? 460 : 480}
    className={
      verticalImage
        ? "w-full max-w-[340px] mx-auto rounded-2xl shadow-xl"
        : "w-full max-w-[420px] mx-auto sm:max-w-[360px] lg:max-w-[420px] rounded-2xl shadow-xl"
    }
  />
</div>



        {/* TEXT (ALLTID UNDER BILDE PÅ MOBIL) */}
        <div className="w-full text-center lg:text-left max-w-2xl mx-auto lg:mx-0">
          {badge && (
            <span className="badge mb-4 hidden lg:inline-block">
              {badge}
            </span>
          )}

          <h1 className="mt-2">{title}</h1>

          {subtitle && (
            <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
              {subtitle}
            </p>
          )}

          {supportText && (
            <p className="mt-4 text-slate-400 italic text-sm">
              {supportText}
            </p>
          )}

{/* CTAs */}
{(primaryCta || secondaryCta) && (
  <div
    className="
      mt-6
      flex flex-col gap-3
      items-stretch
      max-w-sm mx-auto
      sm:flex-row sm:items-center sm:max-w-none sm:mx-0
      lg:justify-start
    "
  >
    {primaryCta && (
      <Link
        href={primaryCta.href}
        className="button-primary inline-flex justify-center whitespace-nowrap"
      >
        {primaryCta.label}
      </Link>
    )}

    {secondaryCta && (
      <Link
        href={secondaryCta.href}
        className="button-secondary inline-flex justify-center whitespace-nowrap"
      >
        {secondaryCta.label}
      </Link>
    )}
  </div>
)}

</div>   {/* lukker TEXT-blokken */}
</div>   {/* lukker CONTENT-wrapper */}
</section>
);
}