import {
  FaCogs,
  FaPalette,
  FaUsers,
} from "react-icons/fa";
import { IconType } from "react-icons";
import { useSectionUnderlineOnView } from "../hooks/use-section-underline";
import { useGlassCardActiveOnView } from "../hooks/use-section-underline";

/* --------- ICON WRAPPER -------------------------------------------------*/
const IconWrapper = ({ icon: Icon, className }: { icon: IconType; className?: string }) => {
  return (
    <div className={className}>
      <Icon />
    </div>
  );
};

/* --------- DATA ---------------------------------------------------------*/
type Point = {
  title: string;
  desc: string;
  paragraph: string;
  icon: IconType;
};

const points: Point[] = [
  {
    title: "Equipo Multidisciplinario In-House",
    desc: "Desarrolladores, diseñadores y marketers integrados.",
    paragraph: "¿Cansado de que te atienda alguien que solo subcontrata? Muchos competidores fragmentan tu proyecto entre freelancers o personal no técnico. <strong>Con nosotros, quien recibe tu feedback es quien ejecuta el trabajo.</strong> Nuestro equipo técnico (desarrollo, diseño, marketing) está integrado, asegurando <strong>comunicación directa, coherencia total y evitando pérdidas de información crucial.</strong> Tu proyecto se beneficia de una visión integral y una ejecución cohesionada, sin intermediarios que diluyan el mensaje.",
    icon: FaUsers,
  },
  {
    title: "Diseño Excepcional y Personalizado",
    desc: "Identidades visuales únicas y UX que te diferencian.",
    paragraph: "Tu marca merece un universo propio, no un molde genérico. <strong>Rechazamos las plantillas de WordPress</strong> y soluciones prefabricadas que la mayoría usa para ahorrar costos. Nosotros creamos valor real: diseñamos identidades visuales y experiencias de usuario únicas que <strong>capturan tu esencia, resuenan con tu audiencia y te dan resultados tangibles.</strong> No es solo diseño bonito; <strong>es estrategia visual que convierte.</strong>",
    icon: FaPalette,
  },
  {
    title: "Calidad y Tecnología Superior",
    desc: "Soluciones robustas, rápidas y seguras.",
    paragraph: "<strong>Somos apasionados por la tecnología</strong> ('geeks', si prefieres). No nos conformamos con lo básico. <strong>Documentamos nuestro código meticulosamente</strong> y usamos soluciones innovadoras y eficientes (React, Next.js, NestJS, Vercel). Buscamos la <strong>excelencia técnica</strong> para que <strong>tu proyecto no tenga límites</strong>, sea escalable, seguro y esté preparado para el futuro. Olvídate de las limitaciones técnicas.",
    icon: FaCogs,
  },
];

/* --------- CARD ---------------------------------------------------------*/
const Card = ({ p }: { p: Point }) => {
  const glassRef = useGlassCardActiveOnView<HTMLDivElement>();
  return (
    <div
      ref={glassRef}
      className="glass-panel relative w-full p-8 md:p-10 overflow-hidden flex flex-col"
    >
      <IconWrapper icon={p.icon} className="text-4xl md:text-5xl mb-5 md:mb-6 text-cyan-300 relative z-10" />
      <h3 className="mb-3 text-xl md:text-2xl relative z-10">{p.title}</h3>
      {/* Use dangerouslySetInnerHTML to render the HTML in the paragraph */}
      <p
        className="opacity-90 leading-relaxed relative z-10 flex-grow"
        dangerouslySetInnerHTML={{ __html: p.paragraph }}
      />
    </div>
  );
};

/* --------- MAIN COMPONENT ----------------------------------------------*/
const ValueProposition = () => {
  const underlineRef = useSectionUnderlineOnView<HTMLSpanElement>();

  return (
    <section id="value-proposition" className="py-24 bg-gray-950 text-gray-100">
      <div className="container mx-auto px-6">
        {/* Título */}
        <h2 className="text-4xl md:text-6xl font-extrabold text-center mb-8">
          <span ref={underlineRef} className="section-title-underline">
            ¿Por Qué Elegir Avanxia Labs?
          </span>
        </h2>
        <p className="text-center text-gray-300 mb-16 max-w-4xl mx-auto text-lg md:text-2xl">
          En Avanxia Labs combinamos la <strong>excelencia técnica</strong> con la{" "}
          <strong>creatividad estratégica</strong> para impulsar tu negocio.
        </p>

        {/* Grid Layout instead of Carousel */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {points.map((p, i) => (
            <Card key={i} p={p} />
          ))}
        </div>

        {/* Cita */}
        <p className="text-center text-gray-300 mt-16 italic max-w-4xl mx-auto">
          “Todo lo que necesita un negocio para crecer online, desde branding
          hasta campañas publicitarias, ejecutado por un equipo full-stack con
          estándares internacionales y tarifas mexicanas.”
        </p>
      </div>
    </section>
  );
};

export default ValueProposition;