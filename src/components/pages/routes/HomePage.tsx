import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import ValueProposition from "@/components/ValueProposition";
import SpecialOffer from "@/components/SpecialOffer";
import ProyectoMuestra from "@/components/ProyectoMuestra";
// import { useNavigate } from "react-router-dom";

// import Services from "@/components/Services";
// import Pricing from "@/components/Pricing";
// import Team from "@/components/Team";
import { ContactForm } from "@/components/Contact";
// import Process from "@/components/Process";
import Footer from "@/components/Footer";

export default function HomePage() {

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
        <ContactForm />
        <Footer />
      {/* Enlaces removidos */}
    </>
  );
}
