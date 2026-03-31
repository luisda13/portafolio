"use client";

import Card from "@/app/componentes/atoms/card";
import { useLanguage } from "@/app/util/LanguageContext";
import { whatIDoCardsStatic } from "@/app/util/staticData";

export default function AboutCards() {

  const { t } = useLanguage();

  // Si 't' o 't.whatIDo' no han cargado aún, evitamos el error
  if (!t || !t.whatIDo) return null;

  // Unimos la info estática con la traducida
  const combinedCards = t.whatIDo.cards.map((textCard: any) => {
    const staticInfo = whatIDoCardsStatic.find((s) => s.id === textCard.id);
    return {
      ...textCard,
      ...staticInfo,
    };
  });

  return (
    <section
      id="about"
      className="section-height bg-fixed bg-center bg-cover py-10"
      style={{ backgroundImage: "url('/imagenes/fondo.jpg')" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 bg-white/40 backdrop-blur-md rounded-xl shadow-sm">
          <h2 className="text-3xl font-bold text-center mb-8"> {t.whatIDo.sectionTitle} </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {combinedCards.map((card: any) => (
              <Card
                key={card.id}
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