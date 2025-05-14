import React, { useState } from 'react';
import { useSectionUnderlineOnView } from '../hooks/use-section-underline';
import { useIsMobile } from '../hooks/use-is-mobile';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { motion, AnimatePresence } from 'framer-motion';

interface Step {
  number: string;
  title: string;
  description: string;
  details: string[];
  icon: React.ReactNode;
  accentColor: string;
}

const steps: Step[] = [
  {
    number: '1',
    title: 'Inmersión Estratégica y Entendimiento Profundo',
    description:
      'Iniciamos con una conversación profunda para mapear tu visión, metas y público objetivo, y así detectar tus retos y oportunidades desde el primer día.',
    details: [
      'Conversación inicial y diagnóstico de objetivos clave.',
      'Análisis de mercado, competencia y tendencias actuales.',
      'Definición de plan de vuelo detallado y cronograma realista.'
    ],
    icon: <span className="text-[rgb(var(--color-secondary))] text-2xl">🔍</span>,
    accentColor: 'secondary'
  },
  {
    number: '2',
    title: 'Conceptualización y Diseño Centrado en Ti',
    description:
      'Creamos un brief claro que define tu identidad de marca, exploramos bocetos y prototipos interactivos, y diseñamos la estética y experiencia de usuario óptima.',
    details: [
      'Brief creativo y funcional personalizado.',
      'Wireframes detallados y prototipos navegables.',
      'Diseño de identidad visual e interfaz atractiva.',
      'Revisión y ajustes colaborativos continuos.'
    ],
    icon: <span className="text-[rgb(var(--color-primary))] text-2xl">💡</span>,
    accentColor: 'primary'
  },
  {
    number: '3',
    title: 'Ejecución y Materialización del Proyecto',
    description:
      'Implementamos la solución con tecnologías modernas, optimizamos el rendimiento y la seguridad, y garantizamos integraciones sin fricciones que impulsen tu proyecto.',
    details: [
      'Desarrollo con foco en rendimiento y escalabilidad.',
      'Integraciones avanzadas (CRMs, pagos, analytics).',
      'Control de calidad riguroso y pruebas exhaustivas.'
    ],
    icon: <span className="text-[rgb(var(--color-secondary))] text-2xl">⚙️</span>,
    accentColor: 'secondary'
  },
  {
    number: '4',
    title: 'Lanzamiento, Entrega y Empoderamiento',
    description:
      'Lanzamos tu producto o campaña con un plan de acción claro, te capacitamos para gestionarlo con autonomía y te acompañamos en los primeros días de uso.',
    details: [
      'Puesta en marcha y entrega final completa.',
      'Capacitación práctica para gestión diaria.',
      'Acompañamiento inicial post-lanzamiento.'
    ],
    icon: <span className="text-[rgb(var(--color-primary))] text-2xl">🚀</span>,
    accentColor: 'primary'
  },
  {
    number: '5',
    title: 'Evolución y Crecimiento Continuo',
    description:
      'Monitoreamos resultados clave de forma constante, entregamos informes prácticos y proponemos mejoras para impulsar tu crecimiento a largo plazo.',
    details: [
      'Monitorización de indicadores de rendimiento.',
      'Informes periódicos con recomendaciones.',
      'Optimización proactiva y consultoría estratégica.'
    ],
    icon: <span className="text-[rgb(var(--color-secondary))] text-2xl">📈</span>,
    accentColor: 'secondary'
  }
];

