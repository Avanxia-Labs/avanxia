import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import ValueProposition from "@/components/ValueProposition";
import SpecialOffer from "@/components/SpecialOffer";
import ProyectoMuestra from "@/components/ProyectoMuestra";
import { useNavigate } from "react-router-dom";

// import Services from "@/components/Services";
// import Pricing from "@/components/Pricing";
// import Team from "@/components/Team";
import Contact from "@/components/Contact";
// import Process from "@/components/Process";
import Footer from "@/components/Footer";

export default function HomePage() {
  const navigate = useNavigate();

  const handleNavigate = (path: string) => {
    console.log('Navegando a:', path);
    navigate(path);
  };

  return (
    <>
        <Hero />
        <Portfolio />
        <ProyectoMuestra/>
        <ValueProposition />
        <SpecialOffer />
        {/* <Services />
        <Process />
        <Pricing />
        <Team /> */}
        <Contact />
        <Footer />
      {/* Enlaces de prueba para la navegación */}
  <div className="p-8 bg-card/50 rounded-lg shadow mx-auto max-w-4xl my-8">
    <h2 className="text-2xl font-bold mb-4 text-primary">Enlaces de prueba para categorías de servicio</h2>
    <div className="flex flex-wrap gap-4">
      <button 
        onClick={() => handleNavigate('/servicios/desarrollo-web')} 
        className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/80 transition-colors"
      >
        Desarrollo Web (Navegación Programática)
      </button>
      <button 
        onClick={() => handleNavigate('/servicios/identidad-de-marca')} 
        className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/80 transition-colors"
      >
        Identidad de Marca (Navegación Programática)
      </button>
    </div>
  </div>
    </>
  );
}
