"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

function AboutIndex() {
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const startFade = 200; // margen antes de empezar a difuminar
      const fadeRange = 500; // rango en el que se hace el fade

      if (scrollY < startFade) {
        setOpacity(1); // aún no comienza el difuminado
      } else {
        const progress = (scrollY - startFade) / fadeRange;
        const newOpacity = Math.max(1 - progress, 0);
        setOpacity(newOpacity);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="h-[600px] bg-fixed bg-center bg-cover scroll-fade"
      style={{
        backgroundImage: "url(/imagenes/fondo.jpg)",
        opacity: opacity,
        filter: `blur(${(1 - opacity) * 4}px)`,
      }}
    >
      <div className="flex flex-col items-center justify-center bg-black/50 h-full w-full">
        <div className="w-40 h-40 rounded-full overflow-hidden opacity-0 animate-[growFromCenter_1.5s_ease-out_forwards_0s]">
          <Image
            className="w-full h-full object-cover"
            src="/imagenes/fotoPerfil.jpg"
            alt="Next.js logo"
            width={180}
            height={38}
            priority
          />
        </div>
        <h1 className="mt-4 text-4xl font-bold text-white opacity-0 animate-[growFromCenter_1.5s_ease-out_forwards_0.5s]">
          Ingeniero de software
        </h1>
        <h1 className="mt-4 text-sm font-bold text-white opacity-0 animate-[growFromCenter_1.5s_ease-out_forwards_0.75s]">
          Luis Daniel Martinez Rios
        </h1>
      </div>
    </div>
  );
}

export default AboutIndex;
