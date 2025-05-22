// src/components/Header.tsx
import { useState, useRef, useEffect } from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
import {
  Menu,
  X,
  Home,
  Briefcase,
  Users,
  Mail,
  ChevronDown,
  Settings 
} from 'lucide-react';
import ThemeSwitcher from './ThemeSwitcher';
import { Button } from './ui/button';
import { categoriesData } from '../data/categoriesData';
import { portfolioData } from '../data/portfolioData';

export default function Header() {
  const navigate = useNavigate();

  // ─── Dropdown Servicios ─────────────────────
  const [isServicesMenuOpen, setIsServicesMenuOpen] = useState(false);
  const servicesButtonRef = useRef<HTMLButtonElement>(null);
  const servicesTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // ─── Dropdown Portafolio ────────────────────
  const [isPortfolioOpen, setIsPortfolioOpen] = useState(false);
  const portfolioButtonRef = useRef<HTMLButtonElement>(null);
  const portfolioTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // ─── Menú móvil ─────────────────────────────
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileServicesSubMenuOpen, setIsMobileServicesSubMenuOpen] = useState(false);
  const [isMobilePortfolioSubMenuOpen, setIsMobilePortfolioSubMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(o => !o);
    // al cerrar, cerrar submenús
    if (isMobileMenuOpen) {
      setIsMobileServicesSubMenuOpen(false);
      setIsMobilePortfolioSubMenuOpen(false);
    }
  };

  // ─── Click fuera cierra desktop dropdowns ───
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (
        servicesButtonRef.current &&
        !servicesButtonRef.current.contains(e.target as Node)
      ) {
        setIsServicesMenuOpen(false);
      }
      if (
        portfolioButtonRef.current &&
        !portfolioButtonRef.current.contains(e.target as Node)
      ) {
        setIsPortfolioOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  // ─── Nav links ──────────────────────────────
  const navLinks = [
    { name: 'Inicio', to: '/', icon: Home, id: 'home' },
    { name: 'Servicios', to: '#', icon: Briefcase, id: 'services-menu' },
    { name: 'Portafolio', to: '#', icon: Briefcase, id: 'portfolio-menu' },
    { name: 'Nosotros', to: '/about', icon: Users, id: 'about' },
    { name: 'Cotiza Gratis', to: '/contact', icon: Mail, id: 'contact' },
  ];

  // Utilidad para la clase de texto base en claro/oscuro
  const txtClass = "text-[rgb(var(--color-sidebar-foreground))] dark:text-white";

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 bg-card border-b border-border">
        <nav className="max-w-screen-xl mx-auto px-4 py-4 flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="w-40">
            <img src="/images/portfolio/proyectos/logo.png" alt="Avanxia Labs" />
          </a>

          {/* ─── Desktop ───────────────────────── */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map(link => {
              // 1) Botón Cotiza Gratis
              if (link.id === 'contact') {
                return (
                  <Button
                    key={link.id}
                    variant="primary"
                    className="flex items-center gap-1 text-sm font-medium"
                    onClick={() => navigate(link.to)}
                  >
                    <Mail className="h-4 w-4" /> Cotiza Gratis
                  </Button>
                );
              }

              // 2) Dropdown Servicios
              if (link.id === 'services-menu') {
                return (
                  <div
                    key={link.id}
                    className="relative"
                    onMouseEnter={() => {
                      if (servicesTimeoutRef.current) clearTimeout(servicesTimeoutRef.current);
                      setIsServicesMenuOpen(true);
                    }}
                    onMouseLeave={() => {
                      servicesTimeoutRef.current = setTimeout(() => {
                        setIsServicesMenuOpen(false);
                      }, 150);
                    }}
                  >
                    <button
                      ref={servicesButtonRef}
                      className={`group flex items-center pb-1 hover:text-primary ${txtClass}`}
                    >
                      <Settings className={`mr-2 h-4 w-4 ${txtClass}`} />
                      Servicios
                      <ChevronDown
                        className={`ml-1 h-4 w-4 transform transition-transform ${
                          isServicesMenuOpen ? 'rotate-180' : ''
                        } ${txtClass}`}
                      />
                      <span
                        className={`absolute bottom-0 left-0 w-full h-[2px] bg-primary origin-center transition-transform ${
                          isServicesMenuOpen ? 'scale-x-100' : 'scale-x-0'
                        }`}
                      />
                    </button>
                    {isServicesMenuOpen && (
                      <div
                          className="fixed w-80 z-[100] bg-card/80 backdrop-blur-md border border-border rounded-md shadow-lg overflow-hidden"                        style={{
                          top: servicesButtonRef.current!.getBoundingClientRect().bottom + 8,
                          left: servicesButtonRef.current!.getBoundingClientRect().left,
                        }}
                      >
                        {categoriesData.map((cat, i) => {
                          const Icon = cat.icon || Briefcase;
                          return (
                            <button
                              key={cat.id}
                              onMouseDown={() => {
                                navigate(`/servicios/${cat.slug}`);
                                setIsServicesMenuOpen(false);
                              }}
                              className={`flex items-center w-full px-4 py-2 text-sm hover:bg-muted hover:text-primary ${
                                i > 0 ? 'border-t border-border/30' : ''
                              } ${txtClass}`}
                            >
                              <Icon className="w-5 h-5 mr-3 text-primary" />
                              {cat.name}
                            </button>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              }

              // 3) Dropdown Portafolio
              if (link.id === 'portfolio-menu') {
                return (
                  <div
                    key={link.id}
                    className="relative"
                    onMouseEnter={() => {
                      if (portfolioTimeoutRef.current) clearTimeout(portfolioTimeoutRef.current);
                      setIsPortfolioOpen(true);
                    }}
                    onMouseLeave={() => {
                      portfolioTimeoutRef.current = setTimeout(() => {
                        setIsPortfolioOpen(false);
                      }, 150);
                    }}
                  >
                    <button
                      ref={portfolioButtonRef}
                      className={`group flex items-center pb-1 hover:text-primary ${txtClass}`}
                    >
                      <Briefcase className={`mr-2 h-4 w-4 ${txtClass}`} />
                      Portafolio
                      <ChevronDown
                        className={`ml-1 h-4 w-4 transform transition-transform ${
                          isPortfolioOpen ? 'rotate-180' : ''
                        } ${txtClass}`}
                      />
                      <span
                        className={`absolute bottom-0 left-0 w-full h-[2px] bg-primary origin-center transition-transform ${
                          isPortfolioOpen ? 'scale-x-100' : 'scale-x-0'
                        }`}
                      />
                    </button>
                    {isPortfolioOpen && (
                    <div
                      className="portfolio-dropdown fixed w-80 z-[100] bg-card/80 backdrop-blur-md border border-border rounded-md max-h-[70vh] overflow-y-auto"
                      style={{
                        top: portfolioButtonRef.current!.getBoundingClientRect().bottom + 8,
                        left: portfolioButtonRef.current!.getBoundingClientRect().left,
                      }}
                    >
                      {portfolioData.map((item, i) => (
                        <button
                          key={item.id}
                          onMouseDown={() => {
                            navigate(`/proyectos/${item.slug}`);
                            setIsPortfolioOpen(false);
                          }}
                          className={`flex items-center w-full px-4 py-2 text-sm hover:bg-muted hover:text-primary ${
                            i > 0 ? 'border-t border-border/30' : ''
                          } ${txtClass}`}
                        >
                          {item.icon && <item.icon className="w-5 h-5 mr-3 text-primary" />}
                          {item.name ?? item.title}
                        </button>
                      ))}
                    </div>
                    )}
                  </div>
                );
              }

              // 4) Enlace simple
              return (
                <NavLink
                  key={link.id}
                  to={link.to}
                  className={({ isActive }) =>
                    `group relative flex items-center pb-1 hover:text-primary ${txtClass} ` +
                    `after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-primary ` +
                    `after:origin-center after:scale-x-0 after:transition-transform after:duration-300 ` +
                    `${isActive ? 'after:scale-x-100 text-primary' : ''}`
                  }
                >
                  <link.icon className={`mr-2 h-4 w-4 ${txtClass}`} />
                  {link.name}
                </NavLink>
              );
            })}
            <ThemeSwitcher />
          </div>

          {/* ─── Mobile toggle ─────────────────────── */}
          <div className="md:hidden flex items-center">
            <ThemeSwitcher />
            <button
              onClick={toggleMobileMenu}
              className={`ml-2 p-2 hover:text-primary ${txtClass}`}
              aria-label={isMobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>
      </header>

      {/* ─── Mobile overlay ─────────────────────── */}
      <div
        className={`fixed inset-0 bg-black/30 z-40 md:hidden transition-opacity ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={toggleMobileMenu}
      />

      {/* ─── Mobile sidebar ────────────────────── */}
      <div
        className={`fixed top-0 left-0 bottom-0 z-50 w-full max-w-[90vw] sm:w-64 bg-sidebar text-[rgb(var(--color-sidebar-foreground))] dark:text-white
                    transform transition-transform md:hidden ${
                      isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
                    }`}
      >
        <div className="p-5 border-b border-border">
          <h2 className="text-xl font-semibold">Menú</h2>
        </div>
        <nav className="p-5 space-y-2 overflow-y-auto h-[calc(100vh-140px)]">
          {navLinks.map(link => {
            // Servicios submenú móvil
            if (link.id === 'services-menu') {
              return (
                <div key={link.id}>
                  <button
                    onClick={() => setIsMobileServicesSubMenuOpen(o => !o)}
                    className={`w-full flex items-center justify-between py-2 hover:text-primary ${txtClass}`}
                  >
                    <div className="flex items-center">
                      <Briefcase className="mr-3 h-5 w-5" />
                      Servicios
                    </div>
                    <ChevronDown
                      className={`h-5 w-5 transform transition-transform ${
                        isMobileServicesSubMenuOpen ? 'rotate-180' : ''
                      } ${txtClass}`}
                    />
                  </button>
                  {isMobileServicesSubMenuOpen && (
                    <div className="pl-6 mt-1 space-y-1">
                      {categoriesData.map(cat => (
                        <button
                          key={cat.id}
                          onClick={() => {
                            navigate(`/servicios/${cat.slug}`);
                            toggleMobileMenu();
                          }}
                          className={`block w-full text-left py-1 hover:text-primary ${txtClass}`}
                        >
                          {cat.name}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              );
            }
            // Portafolio submenú móvil
            if (link.id === 'portfolio-menu') {
              return (
                <div key={link.id}>
                  <button
                    onClick={() => setIsMobilePortfolioSubMenuOpen(o => !o)}
                    className={`w-full flex items-center justify-between py-2 hover:text-primary ${txtClass}`}
                  >
                    <div className="flex items-center">
                      <Settings className="mr-3 h-5 w-5" />
                      Portafolio
                    </div>
                    <ChevronDown
                      className={`h-5 w-5 transform transition-transform ${
                        isMobilePortfolioSubMenuOpen ? 'rotate-180' : ''
                      } ${txtClass}`}
                    />
                  </button>
                  {isMobilePortfolioSubMenuOpen && (
                    <div className="pl-6 mt-1 space-y-1">
                      {portfolioData
                        .filter(item => item.id !== 'acme-seo-audit' && item.id !== 'startup-ppc-launch')
                        .map(item => (
                          <button
                            key={item.id}
                            onClick={() => {
                              navigate(`/proyectos/${item.slug}`);
                              toggleMobileMenu();
                            }}
                            className={`block w-full text-left py-1 hover:text-primary ${txtClass}`}
                          >
                            {item.name ?? item.title}
                          </button>
                        ))}
                    </div>
                  )}
                </div>
              );
            }
            // Resto de enlaces
            return (
              <NavLink
                key={link.id}
                to={link.to}
                onClick={toggleMobileMenu}
                className={({ isActive }) =>
                  `flex items-center py-2 hover:text-primary ${
                    isActive ? 'text-primary font-semibold' : txtClass
                  }`
                }
              >
                <link.icon className={`mr-3 h-5 w-5 ${txtClass}`} /> {link.name}
              </NavLink>
            );
          })}
        </nav>
        <div className="p-5 border-t border-border">
          <Button
            variant="primary"
            size="cta"
            className="w-full"
            onClick={() => {
              navigate('/contact');
              toggleMobileMenu();
            }}
          >
            Empezar Proyecto
          </Button>
        </div>
      </div>
    </>
  );
}