const Process = () => {
  const underlineRef = useSectionUnderlineOnView<HTMLSpanElement>();
  const isMobile = useIsMobile();
  const lastIndex = steps.length - 1;
  const [activeStep, setActiveStep] = useState(0);

  const goBack = () => setActiveStep(i => Math.max(0, i - 1));
  const goNext = () => setActiveStep(i => Math.min(lastIndex, i + 1));

  return (
    <section className="w-full py-16 bg-[rgb(var(--color-background))] text-[rgb(var(--color-foreground))]">
      <div className={`container mx-auto ${isMobile ? 'max-w-md px-4 sm:px-6 lg:px-8' : 'max-w-5xl px-12 md:px-8'}`}>
        <h2 className={`${isMobile ? 'text-2xl sm:text-3xl' : 'text-4xl md:text-6xl'} font-extrabold text-center mb-6 md:mb-8`}>
          <span ref={underlineRef} className="section-title-underline">Nuestro Proceso Colaborativo</span>
        </h2>

        {/* Barra de Progreso */}
        <div className="w-full bg-[rgb(var(--color-border))] h-1 rounded-full mb-6 md:mb-8 overflow-hidden">
          <motion.div
            className="h-1 bg-[rgb(var(--color-primary))]"
            initial={{ width: 0 }}
            animate={{ width: `${(activeStep / lastIndex) * 100}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>

        <div className={`flex ${isMobile ? 'flex-col' : 'flex-row'} gap-8`}>
          {/* Columna de Pasos */}
          {!isMobile && (
            <div className="w-1/3 space-y-8">
              {steps.map((step, idx) => (
                <motion.div
                  key={idx}
                  onClick={() => setActiveStep(idx)}
                  className="flex items-center cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  animate={{ opacity: idx === activeStep ? 1 : 0.6 }}
                  transition={{ duration: 0.3 }}
                >
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center mr-4
                      ${idx < activeStep ? 'bg-[rgb(var(--color-secondary))] text-white' : idx === activeStep ? 'bg-[rgb(var(--color-primary))] text-white' : 'bg-gray-200 text-gray-500'}`}
                  >
                    {step.number}
                  </div>
                  <p className={`font-medium ${idx === activeStep ? 'text-[rgb(var(--color-foreground))]' : 'text-gray-600'}`}>{step.title}</p>
                </motion.div>
              ))}
            </div>
          )}

          {/* Contenido animado */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              className="flex-1 bg-[rgb(var(--color-card))] rounded-2xl px-6 md:px-10 py-6 md:py-8 shadow-lg"
              initial={{ opacity: 0, x: isMobile ? 0 : 50, y: isMobile ? 20 : 0 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              exit={{ opacity: 0, x: isMobile ? 0 : -50, y: isMobile ? -20 : 0 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-sm md:text-base text-pink-600 font-semibold mb-2 md:mb-3 text-center md:text-left">
                {activeStep === lastIndex ? 'ÚLTIMO PASO' : `PASO ${activeStep + 1} DE ${lastIndex + 1}`}
              </p>
              <h3 className="text-xl md:text-3xl font-extrabold mb-4 md:mb-6 text-center md:text-left">{steps[activeStep].title}</h3>
              <p className="text-sm md:text-base text-[rgb(var(--color-foreground))] opacity-80 mb-4 text-center md:text-left">
                {steps[activeStep].description}
              </p>
              <ul className="list-inside list-disc space-y-2 mb-6 md:mb-8">
                {steps[activeStep].details.map((detail, i) => (
                  <li key={i} className="text-[rgb(var(--color-card-foreground))] text-sm md:text-base">
                    {detail}
                  </li>
                ))}
              </ul>
              <div className="flex justify-between">
                <button
                  onClick={goBack}
                  disabled={activeStep === 0}
                  className="inline-flex items-center text-[rgb(var(--color-foreground))] hover:underline disabled:opacity-50 text-sm md:text-base"
                >
                  <ChevronLeftIcon className="w-5 h-5 mr-1" /> Atrás
                </button>
                {activeStep < lastIndex && (
                  <button
                    onClick={goNext}
                    className="inline-flex items-center bg-[rgb(var(--color-primary))] text-[rgb(var(--color-primary-foreground))] px-4 md:px-6 py-2 rounded-md hover:opacity-90 text-sm md:text-base"
                  >
                    Siguiente <ChevronRightIcon className="w-5 h-5 ml-1" />
                  </button>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Process;
