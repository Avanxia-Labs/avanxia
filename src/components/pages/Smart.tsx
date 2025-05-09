// src/components/pages/Smart.tsx
import ProjectLayout, {
  ProjectData,
} from "../layout/ProjectLayout";      // ajusta el path si tu árbol difiere

const smartData: ProjectData = {
  // Con salto de línea “POWER↵ELECTRIC”.
  // Si no quieres el salto, quita el <br /> y deja todo en una línea.
  title: "SMART POWER ELECTRIC",
  intro:
    "Renovamos la imagen y sitio web de Smart Power Electric para destacar su experiencia y claridad en instalaciones eléctricas.",
  mediaMain: {
    type: "img",
    src: "/images/portfolio/proyectos/smart1.png",
    alt: "Mock‑up principal de Smart Power Electric",
  },
  mediaSecondary: {
    type: "img",
    src: "/images/portfolio/proyectos/smart2.png",
    alt: "Segunda imagen de Smart Power Electric",
  },
  caption:
    "Comunicación Clara y Profesional para un Servicio Eléctrico de Confianza",
    description:"Para Smart Power Electric creamos una identidad visual renovada y un sitio web funcional, claro y persuasivo. A partir de un logotipo moderno, construimos una presencia digital que resalta su experiencia en instalaciones eléctricas residenciales y comerciales. Utilizamos un sistema visual de tarjetas para mostrar proyectos y comunicar de forma efectiva el valor de sus servicios.",
  challenge:
    "Crear un sitio web que reflejara solidez técnica y modernidad, comunicando confianza y capacidad en proyectos eléctricos.",
  solution:
    "Diseño y desarrollo de un sitio web limpio y responsivo, con estructura clara, llamadas a la acción visibles y optimización SEO básica.",
  result:
    "Un sitio profesional que incrementó consultas y posiciona a Smart Power Electric como referente confiable en su sector.",
};

export default function Smart() {
  return <ProjectLayout data={smartData} />;
}
