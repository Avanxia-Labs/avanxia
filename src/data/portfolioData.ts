// src/data/portfolioData.ts

import { ReactNode } from "react";

export interface PortfolioItem {
  name: ReactNode;
  icon: any;
  id: string;
  image: string;
  title: string;
  subtitle: string;
  description: string;
  slug: string; // used in the URL
  categories: string[];
  images?: Record<string, string>;
    /** opcional: vídeo a mostrar por categoría */
  videos?: Record<string, string>;
  /** opcional: descripción distinta por categoría */
  descriptionsOverride?: Record<string, string>;
}

// === Proyectos individuales ===
export const apoloProject: PortfolioItem = {
  id: "apolo",
  image: "/images/portfolio/proyectos/apolo1.png",
  title: "Apolo",
  subtitle: "",
  description: "Apolo Insurance necesitaba conectar con la comunidad inmigrante hispanohablante en Florida, transmitiendo confianza en un sector donde este valor es clave.",
  slug: "apolo",
  categories: [
    "produccion-audiovisual",
    "consultoria-digital-ia",
    'branding-integral-plan'
  ],

  videos: {
    "produccion-audiovisual": "/videos/apolo1-opt.mp4",
  },
  name: undefined,
  icon: undefined
};

export const autismProject: PortfolioItem = {
  id: "autism",
  image: "/images/portfolio/services/Autism.png",
  title: "Autism",
  subtitle: "",
  description: "Diseñamos la app y comunicación visual de Autism 911, equilibrando empatía y confianza para conectar familias con especialistas en autismo.",
  slug: "autism",
  categories: [
    "desarrollo-software-aplicaciones",
    "produccion-audiovisual",
  ],
  images: {
    "desarrollo-software-aplicaciones": "/images/portfolio/services/Autism2.png",
  },
  // sobreescritura de descripción y vídeo para prod-audiovisual:
  descriptionsOverride: {
    "produccion-audiovisual": "Dirigimos la producción de vídeo de la app y comunicación visual de Autism 911, equilibrando empatía y confianza para conectar familias con especialistas en autismo.",
  },
  videos: {
    "produccion-audiovisual": "/videos/autism1-opt.mp4",
  },
  name: undefined,
  icon: undefined
};

export const cuatroCaminosProject: PortfolioItem = {
  id: "cuatrocaminos",
  image: "/images/portfolio/proyectos/4caminos1.png",
  title: "Cuatro Caminos",
  subtitle: "",
  description: "Impulsamos la presencia digital de 4 CAMINOS, destacando su calidad audiovisual con una estrategia visual coherente, profesional y adaptada al contexto cubano.",
  slug: "cuatrocaminos",
  categories: [
    "redes-sociales-marketing"
  ],
  name: undefined,
  icon: undefined
};

export const dewProject: PortfolioItem = {
  id: "dew",
  image: "/images/portfolio/services/dew.png",
  title: "DEW Marketing",
  subtitle: "",
  description: "DEW Marketing necesitaba una identidad visual que comunicara renovación y crecimiento. Tradujimos su concepto abstracto en una marca minimalista, delicada y poderosa.",
  slug: "dew",
  categories: [
    "identidad-de-marca"
  ],
  name: undefined,
  icon: undefined
};

export const digitalProject: PortfolioItem = {
  id: "digital",
  image: "/images/portfolio/proyectos/digital1.png",
  title: "Digital",
  subtitle: "",
  description: "Digital Lifestyle Designs necesitaba una web que comunicara su liderazgo en domótica. Creamos una experiencia digital moderna que refleja sofisticación y tecnología de punta.",
  slug: "digital",
  categories: [
    "consultoria-digital-ia",
    'branding-integral-plan'
  ],
  name: undefined,
  icon: undefined
};

export const driversProject: PortfolioItem = {
  id: "drivers",
  image: "/images/portfolio/services/driver.png",
  title: "Drivers",
  subtitle: "",
  description: "Para Drivers Collision Center creamos una comunicación visual fuerte y dinámica, enfocada en acción y confianza tras un accidente.",
  slug: "drivers",
  categories: [
    "redes-sociales-marketing"
  ],
  name: undefined,
  icon: undefined
};

export const engadiProject: PortfolioItem = {
  id: "engadi",
  image: "/images/portfolio/services/engadi.png",
  title: "Engadi",
  subtitle: "",
  description: "Modernizamos una plataforma agrícola obsoleta con una suite digital intuitiva que mejora la productividad en invernaderos.",
  slug: "engadi",
  categories: [
    "desarrollo-software-aplicaciones",
  ],
  name: undefined,
  icon: undefined
};

export const evemundoProject: PortfolioItem = {
  id: "evemundo",
  image: "/images/portfolio/proyectos/evem1.png",
  title: "Evemundo",
  subtitle: "",
  description: "Desarrollamos branding, sitios web y contenido audiovisual para Evemundo, creando una presencia digital sólida en Suiza para dos services interconectados.",
  slug: "evemundo",
  categories: [
    "consultoria-digital-ia",
    'branding-integral-plan'
  ],
  name: undefined,
  icon: undefined
};

export const gybProject: PortfolioItem = {
  id: "gyb",
  image: "/images/portfolio/services/gyb1.png",
  title: "GYB Connect",
  subtitle: "",
  description: "Diseñamos la identidad y sitio web de GYB Connect, una plataforma fintech que necesitaba destacar frente a grandes competidores.",
  slug: "gyb",
  categories: ["desarrollo-web", "identidad-de-marca"],
  images: {
    "identidad-de-marca": "/images/portfolio/services/gyb.png",
  },
  name: undefined,
  icon: undefined
};

