import { useSectionUnderlineOnView } from "../hooks/use-section-underline";

import { Button } from "./ui/button";
import { SecondaryButton } from "./ui/SecondaryButton";

// Eliminar el hook problemático y el useRef no utilizado
// import { useGlassCardActiveOnView } from "../hooks/use-section-underline";
// import { useRef } from "react";


const Services = () => {
  // Imágenes de Unsplash relacionadas con cada servicio
  const servicesList = [
    {
      title: 'Branding e Identidad Corporativa',
      description: 'Creamos marcas memorables. Desde el naming y diseño de logotipo hasta el desarrollo de un manual de marca completo que guíe la comunicación visual de tu empresa.',
      icon: '🎨',
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Diseño y Desarrollo Web',
      description: 'Construimos sitios web modernos, rápidos y optimizados. Nos especializamos en tecnologías como React/Next.js y NestJS para ofrecer un rendimiento superior.',
      icon: '💻',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Desarrollo de Aplicaciones Web y Móviles',
      description: 'Transformamos tus ideas en aplicaciones funcionales y escalables. Desarrollamos soluciones full-stack y serverless adaptadas a tus necesidades específicas.',
      icon: '📱',
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Gestión de Redes Sociales',
      description: 'Maximizamos tu presencia en redes sociales con un estilo único que te convierta en referente en tu nicho. Te guiamos desde la estrategia hasta la gestión de comunidades.',
      icon: '🌐',
      image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Publicidad Pagada (Paid Media)',
      description: 'Aumentamos tu visibilidad y generamos leads cualificados a través de campañas efectivas en Google Ads, Meta Ads, LinkedIn Ads y TikTok Ads.',
      icon: '📊',
      image: 'https://images.unsplash.com/photo-1453928582365-b6ad33cbcf64?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'SEO y Marketing de Contenidos',
      description: 'Mejoramos tu posicionamiento orgánico en buscadores. Creamos contenido relevante, optimizamos tu sitio y construimos enlaces de calidad.',
      icon: '🔍',
      image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Email Marketing y Automatización',
      description: 'Creamos y gestionamos campañas de email marketing para nutrir leads y fidelizar clientes. Implementamos flujos de automatización con herramientas como HubSpot.',
      icon: '✉️',
      image: 'https://images.unsplash.com/photo-1515168833906-d2a3b82b302b?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Producción Audiovisual',
      description: 'Damos vida a tu marca con contenido visual único y original. Creamos fotografía de producto, videos corporativos, motion graphics y spots publicitarios.',
      icon: '🎬',
      image: 'https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Impresión y Material POP',
      description: 'Complementamos tu estrategia digital con materiales impresos de alta calidad, desde tarjetas de presentación hasta elementos para puntos de venta (POP).',
      icon: '🖨️',
      image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Mantenimiento y Soporte Web',
      description: 'Ofrecemos servicios de mantenimiento técnico, actualizaciones de contenido y soporte continuo para asegurar el óptimo funcionamiento de tu sitio web.',
      icon: '🛠️',
      image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80'
    },
  ];

  // IMPORTANTE: Mantener este hook (error de "Rendered fewer hooks than expected")
  const underlineRef = useSectionUnderlineOnView<HTMLSpanElement>();

  // Categorías simplificadas
  const categories = [
    { id: "branding", title: "Branding & Web", start: 0, end: 3 },
    { id: "marketing", title: "Marketing Digital", start: 3, end: 7 },
    { id: "produccion", title: "Producción & Soporte", start: 7, end: 10 }
  ];

  return (
    <section id="services" className="py-24 bg-background text-foreground">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-6xl font-extrabold text-center mb-8">
          <span ref={underlineRef} className="section-title-underline">Nuestros Servicios 360° para Impulsar tu Negocio</span>
        </h2>
        <p className="text-center text-foreground opacity-90 mb-16 max-w-4xl mx-auto text-lg md:text-2xl">
          En Avanxia Labs, ofrecemos una gama completa de servicios digitales diseñados para cubrir todas las necesidades de tu negocio online. Desde la creación de tu marca hasta la ejecución de campañas de marketing avanzadas, nuestro equipo multidisciplinario está listo para ayudarte a alcanzar tus objetivos.
        </p>

        {/* Navegación de categorías */}
        <div className="hidden md:flex justify-center mb-14 space-x-12">
          {categories.map((cat) => (
            <a 
              key={cat.id}
              href={`#services-${cat.id}`} 
              className="text-xl font-medium text-foreground hover:text-primary transition-colors"
            >
              {cat.title}
            </a>
          ))}
        </div>

          <div className="mt-12 flex justify-center gap-4">
            <Button size="cta" asChild>
              <a href="#contact">Impulsa tus ventas</a>
            </Button>

            <SecondaryButton size="cta" asChild>
              <a href="#pricing">Consulta nuestros planes</a>
            </SecondaryButton>
          </div>


        {/* Secciones de servicios por categoría */}
        {categories.map((category) => (
          <div key={category.id} id={`services-${category.id}`} className="mb-16">
            {/* Título de categoría */}
            <h3 className="text-2xl font-bold mb-8 text-center md:text-left pb-2 border-b border-border">
              {category.title}
            </h3>
            
            {/* Grid de servicios */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {servicesList.slice(category.start, category.end).map((service, index) => {
                // Imagen siempre a la derecha en desktop
                return (
                  <div 
                    key={`${category.id}-service-${index}`}
                    className="glass-panel relative overflow-hidden h-full"
                  >
                    <div className="flex flex-col md:flex-row h-full">
                      {/* Contenido */}
                      <div className="w-full md:w-3/5 p-6 flex flex-col justify-center">
                        <div className="text-3xl text-primary mb-3">{service.icon}</div>
                        <h4 className="text-xl font-bold mb-3 text-foreground">{service.title}</h4>
                        <p className="text-base text-foreground/90 leading-relaxed">{service.description}</p>
                      </div>
                      {/* Imagen */}
                      <div className="w-full md:w-2/5 relative h-48 md:h-auto">
                        <img 
                          src={service.image} 
                          alt={service.title}
                          className="absolute inset-0 w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}

        {/* Botones CTA */}
        <div className="text-center mt-12">
          <a
            href="#contact"
            className="px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold shadow hover:bg-primary/90 transition-colors mr-4"
          >
            Contacta con nosotros
          </a>
          <a
            href="#pricing"
            className="px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold shadow hover:bg-primary/90 transition-colors"
          >
            Consulta nuestros planes
          </a>
        </div>

      </div>
    </section>
  );
};

export default Services;

