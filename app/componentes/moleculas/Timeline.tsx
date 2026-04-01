"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { useLanguage } from "@/app/util/LanguageContext";

export default function Timeline() {

  const { t } = useLanguage();
  const experiences = t.experiences.items;

  const [selected, setSelected] = useState<number | null>(null);
  const [highlighted, setHighlighted] = useState<number>(0);
  const [autoScroll, setAutoScroll] = useState<boolean>(true);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement | null>(null);

  // 👀 Detectar visibilidad con Intersection Observer
  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(entry.isIntersecting);
        });
      },
      { threshold: 0.2 } // al menos 20% visible
    );

    observer.observe(containerRef.current);

    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, []);

  // 🔥 Auto-scroll cuando el componente está visible
  useEffect(() => {
    if (!autoScroll || !isVisible) return; // se detiene si no está visible

    const interval = setInterval(() => {
      setHighlighted((prev) => {
        const next = (prev + 1) % experiences.length;

        cardRefs.current[next]?.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
        });

        return next;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, [autoScroll, isVisible]);

  const handleCardClick = (index: number) => {
    setSelected(selected === index ? null : index);
    setAutoScroll(false); // parar auto-scroll al hacer clic
    setHighlighted(index);
  };

  return (
    <section ref={containerRef} className=" p-10">
      <h2 className="text-3xl font-bold text-center mb-8">{t.experiences.sectionTitle}</h2>
      <div className="flex flex-col md:flex-row items-center justify-center gap-10">
        {/* Imagen */}
        <div className="flex flex-col items-center gap-6 flex-shrink-0">
          {/* Imagen Principal */}
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            <Image
              src="/imagenes/fotoPerfil.jpg"
              alt="Foto de perfil"
              fill
              className="object-cover rounded-2xl shadow-xl border-2 border-purple-500/20"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>

          {/* Contador de Experiencia (Debajo de la imagen) */}
          <div className="flex flex-col items-center group">
            <div className="bg-gradient-to-b from-purple-900/40 to-black/60 backdrop-blur-md border border-purple-500/30 px-8 py-3 rounded-2xl shadow-[0_0_20px_rgba(168,85,247,0.15)] transition-all duration-300 group-hover:border-purple-400 group-hover:shadow-[0_0_25px_rgba(168,85,247,0.3)]">
              <span className="block text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-fuchsia-300 text-center">
                {/* Aquí puedes poner el número manual o la variable displayYears */}
                2.1
              </span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-purple-300/80 font-semibold">
                {t.experiences.years}
              </span>
            </div>

            {/* Adorno visual: pequeña línea de conexión opcional */}
            <div className="w-px h-8 bg-gradient-to-b from-purple-500/50 to-transparent mt-2"></div>
          </div>
        </div>

        {/* Cards con scroll interno */}
        <div className="flex flex-col gap-4 w-full max-w-xl h-[400px] overflow-y-auto m-4 p-8 bg-gradient-to-b from-[var(--primary-foreground)] via-[var(--Fondo-intro)] to-[var(--text)] rounded-2xl shadow-md w-auto">
          {experiences.map((exp: any, index: number) => (
            <div
              key={exp.id}
              ref={(el: HTMLDivElement | null) => {
                cardRefs.current[index] = el;
              }}
              onClick={() => handleCardClick(index)}
              className={`cursor-pointer rounded-xl p-5 border transition-all duration-500 ease-in-out transform ${
                selected === index
                  ? "bg-[url('/imagenes/espacio.jpg')] bg-cover bg-center text-white border-purple-500/70 scale-105 shadow-2xl before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-t before:from-black/65 before:via-black/30 before:to-transparent before:z-0"
                  : highlighted === index && isVisible // solo "respira" si está visible
                    ? "border-purple-500/70 scale-105 shadow-lg shadow-purple-500/30 before:content-[''] before:absolute before:inset-0 before:z-0 before:bg-[url('https://images.unsplash.com/photo-1553356084-58ef4a67b2a7?w=800')] before:bg-cover before:bg-center before:opacity-25 before:brightness-75 after:content-[''] after:absolute after:inset-0 after:z-0 after:bg-gradient-to-br after:from-purple-600/8 after:via-transparent after:to-purple-900/12"
                    : "bg-gradient-to-br from-purple-900 via-violet-950 to-black border-2 border-purple-500/30 hover:border-purple-400 hover:scale-[1.02] transition-transform p-6 rounded-lg shadow-2xl"
              }`}
            >

              <h3 className="text-xl font-semibold">{exp.title}</h3>
              <p className="text-sm italic">{exp.company}</p>
              <span className="text-xs text-gray-300">{exp.date}</span>

              {/* Contenido expandible */}
              <div
                className={`overflow-hidden transition-[max-height,opacity] duration-500 ease-in-out ${
                    selected === index
                      ? "max-h-96 opacity-100 mt-3"
                      : "max-h-0 opacity-0"
                }`}
              >
                <div className="mt-2">
                  <h4 className="font-bold text-purple-300 text-sm mb-1 uppercase tracking-wider">
                          {t.experiences.responsibilitie}:
                        </h4>
                 <ul className="list-disc list-inside text-sm ml-2 text-slate-100 space-y-1">
                    {exp.responsibilities.map((r, i) => (
                      <li key={i} className="text-slate-50 text-[15px] leading-relaxed font-medium">
                                {r}
                              </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-2">
                 <h4 className="font-bold text-fuchsia-300 text-sm mb-1 uppercase tracking-wider">
                 {t.experiences.responsibilitie}:
                 </h4>
                  <ul className="list-disc list-inside text-sm ml-2 text-slate-100 space-y-1">
                    {exp.achievements.map((a, i) => (
                        <li key={i} className="text-slate-50 text-[15px] leading-relaxed font-medium">
                          {a}
                        </li>
                       ))}
                   </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
