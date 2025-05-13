import { useSectionUnderlineOnView } from "../hooks/use-section-underline";
import { Check } from "lucide-react";

const Pricing = () => {
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
        {/* Modern, Clean Pricing Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-2">Pricing Plans</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span ref={underlineRef}>Elige el plan perfecto para tu negocio</span>
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            El servicio de <strong>Branding e Identidad Corporativa</strong> se cotiza por separado. Consulta por descuentos en servicios adicionales al contratar planes superiores.
          </p>
        </div>

        {/* Modern Card Layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {plans.map((plan, index) => {
            // Determine if this is the featured plan (for this example, let's mark Growth Leads as featured)
            const isFeatured = plan.name === 'Growth Leads';
            
            return (
              <div key={index} className={`relative glass-panel overflow-hidden ${isFeatured ? 'border-primary/50' : ''} group`}>
                {/* Highlight badge for featured plan */}
                {isFeatured && (
                  <div className="absolute top-0 inset-x-0">
                    <div className="bg-amber-400 text-amber-950 text-sm font-medium py-1 px-4 rounded-b-lg mx-auto w-fit shadow-sm">
                      Best Value
                    </div>
                  </div>
                )}
                
                {/* Card header */}
                <div className={`relative z-10 p-6 pt-${isFeatured ? '12' : '6'}`}>
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-sm text-foreground/60 h-12">{plan.objective}</p>
                  
                  {/* Pricing */}
                  <div className="mt-6 mb-6">
                    <div className="text-3xl font-bold">
                      {plan.price.includes('-') ? plan.price.split('-')[0].trim() : plan.price}
                      <span className="text-lg ml-1 opacity-70">{plan.price.includes('-') ? `- ${plan.price.split('-')[1].trim()}` : ''}</span>
                    </div>
                    <div className="text-sm text-foreground/60 mt-1">{plan.priceNote}</div>
                  </div>
                  
                  {/* CTA Button */}
                  <button className={`w-full py-3 px-4 rounded-lg font-medium transition-all ${isFeatured ? 'bg-primary text-white hover:bg-primary/90' : 'bg-primary/10 text-primary hover:bg-primary/20'}`}>
                    Elegir plan
                  </button>
                </div>
                
                {/* Features section */}
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
              </div>
            );
          })}
        </div>
        
        {/* Reference Prices Table with updated styling */}
        <div className="mt-24 max-w-5xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-3">Tabla de Precios de Referencia</h3>
          <p className="text-center text-foreground/70 mb-8 max-w-3xl mx-auto">
            Rangos orientativos basados en el mercado norteamericano. Los precios finales dependerán de la complejidad y alcance de cada proyecto.
          </p>
          <div className="overflow-x-auto bg-card/30 rounded-xl p-1 border border-border/50">
            <table className="w-full">
              <thead>
                <tr className="bg-muted/50 text-foreground">
                  <th className="text-left py-3 px-4 font-medium rounded-l-lg">Tipo de Servicio</th>
                  <th className="text-right py-3 px-4 font-medium rounded-r-lg">Rango Orientativo (USD)</th>
                </tr>
              </thead>
              <tbody>
                {referencePrices.map((item, index) => (
                  <tr key={index} className="hover:bg-muted/30 transition-colors border-b border-border/50 last:border-0">
                    <td className="py-3 px-4 text-foreground">{item.service}</td>
                    <td className="py-3 px-4 text-foreground font-medium text-right">{item.range}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-center text-sm text-foreground/50 mt-4">*Contáctanos para una cotización personalizada.</p>
        </div>

      </div>
    </section>
  );
};

export default Pricing;
