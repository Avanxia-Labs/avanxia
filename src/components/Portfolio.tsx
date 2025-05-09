// Portfolio.tsx (estilo encimado al centro tipo carrusel perspectiva)

import { ChevronRight, Home } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation, FreeMode, Autoplay } from 'swiper/modules';
import { motion } from 'framer-motion';
import 'swiper/swiper-bundle.css';
import { useSectionUnderlineOnView } from "../hooks/use-section-underline";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Tilt from 'react-parallax-tilt';



interface CaseStudy {
  id: number;
  client: string;
  location: string;
  serviceType: string;
  title: string;
  slug?: string;
  challenge: string;
  solution: string;
  result: string;
  resourcesPath: string;
  imageUrl: string;
  description: string;
}

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState<CaseStudy | null>(null);
  const underlineRef = useSectionUnderlineOnView<HTMLSpanElement>();
  const navigate = useNavigate();

  const caseStudies: CaseStudy[] = [
    // {
    //   id: 1,
    //   client: 'Pool Quality Solutions',
    //   location: 'EE. UU.',
    //   serviceType: 'Diseño Web',
    //   title: 'Contamos tu historia con poder visual.',
    //   slug:'',
    //   description: 'Creamos proyectos que comunican, impactan y conectan, combinando creatividad y tecnología para dar vida a tus ideas.',
    //   challenge: 'Establecer una presencia online profesional para una empresa de servicios en EE. UU., generando confianza y facilitando el contacto.',
    //   solution: 'Diseño y desarrollo de un sitio web de 5 páginas utilizando tecnologías modernas (React/Next.js), con un enfoque en diseño limpio, atractivo y responsivo. Se incluyó formulario de contacto y optimización SEO básica.',
    //   result: 'Cliente satisfecho que procedió a contratar servicios adicionales. El sitio web sirve como base para futuras estrategias de marketing digital.',
    //   resourcesPath: '/home/ubuntu/avanxia_portfolio_resources/avanxia_info/CLIENTES PASADOS/POOL QUALITY SOLUTIONS/WEB/',
    //   imageUrl: '/images/portfolio/proyectos/contamos_historia.png',
    // },
    {
    id: 2,
    client: 'Autism 911',
    location: 'N/A',
    serviceType: 'UI/UX, Marketing Visual',
    title: 'GYB',
    slug:'gyb',
    description: 'Creamos la identidad y sitio web de GYB Connect, una fintech moderna enfocada en destacar claridad y confianza en servicios financieros.',
    challenge: 'Comunicar un mensaje dual de empatía y seguridad a través de la identidad visual y materiales de marketing para una aplicación móvil sensible.',
    solution: 'Diseño UI/UX de la app móvil (modos claro/oscuro). Creación de spots, anuncios y publicaciones para redes sociales equilibrando ternura y profesionalismo.',
    result: 'Materiales visuales que reflejan la esencia del proyecto, ayudando a conectar con la comunidad y proyectar competencia.',
    resourcesPath: '/home/ubuntu/avanxia_portfolio_resources/avanxia_info/CLIENTES PASADOS/AUTISM 911/',
    imageUrl: '/images/portfolio/proyectos/gyb.png'
    },
    {
    id: 3,
    client: 'Evemundo',
    location: 'Suiza',
    serviceType: 'Branding, Diseño Web, Video',
    title: 'DRIVERS COLLISION CENTER',
    slug:'drivers',
    description: 'Desarrollamos contenido visual impactante para posicionar a Drivers como una solución rápida y confiable tras un accidente.',
    challenge: 'Crear desde cero dos plataformas digitales interconectadas (red social y directorio) con identidades distintas pero coherentes para el mercado suizo.',
    solution: 'Branding completo, diseño y desarrollo web para ambas plataformas, producción de video promocional y diseño de tarjetas. Directorio con funcionalidades específicas.',
    result: 'Lanzamiento exitoso de dos plataformas digitales funcionales y visualmente atractivas en el mercado suizo.',
    resourcesPath: '/home/ubuntu/avanxia_portfolio_resources/avanxia_info/CLIENTES PASADOS/EVEMUNDO/',
    imageUrl: '/images/portfolio/proyectos/drives.png'
    },
    {
    id: 4,
    client: 'Engadi',
    location: 'Suiza',
    serviceType: 'Branding, Diseño Web, Video',
    title: 'ENGADI COSTA FARM',
    slug:'drivers',
    description: 'Modernizamos una plataforma agrícola obsoleta con una suite digital intuitiva que mejora la productividad en invernaderos.',
    challenge: 'Crear desde cero dos plataformas digitales interconectadas (red social y directorio) con identidades distintas pero coherentes para el mercado suizo.',
    solution: 'Branding completo, diseño y desarrollo web para ambas plataformas, producción de video promocional y diseño de tarjetas. Directorio con funcionalidades específicas.',
    result: 'Lanzamiento exitoso de dos plataformas digitales funcionales y visualmente atractivas en el mercado suizo.',
    resourcesPath: '/home/ubuntu/avanxia_portfolio_resources/avanxia_info/CLIENTES PASADOS/EVEMUNDO/',
    imageUrl: '/images/portfolio/proyectos/engadi.png'
    },
    {
    id: 5,
    client: 'Heromatic',
    location: 'N/A',
    serviceType: 'Diseño Web',
    title: ' POOL QUALITY SOLUTIONS',
    slug:'pool',
    description: 'Desarrollamos contenido visual impactante para posicionar a Drivers como una solución rápida y confiable tras un accidente.',
    challenge: 'Crear un sitio web que reflejara solidez y modernidad industrial, comunicando confianza y capacidad tecnológica.',
    solution: 'Diseño y desarrollo de sitio web con estética industrial moderna, elementos visuales fuertes y estructura clara.',
    result: 'Un sitio web profesional y robusto que posiciona a Heromatic como actor relevante en su sector.',
    resourcesPath: '/home/ubuntu/avanxia_portfolio_resources/avanxia_info/CLIENTES PASADOS/HEROMATIC/',
    imageUrl: '/images/portfolio/proyectos/pool.png',
    },
    {
    id: 6,
    client: 'GYB Connect',
    location: 'N/A',
    serviceType: 'UI/UX',
    title: 'EVEMUNDO',
    slug:'evemundo',
    description: 'Construimos la identidad y comunicación de Apolo Insurance para conectar con la comunidad hispana y posicionarla como una marca confiable en el sector de seguros.',
    challenge: 'Diseñar la interfaz de usuario (UI/UX) para una nueva plataforma financiera competitiva, asegurando una experiencia intuitiva y profesional.',
    solution: 'Diseño completo de UI/UX para la plataforma web, incluyendo flujos de usuario, sistema de diseño, gestión de perfiles, planes de pago, reportes y configuración.',
    result: 'Diseño de interfaz listo para la implementación del frontend, sentando las bases para una plataforma financiera robusta.',
    resourcesPath: '/home/ubuntu/avanxia_portfolio_resources/avanxia_info/CLIENTES PASADOS/GYB/',
    imageUrl: '/images/portfolio/proyectos/evemundo.png'
    },
    {
    id: 7,
    client: 'ByG Digital Marketing',
    location: 'EE. UU.',
    serviceType: 'Branding',
    title: '4 CAMINOS',
    slug:'cuatrocaminos',
    description: 'Rediseñamos la imagen digital de 4 CAMINOS para posicionarla como referente audiovisual en Cuba, con una estrategia visual y de contenido adaptada al mercado local.',
    challenge: 'Crear identidad visual (logo) que proyectara exclusividad y lujo para atraer clientela de alto perfil.',
    solution: 'Diseño de logotipo minimalista y osado, diseño de tarjetas de presentación distintivas.',
    result: 'Identidad visual cohesiva y sofisticada, posicionando a ByG con imagen de altura y calidad.',
    resourcesPath: '/home/ubuntu/avanxia_portfolio_resources/avanxia_info/CLIENTES PASADOS/BYG/',
    imageUrl: '/images/portfolio/proyectos/4caminos.png',
    },
    {
    id: 8,
    client: 'Belle Renova Institute',
    location: 'N/A',
    serviceType: 'Diseño Web, Branding, Video',
    title: 'AUTISM 911',
    slug:'autism',
    description: 'Diseñamos la app y comunicación visual de Autism 911 para conectar con empatía a familias y especialistas en autismo, combinando claridad y confianza.',
    challenge: 'Posicionarse en el segmento premium, crear identidad visual que irradiara lujo, exclusividad y resultados.',
    solution: 'Diseño integral: logo sofisticado, diseño web responsivo (UI/UX), producción de videos para redes sociales.',
    result: 'Presencia digital coherente y lujosa, alineada con las aspiraciones del cliente y su público premium.',
    resourcesPath: '/home/ubuntu/avanxia_portfolio_resources/avanxia_info/CLIENTES PASADOS/BELLE RENOVA/',
    imageUrl: '/images/portfolio/proyectos/autism.png',
    },
    {
    id: 9,
    client: 'Apolo Insurance',
    location: 'EE. UU.',
    serviceType: 'Branding, Landing Page, Video',
    title: 'SMART POWER ELECTRIC',
    slug:'smart',
    description: 'Renovamos la imagen y sitio web de Smart Power Electric para destacar su experiencia y claridad en instalaciones eléctricas.',
    challenge: 'Conectar con la comunidad inmigrante hispanohablante, facilitar acceso a Medicaid y establecer confianza.',
    solution: 'Manual de Identidad de Marca, tarjetas, landing page para Medicaid, videos y spots adaptados culturalmente.',
    result: 'Transformación de la percepción de la marca, consolidándose como sólida y fiable para la comunidad hispana de Florida.',
    resourcesPath: '/home/ubuntu/avanxia_portfolio_resources/avanxia_info/CLIENTES PASADOS/APOLO INSURANCE/',
    imageUrl: '/images/portfolio/proyectos/SMARTPOWE.png',
    },
    {
    id: 10,
    client: 'Digital Lifestyle Designs',
    location: 'EE. UU.',
    serviceType: 'Diseño Web (UI/UX)',
    title: 'HAI',
    slug:'hai',
    description: 'HAI necesitaba más que mostrar sus tazas: quería contar una historia. Creamos una estética coherente en redes que reflejara su esencia artesanal y conectara emocionalmente con su audiencia.',
    challenge: 'Diseñar experiencia web que declarara liderazgo tecnológico e infundiera confianza en soluciones de vanguardia.',
    solution: 'Diseño web (UI/UX) utilizando estilo glassmorphism para comunicar innovación y sofisticación.',
    result: 'Sitio web visualmente impactante y tecnológicamente avanzado en su presentación.',
    resourcesPath: '/home/ubuntu/avanxia_portfolio_resources/avanxia_info/CLIENTES PASADOS/DIGITAL LIFESTYLE DESIGNS/',
    imageUrl: '/images/portfolio/proyectos/hai.png',
    },
    {
    id: 11,
    client: 'DEW Marketing',
    location: 'EE. UU.',
    serviceType: 'Branding',
    title: 'Star Chihuas',
    slug:'star',
    description: 'Star Chiguas necesitaba mostrar el sabor único de su pizza cubana. Creamos una imagen visual atractiva en su local y redes para abrir el apetito desde el primer vistazo.',
    challenge: 'Crear identidad visual encapsulando la metáfora del "rocío" (Dew) que revitaliza negocios.',
    solution: 'Diseño de logotipo evocando sutileza y poder revitalizante, extensión a materiales gráficos (flyers).',
    result: 'Identidad de marca estéticamente agradable que comunica eficazmente la propuesta de valor.',
    resourcesPath: '/home/ubuntu/avanxia_portfolio_resources/avanxia_info/CLIENTES PASADOS/DEW MARKETING/',
    imageUrl: '/images/portfolio/proyectos/star.png',
    },
    {
    id: 12,
    client: 'Drivers Collision Center',
    location: 'N/A',
    serviceType: 'Redes Sociales, Contenido Visual',
    title: 'REDENTOR',
    slug:'redentor',
    description: 'Creamos una identidad visual para El Redentor que une salud y fe, construyendo una marca cercana, coherente y con fuerte conexión comunitaria en redes sociales. ',
    challenge: 'Posicionar la marca en redes como apoyo sólido y resolutivo tras accidentes, evocando acción y confianza.',
    solution: 'Contenido para anuncios y redes con estilo visual y narrativo más agresivo y fuerte (edición rápida, alto impacto).',
    result: 'Comunicación efectiva de la fortaleza y capacidad de respuesta del taller a través de carruseles y videos.',
    resourcesPath: '/home/ubuntu/avanxia_portfolio_resources/avanxia_info/CLIENTES PASADOS/DRIVERS COLLISION CENTER/',
    imageUrl: '/images/portfolio/proyectos/redentor.png',
    },
    {
    id: 13,
    client: 'Engadi Costa Farm',
    location: 'N/A',
    serviceType: 'UI/UX',
    title: 'INCOMETAX',
    slug:'incometax',
    description: 'Desarrollamos una identidad visual profesional para NA Incometax, transmitiendo confianza y seriedad en redes sociales a través de contenido claro y bien estructurado.',
    challenge: 'Modernizar plataforma obsoleta, creando suite de apps intuitivas para gestión agrícola compleja.',
    solution: 'Diseño integral (UI/UX) de la nueva suite, colaboración con desarrollo, QA, librería de iconos personalizados.',
    result: 'Flujos de trabajo más eficientes y amigables, reemplazo exitoso de software anticuado, mejora drástica de productividad.',
    resourcesPath: '/home/ubuntu/avanxia_portfolio_resources/avanxia_info/CLIENTES PASADOS/ENGADI COSTA FARM/',
    imageUrl: '/images/portfolio/proyectos/incometax.png',
    },
    {
     id: 14,
    client: 'dew',
    location: 'Suiza',
    serviceType: 'Video Promocional, Seguridad',
    title: 'DIGITAL LIFESTYLE DESIGNS',
    slug:'digital',
    description: 'Digital Lifestyle Designs necesitaba una web que comunicara su liderazgo en domótica. Creamos una experiencia digital moderna que refleja sofisticación y tecnología de punta.',
    challenge: 'Capturar la esencia de una empresa de seguridad privada, transmitiendo confianza y profesionalismo a través de video y otros materiales.',
    solution: 'Producción de spot/video promocional dinámico, diseño de trípticos y wallpapers, adaptando el mensaje visual a diferentes formatos (totem, redes sociales).',
    result: 'Materiales visuales efectivos para promocionar los servicios de seguridad, reflejando la seriedad y capacidad de la empresa.',
    resourcesPath: '/home/ubuntu/avanxia_portfolio_resources/avanxia_info/CLIENTES PASADOS/TSC/',
    imageUrl: '/images/portfolio/proyectos/digital.png',
    },
    {
    id: 15,
    client: 'dew',
    location: 'Suiza',
    serviceType: 'Video Promocional, Seguridad',
    title: 'DEW',
    slug:'dew',
    description: 'DEW Marketing necesitaba una identidad visual que comunicara renovación y crecimiento. Tradujimos su concepto abstracto en una marca minimalista, delicada y poderosa.',
    challenge: 'Capturar la esencia de una empresa de seguridad privada, transmitiendo confianza y profesionalismo a través de video y otros materiales.',
    solution: 'Producción de spot/video promocional dinámico, diseño de trípticos y wallpapers, adaptando el mensaje visual a diferentes formatos (totem, redes sociales).',
    result: 'Materiales visuales efectivos para promocionar los servicios de seguridad, reflejando la seriedad y capacidad de la empresa.',
    resourcesPath: '/home/ubuntu/avanxia_portfolio_resources/avanxia_info/CLIENTES PASADOS/TSC/',
    imageUrl: '/images/portfolio/proyectos/dew.png',
    },
    {
    id: 16,
    client: 'milenio',
    location: 'Suiza',
    serviceType: 'Video Promocional, Seguridad',
    title: 'MILENIO SMILE',
    slug:'milenio',
    description: 'Milenio Smile quería destacar entre su audiencia cubana en Miami. Aprovechamos un jingle espontáneo para crear anuncios auténticos y memorables.',
    challenge: 'Capturar la esencia de una empresa de seguridad privada, transmitiendo confianza y profesionalismo a través de video y otros materiales.',
    solution: 'Producción de spot/video promocional dinámico, diseño de trípticos y wallpapers, adaptando el mensaje visual a diferentes formatos (totem, redes sociales).',
    result: 'Materiales visuales efectivos para promocionar los servicios de seguridad, reflejando la seriedad y capacidad de la empresa.',
    resourcesPath: '/home/ubuntu/avanxia_portfolio_resources/avanxia_info/CLIENTES PASADOS/TSC/',
    imageUrl: '/images/portfolio/proyectos/milenio.png',
    },
    {
    id: 17,
    client: 'apolo',
    location: 'Suiza',
    serviceType: 'Video Promocional, Seguridad',
    title: 'APOLO',
    slug:'apolo',
    description: 'Apolo Insurance necesitaba conectar con la comunidad inmigrante hispanohablante en Florida, transmitiendo confianza en un sector donde este valor es clave.',
    challenge: 'Capturar la esencia de una empresa de seguridad privada, transmitiendo confianza y profesionalismo a través de video y otros materiales.',
    solution: 'Producción de spot/video promocional dinámico, diseño de trípticos y wallpapers, adaptando el mensaje visual a diferentes formatos (totem, redes sociales).',
    result: 'Materiales visuales efectivos para promocionar los servicios de seguridad, reflejando la seriedad y capacidad de la empresa.',
    resourcesPath: '/home/ubuntu/avanxia_portfolio_resources/avanxia_info/CLIENTES PASADOS/TSC/',
    imageUrl: '/images/portfolio/proyectos/apolo.png',
    },
    
  ];
  const handleOpenDetail = (study: CaseStudy) => {
    if (study.slug) navigate(`/proyectos/${study.slug}`);
    else setSelectedProject(study);
  };

  const handleCloseDetail = () => setSelectedProject(null);

  return (
    <section id="portfolio" className="w-full pt-[calc(64px+4rem)] pb-16 bg-gray-50 relative z-0">
      <div className="container mx-auto px-4">
        {!selectedProject ? (
          <>
            <h2 className="text-4xl md:text-6xl font-extrabold text-center mb-8">
              <span ref={underlineRef} className="section-title-underline">
                Nuestro Trabajo Habla por Sí Mismo
              </span>
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
              Estamos orgullosos de las soluciones digitales que hemos creado para nuestros clientes. Aquí presentamos una selección de proyectos que demuestran nuestra capacidad para combinar estrategia, diseño y tecnología para obtener resultados excepcionales.
            </p>
 

   <motion.div
initial={{ opacity: 0, scale: 0.95, y: 40 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 1.4, ease: [0.25, 0.1, 0.25, 1] }}
      viewport={{ once: true, amount: 0.7 }} // 👈 aquí el segundo cambio
      className="bg-background text-foreground font-sans"
  >
      <Swiper
  effect="coverflow"
  grabCursor={true}
  centeredSlides={true}
  initialSlide={2} // 👈 ESTE ES EL CAMBIO CLAVE
  slidesPerView="auto"
  freeMode={true}
  autoplay={{
    delay: 3000,
    disableOnInteraction: false,
  }}
  coverflowEffect={{
    rotate: 30,
    stretch: 0,
    depth: 200,
    modifier: 1,
    slideShadows: true,
  }}
  navigation={true}
  modules={[EffectCoverflow, Navigation, FreeMode, Autoplay]}
  className="mySwiper w-full max-w-6xl h-[clamp(300px,40vw,420px)] cursor-grab active:cursor-grabbing"
>
        {caseStudies.map((study) => (
          <SwiperSlide
            key={study.id}
            className="!w-[clamp(280px,80vw,320px)] !h-full rounded-xl overflow-hidden shadow-xl cursor-pointer transition-transform duration-300"
            onClick={() => handleOpenDetail(study)}
          >
            <Tilt
              tiltMaxAngleX={10}
              tiltMaxAngleY={10}
              glareEnable={true}
              glareMaxOpacity={0.2}
              scale={1.02}
              transitionSpeed={1500}
              className="w-full h-full"
            >
              <div className="relative w-full h-full group rounded-xl overflow-hidden shadow-md">
                <img
                  src={study.imageUrl}
                  alt={study.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/30 hover:bg-black/60 hover:backdrop-blur-sm z-10 flex flex-col items-center justify-center text-white p-4 space-y-2 text-center transition-all duration-300">
                  <div className="text-sm font-semibold truncate">{study.title}</div>
                  <p className="text-xs mt-6">{study.description}</p> 
                  <span className="text-xs bg-white text-black rounded-full px-2 py-1 w-fit group-hover:bg-gray-100 transition">
                    Explorar este proyecto
                  </span>
                </div>
              </div>
            </Tilt>
          </SwiperSlide>
        ))}
      </Swiper>  
    </motion.div>


            <div className="text-center mt-12">
              <a href="#contact">
                <button className="bg-gradient-to-br from-sky-500 to-indigo-600 text-white font-semibold px-6 py-3 rounded-full shadow-lg">
                  ¿Te gusta lo que ves? Discute tu proyecto
                </button>
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
                    <Home className="w-4 h-4 mr-2.5" /> Portafolio
                  </button>
                </li>
                <li>
                  <div className="flex items-center">
                    <ChevronRight className="w-4 h-4" />
                    <span className="ml-1 text-sm font-medium md:ml-2">
                      {selectedProject.title}
                    </span>
                  </div>
                </li>
              </ol>
            </nav>

            <div className="relative w-full mx-auto bg-white rounded-lg shadow-xl p-6 md:p-10">
              <h2 className="text-3xl font-bold mb-6 text-blue-700 text-center">
                {selectedProject.title}
              </h2>
              <div className="w-full flex flex-col lg:flex-row gap-8 items-start mb-6">
                <div className="flex-1 lg:flex-[2] flex items-center justify-center">
                  <img
                    src={selectedProject.imageUrl}
                    alt={selectedProject.title}
                    className="w-full max-h-[70vh] object-contain rounded shadow-lg mb-4 lg:mb-0"
                  />
                </div>
                <div className="flex-1 lg:flex-[3] text-gray-700 whitespace-pre-line text-base md:text-lg">
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">
                    Descripción Detallada
                  </h3>
                  <p>{selectedProject.description}</p>
                  <div className="mt-6 border-t pt-4 text-sm text-gray-600">
                    <p className="mb-2">
                      <strong className="font-medium text-gray-800">Desafío:</strong>{' '}
                      {selectedProject.challenge}
                    </p>
                    <p className="mb-2">
                      <strong className="font-medium text-gray-800">Solución:</strong>{' '}
                      {selectedProject.solution}
                    </p>
                    <p>
                      <strong className="font-medium text-gray-800">Resultado:</strong>{' '}
                      {selectedProject.result}
                    </p>
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
