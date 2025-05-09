// src/components/pages/Milenio.tsx
import ProjectLayout, { ProjectData } from "../layout/ProjectLayout";

const milenioData: ProjectData = {
  title: "MILENIO SMILE",
  intro:
    "Milenio Smile quería destacar entre su audiencia cubana en Miami. Aprovechamos un jingle espontáneo para crear anuncios auténticos y memorables.",
  mediaMain: {
    type: "img",
    src: "/images/portfolio/proyectos/milenio1.png",
    alt: "Mock-up principal de MILENIO",
  },
  caption: "Ritmo y Sonrisas para la Comunidad Cubana en Miami",
  description: "Aunque Milenio Smile ya contaba con una identidad cercana y establecida, Avanxia asumió el reto de amplificar esa conexión emocional con su comunidad objetivo: los cubanos en Miami. La oportunidad surgió con un jingle improvisado por un cliente fiel, que se convirtió en el corazón de una campaña publicitaria en video. Con una edición ágil, formatos variados y una estética culturalmente relevante, desarrollamos anuncios sociales que capturaban la atención y reforzaban la recordación de marca. El resultado fue una campaña enérgica, fresca y profundamente conectada con su audiencia a través de ritmo, humor y familiaridad.",
  challenge:
    "Potenciar la identidad existente y conectar emocionalmente con la comunidad cubana en Miami.",
  solution:
    "Usamos un jingle espontáneo como eje de anuncios editados con ritmo y referencias culturales locales.",
  result:
    "Una campaña publicitaria auténtica y memorable que reforzó la conexión con su audiencia.",
  mediaExtra: [
    {
      type: "video",
      src: "/videos/milenio1-opt.mp4",
      poster: "/images/portfolio/proyectos/milenio1.png",
    },
    {
      type: "video",
      src: "/videos/milenio2-opt.mp4",
      poster: "/images/portfolio/proyectos/milenio1.png",
    },
  ],
};

export default function Milenio() {
  return <ProjectLayout data={milenioData} />;
}
