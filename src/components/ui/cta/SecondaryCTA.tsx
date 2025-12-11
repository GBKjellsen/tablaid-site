import Link from "next/link";

interface SecondaryCTAProps {
  href?: string;
  label: string;
  onClick?: () => void;
  full?: boolean;
  type?: "button" | "submit";
}

export default function SecondaryCTA({
  href,
  label,
  onClick,
  full = false,
  type = "button",
}: SecondaryCTAProps) {
  const className = `
    rounded-full border border-emerald-400/40 
    text-emerald-300 px-6 py-3 text-sm font-medium 
    hover:bg-emerald-400/10 transition
    ${full ? "w-full" : ""}
  `;

  if (href) {
    return (
      <Link href={href} className={className}>
        {label}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={className}>
      {label}
    </button>
  );
}
