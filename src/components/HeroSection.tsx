"use client";

import Link from "next/link";
import { GlowImage } from "@/components/Glow";

type HeroProps = {
  badge?: string;
  title: string;
  subtitle?: string;
  supportText?: string;
  image: string;
  imageLeft?: boolean; // Kun desktop
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  verticalImage?: boolean;
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
}: HeroProps) {
  return (
    <section className="relative overflow-hidden pt-16 sm:pt-24 lg:pt-28 pb-16 sm:pb-20">
      {/* Glow */}
      <div className="absolute inset-0 pointer-events-none opacity-60">
        <div className="hero-glow" />
      </div>

      {/* CONTENT GRID */}
      <div
        className={`
          relative z-10
          mx-auto max-w-[var(--max-w)] px-6 lg:px-20
          grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16
          items-start
        `}
      >
        {/* -------------------------------- */}
        {/* TEXT COLUMN – ALLTID FØRST       */}
        {/* -------------------------------- */}
        <div className="flex flex-col order-1 text-center lg:text-left">
          {badge && (
            <span className="badge mb-4 self-center lg:self-start">
              {badge}
            </span>
          )}

          <h1 className="mt-1">
            {title}
          </h1>

          {subtitle && (
            <p className="mt-4 max-w-xl mx-auto lg:mx-0 text-slate-300 text-sm sm:text-base leading-relaxed">
              {subtitle}
            </p>
          )}

          {supportText && (
            <p className="mt-4 max-w-xl mx-auto lg:mx-0 text-slate-400 italic text-sm">
              {supportText}
            </p>
          )}

          {/* CTAs */}
          {(primaryCta || secondaryCta) && (
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:gap-4 w-full sm:w-auto justify-center lg:justify-start">
              {primaryCta && (
                <Link
                  href={primaryCta.href}
                  className="button-primary w-full sm:w-auto"
                >
                  {primaryCta.label}
                </Link>
              )}

              {secondaryCta && (
                <Link
                  href={secondaryCta.href}
                  className="button-secondary w-full sm:w-auto"
                >
                  {secondaryCta.label}
                </Link>
              )}
            </div>
          )}
        </div>

        {/* -------------------------------- */}
        {/* IMAGE COLUMN – ALLTID SIST MOBIL */}
        {/* -------------------------------- */}
        <div
          className={`
            order-2
            flex justify-center
            ${imageLeft ? "lg:order-1 lg:justify-start" : "lg:order-2 lg:justify-end"}
            mt-6 lg:mt-0
          `}
        >
          <GlowImage
            src={image}
            alt={title}
            width={verticalImage ? 300 : 540}
            height={verticalImage ? 460 : 480}
            className={`
              rounded-2xl shadow-xl
              ${
                verticalImage
                  ? "w-[240px] sm:w-[280px] lg:w-[340px]"
                  : "w-[90%] sm:w-[80%] lg:w-[420px]"
              }
            `}
          />
        </div>
      </div>
    </section>
  );
}
