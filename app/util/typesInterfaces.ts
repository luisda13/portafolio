import { LucideIcon } from "lucide-react";

export interface Conocimiento {
  icon: LucideIcon;
  nombre: string;
  nivel: string; // Ej: "Avanzado", "Intermedio", etc.
  experiencia: string; // Ej: "3 años"
  ejemplos: string[]; // Links a proyectos
  descripcion: string;
}

export interface Props {
  onSelect: (item: Conocimiento) => void;
}
