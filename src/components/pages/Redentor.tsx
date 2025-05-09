// src/components/pages/Redentor.tsx
import ProjectLayout, { ProjectData } from "../layout/ProjectLayout";

const redentorData: ProjectData = {
  title: "Redentor",
  intro:
    "Redentor confió en nosotros para modernizar su presencia digital y comunicar confianza en servicios de salud para la comunidad hispana.",
  mediaMain: {
    type: "img",
    src: "/images/portfolio/proyectos/redentor1.png",
    alt: "Mock‑up Redentor",
  },
mediaSecondary: {
    type: "img",
    src: "/images/portfolio/proyectos/redentor2.png",
    alt: "Segunda imagen de Autism 911",
  },  caption: "Conectando Familias y Especialistas con Empatía y Seguridad",
  description:"El desafío de El Redentor era diseñar una identidad visual que reflejara su carácter religioso y profesional. Fusionamos la cruz médica con manos sanadoras en un logotipo distintivo, representando salud, fe y servicio. Además, desarrollamos una estrategia de redes sociales que no solo se centró en sus servicios, sino en compartir contenido valioso sobre salud, fortaleciendo su presencia en San Antonio y posicionando a la clínica como una fuente confiable.",
  challenge:
    "Modernizar la marca de un centro médico hispano y generar confianza en un mercado saturado de opciones de salud.",
  solution:
    "Nuevo logotipo, paleta fresca y tipografía legible; diseño de folletos, tarjetas y kit de redes sociales; estrategia de mensajes claros y cercanos.",
  result:
    "Mayor reconocimiento de marca y aumento de consultas online; feedback positivo sobre la nueva identidad y materiales.",
};

export default function Redentor() {
  return <ProjectLayout data={redentorData} />;
}
