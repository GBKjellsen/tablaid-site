import Link from "next/link";

interface PrimaryCTAProps {
  href?: string;
  label: string;
  onClick?: () => void;
  full?: boolean;
  type?: "button" | "submit";
}

export default function PrimaryCTA({
  href,
  label,
  onClick,
  full = false,
  type = "button",
}: PrimaryCTAProps) {
  const className = `
    rounded-full bg-emerald-500 hover:bg-emerald-400
    text-slate-900 font-semibold px-6 py-3 text-sm transition
    ${full ? "w-full" : ""}
  `;

  // If link → return Link
  if (href) {
    return (
      <Link href={href} className={className}>
        {label}
      </Link>
    );
  }

  // Else → return button
  return (
    <button type={type} onClick={onClick} className={className}>
      {label}
    </button>
  );
}
