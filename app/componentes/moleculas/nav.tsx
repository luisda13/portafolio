"use client";

import { useState } from "react";
import { NavLink } from "../atoms/NavLink";
import Image from "next/image";

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  return (
    <nav className="relative bg-[var(--primary)] after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-white/10 dark:after:bg-yellow-300/10">
      <div className="px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          {/* ------------------ 👇 Menú escritorio (links visibles en pantallas grandes) ------------------ */}
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">

            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                <NavLink href="/">
                  <p className="text-white">Home</p>
                </NavLink>
                <NavLink href="/about">
                  <p className="text-white">Conocimientos</p>
                </NavLink>
                <NavLink href="/contact">
                  <p className="text-white">Redes</p>
                </NavLink>
              </div>
            </div>
          </div>

          {/* ------------------ 👇 Menú móvil (solo icono hamburguesa) ------------------ */}
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button */}
            <button
              type="button"
              className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-white/5 hover:text-white focus:outline-2 focus:-outline-offset-1 focus:outline-indigo-500"
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                aria-hidden="true"
                className={`size-6 ${isMobileMenuOpen ? "hidden" : "block"}`}
              >
                <path
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                aria-hidden="true"
                className={`size-6 ${isMobileMenuOpen ? "block" : "hidden"}`}
              >
                <path
                  d="M6 18 18 6M6 6l12 12"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
          {/* ------------------ 👇 Perfil y notificaciones (escritorio) ------------------ */}
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            {/* Profile dropdown */}
            <div className="relative ml-3">
              <div>
                <button
                  type="button"
                  className="relative flex rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                  id="user-menu-button"
                  aria-expanded={isUserMenuOpen}
                  aria-haspopup="true"
                  onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                >
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">Open user menu</span>
            <div className="flex shrink-0 items-center">
              <Image
                src="/imagenes/logo.png"
                alt="Foto de perfil"
                width={32}
                height={32}
                className="object-cover w-full h-ful"
              />

            </div>
                </button>
              </div>

              {/* Menu de perfil */}
              <div
                className={`absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-gray-800 py-1 outline -outline-offset-1 outline-white/10 transition [--anchor-gap:--spacing(2)] ${isUserMenuOpen ? "block" : "hidden"}`}
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="user-menu-button"
                tabIndex={-1}
              >
                <NavLink href="/" isMenuItem={true} id="user-menu-item-0">
                  Home
                </NavLink>
                <NavLink href="/about" isMenuItem={true} id="user-menu-item-1">
                  About
                </NavLink>
                <NavLink
                  href="/contact"
                  isMenuItem={true}
                  id="user-menu-item-2"
                >
                  Contact
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ------------------ 👇 Menú desplegable para móvil ------------------ */}
      <div
        className={`sm:hidden ${isMobileMenuOpen ? "block" : "hidden"}`}
        id="mobile-menu"
      >
        <div className="space-y-1 px-2 pt-2 pb-3">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/about">About</NavLink>
          <NavLink href="/contact">Contact</NavLink>
        </div>
      </div>
    </nav>
  );
}

export default App;
