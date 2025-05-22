import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Check, ShoppingCart, PackageCheck, AppWindow } from 'lucide-react';
import { categoriesData, ServiceCategory } from '../../../data/categoriesData';
import { servicesData, serviceAddons, ServicePlan, ServiceAddon } from '../../../data/servicesData';
import AddonsSelector from '@/components/AddonsSelector';
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { Engine } from "@tsparticles/engine";
import { Button } from "@/components/ui/button";
import PackageCartModal from '@/components/PackageCartModal';
import Footer from '@/components/Footer';

import ValueSteps from '@/components/ValueSteps';
import { portfolioData, PortfolioItem } from '../../../data/portfolioData';


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
 const [cartOpen, setCartOpen] = useState<boolean>(false);
  // carrito arranca con el bonus (si existe)
  const [cartItems, setCartItems] = useState<(ServicePlan | ServiceAddon)[]>(
    () => (defaultBonus ? [defaultBonus] : []),
  );

  // resto de hooks (particles, isMobile, etc.) …
  const [init, setInit] = useState(false);
  const [isMobile, setIsMobile] = useState(false);


  useEffect(() => {
  setCartOpen(false);      // ← no vuelve a mostrar la ventana
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


    function inCategory(addon: ServiceAddon, categoryId: string): boolean {
  return Array.isArray(addon.categoryId)
    ? addon.categoryId.includes(categoryId)
    : addon.categoryId === categoryId;
}
categoryPlans.forEach(plan => {
  const planAddons = serviceAddons.filter(a =>
    a.type === 'addon' &&
    inCategory(a, category!.id) &&               // <-- el “!” le quita el undefined
    plan.availableAddons?.includes(a.id)
  );

  const planBonuses = serviceAddons.filter(b =>
    b.type === 'bonus' &&
    inCategory(b, category!.id) &&
    plan.includedBonuses?.includes(b.id)
  );

  planAddons .forEach(a => allAddonItems.push({ ...a, planName: plan.name, group: "addon"  }));
  planBonuses.forEach(b => allAddonItems.push({ ...b, planName: plan.name, group: "bonus" }));
});


const showcaseContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};
  const cases: PortfolioItem[] = portfolioData.filter(item =>
    item.categories.includes(category!.id)
  );

console.log("allAddonItems:", allAddonItems);




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
              src={category?.imagePlaceholder ?? '/images/placeholders/default.png'}
              alt={category?.name ?? 'Imagen de categoría'}
              className="rounded-lg relative"
              style={{
                height: 'auto',
                width: 'auto',
                maxWidth: '800px',
                maxHeight: '280px',
                objectFit: 'contain'
              }}
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
              onError={(e) => {
                // Si fallara la carga, usa una genérica
                (e.currentTarget as HTMLImageElement).src = '/images/placeholders/default.png';
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
          className="text-base sm:text-lg text-foreground/80 text-center mb-6 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {category.description}
        </motion.p>
        
        {/* Aviso de precios aproximados */}
        <motion.div
          className="bg-primary/5 border border-primary/20 rounded-lg p-4 md:p-5 max-w-3xl mx-auto mb-12 sm:mb-16 md:mb-20"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <p className="text-sm sm:text-base text-foreground/90 text-center">
            <strong className="text-primary">Precios aproximados.</strong> Ofrecemos una <strong>cotización personalizada gratuita</strong> para evaluar tus necesidades específicas y brindarte soluciones a medida que optimicen tu inversión.
          </p>
        </motion.div>
{/* ── Paquetes ───────────────────────────────── */}
{categoryPlans.length > 0 && (
  <section className="mb-12 sm:mb-16 md:mb-20">
    <h2 className="text-3xl sm:text-4xl font-semibold text-center mb-10 sm:mb-12 text-primary/90">
      Nuestros Paquetes de {category.name}
    </h2>
    <div className="overflow-x-auto px-2 sm:px-4">
      {/* Siempre fila centrada y con wrap */}
      <div className="flex flex-wrap justify-center gap-6">
        {categoryPlans.map((plan) => (
          <div
            key={plan.id}
            className={`
              glass-panel rounded-xl shadow-lg flex flex-col overflow-hidden
              transition-shadow duration-300 ease-in-out hover:shadow-2xl
              min-w-[280px] w-full sm:w-80
              ${plan.featured ? 'border-2 border-primary/60' : 'border border-transparent'}
            `}
            style={{
              background: 'var(--glass-bg)',
              backdropFilter: 'blur(var(--glass-blur))',
              WebkitBackdropFilter: 'blur(var(--glass-blur))',
            }}
          >
            {plan.featured && (
              <div className="bg-primary text-primary-foreground px-3 py-1 text-xs font-semibold absolute top-0 right-0 rounded-bl-lg z-10 tracking-wide">
                RECOMENDADO
              </div>
            )}
            {/* Contenido de la tarjeta */}
            <div className="p-6 flex flex-col flex-grow">
              <div
                className="w-full h-40 flex items-center justify-center rounded-md mb-4 shadow bg-gradient-to-br from-primary/5 to-primary/10"
                aria-label={plan.name}
              >
                {React.createElement(category?.icon || AppWindow, { size: 64 })}
              </div>
              <h3 className="text-xl lg:text-2xl font-bold text-primary mb-2">
                {plan.name}
              </h3>
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
              <p
                className="text-foreground/80 text-sm mb-4"
                style={{
                  display: '-webkit-box',
                  WebkitLineClamp: 3,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden',
                }}
              >
                {plan.shortDescription}
              </p>
              {plan.includes?.length > 0 && (
                <div className="mb-4">
                  <p className="text-sm font-semibold mb-2 text-foreground/90">
                    Incluye:
                  </p>
                  <ul className="space-y-2">
                    {plan.includes.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start text-sm text-foreground/80"
                      >
                        <Check className="h-4 w-4 text-primary flex-shrink-0 mr-2 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              <div className="mt-auto">
                <button
                  onClick={() => addItemAndOpen(plan)}
                  className="w-full bg-primary text-primary-foreground font-semibold py-2.5 px-5 rounded-lg hover:bg-primary/90 transition-colors duration-300 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 focus:ring-offset-background"
                >
                  Añadir a Solución
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
)}





{/* ── Addons & Bonuses 1-solo-carrusel ─────────────────────────────── */}
{allAddonItems.length > 0 && (
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
  items={allAddonItems}
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
{category.id !== 'e-commerce' && (
  <h2 className="text-3xl sm:text-4xl font-semibold text-center mb-10 sm:mb-12 text-primary/90">
    Casos de Éxito en {category.name}
  </h2>
)}

  <motion.div
className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-screen-xl px-2 sm:px-4 mx-auto"
    variants={showcaseContainer}
    initial="hidden"
    animate="visible"
  >
    {cases.map((proj, idx) => {
      // Calculamos la imagen según la categoría si existe una específica

      return (
        <motion.div
          key={proj.id}
          className="glass-panel overflow-hidden rounded-lg shadow-md group h-full flex flex-col min-w-0 w-full"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                type: 'spring',
                stiffness: 80,
                damping: 15,
                delay: idx * 0.1
              }
            }
          }}
        >
          <div className="relative overflow-hidden h-48 sm:h-56 w-full">
            {proj.videos?.[category!.id] ? (
              <video
                src={proj.videos[category!.id]!}
                className="w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
              />
            ) : (
              <img
                src={proj.images?.[category!.id] ?? proj.image}
                alt={proj.title}
                className="w-full h-full object-cover"
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
              <div className="p-4 w-full">
                <h3 className="text-white font-semibold">{proj.title}</h3>
                <p className="text-white/80 text-sm">{proj.subtitle}</p>
              </div>
            </div>
          </div>
            <div className="p-3 sm:p-4 md:p-6 flex flex-col flex-grow text-sm sm:text-base">
              <div className="flex-grow">
              <h3 className="font-semibold text-primary mb-1">{proj.title}</h3>
                {proj.description && (
                  <div
                    className="text-sm text-foreground/80 break-words"
                    dangerouslySetInnerHTML={{ __html: proj.description }}
                  />
                )}
            </div>
            <div className="mt-auto pt-4">
              {!['acme-seo-audit', 'startup-ppc-launch'].includes(proj.slug) && (
                <Button
                  onClick={() => navigate(`/proyectos/${proj.slug}`)}
                  variant="secondary"
                  size="tight"
                  className="w-full text-sm text-primary flex items-center justify-center gap-1 border border-primary/40"
                >
                  <span>Ver proyecto</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="7" y1="17" x2="17" y2="7" />
                    <polyline points="7 7 17 7 17 17" />
                  </svg>
                </Button>
              )}
            </div>
          </div>
        </motion.div>
      );
    })}
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
          {defaultBonus ? (
            <>
              ¡Ya tienes un <strong className="text-primary">BONUS&nbsp;GRATIS</strong>!&nbsp;
              Ahora elige tu plan y personaliza tu paquete.
            </>
          ) : (
            <>
              <strong className="text-primary">Precios aproximados</strong>. Ofrecemos una
              cotización personalizada gratuita para asegurarnos de cumplir con tus
              expectativas y necesidades específicas.
            </>
          )}
        </>
      }
      onClose={() => setCartOpen(false)}
      onRemove={(id) =>
        setCartItems((prev) => prev.filter((i) => i.id !== id))
      }
      onContinue={() => {
        console.log("Ítems seleccionados por el cliente:", cartItems);
        // Cerramos el modal…
        setCartOpen(false);
        // …y navegamos a ContactPage, enviando los ítems seleccionados
        navigate('/contact', { state: { selectedItems: cartItems } });
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