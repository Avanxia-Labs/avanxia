import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Check, LightbulbIcon, Target, List, Calendar, Award } from 'lucide-react';
import { categoriesData, ServiceCategory } from '../../../data/categoriesData';
import { servicesData, serviceAddons, ServicePlan } from '../../../data/servicesData';
import AddonsSelector from '@/components/AddonsSelector';
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { Engine } from "@tsparticles/engine";
import { Button } from "@/components/ui/button";
import PackageCartModal from '@/components/PackageCartModal';

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
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<ServicePlan[]>([]);
  const navigate = useNavigate();
  const { categorySlug } = useParams<{ categorySlug: string }>();

  const togglePlan = (plan: ServicePlan) => {
  setCartItems((prev) =>
    prev.find((p) => p.id === plan.id)
      ? prev.filter((p) => p.id !== plan.id)
      : [...prev, plan],
  );
  setCartOpen(true); // abre al añadir
};

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

  // ── Manejar categoría no encontrada ───────────────────────────
  if (!category) {
    return (
      <div className="w-full bg-background text-foreground min-h-screen">
        <div className="container mx-auto p-4 md:p-6 lg:p-8">
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-3xl font-bold text-destructive mb-4">
              Categoría no encontrada
            </h1>
            <Button 
              onClick={() => navigate('/soluciones')}
              variant="link"
              className="text-primary hover:underline p-0"
            >
              Volver a Soluciones
            </Button>
          </div>
        </div>
      </div>
    );
  }

  // ── Render ─────────────────────────────────────────────────────────────
  return (
    <div className="w-full bg-background text-foreground min-h-screen">
      <div className="container mx-auto px-4 py-12 sm:py-16 md:py-20">


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
                    <div 
                      className="w-full h-40 flex items-center justify-center rounded-md mb-4 shadow bg-gradient-to-br from-primary/5 to-primary/10"
                      aria-label={plan.name}
                    >
                      <div className="text-7xl select-none">
                        {plan.categoryId === 'desarrollo-web' ? '🌐' : 
                         plan.categoryId === 'identidad-de-marca' ? '🎨' :
                         plan.categoryId === 'redes-sociales' ? '📱' :
                         plan.categoryId === 'seo-marketing' ? '📈' :
                         plan.categoryId === 'contenidos' ? '📝' :
                         plan.categoryId === 'ecommerce' ? '🛒' :
                         plan.categoryId === 'videoproduccion' ? '🎬' :
                         plan.categoryId === 'apps' ? '📲' : '✨'}
                      </div>
                    </div>
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

                    {/* Características incluidas con iconos de check */}
                    {plan.includes && plan.includes.length > 0 && (
                      <div className="mb-4">
                        <p className="text-sm font-semibold mb-2 text-foreground/90">Incluye:</p>
                        <ul className="space-y-2">
                          {plan.includes.map((item, index) => (
                            <li key={index} className="flex items-start text-sm text-foreground/80">
                              <Check className="h-4 w-4 text-primary flex-shrink-0 mr-2 mt-0.5" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Botón */}
                    <div className="mt-auto">
                      <button
                        className="w-full bg-primary text-primary-foreground font-semibold py-2.5 px-5 rounded-lg hover:bg-primary/90 transition-colors duration-300 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 focus:ring-offset-background"
                      >
                        Añadir a Solución
                      </button>
                      <button onClick={() => togglePlan(plan)} >...Añadir a Solución</button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.section>
        )}

        {/* ── Sección de Addons y Bonuses (Solo para desarrollo web por ahora) ───────────── */}
        {category.id === 'desarrollo-web' && categoryPlans.length > 0 && (
          <motion.section
            className="mb-12 sm:mb-16 md:mb-20"
            variants={sectionAnimation}
            initial="hidden"
            animate="visible"
          >
            <h2 className="text-3xl sm:text-4xl font-semibold text-center mb-10 sm:mb-12 text-primary/90">
              Personaliza Tu Solución de {category.name}
            </h2>
            
            {categoryPlans.map((plan) => {
              // Filtrar addons y bonuses para este plan específico
              const planAddons = serviceAddons.filter(
                addon => addon.type === 'addon' && 
                      addon.categoryId === category.id && 
                      addon.compatiblePlans.includes(plan.id)
              );
              
              const planBonuses = serviceAddons.filter(
                bonus => bonus.type === 'bonus' && 
                      bonus.categoryId === category.id && 
                      (plan.includedBonuses?.includes(bonus.id) || false)
              );
              
              return planAddons.length > 0 || planBonuses.length > 0 ? (
                <div key={`addons-${plan.id}`} className="mb-16">
                  <h3 className="text-2xl font-semibold text-center mb-8 text-foreground/90">
                    Para el plan: <span className="text-primary">{plan.name}</span>
                  </h3>
                  <AddonsSelector 
                    plan={plan} 
                    addons={planAddons} 
                    bonuses={planBonuses} 
                  />
                </div>
              ) : null;
            })}
          </motion.section>
        )}

        {/* ── Nuestra Propuesta de Valor ───────────── */}
        <motion.section
          className="mb-12 sm:mb-16 md:mb-20"
          variants={sectionAnimation}
          initial="hidden"
          animate="visible"
        >
          <h2 className="text-3xl sm:text-4xl font-semibold text-center mb-10 sm:mb-12 text-primary/90">
            Nuestra Propuesta de Valor para {category.name}
          </h2>
          
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.15
                }
              }
            }}
          >
            {categoryPlans.map((plan) => (
              <motion.div
                key={`selling-${plan.id}`}
                className="glass-panel p-8 rounded-xl relative overflow-hidden transition-all duration-300 hover:translate-y-[-5px] hover:shadow-lg"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { 
                    opacity: 1, 
                    y: 0,
                    transition: {
                      type: 'spring',
                      stiffness: 80,
                      damping: 15
                    } 
                  }
                }}
              >
                <h4 className="text-2xl font-semibold text-primary mb-4 flex items-center">
                  <Award className="h-6 w-6 mr-2 text-primary/80" />
                  {plan.name}
                </h4>

                {plan.idealFor && (
                  <div className="mb-4 flex items-start">
                    <Target className="h-5 w-5 text-primary/80 mr-2 mt-1 flex-shrink-0" />
                    <p className="text-base text-foreground/80">
                      <strong className="text-foreground/90">Ideal para:</strong> {plan.idealFor}
                    </p>
                  </div>
                )}

                {plan.longDescription && (
                  <p className="mb-5 text-base text-foreground/80 pl-7">
                    {plan.longDescription}
                  </p>
                )}

                {plan.sellingPoints?.length > 0 && (
                  <div className="mb-6">
                    <p className="font-medium mb-2 flex items-center">
                      <LightbulbIcon className="h-5 w-5 text-primary/80 mr-2" />
                      <span className="text-foreground/90">Argumentos de Venta Clave:</span>
                    </p>
                    <ul className="space-y-2 pl-7">
                      {plan.sellingPoints.map((pt, idx) => (
                        <li key={idx} className="flex items-start">
                          <Check className="h-4 w-4 text-primary flex-shrink-0 mr-2 mt-0.5" />
                          <span className="text-foreground/80">{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {plan.includes?.length > 0 && (
                  <div className="mb-6">
                    <p className="font-medium mb-2 flex items-center">
                      <List className="h-5 w-5 text-primary/80 mr-2" />
                      <span className="text-foreground/90">¿Qué incluye exactamente?</span>
                    </p>
                    <ul className="space-y-2 pl-7">
                      {plan.includes.map((inc, idx) => (
                        <li key={idx} className="flex items-start">
                          <Check className="h-4 w-4 text-primary flex-shrink-0 mr-2 mt-0.5" />
                          <span className="text-foreground/80">{inc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {plan.duration && (
                  <div className="mt-4 flex items-center text-sm text-foreground/70">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span><strong>Duración estimada:</strong> {plan.duration}</span>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* ── Portafolio Showcase ───────────── */}
        <motion.section
          className="mb-12 sm:mb-16 md:mb-20"
          variants={sectionAnimation}
          initial="hidden"
          animate="visible"
        >
          <h2 className="text-3xl sm:text-4xl font-semibold text-center mb-10 sm:mb-12 text-primary/90">
            Casos de Éxito en {category.name}
          </h2>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1
                }
              }
            }}
          >
            {/* Proyecto GYB */}
            <motion.div
              className="glass-panel overflow-hidden rounded-lg shadow-md group h-full flex flex-col"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { 
                  opacity: 1, 
                  y: 0,
                  transition: {
                    type: 'spring',
                    stiffness: 80,
                    damping: 15
                  } 
                }
              }}
            >
              <div className="relative overflow-hidden h-56">
                <img 
                  src="/images/portfolio/proyectos/gyb.png"
                  alt="GYB Project"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 rounded-t-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 w-full">
                    <h3 className="text-white font-semibold">GYB</h3>
                    <p className="text-white/80 text-sm">UI/UX, Marketing Visual</p>
                  </div>
                </div>
              </div>
              <div className="p-4 flex flex-col flex-grow">
                <div className="flex-grow">
                  <h3 className="font-semibold text-primary mb-1">GYB Connect</h3>
                  <p className="text-sm text-foreground/80">Identidad y sitio web para fintech moderna con enfoque en claridad y confianza.</p>
                </div>
                <div className="mt-auto pt-4">
                  <Button
                    onClick={() => navigate('/proyectos/gyb')}
                    variant="secondary"
                    size="tight"
                    className="w-full text-sm text-primary flex items-center justify-center gap-1 border border-primary/40"
                  >
                    <span>Ver proyecto</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
                  </Button>
                </div>
              </div>
            </motion.div>
            
            {/* Proyecto Pool Quality Solutions */}
            <motion.div
              className="glass-panel overflow-hidden rounded-lg shadow-md group h-full flex flex-col"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { 
                  opacity: 1, 
                  y: 0,
                  transition: {
                    type: 'spring',
                    stiffness: 80,
                    damping: 15,
                    delay: 0.1
                  } 
                }
              }}
            >
              <div className="relative overflow-hidden h-56">
                <img 
                  src="/images/portfolio/proyectos/pool.png"
                  alt="Pool Quality Solutions Project"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 rounded-t-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 w-full">
                    <h3 className="text-white font-semibold">Pool Quality Solutions</h3>
                    <p className="text-white/80 text-sm">Diseño Web</p>
                  </div>
                </div>
              </div>
              <div className="p-4 flex flex-col flex-grow">
                <div className="flex-grow">
                  <h3 className="font-semibold text-primary mb-1">Pool Quality Solutions</h3>
                  <p className="text-sm text-foreground/80">Presencia digital renovada con un sitio moderno que transmite confianza y profesionalismo.</p>
                </div>
                <div className="mt-auto pt-4">
                  <Button
                    onClick={() => navigate('/proyectos/pool')}
                    variant="secondary"
                    size="tight"
                    className="w-full text-sm text-primary flex items-center justify-center gap-1 border border-primary/40"
                  >
                    <span>Ver proyecto</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
                  </Button>
                </div>
              </div>
            </motion.div>
            
            {/* Proyecto Heromatic */}
            <motion.div
              className="glass-panel overflow-hidden rounded-lg shadow-md group h-full flex flex-col"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { 
                  opacity: 1, 
                  y: 0,
                  transition: {
                    type: 'spring',
                    stiffness: 80,
                    damping: 15,
                    delay: 0.2
                  } 
                }
              }}
            >
              <div className="relative overflow-hidden h-56">
                <img 
                  src="/images/portfolio/proyectos/heromatic2.png"
                  alt="Heromatic Project"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 rounded-t-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 w-full">
                    <h3 className="text-white font-semibold">Heromatic</h3>
                    <p className="text-white/80 text-sm">Branding, Automatización, UI/UX</p>
                  </div>
                </div>
              </div>
              <div className="p-4 flex flex-col flex-grow">
                <div className="flex-grow">
                  <h3 className="font-semibold text-primary mb-1">Heromatic</h3>
                  <p className="text-sm text-foreground/80">Creamos toda la identidad de marca, enfocada en posicionarlos como expertos en automatización de procesos empresariales.</p>
                </div>
                <div className="mt-auto pt-4">
                  <Button
                    onClick={() => navigate('/proyectos/heromatic')}
                    variant="secondary"
                    size="tight"
                    className="w-full text-sm text-primary flex items-center justify-center gap-1 border border-primary/40"
                  >
                    <span>Ver proyecto</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.section>

        {/* ── CTA Final ────────────────────── */}
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
          <Button
            onClick={() => navigate('/contact')}
            variant="primary"
            size="cta"
          >
            Contáctanos
          </Button>
        </motion.section>
      </div>
       {/* ——— Modal de carrito de paquetes ——— */}
      <PackageCartModal
        open={cartOpen}
        items={cartItems}
        onClose={() => setCartOpen(false)}
        onRemove={(id) =>
          setCartItems((items) => items.filter((p) => p.id !== id))
        }
        onContinue={() => {
          // aquí iría tu lógica de checkout o navegación
          navigate('/checkout');
        }}
      />
    </div>

    
  );
};

export default ServiceCategoryPage;