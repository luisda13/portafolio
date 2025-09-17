import { ExternalLink } from "lucide-react";
import { Conocimiento } from "@/app/util/typesInterfaces";

interface Props {
  selected?: Conocimiento;
}

export default function About({ selected }: Props) {
  if (!selected) {
    return (
      <section className="min-h-60 max-w-full p-6 md:p-8 bg-gray-100 rounded-2xl shadow-md text-center">
        <h2 className="text-2xl font-bold mb-4">Sobre mí</h2>
        <p className="text-gray-600">
          Selecciona un conocimiento para ver más información.
        </p>
      </section>
    );
  }

  return (
    <section className="min-h-60 max-w-full p-6 md:p-8 bg-gray-100 rounded-2xl shadow-md">
      <h2 className="text-2xl font-bold mb-3">{selected.nombre}</h2>
      <p className="text-gray-600 mb-2">{selected.descripcion}</p>
      <p className="text-sm text-gray-700">
        <strong>Nivel:</strong> {selected.nivel} <br />
        <strong>Experiencia:</strong> {selected.experiencia}
      </p>
      {selected.ejemplos.length > 0 && (
        <div className="mt-3 flex gap-2">
          <h3 className="font-semibold">Ejemplos:</h3>
          <ul className="flex list-none gap-4">
            {selected.ejemplos.map((link, i) => (
              <li key={i}>
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 transition-colors duration-200"
                >
                  <ExternalLink size={20} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}
