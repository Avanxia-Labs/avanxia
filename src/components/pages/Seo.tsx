import ProjectLayout, { ProjectData } from "../layout/ProjectLayout";

// ✅ Textos acortados y reenfocados para ser más directos y comerciales.
const seoData: ProjectData = {
  // Título que comunica el beneficio principal
  title: "Posicionamiento SEO para TSC Seguridad",
  
  // Intro que va directo al problema y la meta
  intro:
    "TSC buscaba atraer clientes de forma orgánica a través de Google. Nuestro objetivo fue claro: llevar su sitio web a las primeras posiciones para captar tráfico de alto valor sin depender de la publicidad pagada.",
  
  mediaMain: {
    type: "img",
    src: "/images/portfolio/proyectos/seoo.png",
    alt: "Dashboard de rendimiento SEO mostrando crecimiento",
  },
  mediaSecondary: {
    type: "img",
    src: "/images/portfolio/proyectos/seoo1.png",
    alt: "Ejemplo de optimización de contenido para TSC",
  },
  
  // Caption que resume el impacto del proyecto
  caption: "Dominando los Resultados de Búsqueda para Atraer Clientes",
  
  // Descripción que establece el escenario de forma breve
  description:
    "A pesar de ser expertos en seguridad, la presencia online de TSC era invisible. Su web no generaba tráfico ni leads, perdiendo oportunidades clave frente a competidores que sí aparecían en Google.",
  
  // Textos de las tarjetas más concisos y potentes
  challenge:
    "El reto era posicionar a TSC en un nicho competitivo, donde cada búsqueda tiene una alta intención de contratación. Debíamos superar a la competencia y convertir la visibilidad en negocio.",
  
  solution:
    "Ejecutamos una estrategia SEO integral: investigación de palabras clave locales, optimización técnica profunda del sitio, creación de contenido relevante y fortalecimiento del perfil en Google Business.",
  
  result:
    "En pocos meses, TSC escaló a las primeras posiciones de Google para sus servicios clave. Esto se tradujo en un aumento drástico del tráfico orgánico y un flujo constante de solicitudes de cotización.",
};

export default function Seo() {
  return <ProjectLayout data={seoData} />;
}