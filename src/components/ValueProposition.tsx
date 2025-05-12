import {
  FaCogs,
  FaPalette,
  FaUsers,
} from "react-icons/fa";
import { IconType } from "react-icons";
import { useSectionUnderlineOnView } from "../hooks/use-section-underline";
import { useGlassCardActiveOnView } from "../hooks/use-section-underline";
import { useState, useRef, useLayoutEffect } from "react";
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

  const [hasOverflow, setHasOverflow] = useState(false); // no cambia al expandir
  const [isExpanded, setIsExpanded]   = useState(false);

  const textRef = useRef<HTMLDivElement>(null);

const [, setMaxHeight] = useState<string | undefined>(`calc(4 * 1.7em)`);
  const [clampOn,    setClampOn]     = useState(true);

  const lineClamp     = 4;
  const TRANSITION_MS = 500;

  /* ── Detecta overflow SOLO la 1ª vez ───────────────────────────── */
  useLayoutEffect(() => {
    const el = textRef.current;
    if (!el) return;

    // si ya detectamos overflow, no hace falta volver a medir
    if (!hasOverflow && el.scrollHeight > el.clientHeight + 2) {
      setHasOverflow(true);
    }
  }, [hasOverflow]);      // se ejecuta 1 vez (hasOverflow comienza en false)

  /* ── Aplica / quita line‑clamp y recalcula cuando cambia estado ── */
  useLayoutEffect(() => {
    const el = textRef.current;
    if (!el) return;

    const needsClamp = !isExpanded && clampOn;
    el.classList.toggle(`line-clamp-${lineClamp}`, needsClamp);

    /*  Animar altura --------------------------------------------------- */
    if (isExpanded) {
      setClampOn(false);
      setMaxHeight(el.scrollHeight + 'px');
    } else {
      setClampOn(false);
      setMaxHeight(el.scrollHeight + 'px');  // altura actual
      void el.offsetHeight;                  // re‑flow
      setTimeout(() => {
        setMaxHeight('calc(4 * 1.7em)');
        setTimeout(() => setClampOn(true), TRANSITION_MS);
      }, 30);
    }
  }, [isExpanded, p.paragraph, clampOn]);             // se repite si cambian

  const toggle = () => setIsExpanded(!isExpanded);

  return (
    <div
    ref={glassRef}
className="glass-panel relative w-full min-h-[400px] p-8 md:p-10 flex flex-col"  >
    {/* icono y título */}
    <IconWrapper
      icon={p.icon}
      className="text-4xl md:text-5xl mb-5 md:mb-6 text-primary relative z-10"
    />
    <h3 className="mb-3 text-xl md:text-2xl relative z-10">{p.title}</h3>

    {/* texto truncable */}
    <div
      ref={textRef}
className="opacity-90 leading-relaxed relative z-10"
style={{
  height: isExpanded ? 'auto' : 'calc(4 * 1.7em)',
  overflow: 'hidden',
  transition: 'height 0.4s ease',
  width: '100%',
  wordBreak: 'break-word',
}}



    >
<span
  className="break-words"
  dangerouslySetInnerHTML={{ __html: p.paragraph }}
/>
    </div>

    {/* botón fijo, sólo si alguna vez hubo overflow */}
    {hasOverflow && (
<div className="mt-6 z-10">
        <Button
  size="tight"
  className="px-6 py-2 rounded-lg shadow w-full sm:w-auto
             bg-primary text-white font-semibold
             hover:bg-primary/90 transition-colors"
  onClick={toggle}
>
  {isExpanded ? 'Ver menos' : 'Ver más'}
</Button>

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
          En Avanxia Labs combinamos la <strong>excelencia técnica</strong> con la{" "}
          <strong>creatividad estratégica</strong> para impulsar tu negocio.
        </p>

        {/* Grid Layout */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 items-stretch w-full">
            {points.map((p, i) => (
            <Card key={i} p={p} />
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