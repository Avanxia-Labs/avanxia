import ProjectLayout, { ProjectData } from "../layout/ProjectLayout";

const incometaxData: ProjectData = {
  title: "INCOMETAX",
  intro:
    "NA Incometax necesitaba una comunicación visual impecable en redes sociales para transmitir confianza y seriedad.",
  mediaMain: {
    type: "img",
    src: "/images/portfolio/proyectos/incometax1.png",
    alt: "Mock-up principal de Incometax",
  },
  mediaSecondary: {
    type: "img",
    src: "/images/portfolio/proyectos/incometax2.png",
    alt: "Publicación de Incometax 1",
  },
  mediaExtra: [
    {
      type: "img",
      src: "/images/portfolio/proyectos/incometax_side2.png",
      alt: "Publicación de Incometax 2",
    },
  ],
  caption: " Seriedad y Profesionalismo en Redes Sociales",
  description:"El reto de NA Incometax era proyectar una imagen seria y confiable en sus redes sociales, dada la naturaleza delicada de la gestión de impuestos. Creamos contenido visual, como un carrusel informativo, enfocado en transmitir profesionalismo e institucionalidad. Cada elemento fue cuidadosamente seleccionado para asegurar que los clientes percibieran a la firma como una opción confiable y altamente capacitada para manejar sus asuntos fiscales.",
  challenge:
    "Crear una comunicación visual en redes sociales que proyectara seriedad y profesionalismo, transmitiendo confianza para manejar asuntos fiscales delicados.",
  solution:
    "Desarrollamos contenido visual específico, como un carrusel informativo, con un diseño centrado en proyectar una imagen institucional y profesional.",
  result:
    "NA Incometax reforzó su imagen de competencia y fiabilidad, ganando la confianza de potenciales clientes para manejar sus impuestos.",
};

export default function Incometax() {
  return <ProjectLayout data={incometaxData} />;
}
