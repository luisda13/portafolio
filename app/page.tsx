import Nav from "@/app/componentes/moleculas/nav";
import AboutIndex from "@/app/componentes/moleculas/about_index";
import CardAboud from "@/app/componentes/moleculas/Card_Aboud";
import Introducion from "@/app/componentes/organismos/Introducion";
import BotonModeDark from "@/app/componentes/atoms/BotonModeDark";
import Footer from "@/app/componentes/organismos/Footer";
export default function Home() {
  return (
    <main className="min-h-screen">
      <Nav />
      <BotonModeDark />
      <AboutIndex />
      <Introducion />
      <CardAboud />
      <Footer />
    </main>
  );
}
