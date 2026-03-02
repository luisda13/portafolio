"use client";

import Card from "@/app/componentes/atoms/card"; // ajusta ruta según tu estructura

const cards = [
  {
    title: "Desarrollo Web",
    description: "Construcción de aplicaciones modernas y responsivas.",
    image: "/imagenes/WebCard.jpg",
    info: "Explora mi experiencia detallada en Desarrollo Web, incluyendo proyectos con tecnologías como Angular, Node.jsm Next.js y SQL",
    link: "/conocimientos/pageIA"
  },
  {
    title: "Inteligencia Artificial",
    description: "Modelos de IA aplicados a problemas del mundo real.",
    image: "/imagenes/IACard.webp",
    info: "Descubre los proyecto que he realizado con IA para la solucion de problemas que existen en la vida real desde la detecion de patrones en imagenes como el analicis de datos y su uso en la IA",
    link: "/conocimientos/pageIA"
  },
  {
    title: "Desarrollo de videjuegos",
    description: "Creador de Videjuegos Amateur apacionado por la creacion y el desarrollo",
    image: "/imagenes/VidejeugosCard.jpg",
    info: "Mira mi lado mas creativo y apacionado con mi proyecto personal. La creacion de de mi primer viidejuego aqui te mantendre informado de mis nuevos descubrimientos y avances",
    link: "/conocimientos/pageIA"
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
                info={card.info}
                link={card.link}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
