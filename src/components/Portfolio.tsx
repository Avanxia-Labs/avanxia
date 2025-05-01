import { useState } from 'react';
import { ChevronRight, Home } from 'lucide-react'; // Import icons for breadcrumbs

// Mapeo de descripciones extendidas por nombre de proyecto
const projectDetails: Record<string, string> = {
  '4 CAMINOS': `Para 4 CAMINOS, una productora audiovisual cubana especializada en institucionales y spots, el desafío era claro: destacar en un mercado digital emergente y construir una marca sólida que inspirara confianza. Buscaban una presencia en redes sociales que no solo fuera visible, sino que reflejara prestigio y una calidad superior a la competencia.\nAvanxia asumió el reto desarrollando una estrategia integral de diseño y manejo de redes sociales. Creamos una identidad visual única y distintiva para 4 CAMINOS, asegurando que cada publicación y contenido reflejara profesionalismo y creatividad. No nos limitamos a publicar; implementamos un manejo estratégico que incluyó la optimización SEO de su blog, manteniendo una coherencia estética en todas las plataformas.\nEl principal obstáculo fue navegar las particularidades del mercado cubano, con acceso limitado a internet. Superamos esto mediante un copywriting inteligente, que conectaba con el lenguaje coloquial y familiar del público local, pero sin sacrificar la seriedad y el tono profesional de la productora. El resultado fue un notable aumento en el reconocimiento de la marca 4 CAMINOS, posicionándola como un referente de calidad en su sector.`,
  'APOLO INSURANCE': `Apolo Insurance, operando en Florida, EE. UU., se enfrentaba al desafío de conectar con un público específico y a menudo escéptico: la comunidad inmigrante hispanohablante. Su objetivo principal era facilitar el acceso a beneficios como Medicaid durante los periodos clave de inscripción, demostrando no solo las ventajas del servicio, sino, sobre todo, estableciendo a Apolo Insurance como una entidad confiable en un sector donde la confianza es primordial.\nPara lograrlo, Avanxia desarrolló una estrategia de comunicación integral. Entendiendo que la confianza se construye a través de la coherencia y el profesionalismo, creamos un Manual de Identidad de Marca completo que definió la voz y el estilo visual de Apolo. Este branding se aplicó meticulosamente en tarjetas de presentación y, crucialmente, en una landing page diseñada específicamente para informar y guiar al usuario hispano a través del proceso de solicitud de Medicaid.\nComplementamos la estrategia con la producción de videos y spots para redes sociales, adaptados cultural y lingüísticamente para resonar con la audiencia. El resultado fue la transformación de Apolo Insurance: de ser percibida como un simple vendedor de seguros, pasó a consolidarse como una marca sólida y fiable, equipada con las herramientas necesarias para presentarse con autoridad y generar la confianza indispensable para servir eficazmente a la comunidad hispana de Florida.`,
  // ...agrega el resto de los proyectos aquí...
};

interface CaseStudy {
  id: number;
  client: string;
  location: string;
  serviceType: string;
  title: string;
  challenge: string;
  solution: string;
  result: string;
  resourcesPath: string;
  imageUrl: string;
}

