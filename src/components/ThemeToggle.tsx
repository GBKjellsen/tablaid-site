"use client";

import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const stored = localStorage.getItem("theme") as "light" | "dark" | null;

    const initial = stored ?? "light";

    document.documentElement.classList.toggle("dark", initial === "dark");
    setTheme(initial);
  }, []);

  function toggle() {
    const newTheme = theme === "light" ? "dark" : "light";

    document.documentElement.classList.toggle("dark", newTheme === "dark");
    localStorage.setItem("theme", newTheme);
    setTheme(newTheme);
  }

  return (
    <button
      onClick={toggle}
      className="px-3 py-2 rounded-md border text-sm transition
                 hover:bg-slate-100 dark:hover:bg-slate-800"
    >
      {theme === "light" ? "🌙 Mørk modus" : "🌞 Lys modus"}
    </button>
  );
}
