"use client";

import { useState } from "react";

type VpcToggleProps = {
  children: React.ReactNode;
  labelOn?: string;
  labelOff?: string;
};

export default function VpcToggle({
  children,
  labelOn = "Skjul verdiforslag",
  labelOff = "Se verdiforslag"
}: VpcToggleProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full">
      <div className="text-center mt-12">
        <button
          onClick={() => setOpen((v) => !v)}
          className="
            px-6 py-2 text-sm rounded-full 
            bg-emerald-500/10 
            text-emerald-300 
            border border-emerald-400/30
            hover:bg-emerald-500/20
            transition
          "
        >
          {open ? labelOn : labelOff}
        </button>
      </div>

      {open && (
        <div className="max-w-5xl mx-auto mt-10 px-6 text-left">
          {children}
        </div>
      )}
    </div>
  );
}
