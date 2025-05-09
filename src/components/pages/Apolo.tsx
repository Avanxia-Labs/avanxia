// src/components/pages/Apolo.tsx
import ProjectLayout, { ProjectData } from "../layout/ProjectLayout";

const apoloData: ProjectData = {
  title: "APOLO INSURANCE",
  intro:
    "Apolo Insurance necesitaba conectar con la comunidad inmigrante hispanohablante en Florida, transmitiendo confianza en un sector donde este valor es clave.",
  mediaMain: {
    type: "img",
    src: "/images/portfolio/proyectos/apolo1.png",
    alt: "Mock-up principal de Apolo",
  },
  caption: "Construyendo Confianza en el Mercado Hispano de Seguros",
  description: "El desafío de Apolo Insurance era ganarse la confianza de la comunidad hispana, especialmente en temas tan delicados como el acceso a Medicaid. Desarrollamos un Manual de Identidad de Marca y una landing page específica para guiar a los usuarios a través del proceso de solicitud. También creamos videos y spots adaptados culturalmente para redes sociales, asegurando que la comunicación fuera efectiva y resonara con el público. El resultado fue una marca sólida y confiable, que pasó de ser un simple vendedor de seguros a una referencia en el sector.",
  challenge:
    "Conectar con la comunidad inmigrante hispana de Florida, transmitiendo confianza en un sector donde la fiabilidad es esencial para el acceso a servicios como Medicaid.",
  solution:
    "Desarrollamos una estrategia integral de comunicación, incluyendo un Manual de Identidad de Marca, landing page específica, y contenido visual y audiovisual adaptado culturalmente.",
  result:
    "Apolo Insurance se consolidó como una marca confiable, ganando la confianza de la comunidad hispana y posicionándose como una autoridad en seguros y servicios de Medicaid.",
  mediaExtra: [
    {
      type: "video",
      src: "/videos/apolo1-opt.mp4",
      poster: "/images/portfolio/proyectos/apolo1.png",
    },
  ],
};

export default function Apolo() {
  return <ProjectLayout data={apoloData} />;
}
