import { LucideIcon } from "lucide-react";

export interface Conocimiento {
  id: string;
  icon?: LucideIcon;
  name: string;
  level: string;
  description: string;
  experience: string;
  examples: string[];
}

export interface Props {
  onSelect: (item: Conocimiento) => void;
}