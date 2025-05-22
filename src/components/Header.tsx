import { useState, useRef, useEffect } from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
import {
  Menu,
  X,
  Home,
  Briefcase,
  Users,
  Mail,
  ChevronDown
} from 'lucide-react';
import ThemeSwitcher from './ThemeSwitcher';
import { Button } from './ui/button';
import { categoriesData, } from '../data/categoriesData';
import { portfolioData, } from '../data/portfolioData';

const Header = () => {
  const navigate = useNavigate();

  // Servicios dropdown
  const [isServicesMenuOpen, setIsServicesMenuOpen] = useState(false);
  const servicesButtonRef = useRef<HTMLButtonElement>(null);
  const servicesTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Portafolio dropdown
  const [isPortfolioOpen, setIsPortfolioOpen] = useState(false);
  const portfolioButtonRef = useRef<HTMLButtonElement>(null);
  const portfolioTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Mobile menu
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileServicesSubMenuOpen, setIsMobileServicesSubMenuOpen] = useState(false);

  // Close servicios on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (
        servicesButtonRef.current &&
        !servicesButtonRef.current.contains(e.target as Node) &&
        isServicesMenuOpen
      ) setIsServicesMenuOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [isServicesMenuOpen]);

  // Close portafolio on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (
        portfolioButtonRef.current &&
        !portfolioButtonRef.current.contains(e.target as Node) &&
        isPortfolioOpen
      ) setIsPortfolioOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [isPortfolioOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (isMobileServicesSubMenuOpen) setIsMobileServicesSubMenuOpen(false);
  };

  const navLinks = [
    { name: 'Inicio', to: '/', icon: Home, id: 'home' },
    { name: 'Servicios', to: '#', icon: Briefcase, id: 'services-menu' },
    { name: 'Portafolio', to: '#', icon: Briefcase, id: 'portfolio-menu' },
    { name: 'Nosotros', to: '/about', icon: Users, id: 'about' },
    { name: 'Cotiza Gratis', to: '/contact', icon: Mail, id: 'contact' },
  ];

  return (
    <>
      <header className="top-0 left-0 w-full z-[60] bg-card border-b border-border">
        <nav className="max-w-screen-xl mx-auto px-4 py-4 flex justify-between items-center">
          <a href="/" aria-label="Inicio" className="w-[250px]">
            <img src="/images/portfolio/proyectos/logo.png" alt="Logo" className="w-full" />
          </a>

          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map(link => {
              // Botón "Cotiza Gratis"
              if (link.id === 'contact') {
                return (
                  <Button
                    key={link.id}
                    variant="primary"
                    className="flex items-center gap-1 text-sm font-medium"
                    onClick={() => navigate(link.to)}
                  >
                    <Mail className="h-4 w-4" />
                    <span>Cotiza Gratis</span>
                  </Button>
                );
              }

// Dropdown Servicios
if (link.id === 'services-menu') {
  return (
    <div
      key="services"
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
        className="
          group flex items-center pb-1
          text-[rgb(var(--color-sidebar-foreground))]
          hover:text-[rgb(var(--color-primary))]
        "
      >
        <Briefcase className="mr-2 h-4 w-4 text-[rgb(var(--color-sidebar-foreground))] group-hover:text-[rgb(var(--color-primary))]" />
        Servicios
        <ChevronDown
          className={`
            ml-1 h-4 w-4 transition-transform
            ${isServicesMenuOpen ? 'rotate-180' : ''}
            text-[rgb(var(--color-sidebar-foreground))]
            group-hover:text-[rgb(var(--color-primary))]
          `}
        />
        <span
          className={`
            absolute bottom-0 left-0 w-full h-[2px]
            bg-[rgb(var(--color-primary))]
            origin-center transition-transform
            ${isServicesMenuOpen ? 'scale-x-100' : 'scale-x-0'}
          `}
        />
      </button>

      {isServicesMenuOpen && (
        <div
          className="
            fixed w-72 z-[100]
            bg-[rgba(var(--color-card),0.8)] backdrop-blur-md
            border border-[rgb(var(--color-border))] rounded-md
            shadow-lg
          "
          style={{
            top: servicesButtonRef.current!.getBoundingClientRect().bottom + 8,
            left: servicesButtonRef.current!.getBoundingClientRect().left,
          }}
        >
          {categoriesData.map((cat) => {
            const Icon = cat.icon || Briefcase;
            return (
              <button
                key={cat.id}
                onMouseDown={() => {
                  navigate(`/servicios/${cat.slug}`);
                  setIsServicesMenuOpen(false);
                }}
                className={`
                  flex items-center w-full px-4 py-2 text-sm
                  text-[rgb(var(--color-card-foreground))]
                  hover:bg-[rgb(var(--color-sidebar-hover))]
                  hover:text-[rgb(var(--color-primary))]
                `}
              >
                <Icon className="w-5 h-5 mr-3 text-[rgb(var(--color-primary))]" />
                <span>{cat.name}</span>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}



// Dropdown Portafolio (excluyendo dos proyectos)
if (link.id === 'portfolio-menu') {
  return (
    <div
      key="portfolio"
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
        className="
          group flex items-center pb-1
          text-[rgb(var(--color-sidebar-foreground))]
          hover:text-[rgb(var(--color-primary))]
        "
      >
        <Briefcase className="mr-2 h-4 w-4 text-[rgb(var(--color-sidebar-foreground))] group-hover:text-[rgb(var(--color-primary))]" />
        Portafolio
        <ChevronDown
          className={`
            ml-1 h-4 w-4 transition-transform
            ${isPortfolioOpen ? 'rotate-180' : ''}
            text-[rgb(var(--color-sidebar-foreground))]
            group-hover:text-[rgb(var(--color-primary))]
          `}
        />
        <span
          className={`
            absolute bottom-0 left-0 w-full h-[2px]
            bg-[rgb(var(--color-primary))]
            origin-center transition-transform
            ${isPortfolioOpen ? 'scale-x-100' : 'scale-x-0'}
          `}
        />
      </button>

      {isPortfolioOpen && (
        <div
          className="
            fixed w-72 z-[100]
            bg-[rgba(var(--color-card),0.8)] backdrop-blur-md
            border border-[rgb(var(--color-border))] rounded-md
            shadow-lg max-h-64 overflow-y-auto
          "
          style={{
            top: portfolioButtonRef.current!.getBoundingClientRect().bottom + 8,
            left: portfolioButtonRef.current!.getBoundingClientRect().left,
          }}
        >
          {portfolioData
            .filter(item => item.id !== 'acme-seo-audit' && item.id !== 'startup-ppc-launch')
            .map((item) => {
              const label = item.name ?? item.title;
              return (
                <button
                  key={item.id}
                  onMouseDown={() => {
                    navigate(`/proyectos/${item.slug}`);
                    setIsPortfolioOpen(false);
                  }}
                  className={`
                    flex items-center w-full px-4 py-2 text-sm
                    text-[rgb(var(--color-card-foreground))]
                    hover:bg-[rgb(var(--color-sidebar-hover))]
                    hover:text-[rgb(var(--color-primary))]
                  `}
                >
                  {item.icon && (
                    <item.icon className="w-5 h-5 mr-3 text-[rgb(var(--color-primary))]" />
                  )}
                  <span>{label}</span>
                </button>
              );
            })}
        </div>
      )}
    </div>
  );
}

              // Enlaces simples
              return (
                <NavLink
                  key={link.name}
                  to={link.to}
                  className={({ isActive }) =>
                    `group flex items-center pb-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-primary after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100 ${
                      isActive ? 'text-primary after:scale-x-100' : 'text-sidebar-foreground'
                    }`
                  }
                >
                  <link.icon className="mr-2 h-4 w-4" />
                  {link.name}
                </NavLink>
              );
            })}

            <ThemeSwitcher />
          </div>

          <div className="md:hidden flex items-center">
            <ThemeSwitcher />
            <button onClick={toggleMobileMenu} className="p-2" aria-label="Menú móvil">
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

        </nav>
      </header>

      {/* Overlay para móvil */}
      <div
        className={`fixed inset-0 bg-black/30 z-40 md:hidden transition-opacity ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={toggleMobileMenu}
      />

      {/* Menú lateral móvil */}
      <div
        className={`fixed top-0 left-0 bottom-0 z-50 w-full max-w-[90vw] sm:w-64 bg-sidebar transform transition-transform md:hidden ${
          isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-5 border-b border-border">
          <h2 className="text-xl font-semibold">Menú</h2>
        </div>
        <nav className="p-5 space-y-2 overflow-y-auto h-[calc(100vh-140px)]">
          {/* Aquí puedes replicar la estructura de navLinks para móvil */}
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
};

export default Header;
