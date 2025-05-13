import ProjectLayout, { ProjectData } from "../layout/ProjectLayout";

const engadiData: ProjectData = {
  title: "ENGADI COSTA FARM",
  intro:
    "Modernizamos una plataforma agrícola obsoleta con una suite digital intuitiva que mejora la productividad en invernaderos.",
  mediaMain: {
    type: "img",
    src: "/images/portfolio/proyectos/engadi2.png",
    alt: "Diseño de interfaz para Engadi",
  },
  mediaSecondary: {
    type: "img",
    src: "/images/portfolio/proyectos/engadi.png",
    alt: "Vista principal de la suite Engadi",
  },
  caption: "Rediseñando la Automatización Agrícola con UX Centrada en el Usuario",
  description:
    "Engadi Costa Farm necesitaba reemplazar un sistema obsoleto de automatización agrícola que dificultaba el trabajo diario en sus invernaderos. Avanxia lideró el rediseño completo de su experiencia digital, creando una suite de aplicaciones centrada en el usuario que abarca desde la gestión de tierras hasta el control de dispositivos IoT y empaquetado. Participamos desde la creación del nombre hasta la validación funcional (QA), diseñando interfaces limpias, eficientes y coherentes, incluyendo una librería de íconos personalizados. El resultado fue una plataforma robusta, moderna y fácil de usar, que optimiza procesos agrícolas complejos y mejora significativamente la operatividad diaria.",
  challenge:
    "Sustituir un sistema agrícola obsoleto por una solución moderna que respondiera a las necesidades reales del campo.",
  solution:
    "Diseñamos una suite UI/UX completa, intuitiva y funcional, con iconografía personalizada y flujos centrados en el usuario.",
  result:
    "Mejora radical en eficiencia y facilidad de uso, reemplazando sistemas antiguos con una plataforma tecnológica moderna.",
};

export default function Engadi() {
  return <ProjectLayout data={engadiData} />;
}
