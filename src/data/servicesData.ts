// src/data/servicesData.ts

// Interfaz para addons y bonos
export interface ServiceAddon {
  id: string;
  name: string;
  description: string;
  price: number;
  categoryId: string | string[];
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
   videoUrl?: string;
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
  categoryId: [
    "desarrollo-web",
    "identidad-de-marca"
  ],
  compatiblePlans: [
    "web-esencial-plan",
    "branding-integral-plan"    // si también quieres que aparezca aquí sin tocar component
  ],
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
    categoryId: [
      "desarrollo-web",
      "identidad-de-marca",
      "consultoria-digital-ia",
      'branding-integral-plan'
    ],
    compatiblePlans: [
      "web-esencial-plan",
      "web-profesional-plan",
      "app-desarrollo-completo-plan",
      "plan-rrss-esencial",
      "plan-rrss-estrategico",
      "plan-rrss-dominante",
      "plan-video-basico",
      "plan-video-pro",
      "plan-starter-video-pack",
      "plan-pro-video-pack",
      "plan-video-personalizado-profesional",
      "plan-ecommerce-esencial",
      "plan-ecommerce-profesional",
      "plan-seo-startup-boost",
      "plan-seo-growth-engine",
      "plan-content-strategy-pro",
      "plan-ppc-setup",
      "plan-ppc-gestion-mensual",
      "plan-ppc-gestion-avanzada",
      "sesion-consultoria-estrategica",
      "plan-auditoria-digital-ia"
    ],
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
  // {
  //   id: "bonus-hosting-dominio-esencial",
  //   name: "Hosting y Dominio por 1 Año",
  //   description: "Despliegue y alojamiento en Vercel (o plataforma similar) durante el primer año.",
  //   price: 0,
  //   categoryId: "desarrollo-web",
  //   compatiblePlans: ["web-esencial-plan"],
  //   iconEmoji: "🌐",
  //   benefits: [
  //     "Hosting de Alto Rendimiento en Vercel",
  //     "Registro o configuración de dominio por 1 año",
  //     "Certificado SSL incluido"
  //   ],
  //   type: "bonus"
  // },
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
  },
 {
    id: "restyling-rrss-2-perfiles",
    name: "Restyling de 2 perfiles de Redes Sociales",
    description:
      "Actualizamos y optimizamos la imagen visual de dos de tus perfiles de redes sociales (ej. foto de perfil, portada) para una apariencia profesional y coherente con tu marca.",
    price: 0,
    categoryId: "identidad-de-marca",
    compatiblePlans: ["branding-integral-plan"],
    iconEmoji: "✨",
    benefits: [
      "Diseño o actualización de foto de perfil/logo adaptado.",
      "Diseño o actualización de imagen de portada/banner.",
      "Optimización de la biografía/descripción del perfil.",
      "Asegura una primera impresión profesional y cohesiva.",
    ],
    type: "bonus",
  },
  {
    id: "creacion-optimizacion-rrss-2-perfiles",
    name: "Creación/Optimización hasta 2 perfiles RRSS",
    description: "Creamos o mejoramos hasta dos de tus perfiles en redes sociales clave, asegurando una configuración completa y optimizada para conectar con tu audiencia.",
    price: 0,
    categoryId: "desarrollo-web", // Viene con el plan Web Profesional
    compatiblePlans: ["web-profesional-plan"],
    iconEmoji: "📲",
    benefits: [
      "Configuración completa de información del perfil.",
      "Diseño de imagen de perfil y portada básica.",
      "Optimización de biografía y enlaces.",
      "Listo para empezar a publicar contenido."
    ],
    type: "bonus"
  },
 {
    id: "lanzamiento-rrss-5-posts",
    name: "5 Posts de Lanzamiento para RRSS",
    description:
      "Impulsa tu nueva marca o sitio web con 5 posts diseñados profesionalmente, listos para ser publicados en tus redes sociales y anunciar tu lanzamiento.",
    price: 0,
    categoryId: "identidad-de-marca",
    compatiblePlans: ["branding-integral-plan", "web-profesional-plan"],
    iconEmoji: "🚀",
    benefits: [
      "Diseños atractivos y alineados con tu marca.",
      "Textos (copies) persuasivos para cada post.",
      "Formatos adaptados para las principales redes.",
      "Genera expectación y primeras interacciones.",
    ],
    type: "bonus",
  },
  {
    id: "articulo-blog-inaugural-800",
    name: "1 Artículo de Blog Inaugural (800 palabras)",
    description: "Arranca tu blog con contenido de valor. Creamos un artículo de 800 palabras, optimizado para SEO y relevante para tu audiencia, perfecto para tu lanzamiento.",
    price: 0,
    categoryId: "desarrollo-web", // Viene con el plan Web Profesional
    compatiblePlans: ["web-profesional-plan"],
    iconEmoji: "✍️",
    benefits: [
      "Contenido original y de calidad.",
      "Investigación de tema y palabras clave básicas.",
      "Estructura optimizada para la lectura y SEO.",
      "Establece autoridad desde el inicio."
    ],
    type: "bonus"
  },
  {
    id: "mini-landing-page-gratis-rrss",
    name: "Mini-Landing Page Profesional GRATIS (activa con el plan)",
    description: "Mientras tu plan RRSS Esencial esté activo, disfruta de una mini-landing page profesional para centralizar tus enlaces importantes y dirigir tráfico desde tus redes.",
    price: 0,
    categoryId: "gestion-redes-sociales",
    compatiblePlans: ["rrss-esencial-plan"],
    iconEmoji: "🔗",
    benefits: [
      "Diseño profesional y adaptado a tu marca.",
      "Ideal para 'link en bio' de Instagram y otras redes.",
      "Fácil de actualizar con tus enlaces clave.",
      "Mejora la experiencia de usuario y conversiones."
    ],
    type: "bonus"
  },
  {
    id: "landing-page-optimizada-ppc",
    name: "Diseño e Implementación de 1 Landing Page optimizada para campaña",
    description: "Maximizamos el rendimiento de tus campañas PPC con una landing page diseñada específicamente para convertir visitantes en leads o clientes.",
    price: 0,
    categoryId: "publicidad-pagada", // Aplicable a PPC Gestión Mensual y Avanzada
    compatiblePlans: ["ppc-gestion-mensual-plan", "ppc-gestion-avanzada-plan"], // PPC Avanzada también tiene "Landing Page Optimizada"
    iconEmoji: "🎯",
    benefits: [
      "Diseño enfocado 100% en la conversión.",
      "Mensaje claro y alineado con el anuncio.",
      "Formulario de contacto o CTA destacado.",
      "Optimización para carga rápida y móviles."
    ],
    type: "bonus"
  },
  {
    id: "video-ads-cortos-ppc",
    name: "Creación de 1-2 Video Ads Cortos (hasta 30s) al mes",
    description: "Potencia tus campañas de publicidad pagada con video ads cortos y dinámicos, diseñados para captar la atención y mejorar el engagement.",
    price: 0,
    categoryId: "publicidad-pagada",
    compatiblePlans: ["ppc-gestion-avanzada-plan"],
    iconEmoji: "📹",
    benefits: [
      "Videos optimizados para plataformas de anuncios (Meta, YouTube, etc.).",
      "Mensajes directos y enfocados en la conversión.",
      "Formato atractivo y de alto impacto.",
      "Incluye edición y musicalización de librería."
    ],
    type: "bonus"
  },

  // --- NUEVOS BONOS (ANTES FEATURES) ---
  // {
  //   id: "hosting-dominio-1ano-web",
  //   name: "Hosting y Dominio GRATIS por 1 Año",
  //   description: "Asegura la presencia online de tu landing page desde el día uno con hosting confiable y un dominio profesional, cubiertos durante el primer año.",
  //   price: 0,
  //   categoryId: "desarrollo-web",
  //   compatiblePlans: ["web-esencial-plan"],
  //   iconEmoji: "☁️",
  //   benefits: [
  //     "Alojamiento web rápido y seguro por 12 meses.",
  //     "Registro o transferencia de un dominio (.com, .net, .org, etc.) por 1 año.",
  //     "Certificado SSL para seguridad (HTTPS).",
  //     "Configuración inicial sin complicaciones."
  //   ],
  //   type: "bonus"
  // },
  {
    id: "articulo-blog-mensual-rrss",
    name: "1 Artículo de Blog Mensual (800 palabras)",
    description: "Potencia tu estrategia de contenidos y SEO con un artículo de blog original de 800 palabras cada mes, listo para publicar o integrar como parte de tu plan de redes.",
    price: 0,
    categoryId: "gestion-redes-sociales",
    compatiblePlans: ["rrss-estrategico-plan"],
    iconEmoji: "📰",
    benefits: [
      "Contenido fresco y relevante para tu audiencia mensualmente.",
      "Optimizado para SEO básico (palabras clave).",
      "Demuestra autoridad y conocimiento en tu nicho.",
      "Entregado en formato Word o con opción de integración (costo extra por integración directa)."
    ],
    type: "bonus"
  },
  {
    id: "pauta-meta-ads-75usd-rrss",
    name: "Pauta en Meta Ads Incluida (hasta $75 USD/mes)",
    description: "Impulsa el alcance e interacción de tus contenidos en Meta (Facebook/Instagram) con una inversión publicitaria mensual de hasta $75 USD cubierta por nosotros.",
    price: 0,
    categoryId: "gestion-redes-sociales",
    compatiblePlans: ["rrss-dominante-plan"],
    iconEmoji: "💰",
    benefits: [
      "Cobertura de hasta $75 USD mensuales para tus anuncios en Meta.",
      "Aumenta la visibilidad de tus mejores posts y reels.",
      "Atrae nuevos seguidores y potenciales clientes.",
      "La gestión de la campaña ya está incluida en el plan."
    ],
    type: "bonus"
  },
  {
    id: "hosting-dominio-1ano-ecommerce",
    name: "Hosting y Dominio GRATIS por 1 Año (para WooCommerce)",
    description: "Lanza tu tienda online WooCommerce sin preocuparte por los costos iniciales de hosting y dominio durante el primer año.",
    price: 0,
    categoryId: "e-commerce",
    compatiblePlans: ["ecommerce-esencial-plan", "ecommerce-profesional-plan"], // Shopify tiene su propio hosting, así que esto aplica a Woo
    iconEmoji: "🛒", // Un poco diferente al de web para distinguir
    benefits: [
      "Alojamiento web optimizado para WooCommerce por 12 meses.",
      "Registro o transferencia de un dominio (.com, .store, etc.) por 1 año.",
      "Certificado SSL para transacciones seguras.",
      "Ideal para iniciar tu e-commerce auto-alojado."
    ],
    type: "bonus"
  },
  {
    id: "capacitacion-ecommerce-basica",
    name: "Capacitación Inicial en E-commerce (1-2 horas)",
    description: "Aprende a gestionar tu nueva tienda online (Shopify o WooCommerce) con una sesión de capacitación personalizada para administrar productos, pedidos y más.",
    price: 0,
    categoryId: "e-commerce",
    compatiblePlans: ["ecommerce-esencial-plan"],
    iconEmoji: "🧑‍🏫",
    benefits: [
      "Entrenamiento práctico en la plataforma de tu tienda.",
      "Aprende a añadir/editar productos y categorías.",
      "Gestión básica de pedidos y clientes.",
      "Resuelve tus dudas iniciales para operar tu tienda con confianza."
    ],
    type: "bonus"
  },
  {
    id: "email-marketing-setup-ecommerce",
    name: "Estrategia y Configuración de Email Marketing Transaccional y Básico",
    description: "Optimiza la comunicación con tus clientes mediante la configuración de emails transaccionales esenciales y una estrategia básica de email marketing para tu e-commerce.",
    price: 0,
    categoryId: "e-commerce",
    compatiblePlans: ["ecommerce-profesional-plan"],
    iconEmoji: "📧",
    benefits: [
      "Configuración de correos automáticos clave (confirmación de pedido, envío, etc.).",
      "Diseño de plantilla básica para newsletters o promociones.",
      "Asesoría en estrategia inicial para captación de suscriptores.",
      "Mejora la retención de clientes y la comunicación post-venta."
    ],
    type: "bonus"
  },
  {
    id: "capacitacion-ecommerce-avanzada",
    name: "Capacitación Avanzada en E-commerce (2-3 horas)",
    description: "Profundiza en la gestión y optimización de tu tienda online con una capacitación extendida, cubriendo aspectos más avanzados y estrategias para impulsar el crecimiento.",
    price: 0,
    categoryId: "e-commerce",
    compatiblePlans: ["ecommerce-profesional-plan"],
    iconEmoji: "🚀", // Usando el de lanzamiento para el "impulso"
    benefits: [
      "Entrenamiento en funcionalidades avanzadas de la plataforma (Shopify/WooCommerce).",
      "Optimización de la conversión y la experiencia de usuario.",
      "Uso de herramientas de marketing y análisis integradas.",
      "Estrategias para promociones efectivas y fidelización de clientes."
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
    price: 4500,
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
    price: 500,
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
    includedBonuses: [
     "restyling-rrss-2-perfiles",
     "lanzamiento-rrss-5-posts"
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
    videoUrl: '/videos/prueba1.mp4',
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
    availableAddons: [ "addon-backend-nestjs", "addon-blog-extra"],
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
    id: "plan-rrss-esencial",
    categoryId: "redes-sociales-marketing",
    name: "RRSS ESENCIAL – Presencia Digital Activa y Profesional en Redes",
    type: "plan",
    price: 350,
    priceType: "mensual",
    idealFor: "Pequeños negocios, emprendedores y profesionales que necesitan establecer y mantener una presencia activa, coherente y profesional en sus redes sociales clave.",
    includes: [
      "Gestión Estratégica de hasta 4 plataformas sociales principales (ej. Facebook, Instagram, LinkedIn, Google Business)",
      "Creación de 10-12 Posts de alta calidad al mes con diseño gráfico profesional",
      "Redacción de copies persuasivos, optimizados para cada plataforma",
      "Desarrollo de un Calendario de Contenido Mensual",
      "Respuesta básica a comentarios y mensajes directos (en horario hábil)",
      "Reporte Básico de Rendimiento Mensual con métricas clave",
      "BONUS EXCLUSIVO: Diseño, Creación y Mantenimiento de una Mini-Landing Page Profesional GRATIS"
    ],
    includedBonuses: ["bonus-hosting-dominio-esencial"],
    sellingPoints: [
      "Presencia digital activa y profesional sin dedicarle horas de tu propio tiempo.",
      "Contenido de alta calidad, coherente y alineado con tu marca.",
      "Mini-Landing Page GRATIS para centralizar tus links y capturar leads."
    ],
    shortDescription: "Presencia profesional en redes sociales con contenido de calidad y una mini-landing page GRATIS para convertir seguidores en contactos directos.",
    slug: "rrss-esencial"
  },
  {
    id: "plan-rrss-estrategico",
    categoryId: "redes-sociales-marketing",
    name: "RRSS ESTRATÉGICO – Construcción de Comunidad, Autoridad y Contenido de Valor",
    type: "plan",
    price: 650,
    priceType: "mensual",
    featured: true,
    idealFor: "Empresas y profesionales que buscan construir una comunidad online leal, posicionarse como autoridad reconocida en su sector y generar interacción de mayor calidad.",
    includes: [
      "Gestión Estratégica Avanzada de hasta 5-6 plataformas sociales relevantes",
      "15-18 Posts de calidad superior al mes, con una mezcla de formatos",
      "1-2 Videos Cortos/Reels mensuales (hasta 30-45 segundos) con edición profesional",
      "Desarrollo de Estrategia de Contenido Personalizada con calendario detallado",
      "Community Management Proactivo y Dinámico",
      "BONUS: Creación de 1 Artículo de Blog Mensual (aprox. 800 palabras) optimizado para SEO",
      "Análisis y Reporte Detallado con insights y recomendaciones",
      "Optimización Continua y revisión trimestral de la estrategia"
    ],
    sellingPoints: [
      "Contenido diverso y estratégico, incluyendo videos profesionales y artículos de blog.",
      "Posicionamiento como autoridad y construcción de una comunidad leal.",
      "Estrategia personalizada con análisis y optimización continua para maximizar resultados."
    ],
    shortDescription: "Gestión avanzada con contenido de alto valor que incluye video y artículos de blog mensuales para construir autoridad y una comunidad sólida en tu industria.",
    slug: "rrss-estrategico"
  },
  {
    id: "plan-rrss-dominante",
    categoryId: "redes-sociales-marketing",
    name: "RRSS DOMINANTE – Liderazgo de Marca y Crecimiento Acelerado en Redes Sociales",
    type: "plan",
    price: 980,
    priceType: "mensual",
    idealFor: "Empresas con una visión clara de liderazgo en su mercado y objetivos de crecimiento ambiciosos a través de las redes sociales.",
    includes: [
      "Estrategia Digital Integral y Adaptativa con enfoque en resultados medibles",
      "Gestión Completa de Múltiples Plataformas Sociales (hasta 6-7 canales)",
      "Producción de Contenido Premium (22-25 posts mensuales de alta calidad)",
      "Contenido Audiovisual Avanzado: 3-4 Videos/Reels mensuales (30-60 seg)",
      "1 Video/Reel Producción Premium mensual (hasta 2 min)",
      "Gestión de Comunidad VIP con monitoreo extendido y respuesta personalizada",
      "2 Artículos de Blog/Contenidos Longform optimizados para SEO",
      "BONUS EXCLUSIVO: Gestión Mensual de Campaña Publicitaria en Meta Ads (incluye $50 USD para inversión)",
      "Análisis y Reportes Premium con métricas avanzadas y proyecciones"
    ],
    sellingPoints: [
      "Domina la conversación en redes sociales con una estrategia integral y contenido premium.",
      "Crecimiento acelerado con la potencia combinada de contenido orgánico y publicidad pagada incluida.",
      "Producción audiovisual de alto impacto y contenidos longform para maximizar engagement y conversiones."
    ],
    shortDescription: "Estrategia integral con producción audiovisual premium, gestión proactiva de comunidades y publicidad en Meta Ads incluida para liderazgo y crecimiento acelerado en redes sociales.",
    slug: "rrss-dominante"
  },

  // === Soluciones E-commerce ===
  {
    id: "plan-ecommerce-esencial",
    categoryId: "e-commerce",
    name: "E-COMMERCE ESENCIAL – Tu Primera Tienda Online Profesional",
    type: "plan",
    price: 1200,
    priceType: "único",
    idealFor: "Emprendedores, creadores de contenido y pequeños negocios que buscan lanzar su primera tienda online profesional con un catálogo inicial limitado. Es tu punto de entrada al comercio electrónico, con todas las funcionalidades esenciales para vender en línea de forma efectiva.",
    includes: [
      "Consultoría Inicial y Selección de Plataforma (Shopify o WooCommerce)",
      "Configuración Completa de la Tienda (cuenta, configuraciones, moneda, impuestos básicos)",
      "Selección y Personalización de un Tema Premium de Alta Calidad (no desarrollo custom)",
      "Diseño y Configuración de Páginas Clave (inicio, colección/categoría, producto, carrito, cuenta)",
      "Carga Inicial de Productos (hasta 25-30 productos con sus variantes)",
      "Configuración e Integración de Pasarelas de Pago (ej. Stripe, PayPal, Mercado Pago)",
      "Configuración Básica de Opciones de Envío y/o Configuración de Costos de Envío",
      "Optimización SEO Básica (meta títulos, descripciones y estructura básica de URLs)",
      "Integración con Google Analytics y Pixel de Facebook para rastreo de conversiones",
      "Capacitación para Gestión de la Tienda (1-2 horas vía videollamada)"
    ],
    includedBonuses: ["bonus-hosting-dominio-esencial"],
    sellingPoints: [
      "Tu vitrina al mundo: una tienda online profesional en Shopify o WooCommerce, totalmente configurada y lista para vender.",
      "Solución completa con diseño atractivo, carga inicial de productos, pagos integrados y capacitación para empezar con confianza.",
      "Base sólida y optimizada desde el inicio para convertir tus productos en ventas."
    ],
    shortDescription: "Lanza tu primera tienda online profesional completa en Shopify o WooCommerce con diseño atractivo, configuración integral y capacitación para empezar a vender con éxito.",
    slug: "ecommerce-esencial",
    duration: "2-3 semanas"
  },
  {
    id: "plan-ecommerce-profesional",
    categoryId: "e-commerce",
    name: "E-COMMERCE PROFESIONAL – Tienda Online Optimizada para el Crecimiento y la Conversión",
    type: "plan",
    price: 2500,
    priceType: "único",
    idealFor: "Negocios con un catálogo de productos más amplio, aquellos que buscan funcionalidades más avanzadas en su tienda online, o empresas que ya venden online pero necesitan una plataforma más robusta, personalizada y altamente optimizada para la conversión y el crecimiento en ventas.",
    includes: [
      "Todo lo incluido en el paquete 'E-Commerce Esencial', y además:",
      "Carga Inicial de Catálogo Extendido (hasta 50-75 productos con sus variantes)",
      "Personalización de Diseño Avanzada y Estratégica (adaptaciones de CSS para experiencia de marca única)",
      "Diseño enfocado en la optimización de la tasa de conversión (CRO) en páginas clave",
      "Configuración e Integración de Apps/Plugins Clave (hasta 3-5 herramientas premium)",
      "Optimización SEO On-Page Avanzada y estructura adecuada para indexación",
      "Implementación de datos estructurados (Schema.org) para productos y negocio",
      "Estrategia y Configuración de Email Marketing Transaccional y de Bienvenida/Abandono",
      "Integración con Canales de Venta Sociales (Facebook/Instagram Shopping)",
      "Capacitación Avanzada y Estratégica (2-3 horas vía videollamada)"
    ],
    sellingPoints: [
      "Tienda online de alto rendimiento, altamente personalizada y optimizada para maximizar tus ventas y la experiencia de tus clientes.",
      "Más allá del setup básico: integramos herramientas de marketing clave y aplicamos estrategias de conversión comprobadas.",
      "Plataforma de venta online robusta y escalable, diseñada para crecer contigo y convertirte en un líder en tu mercado."
    ],
    shortDescription: "Tienda online de alto rendimiento con diseño personalizado, optimizada para conversiones, con herramientas de marketing integradas y estrategias avanzadas para escalar tu negocio digital.",
    slug: "ecommerce-profesional",
    duration: "3-5 semanas",
    featured: true
  },

  // === Optimización para Motores de Búsqueda (SEO) ===
  {
    id: "plan-seo-startup-boost",
    categoryId: "seo-marketing-contenidos",
    name: "SEO STARTUP BOOST – Cimientos Sólidos para tu Posicionamiento Online",
    type: "plan",
    price: 450,
    priceType: "único",
    idealFor: "Negocios que recién lanzan su sitio web, empresas con una web existente que nunca han trabajado activamente el SEO, o para aquellos que necesitan una puesta a punto técnica y un primer impulso de contenido estratégico para empezar a mejorar su visibilidad en Google.",
    includes: [
      "Auditoría SEO Técnica Básica (revision de 5-10 páginas principales)",
      "Investigación de Palabras Clave Iniciales (10-15 palabras clave foco)",
      "Optimización On-Page Esencial (títulos, descripciones, encabezados) para 5 páginas",
      "Configuración de Google Analytics (GA4) y Google Search Console",
      "Creación y Envío de Sitemap.xml a Google Search Console",
      "Configuración básica de archivo robots.txt si es necesario",
      "Creación de 1 Artículo de Blog Pilar (1000-1200 palabras) optimizado para SEO",
      "Reporte detallado de la configuración inicial y hallazgos de la auditoría",
      "Plan de contenido sugerido para 2-3 meses siguientes"
    ],
    includedBonuses: ["bonus-hosting-dominio-esencial"],
    sellingPoints: [
      "Cimientos sólidos para un posicionamiento online exitoso.",
      "Puesta a punto técnica de tu web e investigación de palabras clave estratégicas.",
      "Contenido pilar inicial que te ayudará a atraer tráfico orgánico."
    ],
    shortDescription: "Auditoría SEO, optimización técnica y primer artículo pilar para sentar las bases de tu posicionamiento en Google y empezar a atraer tráfico cualificado.",
    slug: "seo-startup-boost",
    duration: "1-2 semanas"
  },
  {
    id: "plan-seo-growth-engine",
    categoryId: "seo-marketing-contenidos",
    name: "SEO GROWTH ENGINE – Estrategia Mensual para Crecimiento Orgánico Sostenido",
    type: "plan",
    price: 750,
    priceType: "mensual",
    featured: true,
    idealFor: "Empresas que ya tienen una presencia web establecida y buscan mejorar consistentemente su ranking en Google, aumentar el tráfico orgánico cualificado, generar leads a través de contenido de valor y construir autoridad en su nicho de forma mensual y sostenible.",
    includes: [
      "Monitoreo y Análisis SEO Continuo (ranking, errores técnicos, competencia)",
      "Estrategia de Contenidos Mensual y Dinámica",
      "Creación de 2 Artículos de Blog Optimizados para SEO (800-1000 palabras cada uno)",
      "Opción de sustituir artículos estándar por 1 Artículo Pilar más extenso bimestralmente",
      "Optimización On-Page Continua del nuevo contenido y páginas existentes",
      "Link Building Interno (estructura optimizada de enlaces)",
      "Mejoras de Experiencia de Usuario (formato de contenido, legibilidad)",
      "Reuniones de Estrategia y Reporte Mensual de Rendimiento"
    ],
    sellingPoints: [
      "Estrategia SEO integral y de alto valor para crecimiento orgánico consistente.",
      "Creación regular de contenido atractivo y estrategicamente optimizado que posiciona.",
      "Monitoreo técnico continuo para mantener la salud SEO y mejorar posiciones."
    ],
    shortDescription: "Estrategia mensual integral de SEO y contenidos para mejorar tu visibilidad en Google, generar tráfico cualificado y construir autoridad en tu sector de forma sostenible.",
    slug: "seo-growth-engine"
  },
  {
    id: "plan-content-strategy-pro",
    categoryId: "seo-marketing-contenidos",
    name: "CONTENT STRATEGY PRO – Liderazgo de Opinión y Estrategia de Contenidos Premium",
    type: "plan",
    price: 1200,
    priceType: "mensual",
    idealFor: "Empresas consolidadas y marcas ambiciosas que buscan no solo rankear en Google, sino establecerse como verdaderos líderes de opinión y referentes en su nicho a través de una estrategia de contenidos robusta, diversificada y de calidad premium.",
    includes: [
      "Todo lo incluido en el plan 'SEO Growth Engine', y además:",
      "Creación de Contenido Avanzado y Diversificado (Mayor Volumen y Formatos Premium):",
      "- 3-4 Artículos de Blog Optimizados y Profundos al mes",
      "- O 1 Contenido Pilar Extenso y de Alto Valor (Lead Magnet) como Ebook o Whitepaper",
      "- O Guion Detallado para 1 Webinar o Video Educativo de formato largo",
      "Estrategia de Distribución de Contenidos Optimizada",
      "Optimización de Contenido para Fragmentos Destacados (Featured Snippets) de Google",
      "Consideraciones básicas para la optimización para Búsqueda por Voz",
      "Análisis de Contenido de la Competencia Más Profundo",
      "Consultoría Estratégica de Contenidos y SEO de Alto Nivel"
    ],
    sellingPoints: [
      "Estrategia de contenidos premium y piezas de alto impacto que te posicionarán como líder de opinión indiscutible.",
      "No solo mejoramos tu SEO, sino que construimos un legado de contenido valioso que atrae, educa y convierte.",
      "Inversión definitiva para quienes buscan dominar su nicho a través del conocimiento y la autoridad."
    ],
    shortDescription: "Estrategia avanzada de contenidos premium que te posiciona como líder de opinión, con formatos como Ebooks o guiones para webinars, diseñada para construir autoridad y generar leads cualificados.",
    slug: "content-strategy-pro"
  },

  // === Publicidad Pagada (PPC) ===
  {
    id: "plan-ppc-setup",
    categoryId: "publicidad-pagada-ppc",
    name: "PPC SETUP – Tu Campaña Optimizada Desde el Día Cero",
    type: "plan",
    price: 380,
    priceType: "único",
    idealFor: "Empresas o emprendedores que desean lanzar su primera campaña de publicidad pagada con una base sólida y profesional, o para aquellos que han intentado gestionar campañas por su cuenta sin los resultados esperados y necesitan una configuración experta para empezar con el pie derecho.",
    includes: [
      "Configuración Profesional de 1 Campaña Inicial en Google Ads o Meta Ads",
      "Estructura de Campaña Optimizada con hasta 3 Grupos/Conjuntos de Anuncios",
      "Investigación de palabras clave o definición de audiencias objetivo",
      "Creación de hasta 6 anuncios persuasivos y optimizados",
      "Sugerencias para creatividades visuales",
      "Implementación del seguimiento de conversiones básico",
      "Asesoría Estratégica Personalizada (sesión de 90 minutos)",
      "Resumen de configuración y recomendaciones"
    ],
    includedBonuses: ["bonus-hosting-dominio-esencial"],

    sellingPoints: [
      "Lanza tu primera campaña con una estructura profesional y optimizada por expertos.",
      "Confianza para invertir en publicidad online sin cometer errores costosos.",
      "Asesoría estratégica personalizada para definir la mejor estructura para tus objetivos."
    ],
    shortDescription: "Configuración profesional de tu primera campaña de publicidad online con estructura optimizada, asesoría estratégica y anuncios persuasivos para generar resultados desde el inicio.",
    slug: "ppc-setup",
    duration: "1 semana",
    longDescription: "Este plan no incluye el presupuesto de inversión en la plataforma publicitaria (Google/Meta)."
  },
  {
    id: "plan-ppc-gestion-mensual",
    categoryId: "publicidad-pagada-ppc",
    name: "PPC GESTIÓN MENSUAL – Resultados Medibles y Landing Page de Conversión Incluida",
    type: "plan",
    price: 580,
    priceType: "mensual",
    idealFor: "Negocios que buscan resultados consistentes y medibles de sus campañas de publicidad pagada en una plataforma principal (Google Ads o Meta Ads) y que entienden la importancia de una landing page optimizada para maximizar las conversiones.",
    includes: [
      "Gestión Profesional de Campañas en 1 Plataforma Principal (Google Ads o Meta Ads)",
      "Optimización Continua y Estratégica (monitoreo, ajustes de pujas, pruebas A/B)",
      "Desarrollo y Gestión de Audiencias (personalizadas, similares y remarketing)",
      "Reporte de Rendimiento Mensual detallado",
      "BONUS EXCLUSIVO: Diseño, Desarrollo e Implementación de 1 Landing Page Profesional",
      "- Construida con Next.js/React para máxima velocidad y rendimiento",
      "- Diseño enfocado 100% en la conversión del objetivo de la campaña",
      "- Formulario de contacto/captura de leads integrado",
      "Comunicación y soporte continuo"
    ],
    sellingPoints: [
      "Expertos optimizando tus campañas día a día en Google o Meta Ads para maximizar resultados.",
      "Landing Page de alta conversión para tus anuncios totalmente incluida, sin costo adicional.",
      "Solución integral para atraer, persuadir y convertir con un ROI medible."
    ],
    shortDescription: "Gestión profesional de tus campañas de publicidad con Landing Page incluida, optimización continua y reportes detallados para maximizar tu inversión publicitaria.",
    slug: "ppc-gestion-mensual",
    featured: true,
    longDescription: "Este plan no incluye el presupuesto de inversión en la plataforma publicitaria (Google/Meta)."
  },
  {
    id: "plan-ppc-gestion-avanzada",
    categoryId: "publicidad-pagada-ppc",
    name: "PPC GESTIÓN AVANZADA – Estrategia de Conversión Multiplataforma con Video y Landing Incluida",
    type: "plan",
    price: 1150,
    priceType: "mensual",
    idealFor: "Empresas con una estrategia de marketing digital más madura que buscan escalar sus resultados publicitarios gestionando campañas en múltiples plataformas, implementando embudos de conversión más sofisticados y utilizando el poder del video en sus anuncios.",
    includes: [
      "Gestión Profesional de Campañas en hasta 2 Plataformas Publicitarias",
      "Estrategia de Embudo de Conversión para diferentes etapas del viaje del cliente",
      "Estrategias de remarketing/retargeting avanzadas",
      "Optimización Continua y Estratégica Multiplataforma",
      "Reporte de Rendimiento Consolidado y Avanzado",
      "BONUS DE CREATIVIDAD: Creación de 1-2 Video Ads Cortos (hasta 30 segundos) al mes",
      "BONUS DE CONVERSIÓN: Diseño e Implementación de 1 Landing Page Profesional",
      "Reuniones estratégicas periódicas para revisión y planificación"
    ],
    sellingPoints: [
      "Estrategia de conversión multiplataforma que domina múltiples canales publicitarios a la vez.",
      "Video ads impactantes creados mensualmente y landing page optimizada, todo incluido.",
      "Gestión experta de embudos de conversión para un crecimiento acelerado y ROI superior."
    ],
    shortDescription: "Gestión avanzada de publicidad en múltiples plataformas con creación mensual de video ads, landing page optimizada y estrategia de embudo completo para maximizar conversiones y escalar resultados.",
    slug: "ppc-gestion-avanzada",
    longDescription: "Este plan no incluye el presupuesto de inversión en las plataformas publicitarias."
  },

  // === Producción Audiovisual ===
  {
    id: "plan-video-basico",
    categoryId: "produccion-audiovisual",
    name: "VIDEO BÁSICO – Tu Mensaje Claro y Directo en Video",
    type: "plan",
    price: 650,
    priceType: "único",
    idealFor: "Empresas y profesionales que necesitan un video corto, conciso y de alta calidad para presentar un producto, explicar un servicio, compartir un testimonio de cliente o comunicar un mensaje clave de forma efectiva en su sitio web o redes sociales.",
    includes: [
      "Tipo de Video: Ideal para testimonios de clientes, videos explicativos cortos de producto/servicio, mensajes corporativos breves",
      "Duración Final del Video: Hasta 60-90 segundos",
      "Reunión de conceptualización y desarrollo de guión básico",
      "Media jornada de grabación (aprox. 4 horas) en 1 locación",
      "Equipo de grabación profesional básico",
      "Edición profesional del material grabado",
      "Corrección de color básica",
      "Inclusión de música de librería libre de derechos",
      "Integración de gráficos de texto simples (ej. títulos, nombres)",
      "Hasta 2 rondas de revisión sobre el primer corte editado"
    ],
    includedBonuses: ["bonus-hosting-dominio-esencial"],
    sellingPoints: [
      "Video profesional que comunica tu mensaje de forma clara, concisa e impactante.",
      "Solución completa desde la idea inicial hasta la edición final.",
      "La forma más efectiva y rentable de empezar a utilizar el poder del video."
    ],
    shortDescription: "Video profesional para comunicar de forma clara, concisa e impactante tu mensaje, producto o servicio, listo para usar en tu web o redes sociales.",
    slug: "video-basico",
    duration: "1-2 semanas"
  },
  {
    id: "plan-video-pro",
    categoryId: "produccion-audiovisual",
    name: "VIDEO PRO – Impacto Cinematográfico para tu Marca: Corporativo o Spot Publicitario",
    type: "plan",
    price: 1200,
    priceType: "único",
    featured: true,
    idealFor: "Empresas que buscan una producción audiovisual de mayor envergadura y calidad cinematográfica, como un video institucional que refleje la grandeza de su marca, un spot publicitario creativo o videos de producto con estética superior.",
    includes: [
      "Tipo de Video: Ideal para videos institucionales/corporativos, spots publicitarios, videos de marca de alto impacto",
      "Duración Final: Hasta 2-3 minutos (institucional) o spot publicitario de 30-60 segundos",
      "Preproducción detallada con guion completo y storyboard visual",
      "Jornada completa de grabación (aprox. 8 horas)",
      "Posibilidad de incluir hasta 2 locaciones cercanas (si la logística lo permite)",
      "Equipo de grabación avanzado: Múltiples cámaras, estabilizadores, mejor iluminación",
      "Dirección profesional en set",
      "Edición profesional multicapa, con atención al ritmo y la narrativa visual",
      "Corrección de color cinematográfica",
      "Diseño e integración de motion graphics básicos",
      "Selección y mezcla de música premium de librería",
      "Hasta 3 rondas de revisión sobre los cortes editados"
    ],
    sellingPoints: [
      "Piezas audiovisuales con calidad cinematográfica que elevan tu imagen y comunican con impacto arrollador.",
      "Proceso profesional completo desde el guion hasta la postproducción avanzada.",
      "Video estratégicamente diseñado para alcanzar tus objetivos y diferenciarte de la competencia."
    ],
    shortDescription: "Producción audiovisual de alto impacto con calidad cinematográfica para videos corporativos o spots publicitarios que eleven tu marca al siguiente nivel.",
    slug: "video-pro",
    duration: "3-6 semanas"
  },
  {
    id: "plan-starter-video-pack",
    categoryId: "produccion-audiovisual",
    name: "STARTER VIDEO PACK MENSUAL – Videos Optimizados para tus Redes Sociales",
    type: "plan",
    price: 350,
    priceType: "mensual",
    idealFor: "Emprendedores, profesionales independientes y pequeñas empresas que necesitan contenido de video regular para sus redes sociales, pero sin tener que invertir en equipo o contratar diferentes creativos.",
    includes: [
      "3 Videos Cortos para Redes Sociales al mes",
      "Duración: 15-45 segundos cada uno, optimizados para diferentes plataformas",
      "Adaptación de contenido existente (fotos, clips básicos) y recursos de stock",
      "1 Lluvia de ideas mensual para definir los temas de los videos",
      "Edición básica profesional y efectos visuales simples",
      "Textos en pantalla, música y efectos sonoros",
      "Formato vertical para Stories/Reels y cuadrado para feeds",
      "1 ronda de ajustes por video"
    ],
    sellingPoints: [
      "Contenido de video constante y profesional para tus redes sin tener que crearlo tú mismo.",
      "Aumento del engagement y alcance con formatos optimizados para cada plataforma.",
      "Solución mensual rentable y sin complicaciones para tu estrategia de contenidos."
    ],
    shortDescription: "Servicio mensual de creación de 3 videos cortos optimizados para redes sociales, ideal para mantener tu presencia digital activa y profesional.",
    slug: "starter-video-pack"
  },
  {
    id: "plan-pro-video-pack",
    categoryId: "produccion-audiovisual",
    name: "PRO VIDEO PACK MENSUAL – Contenido Audiovisual Premium para Dominar en Redes",
    type: "plan",
    price: 600,
    priceType: "mensual",
    idealFor: "Empresas y marcas que buscan una estrategia de contenido audiovisual más completa, diversa y sofisticada para destacar en redes sociales, con una mezcla de formatos y estilos.",
    includes: [
      "5 Piezas Audiovisuales al mes (combinación personalizable según necesidades)",
      "Posibilidad de incluir: Videos cortos para feed, Reels/Stories, Teaser de productos, Mini-entrevistas, Animation Motion Graphics",
      "1 Video con grabación simple en locación (hasta 2 horas, en la misma ciudad)",
      "Planificación estratégica mensual del contenido",
      "Edición avanzada con motion graphics personalizados",
      "Música premium y efectos visuales",
      "Optimización para múltiples plataformas (Instagram, TikTok, LinkedIn, etc.)",
      "2 rondas de ajustes por video"
    ],
    sellingPoints: [
      "Estrategia completa de video para redes sociales que combina diferentes formatos para máximo impacto.",
      "Contenido original filmado con producción profesional que destaca sobre la competencia.",
      "La solución más completa para marcas que quieren dominar con video en el mundo digital."
    ],
    shortDescription: "Servicio premium mensual de creación de 5 piezas audiovisuales diversas, incluyendo grabación original, para dominar en redes sociales con contenido profesional.",
    slug: "pro-video-pack",
    featured: true
  },
  {
    id: "plan-video-personalizado-profesional",
    categoryId: "produccion-audiovisual",
    name: "VIDEO PERSONALIZADO PROFESIONAL – Producción Audiovisual Completa",
    type: "plan",
    price: 1500,
    priceType: "único",
    featured: true,
    idealFor: "Empresas y profesionales que necesitan un video de alta calidad con producción completa para presentar su marca, explicar productos/servicios complejos o crear contenido premium para campañas importantes.",
    includes: [
      "Consultoría y planificación estratégica del contenido",
      "Desarrollo de guión y storyboard personalizado",
      "Una jornada completa de grabación (hasta 6 horas) con equipo profesional",
      "Dirección profesional durante la grabación",
      "Iluminación y captura de audio profesional",
      "Posibilidad de incluir entrevistas, demostraciones de producto o servicios",
      "Edición profesional completa (video de 2-3 minutos de duración final)",
      "Diseño gráfico avanzado, animaciones y efectos visuales",
      "Música y efectos sonoros premium",
      "Corrección avanzada de color y masterización de audio",
      "Entrega en múltiples formatos y resoluciones (4K opcional)"
    ],
    sellingPoints: [
      "Consigue un video completamente profesional y personalizado que refleja la verdadera calidad de tu marca.",
      "Diferénciate de la competencia con un contenido audiovisual de impacto que genera confianza y conversiones.",
      "Obtén un activo digital versátil que puedes utilizar en múltiples canales: web, redes, presentaciones o eventos."
    ],
    shortDescription: "Producción audiovisual completa y personalizada con grabación profesional, para empresas que buscan comunicar con máxima calidad e impacto.",
    slug: "video-personalizado-profesional",
    duration: "2-3 semanas"
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
    price: 950,
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
    includedBonuses: ["bonus-hosting-dominio-esencial"],

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
