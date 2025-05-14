import { useSectionUnderlineOnView } from "../hooks/use-section-underline";
import { Check } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";


const Pricing = () => {

  // Orden visual: [1, 2, 0, 3]
const visualOrder = [2, 1, 0, 3];

  // Animación escalonada
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2, // controla el delay entre tarjetas
      delayChildren: 0.4,
    },
  },
};

const cardVariant = {
  hidden: { opacity: 0, scale: 0.9, y: 30 },
  show: (i: number) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      delay: i * 0.2, // delay específico por tarjeta
      duration: 0.6,
      ease: [0.25, 0.8, 0.25, 1],
    },
  }),
};



  const referencePrices = [
    { service: 'Tarifa por Hora (General)', range: '$40 - $200+' },
    { service: 'SEO (Retainer Mensual)', range: '$1,000 - $7,500+' },
    { service: 'Publicidad PPC (Retainer Mensual, sin incluir presupuesto)', range: '$1,500 - $10,000+' },
    { service: 'Marketing de Contenidos (Retainer Mensual)', range: '$1,800 - $12,000+' },
    { service: 'Gestión Redes Sociales (Retainer Mensual)', range: '$1,000 - $3,500+' },
    { service: 'Email Marketing (Retainer Mensual)', range: '$1,500 - $7,500+' },
    { service: 'Desarrollo Web (Proyecto)', range: '$2,500 - $150,000+' },
    { service: 'Diseño de Landing Page (Proyecto)', range: '$800 - $5,000+' },
  ];

  const plans = [
    {
      name: 'Presence Landing',
      objective: 'Establecer una presencia online básica y profesional.',
      idealFor: 'Nuevos negocios, profesionales independientes, proyectos con necesidad de una tarjeta de presentación digital.',
      services: [
        'Diseño y Desarrollo de Landing Page (hasta 3 secciones)',
        'Diseño Responsive (Móvil y Escritorio)',
        'Formulario de Contacto Básico',
        'Optimización SEO On-page Básica',
        'Configuración de Google Analytics',
      ],
      price: '~ $800 - $1,200',
      priceNote: 'Proyecto único'
    },
    {
      name: 'Starter Web',
      objective: 'Crear un sitio web completo y funcional para mostrar servicios y captar interés.',
      idealFor: 'Pequeñas empresas, startups que necesitan más que una landing page.',
      services: [
        'Diseño y Desarrollo Web (hasta 5 páginas)',
        'Diseño Responsive',
        'Blog o Sección de Portafolio básica',
        'Optimización SEO On-page Completa',
        'Integración con Redes Sociales',
        'Formulario de Contacto Avanzado',
      ],
      price: '~ $2,500 - $4,000',
      priceNote: 'Proyecto único'
    },
    {
      name: 'Growth Leads',
      objective: 'Generar prospectos calificados y aumentar la visibilidad online.',
      idealFor: 'Empresas enfocadas en crecimiento y adquisición de clientes.',
      services: [
        'Gestión de Campañas PPC (Google/Meta Ads - presupuesto no incluido)',
        'Optimización SEO Continua',
        'Marketing de Contenidos (Ej: 2 blogs/mes)',
        'Gestión Básica de Redes Sociales (Ej: 2 plataformas, 8 posts/mes)',
        'Reporte Mensual de Resultados',
      ],
      price: '~ $1,500 - $3,500',
      priceNote: 'Retainer Mensual'
    },
    {
      name: 'Full 360°',
      objective: 'Solución integral de marketing digital para maximizar presencia y conversiones.',
      idealFor: 'Empresas establecidas que buscan una estrategia completa.',
      services: [
        'Todo lo incluido en Growth Leads (con mayor intensidad)',
        'Estrategia de Marketing Digital Personalizada',
        'Email Marketing / Automatización',
        'CRO (Optimización de Conversión) básico',
        'Gestión Avanzada de Redes Sociales',
        'Reportes Detallados y Consultoría Estratégica',
      ],
      price: '~ $4,000 - $7,500+',
      priceNote: 'Retainer Mensual'
    },
  ];  const underlineRef = useSectionUnderlineOnView<HTMLSpanElement>();

  return (
    <section id="pricing" className="py-20 bg-background text-foreground dark:bg-background dark:text-foreground">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-2">Pricing Plans</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span ref={underlineRef}>Elige el plan perfecto para tu negocio</span>
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            El servicio de <strong>Branding e Identidad Corporativa</strong> se cotiza por separado. Consulta por descuentos en servicios adicionales al contratar planes superiores.
          </p>
        </div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport= {{ once: false, amount: 0.3 }   }     
          >
         {plans.map((plan, index) => {
            const visualIndex = visualOrder[index] ?? index;
            const isFeatured = plan.name === 'Growth Leads';

            return (
              <motion.div
                key={index}
                variants={cardVariant}
                custom={visualIndex}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.3 }}
                className={`relative glass-panel overflow-hidden group shadow-xl transition-all duration-500
                  ${isFeatured ? 'border-primary/50 order-first md:order-none' : 'order-none'}
                `}              
                >
                {isFeatured && (
                  <div className="absolute top-0 inset-x-0">
                    <div className="bg-amber-400 text-amber-950 text-sm font-medium py-1 px-4 rounded-b-lg mx-auto w-fit shadow-sm">
                      Best Value
                    </div>
                  </div>
                )}

                <div className={`relative z-10 p-6 pt-${isFeatured ? '12' : '6'}`}>
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-sm text-foreground/60 h-12">{plan.objective}</p>

                  <div className="mt-6 mb-6">
                    <div className="text-3xl font-bold">
                      {plan.price.includes('-') ? plan.price.split('-')[0].trim() : plan.price}
                      <span className="text-lg ml-1 opacity-70">{plan.price.includes('-') ? `- ${plan.price.split('-')[1].trim()}` : ''}</span>
                    </div>
                    <div className="text-sm text-foreground/60 mt-1">{plan.priceNote}</div>
                  </div>

                <Button asChild className={`w-full ${isFeatured ? '' : 'bg-primary/10 text-primary hover:bg-primary/20'}`}>
                  <a href="#contact">Elegir plan</a>
                </Button>
                </div>

                <div className="p-6 relative z-10 border-t border-border">
                  <p className="font-medium mb-4">Para {plan.idealFor.split(',')[0]}</p>
                  <ul className="space-y-3">
                    {plan.services.map((service, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Check size={18} className="text-primary mt-0.5 shrink-0" />
                        <span className="text-sm">{service}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          className="mt-24 max-w-5xl mx-auto px-4"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
            <h2 className="text-4xl md:text-6xl font-extrabold text-center mb-8">
              <span ref={underlineRef} className="section-title-underline">Planes y Precios</span>
            </h2>
           <h3 className="text-2xl font-semibold text-center mb-6">Tabla de Precios de Referencia (Mercado Norteamericano)</h3>
          <p className="text-center font-semibold text-gray-600 mb-8 max-w-3xl mx-auto">
            Esta tabla muestra rangos orientativos basados en nuestro análisis. Los precios finales dependerán de la complejidad y alcance específico de cada proyecto.
          </p>

          <div className="overflow-x-auto rounded-2xl border border-border/30 bg-card/60 backdrop-blur-md shadow-2xl transition-all duration-500 hover:shadow-[0_10px_60px_-10px_rgba(46,104,255,0.3)]">
            <table className="w-full divide-y divide-border text-sm md:text-base">
              <thead>
                <tr className="bg-muted/60 backdrop-blur-lg text-left text-foreground font-semibold">
                  <th className="py-4 px-6">Tipo de Servicio</th>
                  <th className="py-4 px-6 text-right">Rango Orientativo (USD)</th>
                </tr>
              </thead>
              <tbody>
                {referencePrices.map((item, index) => (
                  <tr
                    key={index}
                    className="hover:bg-primary/10 transition-colors duration-300"
                  >
                    <td className="py-4 px-6 text-foreground font-medium">
                      {item.service}
                    </td>
                    <td className="py-4 px-6 text-right text-primary font-bold">
                      {item.range}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-center text-sm text-foreground/50 mt-6 italic">
            *Contáctanos para una cotización personalizada.
          </p>
        </motion.div>
      </div>
    </section> 
    );
};

export default Pricing;
