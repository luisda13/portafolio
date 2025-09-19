"use client";

import { useEffect, useState } from "react";

const mensajes = [
  "Cargando sistema operativo...",
  "Iniciando modo gamer 😎🎮",
  "Conectando a la nevera inteligente...",
  "Error 404: Galletas no encontradas 🍪",
  "Instalando café versión 3.0 ☕",
  "Hackeando la Matrix... (mentira)",
  "Proceso completado ✔️",
];

export default function Console() {
  const [displayed, setDisplayed] = useState<string[]>([]);
  const [currentLine, setCurrentLine] = useState(0);
  const [currentText, setCurrentText] = useState("");

  useEffect(() => {
    if (currentLine < mensajes.length) {
      let i = 0;
      const interval = setInterval(() => {
        if (i < mensajes[currentLine].length) {
          setCurrentText((prev) => prev + mensajes[currentLine][i]);
          i++;
        } else {
          clearInterval(interval);
          setDisplayed((prev) => [...prev, mensajes[currentLine]]);
          setCurrentText("");
          setCurrentLine((prev) => prev + 1);
        }
      }, 50); // velocidad de escritura (50ms por letra)

      return () => clearInterval(interval);
    }
  }, [currentLine]);

  return (
    <div className="bg-black text-green-400 font-mono p-4 rounded-lg shadow-lg w-full max-w-md h-64 overflow-y-auto">
      {displayed.map((linea, index) => (
        <p key={index}>$ {linea}</p>
      ))}
      {/* Línea que se está escribiendo */}
      {currentText && (
        <p>
          $ {currentText}
          <span className="inline-block w-2 h-5 bg-green-400 ml-1 animate-pulse"></span>
        </p>
      )}
      {!currentText && (
        <span className="inline-block w-2 h-5 bg-green-400 ml-1 animate-pulse"></span>
      )}
    </div>
  );
}
