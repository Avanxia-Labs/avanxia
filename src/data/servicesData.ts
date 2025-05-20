// src/data/servicesData.ts

// Interfaz para addons y bonos
export interface ServiceAddon {
  id: string;
  name: string;
  description: string;
  price: number;
  categoryId: string; // A qué categoría pertenece este addon
  compatiblePlans: string[]; // IDs de los planes con los que es compatible
  highlighted?: boolean; // Si está destacado visualmente
  iconEmoji?: string; // Emoji para representar el addon visualmente
  benefits: string[]; // Lista de beneficios que proporciona el addon
  type: 'addon' | 'bonus'; // Si es un addon de pago o un bonus gratuito
}

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
  duration?: string;
  availableAddons?: string[]; // IDs de los addons disponibles para este plan
  includedBonuses?: string[]; // IDs de los bonuses que ya están incluidos
}

// Definición de addons y bonos disponibles
export const serviceAddons: ServiceAddon[] = [
  // Addons para Desarrollo Web
  {
    id: "addon-redes-sociales",
    name: "Arranque en Redes Sociales",
    description: "Creación y configuración básica de 1 perfil de red social (Facebook o Instagram) alineado con la landing page.",
    price: 70,
    categoryId: "desarrollo-web",
    compatiblePlans: ["web-esencial-plan"],
    iconEmoji: "📱",
    benefits: [
      "Creación y configuración básica de 1 perfil de red social",
      "Diseño de foto de perfil y portada básica",
      "Redacción y diseño de 3 posts de lanzamiento"
    ],
    type: "addon"
  },
  {
    id: "addon-formulario-avanzado",
    name: "Formulario Avanzado con Subida de Archivos",
    description: "Mejora tu formulario de contacto con la capacidad de subir archivos y más campos personalizados.",
    price: 120,
    categoryId: "desarrollo-web",
    compatiblePlans: ["web-esencial-plan", "web-profesional-plan"],
    iconEmoji: "📄",
    benefits: [
      "Subida de archivos segura",
      "Campos personalizados adicionales",
      "Validaciones avanzadas",
      "Almacenamiento seguro de archivos"
    ],
    type: "addon"
  },
  {
    id: "addon-backend-nestjs",
    name: "Backend con NestJS",
    description: "Integración de backend potente con NestJS para funcionalidades más avanzadas y personalizadas.",
    price: 350,
    categoryId: "desarrollo-web",
    compatiblePlans: ["web-profesional-plan"],
    highlighted: true,
    iconEmoji: "⚙️",
    benefits: [
      "Desarrollo de API personalizada",
      "Gestión de datos avanzada",
      "Autenticación y autorización",
      "Integración con bases de datos"
    ],
    type: "addon"
  },
  {
    id: "addon-blog-extra",
    name: "Artículos de Blog Adicionales",
    description: "Amplía tu lanzamiento con artículos adicionales optimizados para SEO.",
    price: 150,
    categoryId: "desarrollo-web",
    compatiblePlans: ["web-profesional-plan"],
    iconEmoji: "📝",
    benefits: [
      "2 artículos adicionales (800 palabras c/u)",
      "Optimización SEO completa",
      "Investigación de palabras clave",
      "Imágenes de stock incluidas"
    ],
    type: "addon"
  },
  // Bonuses incluidos en los paquetes
  {
    id: "bonus-hosting-dominio-esencial",
    name: "Hosting y Dominio por 1 Año",
    description: "Despliegue y alojamiento en Vercel (o plataforma similar) durante el primer año.",
    price: 0,
    categoryId: "desarrollo-web",
    compatiblePlans: ["web-esencial-plan"],
    iconEmoji: "🌐",
    benefits: [
      "Hosting de Alto Rendimiento en Vercel",
      "Registro o configuración de dominio por 1 año",
      "Certificado SSL incluido"
    ],
    type: "bonus"
  },
  {
    id: "bonus-contenido-visibilidad",
    name: "Bonus de Contenido y Visibilidad",
    description: "Impulsa el lanzamiento de tu sitio con contenido estratégico y presencia en redes sociales.",
    price: 0,
    categoryId: "desarrollo-web",
    compatiblePlans: ["web-profesional-plan"],
    highlighted: true,
    iconEmoji: "🚀",
    benefits: [
      "Creación/optimización de 2 perfiles de redes sociales",
      "5 Posts de lanzamiento para RRSS",
      "1 Artículo de blog inaugural (800 palabras)",
      "Optimización SEO del contenido inicial"
    ],
    type: "bonus"
  },
  {
    id: "bonus-hosting-dominio-profesional",
    name: "Hosting Premium y Dominio por 1 Año",
    description: "Despliegue y alojamiento en Vercel (o plataforma similar) durante el primer año con mayor capacidad.",
    price: 0,
    categoryId: "desarrollo-web",
    compatiblePlans: ["web-profesional-plan"],
    iconEmoji: "☁️",
    benefits: [
      "Hosting de Alto Rendimiento con recursos ampliados",
      "Registro o configuración de dominio por 1 año",
      "Certificado SSL incluido",
      "Configuración de dominios personalizados"
    ],
    type: "bonus"
  }
];

