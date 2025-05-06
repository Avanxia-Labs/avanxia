import { ChevronRight, Home } from 'lucide-react';
import { useGlassCardActiveOnView } from "../hooks/use-section-underline";
import { useEffect, useRef, useState } from 'react';
import { useSectionUnderlineOnView } from "../hooks/use-section-underline";
import { useNavigate } from 'react-router-dom';



const projectDetails: Record<string, string> = {
  '4 CAMINOS': `Para 4 CAMINOS, una productora audiovisual cubana especializada en institucionales y spots, el desafío era claro: destacar en un mercado digital emergente y construir una marca sólida que inspirara confianza. Buscaban una presencia en redes sociales que no solo fuera visible, sino que reflejara prestigio y una calidad superior a la competencia.\nAvanxia asumió el reto desarrollando una estrategia integral de diseño y manejo de redes sociales. Creamos una identidad visual única y distintiva para 4 CAMINOS, asegurando que cada publicación y contenido reflejara profesionalismo y creatividad. No nos limitamos a publicar; implementamos un manejo estratégico que incluyó la optimización SEO de su blog, manteniendo una coherencia estética en todas las plataformas.\nEl principal obstáculo fue navegar las particularidades del mercado cubano, con acceso limitado a internet. Superamos esto mediante un copywriting inteligente, que conectaba con el lenguaje coloquial y familiar del público local, pero sin sacrificar la seriedad y el tono profesional de la productora. El resultado fue un notable aumento en el reconocimiento de la marca 4 CAMINOS, posicionándola como un referente de calidad en su sector.`,
  'APOLO INSURANCE': `Apolo Insurance, operando en Florida, EE. UU., se enfrentaba al desafío de conectar con un público específico y a menudo escéptico: la comunidad inmigrante hispanohablante. Su objetivo principal era facilitar el acceso a beneficios como Medicaid durante los periodos clave de inscripción, demostrando no solo las ventajas del servicio, sino, sobre todo, estableciendo a Apolo Insurance como una entidad confiable en un sector donde la confianza es primordial.\nPara lograrlo, Avanxia desarrolló una estrategia de comunicación integral. Entendiendo que la confianza se construye a través de la coherencia y el profesionalismo, creamos un Manual de Identidad de Marca completo que definió la voz y el estilo visual de Apolo. Este branding se aplicó meticulosamente en tarjetas de presentación y, crucialmente, en una landing page diseñada específicamente para informar y guiar al usuario hispano a través del proceso de solicitud de Medicaid.\nComplementamos la estrategia con la producción de videos y spots para redes sociales, adaptados cultural y lingüísticamente para resonar con la audiencia. El resultado fue la transformación de Apolo Insurance: de ser percibida como un simple vendedor de seguros, pasó a consolidarse como una marca sólida y fiable, equipada con las herramientas necesarias para presentarse con autoridad y generar la confianza indispensable para servir eficazmente a la comunidad hispana de Florida.`,
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
  description: string;
}

const PortfolioCard = ({
  study,
  onClick,
  isActive,
}: {
  study: CaseStudy;
  onClick: () => void;
  isActive: boolean;
}) => {
  const glassRef = useGlassCardActiveOnView<HTMLButtonElement>();


  return (
<button
  ref={glassRef}
  onClick={onClick}
  className={`group relative glass-panel overflow-hidden outline-none w-full h-64 lg:h-96 shrink-0 snap-center transition-all duration-500 ease-in-out ${
    isActive ? "scale-105 z-20" : "scale-90 opacity-70"
  }`}
>
  {/* Imagen de fondo */}
  <div className="absolute inset-0">
    <img
      src={study.imageUrl}
      alt={study.title}
      className="w-full h-full object-cover"
      loading="lazy"
    />
  </div>

  {/* Contenido sobre la imagen */}
  <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 space-y-2">
    <h3 className="text-white font-bold text-[clamp(1.5rem,2vw,1.25rem)] leading-snug">
      {study.title}
    </h3>
    <p className="text-white text-[clamp(0.65rem,1.5vw,0.85rem)] font-medium opacity-90 max-w-sm">
    {study.description}
    </p>
    <span className="mt-1 bg-white text-black px-3 py-1.5 rounded-full text-xs font-semibold transition group-hover:bg-gray-200">
      Explorar este proyecto
    </span>
  </div>
</button>

     );
};

