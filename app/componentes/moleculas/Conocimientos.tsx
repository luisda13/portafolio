"use client";

import { useState } from "react";

import {
  Code,
  Database,
  Cpu,
  Globe,
  Palette,
  Cloud,
  Layers,
  GitBranch,
  Settings,
  Lock,
  Terminal,
  Smartphone,
  Monitor,
  Server,
  Bot,
  Network,
} from "lucide-react";

import { Conocimiento, Props } from "@/app/util/typesInterfaces";

const conocimientos: Conocimiento[] = [
  {
    icon: Code,
    nombre: "Desarrollo",
    nivel: "Avanzado",
    experiencia: "5 años",
    descripcion: "Trabajo en frontend, backend y arquitecturas modernas.",
    ejemplos: [
      "https://github.com/luisda13/portafolio/commit/be2a0281ac442d49e271267073fcc2f3c4828c60",
      "https://github.com/luisda13/portafolio/commit/be2a0281ac442d49e271267073fcc2f3c4828c60",
      "https://github.com/luisda13/portafolio/commit/be2a0281ac442d49e271267073fcc2f3c4828c60",
    ],
  },
  {
    icon: Database,
    nombre: "Bases de datos",
    nivel: "Intermedio",
    experiencia: "3 años",
    descripcion: "SQL y NoSQL con optimización de consultas.",
    ejemplos: ["https://github.com/tuusuario/db-example"],
  },
  {
    icon: Cpu,
    nombre: "Hardware",
    nivel: "Básico",
    experiencia: "1 año",
    descripcion: "Mantenimiento y montaje de hardware.",
    ejemplos: [],
  },
  {
    icon: Globe,
    nombre: "Desarrollo",
    nivel: "Avanzado",
    experiencia: "5 años",
    descripcion: "Trabajo en frontend, backend y arquitecturas modernas.",
    ejemplos: [
      "https://github.com/luisda13/portafolio/commit/be2a0281ac442d49e271267073fcc2f3c4828c60",
      "https://github.com/luisda13/portafolio/commit/be2a0281ac442d49e271267073fcc2f3c4828c60",
      "https://github.com/luisda13/portafolio/commit/be2a0281ac442d49e271267073fcc2f3c4828c60",
      "https://github.com/luisda13/portafolio/commit/be2a0281ac442d49e271267073fcc2f3c4828c60",
      "https://github.com/luisda13/portafolio/commit/be2a0281ac442d49e271267073fcc2f3c4828c60",
      "https://github.com/luisda13/portafolio/commit/be2a0281ac442d49e271267073fcc2f3c4828c60",
    ],
  },
  {
    icon: Palette,
    nombre: "Bases de datos",
    nivel: "Intermedio",
    experiencia: "3 años",
    descripcion: "SQL y NoSQL con optimización de consultas.",
    ejemplos: [
      "https://github.com/tuusuario/db-example",
      "https://github.com/luisda13/portafolio/commit/be2a0281ac442d49e271267073fcc2f3c4828c60",
    ],
  },
  {
    icon: Cloud,
    nombre: "Hardware",
    nivel: "Básico",
    experiencia: "1 año",
    descripcion: "Mantenimiento y montaje de hardware.",
    ejemplos: [],
  },
];

export default function Conocimientos({ onSelect }: Props) {
  const [selecBoton, setSelecBoton] = useState(-1);

  return (
    <section className="p-8 bg-gray-100 rounded-2xl shadow-md w-auto">
      <h2 className="text-3xl font-bold text-center mb-6">Mis conocimientos</h2>
      <div className="grid grid-cols-4 gap-3 justify-items-center">
        {conocimientos.map((item, index) => (
          // El padre ahora es el grupo
          <div key={index} className="flex flex-col items-center w-20 group">
            <button
              onClick={() => {
                onSelect(item);
                setSelecBoton(index);
              }}
              className={`relative w-14 h-14 flex items-center justify-center bg-white rounded-xl border-2 shadow-sm overflow-hidden 
                
                ${selecBoton == index ? "border-blue-600" : ""} 

              `}
            >
              {/* fondo animado */}
              <span className="absolute inset-0 bg-blue-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></span>

              {/* contenido encima */}
              <item.icon
                size={24}
                className="relative text-gray-700 group-hover:text-white transition-colors duration-300"
              />
            </button>
            {/* Texto  */}
            <span className="relative text-xs text-center text-gray-600 font-medium leading-tight mt-1.5 group-hover:text-blue-600 transition-colors duration-300">
              {item.nombre}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