export const servicesData: ServicePlan[] = [
  // === Desarrollo de Aplicaciones ===
  {
    id: "app-desarrollo-completo-plan",
    categoryId: "desarrollo-software-aplicaciones",
    name: "DESARROLLO COMPLETO – De la Idea a la Aplicación en el Mercado",
    type: "plan",
    price: "Desde 4,500",
    priceType: "único",
    duration: "5 – 15 semanas",
    featured: true,
    idealFor: "Startups e innovadores que buscan transformar su idea en una aplicación real y funcional, desde la planificación estratégica hasta el lanzamiento al mercado.",
    includes: [
      "Consultoría Estratégica: definición de objetivos, análisis de requerimientos y planificación",
      "Investigación de Mercado y Definición de Arquetipo de Usuario",
      "Documento de Alcance y Roadmap inicial para el desarrollo",
      "Diseño UI/UX Completo: prototipos interactivos y diseño visual final",
      "Desarrollo Frontend con Next.js/React (o React Native para móviles)",
      "Desarrollo Backend (si es necesario) con NestJS u otra tecnología acordada",
      "Pruebas de Calidad (QA) y Despliegue en entorno de producción",
      "Entrega de Código Fuente y Capacitación para uso del sistema"
    ],
    sellingPoints: [
      "Proceso completo desde la idea hasta la aplicación funcional en el mercado.",
      "Minimiza riesgos con una planificación estratégica antes del desarrollo.",
      "Tecnologías modernas que garantizan un producto de alta calidad, rendimiento y escalabilidad."
    ],
    shortDescription: "Convierte tu idea en una aplicación real con nuestro servicio completo: desde la consultoría estratégica inicial hasta el desarrollo y lanzamiento de tu producto digital.",
    longDescription: "Nuestro servicio de Desarrollo Completo te acompaña en todo el proceso de creación de tu aplicación. Comenzamos con una fase de consultoría estratégica para entender tu visión y definir claramente los objetivos, lo que nos permite crear un plan detallado que minimiza riesgos. Luego, pasamos al diseño y desarrollo, utilizando tecnologías modernas como Next.js/React para construir una aplicación atractiva, funcional y escalable. Todo el proceso está enfocado en lanzar rápidamente un producto de alta calidad que te permita validar tu idea y comenzar a ganar tracción en el mercado. Es la solución integral que combina estrategia, diseño y tecnología para transformar tu visión en realidad.",
    slug: "desarrollo-completo-app",
    imagePlaceholder: "/images/placeholders/app-desarrollo.jpg",
  },
  {
    id: "app-mantenimiento-plan",
    categoryId: "desarrollo-software-aplicaciones",
    name: "MANTENIMIENTO Y EVOLUCIÓN – Aseguramos el Éxito Continuo de tu Aplicación",
    type: "plan",
    price: "Desde 500",
    priceType: "mensual",
    featured: false,
    idealFor: "Clientes que ya han lanzado su aplicación y necesitan asegurar su funcionamiento óptimo, mantenerla actualizada y segura, y/o continuar añadiendo nuevas funcionalidades de forma iterativa.",
    includes: [
      "Monitoreo del rendimiento y disponibilidad de la aplicación",
      "Actualizaciones de seguridad del stack tecnológico",
      "Copias de seguridad periódicas (si aplica)",
      "Corrección de errores (bug fixing) menores",
      "Soporte técnico básico (resolución de dudas, asistencia)",
      "Horas para pequeñas mejoras o ajustes mensuales",
      "Reportes periódicos del estado de la aplicación y trabajo realizado"
    ],
    sellingPoints: [
      "Mantén tu aplicación segura, actualizada y funcionando óptimamente.",
      "Evoluciona tu producto con nuevas funcionalidades según el feedback de usuarios.",
      "Soporte continuo y tranquilidad para tu negocio digital."
    ],
    shortDescription: "Protege tu inversión y mantén tu aplicación siempre actualizada, segura y en evolución constante con nuestro servicio de mantenimiento y soporte continuo.",
    longDescription: "Tu aplicación ya está en el mercado, ¿y ahora qué? Nuestro servicio de Mantenimiento y Evolución asegura que tu inversión digital siga rindiendo frutos, se mantenga segura y pueda crecer contigo. Ofrecemos desde planes de retainer mensual para un soporte proactivo y tranquilidad continua, hasta bolsas de horas flexibles para desarrollar nuevas funcionalidades y adaptar tu app a las necesidades cambiantes de tus usuarios. No dejes que tu aplicación se vuelva obsoleta; ¡invierte en su futuro!",
    slug: "mantenimiento-evolucion-app",
    imagePlaceholder: "/images/placeholders/app-mantenimiento.jpg",
  },
  // === Identidad de Marca y Branding ===
  {
    id: "branding-esencial-plan",
    categoryId: "identidad-de-marca",
    name: "BRANDING ESENCIAL – Tu Logo Profesional y Kit de Inicio de Marca",
    type: "plan",
    price: 280,
    priceType: "único",
    duration: "1 – 2 semanas",
    featured: false,
    idealFor: "Startups, emprendedores y pequeños negocios que buscan establecer una imagen profesional desde el día cero.",
    includes: [
      "Diseño de Logotipo Profesional y Original (2 propuestas, hasta 2 rondas de revisión)",
      "Definición de Paleta de Colores (HEX, RGB, CMYK)",
      "Selección Tipográfica Estratégica",
      "Entrega Completa de Archivos del Logotipo (AI, EPS, SVG, PNG, JPG)",
      "Mini Guía de Estilo de Marca (PDF práctico de 1 página)"
    ],
    sellingPoints: [
      "Logotipo a medida que refleja la esencia de tu negocio.",
      "Mini guía de estilo que asegura coherencia visual desde el día uno.",
      "Inversión accesible con alto retorno de valor."
    ],
    shortDescription: "¿Listo para lanzar tu proyecto con una identidad profesional? Obtén un logotipo a medida y una mini guía de estilo por solo $280 USD.",
    longDescription: "Sabemos que muchas ofertas básicas se limitan a un logo. Nosotros vamos un paso más allá: por un precio muy accesible te entregamos no solo un logotipo profesional, sino también una mini guía de estilo que asegura coherencia visual. Brindamos un valor tangible inmediato y cobertura de todo el proceso creativo.",
    slug: "branding-esencial",
    imagePlaceholder: "/images/placeholders/branding-esencial.jpg",
  },
  {
    id: "branding-profesional-plan",
    categoryId: "identidad-de-marca",
    name: "BRANDING PROFESIONAL – Identidad Visual Completa y Estratégica",
    type: "plan",
    price: 550,
    priceType: "único",
    duration: "2 – 3 semanas",
    featured: true,
    idealFor: "Empresas en crecimiento y negocios establecidos que necesitan una identidad visual cohesiva aplicada en múltiples plataformas.",
    includes: [
      "Diseño de Logotipo Premium (3 propuestas iniciales y hasta 10 rondas de revisión)",
      "Paleta de Colores Corporativa Completa (primarios, secundarios, acento, neutros)",
      "Sistema Tipográfico Detallado (jerarquías para web e impreso)",
      "Mini Manual de Marca (PDF 5-8 páginas) con directrices de uso y ejemplos",
      "Diseño de 2 Aplicaciones de Marca Clave (p.ej. tarjeta digital, firma email, plantilla de post)",
      "Todos los archivos del logotipo en vectorial y mapa de bits para uso digital e impreso"
    ],
    sellingPoints: [
      "Identidad visual robusta y coherente en todas las plataformas.",
      "Manual de marca detallado que simplifica la aplicación.",
      "Aplicaciones de diseño listas para impresionar a tus clientes."
    ],
    shortDescription: "Eleva tu marca con un manual de estilo robusto y aplicaciones de diseño profesionales listas para usar.",
    longDescription: "Nos posicionamos estratégicamente entregando un valor excepcional. Nuestro Branding Profesional incluye un manual de marca completo y aplicaciones claves para una coherencia inmediata en todos tus puntos de contacto.",
    slug: "branding-profesional",
    imagePlaceholder: "/images/placeholders/branding-profesional.jpg",
  },
  {
    id: "branding-integral-plan",
    categoryId: "identidad-de-marca",
    name: "BRANDING INTEGRAL – Transformación de Marca: Estrategia, Identidad y Lanzamiento Digital",
    type: "plan",
    price: 950,
    priceType: "único",
    duration: "4 – 5 semanas",
    featured: false,
    idealFor: "Empresas ambiciosas que buscan una transformación completa de marca, desde la estrategia hasta el lanzamiento digital.",
    includes: [
      "Sesión Profunda de Consultoría Estratégica de Marca (90-120 min)",
      "Diseño de Logotipo Premium con revisiones ilimitadas (en marco razonable)",
      "Manual de Marca Exhaustivo (10-15+ páginas) con análisis de competencia y tono de voz",
      "Diseño de 4 Aplicaciones de Marca Premium (tarjeta, firma email, plantillas RRSS, presentación, etc.)",
      "✨ BONUS GRATIS: Lanzamiento Digital en Redes Sociales (3-5 posts de lanzamiento diseñados y redactados)"
    ],
    sellingPoints: [
      "Consultoría estratégica que alinea negocio y marca.",
      "Manual exhaustivo y diseño premium ilimitado.",
      "Lanzamiento digital con impacto inmediato en redes sociales."
    ],
    shortDescription: "Transforma tu negocio con una identidad visual excepcional, una estrategia de marca sólida y un lanzamiento digital de alto impacto.",
    longDescription: "Nuestro paquete más completo: incluye consultoría estratégica, diseño premium, manual exhaustivo y un bonus de lanzamiento digital. Integramos estrategia, identidad y activación en un único servicio integral.",
    slug: "branding-integral",
    imagePlaceholder: "/images/placeholders/branding-integral.jpg",
  },

  // === Desarrollo Web ===
  {
    id: "web-esencial-plan",
    categoryId: "desarrollo-web",
    name: "WEB ESENCIAL – Landing Page Moderna y Eficiente con Next.js/React",
    type: "plan",
    price: 680,
    priceType: "único",
    duration: "1 – 1.5 semanas",
    featured: false,
    idealFor: "Startups y negocios que necesitan validar una idea o lanzar una campaña rápidamente.",
    includes: [
      "Diseño web UI/UX personalizado y responsive de una sola página (landing page)",
      "Desarrollo con Next.js/React para máxima velocidad y SEO",
      "Optimización de velocidad de carga (Core Web Vitals)",
      "Formulario de contacto/captura de leads integrado",
      "Conexión con Google Analytics y Search Console"
    ],
    sellingPoints: [
      "Maximiza conversiones con una página enfocada y persuasiva.",
      "Tecnología de vanguardia para una experiencia de usuario superior.",
      "Rápida implementación para tus campañas urgentes."
    ],
    shortDescription: "Lanza tu proyecto con una landing page veloz, SEO-friendly y enfocada en conversiones.",
    slug: "web-esencial",
    availableAddons: ["addon-redes-sociales", "addon-formulario-avanzado"],
    includedBonuses: ["bonus-hosting-dominio-esencial"],
  },
  {
    id: "web-profesional-plan",
    categoryId: "desarrollo-web",
    name: "WEB PROFESIONAL – Sitio Web Completo de Alto Rendimiento con Next.js/React",
    type: "plan",
    price: 1980,
    priceType: "único",
    duration: "4 – 5 semanas",
    featured: true,
    idealFor: "PyMEs y empresas en expansión que necesitan un sitio web robusto y multi-página.",
    includes: [
      "Diseño web UI/UX personalizado y responsive (hasta 5-7 secciones)",
      "Desarrollo con Next.js/React y CMS Headless (Strapi/Sanity) para autogestión",
      "Blog integrado con primer artículo inaugural",
      "Optimización SEO técnica avanzada",
      "Integración con herramientas de marketing (CRM, Email Marketing)"
    ],
    availableAddons: ["addon-formulario-avanzado", "addon-backend-nestjs", "addon-blog-extra"],
    includedBonuses: ["bonus-contenido-visibilidad", "bonus-hosting-dominio-profesional"],
    sellingPoints: [
      "Un sitio web que crece contigo y se adapta a tus necesidades.",
      "Control total sobre tu contenido con un CMS moderno y fácil de usar.",
      "Posicionamiento sólido en buscadores y una experiencia de usuario impecable."
    ],
    shortDescription: "Sitio corporativo completo con CMS headless, SEO avanzado y escalabilidad asegurada.",
    slug: "web-profesional",
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
