// src/components/pages/Evemundo.tsx
import ProjectLayout, { ProjectData } from "../layout/ProjectLayout";

const evemundoData: ProjectData = {
  title: "EVEMUNDO",
  intro:
    "Desarrollamos branding, sitios web y contenido audiovisual para Evemundo, creando una presencia digital sólida en Suiza para dos proyectos interconectados.",
  mediaMain: {
    type: "img",
    src: "/images/portfolio/proyectos/evem1.png",
    alt: "Mock‑up principal de Evemundo",
  },
  mediaSecondary: {
    type: "img",
    src: "/images/portfolio/proyectos/evem2.png",
    alt: "Segunda imagen de Evemundo",
  },
  caption: "Ecosistemas Digitales para Conectar Cultura y Tecnología",
  description:
    "Evemundo reunió dos iniciativas digitales en Suiza: una red social de eventos y un directorio para la comunidad salsera. Desarrollamos la identidad visual completa, sitios web personalizados, videos y materiales impresos para ambas. Cada plataforma fue diseñada con su propio enfoque estético y funcional, logrando una presencia coherente, moderna y adaptada tanto al entorno tecnológico como al cultural.",
  challenge:
    "El reto consistía en establecer una presencia online profesional para una empresa de servicios en EE. UU., con el objetivo de generar confianza y facilitar el contacto directo con clientes potenciales. La empresa necesitaba un sitio web que no solo representara su marca de manera efectiva, sino que también permitiera una comunicación fluida y accesible.",
  solution:
    "Desarrollamos un sitio web de 5 páginas con React y Next.js, priorizando un diseño limpio, responsivo y optimizado para SEO básico y usabilidad.",
  result:
    "El cliente quedó muy satisfecho y amplió los servicios contratados. El sitio web ahora es clave para su marketing digital y expansión online.",
  mediaExtra: [
    {
      type: "video",
      src: "/videos/evemundo1-opt.mp4",
      poster: "/images/portfolio/proyectos/evem1.png",
    },
  ],

};

export default function Evemundo() {
  return <ProjectLayout data={evemundoData} />;
}
