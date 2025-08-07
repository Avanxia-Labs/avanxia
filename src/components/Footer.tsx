// src/components/Footer.tsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Briefcase,
  User,
  Mail,
  Home,
} from 'lucide-react';
import { categoriesData } from '../data/categoriesData';
import { portfolioData } from '../data/portfolioData';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  // Filtrar proyectos no disponibles
  const visiblePortfolio = portfolioData;

  // Dividir portafolio en dos mitades parejas
  const half = Math.ceil(visiblePortfolio.length / 2);
  const leftPortfolio = visiblePortfolio.slice(0, half);
  const rightPortfolio = visiblePortfolio.slice(half);

  // Secciones para móvil
  const mobileSections = [
    { title: 'Inicio', links: [{ name: 'Página principal', to: '/' }] },
    {
      title: 'Servicios',
      links: categoriesData.map((cat) => ({
        name: cat.name,
        to: `/servicios/${cat.slug}`,
      })),
    },
    {
      title: 'Portafolio',
      links: visiblePortfolio.map((item) => ({
        name: item.name ?? item.title,
        to: `/proyectos/${item.slug}`,
      })),
    },
    { title: 'Nosotros', links: [{ name: 'Conócenos', to: '/about' }] },
    { title: 'Cotiza Gratis', links: [{ name: 'Empieza ahora', to: '/contact' }] },
  ];

  return (
    <footer className="w-full bg-card text-foreground border-t border-border pt-10 pb-6">
      {/* MOBILE */}
      <div className="sm:hidden px-4">
        <div className="flex justify-center gap-4 mb-6">
          <a
            href="https://www.linkedin.com/company/avanxia/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-card p-3 rounded-full shadow hover:scale-105 transition"
          >
            <svg className="w-5 h-5 text-foreground" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
          <a
            href="https://www.instagram.com/avanxia"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-card p-3 rounded-full shadow hover:scale-105 transition"
          >
            <Instagram className="w-5 h-5 text-foreground" />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=61579330342665"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-card p-3 rounded-full shadow hover:scale-105 transition"
          >
            <Facebook className="w-5 h-5 text-foreground" />
          </a>
        </div>
        <div className="space-y-8 divide-y divide-border/40 mb-10">
          {mobileSections.map((section) => (
            <div key={section.title} className="py-10">
              <h5 className="text-sm font-semibold mb-6">{section.title}</h5>
              <ul className="space-y-2 text-sm">
                {section.links.map((link) => (
                  <li key={link.to}>
                    <NavLink to={link.to} className="hover:text-primary transition">
                      {link.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* DESKTOP */}
      <div className="hidden sm:flex container mx-auto px-4 gap-6 mb-8">
          {/* IZQUIERDA: logo + redes alineadas al tope */}
          <div className="w-1/5 flex flex-col items-center">
            <img
              src="/images/portfolio/proyectos/logo.png"
              alt="Avanxia Logo"
              className="h-12 w-auto"
            />
            <div className="flex flex-col gap-y-3 mt-2  py-6">
              <a href="https://www.linkedin.com/company/avanxia/" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-primary transition text-sm">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                LinkedIn
              </a>
              <a href="https://www.instagram.com/avanxia" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-primary transition text-sm">
                <Instagram className="w-5 h-5 mr-2" /> Instagram
              </a>
              <a href="https://www.facebook.com/profile.php?id=61579330342665" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-primary transition text-sm">
                <Facebook className="w-5 h-5 mr-2" /> Facebook
              </a>
              {/* Comentados temporalmente - Enlaces no disponibles */}
              {/* <a href="#" className="flex items-center hover:text-primary transition text-sm">
                <Twitter className="w-5 h-5 mr-2" /> Twitter
              </a>
              <a href="#" className="flex items-center hover:text-primary transition text-sm">
                <Youtube className="w-5 h-5 mr-2" /> YouTube
              </a> */}
            </div>
          </div>

        {/* DERECHA: grid de navegación */}
        <div className="w-4/5 grid grid-cols-5 gap-6 text-sm leading-relaxed">
          {/* Inicio */}
          <div className="flex flex-col gap-y-1.5">
            <h5 className="flex items-center font-semibold">
              <Home className="mr-2 w-4 h-4" /> Inicio
            </h5>
            <NavLink to="/" className="hover:text-primary transition">
              Página principal
            </NavLink>
          </div>

          {/* Servicios */}
          <div className="flex flex-col gap-y-1.5">
            <h5 className="flex items-center font-semibold">
              <Briefcase className="mr-2 w-4 h-4" /> Servicios
            </h5>
            {categoriesData.map((cat) => (
              <NavLink
                key={cat.id}
                to={`/servicios/${cat.slug}`}
                className="hover:text-primary transition"
              >
                {cat.name}
              </NavLink>
            ))}
          </div>

          {/* Portafolio */}
          <div className="flex flex-col gap-y-1.5">
            <h5 className="flex items-center font-semibold">
              <User className="mr-2 w-4 h-4" /> Portafolio
            </h5>
            <div className="flex gap-x-4">
              <ul className="flex flex-col gap-y-1.5">
                {leftPortfolio.map((item) => (
                  <li key={item.slug}>
                    <NavLink
                      to={`/proyectos/${item.slug}`}
                      className="hover:text-primary transition"
                    >
                      {item.name ?? item.title}
                    </NavLink>
                  </li>
                ))}
              </ul>
              <ul className="flex flex-col gap-y-1.5">
                {rightPortfolio.map((item) => (
                  <li key={item.slug}>
                    <NavLink
                      to={`/proyectos/${item.slug}`}
                      className="hover:text-primary transition"
                    >
                      {item.name ?? item.title}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Nosotros */}
          <div className="flex flex-col gap-y-1.5">
            <h5 className="flex items-center font-semibold">
              <User className="mr-2 w-4 h-4" /> Nosotros
            </h5>
            <NavLink to="/about" className="hover:text-primary transition">
              Conócenos
            </NavLink>
          </div>

          {/* Cotiza Gratis */}
          <div className="flex flex-col gap-y-1.5">
            <h5 className="flex items-center font-semibold">
              <Mail className="mr-2 w-4 h-4" /> Cotiza Gratis
            </h5>
            <NavLink
              to="/contact"
              className="text-primary hover:underline transition"
            >
              Empieza ahora
            </NavLink>
          </div>
        </div>
      </div>

      {/* Derechos */}
      <p className="text-center text-xs text-muted-foreground">
        &copy; {currentYear} Avanxia Labs. Diseñado con 💡 en México.
      </p>
    </footer>
  );
};

export default Footer;
