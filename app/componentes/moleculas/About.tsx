"use client";

import { useEffect, useState } from "react";
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

  useEffect(() => {
    if (!selected) {
      setTypedTexts([]);
      setShowLinks(false);
      return;
    }

    const texts = [
      selected.nombre,
      selected.descripcion,
      `Nivel: ${selected.nivel}`,
      `Experiencia: ${selected.experiencia}`,
    ];

    setTypedTexts(Array(texts.length).fill(""));

    let currentIndex = 0;
    let charIndex = 0;
    let intervalId: ReturnType<typeof setInterval>;

    const type = () => {
      if (currentIndex < texts.length) {
        const currentText = texts[currentIndex];

        if (charIndex < currentText.length) {
          const char = currentText.charAt(charIndex);

          setTypedTexts((prev) => {
            const copy = [...prev];
            copy[currentIndex] += char;

            return copy;
          });

          charIndex++;
        } else {
          currentIndex++;
          charIndex = 0;
        }
      } else {
        setShowLinks(true);
        clearInterval(intervalId);
      }
    };

    const startAnimation = setTimeout(() => {
      intervalId = setInterval(type, 30);
    }, 100);

    return () => {
      clearInterval(intervalId);
      clearTimeout(startAnimation);
    };
  }, [selected]);

  if (!selected) {
    return (
      <section className="flex flex-col md:flex-row items-center justify-center gap-8 p-6 md:p-8 bg-[var(--card)] rounded-2xl shadow-md">
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
          <h2 className="text-3xl font-bold text-[var(--card-foreground)] mb-4">
            Sobre mí
          </h2>
          <p className="text-[var(--card-foreground)] leading-relaxed">
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
    <section className="min-h-60 max-w-full p-6 md:p-8 bg-[var(--card)] rounded-2xl shadow-md">
      <h2 className="text-2xl font-bold mb-3">{typedTexts[0]}</h2>
      <p className="text-[var(--card-foreground)] mb-2">{typedTexts[1]}</p>
      <p className="text-sm text-[var(--card-foreground)]">
        <strong>{typedTexts[2]}</strong> <br />
        <strong>{typedTexts[3]}</strong>
      </p>
      {selected.ejemplos.length > 0 && showLinks && (
        <div className="mt-3 flex gap-2">
          <h3 className="font-semibold">Ejemplos:</h3>
          <ul className="flex list-none gap-4">
            {selected.ejemplos.map((link, i) => (
              <li key={i}>
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--bottom)] hover:text-[var(--border)] transition-colors duration-200"
                >
                  <ExternalLink size={20} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}
