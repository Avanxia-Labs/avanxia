import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Check, LightbulbIcon, Target, List, Calendar, Award } from 'lucide-react';
import { categoriesData, ServiceCategory } from '../../../data/categoriesData';
import { servicesData, serviceAddons, ServicePlan, ServiceAddon } from '../../../data/servicesData';
import AddonsSelector from '@/components/AddonsSelector';
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { Engine } from "@tsparticles/engine";
import { Button } from "@/components/ui/button";
import PackageCartModal from '@/components/PackageCartModal';
import Footer from '@/components/Footer';
import { ShoppingCart, PackageCheck } from "lucide-react";
import ValueSteps from '@/components/ValueSteps';



// ── Animaciones con Framer Motion ─────────────────────────────────────────
const containerAnimation = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,   // mismo delay entre cartas
      delayChildren: 0.4,
    },
  },
};

const cardAnimation = {
  hidden: { opacity: 0, scale: 0.9, y: 30 },
  show: (i: number) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: [0.25, 0.8, 0.25, 1],
    },
  }),
};
const sectionAnimation = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.1 } },
};






// ── Componente ───────────────────────────────────────────────────────────
const ServiceCategoryPage: React.FC = () => {
  const navigate = useNavigate();
  const { categorySlug } = useParams<{ categorySlug: string }>();

  /* ------------------------------------------------------------------ */
  /* 2️⃣  BONUS POR DEFECTO (antes de los useState)                      */
  /* ------------------------------------------------------------------ */
  const category: ServiceCategory | undefined = categoriesData.find(
    (cat) => cat.slug === categorySlug,
  );

  const defaultBonus = React.useMemo(
    () =>
      category?.id === "desarrollo-web"
        ? serviceAddons.find(
            (a) => a.id === "bonus-hosting-dominio-esencial",
          )
        : undefined,
    [category],
  );

  /* ------------------------------------------------------------------ */
  /* 3️⃣  Estados                                                        */
  /* ------------------------------------------------------------------ */
  // abre la modal si existe el bonus gratis
 const [cartOpen, setCartOpen] = useState<boolean>(true);
  // carrito arranca con el bonus (si existe)
  const [cartItems, setCartItems] = useState<(ServicePlan | ServiceAddon)[]>(
    () => (defaultBonus ? [defaultBonus] : []),
  );

  // resto de hooks (particles, isMobile, etc.) …
  const [init, setInit] = useState(false);
  const [isMobile, setIsMobile] = useState(false);


  useEffect(() => {
  setCartOpen(true);      // ← vuelve a mostrar la ventana
}, [categorySlug]);   


  // Inicializar el motor de partículas
  useEffect(() => {
    initParticlesEngine(async (engine: Engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  // Hook simple para detectar mobile
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


  const categoryPlans: ServicePlan[] = servicesData.filter(
    (plan) => plan.categoryId === category?.id && plan.type === 'plan',
  );

type ItemWithMeta = ServiceAddon & {
  planName : string;           // nombre del plan al que pertenece
  group    : "addon" | "bonus";
};

const allAddonItems: ItemWithMeta[] = [];

categoryPlans.forEach(plan => {
  const planAddons = serviceAddons.filter(
    a => a.type === "addon" &&
         category && a.categoryId === category.id &&
         a.compatiblePlans.includes(plan.id)
  );

  const planBonuses = serviceAddons.filter(
    b => b.type === "bonus" &&
         category && b.categoryId === category.id &&
         (plan.includedBonuses?.includes(b.id) ?? false)
  );

  planAddons .forEach(a => allAddonItems.push({ ...a, planName: plan.name, group: "addon"  }));
  planBonuses.forEach(b => allAddonItems.push({ ...b, planName: plan.name, group: "bonus" }));
});

  // Addons y bonuses para la categoría actual (ejemplo: desarrollo-web)
  

/** Añade al carrito pero NO abre la modal */
const addItemSilent = (item: ServicePlan | ServiceAddon) =>
  setCartItems(prev =>
    prev.find(i => i.id === item.id) ? prev : [...prev, item]
  );

/** Añade al carrito y abre la modal (para los planes o CTA) */
const addItemAndOpen = (item: ServicePlan | ServiceAddon) => {
  addItemSilent(item);
  setCartOpen(true);
};

const count = cartItems.length;

const total = cartItems
  .filter((i): i is ServiceAddon => "type" in i && i.type === "addon")
  .reduce((sum, a) => sum + (typeof a.price === "number" ? a.price : 0), 0);




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
      <div
        className={`
          container mx-auto px-4 py-12 sm:py-16 md:py-20
          ${count > 0 ? "pb-24" : ""}   /* ← 8 rem ≈ 128 px, ajusta si lo quieres más chico */
        `}
      >

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
              className="flex flex-wrap justify-center gap-6 max-w-7xl mx-auto px-4"
              variants={containerAnimation}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.3 }}
            >
                {categoryPlans.map((plan, index) => (
                  <motion.div
                  key={plan.id}
                  custom={index}
                  variants={cardAnimation}
                  className={`glass-panel rounded-xl shadow-lg flex flex-col overflow-hidden transition-all duration-300 ease-in-out hover:shadow-2xl group h-full w-[380px] ${
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
                     onClick={() => addItemAndOpen(plan)}    
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

{/* ── Addons & Bonuses 1-solo-carrusel ─────────────────────────────── */}
{category.id === "desarrollo-web" && allAddonItems.length > 0 && (
  <motion.section
    className="mb-12 sm:mb-16 md:mb-20"
    variants={sectionAnimation}
    initial="hidden"
    animate="visible"
  >
    <h2 className="text-3xl sm:text-4xl font-semibold text-center mb-10 sm:mb-12 text-primary/90">
      Personaliza Tu Solución de {category.name}
    </h2>

    {/*  ▶  un único paginador  */}
<AddonsSelector
  items={allAddonItems.map(a => ({ ...a, planName: category.name }))}
  selectedIds={cartItems.map(i => i.id)}       //  ← aquí
  onAdd={addItemSilent}
  onRemove={(id) => setCartItems(prev => prev.filter(i => i.id !== id))}
/>
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

          <ValueSteps steps={categoryPlans} />  
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

      <PackageCartModal
        open={cartOpen}
        items={cartItems}
      message={
        <>
          ¡Ya tienes un <strong className="text-primary">BONUS&nbsp;GRATIS</strong>!&nbsp;
          Ahora elige tu plan y personaliza tu paquete.
        </>
      }  onClose={() => setCartOpen(false)}
        onRemove={(id) =>
          setCartItems((prev) => prev.filter((i) => i.id !== id))
        }
        onContinue={() => {
          setCartOpen(false);
          // aquí iría la navegación a checkout
        }}
      />

{/* ——— resumen fijo (sticky bottom bar) ——— */}
{count > 0 && (
  <div
    className="
      fixed bottom-0 inset-x-0 z-50
      bg-background/80 backdrop-blur-md
      border-t border-border/20
    "
  >
    <div
      className="
        max-w-4xl mx-auto px-4 py-3
        flex flex-col sm:flex-row justify-between items-center gap-4
      "
    >
      {/* texto + monto */}
      <div className="flex items-center">
        <ShoppingCart className="h-5 w-5 text-primary mr-2" />

        <span className="text-foreground/90 font-medium">
          {count === 1
            ? "1 elemento en tu paquete"
            : `${count} elementos en tu paquete`}
        </span>

        {total > 0 && (
          <>
            <span className="mx-3 text-foreground/40">|</span>
            <span className="text-foreground font-bold">
              +${total.toLocaleString("en-US")}
            </span>
          </>
        )}
      </div>

      {/* botón */}
      <Button
        onClick={() => setCartOpen(true)}      // ← abre tu modal
        className="w-full sm:w-auto flex items-center justify-center"
      >
        <PackageCheck className="h-4 w-4 mr-2" />
        Ver paquete
      </Button>
    </div>
  </div>
)}


<div className={count > 0 ? "mb-16" : ""}>
  <Footer />
</div>
    </div>

    
  );
};

export default ServiceCategoryPage;