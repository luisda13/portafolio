"use client";

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

const conocimientos = [
  { icon: Code, nombre: "Desarrollo" },
  { icon: Database, nombre: "Bases de datos" },
  { icon: Cpu, nombre: "Hardware" },
  { icon: Globe, nombre: "Web" },
  { icon: Palette, nombre: "Diseño" },
  { icon: Cloud, nombre: "Cloud" },
  { icon: Layers, nombre: "Stack" },
  { icon: GitBranch, nombre: "Git" },
  { icon: Settings, nombre: "Config" },
  { icon: Lock, nombre: "Seguridad" },
  { icon: Terminal, nombre: "CLI" },
  { icon: Smartphone, nombre: "Móvil" },
  { icon: Monitor, nombre: "Frontend" },
  { icon: Server, nombre: "Backend" },
  { icon: Bot, nombre: "Bots" },
  { icon: Network, nombre: "Redes" },
];

export default function Conocimientos() {
  return (
 <section className="p-8 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-6">Mis conocimientos</h2>
      <div className="grid grid-cols-4 gap-3 justify-items-center">
        {conocimientos.map((item, index) => (
          <div key={index} className="flex flex-col items-center w-20">
            <button className="w-14 h-14 flex items-center justify-center bg-white rounded-xl border-2 border-gray-100 shadow-sm hover:shadow-md hover:border-gray-200 transition-all duration-200 mb-1.5">
              <item.icon size={24} className="text-gray-700" />
            </button>
            <span className="text-xs text-center text-gray-600 font-medium leading-tight">
              {item.nombre}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}