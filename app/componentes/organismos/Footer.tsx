"use client";

import {
  Terminal,
  Smartphone,
  Monitor,
  Server,
  Bot,
  Network,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 py-8 mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Título */}
        <h2 className="text-lg font-semibold mb-4">Contáctame</h2>

        {/* Iconos de redes */}
        <div className="flex justify-center space-x-6 mb-4">
          <a
            href="https://github.com/tuusuario"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors duration-300"
          >
            <Terminal size={28} />
          </a>

          <a
            href="https://linkedin.com/in/tuusuario"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors duration-300"
          >
            <Smartphone size={28} />
          </a>

          <a
            href="https://twitter.com/tuusuario"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors duration-300"
          >
            <Monitor size={28} />
          </a>
        </div>

        {/* Derechos reservados */}
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} Tu Nombre. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
