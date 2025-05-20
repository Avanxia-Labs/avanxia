import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Check,
  LightbulbIcon,
  List,
  Target,
  Calendar,
} from "lucide-react";
import { ServicePlan } from "@/data/servicesData";

interface Props {
  steps: ServicePlan[];
}

const fade = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0, transition: { duration: .35 } }
};

export default function ValueSteps({ steps }: Props) {
 // ← si no hay pasos, no renderices nada
  if (!steps || steps.length === 0) return null;

  const [active, setActive] = useState(0);

  // cada vez que cambie la lista, reajusta el índice
  useEffect(() => {
    if (active >= steps.length) setActive(0);
  }, [steps, active]);

  const step = steps[active];

  return (
    <section className="mx-auto max-w-6xl">
      {/* GRID L-R */}
      <div className="grid gap-10 lg:grid-cols-[260px_1fr]">
        {/* ① LISTA DE PASOS */}
        <ol className="space-y-4 lg:sticky lg:top-28">
          {steps.map((p, idx) => {
            const isActive = idx === active;

            return (
              <li key={p.id} className="relative">
                {/* Línea vertical (timeline) */}
                {idx < steps.length - 1 && (
                  <span className="absolute left-4 top-10 h-full w-px bg-muted-foreground/30" />
                )}

                <button
                  onClick={() => setActive(idx)}
                  className={[
                    "flex w-full items-start gap-4 rounded-lg px-6 py-2 text-left transition-all",
                    isActive
                      ? "bg-primary/5 text-primary"
                      : "hover:bg-muted/50 text-foreground/70",
                  ].join(" ")}
                >
                  {/* Punto numerado */}
                  <span
                    className={[
                      "flex items-center justify-center rounded-full text-base font-bold shadow-md ring-2 ring-offset-2 px-3",
                      isActive
                        ? "bg-primary text-primary-foreground ring-primary/40"
                        : "bg-muted ring-transparent",
                    ].join(" ")}                    
                    style={{ padding: '0.5rem 0.75rem', minWidth: 'auto' }}
                  >
                    {idx + 1}
                  </span>

                  <span className="font-medium leading-snug">{p.name}</span>
                </button>
              </li>
            );
          })}
        </ol>

        {/* ② CONTENIDO DEL PASO */}
        <AnimatePresence mode="wait">
          <motion.div
            key={step.id}
            variants={fade}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="glass-panel rounded-2xl border border-border/50 bg-background/70 p-10 shadow-xl backdrop-blur"
          >
            {/* ENCABEZADO */}
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-primary">
              Paso {active + 1} de {steps.length}
            </p>

            <h3 className="mb-6 text-3xl font-extrabold leading-tight text-foreground">
              {step.name}
            </h3>

            {/* DESCRIPCIÓN LARGA */}
            {step.longDescription && (
              <p className="mb-8 text-base text-foreground/80">
                {step.longDescription}
              </p>
            )}

            {/* ARGUMENTOS CLAVE */}
            {!!step.sellingPoints?.length && (
              <div className="mb-8">
                <p className="mb-3 flex items-center text-sm font-semibold text-foreground">
                  <LightbulbIcon className="mr-2 h-5 w-5 text-primary" />
                  Argumentos clave
                </p>
                <ul className="space-y-2 pl-8 marker:text-primary">
                  {step.sellingPoints.map((pt, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="mr-2 mt-0.5 h-4 w-4 text-primary" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* INCLUYE */}
            {!!step.includes?.length && (
              <div className="mb-8">
                <p className="mb-3 flex items-center text-sm font-semibold text-foreground">
                  <List className="mr-2 h-5 w-5 text-primary" />
                  Incluye
                </p>
                <ul className="space-y-2 pl-8">
                  {step.includes.map((inc, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="mr-2 mt-0.5 h-4 w-4 text-primary" />
                      <span>{inc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* DETALLES FINALES */}
            <div className="grid gap-4 text-sm sm:grid-cols-2">
              {step.idealFor && (
                <div className="flex items-start">
                  <Target className="mr-2 mt-0.5 h-4 w-4 text-primary" />
                  <span>
                    <strong>Ideal para:</strong> {step.idealFor}
                  </span>
                </div>
              )}
              {step.duration && (
                <div className="flex items-start">
                  <Calendar className="mr-2 mt-0.5 h-4 w-4 text-primary" />
                  <span>
                    <strong>Duración estimada:</strong> {step.duration}
                  </span>
                </div>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
