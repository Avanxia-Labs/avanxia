// src/data/servicesData.ts

export interface ServicePlan {
  id: string;
  categoryId: string;
  name: string;
  type: 'plan' | 'servicio';
  price?: string | number;
  priceType?: 'único' | 'mensual' | 'anual' | 'por hora' | 'variable';
  idealFor: string;
  includes: string[];
  sellingPoints: string[];
  shortDescription: string;
  longDescription?: string;
  imagePlaceholder?: string;
  slug: string;
  featured?: boolean;
}

export const servicesData: ServicePlan[] = [
  // === Identidad de Marca y Branding ===
  {
    id: "plan-identidad-esencial",
    categoryId: "identidad-de-marca",
    name: "Plan Identidad Esencial",
    type: "plan",
    price: 600,
    priceType: "único",
    idealFor: "Emprendedores y startups que necesitan un logo profesional y elementos básicos para empezar.",
    includes: [
      "Diseño de Logotipo Profesional (3 conceptos iniciales)",
      "Paleta de Colores Primarios y Secundarios",
      "Selección Tipográfica Corporativa",
      "Manual de Marca Básico (PDF)",
      "Archivos finales en formatos vectoriales y rasterizados (.AI, .EPS, .SVG, .PNG, .JPG)"
    ],
    sellingPoints: [
      "Inicia con una imagen profesional y coherente.",
      "Fundamentos sólidos para tu comunicación visual.",
      "Entrega rápida y eficiente para no detener tu lanzamiento."
    ],
    longDescription: "Sabemos que muchas ofertas básicas se limitan a un logo. Nosotros vamos un paso más allá: por un precio muy accesible, similar al 'solo logo' de algunas agencias, te entregamos no solo un diseño de logotipo profesional, sino una mini guía de estilo. Esto supera la oferta de competidores como IMTEX (Logo $83), proporcionando un valor tangible inmediato. Cubrimos el tiempo de diseño conceptual y la creación de herramientas básicas para que tu marca luzca consistente.",
    shortDescription: "Lanza tu marca con un logo profesional y los elementos visuales clave.",
    slug: "plan-identidad-esencial",
    featured: false,
  },
  {
    id: "plan-branding-completo",
    categoryId: "identidad-de-marca",
    name: "Plan Branding Completo",
    type: "plan",
    price: 1200,
    priceType: "único",
    idealFor: "Empresas establecidas o startups que buscan una identidad de marca integral y detallada.",
    includes: [
      "Todo lo del Plan Identidad Esencial",
      "Diseño de Papelería Corporativa (Tarjetas de visita, Hoja membretada, Sobre)",
      "Plantillas para Redes Sociales (Perfil, Portada, Post - 3 diseños)",
      "Manual de Marca Extendido (incluye usos correctos e incorrectos, iconografía, tono de voz básico)",
      "Mockups de aplicación de marca"
    ],
    sellingPoints: [
      "Una identidad visual robusta y versátil para todos tus puntos de contacto.",
      "Coherencia de marca garantizada en múltiples plataformas.",
      "Materiales listos para usar que ahorran tiempo y esfuerzo."
    ],
    longDescription: "Nos posicionamos estratégicamente ofreciendo un valor excepcional. Comparado con ofertas como la de Brandana (Identidad $528), nuestro Branding Profesional no solo compite en precio, sino que entrega un Mini Manual de Marca más robusto y el diseño de aplicaciones clave listas para usar. Esto no es solo diseño; es una inversión en la percepción y profesionalismo de tu empresa.",
    shortDescription: "Desarrolla una identidad de marca integral que te posicione como referente.",
    slug: "plan-branding-completo",
    featured: true,
  },

  // === Desarrollo Web ===
  {
    id: "plan-landing-page-impacto",
    categoryId: "desarrollo-web",
    name: "Plan Landing Page de Impacto",
    type: "plan",
    price: 750,
    priceType: "único",
    idealFor: "Campañas de marketing, lanzamiento de productos/servicios, o captación de leads específica.",
    includes: [
      "Diseño personalizado y responsive (adaptable a móviles)",
      "Desarrollo con Next.js/React para máxima velocidad y SEO",
      "Optimización de velocidad de carga (Core Web Vitals)",
      "Formulario de contacto/captura de leads integrado",
      "Conexión con Google Analytics y Search Console",
      "Hosting básico por 1 año (opcional, costo adicional)"
    ],
    sellingPoints: [
      "Maximiza conversiones con una página enfocada y persuasiva.",
      "Tecnología de vanguardia para una experiencia de usuario superior.",
      "Rápida implementación para tus campañas urgentes."
    ],
    longDescription: "Entendemos que este precio es significativamente superior a ofertas básicas de landing pages en WordPress de competidores similares. La diferencia radica fundamentalmente en la tecnología y la calidad del desarrollo. Una landing page construida con Next.js y React ofrece una velocidad de carga, seguridad y potencial de SEO incomparables frente a una plantilla básica de WordPress. Este precio cubre aproximadamente una semana de desarrollo dedicado (40-50 horas), incluyendo diseño semi-personalizado eficiente, desarrollo frontend, configuración y pruebas, asegurando un producto de alta calidad que justifica la inversión.",
    shortDescription: "Una landing page optimizada y de alta conversión para tus campañas.",
    slug: "plan-landing-page-impacto"
  },
  {
    id: "plan-web-corporativa-avanzada",
    categoryId: "desarrollo-web",
    name: "Plan Web Corporativa Avanzada",
    type: "plan",
    price: "Desde 2500",
    priceType: "único",
    idealFor: "Empresas que buscan una presencia online robusta, profesional y escalable.",
    includes: [
      "Diseño web UI/UX personalizado y responsive (hasta 5-7 secciones)",
      "Desarrollo con Next.js/React y CMS Headless (Strapi/Sanity) para autogestión",
      "Blog integrado",
      "Optimización SEO técnica avanzada",
      "Integración con herramientas de marketing (CRM, Email Marketing)",
      "Seguridad y rendimiento optimizados",
      "Capacitación para gestión de contenidos"
    ],
    sellingPoints: [
      "Un sitio web que crece contigo y se adapta a tus necesidades.",
      "Control total sobre tu contenido con un CMS moderno y fácil de usar.",
      "Posicionamiento sólido en buscadores y una experiencia de usuario impecable."
    ],
    longDescription: "Este precio refleja el valor de una solución profesional y estratégica desarrollada sobre pilares tecnológicos de vanguardia (Next.js, React y un CMS Headless). A diferencia de soluciones más económicas como Brandana Web Corp ($1,950), no solo ofrecemos un sitio atractivo, sino una plataforma con fundaciones tecnológicas sólidas que garantizan velocidad, seguridad, escalabilidad y un mejor posicionamiento orgánico. La inclusión de un CMS Headless es clave, otorgándote control total sobre tu contenido y flexibilidad que los sitios estáticos o WordPress básico no pueden ofrecer.",
    shortDescription: "Un sitio web corporativo completo, autogestionable y optimizado para crecer.",
    slug: "plan-web-corporativa-avanzada",
    featured: true,
  },

  // === Marketing Digital y Gestión de Redes Sociales ===
  {
    id: "plan-social-media-starter",
    categoryId: "marketing-digital-redes-sociales",
    name: "Plan Social Media Starter",
    type: "plan",
    price: 450,
    priceType: "mensual",
    idealFor: "Pequeñas empresas o emprendedores que quieren iniciar su presencia profesional en redes.",
    includes: [
      "Gestión de 1-2 perfiles de redes sociales (Facebook, Instagram)",
      "Creación y publicación de 8 posts mensuales (contenido original)",
      "Diseño gráfico básico para posts",
      "Respuesta a comentarios y mensajes (horario limitado)",
      "Informe mensual de rendimiento básico"
    ],
    sellingPoints: [
      "Construye una presencia activa y profesional en redes sociales sin dedicarle todo tu tiempo.",
      "Contenido de calidad que refleja tu marca y atrae a tu audiencia.",
      "Ideal para empezar a generar engagement y visibilidad."
    ],
    shortDescription: "Inicia tu presencia en redes sociales con contenido profesional y gestión básica.",
    slug: "plan-social-media-starter"
  },
  {
    id: "plan-marketing-contenidos-pro",
    categoryId: "marketing-digital-redes-sociales",
    name: "Plan Marketing de Contenidos Pro",
    type: "plan",
    price: 900,
    priceType: "mensual",
    idealFor: "Empresas que buscan una estrategia de contenidos sólida para crecer su audiencia y autoridad.",
    includes: [
      "Gestión de 2-3 perfiles de redes sociales",
      "Creación y publicación de 12-15 posts mensuales (incluye reels/stories básicos)",
      "Redacción de 2 artículos de blog optimizados para SEO (hasta 800 palabras c/u)",
      "Estrategia de contenidos mensual y calendario editorial",
      "Diseño gráfico avanzado y branding consistente",
      "Gestión de comunidad y respuesta a interacciones",
      "Informe mensual detallado con análisis y recomendaciones"
    ],
    sellingPoints: [
      "Atrae, engagea y convierte con una estrategia de contenidos integral.",
      "Posiciona tu marca como experta en tu sector.",
      "Resultados medibles y optimización continua."
    ],
    shortDescription: "Potencia tu marca con una estrategia de contenidos y gestión de redes completa.",
    slug: "plan-marketing-contenidos-pro",
    featured: true,
  },

  // === Soluciones E-commerce ===
  {
    id: "plan-ecommerce-startup",
    categoryId: "e-commerce",
    name: "Plan E-commerce Startup",
    type: "plan",
    price: 1800,
    priceType: "único",
    idealFor: "Emprendedores o pequeñas empresas que quieren empezar a vender online rápidamente.",
    includes: [
      "Tienda online con Shopify o WooCommerce (hasta 20 productos iniciales)",
      "Diseño basado en plantilla premium personalizable",
      "Configuración de pasarelas de pago (Stripe, PayPal)",
      "Configuración de envíos básicos",
      "Optimización para móviles",
      "Capacitación para gestión de tienda y productos"
    ],
    sellingPoints: [
      "Lanza tu tienda online de forma rápida y profesional.",
      "Plataformas robustas y fáciles de gestionar.",
      "Empieza a vender y a hacer crecer tu negocio en línea."
    ],
    shortDescription: "Tu tienda online lista para vender, con un diseño profesional y funcionalidades esenciales.",
    slug: "plan-ecommerce-startup"
  },
  {
    id: "plan-ecommerce-avanzado",
    categoryId: "e-commerce",
    name: "Plan E-commerce Avanzado",
    type: "plan",
    price: "Desde 4000",
    priceType: "único",
    idealFor: "Negocios en crecimiento que necesitan una solución e-commerce a medida y escalable.",
    includes: [
      "Tienda online con Shopify Plus, Magento o desarrollo a medida (Next.js Commerce)",
      "Diseño UI/UX 100% personalizado y optimizado para conversión",
      "Carga ilimitada de productos",
      "Integraciones avanzadas (ERP, CRM, Marketplaces)",
      "Funcionalidades personalizadas (suscripciones, productos configurables, etc.)",
      "Estrategia SEO para e-commerce",
      "Soporte técnico y consultoría de crecimiento"
    ],
    sellingPoints: [
      "Una plataforma e-commerce que se adapta a la complejidad de tu negocio.",
      "Experiencia de compra superior para maximizar ventas y fidelización.",
      "Escalabilidad y rendimiento para soportar tu crecimiento."
    ],
    shortDescription: "Una solución e-commerce potente y a medida para llevar tus ventas al siguiente nivel.",
    slug: "plan-ecommerce-avanzado",
    featured: true,
  },

  // === Optimización para Motores de Búsqueda (SEO) ===
  {
    id: "plan-seo-local-starter",
    categoryId: "seo",
    name: "Plan SEO Local Starter",
    type: "plan",
    price: 500,
    priceType: "mensual",
    idealFor: "Negocios locales que quieren mejorar su visibilidad en búsquedas geolocalizadas.",
    includes: [
      "Optimización de Google My Business",
      "Investigación de palabras clave locales",
      "Optimización On-Page para 5 páginas clave",
      "Gestión de citaciones locales (hasta 10 directorios)",
      "Informe mensual de ranking y tráfico local"
    ],
    sellingPoints: [
      "Atrae más clientes de tu área geográfica.",
      "Mejora tu ranking en Google Maps y búsquedas locales.",
      "Fundamental para negocios con ubicación física."
    ],
    shortDescription: "Mejora tu visibilidad en búsquedas locales y atrae clientes cercanos.",
    slug: "plan-seo-local-starter"
  },
  {
    id: "plan-seo-integral-crecimiento",
    categoryId: "seo",
    name: "Plan SEO Integral para Crecimiento",
    type: "plan",
    price: 1200,
    priceType: "mensual",
    idealFor: "Empresas que buscan un crecimiento orgánico sostenido y liderazgo en su nicho.",
    includes: [
      "Auditoría SEO completa y estrategia personalizada",
      "Investigación exhaustiva de palabras clave y competidores",
      "Optimización On-Page continua (web y blog)",
      "Estrategia y ejecución de Link Building ético",
      "Creación de 2-3 contenidos SEO-optimizados al mes",
      "Monitoreo técnico y de rendimiento (Core Web Vitals)",
      "Informes detallados con análisis de ROI y próximos pasos"
    ],
    sellingPoints: [
      "Una estrategia SEO completa para dominar los rankings de búsqueda.",
      "Aumento sostenible del tráfico orgánico de calidad.",
      "Posicionamiento como autoridad en tu industria."
    ],
    shortDescription: "Estrategia SEO completa para un crecimiento orgánico sostenible y liderazgo.",
    slug: "plan-seo-integral-crecimiento",
    featured: true,
  },

  // === Publicidad Pagada (PPC) ===
  {
    id: "plan-ppc-ads-inicial",
    categoryId: "publicidad-pagada-ppc",
    name: "Plan PPC Ads Inicial",
    type: "plan",
    price: "Desde 350",
    priceType: "mensual",
    idealFor: "Empresas que quieren probar la publicidad online o tienen presupuestos ajustados.",
    includes: [
      "Gestión de campañas en 1 plataforma (Google Ads o Meta Ads)",
      "Configuración de hasta 2 campañas",
      "Investigación de palabras clave / segmentación de audiencia básica",
      "Creación de anuncios (texto y/o gráficos básicos)",
      "Monitoreo y optimización semanal básica",
      "Informe mensual de rendimiento"
    ],
    sellingPoints: [
      "Resultados rápidos y medibles para tus objetivos de marketing.",
      "Llega a tu audiencia ideal de forma precisa.",
      "Ideal para validar ofertas o impulsar promociones específicas."
    ],
    shortDescription: "Inicia tus campañas de publicidad online y obtén resultados rápidos.",
    slug: "plan-ppc-ads-inicial",
    longDescription: "Este plan no incluye el presupuesto de inversión en la plataforma publicitaria (Google/Meta).",
  },
  {
    id: "plan-ppc-performance-max",
    categoryId: "publicidad-pagada-ppc",
    name: "Plan PPC Performance MAX",
    type: "plan",
    price: "Desde 750",
    priceType: "mensual",
    idealFor: "Empresas que buscan maximizar su ROI con campañas de PPC avanzadas y multicanal.",
    includes: [
      "Gestión de campañas en Google Ads y Meta Ads (u otras plataformas relevantes)",
      "Configuración y optimización de múltiples campañas y tipos de anuncios (Búsqueda, Display, Video, Shopping)",
      "Investigación avanzada de palabras clave, audiencias y competidores",
      "Pruebas A/B continuas de anuncios y landing pages",
      "Optimización de conversiones y seguimiento avanzado",
      "Informes detallados con análisis de performance y estrategia"
    ],
    sellingPoints: [
      "Maximiza tu retorno de inversión publicitaria con gestión experta.",
      "Estrategias avanzadas para superar a tu competencia.",
      "Optimización continua basada en datos para mejorar resultados mes a mes."
    ],
    shortDescription: "Maximiza tu ROI con gestión experta de campañas PPC multicanal.",
    slug: "plan-ppc-performance-max",
    featured: true,
    longDescription: "Este plan no incluye el presupuesto de inversión en las plataformas publicitarias.",
  },

  // === Producción Multimedia ===
  {
    id: "plan-video-corporativo-express",
    categoryId: "produccion-multimedia",
    name: "Plan Video Corporativo Express",
    type: "plan",
    price: 800,
    priceType: "único",
    idealFor: "Presentaciones de empresa, videos para web o redes sociales que necesitan un toque profesional.",
    includes: [
      "Edición de video profesional (hasta 2 minutos de duración final)",
      "Uso de material provisto por el cliente (video y fotos)",
      "Musicalización con biblioteca libre de derechos",
      "Gráficos y textos animados básicos",
      "Corrección de color y etalonaje básico",
      "Entrega en formato FullHD (1080p)"
    ],
    sellingPoints: [
      "Comunica tu mensaje de forma dinámica y atractiva.",
      "Calidad profesional para tus videos corporativos o promocionales.",
      "Entrega rápida para tus necesidades de contenido."
    ],
    shortDescription: "Vídeo corporativo o promocional editado profesionalmente y listo para impactar.",
    slug: "plan-video-corporativo-express"
  },
  {
    id: "plan-podcast-produccion-starter",
    categoryId: "produccion-multimedia",
    name: "Plan Podcast Producción Starter",
    type: "plan",
    price: 300,
    priceType: "único",
    idealFor: "Creadores de contenido o empresas que quieren lanzar un podcast de calidad profesional.",
    includes: [
      "Edición y limpieza de audio (hasta 60 min de audio crudo)",
      "Mezcla y masterización para plataformas de podcast",
      "Reducción de ruido y mejora de claridad vocal",
      "Inserción de intro/outro y música de fondo (provista por cliente o de biblioteca)",
      "Generación de archivo final en MP3 de alta calidad"
    ],
    sellingPoints: [
      "Sonido profesional que engancha a tu audiencia.",
      "Libérate de la postproducción y enfócate en tu contenido.",
      "Calidad consistente para cada episodio de tu podcast."
    ],
    shortDescription: "Producción profesional de audio para tus episodios de podcast.",
    slug: "plan-podcast-produccion-starter"
  },

  // === Consultoría Digital y Estrategias con IA ===
  {
    id: "sesion-consultoria-estrategica",
    categoryId: "consultoria-digital-ia",
    name: "Sesión de Consultoría Estratégica Digital",
    type: "servicio",
    price: 250,
    priceType: "por hora", // O podría ser un paquete de X horas
    idealFor: "Empresas o emprendedores que necesitan claridad y dirección en su estrategia digital.",
    includes: [
      "Sesión de 1-2 horas (online o presencial según acuerdo)",
      "Análisis previo de la situación actual del cliente (requiere información)",
      "Discusión de objetivos, desafíos y oportunidades",
      "Recomendaciones personalizadas y próximos pasos accionables",
      "Resumen post-sesión con puntos clave (PDF)"
    ],
    sellingPoints: [
      "Obtén una hoja de ruta clara para tus acciones digitales.",
      "Asesoramiento experto para tomar decisiones informadas.",
      "Resuelve dudas y desbloquea el potencial de tu negocio online."
    ],
    shortDescription: "Asesoramiento experto para definir o refinar tu estrategia digital y tecnológica.",
    slug: "sesion-consultoria-estrategica-digital"
  },
  {
    id: "plan-auditoria-digital-ia",
    categoryId: "consultoria-digital-ia",
    name: "Plan Auditoría Digital e Integración IA",
    type: "plan",
    price: "Desde 950",
    priceType: "único",
    idealFor: "Empresas que quieren optimizar su presencia digital y explorar oportunidades con IA.",
    includes: [
      "Análisis completo de presencia online (web, SEO, redes, reputación)",
      "Auditoría de la competencia y benchmarking",
      "Identificación de oportunidades para integración de IA (automatización, personalización, análisis)",
      "Informe detallado con hallazgos y recomendaciones estratégicas",
      "Plan de acción priorizado para implementación",
      "Sesión de presentación de resultados y Q&A"
    ],
    sellingPoints: [
      "Descubre puntos ciegos y oportunidades de mejora en tu ecosistema digital.",
      "Entiende cómo la IA puede transformar y optimizar tu negocio.",
      "Una base sólida para tomar decisiones estratégicas de inversión en tecnología y marketing."
    ],
    shortDescription: "Auditoría completa de tu ecosistema digital con foco en optimización e IA.",
    slug: "plan-auditoria-digital-ia",
    featured: true,
  }
  // Añadir aquí los 7 servicios individuales restantes de servicios_y_precios.md cuando se definan mejor
  // Por ahora, nos centramos en los paquetes (planes) según las reglas.
];
