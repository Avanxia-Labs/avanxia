import { useSectionUnderlineOnView } from "../hooks/use-section-underline";

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
    <section id="pricing" className="py-16 bg-background text-foreground dark:bg-background dark:text-foreground">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-6xl font-extrabold text-center mb-8">
          <span ref={underlineRef} className="section-title-underline">Planes y Precios</span>
        </h2>

        {/* Reference Prices Table */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-center mb-6 text-foreground">Tabla de Precios de Referencia (Mercado Norteamericano)</h3>
          <p className="text-center text-foreground/70 dark:text-foreground/70 mb-8 max-w-3xl mx-auto">
            Esta tabla muestra rangos orientativos basados en nuestro análisis. Los precios finales dependerán de la complejidad y alcance específico de cada proyecto.
          </p>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-card dark:bg-card border border-border mx-auto max-w-4xl">
              <thead>
                <tr className="bg-card/50 dark:bg-card/50 border-b">
                  <th className="text-left py-3 px-4 font-semibold text-foreground">Tipo de Servicio</th>
                  <th className="text-left py-3 px-4 font-semibold text-foreground">Rango Orientativo (USD)</th>
                </tr>
              </thead>
              <tbody>
                {referencePrices.map((item, index) => (
                  <tr key={index} className="border-b hover:bg-card/10 dark:hover:bg-card/10">
                    <td className="py-3 px-4 text-foreground">{item.service}</td>
                    <td className="py-3 px-4 text-foreground/70 dark:text-foreground/70">{item.range}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-center text-sm text-foreground/50 dark:text-foreground/50 mt-4">*Contáctanos para una cotización personalizada.</p>
        </div>

        {/* Avanxia Plans */}
        <div>
          <h3 className="text-2xl font-semibold text-center mb-6 text-foreground">Planes Avanxia</h3>
          <p className="text-center text-foreground/70 dark:text-foreground/70 mb-10 max-w-4xl mx-auto">
            El servicio de <strong>Branding e Identidad Corporativa</strong> se cotiza por separado (con posibles descuentos al contratar un plan superior). Consulta por descuentos en servicios adicionales (ej. mantenimiento) al contratar planes Growth Leads o Full 360°.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {plans.map((plan, index) => (
              <div key={index} className="bg-card dark:bg-card border border-border rounded-lg shadow p-6 flex flex-col">
                <h4 className="text-xl font-bold mb-3 text-primary">{plan.name}</h4>
                <p className="text-sm text-foreground/70 dark:text-foreground/70 mb-2"><strong>Objetivo:</strong> {plan.objective}</p>
                <p className="text-sm text-foreground/70 dark:text-foreground/70 mb-4"><strong>Ideal para:</strong> {plan.idealFor}</p>
                <ul className="list-disc list-inside mb-4 text-foreground text-sm flex-grow">
                  {plan.services.map((service,i) => <li key={i}>{service}</li>)}
                </ul>
                <div className="mt-auto pt-4 border-t border-border">
                  <p className="text-lg font-semibold text-foreground">{plan.price}</p>
                  <p className="text-sm text-foreground/70 dark:text-foreground/70">{plan.priceNote}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Pricing;
