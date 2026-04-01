"use client";
import { createContext, useContext, useState, useEffect } from "react";
import { translations } from "../util/translations";

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState("en");

  // Al cargar, recuperamos el idioma guardado si existe
  useEffect(() => {
    const savedLang = localStorage.getItem("app-lang");
    if (savedLang) setLang(savedLang);
  }, []);

  const toggleLanguage = () => {
    const newLang = lang === "es" ? "en" : "es";
    setLang(newLang);
    localStorage.setItem("app-lang", newLang);
  };

  const t = translations[lang];

  return (
    <LanguageContext.Provider value={{ lang, t, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

// Este es el "Hook" que usarán tus átomos
export const useLanguage = () => useContext(LanguageContext);