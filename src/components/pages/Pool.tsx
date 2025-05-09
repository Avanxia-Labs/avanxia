// src/components/pages/Pool.tsx
import ProjectLayout, {
  ProjectData,
} from "../layout/ProjectLayout";     // ajusta el path si cambiaste carpetas

const poolData: ProjectData = {
  // ‑‑ Si quieres el salto de línea “QUALITY↵SOLUTIONS”, usa <br /> como se indica abajo
  title: "POOL QUALITY SOLUTIONS",
  intro:
    "Rediseñamos la presencia digital de Pool Quality Solutions con un sitio moderno y claro, transmitiendo confianza, profesionalismo y experiencia en cada detalle.",
  mediaMain: {
    type: "img",
    src: "/images/portfolio/proyectos/pool1.png",
    alt: "Mock‑up principal de Pool Quality Solutions",
  },
  mediaSecondary: {
    type: "img",
    src: "/images/portfolio/proyectos/pool2.png",
    alt: "Segunda imagen de Pool Quality Solutions",
  },
  caption:
    "Pool Quality Solutions — Comunicación de Impacto con Propósito",
    description:"Al analizar la competencia, identificamos que el mercado de mantenimiento de piscinas carecía de sitios web atractivos y confiables. Creamos un sitio web distintivo, con un diseño minimalista que evocaba la sensación de agua cristalina, mejorando la legibilidad y comprensión. Además, implementamos un copywriting que destacaba la experiencia detrás del servicio, elevando la percepción de la empresa y generando gran satisfacción en el cliente, lo que resultó en la contratación de servicios adicionales.",
  challenge:
    "Unificar y modernizar su presencia web para transmitir profesionalidad y confianza a potenciales clientes.",
  solution:
    "Diseño y desarrollo de un sitio web claro y atractivo (React / Next.js), con formulario de contacto, SEO básico y estética acorde a la marca.",
  result:
    "Cliente satisfecho; incremento de consultas a través del sitio y base sólida para futuras campañas de marketing digital.",
};

export default function Pool() {
  return <ProjectLayout data={poolData} />;
}
