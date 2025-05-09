// src/components/pages/Gyb.tsx
import ProjectLayout, {
  ProjectData,
} from "../layout/ProjectLayout";      // ← corrige el path si es necesario

const gybData: ProjectData = {
  title: "GYB CONNECT",
  intro:
    "Diseñamos la identidad y sitio web de GYB Connect, una plataforma fintech que necesitaba destacar frente a grandes competidores.",
  mediaMain: {
    type: "img",
    src: "/images/portfolio/proyectos/gyb1.png",
    alt: "Mock‑up principal de GYB Connect",
  },
  mediaSecondary: {
    type: "img",
    src: "/images/portfolio/proyectos/gyb2.png",
    alt: "Segunda imagen de GYB Connect",
  },
  caption: " Identidad Visual y Presencia Web para el Mundo Fintech",

  description: "GYB Connect necesitaba una imagen fuerte y profesional para competir en el sector de pagos digitales. Creamos una identidad visual completa (logo, branding y tarjetas) y un sitio web moderno, claro y animado, enfocado en destacar su propuesta de valor. Priorizamos la comprensión del servicio y el rendimiento digital para futuras campañas.", 
  challenge:
    "Diseñar la interfaz de usuario (UI/UX) para una nueva plataforma financiera competitiva, asegurando una experiencia intuitiva y profesional.",
  solution:
    "Diseño completo de UI/UX para la plataforma web, incluyendo flujos de usuario, sistema de diseño, gestión de perfiles, planes de pago, reportes y configuración.",
  result:
    "Diseño de interfaz listo para la implementación del frontend, sentando las bases para una plataforma financiera robusta.",
};

export default function Gyb() {
  return <ProjectLayout data={gybData} />;
}
