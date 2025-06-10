import ProjectLayout, { ProjectData } from "../layout/ProjectLayout";

// ✅ Textos acortados y títulos con más impacto para mejorar la claridad.
const publicidadData: ProjectData = {
  // Título más específico y orientado a la acción
  title: "Impulso Digital para TSC Seguridad",
  
  // Intro más directa y concisa
  intro:
    "TSC Seguridad nos buscó para potenciar su crecimiento. Lanzamos campañas de publicidad en Facebook y Google Ads para atraer prospectos calificados en sus zonas de interés y convertirlos en clientes.",
  
  mediaMain: {
    type: "img",
    src: "/images/portfolio/proyectos/publicidad1.png",
    alt: "Mock-up principal de anuncios digitales para TSC",
  },
    mediaSecondary: {
    type: "img",
    src: "/images/portfolio/proyectos/publicidad2.png",
    alt: "Ejemplos de creatividades para campañas de TSC",
  },

  // Caption más corto y fácil de entender
  caption: "Estrategias de Anuncios que Generan Resultados Reales",

  // Descripción que resume la estrategia general
  description:
    "Nuestra estrategia se centró en la hiper-segmentación y la optimización continua para asegurar que cada peso invertido se tradujera en un cliente potencial real para TSC.",
  
  // Textos de las tarjetas más breves y al punto
  challenge:
    "El principal reto era destacar en un mercado digital competitivo. Necesitábamos generar confianza rápidamente y asegurar que los anuncios llegaran solo a personas con intención real de contratar.",
  
  solution:
    "Creamos campañas ultra-segmentadas en Facebook y Google Ads. Usamos creativos de alto impacto y mensajes directos para captar la atención, optimizando los anuncios en tiempo real para maximizar el retorno.",
  
  result:
    "Se logró un aumento inmediato y medible en las contrataciones. Las campañas atrajeron un flujo constante de leads de alta calidad, consolidando la reputación de TSC como líder en seguridad en sus zonas clave.",
};

export default function Publicidad() {
  return <ProjectLayout data={publicidadData} />;
}