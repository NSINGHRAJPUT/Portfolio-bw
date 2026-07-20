"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const dark = theme !== "light";

  return (
    <button
      aria-label="Toggle theme"
      className="glass rounded-full p-2 text-white transition hover:scale-105"
      onClick={() => setTheme(dark ? "light" : "dark")}
      type="button"
    >
      {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4 text-slate-700" />}
    </button>
  );
}