export const haiProject: PortfolioItem = {
  id: "hai",
  image: "/images/portfolio/proyectos/hai2.png",
  title: "HAI",
  subtitle: "",
  description: "EL HAI necesitaba una estrategia de redes sociales que no solo mostrara sus productos, sino que también comunicara su filosofía de marca artesanal.",
  slug: "hai",
  categories: [
    "consultoria-digital-ia",
    'branding-integral-plan'
  ],
  name: undefined,
  icon: undefined
};

export const heromaticProject: PortfolioItem = {
  id: "heromatic",
  image: "/images/portfolio/proyectos/heromatic3.png",
  title: "Heromatic",
  subtitle: "",
  description: "Creamos Heromatic desde el nombre hasta su presencia digital, posicionándola como una marca experta en automatización con identidad clara y poderosa.",
  slug: "heromatic",
  categories: [
    "consultoria-digital-ia",
    'branding-integral-plan'
  ],
  name: undefined,
  icon: undefined
};

export const incometaxProject: PortfolioItem = {
  id: "incometax",
  image: "/images/portfolio/proyectos/incometax1.png",
  title: "IncomeTax",
  subtitle: "",
  description: "NA Incometax necesitaba una comunicación visual impecable en redes sociales para transmitir confianza y seriedad.",
  slug: "incometax",
  categories: [
    "consultoria-digital-ia",
    'branding-integral-plan'
  ],
  name: undefined,
  icon: undefined
};

export const milenioProject: PortfolioItem = {
  id: "milenio",
  image: "/images/portfolio/proyectos/milenio1.png",
  title: "Milenio",
  subtitle: "",
  description: "Milenio Smile quería destacar entre su audiencia cubana en Miami. Aprovechamos un jingle espontáneo para crear anuncios auténticos y memorables.",
  slug: "milenio",
  categories: [
    "produccion-audiovisual",
    // "seo-marketing-contenidos",
    // "consultoria-digital-ia",
    // 'branding-integral-plan'
  ],
  videos: {
    "produccion-audiovisual": "/videos/milenio1-opt.mp4",
  },
  name: undefined,
  icon: undefined
};

export const poolProject: PortfolioItem = {
  id: "pool",
  image: "/images/portfolio/services/pool.png",
  title: "Pool",
  subtitle: "",
  description: 'Rediseñamos la presencia digital de <a href="https://poolqualitysolutions.com/" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline">Pool Quality Solutions</a> con un sitio moderno y claro, transmitiendo confianza, profesionalismo y experiencia en cada detalle.',
  slug: "pool",
  categories: ["desarrollo-web"],
  name: undefined,
  icon: undefined
};

export const redentorProject: PortfolioItem = {
  id: "redentor",
  image: "/images/portfolio/proyectos/redentor1.png",
  title: "Redentor",
  subtitle: "",
  description: "Redentor confió en nosotros para modernizar su presencia digital y comunicar confianza en servicios de salud para la comunidad hispana.",
  slug: "redentor",
  categories: [
    "consultoria-digital-ia",
    'branding-integral-plan'
  ],
  name: undefined,
  icon: undefined
};

export const smartProject: PortfolioItem = {
  id: "smart",
  image: "/images/portfolio/services/smart.png",
  title: "Smart",
  subtitle: "",
  description: "Renovamos la imagen y sitio web de Smart Power Electric para destacar su experiencia y claridad en instalaciones eléctricas.",
  slug: "smart",
  categories: ["desarrollo-web", "identidad-de-marca"],
  images: {
    "desarrollo-web": "/images/portfolio/services/smart2.png",
  },
  name: undefined,
  icon: undefined
};

export const starchProject: PortfolioItem = {
  id: "star",
  image: "/images/portfolio/proyectos/star1.png",
  title: "Star",
  subtitle: "",
  description: "Creamos la imagen y comunicación visual de Star Chihuas, una marca de pizzas que combina tradición mexicana con sabores urbanos.",
  slug: "star",
  categories: [
    // "produccion-audiovisual",
    // "e-commerce",
    "consultoria-digital-ia",
    'branding-integral-plan'
  ],
  name: undefined,
  icon: undefined
};

export const acmeSeoAuditProject: PortfolioItem = {
  id: "acme-seo-audit",
  title: "SEO TSC",
  subtitle: "",
  image: "/images/portfolio/services/smart1.png",
  slug: "seo",
  description: "Implementamos una auditoría SEO completa y optimizamos contenido pilar para Acme Inc., logrando un aumento del 40% en tráfico orgánico.",
  categories: ["seo-marketing-contenidos"],
  name: undefined,
  icon: undefined
};

export const startupPpcLaunchProject: PortfolioItem = {
  id: "startup-ppc-launch",
  title: "Publicidad Pagada TSC ",
  subtitle: "",
  image: "/images/portfolio/services/pp.png",
  slug: "publicidad",
  description: "Diseñamos e implementamos una campaña PPC de lanzamiento para Startup X, maximizando conversiones con un ROI del 120%.",
  categories: ["publicidad-pagada-ppc"],
  name: undefined,
  icon: undefined
};



// === Arreglo principal ===
export const portfolioData: PortfolioItem[] = [
  apoloProject,
  autismProject,
  cuatroCaminosProject,
  dewProject,
  digitalProject,
  driversProject,
  engadiProject,
  evemundoProject,
  gybProject,
  haiProject,
  heromaticProject,
  incometaxProject,
  milenioProject,
  poolProject,
  redentorProject,
  smartProject,
  starchProject,
  acmeSeoAuditProject,
  startupPpcLaunchProject,
];
