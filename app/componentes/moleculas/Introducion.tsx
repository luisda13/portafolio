import About from "@/app/componentes/atoms/About";
import Conocimientos from "@/app/componentes/atoms/Conocimientos";

export default function introducion() {
  return (
    <div className="flex flex-row justify-between items-center gap-8">
      <div className="flex-1">
        <About />
      </div>
      <div className="flex-1">
        <Conocimientos />
      </div>
    </div>
  );
}
