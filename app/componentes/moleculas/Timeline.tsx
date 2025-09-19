"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

interface Experience {
  title: string;
  company: string;
  date: string;
  responsibilities: string[];
  achievements: string[];
}

const experiences: Experience[] = [
  {
    title: "Desarrollador Frontend",
    company: "Empresa X",
    date: "2023 - Actualidad",
    responsibilities: [
      "Desarrollar interfaces con Next.js y Tailwind",
      "Optimizar rendimiento de la web",
      "Colaborar con el equipo de diseño",
    ],
    achievements: [
      "Implementé un sistema de componentes reutilizables",
      "Reduje tiempos de carga en un 40%",
    ],
  },
  {
    title: "Ingeniería en Sistemas",
    company: "Universidad Y",
    date: "2018 - 2023",
    responsibilities: [
      "Proyectos de IA y bases de datos",
      "Prácticas en desarrollo de software",
    ],
    achievements: [
      "Graduado con honores",
      "Participación en proyectos de investigación",
    ],
  },
  {
    title: "Diseñador Web",
    company: "Freelance",
    date: "2016 - 2018",
    responsibilities: [
      "Diseño de sitios web para pequeños negocios",
      "Optimización SEO básica",
    ],
    achievements: [
      "Más de 20 proyectos completados",
      "Clientes con aumento de tráfico del 50%",
    ],
  },
];

export default function Timeline() {
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
      <h2 className="text-3xl font-bold text-center mb-8">Mis experiences</h2>
      <div className="flex flex-col md:flex-row items-center justify-center gap-10">
        {/* Imagen */}
        <div className="relative w-64 h-64 md:w-80 md:h-80 flex-shrink-0">
          <Image
            src="/imagenes/fotoPerfil.jpg"
            alt="Foto de perfil"
            fill
            className="object-cover rounded-2xl shadow-lg"
          />
        </div>

        {/* Cards con scroll interno */}
        <div className="flex flex-col gap-4 w-full max-w-xl h-[400px] overflow-y-auto m-4 p-8 rounded-xl bg-gray-50">
          {experiences.map((exp, index) => (
            <div
              key={index}
              ref={(el: HTMLDivElement | null) => {
                cardRefs.current[index] = el;
              }}
              onClick={() => handleCardClick(index)}
              className={`cursor-pointer rounded-xl p-5 border transition-all duration-500 ease-in-out transform ${
                selected === index
                  ? "bg-blue-600 text-white border-blue-400 scale-105 shadow-lg"
                  : highlighted === index && isVisible // solo "respira" si está visible
                    ? "bg-white text-gray-800 border-blue-400 scale-105 shadow-md"
                    : "bg-white text-gray-800 border-gray-200 hover:border-blue-400 hover:scale-102"
              }`}
            >
              <h3 className="text-xl font-semibold">{exp.title}</h3>
              <p className="text-sm italic">{exp.company}</p>
              <span className="text-xs text-gray-400">{exp.date}</span>

              {/* Contenido expandible */}
              <div
                className={`overflow-hidden transition-[max-height,opacity] duration-500 ease-in-out ${
                  selected === index
                    ? "max-h-96 opacity-100 mt-3"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="mt-2">
                  <h4 className="font-semibold">Responsabilidades:</h4>
                  <ul className="list-disc list-inside text-sm ml-2">
                    {exp.responsibilities.map((r, i) => (
                      <li key={i}>{r}</li>
                    ))}
                  </ul>
                </div>
                <div className="mt-2">
                  <h4 className="font-semibold">Logros:</h4>
                  <ul className="list-disc list-inside text-sm ml-2">
                    {exp.achievements.map((a, i) => (
                      <li key={i}>{a}</li>
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
