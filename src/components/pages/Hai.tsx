// src/components/pages/Hai.tsx
import ProjectLayout, {
  ProjectData,
} from "../layout/ProjectLayout";     // ajusta el path si tu árbol es distinto

const haiData: ProjectData = {
  title: "Hai",
  intro:
    "EL HAI necesitaba una estrategia de redes sociales que no solo mostrara sus productos, sino que también comunicara su filosofía de marca artesanal.",
  mediaMain: {
    type: "img",
    src: "/images/portfolio/proyectos/hai1.png",
    alt: "Mock‑up principal de Hai",
  },
  mediaSecondary: {
    type: "img",
    src: "/images/portfolio/proyectos/hai2.png",
    alt: "Materiales promocionales de Hai",
  },
  caption: "Elevando la Artesanía Cerámica en Redes Sociales",
  description:"El reto de EL HAI era resaltar no solo la diversidad de sus productos cerámicos, sino también su valor artesanal y personalizado. Diseñamos una estrategia de contenido visualmente coherente con una paleta de colores naturales que reflejaba su compromiso con lo artesanal. Más allá de vender tazas, creamos una narrativa visual que conectaba emocionalmente con su audiencia, posicionando a la marca como una expresión de arte y dedicación, y no solo como una fabricante de cerámica.",
  challenge:
    "Desarrollar una estrategia de redes sociales que reflejara la filosofía artesanal de EL HAI y conectara con un público que valora lo personalizado.",
  solution:
    "Creamos una narrativa visual coherente utilizando una paleta de colores naturales y pastel, centrada en el valor artesanal de los productos.",
  result:
    "EL HAI se posicionó como una marca que expresa arte y dedicación, diferenciándose de los competidores y atrayendo a un público interesado en lo artesanal.",
};

export default function Hai() {
  return <ProjectLayout data={haiData} />;
}
