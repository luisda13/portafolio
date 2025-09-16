import Nav from "@/app/componentes/moleculas/nav";
import AboutIndex from "@/app/componentes/moleculas/about_index";
import About from "@/app/componentes/atoms/About";
import CardAboud from "@/app/componentes/moleculas/Card_Aboud";
import Introducion from "@/app/componentes/moleculas/Introducion";
export default function Home() {
  return (
    <main className="min-h-screen">
      <Nav />
      <AboutIndex />
      <Introducion />
      <CardAboud />
      <About />
      <About />
      <About />
      <About />
    </main>
  );
}
