// src/components/pages/Digital.tsx
import ProjectLayout, { ProjectData } from "../layout/ProjectLayout";

const digitalData: ProjectData = {
  title: "DIGITAL LIFESTYLE DESIGNS",
  intro:
    "Digital Lifestyle Designs necesitaba una web que comunicara su liderazgo en domótica. Creamos una experiencia digital moderna que refleja sofisticación y tecnología de punta.",
  mediaMain: {
    type: "img",
    src: "/images/portfolio/proyectos/digital1.png",
    alt: "Mock-up principal de DIGITAL",
  },
  mediaSecondary: {
    type: "img",
    src: "/images/portfolio/proyectos/digital2.png",
    alt: "Segunda imagen de DIGITAL",
  },
  caption: "Reflejando Vanguardia Tecnológica en la Web",
  description: "Para esta empresa estadounidense de automatización del hogar, diseñar un sitio web funcional no era suficiente: debía proyectar innovación. Avanxia desarrolló una interfaz moderna basada en glassmorphism, un estilo que aporta profundidad, transparencia y un look futurista, alineado con la naturaleza tecnológica de sus servicios. Esta dirección estética posicionó visualmente a la empresa como un referente en soluciones de vanguardia, generando confianza desde la primera visita al sitio. La ejecución final no solo superó las expectativas del cliente, sino que consolidó una presencia web profesional, impactante y representativa de su valor como líderes en domótica.",
  challenge:
    "Crear una web que transmitiera innovación y confianza, alineada con los servicios avanzados de domótica del cliente.",
  solution:
    "Diseñamos una experiencia visual moderna basada en glassmorphism, reflejando tecnología y sofisticación en cada elemento de la interfaz.",
  result:
    "Un sitio web funcional, estéticamente vanguardista y activo, que proyecta confianza y posiciona a Digital Lifestyle Designs como líder en automatización del hogar.",
};

export default function Digital() {
  return <ProjectLayout data={digitalData} />;
}
