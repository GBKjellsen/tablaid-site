"use client";

import Image from "next/image";
import Link from "next/link";
import { GlowImage } from "@/components/Glow";

type HeroProps = {
  badge?: string;
  title: string;
  subtitle?: string;
  supportText?: string;
  image: string;
  imageLeft?: boolean; // true = bilde venstre, false = bilde høyre
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
    <section className="relative overflow-hidden pt-24 pb-20">
      {/* Glow */}
      <div className="absolute inset-0 pointer-events-none opacity-60">
        <div className="hero-glow" />
      </div>

      <div
        className={`mx-auto max-w-[var(--max-w)] px-6 lg:px-20 flex flex-col 
        ${
          imageLeft
            ? "lg:flex-row-reverse"
            : "lg:flex-row"
        } 
        items-center gap-12`}
      >
        {/* TEXT */}
        <div className="flex-1 text-center lg:text-left">
          {badge && <span className="badge">{badge}</span>}

          <h1 className="text-3xl md:text-4xl font-bold leading-tight mt-4">
            {title}
          </h1>

          {subtitle && (
            <p className="text-slate-300 text-lg leading-relaxed mt-6 max-w-xl">
              {subtitle}
            </p>
          )}

          {supportText && (
            <p className="text-slate-400 italic mt-4 text-sm max-w-xl">
              {supportText}
            </p>
          )}

          {/* CTAs */}
          {(primaryCta || secondaryCta) && (
            <div className="flex flex-col sm:flex-row gap-4 mt-10 justify-center lg:justify-start">
              {primaryCta && (
                <Link href={primaryCta.href} className="button-primary">
                  {primaryCta.label}
                </Link>
              )}

              {secondaryCta && (
                <Link href={secondaryCta.href} className="button-secondary">
                  {secondaryCta.label}
                </Link>
              )}
            </div>
          )}
        </div>

        {/* IMAGE */}
        <div className={`flex-1 flex justify-center lg:justify-${imageLeft ? "start" : "end"}`}>
  <GlowImage
  src={image}
  alt={title}
  width={verticalImage ? 300 : 540}
  height={verticalImage ? 460 : 480}
  className={`
    rounded-2xl shadow-xl
    ${verticalImage 
      ? "w-[260px] sm:w-[300px] lg:w-[340px] mx-auto" 
      : "w-[90%] sm:w-[80%] lg:w-[340px]"}
  `}
/>

</div>

      </div>
    </section>
  );
}
