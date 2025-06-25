import {
  FaCogs,
  FaPalette,
  FaUsers,
} from "react-icons/fa";
import { IconType } from "react-icons";
import { useSectionUnderlineOnView } from "../hooks/use-section-underline";
import { useGlassCardActiveOnView } from "../hooks/use-section-underline";
import { useState, useRef, useCallback, useMemo } from 'react';
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
    paragraph: "Tu marca merece un universo propio, no un molde genérico. <strong>No usamos plantillas de WordPress</strong> y soluciones prefabricadas que la mayoría utiliza para ahorrar costos. Nosotros creamos valor real: diseñamos identidades visuales y experiencias de usuario únicas que <strong>capturan tu esencia, resuenan con tu audiencia y te dan resultados tangibles.</strong> No es solo diseño bonito; <strong>es estrategia visual que convierte.</strong>",
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
// Componente de tarjeta individual con su propio estado
const Card = ({ point }: { point: Point }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const glassRef = useGlassCardActiveOnView<HTMLDivElement>();

  const toggleCard = useCallback(() => {
    setIsExpanded(prev => !prev);
  }, []);

  if (isExpanded) {
    return (
      <div className="glass-panel w-full p-8 md:p-10 flex flex-col rounded-xl shadow-lg h-full">
        <div className="flex-1 flex flex-col">
          <div className="mb-6">
            <IconWrapper
              icon={point.icon}
              className="text-4xl md:text-5xl mb-5 md:mb-6 text-primary relative z-10"
            />
            <h3 className="mb-3 text-xl md:text-2xl relative z-10">{point.title}</h3>
          </div>
          
          <div className="opacity-90 leading-relaxed mb-6 flex-grow">
            <span 
              className="break-words"
              dangerouslySetInnerHTML={{ __html: point.paragraph }}
            />
          </div>
          
          <div className="mt-8 pt-4 border-t border-foreground/10">
            <Button
              size="tight"
              className="px-6 py-2 rounded-lg shadow w-full sm:w-auto
                     bg-primary text-white font-semibold
                     hover:bg-primary/90 transition-colors"
              onClick={toggleCard}
            >
              Ver menos
            </Button>
          </div>
        </div>
      </div>
    );
  }


  return (
    <div 
      ref={glassRef}
      className="glass-panel w-full p-8 md:p-10 flex flex-col"
    >
      <div className="flex-1 flex flex-col">
        <div className="mb-6">
          <IconWrapper
            icon={point.icon}
            className="text-4xl md:text-5xl mb-5 md:mb-6 text-primary relative z-10"
          />
          <h3 className="mb-3 text-xl md:text-2xl relative z-10">{point.title}</h3>
        </div>
        
        <div 
          ref={contentRef} 
          className="opacity-90 leading-relaxed line-clamp-4 flex-grow"
        >
          <span 
            className="break-words"
            dangerouslySetInnerHTML={{ __html: point.paragraph }}
          />
        </div>
        
        <div className="mt-8 pt-4 border-t border-foreground/10">
          <Button
            size="tight"
            className="px-6 py-2 rounded-lg shadow w-full sm:w-auto
                   bg-primary text-white font-semibold
                   hover:bg-primary/90 transition-colors"
            onClick={toggleCard}
          >
            Ver más
          </Button>
        </div>
      </div>
    </div>
  );
};

// Componente contenedor para cada tarjeta
const CardWrapper = ({ p }: { p: Point }) => {
  // Cada instancia de CardWrapper renderiza su propia Card con estado aislado
  return (
    <div className="relative h-full">
      <Card point={p} />
    </div>
  );
};

/* --------- MAIN COMPONENT ----------------------------------------------*/
const ValueProposition = () => {
  const underlineRef = useSectionUnderlineOnView<HTMLSpanElement>();
  // Renderizar las tarjetas
  const cards = useMemo(() => {
    return points.map((point, index) => (
      <div key={index} className="relative z-0 w-full">
        <CardWrapper p={point} />
      </div>
    ));
  }, []);

  return (
    <section id="value-proposition" className="py-24 bg-background text-foreground overflow-x-hidden">
      <div className="mx-auto px-6 overflow-hidden max-w-screen-xl">
          {/* Título */}
        <h2 className="text-4xl md:text-6xl font-extrabold text-center mb-8">
          <span ref={underlineRef} className="section-title-underline">
            ¿Por Qué Elegir Avanxia Labs?
          </span>
        </h2>
        <p className="text-center text-foreground opacity-90 mb-16 max-w-4xl mx-auto text-lg md:text-2xl">
        Entregamos webs de velocidad superior, diseñadas exclusivamente para ti. Convertimos la psicología de la venta en estrategias de marketing efectivas, y elevamos tu imagen con un diseño de impacto global. Confía en nuestro equipo in-house: no delegamos, <span className="text-blue-400 font-bold section-title-underline">creamos excelencia para ti.</span>
        </p>

        {/* Tarjetas: flex-wrap para alturas independientes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 w-full items-start">
          {cards}
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