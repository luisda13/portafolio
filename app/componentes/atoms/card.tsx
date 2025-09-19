"use client";

import Image from "next/image";

type CardProps = {
  title: string;
  description: string;
  image: string;
};

export default function Card({ title, description, image }: CardProps) {
  return (
    <div className="group perspective w-full h-80">
      <div
        className="
          relative w-full h-full 
          transition-transform duration-700 delay-[1000ms] 
          transform-style-preserve-3d 
          group-hover:rotate-y-180
        "
      >
        {/* Front */}
        <div className="absolute w-full h-full backface-hidden rounded-xl border shadow-md bg-white flex flex-col items-center justify-center p-4">
          <div className="w-full h-48 relative">
            <Image src={image} alt={title} fill className="object-cover" />
          </div>
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-gray-600">{description}</p>
          </div>
        </div>

        {/* Back */}
        <div className="absolute w-full h-full rounded-xl border shadow-md bg-blue-600 text-white p-4 rotate-y-180 backface-hidden flex flex-col items-center justify-center">
          <h3 className="text-lg font-bold mb-2">Más información</h3>
          <p className="text-sm text-center">
            Aquí puedes colocar detalles adicionales sobre {title}, como
            proyectos, tecnologías o experiencia.
          </p>
        </div>
      </div>
    </div>
  );
}
