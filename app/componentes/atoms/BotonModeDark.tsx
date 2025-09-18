"use client";

import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const htmlElement = document.querySelector("html");
    if (htmlElement) {
      htmlElement.setAttribute("data-theme", theme);
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  return (
    <div className="fixed right-4 top-1/2 -translate-y-1/2 z-50">
      <button
        onClick={toggleTheme}
        className="w-10 h-10 flex items-center justify-center dark:bg-purple-950/80 bg-purple-500 rounded-xl border-2 shadow-sm cursor-pointer transition-transform duration-300 hover:scale-110"
      >
        {theme === "dark" ? <Moon /> : <Sun />}
      </button>
    </div>
  );
}
