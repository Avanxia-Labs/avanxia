// src/components/pages/Autism.tsx
import ProjectLayout, { ProjectData } from "../layout/ProjectLayout";

const autismData: ProjectData = {
  title: "AUTISM 911",
  intro:
    "Diseñamos la app y comunicación visual de Autism 911, equilibrando empatía y confianza para conectar familias con especialistas en autismo.",
  mediaMain: {
    type: "img",
    src: "/images/portfolio/proyectos/autism1.png",
    alt: "Mock-up principal de Autism 911",
  },
  mediaSecondary: {
    type: "img",
    src: "/images/portfolio/proyectos/autism2.png",
    alt: "Segunda imagen de Autism 911",
  },
  caption: "Conectando Familias y Especialistas con Empatía y Seguridad",
  description: "Autism 911 buscaba conectar familias de niños autistas con especialistas, transmitiendo tanto sensibilidad como profesionalismo. Diseñamos la interfaz de su app con un enfoque claro y accesible, además de materiales visuales y audiovisuales que equilibran calidez y confianza. Cada elemento fue pensado para fortalecer la conexión emocional y funcional con su audiencia.",
  challenge:
    "Desarrollar la interfaz de usuario (UI/UX) para una experiencia fluida y empática, proyectando una experiencia intuitiva y confiable.",
  solution:
    "Diseño completo de UI/UX para la plataforma, en modos claro y oscuro; guía de estilos, íconos, diseño de spots y contenidos para redes.",
  result:
    "Materiales visuales e interfaz lista para desarrollo frontend, aumentando el interés de inversores y generando percepción de competencia y seguridad.",
  mediaExtra: [
    {
      type: "video",
      src: "/videos/autism1-opt.mp4",
      poster: "/images/portfolio/proyectos/autism1.png",
    },
  ],
};

export default function Autism() {
  return <ProjectLayout data={autismData} />;
}
