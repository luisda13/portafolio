"use client";

import Card from "@/app/componentes/atoms/card"; // ajusta ruta según tu estructura

const cards = [
  {
    title: "Desarrollo Web",
    description: "Construcción de aplicaciones modernas y responsivas.",
    image: "/imagenes/paguians.webp",
  },
  {
    title: "Inteligencia Artificial",
    description: "Modelos de IA aplicados a problemas del mundo real.",
    image: "/imagenes/paguians.webp",
  },
  {
    title: "Desarrollo de videjuegos",
    description: "Experiencias centradas en el usuario con interfaces limpias.",
    image: "/imagenes/paguians.webp",
  },
];

export default function AboutCards() {
  return (
    <section
      id="about"
      className="section-height bg-fixed bg-center bg-cover py-10"
      style={{ backgroundImage: "url('/imagenes/fondo.jpg')" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 bg-white/40 backdrop-blur-md rounded-xl shadow-sm">
          <h2 className="text-3xl font-bold text-center mb-8">Lo que hago</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {cards.map((card, index) => (
              <Card
                key={index}
                title={card.title}
                description={card.description}
                image={card.image}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
