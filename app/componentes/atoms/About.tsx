"use client";

import Image from "next/image";

export default function About() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center gap-8 p-8 bg-gray-100 rounded-2xl shadow-md">
      {/* Imagen */}
      <div className="w-48 h-48 rounded-full overflow-hidden shadow-lg">
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
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Sobre mí</h2>
        <p className="text-gray-600 leading-relaxed">
          Hola, soy <span className="font-semibold">Luis Daniel</span>,
          ingeniero de software apasionado por el desarrollo web, la
          inteligencia artificial y la creación de experiencias digitales que
          conectan con las personas.
        </p>
      </div>
    </section>
  );
}
