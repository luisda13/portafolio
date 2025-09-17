"use client";

import { useEffect, useRef, useState } from "react";
import About from "@/app/componentes/moleculas/About";
import Conocimientos from "@/app/componentes/moleculas/Conocimientos";
import { Conocimiento } from "@/app/util/typesInterfaces";

// Tu sección About con las animaciones
export default function AboutSection() {
  const aboutRef = useRef<HTMLDivElement>(null);
  const conocimientosRef = useRef<HTMLDivElement>(null);
  const [isAboutVisible, setIsAboutVisible] = useState(false);
  const [isConocimientosVisible, setIsConocimientosVisible] = useState(false);
  const [selected, setSelected] = useState<Conocimiento | undefined>();

  useEffect(() => {
    const aboutObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsAboutVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const conocimientosObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsConocimientosVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (aboutRef.current) aboutObserver.observe(aboutRef.current);
    if (conocimientosRef.current)
      conocimientosObserver.observe(conocimientosRef.current);

    return () => {
      if (aboutRef.current) aboutObserver.unobserve(aboutRef.current);
      if (conocimientosRef.current)
        conocimientosObserver.unobserve(conocimientosRef.current);
    };
  }, []);

  return (
    <section id="about" className="section-height bg-background py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between items-stretch gap-8 w-full">
          {/* Componente About - se desliza desde la izquierda */}
          <div
            ref={aboutRef}
            className={`flex-1 fade-in slide-left ${isAboutVisible ? "visible" : ""}`}
          >
            <About selected={selected} />
          </div>

          {/* Componente Conocimientos - se desliza desde la derecha */}
          <div
            ref={conocimientosRef}
            className={`flex-1 fade-in slide-right ${isConocimientosVisible ? "visible" : ""}`}
          >
            <Conocimientos onSelect={setSelected} />
          </div>
        </div>
      </div>
    </section>
  );
}