const GlowButton = ({ children, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) => (
  <button
    {...props}
    className="relative inline-flex items-center justify-center gap-2 px-5 py-3 font-semibold text-white rounded-full
               bg-gradient-to-br from-sky-500 to-indigo-600 shadow-lg overflow-hidden
               before:absolute before:inset-0 before:bg-white/20 before:opacity-0
               hover:before:opacity-100 before:transition-opacity before:duration-300"
  >
    {children}
  </button>
);

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState<CaseStudy | null>(null);
  const underlineRef = useSectionUnderlineOnView<HTMLSpanElement>();
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const navigate = useNavigate();



  const caseStudies: CaseStudy[] = [
    {
      id: 1,
      client: 'Pool Quality Solutions',
      location: 'EE. UU.',
      serviceType: 'Diseño Web',
      title: 'Contamos tu historia con poder visual.',
      description: 'Creamos proyectos que comunican, impactan y conectan, combinando creatividad y tecnología para dar vida a tus ideas.',
      challenge: 'Establecer una presencia online profesional para una empresa de servicios en EE. UU., generando confianza y facilitando el contacto.',
      solution: 'Diseño y desarrollo de un sitio web de 5 páginas utilizando tecnologías modernas (React/Next.js), con un enfoque en diseño limpio, atractivo y responsivo. Se incluyó formulario de contacto y optimización SEO básica.',
      result: 'Cliente satisfecho que procedió a contratar servicios adicionales. El sitio web sirve como base para futuras estrategias de marketing digital.',
      resourcesPath: '/home/ubuntu/avanxia_portfolio_resources/avanxia_info/CLIENTES PASADOS/POOL QUALITY SOLUTIONS/WEB/',
      imageUrl: '/images/portfolio/proyectos/contamos_historia.png',
    },
    {
      id: 2,
      client: 'GYB Connect',
      location: 'N/A',
      serviceType: 'UI/UX',
      title: 'EVEMUNDO',
      description: 'Construimos la identidad y comunicación de Apolo Insurance para conectar con la comunidad hispana y posicionarla como una marca confiable en el sector de seguros.',
      challenge: 'Diseñar la interfaz de usuario (UI/UX) para una nueva plataforma financiera competitiva, asegurando una experiencia intuitiva y profesional.',
      solution: 'Diseño completo de UI/UX para la plataforma web, incluyendo flujos de usuario, sistema de diseño, gestión de perfiles, planes de pago, reportes y configuración.',
      result: 'Diseño de interfaz listo para la implementación del frontend, sentando las bases para una plataforma financiera robusta.',
      resourcesPath: '/home/ubuntu/avanxia_portfolio_resources/avanxia_info/CLIENTES PASADOS/GYB/',
      imageUrl: '/images/portfolio/proyectos/evemundo.png'
    },
    {
      id: 3,
      client: 'Autism 911',
      location: 'N/A',
      serviceType: 'UI/UX, Marketing Visual',
      title: 'GYB',
      description: 'Creamos la identidad y sitio web de GYB Connect, una fintech moderna enfocada en destacar claridad y confianza en servicios financieros.',
      challenge: 'Comunicar un mensaje dual de empatía y seguridad a través de la identidad visual y materiales de marketing para una aplicación móvil sensible.',
      solution: 'Diseño UI/UX de la app móvil (modos claro/oscuro). Creación de spots, anuncios y publicaciones para redes sociales equilibrando ternura y profesionalismo.',
      result: 'Materiales visuales que reflejan la esencia del proyecto, ayudando a conectar con la comunidad y proyectar competencia.',
      resourcesPath: '/home/ubuntu/avanxia_portfolio_resources/avanxia_info/CLIENTES PASADOS/AUTISM 911/',
      imageUrl: '/images/portfolio/proyectos/gyb.png'
    },
    {
      id: 4,
      client: 'Evemundo',
      location: 'Suiza',
      serviceType: 'Branding, Diseño Web, Video',
      title: 'DRIVERS COLLISION CENTER',
      description: 'Desarrollamos contenido visual impactante para posicionar a Drivers como una solución rápida y confiable tras un accidente.',
      challenge: 'Crear desde cero dos plataformas digitales interconectadas (red social y directorio) con identidades distintas pero coherentes para el mercado suizo.',
      solution: 'Branding completo, diseño y desarrollo web para ambas plataformas, producción de video promocional y diseño de tarjetas. Directorio con funcionalidades específicas.',
      result: 'Lanzamiento exitoso de dos plataformas digitales funcionales y visualmente atractivas en el mercado suizo.',
      resourcesPath: '/home/ubuntu/avanxia_portfolio_resources/avanxia_info/CLIENTES PASADOS/EVEMUNDO/',
      imageUrl: '/images/portfolio/proyectos/drives.png'
    },
    {
      id: 5,
      client: 'Heromatic',
      location: 'N/A',
      serviceType: 'Diseño Web',
      title: 'DRIVERS COLLISION CENTER',
      description: 'Desarrollamos contenido visual impactante para posicionar a Drivers como una solución rápida y confiable tras un accidente.',
      challenge: 'Crear un sitio web que reflejara solidez y modernidad industrial, comunicando confianza y capacidad tecnológica.',
      solution: 'Diseño y desarrollo de sitio web con estética industrial moderna, elementos visuales fuertes y estructura clara.',
      result: 'Un sitio web profesional y robusto que posiciona a Heromatic como actor relevante en su sector.',
      resourcesPath: '/home/ubuntu/avanxia_portfolio_resources/avanxia_info/CLIENTES PASADOS/HEROMATIC/',
      imageUrl: '/images/portfolio/proyectos/pool.png',
    },
    {
      id: 6,
      client: '4 CAMINOS',
      location: 'Cuba',
      serviceType: 'Redes Sociales, Branding, SEO',
      title: 'HEROMATIC',
      description: 'Creamos el nombre, identidad visual y ecosistema digital de Heromatic, posicionándolos como los héroes de la automatización empresarial.',
      challenge: 'Destacar en el mercado digital cubano emergente, construir marca sólida, reflejar prestigio y superar limitaciones de acceso a internet.',
      solution: 'Estrategia integral de diseño y manejo de redes sociales, identidad visual única, optimización SEO de blog, copywriting adaptado.',
      result: 'Notable aumento en el reconocimiento de la marca, posicionándola como referente de calidad en su sector en Cuba.',
      resourcesPath: '/home/ubuntu/avanxia_portfolio_resources/avanxia_info/CLIENTES PASADOS/4 CAMINOS/',
      imageUrl: '/images/portfolio/proyectos/HEROMATIC.png',
    },
    {
      id: 7,
      client: 'Apolo Insurance',
      location: 'EE. UU.',
      serviceType: 'Branding, Landing Page, Video',
      title: 'SMART POWER ELECTRIC',
      description: 'Renovamos la imagen y sitio web de Smart Power Electric para destacar su experiencia y claridad en instalaciones eléctricas.',
      challenge: 'Conectar con la comunidad inmigrante hispanohablante, facilitar acceso a Medicaid y establecer confianza.',
      solution: 'Manual de Identidad de Marca, tarjetas, landing page para Medicaid, videos y spots adaptados culturalmente.',
      result: 'Transformación de la percepción de la marca, consolidándose como sólida y fiable para la comunidad hispana de Florida.',
      resourcesPath: '/home/ubuntu/avanxia_portfolio_resources/avanxia_info/CLIENTES PASADOS/APOLO INSURANCE/',
      imageUrl: '/images/portfolio/proyectos/SMARTPOWE.png',
    },
    {
      id: 8,
      client: 'Belle Renova Institute',
      location: 'N/A',
      serviceType: 'Diseño Web, Branding, Video',
      title: 'Traduciendo Conceptos en Lujo Visual',
      description: '',
      challenge: 'Posicionarse en el segmento premium, crear identidad visual que irradiara lujo, exclusividad y resultados.',
      solution: 'Diseño integral: logo sofisticado, diseño web responsivo (UI/UX), producción de videos para redes sociales.',
      result: 'Presencia digital coherente y lujosa, alineada con las aspiraciones del cliente y su público premium.',
      resourcesPath: '/home/ubuntu/avanxia_portfolio_resources/avanxia_info/CLIENTES PASADOS/BELLE RENOVA/',
      imageUrl: '/assets/portfolio/bellerenova/WEB.jpg',
    },
    {
      id: 9,
      client: 'ByG Digital Marketing',
      location: 'EE. UU.',
      serviceType: 'Branding',
      title: 'Diseño de Identidad para Agencia Emergente',
      description: '',
      challenge: 'Crear identidad visual (logo) que proyectara exclusividad y lujo para atraer clientela de alto perfil.',
      solution: 'Diseño de logotipo minimalista y osado, diseño de tarjetas de presentación distintivas.',
      result: 'Identidad visual cohesiva y sofisticada, posicionando a ByG con imagen de altura y calidad.',
      resourcesPath: '/home/ubuntu/avanxia_portfolio_resources/avanxia_info/CLIENTES PASADOS/BYG/',
      imageUrl: '/assets/portfolio/bygdigitalmarketing/LOGO MOCKUP.jpg',
    },
    {
      id: 10,
      client: 'DEW Marketing',
      location: 'EE. UU.',
      serviceType: 'Branding',
      title: 'Visualizando la Revitalización del Negocio',
      description: '',
      challenge: 'Crear identidad visual encapsulando la metáfora del "rocío" (Dew) que revitaliza negocios.',
      solution: 'Diseño de logotipo evocando sutileza y poder revitalizante, extensión a materiales gráficos (flyers).',
      result: 'Identidad de marca estéticamente agradable que comunica eficazmente la propuesta de valor.',
      resourcesPath: '/home/ubuntu/avanxia_portfolio_resources/avanxia_info/CLIENTES PASADOS/DEW MARKETING/',
      imageUrl: '/assets/portfolio/dewmarketing/LOGO 2.jpg',
    },
    {
      id: 11,
      client: 'Digital Lifestyle Designs',
      location: 'EE. UU.',
      serviceType: 'Diseño Web (UI/UX)',
      title: 'Reflejando Vanguardia Tecnológica en la Web',
      description: '',
      challenge: 'Diseñar experiencia web que declarara liderazgo tecnológico e infundiera confianza en soluciones de vanguardia.',
      solution: 'Diseño web (UI/UX) utilizando estilo glassmorphism para comunicar innovación y sofisticación.',
      result: 'Sitio web visualmente impactante y tecnológicamente avanzado en su presentación.',
      resourcesPath: '/home/ubuntu/avanxia_portfolio_resources/avanxia_info/CLIENTES PASADOS/DIGITAL LIFESTYLE DESIGNS/',
      imageUrl: '/assets/portfolio/digitallifestyledesigns/Desktop - HOME.png',
    },
    {
      id: 12,
      client: 'Drivers Collision Center',
      location: 'N/A',
      serviceType: 'Redes Sociales, Contenido Visual',
      title: 'Acción y Fortaleza en Redes Sociales',
      description: '',
      challenge: 'Posicionar la marca en redes como apoyo sólido y resolutivo tras accidentes, evocando acción y confianza.',
      solution: 'Contenido para anuncios y redes con estilo visual y narrativo más agresivo y fuerte (edición rápida, alto impacto).',
      result: 'Comunicación efectiva de la fortaleza y capacidad de respuesta del taller a través de carruseles y videos.',
      resourcesPath: '/home/ubuntu/avanxia_portfolio_resources/avanxia_info/CLIENTES PASADOS/DRIVERS COLLISION CENTER/',
      imageUrl: '/assets/portfolio/driverscollisioncenter/1.png',
    },
    {
      id: 13,
      client: 'Engadi Costa Farm',
      location: 'N/A',
      serviceType: 'UI/UX',
      title: 'Rediseñando la Automatización Agrícola con UX Centrada en el Usuario',
      description: '',
      challenge: 'Modernizar plataforma obsoleta, creando suite de apps intuitivas para gestión agrícola compleja.',
      solution: 'Diseño integral (UI/UX) de la nueva suite, colaboración con desarrollo, QA, librería de iconos personalizados.',
      result: 'Flujos de trabajo más eficientes y amigables, reemplazo exitoso de software anticuado, mejora drástica de productividad.',
      resourcesPath: '/home/ubuntu/avanxia_portfolio_resources/avanxia_info/CLIENTES PASADOS/ENGADI COSTA FARM/',
      imageUrl: '/assets/portfolio/engadicostafarm/RAL PHOTO OPERATOR USING THE APP.png',
    },
    {
      id: 14,
      client: 'TSC',
      location: 'Suiza',
      serviceType: 'Video Promocional, Seguridad',
      title: 'Comunicación Visual para Seguridad Privada',
      description: '',
      challenge: 'Capturar la esencia de una empresa de seguridad privada, transmitiendo confianza y profesionalismo a través de video y otros materiales.',
      solution: 'Producción de spot/video promocional dinámico, diseño de trípticos y wallpapers, adaptando el mensaje visual a diferentes formatos (totem, redes sociales).',
      result: 'Materiales visuales efectivos para promocionar los servicios de seguridad, reflejando la seriedad y capacidad de la empresa.',
      resourcesPath: '/home/ubuntu/avanxia_portfolio_resources/avanxia_info/CLIENTES PASADOS/TSC/',
      imageUrl: '/assets/portfolio/tsc/IMG_0387 cuadrado.png',
    },
  ];

  const handleOpenDetail = (study: CaseStudy) => {
    if (study.title.toLowerCase().includes('evemundo')) {
      navigate('/evemundo');
    } else {
      setSelectedProject(study);
      window.scrollTo(0, 0);
    }
  };
  

  const handleCloseDetail = () => {
    setSelectedProject(null);
  };
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;
  
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      if (isAnimatingRef.current) return;
  
      const direction = e.deltaY > 0 ? 1 : -1;
      const newIndex = activeIndex + direction;
  
      if (newIndex >= 0 && newIndex < caseStudies.length) {
        setActiveIndex(newIndex);
        isAnimatingRef.current = true;
        setTimeout(() => {
          isAnimatingRef.current = false;
        }, 700); // igual al duration-700
      } else {
        // permite salir
        window.scrollBy({ top: 200 * direction, behavior: 'smooth' });
      }
    };
  
    container.addEventListener("wheel", handleWheel, { passive: false });
    return () => container.removeEventListener("wheel", handleWheel);
  }, [activeIndex]);
  

  const isAnimatingRef = useRef(false);
  

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let isAnimating = false;
    let isInViewport = false;

    const observer = new IntersectionObserver(
      ([entry]) => {
        isInViewport = entry.isIntersecting;

        if (isInViewport) {
          document.body.style.overflowY = 'scroll'; // mantiene el scroll visible
          document.body.style.overscrollBehavior = 'none'; // previene scroll fantasma
          document.body.style.position = 'relative'; // evita saltos
        } else {
          document.body.style.overflowY = '';
          document.body.style.overscrollBehavior = '';
          document.body.style.position = '';
        }
        
      },
      { threshold: 0.6 }
    );

    observer.observe(container);

    const onWheel = (e: WheelEvent) => {
      if (!isInViewport || isAnimating) return;

      e.preventDefault();
      const direction = e.deltaY > 10 ? 1 : e.deltaY < -10 ? -1 : 0;
      if (direction === 0) return;

      const nextIndex = activeIndex + direction;

      if (nextIndex >= 0 && nextIndex < caseStudies.length) {
        isAnimating = true;
        setActiveIndex(nextIndex);

        setTimeout(() => {
          isAnimating = false;
          container.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 500);
      } else {
        document.body.style.overflowY = 'scroll';
        window.scrollBy({ top: direction * 300, behavior: 'smooth' });
      }
    };

    container.addEventListener("wheel", onWheel, { passive: false });

    return () => {
      observer.disconnect();
      container.removeEventListener("wheel", onWheel);
      document.body.style.overflowY = 'scroll';
    };
  }, [activeIndex]);
      return (
    <section
        id="portfolio"
        className="w-full py-16 bg-gray-50 relative"
        style={{ minHeight: '100vh', scrollSnapAlign: 'start', zIndex: 10 }}
      >
     <div className="container mx-auto px-4">
        {!selectedProject ? (
          <>
            <h2 className="text-4xl md:text-6xl font-extrabold text-center mb-8">
              <span ref={underlineRef} className="section-title-underline">Nuestro Trabajo Habla por Sí Mismo</span>
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
              Estamos orgullosos de las soluciones digitales que hemos creado para nuestros clientes. Aquí presentamos una selección de proyectos que demuestran nuestra capacidad para combinar estrategia, diseño y tecnología para obtener resultados excepcionales.
            </p>

            <div
              className="relative min-h-[80vh] w-full flex flex-col items-center justify-center overflow-hidden"
              ref={scrollRef}
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-[70vh]">
                  {caseStudies
                  .slice(Math.max(0, activeIndex - 1), activeIndex + 2)
                  .map((study, idx) => {
                    const relativeIndex = idx + Math.max(0, activeIndex - 1);
                    const offset = relativeIndex - activeIndex;

                    return (
                      <div
                        key={study.id}
                        className={`absolute left-1/2 top-1/2 w-full max-w-4xl transition-transform duration-700 ease-in-out`} 
                          style={{
                          transform: `translate(-50%, calc(-50% + ${offset * 160}px)) scale(${offset === 0 ? 1.1 : 0.85})`,
                          opacity: offset === 0 ? 1 : 0.5,
                          zIndex: 10 - Math.abs(offset)
                        }}
                      >
                        <PortfolioCard
                          study={study}
                          onClick={() => handleOpenDetail(study)}
                          isActive={offset === 0}
                        />
                      </div>
                    );
                  })}
              </div>
            </div>
            <div className="h-[10vh] w-full" />
            <div className="text-center mt-12">
              <a href="#contact">
                <GlowButton>¿Te gusta lo que ves? Discute tu proyecto</GlowButton>
              </a>
            </div>
          </>
        ) : (
          <div className="animate-fade-in">
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
