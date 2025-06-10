// src/data/categoriesData.ts
import { Palette, Globe, MessageSquare, ShoppingCart, Search, MousePointerClick, Clapperboard, Smartphone } from 'lucide-react';
import { LucideIcon } from 'lucide-react';

export interface ServiceCategory {
  videoUrl: any;
  videoPlaceholder: string | undefined;
  id: string;
  name: string;
  name2: string;              // Nuevo campo para mostrar en el header desplegable
  description: string;
  path: string;
  imagePlaceholder: string; 
  slug: string;               // Añadido para mejor manejo de rutas dinámicas
  icon: LucideIcon;           // Ícono para representar la categoría visualmente
  demoVideoUrl: any;
}

export const categoriesData: ServiceCategory[] = [
  {
    id: "desarrollo-web",
    slug: "desarrollo-web",
    name: "Tu web que convierte",
    name2: "Desarrollo Web",
    description: "Carga rápida, diseño claro y un camino directo al “Comprar”",
    path: "/desarrollo-web",
    imagePlaceholder: "/images/Services/category-desarrollo-web.png",
    icon: Globe,
    videoPlaceholder: "/videos/apolo1-opt.mp4",
    videoUrl: '/videos/paginasweb.mp4',
    demoVideoUrl: '/videos/prueba1.mp4',
  },
  {
    id: "identidad-de-marca",
    slug: "identidad-de-marca",
    name: "Marca inolvidable",
    name2: "Identidad de Marca",
    description: "Haz que te recuerden por lo que ofreces y por cómo los haces sentir.",
    path: "/identidad-de-marca",
    imagePlaceholder: "/images/Services/category-identidad-marca.png",
    icon: Palette,
    videoPlaceholder: "/videos/apolo1-opt.mp4",
    videoUrl: '/videos/brand.mp4',
    demoVideoUrl: '/videos/branding.mp4',
  },
  {
    id: "desarrollo-software-aplicaciones",
    slug: "desarrollo-software-aplicaciones",
    name: "App lista para escalar",
    name2: "Desarrollo Software y Aplicaciones",
    description: "Convertimos tu idea en software estable, fácil de usar y crecer.",
    path: "/desarrollo-software-aplicaciones",
    imagePlaceholder: "/images/Services/category-software.png",
    icon: Smartphone,
    videoPlaceholder: "/videos/apolo1-opt.mp4",
    videoUrl: '/videos/aplicaciones.mp4',
    demoVideoUrl: '/videos/desapps.mp4',
  },
  {
    id: "redes-sociales-marketing",
    slug: "redes-sociales-marketing",
    name: "Redes que venden",
    name2: "Redes Sociales y Marketing",
    description: "Contenido atractivo y anuncios que convierten seguidores en clientes.",
    path: "/redes-sociales-marketing",
    imagePlaceholder: "/images/Services/category-marketing-digital.png",
    icon: MessageSquare,
    videoPlaceholder: "/videos/socialmedia.mp4",
    videoUrl: '/videos/socialmedia.mp4',
    demoVideoUrl: '/videos/redessociales.mp4',
  },
  {
    id: "produccion-audiovisual",
    slug: "produccion-audiovisual",
    name: "Contenido que engancha",
    name2: "Producción Audiovisual",
    description: "Desde motion graphics hasta edición pro, atrae y retén audiencia.",
    path: "/produccion-audiovisual",
    imagePlaceholder: "/images/Services/category-multimedia.png",
    icon: Clapperboard,
    videoPlaceholder: "/videos/apolo1-opt.mp4",
    videoUrl: '/videos/pvisual.mp4',
    demoVideoUrl: '/videos/paudiovisual.mp4',
  },
  {
    id: "e-commerce",
    slug: "e-commerce",
    name: "Vende mientras duermes",
    name2: "E-commerce",
    description: "Montamos un e-commerce sólido, rápido y optimizado para conversión.",
    path: "/e-commerce",
    imagePlaceholder: "/images/Services/category-ecommerce.png",
    icon: ShoppingCart,
    videoPlaceholder: "/videos/apolo1-opt.mp4",
    videoUrl: '/videos/ecomer.mp4',
    demoVideoUrl: '',
  },
  {
    id: "seo-marketing-contenidos",
    slug: "seo-marketing-contenidos",
    name: "Sé el primero en Google",
    name2: "SEO y Marketing de Contenidos",
    description: "Sube de posición y recibe visitas que ya buscan lo que ofreces.",
    path: "/seo-marketing-contenidos",
    imagePlaceholder: "/images/Services/category-seo.png",
    icon: Search,
    videoPlaceholder: "/videos/apolo1-opt.mp4",
    videoUrl: '/videos/seo.mp4',
    demoVideoUrl: '',
  },
  {
    id: "publicidad-pagada-ppc",
    slug: "publicidad-pagada-ppc",
    name: "Anuncios que venden",
    name2: "Publicidad Pagada (PPC)",
    description: "Dirigimos tus anuncios al cliente listo para comprar y medimos cada peso invertido.",
    path: "/publicidad-pagada-ppc",
    imagePlaceholder: "/images/Services/category-ppc.png",
    icon: MousePointerClick,
    videoPlaceholder: "/videos/apolo1-opt.mp4",
    videoUrl: '/videos/pagada.mp4',
    demoVideoUrl: '',
  }
];
