import React, { useState, useEffect } from 'react';
import { useParams, Link as RouterLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { categoriesData, ServiceCategory } from '../../../data/categoriesData';
import { servicesData, ServicePlan } from '../../../data/servicesData';
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { Engine } from "@tsparticles/engine";

// ── Animaciones con Framer Motion ─────────────────────────────────────────
const containerAnimation = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const cardAnimation = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 90,
    },
  },
};

const sectionAnimation = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.1 } },
};

// ── Componente ───────────────────────────────────────────────────────────
const ServiceCategoryPage: React.FC = () => {
  const { categorySlug } = useParams<{ categorySlug: string }>();

  // Estado para manejar la inicialización de partículas
  const [init, setInit] = useState(false);

  // Inicializar el motor de partículas
  useEffect(() => {
    initParticlesEngine(async (engine: Engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  // Hook simple para detectar mobile
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // Opciones de interactividad según dispositivo
  const interactivity = isMobile
    ? {
        events: {
          onClick: { enable: true, mode: "repulse" },
          onTap: { enable: true, mode: "repulse" },
          resize: { enable: true },
        },
        modes: {
          repulse: { distance: 80, duration: 1.2 },
        },
      }
    : {
        events: {
          onHover: { enable: true, mode: "repulse" },
          resize: { enable: true },
        },
        modes: {
          repulse: { distance: 70, duration: 5.2 },
        },
      };

  // Obtener categoría y planes correspondientes
  const category: ServiceCategory | undefined = categoriesData.find(
    (cat) => cat.slug === categorySlug,
  );

  const categoryPlans: ServicePlan[] = servicesData.filter(
    (plan) => plan.categoryId === category?.id && plan.type === 'plan',
  );

  // ── Manejar categoría no encontrada ────────────────────────────────────
  if (!category) {
    return (
      <div className="w-full bg-background text-foreground min-h-screen">
        <div className="container mx-auto p-4 md:p-6 lg:p-8">
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-3xl font-bold text-destructive mb-4">
              Categoría no encontrada
            </h1>
            <RouterLink to="/soluciones" className="text-primary hover:underline">
              Volver a Soluciones
            </RouterLink>
          </div>
        </div>
      </div>
    );
  }

  // ── Render ─────────────────────────────────────────────────────────────
  return (
    <div className="w-full bg-background text-foreground min-h-screen">
      <div className="container mx-auto px-4 py-12 sm:py-16 md:py-20">
        {/* ── Back Link ───────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="mb-6 md:mb-8"
        >
          <RouterLink
            to="/soluciones"
            className="inline-flex items-center text-sm text-primary hover:text-primary/80 transition-colors duration-300 group"
          >
            <span className="mr-1.5">←</span> Volver a todas las Soluciones
          </RouterLink>
        </motion.div>

        {/* ── Banner Tecnológico con Partículas 3D ────── */}
        <div className="w-screen relative overflow-hidden" style={{ marginLeft: 'calc(-50vw + 50%)', marginRight: 'calc(-50vw + 50%)', width: '100vw', maxWidth: '100vw' }}>
          <div 
            id="custom-particles-banner-background"
            className="glass-panel tech-waves-bg w-full relative z-10 overflow-hidden" 
            style={{
              height: '320px',
              borderRadius: 0
            }}
          >
            {/* Componente de partículas usando tsparticles */}
            {init && (
              <Particles
                id="tsparticles-category"
                options={{
                  fullScreen: { enable: false },
                  background: {
                    color: { value: "transparent" },
                  },
                  fpsLimit: 120,
                  interactivity,
                  particles: {
                    color: { value: "#00a6d6" },
                    links: {
                      color: "#00a6d6",
                      distance: 150,
                      enable: true,
                      opacity: 0.4,
                      width: 1.5,
                    },
                    move: {
                      direction: "none",
                      enable: true,
                      outModes: { default: "bounce" },
                      random: false,
                      speed: 1.5,
                      straight: false,
                    },
                    number: {
                      density: { enable: true, width: 800 },
                      value: 60,
                    },
                    opacity: { value: 0.6 },
                    shape: { type: "circle" },
                    size: { value: { min: 1, max: 4 } },
                  },
                  detectRetina: true,
                }}
                className="w-full h-full"
              />
            )}
          </div>

          {/* Contenido centrado sobre el fondo de partículas */}
          <div className="absolute inset-0 flex justify-center items-center z-20">
            <motion.img
              src="/images/Services/iu1oox_1 1.png"
              alt={category.name}
              className="rounded-lg relative"
              style={{ height: 'auto', width: 'auto', maxWidth: '800px', maxHeight: '280px', objectFit: 'contain' }}
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: 1,
                y: [0, -12, 0],
                scale: [1, 1.015, 1]
              }}
              transition={{ 
                opacity: { duration: 0.6, delay: 0.25 },
                y: { duration: 4, ease: [0.45, 0, 0.55, 1], repeat: Infinity, repeatType: "mirror" },
                scale: { duration: 4, ease: [0.45, 0, 0.55, 1], repeat: Infinity, repeatType: "mirror" }
              }}
            />
          </div>
        </div>
        
        {/* ── Título de la Categoría ────── */}
        <motion.h1
          className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center mb-6 mt-8 text-primary"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          {category.name}
        </motion.h1>

        {/* ── Descripción ────────────────────────────── */}
        <motion.p
          className="text-base sm:text-lg text-foreground/80 text-center mb-12 sm:mb-16 md:mb-20 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {category.description}
        </motion.p>
                {/* ── Paquetes ───────────────────────────────── */}
                {categoryPlans.length > 0 && (
          <motion.section
            className="mb-12 sm:mb-16 md:mb-20"
            variants={sectionAnimation}
            initial="hidden"
            animate="visible"
          >
            <h2 className="text-3xl sm:text-4xl font-semibold text-center mb-10 sm:mb-12 text-primary/90">
              Nuestros Paquetes de {category.name}
            </h2>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
              variants={containerAnimation}
            >
              {categoryPlans.map((plan) => (
                <motion.div
                  key={plan.id}
                  variants={cardAnimation}
                  className={`glass-panel rounded-xl shadow-lg flex flex-col overflow-hidden transition-all duration-300 ease-in-out hover:shadow-2xl group h-full ${
                    plan.featured
                      ? 'border-2 border-primary/60 scale-[1.01]'
                      : 'border border-transparent'
                  }`}
                  style={{ 
                    background: 'var(--glass-bg)',
                    backdropFilter: 'blur(var(--glass-blur))',
                    WebkitBackdropFilter: 'blur(var(--glass-blur))'
                  }}
                >
                  {plan.featured && (
                    <div className="bg-primary text-primary-foreground px-3 py-1 text-xs font-semibold absolute top-0 right-0 rounded-bl-lg z-10 tracking-wide">
                      RECOMENDADO
                    </div>
                  )}

                  {/* ── Contenido de la tarjeta ─────── */}
                  <div className="p-6 flex flex-col flex-grow">
                    <img
                      src={plan.imagePlaceholder || 'https://via.placeholder.com/400x200'}
                      alt={plan.name}
                      className="w-full h-40 object-cover rounded-md mb-4 shadow"
                    />
                    <h3 className="text-xl lg:text-2xl font-bold text-primary mb-2 min-h-[56px] lg:min-h-[64px]">
                      {plan.name}
                    </h3>

                    {/* Precio */}
                    <div className="mb-3">
                      <span className="text-2xl lg:text-3xl font-extrabold text-foreground">
                        {typeof plan.price === 'number'
                          ? `$${plan.price.toLocaleString('en-US')}`
                          : plan.price}
                      </span>
                      {plan.priceType && (
                        <span className="text-xs text-foreground/70 ml-1">
                          / {plan.priceType}
                        </span>
                      )}
                    </div>

                    {/* Descripción breve */}
                    <p
                      className="text-foreground/80 text-sm mb-4"
                      style={{ display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}
                    >
                      {plan.shortDescription}
                    </p>

                    {/* Botón */}
                    <div className="mt-auto">
                      <button
                        className="w-full bg-primary text-primary-foreground font-semibold py-2.5 px-5 rounded-lg hover:bg-primary/90 transition-colors duration-300 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 focus:ring-offset-background"
                      >
                        Añadir a Solución
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.section>
        )}

        {/* ── Nuestra Propuesta de Valor ─────────────── */}
        <motion.section
          className="mb-12 sm:mb-16 md:mb-20"
          variants={sectionAnimation}
          initial="hidden"
          animate="visible"
        >
          <h2 className="text-3xl sm:text-4xl font-semibold text-center mb-10 sm:mb-12 text-primary/90">
            Nuestra Propuesta de Valor para {category.name}
          </h2>
          <div className="prose prose-lg dark:prose-invert max-w-none mx-auto text-foreground/90">
            {categoryPlans.map((plan) => (
              <div
                key={`selling-${plan.id}`}
                className="mb-12 p-6 rounded-lg bg-card/30 dark:bg-card/50 shadow-md"
              >
                <h4 className="text-2xl font-semibold text-primary mb-3">
                  {plan.name}
                </h4>

                {plan.idealFor && (
                  <p className="mb-2 text-base text-foreground/80">
                    <strong>Ideal para:</strong> {plan.idealFor}
                  </p>
                )}

                {plan.longDescription && (
                  <p className="mb-4 text-base text-foreground/80">
                    {plan.longDescription}
                  </p>
                )}

                {plan.sellingPoints?.length > 0 && (
                  <>
                    <p className="font-medium mb-1">Argumentos de Venta Clave:</p>
                    <ul className="list-disc list-inside space-y-1 mb-4">
                      {plan.sellingPoints.map((pt, idx) => (
                        <li key={idx}>{pt}</li>
                      ))}
                    </ul>
                  </>
                )}

                {plan.includes?.length > 0 && (
                  <>
                    <p className="font-medium mb-1">¿Qué incluye exactamente?</p>
                    <ul className="list-disc list-inside space-y-1 mb-4">
                      {plan.includes.map((inc, idx) => (
                        <li key={idx}>{inc}</li>
                      ))}
                    </ul>
                  </>
                )}

                {plan.duration && (
                  <p className="text-sm text-foreground/70">
                    <strong>Duración estimada:</strong> {plan.duration}
                  </p>
                )}
              </div>
            ))}
          </div>
        </motion.section>

        {/* ── Portafolio Placeholder ─────────────────── */}
        <motion.section
          className="mb-12 sm:mb-16 md:mb-20"
          variants={sectionAnimation}
          initial="hidden"
          animate="visible"
        >
          <h2 className="text-3xl sm:text-4xl font-semibold text-center mb-10 sm:mb-12 text-primary/90">
            Casos de Éxito en {category.name}
          </h2>
          <div className="text-center text-foreground/70">
            <p>(Contenido de portafolio próximamente)</p>
          </div>
        </motion.section>

        {/* ── CTA Final ─────────────────────────────── */}
        <motion.section
          variants={sectionAnimation}
          initial="hidden"
          animate="visible"
          className="py-12 sm:py-16 md:py-20 rounded-lg bg-gradient-to-r from-primary/5 via-background to-primary/5 text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-semibold text-primary mb-6">
            ¿Listo para potenciar tu negocio con {category.name}?
          </h2>
          <p className="mb-8 max-w-2xl mx-auto text-foreground/80">
            Nuestro equipo está preparado para llevar tu proyecto al siguiente nivel.
            ¡Hablemos sobre cómo podemos ayudarte a alcanzar tus objetivos!
          </p>
          <RouterLink
            to="/contact"
            className="inline-block bg-accent text-accent-foreground font-semibold py-3 px-8 rounded-lg hover:bg-accent/90 transition-colors duration-300"
          >
            Contáctanos
          </RouterLink>
        </motion.section>
      </div>
    </div>
  );
};

export default ServiceCategoryPage;