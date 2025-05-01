import React, { useState } from 'react';
import { ChevronRight, Home } from 'lucide-react'; // Import icons for breadcrumbs

// Mapeo de descripciones extendidas por nombre de proyecto
const projectDetails: Record<string, string> = {
  '4 CAMINOS': `Para 4 CAMINOS, una productora audiovisual cubana especializada en institucionales y spots, el desafío era claro: destacar en un mercado digital emergente y construir una marca sólida que inspirara confianza. Buscaban una presencia en redes sociales que no solo fuera visible, sino que reflejara prestigio y una calidad superior a la competencia.\nAvanxia asumió el reto desarrollando una estrategia integral de diseño y manejo de redes sociales. Creamos una identidad visual única y distintiva para 4 CAMINOS, asegurando que cada publicación y contenido reflejara profesionalismo y creatividad. No nos limitamos a publicar; implementamos un manejo estratégico que incluyó la optimización SEO de su blog, manteniendo una coherencia estética en todas las plataformas.\nEl principal obstáculo fue navegar las particularidades del mercado cubano, con acceso limitado a internet. Superamos esto mediante un copywriting inteligente, que conectaba con el lenguaje coloquial y familiar del público local, pero sin sacrificar la seriedad y el tono profesional de la productora. El resultado fue un notable aumento en el reconocimiento de la marca 4 CAMINOS, posicionándola como un referente de calidad en su sector.`,
  'APOLO INSURANCE': `Apolo Insurance, operando en Florida, EE. UU., se enfrentaba al desafío de conectar con un público específico y a menudo escéptico: la comunidad inmigrante hispanohablante. Su objetivo principal era facilitar el acceso a beneficios como Medicaid durante los periodos clave de inscripción, demostrando no solo las ventajas del servicio, sino, sobre todo, estableciendo a Apolo Insurance como una entidad confiable en un sector donde la confianza es primordial.\nPara lograrlo, Avanxia desarrolló una estrategia de comunicación integral. Entendiendo que la confianza se construye a través de la coherencia y el profesionalismo, creamos un Manual de Identidad de Marca completo que definió la voz y el estilo visual de Apolo. Este branding se aplicó meticulosamente en tarjetas de presentación y, crucialmente, en una landing page diseñada específicamente para informar y guiar al usuario hispano a través del proceso de solicitud de Medicaid.\nComplementamos la estrategia con la producción de videos y spots para redes sociales, adaptados cultural y lingüísticamente para resonar con la audiencia. El resultado fue la transformación de Apolo Insurance: de ser percibida como un simple vendedor de seguros, pasó a consolidarse como una marca sólida y fiable, equipada con las herramientas necesarias para presentarse con autoridad y generar la confianza indispensable para servir eficazmente a la comunidad hispana de Florida.`,
  // ...agrega el resto de los proyectos aquí...
};

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
      imageUrl: '/images/portfolio/poolquality/HOME.jpg',
    },
    {
      id: 2,
      client: 'GYB Connect',
      location: 'N/A',
      serviceType: 'UI/UX',
      title: 'Diseño de Plataforma Financiera Compleja',
      challenge: 'Diseñar la interfaz de usuario (UI/UX) para una nueva plataforma financiera competitiva, asegurando una experiencia intuitiva y profesional.',
      solution: 'Diseño completo de UI/UX para la plataforma web, incluyendo flujos de usuario, sistema de diseño, gestión de perfiles, planes de pago, reportes y configuración.',
      result: 'Diseño de interfaz listo para la implementación del frontend, sentando las bases para una plataforma financiera robusta.',
      resourcesPath: '/home/ubuntu/avanxia_portfolio_resources/avanxia_info/CLIENTES PASADOS/GYB/',
      imageUrl: '/images/portfolio/gyb/HOME.png',
    },
    // ...rest of the case studies...
  ];

  const [selectedProject, setSelectedProject] = useState<any>(null);

  const handleOpenDetail = (study: any) => {
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

