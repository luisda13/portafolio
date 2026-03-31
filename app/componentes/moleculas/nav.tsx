"use client";

import { useState, useEffect } from "react";
import { NavLink } from "../atoms/NavLink";
import Image from "next/image";
import { useLanguage } from "../../util/LanguageContext";

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  //Extraemos 't' (traducciones), 'lang' (idioma actual) y la función para cambiarlo
  const { t, lang, toggleLanguage } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
      <nav
        className={`
          fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out
          ${isScrolled
            ? "-translate-y-[90%] hover:translate-y-0 opacity-0 hover:opacity-100 bg-[var(--primary)]/90 backdrop-blur-md shadow-lg"
            : "translate-y-0 opacity-100 bg-[var(--primary)]"}
          /* ESTA ES LA CLAVE: */
          after:content-[''] after:absolute after:top-full after:left-0 after:w-full after:h-4 after:pointer-events-auto
        `}
      >
      <div className="px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">

            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
               <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4 items-center">
                    <NavLink href="#home">{t.home}</NavLink>
                    <NavLink href="#conocimientos">{t.knowledge}</NavLink>
                    <NavLink href="#redes">{t.networks}</NavLink>

                    {/* --- BOTÓN DE CAMBIO DE IDIOMA --- */}
                    <button
                      onClick={toggleLanguage}
                      className="ml-4 px-2 py-1 text-xs font-bold text-white border border-white/20 rounded hover:bg-white/10 transition-all"
                    >
                      {lang === "es" ? "EN 🇬🇧" : "ES 🇪🇸"}
                    </button>
                  </div>
                </div>
            </div>

          {/* Menú de perfil y móvil... */}
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <div className="relative ml-3">
              <button
                type="button"
                className="relative flex rounded-full focus:outline-none"
                onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
              >
                <Image
                  src="/imagenes/logo.png"
                  alt="Logo"
                  width={32}
                  height={32}
                  className="object-cover rounded-full"
                />
              </button>

              {/* Dropdown de perfil con textos traducidos */}
              <div className={`absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-gray-800 py-1 shadow-lg ${isUserMenuOpen ? "block" : "hidden"}`}>
                <NavLink href="#home" isMenuItem={true}>{t.home}</NavLink>
                <NavLink href="#about" isMenuItem={true}>{t.knowledge}</NavLink>
                <NavLink href="#contact" isMenuItem={true}>{t.contact}</NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Menú móvil traducido */}
      <div className={`sm:hidden ${isMobileMenuOpen ? "block" : "hidden"}`} id="mobile-menu">
        <div className="space-y-1 px-2 pt-2 pb-3">
          <NavLink href="#home">{t.home}</NavLink>
          <NavLink href="#conocimientos">{t.knowledge}</NavLink>
          <NavLink href="#redes">{t.networks}</NavLink>
          {/* Botón de idioma también en el móvil */}
          <button
            onClick={toggleLanguage}
            className="w-full text-left px-3 py-2 text-white font-medium"
          >
            {lang === "es" ? "Switch to English" : "Cambiar a Español"}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default App;