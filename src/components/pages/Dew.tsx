// src/components/pages/Dew.tsx
import ProjectLayout, { ProjectData } from "../layout/ProjectLayout";

const dewData: ProjectData = {
  title: "DEW MARKETING",
  intro:
    "DEW Marketing necesitaba una identidad visual que comunicara renovación y crecimiento. Tradujimos su concepto abstracto en una marca minimalista, delicada y poderosa.",
  mediaMain: {
    type: "img",
    src: "/images/portfolio/proyectos/dew1.png",
    alt: "Mock-up principal de DEW",
  },
  mediaSecondary: {
    type: "img",
    src: "/images/portfolio/proyectos/dew2.png",
    alt: "Segunda imagen de DEW",
  },
  caption: "Visualizando la Revitalización del Negocio",
  description: "Para esta firma de marketing estadounidense, la idea de revitalizar negocios como el rocío nutre la tierra fue la base conceptual de todo el proyecto. Avanxia diseñó una identidad visual elegante, centrada en formas suaves y limpias que comunican frescura, sutileza y profesionalismo. El logotipo y los materiales gráficos, como los flyers para redes sociales, mantienen una estética coherente que transmite la esencia de la marca. El enfoque minimalista no solo refuerza la claridad del mensaje, sino que también posiciona a DEW como una agencia refinada, comprometida con hacer florecer los proyectos de sus clientes.",
  challenge:
    "Comunicar visualmente un concepto abstracto: el marketing como rocío que revitaliza negocios.",
  solution:
    "Creamos un logotipo delicado y minimalista, con formas que evocan crecimiento, renovación y frescura.",
  result:
    "Una identidad visual coherente y elegante que refuerza el posicionamiento de DEW Marketing como impulso para el crecimiento empresarial.",
};

export default function Dew() {
  return <ProjectLayout data={dewData} />;
}
