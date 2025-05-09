// src/components/pages/CuatroCaminos.tsx
import ProjectLayout, {
  ProjectData,
} from "../layout/ProjectLayout";     // ajusta la ruta si cambia

const cuatroCaminosData: ProjectData = {
  title: "4 CAMINOS",
  intro:
    "Impulsamos la presencia digital de 4 CAMINOS, destacando su calidad audiovisual con una estrategia visual coherente, profesional y adaptada al contexto cubano.",
  mediaMain: {
    type: "img",
    src: "/images/portfolio/proyectos/4caminos1.png",
    alt: "Mock‑up principal de 4 Caminos",
  },
  mediaSecondary: {
    type: "img",
    src: "/images/portfolio/proyectos/4caminos2.png",
    alt: "Segunda imagen de 4 Caminos",
  },
  caption: "Redefiniendo la Presencia Digital Audiovisual en Cuba",
  description:"Para 4 CAMINOS, una productora audiovisual cubana, desarrollamos una identidad visual sólida y una estrategia de redes sociales que destacara su profesionalismo y creatividad. A través de contenido coherente, optimización SEO y copywriting adaptado al contexto cubano, logramos posicionar la marca como un referente de calidad en su sector.",
  challenge:
    "Destacar en un mercado digital emergente con acceso limitado a internet, proyectando una experiencia veraz y profesional.",
  solution:
    "Estrategia completa de social media, branding y copywriting adaptado al lenguaje local, diseño de plantillas y reels dinámicos.",
  result:
    "Mayor reconocimiento de marca y posicionamiento como productora audiovisual de referencia en Cuba.",
};

export default function CuatroCaminos() {
  return <ProjectLayout data={cuatroCaminosData} />;
}
