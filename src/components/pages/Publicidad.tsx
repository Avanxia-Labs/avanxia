// src/components/pages/Publicidad.tsx
import ProjectLayout, { ProjectData } from "../layout/ProjectLayout";

const publicidadData: ProjectData = {
  title: "Campaña Publicidad Digital",
  intro:
    "Diseñamos e implementamos una campaña de publicidad pagada para potenciar la visibilidad y generar leads de alta calidad.",
  mediaMain: {
    type: "img",
    src: "/images/portfolio/proyectos/publicidad1.png",
    alt: "Mock-up principal de anuncios digitales",
  },
    mediaSecondary: {
    type: "img",
    src: "/images/portfolio/proyectos/publicidad2.png",
    alt: "Segunda imagen de Pool Quality Solutions",
  },
  caption: "Maximizando Alcance y Conversión con Estrategias de Pago",
  description:
    "El objetivo fue desarrollar una campaña de anuncios en redes sociales y buscadores para una marca emergente de ropa deportiva. Creemos creatividades visuales y copys persuasivos, optimizamos la segmentación de audiencia y administramos el presupuesto para obtener el mayor retorno sobre la inversión. Integrando A/B testing y ajustes continuos, logramos ofrecer mensajes relevantes que conectaran directamente con el público objetivo, aumentando el reconocimiento de marca y generando clics cualificados.",
  challenge:
    "Posicionar la nueva línea de ropa deportiva en un mercado saturado, alcanzando a usuarios interesados en fitness que aún no conocían la marca.",
  solution:
    "Investigación de audiencia y segmentación precisa; creación de formatos publicitarios (carousels, videos cortos y banners); desarrollo de copys enfocados en beneficios y llamados a la acción claros; configuración de campañas en Facebook Ads, Instagram Ads y Google Ads; monitorización diaria de métricas y optimización de pujas.",
  result:
    "Incremento del 50 % en tráfico al sitio web durante el primer mes, con una tasa de conversión del 8 % en formularios de suscripción y un ROI del 220 % sobre el presupuesto invertido.",
};

export default function Publicidad() {
  return <ProjectLayout data={publicidadData} />;
}
