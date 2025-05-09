// src/components/pages/Heromatic.tsx
import ProjectLayout, { ProjectData } from "../layout/ProjectLayout"

const heromaticData: ProjectData = {
  title: "Heromatic",
  intro:
    "Creamos Heromatic desde el nombre hasta su presencia digital, posicionándola como una marca experta en automatización con identidad clara y poderosa.",
  mediaMain: {
    type: "img",
    src: "/images/portfolio/proyectos/heromatic1.png",
    alt: "Mock‑up principal de Heromatic",
  },
  mediaSecondary: {
    type: "img",
    src: "/images/portfolio/proyectos/heromatic2.png",
    alt: "Mock‑up móvil de Heromatic",
  },
  mediaExtra: [
    {
      type: "img",
      src: "/images/portfolio/proyectos/heromatic3.png",
      alt: "Tarjeta y dispositivo Heromatic",
    },
  ],
  caption: "Forjando la Identidad de los Héroes de la Automatización",
  description:"Heromatic nació del reto de crear una identidad que comunicara expertise técnico y transformación empresarial. Desde el nombre —una fusión entre “héroe” y “automático”— hasta su identidad visual, sitio web y presencia en redes, construimos una marca coherente, moderna y distintiva. Todo el ecosistema digital gira en torno a una idea poderosa: los héroes que automatizan procesos y potencian negocios.",
  challenge:
    "Los fundadores necesitaban una marca que reflejara tanto su expertise en automatización como su capacidad para transformar negocios.",
  solution:
    "Creamos el nombre Heromatic y desarrollamos una identidad visual coherente, complementada con un diseño de sitio web y redes sociales.",
  result:
    "La marca fue bien recibida, generando una identidad fuerte y alineada con la propuesta de valor de Heromatic, posicionándolos como los héroes de la automatización.",
}

export default function Heromatic() {
  return <ProjectLayout data={heromaticData} />
}
