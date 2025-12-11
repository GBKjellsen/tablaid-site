"use client";

interface ToggleCTAProps {
  toggled: boolean;
  onClick: () => void;
  labelOn: string;
  labelOff: string;
}

export default function ToggleCTA({
  toggled,
  onClick,
  labelOn,
  labelOff,
}: ToggleCTAProps) {
  return (
    <button
      onClick={onClick}
      className="
        inline-flex items-center justify-center
        rounded-full px-6 py-3 text-sm font-semibold
        bg-emerald-500 hover:bg-emerald-400
        text-white transition-all
        shadow-[0_0_20px_rgba(16,185,129,0.15)]
      "
    >
      {toggled ? labelOn : labelOff}
    </button>
  );
}
