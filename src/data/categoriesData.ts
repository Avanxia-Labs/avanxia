// src/data/categoriesData.ts
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
    description: "In the digital age, your website is the heart of your online presence and often the first point of contact with your future clients. At Avanxia Labs, we don't just build web pages; we create high-performance digital experiences that are fast, secure, visually appealing, and most importantly, designed to convert.",
    path: "/services/web-development",
    imagePlaceholder: "/images/placeholders/category-desarrollo-web.jpg",
    icon: Globe
  },
  {
    id: "brand-identity",
    slug: "brand-identity",
    name: "Identidad de Marca y Branding",
    description: "In a saturated digital world, your brand is your signature, your promise, and your main differentiator. At Avanxia Labs, we understand that a powerful brand identity goes far beyond a simple logo; it's about telling your story, emotionally connecting with your ideal audience, and building a perception of value that drives your business.",
    path: "/services/brand-identity",
    imagePlaceholder: "/images/placeholders/category-identidad-marca.jpg",
    icon: Palette
  },
  {
    id: "app-development",
    slug: "app-development",
    name: "Desarrollo de Aplicaciones",
    description: "Whether it's an innovative mobile app or a complete web system, at Avanxia Labs we transform your concept into functional and scalable software. Our development approach focuses on the user while implementing the best engineering practices.",
    path: "/services/app-development",
    imagePlaceholder: "/images/placeholders/category-software.jpg",
    icon: Smartphone
  },
  {
    id: "social-media",
    slug: "social-media",
    name: "Gestión de Redes Sociales",
    description: "Your online presence is much more than a website. At Avanxia Labs, we help you connect with your audience where they really spend their time: on social media and through effective digital marketing strategies.",
    path: "/services/social-media",
    imagePlaceholder: "/images/placeholders/category-marketing-digital.jpg",
    icon: MessageSquare
  },
  {
    id: "audiovisual-production",
    slug: "audiovisual-production",
    name: "Producción Audiovisual",
    description: "High-quality visual and audio content is essential to capture attention and convey your message impactfully. At Avanxia Labs, we offer multimedia production services that elevate your brand, from professional video editing to motion graphics.",
    path: "/services/audiovisual-production",
    imagePlaceholder: "/images/placeholders/category-multimedia.jpg",
    icon: Clapperboard
  },
  {
    id: "ecommerce",
    slug: "ecommerce",
    name: "Soluciones E-commerce",
    description: "Selling online has never been more crucial. At Avanxia Labs, we transform your business vision into a powerful, attractive, and conversion-optimized online store. We specialize in creating custom e-commerce solutions using robust and scalable technologies.",
    path: "/services/ecommerce",
    imagePlaceholder: "/images/placeholders/category-ecommerce.jpg",
    icon: ShoppingCart
  },
  {
    id: "seo-content-marketing",
    slug: "seo-content-marketing",
    name: "SEO y Marketing de Contenidos",
    description: "In the competitive online world, being visible means being relevant. SEO is the key to ensuring that your potential customers find you when they're actively searching for your products or services. At Avanxia Labs, we develop comprehensive and customized SEO strategies.",
    path: "/services/seo-content-marketing",
    imagePlaceholder: "/images/placeholders/category-seo.jpg",
    icon: Search
  },
  {
    id: "ppc-advertising",
    slug: "ppc-advertising",
    name: "Publicidad Pagada (PPC)",
    description: "When you need quick results and targeted reach, pay-per-click (PPC) advertising is your best ally. At Avanxia Labs, we design and manage PPC campaigns on platforms like Google Ads and Meta Ads that are optimized to maximize your return on investment.",
    path: "/services/ppc-advertising",
    imagePlaceholder: "/images/placeholders/category-ppc.jpg",
    icon: MousePointerClick
  }
];