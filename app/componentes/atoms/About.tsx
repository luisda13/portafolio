"use client";

import Image from "next/image";

export default function About() {
  return (
<section className="flex flex-col md:flex-row items-center justify-center gap-8 p-6 md:p-8 bg-gray-100 rounded-2xl shadow-md">
  {/* Contenedor de imagen con proporciones fijas */}
  <div className="flex-shrink-0 w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden shadow-lg mx-auto md:mx-0">
    <Image
      src="/imagenes/fotoPerfil.jpg"
      alt="Foto de perfil"
      width={192}
      height={192}
      className="object-cover w-full h-full"
      priority
    />
  </div>

  {/* Descripción con mejor ajuste de texto */}
  <div className="text-center md:text-left max-w-md flex-1">
    <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3 md:mb-4">Sobre mí</h2>
    <p className="text-gray-600 leading-relaxed text-sm md:text-base">
      Hola, soy <span className="font-semibold text-gray-800">Luis Daniel</span>,
      ingeniero de software apasionado por el desarrollo web, la
      inteligencia artificial y la creación de experiencias digitales que
      conectan con las personas.
    </p>
  </div>
</section>
  );
}
