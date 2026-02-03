"use client";

import { useEffect, useState, useRef } from "react";
import { ExternalLink } from "lucide-react";
import Image from "next/image";

interface Conocimiento {
  nombre: string;
  descripcion: string;
  nivel: string;
  experiencia: string;
  ejemplos: string[];
}

interface ConocimientoSelet {
  selected?: Conocimiento;
}

export default function About({ selected }: ConocimientoSelet) {
  const [typedTexts, setTypedTexts] = useState<string[]>([]);
  const [showLinks, setShowLinks] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const animationRef = useRef<NodeJS.Timeout[]>([]);

  // Limpiar todas las animaciones
  const clearAllAnimations = () => {
    animationRef.current.forEach((id) => {
      clearInterval(id);
      clearTimeout(id);
    });
    animationRef.current = [];
  };

  useEffect(() => {
    // Limpiar animaciones previas
    clearAllAnimations();
    setTypedTexts([]);
    setShowLinks(false);
    setIsAnimating(false);
    setImageLoaded(false);

    if (!selected) return;

    const texts = [
      selected.nombre,
      selected.descripcion,
      `Nivel: ${selected.nivel}`,
      `Experiencia: ${selected.experiencia}`,
    ];

    // Inicializar textos vacíos
    setTypedTexts(Array(texts.length).fill(""));
    setIsAnimating(true);

    let currentIndex = 0;
    let charIndex = 0;
    let intervalId: ReturnType<typeof setInterval>;

    const type = () => {
      if (currentIndex < texts.length) {
        const currentText = texts[currentIndex];

        if (charIndex < currentText.length) {
          setTypedTexts((prev) => {
            const copy = [...prev];
            copy[currentIndex] = currentText.substring(0, charIndex + 1);
            return copy;
          });

          charIndex++;
        } else {
          currentIndex++;
          charIndex = 0;
        }
      } else {
        clearInterval(intervalId);
        setIsAnimating(false);

        const timer = setTimeout(() => {
          setShowLinks(true);
        }, 300);

        animationRef.current.push(timer);
      }
    };

    // Pequeño delay antes de empezar la animación
    const startTimer = setTimeout(() => {
      intervalId = setInterval(type, 30);
      animationRef.current.push(intervalId);
    }, 100);

    animationRef.current.push(startTimer);

    return () => {
      clearAllAnimations();
    };
  }, [selected]);

  if (!selected) {
    return (
      <section className="flex flex-col md:flex-row items-center justify-center gap-8 p-6 md:p-8 bg-[var(--foreground)] rounded-2xl shadow-md">
        {/* Contenedor de imagen con proporciones fijas */}
        <div className="flex-shrink-0 w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden shadow-lg mx-auto md:mx-0">
          <Image
            src="/imagenes/fotoPerfil.jpg"
            alt="Foto de perfil"
            width={192}
            height={192}
            className="object-cover w-full h-full"
          />
        </div>

        {/* Descripción */}
        <div className="text-center md:text-left max-w-md">
          <h2 className="text-3xl font-bold text-[var(--primary-foreground)] mb-4">
            Sobre mí
          </h2>

          <p className="text-[var(--primary-foreground)] leading-relaxed">
            Hola, soy <span className="font-semibold">Luis Daniel</span>,
            ingeniero de software apasionado por el desarrollo web, la
            inteligencia artificial y la creación de experiencias digitales que
            conectan con las personas.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="relative min-h-60 max-w-full p-6 md:p-8 bg-[var(--secondary)] rounded-2xl shadow-md overflow-hidden group">
      {/* CONTENEDOR DE IMAGEN DE FONDO (Ocupa todo el card) */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        <Image
          key={selected.nombre}
          src="/imagenes/fondoAbout.jpg"
          alt="Background"
          fill
          className={`object-cover object-right transition-all duration-1000 ease-out ${
            imageLoaded ? "opacity-100 scale-100" : "opacity-0 scale-105"
          }`}
          onLoadingComplete={() => setImageLoaded(true)}
          priority
        />

        {/* GRADIENTE: De sólido (izquierda) a transparente (derecha) */}
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--secondary)] via-[var(--secondary)] to-transparent w-full h-full" />
      </div>

      {/* CONTENIDO TEXTUAL */}
      <div
        className={`z-10 max-w-xl transition-all duration-700 ${
          imageLoaded ? "translate-x-0 opacity-100" : "translate-x-4 opacity-0"
        }`}
      >
        <h2 className="text-2xl font-bold mb-3">
          {isAnimating ? typedTexts[0] : selected.nombre}
        </h2>

        <p className="mb-2">
          {isAnimating ? typedTexts[1] : selected.descripcion}
        </p>

        <p className="text-sm">
          <strong>
            {isAnimating ? typedTexts[2] : `Nivel: ${selected.nivel}`}
          </strong>
          <br />
          <strong>
            {isAnimating ? typedTexts[3] : `Experiencia: ${selected.experiencia}`}
          </strong>
        </p>

        {selected.ejemplos.length > 0 && showLinks && (
          <div className="mt-3 flex gap-2 animate-fadeInUp">
            <h3 className="font-semibold">Ejemplos:</h3>

            <ul className="flex list-none gap-4">
              {selected.ejemplos.map((link, i) => (
                <li key={i}>
                  <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--border-inside)] hover:text-[var(--Fondo-intro)] transition-colors duration-200"
                  >
                    <ExternalLink size={20} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}