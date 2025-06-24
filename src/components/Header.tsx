import { useState, useRef, useEffect } from 'react';
import { useNavigate, NavLink, useLocation } from 'react-router-dom';
import {
  Menu,
  X,
  Home,
  Briefcase,
  Users,
  Mail,
  ChevronDown,
  Settings,
} from 'lucide-react';
import { Button } from './ui/button';
import { categoriesData } from '../data/categoriesData';
import { portfolioData } from '../data/portfolioData';

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  // ─── Forzar modo oscuro permanente ─────────────────────
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  // ─── Dropdowns (Desktop) ──────────────────────
  const [isServicesMenuOpen, setIsServicesMenuOpen] = useState(false);
  const servicesButtonRef = useRef<HTMLButtonElement>(null);
  const servicesTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const [isPortfolioOpen, setIsPortfolioOpen] = useState(false);
  const portfolioButtonRef = useRef<HTMLButtonElement>(null);
  const portfolioTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // ─── Menú móvil ─────────────────────────────
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileServicesSubMenuOpen, setIsMobileServicesSubMenuOpen] = useState(false);
  const [isMobilePortfolioSubMenuOpen, setIsMobilePortfolioSubMenuOpen] = useState(false);

  // Sincroniza el estado de los submenús con la ruta actual
  useEffect(() => {
    const isServicesPath = location.pathname.startsWith('/servicios');
    const isPortfolioPath = location.pathname.startsWith('/proyectos') || location.pathname === '/portfolio';

    setIsMobileServicesSubMenuOpen(isServicesPath);
    setIsMobilePortfolioSubMenuOpen(isPortfolioPath);
  }, [location.pathname]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((o) => !o);
  };

  // Click fuera cierra dropdowns (desktop)
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (servicesButtonRef.current && !servicesButtonRef.current.contains(e.target as Node)) {
        setIsServicesMenuOpen(false);
      }
      if (portfolioButtonRef.current && !portfolioButtonRef.current.contains(e.target as Node)) {
        setIsPortfolioOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const navLinks = [
    { name: 'Inicio', to: '/', icon: Home, id: 'home' },
    { name: 'Servicios', to: '/servicios', icon: Settings, id: 'services-menu' },
    { name: 'Portafolio', to: '/portfolio', icon: Briefcase, id: 'portfolio-menu' },
    { name: 'Nosotros', to: '/about', icon: Users, id: 'about' },
  ];

  const txtClass = 'text-white';

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 bg-card border-b border-border">
        <nav className="max-w-screen-xl mx-auto px-4 py-4 flex items-center justify-between">
          <a href="/" className="w-40">
            <img src="/images/portfolio/proyectos/logo.png" alt="Avanxia Labs" />
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => {
              if (link.id === 'services-menu') {
                return (
                  <div key={link.id} className="relative" onMouseEnter={() => { servicesTimeoutRef.current && clearTimeout(servicesTimeoutRef.current); setIsServicesMenuOpen(true); }} onMouseLeave={() => { servicesTimeoutRef.current = setTimeout(() => setIsServicesMenuOpen(false), 150); }}>
                    <button ref={servicesButtonRef} onClick={() => navigate('/servicios')} className={`group flex items-center pb-1 hover:text-primary ${txtClass}`}>
                      <Settings className={`mr-2 h-4 w-4 ${txtClass}`} />
                      Servicios
                      <ChevronDown className={`${txtClass} ml-1 h-4 w-4 transform transition-transform ${isServicesMenuOpen ? 'rotate-180' : ''}`} />
                      <span className={`absolute bottom-0 left-0 w-full h-[2px] bg-primary transition-transform ${isServicesMenuOpen || location.pathname.startsWith('/servicios') ? 'scale-x-100' : 'scale-x-0'}`}/>
                    </button>
                    {isServicesMenuOpen && (
                      <div className="fixed w-80 z-[100] bg-card/80 backdrop-blur-md border border-border rounded-md shadow-lg overflow-hidden" style={{ top: servicesButtonRef.current!.getBoundingClientRect().bottom + 8, left: servicesButtonRef.current!.getBoundingClientRect().left }}>
                        {categoriesData.map((cat, i) => (
                          <button key={cat.id} onMouseDown={() => { navigate(`/servicios/${cat.slug}`); setIsServicesMenuOpen(false); }} className={`flex items-center w-full px-4 py-2 text-sm hover:bg-muted hover:text-primary ${i > 0 ? 'border-t border-border/30' : ''} ${txtClass}`}>
                            <cat.icon className="w-5 h-5 mr-3 text-primary" /> {cat.name2}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }
              if (link.id === 'portfolio-menu') {
                return (
                  <div key={link.id} className="relative" onMouseEnter={() => { portfolioTimeoutRef.current && clearTimeout(portfolioTimeoutRef.current); setIsPortfolioOpen(true); }} onMouseLeave={() => { portfolioTimeoutRef.current = setTimeout(() => setIsPortfolioOpen(false), 150); }}>
                    <button ref={portfolioButtonRef} onClick={() => navigate('/portfolio')} className={`group flex items-center pb-1 hover:text-primary ${txtClass}`}>
                      <Briefcase className={`mr-2 h-4 w-4 ${txtClass}`} />
                      Portafolio
                      <ChevronDown className={`${txtClass} ml-1 h-4 w-4 transform transition-transform ${isPortfolioOpen ? 'rotate-180' : ''}`} />
                      <span className={`absolute bottom-0 left-0 w-full h-[2px] bg-primary transition-transform ${isPortfolioOpen || location.pathname.startsWith('/proyectos') || location.pathname === '/portfolio' ? 'scale-x-100' : 'scale-x-0'}`}/>
                    </button>
                    {isPortfolioOpen && (
                      <div className="fixed w-80 z-[100] bg-card/80 backdrop-blur-md border border-border rounded-md max-h-[70vh] overflow-y-auto" style={{ top: portfolioButtonRef.current!.getBoundingClientRect().bottom + 8, left: portfolioButtonRef.current!.getBoundingClientRect().left }}>
                        {portfolioData.map((item, i) => (
                          <button key={item.id} onMouseDown={() => { navigate(`/proyectos/${item.slug}`); setIsPortfolioOpen(false); }} className={`flex items-center w-full px-4 py-2 text-sm hover:bg-muted hover:text-primary ${i > 0 ? 'border-t border-border/30' : ''} ${txtClass}`}>
                            {item.icon && (<item.icon className="w-5 h-5 mr-3 text-primary" />)} {item.name ?? item.title}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }
              return (
                <NavLink key={link.id} to={link.to} className={({ isActive }) => `relative flex items-center pb-1 hover:text-primary ${txtClass} ${isActive ? 'text-primary font-semibold after:content-[\'\'] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-primary' : ''}`}>
                  <link.icon className={`mr-2 h-4 w-4`} /> {link.name}
                </NavLink>
              );
            })}
             <Button variant="primary" className="flex items-center gap-1 text-sm font-medium" onClick={() => navigate('/contact')}>
                <Mail className="h-4 w-4" /> Cotiza Gratis
            </Button>
          </div>

          {/* Mobile toggle */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMobileMenu} className={`ml-2 p-2 hover:text-primary ${txtClass}`} aria-label={isMobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}>
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile overlay */}
          <div className={`fixed inset-0 bg-black/30 z-40 md:hidden transition-opacity ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`} onClick={toggleMobileMenu}/>

          {/* Mobile sidebar */}
          <div className={`fixed top-0 left-0 bottom-0 z-50 w-full max-w-[90vw] sm:w-64 bg-sidebar text-[rgb(var(--color-sidebar-foreground))] dark:text-white transform transition-transform md:hidden ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
            <div className="p-5 border-b border-border">
              <h2 className="text-xl font-semibold">Menú</h2>
            </div>

            <nav className="p-5 space-y-2 overflow-y-auto h-[calc(100vh-140px)]">
              {navLinks.map((link) => {
                // ─── Enlace “Servicios” (Móvil) ──────────────────────────────
                if (link.id === 'services-menu') {
                  return (
                    <div key={link.id}>
                      {/* ✅ SOLUCIÓN: Contenedor flex para el "Botón Dividido" */}
                      <div className="flex items-center justify-between">
                        {/* Parte 1: El enlace principal (navega y cierra) */}
                        <button
                          onClick={() => {
                            navigate('/servicios');
                            toggleMobileMenu();
                          }}
                          className={`flex-grow flex items-center py-2 hover:text-primary ${txtClass}`}
                        >
                          <Settings className="mr-3 h-5 w-5" /> Servicios
                        </button>
                        {/* Parte 2: El botón del acordeón (solo despliega) */}
                        <button
                          onClick={() => {
                            setIsMobileServicesSubMenuOpen((prev) => !prev);
                            setIsMobilePortfolioSubMenuOpen(false);
                          }}
                          className="p-2 -mr-2" // Margen negativo para alinear visualmente
                          aria-label="Desplegar servicios"
                        >
                          <ChevronDown className={`h-5 w-5 transform transition-transform ${isMobileServicesSubMenuOpen ? 'rotate-180' : ''} ${txtClass}`} />
                        </button>
                      </div>
                      {isMobileServicesSubMenuOpen && (
                        <div className="pl-6 mt-1 space-y-1 border-l-2 border-primary/20">
                          {categoriesData.map((cat) => (
                            <button key={cat.id} onClick={() => { navigate(`/servicios/${cat.slug}`); toggleMobileMenu(); }} className={`block w-full text-left py-1.5 pl-2 hover:text-primary ${txtClass}`}>- {cat.name2}</button>
                          ))}
                          <button onClick={() => { navigate('/servicios'); toggleMobileMenu(); }} className={`block w-full text-left py-1.5 pl-2 font-semibold hover:text-primary ${txtClass}`}>- Ver Todos los Servicios</button>
                        </div>
                      )}
                    </div>
                  );
                }

                // ─── Enlace “Portafolio” (Móvil) ────────────────────────────
                if (link.id === 'portfolio-menu') {
                  return (
                    <div key={link.id}>
                      <div className="flex items-center justify-between">
                        <button
                          onClick={() => {
                            navigate('/portfolio');
                            toggleMobileMenu();
                          }}
                          className={`flex-grow flex items-center py-2 hover:text-primary ${txtClass}`}
                        >
                          <Briefcase className="mr-3 h-5 w-5" /> Portafolio
                        </button>
                        <button
                          onClick={() => {
                            setIsMobilePortfolioSubMenuOpen((prev) => !prev);
                            setIsMobileServicesSubMenuOpen(false);
                          }}
                          className="p-2 -mr-2"
                          aria-label="Desplegar portafolio"
                        >
                          <ChevronDown className={`h-5 w-5 transform transition-transform ${isMobilePortfolioSubMenuOpen ? 'rotate-180' : ''} ${txtClass}`} />
                        </button>
                      </div>
                      {isMobilePortfolioSubMenuOpen && (
                        <div className="pl-6 mt-1 space-y-1 border-l-2 border-primary/20">
                          {portfolioData.map((item) => (
                            <button key={item.id} onClick={() => { navigate(`/proyectos/${item.slug}`); toggleMobileMenu(); }} className={`block w-full text-left py-1.5 pl-2 hover:text-primary ${txtClass}`}>- {item.name ?? item.title}</button>
                          ))}
                          <button onClick={() => { navigate('/portfolio'); toggleMobileMenu(); }} className={`block w-full text-left py-1.5 pl-2 font-semibold hover:text-primary ${txtClass}`}>- Ver Todo el Portafolio</button>
                        </div>
                      )}
                    </div>
                  );
                }

                // ─── Enlaces Normales (Móvil) ───────────────────
                return (
                  <NavLink key={link.id} to={link.to} onClick={toggleMobileMenu} className={({ isActive }) => `flex items-center py-2 hover:text-primary ${isActive ? 'text-primary font-semibold' : txtClass}`}>
                    <link.icon className={`mr-3 h-5 w-5`} /> {link.name}
                  </NavLink>
                );
              })}
            </nav>

            <div className="p-5 border-t border-border">
              <Button variant="primary" size="cta" className="w-full" onClick={() => { navigate('/contact'); toggleMobileMenu(); }}>
                Cotiza Gratis
              </Button>  
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}