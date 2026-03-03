"use client";
import { MessageCircle } from "lucide-react"; // O usa un SVG de Whatsapp

export default function WhatsappButton() {
  const phoneNumber = "+573054593554"; // Reemplaza con tu número (código país + número)
  const message = "Hola! Soy un reclutador/cliente interesado en tu trabajo.";

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2 group">
      {/* Burbuja de "Chatbot" simulada */}
      <div className="bg-white text-gray-800 p-3 rounded-2xl rounded-br-none shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xs max-w-[200px] border border-purple-200">
        <p className="font-semibold text-purple-600">Asistente Virtual</p>
        En cuanto pueda me pondré en contacto contigo. ¿Eres reclutador o buscas un freelancer?
      </div>

      {/* Botón Principal */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#25D366] p-4 rounded-full shadow-[0_0_20px_rgba(37,211,102,0.4)] hover:scale-110 transition-transform duration-300 relative"
      >
        {/* Efecto de pulso */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25"></span>
        <MessageCircle size={32} color="white" className="relative z-10" />
      </a>
    </div>
  );
}