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

const icons = [
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
];

export default function Conocimientos() {
  return (
    <section className="p-8 bg-gray-50 rounded-xl shadow-sm">
      <h2 className="text-3xl font-bold text-center mb-8">Mis conocimientos</h2>
      <div className="grid grid-cols-4 gap-4">
        {icons.map((Icon, index) => (
          <button
            key={index}
            className="w-20 h-20 flex items-center justify-center bg-white rounded-xl shadow hover:shadow-md hover:bg-gray-100 transition"
          >
            <Icon size={32} className="text-gray-700" />
          </button>
        ))}
      </div>
    </section>
  );
}
