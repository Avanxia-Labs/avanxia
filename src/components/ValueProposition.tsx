import {
  FaCogs,
  FaPalette,
  FaUsers,
} from "react-icons/fa";
import { IconType } from "react-icons";
import { useSectionUnderlineOnView } from "../hooks/use-section-underline";
import { useGlassCardActiveOnView } from "../hooks/use-section-underline";
import { useState, useRef } from "react";
import { Button } from "./ui/button";
// import { cn } from "@/lib/utils";  


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
    paragraph: "Tu marca merece un universo propio, no un molde genérico. <strong>Rechazamos las plantillas de WordPress</strong> (son lentas) y soluciones prefabricadas que la mayoría usa para ahorrar costos. Nosotros creamos valor real: diseñamos identidades visuales y experiencias de usuario únicas que <strong>capturan tu esencia, resuenan con tu audiencia y te dan resultados tangibles.</strong> No es solo diseño bonito; <strong>es estrategia visual que convierte.</strong>",
    icon: FaPalette,
  },
  {
    title: "Calidad y Tecnología Superior",
    desc: "Soluciones robustas, rápidas y seguras.",
    paragraph: "<strong>Somos apasionados por la tecnología</strong> ('geeks', si prefieres). No nos conformamos con lo básico. <strong>Documentamos nuestro código meticulosamente</strong> y usamos soluciones innovadoras y eficientes (React, Next.js, NestJS, Vercel). Buscamos la <strong>excelencia técnica</strong> para que <strong>tu proyecto no tenga límites</strong>, sea escalable, seguro y esté preparado para el futuro. Olvídate de las limitaciones técnicas.",
    icon: FaCogs,
  },
];

/* --------- CARD WRAPPER -------------------------------------------------*/
const CardWrapper = ({ p }: { p: Point; index?: number }) => {
  // Track if this specific card is expanded
  const [isExpanded, setIsExpanded] = useState(false);
  
  // Reference to measure the card content
  const contentRef = useRef<HTMLDivElement>(null);
  
  // Toggle expanded state for this card only
  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };
  
  // Apply glass card effect
  const glassRef = useGlassCardActiveOnView<HTMLDivElement>();
  
  return (
    <div className="relative min-h-[450px]">
      {/* Fixed height container - all cards look the same height */}
      {!isExpanded && (
        <div 
          ref={glassRef}
          className="glass-panel w-full p-8 md:p-10 flex flex-col min-h-[450px]"
        >
          {/* Card header content */}
          <div className="mb-6">
            <IconWrapper
              icon={p.icon}
              className="text-4xl md:text-5xl mb-5 md:mb-6 text-primary relative z-10"
            />
            <h3 className="mb-3 text-xl md:text-2xl relative z-10">{p.title}</h3>
          </div>
          
          {/* Text content - truncated to 4 lines */}
          <div 
            ref={contentRef} 
            className="opacity-90 leading-relaxed line-clamp-4"
          >
            <span 
              className="break-words"
              dangerouslySetInnerHTML={{ __html: p.paragraph }}
            />
          </div>
          
          {/* Button container - always at same position for all cards */}
          <div className="absolute bottom-8 md:bottom-10 left-8 md:left-10 right-8 md:right-10 z-10">
            <Button
              size="tight"
              className="px-6 py-2 rounded-lg shadow w-full sm:w-auto
                     bg-primary text-white font-semibold
                     hover:bg-primary/90 transition-colors"
              onClick={toggleExpanded}
            >
              Ver más
            </Button>
          </div>
        </div>
      )}
      
      {/* Expanded card - completely replaces the default card when expanded */}
      {isExpanded && (
        <div className="glass-panel w-full p-8 md:p-10 flex flex-col rounded-xl shadow-lg">
          <div className="mb-6">
            <IconWrapper
              icon={p.icon}
              className="text-4xl md:text-5xl mb-5 md:mb-6 text-primary relative z-10"
            />
            <h3 className="mb-3 text-xl md:text-2xl relative z-10">{p.title}</h3>
          </div>
          
          <div className="opacity-90 leading-relaxed mb-6">
            <span 
              className="break-words"
              dangerouslySetInnerHTML={{ __html: p.paragraph }}
            />
          </div>
          
          <div className="mt-auto pt-4">
            <Button
              size="tight"
              className="px-6 py-2 rounded-lg shadow w-full sm:w-auto
                     bg-primary text-white font-semibold
                     hover:bg-primary/90 transition-colors"
              onClick={toggleExpanded}
            >
              Ver menos
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

/* --------- MAIN COMPONENT ----------------------------------------------*/
const ValueProposition = () => {
  const underlineRef = useSectionUnderlineOnView<HTMLSpanElement>();

  return (
    <section id="value-proposition" className="py-24 bg-background text-foreground overflow-x-hidden">
      <div className="container mx-auto px-6 overflow-hidden">
          {/* Título */}
        <h2 className="text-4xl md:text-6xl font-extrabold text-center mb-8">
          <span ref={underlineRef} className="section-title-underline">
            ¿Por Qué Elegir Avanxia Labs?
          </span>
        </h2>
        <p className="text-center text-foreground opacity-90 mb-16 max-w-4xl mx-auto text-lg md:text-2xl">
        Entregamos webs de velocidad superior, diseñadas exclusivamente para ti. Convertimos la psicología de la venta en estrategias de marketing efectivas, y elevamos tu imagen con un diseño de impacto global. Confía en nuestro equipo in-house: no delegamos, <span className="text-blue-400 font-bold section-title-underline">creamos excelencia para ti.</span>
        </p>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 w-full">
          {points.map((p, i) => (
            <div key={i} className="relative z-0">
              <CardWrapper p={p} index={i} />
            </div>
          ))}
        </div>

        {/* Cita */}
        <p className="text-center text-foreground opacity-90 mt-16 italic max-w-4xl mx-auto">
          "Todo lo que necesita un negocio para crecer online, desde branding
          hasta campañas publicitarias, ejecutado por un equipo full-stack con
          estándares internacionales y tarifas mexicanas."
        </p>
      </div>
    </section>
  );
};

export default ValueProposition;