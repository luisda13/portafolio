"use client";

import { useEffect, useState, useRef } from "react";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import { useLanguage } from "../../util/LanguageContext";
import { Conocimiento } from "@/app/util/typesInterfaces";

interface ConocimientoSelet {
  selected?: Conocimiento;
}

export default function About({ selected }: ConocimientoSelet) {
  const { t } = useLanguage();
  const [typedTexts, setTypedTexts] = useState<string[]>([]);
  const [showLinks, setShowLinks] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const animationRef = useRef<NodeJS.Timeout[]>([]);
  const lastIdRef = useRef<string | null>(null);

  // Limpiar todas las animaciones
  const clearAllAnimations = () => {
    animationRef.current.forEach((id) => {
      clearInterval(id);
      clearTimeout(id);
    });
    animationRef.current = [];
  };

  useEffect(() => {
    if (!selected) {
      lastIdRef.current = null;
      clearAllAnimations();
      return;
    }

    // Si el ID es el mismo, no reiniciamos la animación (mantiene el idioma fluyendo)
    if (lastIdRef.current === selected.id) return;
    lastIdRef.current = selected.id;

    clearAllAnimations();
    setTypedTexts([]);
    setShowLinks(false);
    setIsAnimating(true);
    setImageLoaded(false);

    const translatedItem = t.knowledgeList.find((item: any) => item.id === selected.id) || selected;

    const texts = [
      translatedItem.name,
      translatedItem.description,
      `${t.about.levelLabel}: ${translatedItem.level}`,
      `${t.about.experienceLabel}: ${translatedItem.experience}`,
    ];

    setTypedTexts(Array(texts.length).fill(""));

    let currentIndex = 0;
    let charIndex = 0;

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
        const timer = setTimeout(() => setShowLinks(true), 300);
        animationRef.current.push(timer);
      }
    };

    const startTimer = setTimeout(() => {
      const intervalId = setInterval(type, 5);
      animationRef.current.push(intervalId);
    }, 100);

    const intervalId = animationRef.current[animationRef.current.length - 1];
    animationRef.current.push(startTimer);

    return () => clearAllAnimations();
  }, [selected?.id]); // Solo depende del ID

  if (!selected) {
    return (
      <section className="relative flex flex-col md:flex-row items-center justify-center gap-8 p-6 md:p-8 bg-black rounded-[2rem] shadow-2xl overflow-hidden group min-h-[250px]">
        {/* Fondo de Galaxia/Espacio */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/imagenes/fondoAbout.jpg"
            alt="Fondo Espacial"
            fill
            className="object-cover opacity-60 transition-transform duration-700 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent" />
        </div>
        <div className="flex flex-col md:flex-row items-center gap-8 relative z-10 w-full max-w-4xl">
          <div className="flex-shrink-0 w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-white/90 shadow-2xl">
            <Image
              src="/imagenes/fotoPerfil.jpg"
              alt="Luis Daniel"
              width={192}
              height={192}
              className="object-cover w-full h-full"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <div className="text-center md:text-left flex-1">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
              {t.about.title}
            </h2>
            <p className="text-gray-100 text-lg leading-relaxed">
              {t.about.description}
            </p>
          </div>
        </div>
      </section>
    );
  }

  // Obtenemos el item traducido actual
  const currentT = t.knowledgeList.find((item: any) => item.id === selected.id) || selected;

  return (
    <section className="relative min-h-60 max-w-full p-6 md:p-8 bg-[var(--secondary)] rounded-2xl shadow-md overflow-hidden group">
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        <Image
          key={selected.id}
          src="/imagenes/fondoAbout.jpg"
          alt="Background"
          fill
          className={`object-cover object-right transition-all duration-1000 ease-out ${
            imageLoaded ? "opacity-100 scale-100" : "opacity-0 scale-105"
          }`}
          onLoadingComplete={() => setImageLoaded(true)}
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--secondary)] via-[var(--secondary)]/60 to-transparent w-full h-full" />
      </div>

      <div className={`z-10 relative max-w-xl transition-all duration-700 ${imageLoaded ? "translate-x-0 opacity-100" : "translate-x-4 opacity-0"}`}>
        <h2 className="text-2xl font-bold mb-3">
          {isAnimating ? typedTexts[0] : currentT.name}
        </h2>

        <p className="mb-2">
          {isAnimating ? typedTexts[1] : currentT.description}
        </p>

        <p className="text-sm">
          <strong>
            {isAnimating ? typedTexts[2] : `${t.about.levelLabel}: ${currentT.level}`}
          </strong>
          <br />
          <strong>
            {isAnimating ? typedTexts[3] : `${t.about.experienceLabel}: ${currentT.experience}`}
          </strong>
        </p>

        {/* CORRECCIÓN: Usamos currentT.examples en lugar de ejemplos */}
        {currentT?.examples?.length > 0 && showLinks && (
          <div className="mt-3 flex gap-2 animate-fadeInUp">
            <h3 className="font-semibold">{t.about.examplesLabel}:</h3>
            <ul className="flex list-none gap-4">
              {currentT.examples.map((link: string, i: number) => (
                <li key={i}>
                  <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--border-inside)] hover:text-white transition-colors duration-200"
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