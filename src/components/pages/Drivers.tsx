// src/components/pages/Drivers.tsx
import ProjectLayout, { ProjectData } from "../layout/ProjectLayout";

const driversData: ProjectData = {
  title: "DRIVERS COLLISION CENTER",
  intro:
    "Para Drivers Collision Center creamos una comunicación visual fuerte y dinámica, enfocada en acción y confianza tras un accidente.",
  mediaMain: {
    type: "img",
    src: "/images/portfolio/proyectos/drivers1.png",
    alt: "Primer mock-up de Drivers Collision Center",
  },
  caption:
    "Drivers Collision Center – Comunicación de Impacto con Propósito",
  description:
    "Desarrollamos una estrategia de contenido para Drivers Collision Center que rompiera con el enfoque tradicionalmente emocional tras un accidente. En lugar de centrarnos en el problema, comunicamos solución, confianza y rapidez. A través de piezas visuales potentes, edición dinámica y un tono directo, logramos posicionar al taller como un aliado fuerte y resolutivo cuando más se necesita.",
  challenge:
    "Diseñar la interfaz de usuario (UI/UX) para una nueva plataforma financiera competitiva, asegurando una experiencia intuitiva y profesional.",
  solution:
    "Diseño completo de UI/UX para la plataforma web, incluyendo flujos de usuario, sistema de diseño, gestión de perfiles, planes de pago, reportes y configuración.",
  result:
    "Diseño de interfaz listo para la implementación del frontend, sentando las bases para una plataforma financiera robusta.",
  // aquí añadimos los vídeos:
  mediaExtra: [
    {
      type: "video",
      src: "/videos/drivers1-opt.mp4",
      poster: "/images/portfolio/proyectos/drivers1.png",
    },
    {
      type: "video",
      src: "/videos/drivers2-opt.mp4",
      poster: "/images/portfolio/proyectos/drivers2.png",
    },
    {
      type: "video",
      src: "/videos/drivers3-opt.mp4",
      poster: "/images/portfolio/proyectos/drivers3.png",
    },
  ],
};

export default function Drivers() {
  return <ProjectLayout data={driversData} />;
}
