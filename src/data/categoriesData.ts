// src/data/categoriesData.ts
// Todas las descripciones están en español para mantener consistencia en el idioma
import { Palette, Globe, MessageSquare, ShoppingCart, Search, MousePointerClick, Clapperboard, Smartphone } from 'lucide-react';
import { LucideIcon } from 'lucide-react';

export interface ServiceCategory {
  id: string;
  name: string;
  description: string;
  path: string;
  imagePlaceholder: string; 
  slug: string;
  icon: LucideIcon;
}

export const categoriesData: ServiceCategory[] = [
  {
    id: "web-development",
    slug: "web-development",
    name: "Desarrollo Web",
    description: "En la era digital, tu sitio web es el corazón de tu presencia en línea y a menudo el primer punto de contacto con tus futuros clientes. En Avanxia Labs, no solo construimos páginas web; creamos experiencias digitales de alto rendimiento que son rápidas, seguras, visualmente atractivas y, lo más importante, diseñadas para convertir.",
    path: "/services/web-development",
    imagePlaceholder: "/images/placeholders/category-desarrollo-web.jpg",
    icon: Globe
  },
  {
    id: "brand-identity",
    slug: "brand-identity",
    name: "Identidad de Marca y Branding",
    description: "En un mundo digital saturado, tu marca es tu firma, tu promesa y tu principal diferenciador. En Avanxia Labs, entendemos que una identidad de marca poderosa va mucho más allá de un simple logotipo; se trata de contar tu historia, conectar emocionalmente con tu audiencia ideal y construir una percepción de valor que impulse tu negocio.",
    path: "/services/brand-identity",
    imagePlaceholder: "/images/placeholders/category-identidad-marca.jpg",
    icon: Palette
  },
  {
    id: "app-development",
    slug: "app-development",
    name: "Desarrollo de Aplicaciones",
    description: "Ya sea una aplicación móvil innovadora o un sistema web completo, en Avanxia Labs transformamos tu concepto en software funcional y escalable. Nuestro enfoque de desarrollo se centra en el usuario mientras implementamos las mejores prácticas de ingeniería.",
    path: "/services/app-development",
    imagePlaceholder: "/images/placeholders/category-software.jpg",
    icon: Smartphone
  },
  {
    id: "social-media",
    slug: "social-media",
    name: "Gestión de Redes Sociales",
    description: "Tu presencia en línea es mucho más que un sitio web. En Avanxia Labs, te ayudamos a conectar con tu audiencia donde realmente pasan su tiempo: en las redes sociales y a través de estrategias efectivas de marketing digital.",
    path: "/services/social-media",
    imagePlaceholder: "/images/placeholders/category-marketing-digital.jpg",
    icon: MessageSquare
  },
  {
    id: "audiovisual-production",
    slug: "audiovisual-production",
    name: "Producción Audiovisual",
    description: "El contenido visual y auditivo de alta calidad es esencial para captar la atención y transmitir tu mensaje de manera impactante. En Avanxia Labs, ofrecemos servicios de producción multimedia que elevan tu marca, desde edición profesional de video hasta gráficos en movimiento.",
    path: "/services/audiovisual-production",
    imagePlaceholder: "/images/placeholders/category-multimedia.jpg",
    icon: Clapperboard
  },
  {
    id: "ecommerce",
    slug: "ecommerce",
    name: "Soluciones E-commerce",
    description: "Vender en línea nunca ha sido más crucial. En Avanxia Labs, transformamos tu visión de negocio en una tienda en línea poderosa, atractiva y optimizada para conversiones. Nos especializamos en crear soluciones de comercio electrónico personalizadas utilizando tecnologías robustas y escalables.",
    path: "/services/ecommerce",
    imagePlaceholder: "/images/placeholders/category-ecommerce.jpg",
    icon: ShoppingCart
  },
  {
    id: "seo-content-marketing",
    slug: "seo-content-marketing",
    name: "SEO y Marketing de Contenidos",
    description: "En el competitivo mundo en línea, ser visible significa ser relevante. El SEO es la clave para asegurar que tus clientes potenciales te encuentren cuando busquen activamente tus productos o servicios. En Avanxia Labs, desarrollamos estrategias de SEO integrales y personalizadas.",
    path: "/services/seo-content-marketing",
    imagePlaceholder: "/images/placeholders/category-seo.jpg",
    icon: Search
  },
  {
    id: "ppc-advertising",
    slug: "ppc-advertising",
    name: "Publicidad Pagada (PPC)",
    description: "Cuando necesitas resultados rápidos y alcance dirigido, la publicidad de pago por clic (PPC) es tu mejor aliada. En Avanxia Labs, diseñamos y gestionamos campañas PPC en plataformas como Google Ads y Meta Ads que están optimizadas para maximizar tu retorno de inversión.",
    path: "/services/ppc-advertising",
    imagePlaceholder: "/images/placeholders/category-ppc.jpg",
    icon: MousePointerClick
  }
];