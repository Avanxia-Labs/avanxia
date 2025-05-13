import { useRef, useState } from 'react';
import { useSectionUnderlineOnView } from "../hooks/use-section-underline";
import { useIsMobile } from '../hooks/use-is-mobile';
import { motion } from 'framer-motion';

// Importamos Swiper y sus estilos
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, EffectCards } from 'swiper/modules';
// Nota: Los estilos CSS de Swiper ya están incluidos globalmente en el proyecto

const Process = () => {
  const underlineRef = useSectionUnderlineOnView<HTMLSpanElement>();
  const isMobile = useIsMobile();
  const swiperRef = useRef<any>(null);
  const [activeStep, setActiveStep] = useState(0);

  // Eliminar el mensaje de deslizar en desktop

  // Nuevo contenido detallado para el proceso
  const steps = [
    {
      number: "1",
      title: "Inmersión Estratégica y Entendimiento Profundo",
      details: [
        "Conversación Inicial y Diagnóstico: Más que una reunión, es una inmersión. Queremos conocer tu visión, tus metas, tu audiencia, tus desafíos y tus sueños para el proyecto.",
        "Análisis del Entorno: Investigamos tu mercado, la competencia y las tendencias relevantes para identificar oportunidades únicas.",
        "Definición del Plan de Vuelo: Te presentamos una propuesta clara con el enfoque estratégico, los servicios recomendados, los entregables clave, un cronograma realista y la inversión detallada. ¡Aquí comienza nuestra hoja de ruta conjunta!"
      ],
      icon: "🔍",
      color: "from-blue-500/20 to-blue-600/20",
      accentColor: "blue-500"
    },
    {
      number: "2",
      title: "Conceptualización y Diseño Centrado en Ti",
      details: [
        "Brief Creativo y Funcional: Definimos juntos la dirección estética, el tono de comunicación y los requisitos funcionales (si aplica) de tu proyecto.",
        "Ideación y Prototipado (Según Proyecto): Exploramos conceptos visuales, wireframes, prototipos navegables, conceptos de campaña o líneas editoriales según corresponda.",
        "Diseño de la Solución Final: Damos forma a la identidad visual, la interfaz de usuario, las piezas de comunicación o la estrategia de contenidos, siempre buscando un impacto visual y estratégico.",
        "Validación y Ajustes Colaborativos: Presentamos los avances para tu feedback. Tu perspectiva es crucial para refinar y asegurar que el resultado te enamore."
      ],
      icon: "💡",
      color: "from-amber-500/20 to-amber-600/20",
      accentColor: "amber-500"
    },
    {
      number: "3",
      title: "Ejecución y Materialización del Proyecto",
      details: [
        "Producción y Desarrollo: ¡Manos a la obra! Construimos la solución utilizando las tecnologías más adecuadas, enfocándonos en rendimiento, seguridad y escalabilidad.",
        "Integraciones y Configuraciones (Si aplica): Conectamos las herramientas necesarias (CRMs, pasarelas de pago, analytics, etc.) para un funcionamiento óptimo.",
        "Control de Calidad Riguroso: Revisamos cada detalle. En proyectos técnicos, realizamos pruebas exhaustivas; en proyectos creativos, aseguramos la coherencia y el impacto del mensaje."
      ],
      icon: "⚙️",
      color: "from-violet-500/20 to-violet-600/20",
      accentColor: "violet-500"
    },
    {
      number: "4",
      title: "Lanzamiento, Entrega y Empoderamiento",
      details: [
        "Puesta en Marcha y Entrega Final: ¡Es el momento de brillar! Lanzamos tu web, app, campaña o te entregamos los activos de marca finalizados.",
        "Capacitación Personalizada (Si aplica): Te enseñamos a gestionar los elementos entregados para que tengas autonomía (ej. administrar tu web, entender tus campañas).",
        "Acompañamiento Inicial: Estamos a tu lado durante los primeros pasos para resolver dudas y asegurar una transición fluida."
      ],
      icon: "🚀",
      color: "from-green-500/20 to-green-600/20",
      accentColor: "green-500"
    },
    {
      number: "5",
      title: "Evolución y Crecimiento Continuo",
      details: [
        "Monitorización y Análisis de Resultados: Seguimos de cerca el rendimiento de tu proyecto, web o campañas, utilizando métricas clave.",
        "Informes Claros y Accionables: Te presentamos reportes periódicos que no solo muestran datos, sino que explican el 'por qué' y proponen los 'cómo' mejorar.",
        "Optimización y Estrategia Proactiva: No nos conformamos. Buscamos constantemente oportunidades para optimizar, adaptar y evolucionar tu estrategia digital.",
        "Soporte y Consultoría Estratégica: Seguimos siendo tu socio estratégico, listos para ofrecerte soporte técnico y asesoramiento para futuros desafíos y oportunidades de crecimiento."
      ],
      icon: "📈",
      color: "from-primary/20 to-primary/20",
      accentColor: "primary"
    }
  ];

  // Callback para actualizar el paso activo
  const handleSlideChange = (swiper: any) => {
    setActiveStep(swiper.activeIndex);
  };

  // Ya no necesitamos bloquear el scroll vertical

  return (
    <section id="process" className="w-full py-16 bg-background text-foreground overflow-hidden">
      <div className="container mx-auto px-4 mb-10">
        <h2 className="text-4xl md:text-6xl font-extrabold text-center mb-8">
          <span ref={underlineRef} className="section-title-underline">
            Nuestro Proceso Colaborativo
          </span>
        </h2>
        <p className="text-center text-foreground/70 dark:text-foreground/70 mb-8 max-w-3xl mx-auto">
          En Avanxia Labs, cada proyecto es una alianza. Creemos en la transparencia, la comunicación constante y la co-creación con nuestros clientes. Nuestro proceso está diseñado para ser flexible y adaptarse a la naturaleza de tu proyecto, ya sea branding, desarrollo web, una campaña de marketing o una solución integral, asegurando que tus objetivos sean siempre el norte.
        </p>
      </div>

      {/* Indicadores de navegación personalizados para desktop */}
      {!isMobile && (
        <div className="container mx-auto px-4 mb-8">
          <div className="flex justify-between items-center relative max-w-4xl mx-auto">
            {/* Línea de progreso */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-secondary/20 -translate-y-1/2 z-0">
              <div 
                className="h-1 bg-primary transition-all duration-500 ease-out" 
                style={{ width: `${(activeStep / (steps.length - 1)) * 100}%` }}
              ></div>
            </div>
            
            {/* Puntos de navegación - Corregimos los colores para adaptarse al tema */}
            {steps.map((step, index) => (
              <button
                key={index}
                onClick={() => swiperRef.current?.slideTo(index)}
                className={`w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold z-10 transition-all duration-300 relative overflow-hidden ${
                  activeStep >= index ? 'scale-100' : 'scale-90'
                }`}
                style={{
                  backgroundColor: activeStep >= index 
                    ? '#0087C8' /* Color azul sólido */ 
                    : 'transparent',
                  color: activeStep >= index ? 'white' : 'var(--foreground)',
                  boxShadow: activeStep >= index ? '0 4px 12px -2px rgba(0, 0, 0, 0.4)' : 'none',
                  border: activeStep >= index ? 'none' : '1px solid var(--border)'
                }}
                aria-label={`Ir al paso ${index + 1}: ${step.title}`}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Swiper para desktop - Mejor visual con efecto cards */}
      {!isMobile ? (
        <Swiper
          modules={[Pagination, Navigation, EffectCards]}
          effect={"cards"}
          cardsEffect={{
            slideShadows: false,
            perSlideOffset: 8,
            perSlideRotate: 0
          }}
          onSwiper={(swiper) => swiperRef.current = swiper}
          onSlideChange={handleSlideChange}
          slidesPerView={1}
          spaceBetween={30}
          pagination={{
            type: 'progressbar',
            el: '.swiper-pagination',
          }}
          className="process-swiper max-w-5xl mx-auto"
          allowTouchMove={true}
          speed={500}
          style={{ overflow: 'visible', padding: '2rem 0' }}
        >
          {steps.map((step, index) => (
            <SwiperSlide key={index}>
              <div className="p-4 md:p-8">
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className={`bg-card border border-border rounded-xl p-6 md:p-8 shadow-xl h-[600px] overflow-auto`}
                >
                  <div className="flex flex-col md:flex-row md:items-center gap-6 mb-6">
                    <div className={`w-16 h-16 md:w-20 md:h-20 bg-${step.accentColor} text-background rounded-full flex items-center justify-center text-3xl md:text-4xl shrink-0`}>
                      {step.icon}
                    </div>
                    <div>
                      <div className="text-sm md:text-base font-medium text-primary">Etapa {step.number}</div>
                      <h3 className="text-xl md:text-2xl font-bold">{step.title}</h3>
                    </div>
                  </div>
                  
                  <ul className="space-y-4 mt-6">
                    {step.details.map((detail, i) => (
                      <li key={i} className="flex items-start gap-3 bg-muted/40 rounded-lg p-3 hover:bg-muted/60 transition-colors duration-200">
                        <div className="mt-1">
                          <div className={`w-2 h-2 bg-${step.accentColor} rounded-full`}></div>
                        </div>
                        <p className="flex-1 text-sm md:text-base">{detail}</p>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        // Vista mobile mejorada (vertical timeline)
        <div className="container mx-auto px-4">
          <div className="relative pl-8 md:pl-12">
            {/* Línea vertical */}
            <div className="absolute left-4 md:left-6 top-0 bottom-0 w-1 bg-primary/20"></div>
            
            {steps.map((step, index) => (
              <motion.div 
                key={index} 
                className="mb-12 relative"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                {/* Círculo en la línea con número */}
                <div className={`absolute left-[-0.875rem] md:left-[-1.125rem] top-3 w-8 h-8 md:w-10 md:h-10 bg-${step.accentColor} text-primary-foreground rounded-full flex items-center justify-center text-sm md:text-base font-bold border-4 border-background`}>
                  {index + 1}
                </div>
                
                <div className="bg-card border border-border rounded-lg p-5 shadow-lg">
                  <div className="flex items-center gap-3 mb-4 border-b border-border pb-3">
                    <div className={`w-10 h-10 md:w-12 md:h-12 bg-${step.accentColor}/10 rounded-full flex items-center justify-center text-lg shrink-0`}>
                      {step.icon}
                    </div>
                    <div>
                      <div className="text-xs font-medium text-primary">Etapa {step.number}</div>
                      <h3 className="text-lg md:text-xl font-bold">{step.title}</h3>
                    </div>
                  </div>
                  
                  {/* Accordion para detalles en mobile */}
                  <div className="space-y-2 mt-3">
                    {step.details.map((detail, i) => (
                      <div key={i} className="bg-muted/30 hover:bg-muted/50 rounded-lg p-3 transition-colors">
                        <div className="flex gap-2">
                          <div className="mt-1.5">
                            <div className={`w-2 h-2 bg-${step.accentColor} rounded-full`}></div>
                          </div>
                          <p className="text-sm flex-1">{detail}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      )}
      
      {/* Eliminamos el mensaje de deslizar en desktop */}

      {/* CTA final */}
      <div className="container mx-auto px-4 mt-16 text-center">
        <a
          href="#contact"
          className="inline-block bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-3 px-8 rounded-lg transition duration-300 shadow-lg hover:shadow-xl hover:shadow-primary/20"
        >
          ¿Listo para comenzar tu proyecto? Hablemos
        </a>
      </div>
    </section>
  );
};

export default Process;
