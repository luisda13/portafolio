"use client";

import { useState } from "react";
import { useLanguage } from "../../util/LanguageContext";
import { Code, Database, Cpu, Globe, Palette, Cloud } from "lucide-react";
import { Props } from "@/app/util/typesInterfaces";

// Definimos la estructura base (esta no se traduce, es para control interno)
const knowledgeBase = [
  { id: "frontend", icon: Code, nameKey: "Frontend Development" },
  { id: "database", icon: Database, nameKey: "Databases" },
  { id: "backend", icon: Cpu, nameKey: "Backend Development" },
  { id: "web", icon: Globe, nameKey: "Web Solutions & CMS" },
  { id: "ai", icon: Palette, nameKey: "Applied AI" },
  { id: "qa", icon: Cloud, nameKey: "QA & Testing" },
];

export default function Conocimientos({ onSelect }: Props) {
  const { t } = useLanguage();
  const [selecBoton, setSelecBoton] = useState(-1);

  return (
    <section className="p-8 bg-gradient-to-b from-[var(--primary-foreground)] via-[var(--Fondo-intro)] to-[var(--text)] rounded-2xl shadow-md w-auto h-full">
      <h2 className="text-3xl font-bold text-center mb-6">{t.knowledgeSection}</h2>
      <div className="grid grid-cols-4 gap-3 justify-items-center">
        {t.knowledgeList.map((item: any, index: number) => {
          // Buscamos el icono correspondiente basado en el nombre o index
          const iconInfo = knowledgeBase[index];

          return (
            <div key={index} className="flex flex-col items-center w-20 group">
              <button
                onClick={() => {
                  onSelect(item);
                  setSelecBoton(index);
                }}
                className={`relative w-14 h-14 flex items-center justify-center bg-[var(--secondary)] rounded-xl border-2 shadow-sm overflow-hidden cursor-pointer
                  ${selecBoton === index ? "border-[var(--border)]" : "border-transparent"}
                `}
              >
                <span className="absolute inset-0 bg-[var(--hover)] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></span>
                {iconInfo && (
                  <iconInfo.icon
                    size={24}
                    className="relative text-[var(--card-foreground)] group-hover:text-[var(--primary-foreground)] transition-colors duration-300"
                  />
                )}
              </button>
              <span className="relative text-xs text-center font-medium leading-tight mt-1.5 group-hover:text-[var(--hover)] transition-colors duration-300">
                {item.name}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}