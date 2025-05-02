import { useSectionUnderlineOnView } from "../hooks/use-section-underline";

const Services = () => {
  const servicesList = [
    {
      title: 'Branding e Identidad Corporativa',
      description: 'Creamos marcas memorables. Desde el naming y diseño de logotipo hasta el desarrollo de un manual de marca completo que guíe la comunicación visual de tu empresa.',
    },
    {
      title: 'Diseño y Desarrollo Web',
      description: 'Construimos sitios web modernos, rápidos y optimizados. Nos especializamos en tecnologías como React/Next.js y NestJS para ofrecer un rendimiento superior. Priorizamos código a medida desplegado en plataformas de alto rendimiento como Vercel. Solo consideramos WordPress como alternativa si las necesidades específicas del cliente así lo exigen.',
    },
    {
      title: 'Desarrollo de Aplicaciones Web y Móviles',
      description: 'Transformamos tus ideas en aplicaciones funcionales y escalables. Desarrollamos soluciones full-stack y serverless adaptadas a tus necesidades específicas.',
    },
    {
      title: 'Gestión de Redes Sociales',
      description: 'Maximizamos tu presencia en redes sociales con un estilo único que te convierta en referente en tu nicho. Te guiamos en todo el proceso, desde la estrategia de contenido hasta la gestión de comunidades y la creación de publicaciones atractivas, enfocándonos en generar leads orgánicos.',
    },
    {
      title: 'Publicidad Pagada (Paid Media)',
      description: 'Aumentamos tu visibilidad y generamos leads cualificados a través de campañas de publicidad efectivas en Google Ads, Meta Ads, LinkedIn Ads y TikTok Ads. Opcionalmente, podemos gestionar el proceso inicial de contacto con los prospectos para filtrar y cualificarlos, entregándote citas listas para cerrar.',
    },
    {
      title: 'SEO y Marketing de Contenidos',
      description: 'Mejoramos tu posicionamiento orgánico en buscadores. Creamos contenido relevante (blogs, copy web), optimizamos tu sitio (on-page) y construimos enlaces de calidad (off-page).',
    },
    {
      title: 'Email Marketing y Automatización',
      description: 'Creamos y gestionamos campañas de email marketing para nutrir leads y fidelizar clientes. Implementamos flujos de automatización utilizando herramientas como HubSpot, Mailchimp o Brevo.',
    },
    {
      title: 'Producción Audiovisual',
      description: 'Damos vida a tu marca con contenido visual único y original. Creamos fotografía de producto, videos corporativos, motion graphics y spots publicitarios utilizando tus propias imágenes, IA entrenada con tu estilo, o incluso sesiones fotográficas dedicadas (disponible en México).',
    },
    {
      title: 'Impresión y Material POP',
      description: 'Complementamos tu estrategia digital con materiales impresos de alta calidad, desde tarjetas de presentación hasta elementos para puntos de venta (POP).',
    },
    {
      title: 'Mantenimiento y Soporte Web',
      description: 'Ofrecemos dos opciones: Plan Completo ($50 USD/mes: hosting, dominio hasta $12/año, actualizaciones menores) y Plan Básico ($35 USD/mes: hosting, dominio hasta $12/año, solo para webs hechas por Avanxia).',
    },
  ];

  const underlineRef = useSectionUnderlineOnView<HTMLSpanElement>();

  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-6xl font-extrabold text-center mb-8">
          <span ref={underlineRef} className="section-title-underline">Nuestros Servicios 360° para Impulsar tu Negocio</span>
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          En Avanxia Labs, ofrecemos una gama completa de servicios digitales diseñados para cubrir todas las necesidades de tu negocio online. Desde la creación de tu marca hasta la ejecución de campañas de marketing avanzadas, nuestro equipo multidisciplinario está listo para ayudarte a alcanzar tus objetivos.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">{index + 1}. {service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a 
            href="#contact" // Link to contact section later
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded transition duration-300 mr-4"
          >
            Contacta con nosotros
          </a>
          <a 
            href="#pricing" // Link to pricing section later
            className="bg-gray-700 hover:bg-gray-800 text-white font-bold py-3 px-6 rounded transition duration-300"
          >
            Consulta nuestros planes
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;

