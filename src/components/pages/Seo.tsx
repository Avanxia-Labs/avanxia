// src/components/pages/Seo.tsx
import ProjectLayout, { ProjectData } from "../layout/ProjectLayout";

const seoData: ProjectData = {
  title: "Optimización SEO Integral",
  intro:
    "Implementamos una estrategia de SEO completa para aumentar la visibilidad orgánica y posicionar al cliente en los primeros resultados de búsqueda.",
  mediaMain: {
    type: "img",
    src: "/images/portfolio/proyectos/seoo.png",
    alt: "Dashboard de rendimiento SEO",
  },
      mediaSecondary: {
    type: "img",
    src: "/images/portfolio/proyectos/seoo1.png",
    alt: "Segunda imagen de Pool Quality Solutions",
  },
  caption: "Elevando Tráfico Orgánico y Autoridad de Marca",
  description:
    "El proyecto consistió en realizar una auditoría técnica y de contenido para un sitio de e-commerce enfocado en artículos deportivos. A partir de un análisis profundo de palabras clave, identificamos oportunidades de posicionamiento en nichos de alto valor. Realizamos optimizaciones on-page (metaetiquetas, estructura de encabezados, velocidad de carga) y off-page (link building y desarrollo de contenido de valor). Asimismo, creamos una estrategia de blog con artículos optimizados para temas transaccionales e informativos, asegurando relevancia tanto para Google como para el usuario final.",
  challenge:
    "Posicionar un sitio nuevo en un sector altamente competitivo, con baja autoridad de dominio y contenido escaso inicialmente, para alcanzar términos clave de búsqueda.",
  solution:
    "Auditoría SEO técnica (corrección de errores 404, mejoras en estructura de URLs y optimización de velocidad); investigación y selección de keywords de larga cola; optimización de meta­títulos y descripciones; creación de contenido optimizado en el blog; estrategia de link building con blogs y medios especializados; configuración de Google Search Console y monitorización con herramientas de analítica.",
  result:
    "Aumento del 45 % en tráfico orgánico en tres meses, con 12 palabras clave posicionadas en el top 10 de Google. Incremento del tiempo de permanencia en sitio en un 30 % y reducción de la tasa de rebote en un 15 %. La autoridad de dominio subió 10 puntos en el periodo.",
};

export default function Seo() {
  return <ProjectLayout data={seoData} />;
}
