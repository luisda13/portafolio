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
    nombre: "Desarrollo Frontend",
    nivel: "Avanzado",
    experiencia: "2-3 años",
    descripcion: "Especialista en la creación de interfaces dinámicas y responsivas utilizando Angular (v14) y TypeScript. Experto en el desarrollo de formularios dinámicos y pruebas unitarias con Jest.",
    ejemplos: [
      "https://github.com/luisda13/portafolio/commit/be2a0281ac442d49e271267073fcc2f3c4828c60",
      "https://github.com/luisda13/franquicias-api",
      "https://github.com/luisda13/portafolio/commit/be2a0281ac442d49e271267073fcc2f3c4828c60",
    ],
  },
  {
    icon: Database,
    nombre: "Bases de datos",
    nivel: "Intermedio",
    experiencia: "2 años",
    descripcion: "Gestión y diseño de bases de datos relacionales con SQL Server y MySQL. Optimización de consultas para backend en Node.js y mantenimiento de sistemas legados",
    ejemplos: ["https://github.com/tuusuario/db-example"],
  },
  {
    icon: Cpu,
    nombre: "Desarrollo Backend",
    nivel: "Avanzado",
    experiencia: "2 año",
    descripcion: "Construcción de APIs robustas y escalables utilizando Node.js. Experiencia en el mantenimiento de aplicaciones empresariales en PHP 7 y automatización de procesos.",
    ejemplos: [],
  },
  {
    icon: Globe,
    nombre: "Soluciones Web & CMS",
    nivel: "Intermedio",
    experiencia: "1 años",
    descripcion: "Despliegue y mantenimiento de sitios corporativos mediante WordPress. Implementación de estrategias SEO, optimización de rendimiento y manejo de CRM como Clientify.",
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
    nombre: "IA Aplicada",
    nivel: "En formación (Básico/Intermedio)",
    experiencia: "< 1 año (Estudios actuales)",
    descripcion: "Actualmente cursando posgrado en IA Aplicada. Conocimientos en implementación de modelos de IA y automatización inteligente de flujos de trabajo.",
    ejemplos: [
      "https://github.com/tuusuario/db-example",
      "https://github.com/luisda13/portafolio/commit/be2a0281ac442d49e271267073fcc2f3c4828c60",
    ],
  },
  {
    icon: Cloud,
    nombre: "QA & Testing",
    nivel: "Intermedio",
    experiencia: "2 año",
    descripcion: "Aseguramiento de la calidad de software mediante pruebas unitarias con Jest y automatización de pruebas de interfaz con Selenium.",
    ejemplos: [],
  },
];

export default function Conocimientos({ onSelect }: Props) {
  const [selecBoton, setSelecBoton] = useState(-1);

  return (
    <section className="p-8 bg-gradient-to-b from-[var(--primary-foreground)] via-[var(--Fondo-intro)] to-[var(--text)] rounded-2xl shadow-md w-auto">
      <h2 className="text-3xl font-bold text-center mb-6">Mis conocimientos</h2>
      <div className="grid grid-cols-4 gap-3 justify-items-center">
        {conocimientos.map((item, index) => (
          <div key={index} className="flex flex-col items-center w-20 group">
            <button
              onClick={() => {
                onSelect(item);
                setSelecBoton(index);
              }}
              className={`relative w-14 h-14 flex items-center justify-center bg-[var(--secondary)] rounded-xl border-2 shadow-sm overflow-hidden cursor-pointer
                
                ${selecBoton == index ? "border-[var(--border)]" : ""} 

              `}
            >
              {/* fondo animado */}
              <span className="absolute inset-0 bg-[var(--hover)] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></span>

              {/* Contenido encima */}
              <item.icon
                size={24}
                className="relative text-[var(--card-foreground)] group-hover:text-[var(--primary-foreground)] transition-colors duration-300"
              />
            </button>

            {/* Texto */}
            <span className="relative text-xs text-center font-medium leading-tight mt-1.5 group-hover:text-[var(--card-foreground)] group-hover:text-[var(--hover)] transition-colors duration-300">
              {item.nombre}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}