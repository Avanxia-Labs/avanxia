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

    description: "En la era digital, tu sitio web es el corazón de tu presencia online y, a menudo, el primer punto de contacto con tus futuros clientes. En Avanxia Labs, no solo construimos páginas web; creamos experiencias digitales de alto rendimiento que son rápidas, seguras, visualmente atractivas y, sobre todo, diseñadas para convertir.",
    path: "/desarrollo-web",
    imagePlaceholder: "/images/Services/category-desarrollo-web.png",
    icon: Globe
  },
  {
    id: "brand-identity",
    slug: "brand-identity",
    name: "Identidad de Marca y Branding",
    description: "En un mundo digital saturado, tu marca es tu firma, tu promesa y tu principal diferenciador. En Avanxia Labs, entendemos que una identidad de marca poderosa va mucho más allá de un simple logotipo; se trata de contar tu historia, conectar emocionalmente con tu audiencia ideal y construir una percepción de valor que impulse tu negocio.",
    path: "/identidad-de-marca",
    imagePlaceholder: "/images/Services/category-identidad-marca.png",
    icon: Palette
  },
  {
    id: "app-development",
    slug: "app-development",
    name: "Desarrollo de Aplicaciones",
    description: "Ya sea una aplicación móvil innovadora o un sistema web completo, en Avanxia Labs transformamos tu concepto en software funcional y escalable. Nuestro enfoque de desarrollo se centra en el usuario mientras implementamos las mejores prácticas de ingeniería.",
    path: "/desarrollo-software-aplicaciones",
    imagePlaceholder: "/images/Services/category-software.png",
    icon: Smartphone
  },
  {
    id: "social-media",
    slug: "social-media",
    name: "Gestión de Redes Sociales",
    description: "Tu presencia online es mucho más que un sitio web. En Avanxia Labs, te ayudamos a conectar con tu audiencia donde realmente pasa su tiempo: en las redes sociales y a través de estrategias de marketing digital efectivas.",
    path: "/redes-sociales-marketing",
    imagePlaceholder: "/images/Services/category-marketing-digital.png",
    icon: MessageSquare
  },
  {
    id: "audiovisual-production",
    slug: "audiovisual-production",
    name: "Producción Audiovisual",
    description: "El contenido visual y auditivo de alta calidad es fundamental para captar la atención y transmitir tu mensaje de manera impactante. En Avanxia Labs, ofrecemos servicios de producción multimedia que elevan tu marca, desde la edición de video profesional hasta motion graphics.",
    path: "/produccion-audiovisual",
    imagePlaceholder: "/images/Services/category-multimedia.png",
    icon: Clapperboard
  },
  {
    id: "ecommerce",
    slug: "ecommerce",
    name: "Soluciones E-commerce",
    description: "Vender online nunca ha sido tan crucial. En Avanxia Labs, transformamos tu visión de negocio en una tienda online potente, atractiva y optimizada para la conversión. Nos especializamos en crear soluciones de e-commerce a medida utilizando tecnologías robustas y escalables.",
    path: "/e-commerce",
    imagePlaceholder: "/images/Services/category-ecommerce.png",
    icon: ShoppingCart
  },
  {
    id: "seo-content-marketing",
    slug: "seo-content-marketing",
    name: "SEO y Marketing de Contenidos",
    description: "En el competitivo mundo online, ser visible es ser relevante. El SEO es la clave para asegurar que tus clientes potenciales te encuentren cuando buscan activamente tus productos o servicios. En Avanxia Labs, desarrollamos estrategias de SEO integrales y personalizadas.",
    path: "/seo-marketing-contenidos",
    imagePlaceholder: "/images/Services/category-seo.png",
    icon: Search
  },
  {
    id: "ppc-advertising",
    slug: "ppc-advertising",
    name: "Publicidad Pagada (PPC)",
    description: "Cuando necesitas resultados rápidos y un alcance segmentado, la publicidad pagada (PPC) es tu mejor aliada. En Avanxia Labs, diseñamos y gestionamos campañas de PPC en plataformas como Google Ads y Meta Ads que están optimizadas para maximizar tu retorno de la inversión.",
    path: "/publicidad-pagada-ppc",
    imagePlaceholder: "/images/Services/category-ppc.png",
    icon: MousePointerClick
  }
];