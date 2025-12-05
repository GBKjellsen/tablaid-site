"use client";

import Image from "next/image";

export default function Logo() {
  return (
    <Image
      src="/tablaid-logo-negative.png"
      alt="Tablaid logo"
      width={150}
      height={40}
      priority
    />
  );
}
