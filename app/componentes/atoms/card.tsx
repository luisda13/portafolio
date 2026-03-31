"use client";

import Image from "next/image";
import Link from "next/link"; // Importamos Link para la navegación
import { ArrowRight } from "lucide-react"; // Opcional: un icono para el botón

type CardProps = {
  title: string;
  description: string;
  image: string;
  info: string;
  link?: string; // Nueva prop opcional para la ruta
};

export default function Card({ title, description, image, info, link = "/conocimientos" }: CardProps) {
  return (
    <div className="group perspective w-full h-80">
      <div
        className="
          relative w-full h-full
          transition-transform duration-700
          transform-style-preserve-3d
          group-hover:rotate-y-180
        "
      >
        {/* Front */}
        <div className="absolute w-full h-full backface-hidden rounded-xl border shadow-md bg-white overflow-hidden flex flex-col items-center justify-center p-4">
          <div className="absolute inset-[-10px] z-0 pointer-events-none opacity-100 corruption-mask"></div>
          <div className="relative z-10 w-full h-full flex flex-col items-center">
            <div className="w-full h-40 relative rounded-lg overflow-hidden border border-purple-200">
              <Image src={image} alt={title} fill className="object-cover" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"/>
            </div>
            <div className="p-4 text-center">
              <h3 className="text-slate-800 text-xl font-bold mb-2 group-hover:text-purple-700 transition-colors">
                {title}
              </h3>
              <p className="text-slate-600 text-sm">{description}</p>
            </div>
            <Link
              href={link}
              target="_blank" // Esto hace que se abra en una pestaña nueva
              rel="noopener noreferrer" // Seguridad para pestañas externas
              className="flex items-center gap-2 bg-white text-purple-900 px-6 py-2 rounded-full font-bold hover:bg-purple-100 transition-all active:scale-95 shadow-lg"
            >
              Ver más
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>

        {/* Back - Añadimos el Botón */}
        <div className="absolute w-full h-full rounded-xl border border-purple-500 shadow-md bg-[var(--Fondo-intro)] text-white p-6 rotate-y-180 backface-hidden flex flex-col items-center justify-between text-center">
          <div>
            <h3 className="text-xl font-bold mb-3">Detalles Técnicos</h3>
            <p className="text-sm leading-relaxed mb-4">
             {info}
            </p>
          </div>

        <Link
          href={link}
          target="_blank" // Esto hace que se abra en una pestaña nueva
          rel="noopener noreferrer" // Seguridad para pestañas externas
          className="flex items-center gap-2 bg-white text-purple-900 px-6 py-2 rounded-full font-bold hover:bg-purple-100 transition-all active:scale-95 shadow-lg"
        >
          Ver más
          <ArrowRight size={18} />
        </Link>
        </div>
      </div>
    </div>
  );
}