const Portfolio = () => {
  const caseStudies = [
    {
      id: 1,
      client: 'Pool Quality Solutions',
      location: 'EE. UU.',
      serviceType: 'Diseño Web',
      title: 'Diseño Web Moderno y Funcional',
      challenge: 'Establecer una presencia online profesional para una empresa de servicios en EE. UU., generando confianza y facilitando el contacto.',
      solution: 'Diseño y desarrollo de un sitio web de 5 páginas utilizando tecnologías modernas (React/Next.js), con un enfoque en diseño limpio, atractivo y responsivo. Se incluyó formulario de contacto y optimización SEO básica.',
      result: 'Cliente satisfecho que procedió a contratar servicios adicionales. El sitio web sirve como base para futuras estrategias de marketing digital.',
      resourcesPath: '/home/ubuntu/avanxia_portfolio_resources/avanxia_info/CLIENTES PASADOS/POOL QUALITY SOLUTIONS/WEB/',
      imageUrl: 
'/images/portfolio/poolquality/HOME.jpg', // Use actual path
    },
    {
      id: 2,
      client: 'GYB Connect',
      location: 'N/A',
      serviceType: 'UI/UX',
      title: 'Web moderna para Plataforma Financiera Compleja',
      challenge: 'Diseñar la interfaz de usuario (UI/UX) para una nueva plataforma financiera competitiva, asegurando una experiencia intuitiva y profesional.',
      solution: 'Diseño completo de UI/UX para la plataforma web, incluyendo flujos de usuario, sistema de diseño, gestión de perfiles, planes de pago, reportes y configuración.',
      result: 'Diseño de interfaz listo para la implementación del frontend, sentando las bases para una plataforma financiera robusta.',
      resourcesPath: '/home/ubuntu/avanxia_portfolio_resources/avanxia_info/CLIENTES PASADOS/GYB/',
      imageUrl: '/images/portfolio/gyb/HOME.png' // Use actual path
    },
    {
      id: 3,
      client: 'Autism 911',
      location: 'N/A',
      serviceType: 'UI/UX, Marketing Visual',
      title: 'Comunicación Visual Empática y Segura',
      challenge: 'Comunicar un mensaje dual de empatía y seguridad a través de la identidad visual y materiales de marketing para una aplicación móvil sensible.',
      solution: 'Diseño UI/UX de la app móvil (modos claro/oscuro). Creación de spots, anuncios y publicaciones para redes sociales equilibrando ternura y profesionalismo.',
      result: 'Materiales visuales que reflejan la esencia del proyecto, ayudando a conectar con la comunidad y proyectar competencia.',
      resourcesPath: '/home/ubuntu/avanxia_portfolio_resources/avanxia_info/CLIENTES PASADOS/AUTISM 911/',
      imageUrl: '/images/portfolio/autism911/FACEBOOK COVER.png' // Use actual path
    },
    {
      id: 4,
      client: 'Evemundo',
      location: 'Suiza',
      serviceType: 'Branding, Diseño Web, Video',
      title: 'Ecosistema Digital para Eventos y Comunidad Salsera',
      challenge: 'Crear desde cero dos plataformas digitales interconectadas (red social y directorio) con identidades distintas pero coherentes para el mercado suizo.',
      solution: 'Branding completo, diseño y desarrollo web para ambas plataformas, producción de video promocional y diseño de tarjetas. Directorio con funcionalidades específicas.',
      result: 'Lanzamiento exitoso de dos plataformas digitales funcionales y visualmente atractivas en el mercado suizo.',
      resourcesPath: '/home/ubuntu/avanxia_portfolio_resources/avanxia_info/CLIENTES PASADOS/EVEMUNDO/',
      imageUrl: '/assets/portfolio/evemundo/HOME.png' // Use actual path
    },
    {
      id: 5,
      client: 'Heromatic',
      location: 'N/A',
      serviceType: 'Diseño Web',
      title: 'Diseño Web Industrial y Moderno',
      challenge: 'Crear un sitio web que reflejara solidez y modernidad industrial, comunicando confianza y capacidad tecnológica.',
      solution: 'Diseño y desarrollo de sitio web con estética industrial moderna, elementos visuales fuertes y estructura clara.',
      result: 'Un sitio web profesional y robusto que posiciona a Heromatic como actor relevante en su sector.',
      resourcesPath: '/home/ubuntu/avanxia_portfolio_resources/avanxia_info/CLIENTES PASADOS/HEROMATIC/',
      imageUrl: 
'/assets/portfolio/heromatic/HOME.jpg', // Use actual path
    },
     {
      id: 6,
      client: '4 CAMINOS',
      location: 'Cuba',
      serviceType: 'Redes Sociales, Branding, SEO',
      title: 'Redefiniendo la Presencia Digital Audiovisual en Cuba',
      challenge: 'Destacar en el mercado digital cubano emergente, construir marca sólida, reflejar prestigio y superar limitaciones de acceso a internet.',
      solution: 'Estrategia integral de diseño y manejo de redes sociales, identidad visual única, optimización SEO de blog, copywriting adaptado.',
      result: 'Notable aumento en el reconocimiento de la marca, posicionándola como referente de calidad en su sector en Cuba.',      resourcesPath: 
'/home/ubuntu/avanxia_portfolio_resources/avanxia_info/CLIENTES PASADOS/4 CAMINOS/',
      imageUrl: 
'/assets/portfolio/4caminos/Blog REALIDAD AUMENTADA REDES SOCIALES.png', // Use actual path
    },
    {
      id: 7,
      client: 'Apolo Insurance',
      location: 'EE. UU.',
      serviceType: 'Branding, Landing Page, Video',
      title: 'Construyendo Confianza en el Mercado Hispano de Seguros',
      challenge: 'Conectar con la comunidad inmigrante hispanohablante, facilitar acceso a Medicaid y establecer confianza.',
      solution: 'Manual de Identidad de Marca, tarjetas, landing page para Medicaid, videos y spots adaptados culturalmente.',
      result: 'Transformación de la percepción de la marca, consolidándose como sólida y fiable para la comunidad hispana de Florida.',
      resourcesPath: '/home/ubuntu/avanxia_portfolio_resources/avanxia_info/CLIENTES PASADOS/APOLO INSURANCE/',
      imageUrl: 
'/assets/portfolio/apoloinsurance/LANDING PAGE DESKTOP AND MOBILE.jpg', // Use actual path
    },
    {
      id: 8,
      client: 'Belle Renova Institute',
      location: 'N/A',
      serviceType: 'Diseño Web, Branding, Video',
      title: 'Traduciendo Conceptos en Lujo Visual',
      challenge: 'Posicionarse en el segmento premium, crear identidad visual que irradiara lujo, exclusividad y resultados.',
      solution: 'Diseño integral: logo sofisticado, diseño web responsivo (UI/UX), producción de videos para redes sociales.',
      result: 'Presencia digital coherente y lujosa, alineada con las aspiraciones del cliente y su público premium.',
      resourcesPath: 
'/home/ubuntu/avanxia_portfolio_resources/avanxia_info/CLIENTES PASADOS/BELLE RENOVA/',
      imageUrl: 
'/assets/portfolio/bellerenova/WEB.jpg', // Use actual path
    },
    {
      id: 9,
      client: 'ByG Digital Marketing',
      location: 'EE. UU.',
      serviceType: 'Branding',
      title: 'Diseño de Identidad para Agencia Emergente',
      challenge: 'Crear identidad visual (logo) que proyectara exclusividad y lujo para atraer clientela de alto perfil.',
      solution: 'Diseño de logotipo minimalista y osado, diseño de tarjetas de presentación distintivas.',
      result: 'Identidad visual cohesiva y sofisticada, posicionando a ByG con imagen de altura y calidad.',
      resourcesPath: 
'/home/ubuntu/avanxia_portfolio_resources/avanxia_info/CLIENTES PASADOS/BYG/',
      imageUrl: 
'/assets/portfolio/bygdigitalmarketing/LOGO MOCKUP.jpg', // Use actual path
    },
    {
      id: 10,
      client: 'DEW Marketing',
      location: 'EE. UU.',
      serviceType: 'Branding',
      title: 'Visualizando la Revitalización del Negocio',
      challenge: 'Crear identidad visual encapsulando la metáfora del "rocío" (Dew) que revitaliza negocios.',
      solution: 'Diseño de logotipo evocando sutileza y poder revitalizante, extensión a materiales gráficos (flyers).',
      result: 'Identidad de marca estéticamente agradable que comunica eficazmente la propuesta de valor.',
      resourcesPath: '/home/ubuntu/avanxia_portfolio_resources/avanxia_info/CLIENTES PASADOS/DEW MARKETING/',
      imageUrl: '/assets/portfolio/dewmarketing/LOGO 2.jpg', // Use actual path
    },
    {
      id: 11,
      client: 'Digital Lifestyle Designs',
      location: 'EE. UU.',
      serviceType: 'Diseño Web (UI/UX)',
      title: 'Reflejando Vanguardia Tecnológica en la Web',
      challenge: 'Diseñar experiencia web que declarara liderazgo tecnológico e infundiera confianza en soluciones de vanguardia.',
      solution: 'Diseño web (UI/UX) utilizando estilo glassmorphism para comunicar innovación y sofisticación.',
      result: 'Sitio web visualmente impactante y tecnológicamente avanzado en su presentación.',
      resourcesPath: '/home/ubuntu/avanxia_portfolio_resources/avanxia_info/CLIENTES PASADOS/DIGITAL LIFESTYLE DESIGNS/',
      imageUrl: '/assets/portfolio/digitallifestyledesigns/Desktop - HOME.png', // Use actual path
    },
    {
      id: 12,
      client: 'Drivers Collision Center',
      location: 'N/A',
      serviceType: 'Redes Sociales, Contenido Visual',
      title: 'Acción y Fortaleza en Redes Sociales',
      challenge: 'Posicionar la marca en redes como apoyo sólido y resolutivo tras accidentes, evocando acción y confianza.',
      solution: 'Contenido para anuncios y redes con estilo visual y narrativo más agresivo y fuerte (edición rápida, alto impacto).',
      result: 'Comunicación efectiva de la fortaleza y capacidad de respuesta del taller a través de carruseles y videos.',
      resourcesPath: '/home/ubuntu/avanxia_portfolio_resources/avanxia_info/CLIENTES PASADOS/DRIVERS COLLISION CENTER/',
      imageUrl: '/assets/portfolio/driverscollisioncenter/1.png', // Use actual path
    },

    {
      id: 15,
      client: 'Engadi Costa Farm',
      location: 'N/A',
      serviceType: 'UI/UX',
      title: 'Rediseñando la Automatización Agrícola con UX Centrada en el Usuario',
      challenge: 'Modernizar plataforma obsoleta, creando suite de apps intuitivas para gestión agrícola compleja.',
      solution: 'Diseño integral (UI/UX) de la nueva suite, colaboración con desarrollo, QA, librería de iconos personalizados.',
      result: 'Flujos de trabajo más eficientes y amigables, reemplazo exitoso de software anticuado, mejora drástica de productividad.',
      resourcesPath: '/home/ubuntu/avanxia_portfolio_resources/avanxia_info/CLIENTES PASADOS/ENGADI COSTA FARM/',
      imageUrl: '/assets/portfolio/engadicostafarm/RAL PHOTO OPERATOR USING THE APP.png', // Use actual path
    },
    {
      id: 16,
      client: 'TSC',
      location: 'Suiza',
      serviceType: 'Video Promocional, Seguridad',
      title: 'Comunicación Visual para Seguridad Privada',
      challenge: 'Capturar la esencia de una empresa de seguridad privada, transmitiendo confianza y profesionalismo a través de video y otros materiales.',
      solution: 'Producción de spot/video promocional dinámico, diseño de trípticos y wallpapers, adaptando el mensaje visual a diferentes formatos (totem, redes sociales).',
      result: 'Materiales visuales efectivos para promocionar los servicios de seguridad, reflejando la seriedad y capacidad de la empresa.',
      resourcesPath: '/home/ubuntu/avanxia_portfolio_resources/avanxia_info/CLIENTES PASADOS/TSC/',
      imageUrl: '/assets/portfolio/tsc/IMG_0387 cuadrado.png', // Use actual path
    },
    // ...rest of the case studies...
  ];

  const [selectedProject, setSelectedProject] = useState<CaseStudy | null>(null);

  const handleOpenDetail = (study: CaseStudy) => {
    setSelectedProject(study);
    window.scrollTo(0, 0); // Scroll to top when opening detail view
  };

  const handleCloseDetail = () => {
    setSelectedProject(null);
  };

  return (
    <section id="portfolio" className="w-full py-16 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">

        {!selectedProject ? (
          // Grid View
          <>
            <h2 className="text-3xl font-bold text-center mb-4">Nuestro Trabajo Habla por Sí Mismo</h2>
            <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
              Estamos orgullosos de las soluciones digitales que hemos creado para nuestros clientes. Aquí presentamos una selección de proyectos que demuestran nuestra capacidad para combinar estrategia, diseño y tecnología para obtener resultados excepcionales.
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {caseStudies.map((study) => (
                <div key={study.id} className="bg-white rounded-lg shadow-lg overflow-hidden group">
                  <div className="w-full h-48 bg-gray-300 flex items-center justify-center text-gray-500 overflow-hidden">
                    <img 
                      src={study.imageUrl} 
                      alt={study.title} 
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" 
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-gray-800">{study.title}</h3>
                    <p className="text-sm text-blue-600 font-medium mb-3">{study.client} ({study.location}) - {study.serviceType}</p>
                    <button
                      className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors duration-300 text-sm"
                      onClick={() => handleOpenDetail(study)}
                    >
                      Ver detalles del proyecto
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <a 
                href="#contact"
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded transition duration-300"
              >
                ¿Te gusta lo que ves? Discute tu proyecto
              </a>
            </div>
          </>
        ) : (
          // Detail View
          <div className="animate-fade-in">
             {/* Breadcrumbs */}
            <nav className="flex mb-8 text-gray-600" aria-label="Breadcrumb">
              <ol className="inline-flex items-center space-x-1 md:space-x-3">
                <li className="inline-flex items-center">
                  <button
                    onClick={handleCloseDetail}
                    className="inline-flex items-center text-sm font-medium hover:text-blue-600"
                  >
                    <Home className="w-4 h-4 mr-2.5" />
                    Portafolio
                  </button>
                </li>
                <li>
                  <div className="flex items-center">
                    <ChevronRight className="w-4 h-4" />
                    <span className="ml-1 text-sm font-medium md:ml-2">{selectedProject.title}</span>
                  </div>
                </li>
              </ol>
            </nav>

            {/* Project Details Content */}
            <div className="relative w-full mx-auto bg-white rounded-lg shadow-xl p-6 md:p-10">
              <h2 className="text-3xl font-bold mb-6 text-blue-700 text-center">{selectedProject.title}</h2>
              <div className="w-full flex flex-col lg:flex-row gap-8 items-start mb-6">
                <div className="flex-1 lg:flex-[2] flex items-center justify-center">
                  <img
                    src={selectedProject.imageUrl}
                    alt={selectedProject.title}
                    className="w-full max-h-[70vh] object-contain rounded shadow-lg mb-4 lg:mb-0"
                  />
                </div>
                <div className="flex-1 lg:flex-[3] text-gray-700 whitespace-pre-line text-base md:text-lg">
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">Descripción Detallada</h3>
                  {projectDetails[selectedProject.client?.toUpperCase()] || 'Descripción detallada próximamente.'}
                   <div className="mt-6 border-t pt-4 text-sm text-gray-600">
                      <p className="mb-2"><strong className="font-medium text-gray-800">Desafío:</strong> {selectedProject.challenge}</p>
                      <p className="mb-2"><strong className="font-medium text-gray-800">Solución:</strong> {selectedProject.solution}</p>
                      <p><strong className="font-medium text-gray-800">Resultado:</strong> {selectedProject.result}</p>
                   </div>
                </div>
              </div>
              <div className="text-center text-gray-500 text-base border-t pt-4 mt-6">
                <strong>Cliente:</strong> {selectedProject.client} &nbsp;|&nbsp;
                <strong>Ubicación:</strong> {selectedProject.location} &nbsp;|&nbsp;
                <strong>Servicios:</strong> {selectedProject.serviceType}
              </div>
            </div>
             <div className="text-center mt-12">
                <button
                  onClick={handleCloseDetail}
                  className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-3 px-6 rounded transition duration-300"
                >
                  ← Volver al Portafolio
                </button>
              </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;

