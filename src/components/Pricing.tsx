import React from 'react';

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
  ];

  return (
    <section id="pricing" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Planes y Precios</h2>

        {/* Reference Prices Table */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-center mb-6">Tabla de Precios de Referencia (Mercado Norteamericano)</h3>
          <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
            Esta tabla muestra rangos orientativos basados en nuestro análisis. Los precios finales dependerán de la complejidad y alcance específico de cada proyecto.
          </p>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200 mx-auto max-w-4xl">
              <thead>
                <tr className="bg-gray-100 border-b">
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">Tipo de Servicio</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">Rango Orientativo (USD)</th>
                </tr>
              </thead>
              <tbody>
                {referencePrices.map((item, index) => (
                  <tr key={index} className="border-b hover:bg-gray-50">
                    <td className="py-3 px-4 text-gray-800">{item.service}</td>
                    <td className="py-3 px-4 text-gray-600">{item.range}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
           <p className="text-center text-sm text-gray-500 mt-4">*Contáctanos para una cotización personalizada.</p>
        </div>

        {/* Avanxia Plans */}
        <div>
          <h3 className="text-2xl font-semibold text-center mb-6">Planes Avanxia</h3>
           <p className="text-center text-gray-600 mb-10 max-w-4xl mx-auto">
             El servicio de <strong>Branding e Identidad Corporativa</strong> se cotiza por separado (con posibles descuentos al contratar un plan superior). Consulta por descuentos en servicios adicionales (ej. mantenimiento) al contratar planes Growth Leads o Full 360°.
           </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {plans.map((plan, index) => (
              <div key={index} className="bg-gray-50 border border-gray-200 rounded-lg shadow-md p-6 flex flex-col">
                <h4 className="text-xl font-bold mb-3 text-blue-700">{plan.name}</h4>
                <p className="text-sm text-gray-500 mb-2"><strong>Objetivo:</strong> {plan.objective}</p>
                <p className="text-sm text-gray-500 mb-4"><strong>Ideal para:</strong> {plan.idealFor}</p>
                <ul className="list-disc list-inside mb-4 text-gray-700 text-sm flex-grow">
                  {plan.services.map((service, i) => (
                    <li key={i}>{service}</li>
                  ))}
                </ul>
                <div className="mt-auto pt-4 border-t border-gray-200">
                  <p className="text-lg font-semibold text-gray-800">{plan.price}</p>
                  <p className="text-sm text-gray-500">{plan.priceNote}</p>
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

