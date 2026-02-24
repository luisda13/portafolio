"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function PageIA() {
    const handleClose = () => {
        window.close();
      };
  return (
    <main className="min-h-screen bg-[var(--secondary)] p-8">
      <div className="max-w-4xl mx-auto">
        {/* Botón para volver */}
<button
        onClick={handleClose}
        className="inline-flex items-center gap-2 mb-8 text-purple-400 hover:text-purple-300 transition-colors"
      >
        <ArrowLeft size={20} />
        Cerrar y volver al portafolio
      </button>
        <h1 className="text-4xl font-bold text-white mb-6">
          Detalles de mi Experiencia
        </h1>

        <section className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
          <p className="text-gray-200 text-lg leading-relaxed">
            [cite_start]Aquí puedes usar la información de tu hoja de vida[cite: 8, 9].
            [cite_start]Por ejemplo, detallar tu dominio en Angular 14, Node.js y PHP[cite: 11, 15].
          </p>

          {/* Aquí puedes mapear tus conocimientos reales */}
        </section>
      </div>
    </main>
  );
}