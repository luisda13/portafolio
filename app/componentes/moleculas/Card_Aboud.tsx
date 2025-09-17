"use client";

import Card from "@/app/componentes/atoms/card"; // ajusta ruta según tu estructura

const cards = [
  {
    title: "Desarrollo Web",
    description: "Construcción de aplicaciones modernas y responsivas.",
    image: "/web.jpg",
  },
  {
    title: "Inteligencia Artificial",
    description: "Modelos de IA aplicados a problemas del mundo real.",
    image: "/ai.jpg",
  },
  {
    title: "Diseño UI/UX",
    description: "Experiencias centradas en el usuario con interfaces limpias.",
    image: "/design.jpg",
  },
];

export default function AboutCards() {
  return (
    <section className="p-8 bg-white rounded-xl shadow-sm">
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
    </section>
  );
}
