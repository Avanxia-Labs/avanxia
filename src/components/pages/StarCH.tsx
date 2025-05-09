// src/components/pages/StarCH.tsx
import ProjectLayout, { ProjectData } from "../layout/ProjectLayout";

const starData: ProjectData = {
  title: "Star Chihuas",
  intro:
    "Creamos la imagen y comunicación visual de Star Chihuas, una marca de pizzas que combina tradición mexicana con sabores urbanos.",
  mediaMain: {
    type: "img",
    src: "/images/portfolio/proyectos/star1.png",
    alt: "Mock-up principal de Star Chihuas",
  },
  caption: "Conectando Apetito y Confianza con Identidad Sabrosa",
  description: "El desafío era crear un diseño atractivo que destacara el sabor único de la pizza cubana de Star Chiguas. Diseñamos un vinilo microperforado para el frente de su local, creando un impacto visual invitante. Además, desarrollamos contenido digital para redes sociales, incluyendo videos y carruseles de imágenes que despertaran el apetito y resaltaran la autenticidad de su oferta culinaria. La combinación de ambos elementos fortaleció la imagen coherente y atractiva de la marca.",
  challenge:
    "Definir la identidad de una pizzería take-away vibrante y crear materiales que abran el apetito tanto en línea como fuera de línea.",
  solution:
    "Branding completo: logo, paleta y tipografía; diseño de menú, empaques y plantillas para Instagram; sesión fotográfica culinaria; concepto de marketing “Sabor que ruge”.",
  result:
    "Incremento de 35 % en ventas durante el primer trimestre post-lanzamiento y fuerte reconocimiento de marca en la comunidad local.",
  mediaExtra: [
    {
      type: "video",
      src: "/videos/star1-opt.mp4",
      poster: "/images/portfolio/proyectos/star1.png",
    },
  ],
};

export default function StarCH() {
  return <ProjectLayout data={starData} />;
}
