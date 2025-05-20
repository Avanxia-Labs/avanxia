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
import { categoriesData, type ServiceCategory } from '../data/categoriesData';

const Header = () => {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesMenuOpen, setIsServicesMenuOpen] = useState(false);
  // Referencia para el botón Servicios - necesario para posicionar el submenú
  const servicesButtonRef = useRef<HTMLButtonElement>(null);
  const [isMobileServicesSubMenuOpen, setIsMobileServicesSubMenuOpen] = useState(false);

  const servicesMenuRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const timeoutIdRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  let servicesMenuTimer: NodeJS.Timeout | null = null; // Para el retardo del hover

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (isMobileServicesSubMenuOpen) {
      setIsMobileServicesSubMenuOpen(false); // Cerrar submenú de servicios si el menú principal se cierra
    }
  };

  // Lógica para cerrar el menú de servicios de escritorio si se hace clic fuera
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (servicesMenuRef.current && !servicesMenuRef.current.contains(event.target as Node)) {
        setIsServicesMenuOpen(false);
      }
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node) && isMobileMenuOpen) {
        // Si se hace clic fuera del menú móvil y está abierto, cerrarlo.
        // No necesitamos esta lógica aquí si el backdrop ya lo cierra. 
        // Considerar si el backdrop es suficiente o si se necesita también esta lógica.
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      if (servicesMenuTimer) {
        clearTimeout(servicesMenuTimer);
      }
    };
  }, [isMobileMenuOpen, servicesMenuTimer]);

  const navLinks = [
    { name: 'Inicio', to: '/', icon: Home, id: 'home' },
    { name: 'Servicios', to: '#', icon: Briefcase, id: 'services-menu' }, // 'to' es '#' ya que el botón maneja la acción
    { name: 'Nosotros', to: '/about', icon: Users, id: 'about' },
    { name: 'Contacto', to: '/contact', icon: Mail, id: 'contact' },
  ];

  const handleServicesMenuEnter = () => {
    if (timeoutIdRef.current) {
      clearTimeout(timeoutIdRef.current);
      timeoutIdRef.current = null;
    }
    setIsServicesMenuOpen(true);
  };

  const handleServicesMenuLeave = () => {
    // Añadimos un pequeño retraso antes de cerrar para mejorar la UX
    timeoutIdRef.current = setTimeout(() => {
      setIsServicesMenuOpen(false);
    }, 150);
  };

  // Manejador para el evento click en el documento para cerrar el menú
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        servicesButtonRef.current && 
        !servicesButtonRef.current.contains(event.target as Node) &&
        isServicesMenuOpen
      ) {
        setIsServicesMenuOpen(false);
      }
    }
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isServicesMenuOpen]);

  return (
    <>
      {/* Reintroducir overflow-x-hidden para diagnóstico */}
      <header className="fixed top-0 left-0 w-full z-[60] bg-card border-b border-border overflow-x-hidden">
        {/* Reintroducir overflow-x-hidden para diagnóstico */}
        <nav className="w-full max-w-screen-xl mx-auto px-4 py-4 flex justify-between items-center overflow-x-hidden">
          <div className="w-[250px] h-auto cursor-pointer">
            <a 
              href="/"
              aria-label="Volver a la página de inicio de Avanxia Labs"
              className="block w-full h-full"
            >
              <img 
                src="/images/portfolio/proyectos/logo.png" 
                alt="Avanxia Labs Logo"
                className="w-full h-auto object-contain" 
              />
            </a>
          </div>

          {/* Menú de escritorio */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => {
              if (link.id === 'services-menu') {
                return (
                  <div
                    key={link.name}
                    className="relative block h-fit"
                    onMouseEnter={handleServicesMenuEnter}
                    onMouseLeave={handleServicesMenuLeave}
                  >
                    <button
                      ref={servicesButtonRef}
                      className="group relative flex items-center transition duration-300 pb-1 text-sidebar-foreground hover:text-primary cursor-default"
                    >
                      <Briefcase className="mr-2 h-4 w-4" />
                      Servicios
                      <ChevronDown
                        className={`ml-1 h-4 w-4 transition-transform duration-200 ${
                          isServicesMenuOpen ? 'rotate-180' : ''
                        }`}
                      />
                      <span
                        className={`content-[''] absolute bottom-0 left-0 w-full h-[2px] bg-primary origin-center transition-transform duration-300 ease-out ${
                          isServicesMenuOpen ? 'scale-x-100' : 'scale-x-0'
                        } group-hover:scale-x-100`}
                      />
                    </button>
                    {isServicesMenuOpen && (
                      <div className="fixed w-72 z-[100]" style={{
                        top: `${servicesButtonRef.current ? servicesButtonRef.current.getBoundingClientRect().bottom + 8 : 0}px`,
                        left: `${servicesButtonRef.current ? servicesButtonRef.current.getBoundingClientRect().left : 0}px`
                      }}>
                        <div className="w-full border border-border rounded-md shadow-lg py-1 overflow-hidden bg-card/80 backdrop-blur-md">
                          {categoriesData.map((category: ServiceCategory, index: number) => {
                            // Usar los iconos definidos en categoriesData.ts
                            const CategoryIcon = category.icon || Briefcase;
                            
                            return (
                              <div key={category.id} className={`${index !== 0 ? 'border-t border-border/30' : ''}`}>
                                <button
                                  type="button"
                                  onMouseDown={() => {
                                    navigate(`/soluciones/${category.slug}`);
                                    setIsServicesMenuOpen(false);
                                  }}
                                  className="flex items-center w-full text-left px-4 py-3 text-sm whitespace-normal transition-all duration-300 text-foreground hover:bg-muted hover:text-primary"
                                >
                                  <CategoryIcon className="w-5 h-5 mr-3 text-primary flex-shrink-0" />
                                  <span>{category.name}</span>
                                </button>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                );
              }
              return (
                <NavLink
                  key={link.name}
                  to={link.to}
                  className={({ isActive }) =>
                    `group relative flex items-center transition duration-300 pb-1
                    after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px]
                    after:bg-primary after:scale-x-0 after:origin-center after:transition-transform after:duration-300 after:ease-out
                    hover:after:scale-x-100 ${isActive ? 'text-primary after:scale-x-100' : 'text-sidebar-foreground'}`
                  }
                >
                  <link.icon className="mr-2 h-4 w-4" />
                  {link.name}
                </NavLink>
              );
            })}
            <ThemeSwitcher />
            <Button 
              variant="primary"
              size="cta"
              onClick={() => navigate('/contact')}
              aria-label="Ir a la página de contacto"
              className="hidden lg:inline-flex whitespace-nowrap"
            >
              Empezar Proyecto
            </Button>
          </div>

          {/* Botón de menú móvil */}
          <div className="md:hidden flex items-center">
            <ThemeSwitcher />
            <button 
              onClick={toggleMobileMenu} 
              className="text-foreground p-2 ml-2" 
              aria-label={isMobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Backdrop para menú móvil */}
      <div
        className={`fixed inset-0 bg-black/30 z-40 transition-opacity duration-300 ease-in-out md:hidden ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={toggleMobileMenu}
        aria-hidden="true"
      />

      {/* Contenido del menú móvil lateral */}
      <div
        ref={mobileMenuRef}
        className={`fixed top-0 left-0 bottom-0 z-50 max-w-[90vw] w-full sm:w-64 shadow-xl transform transition-transform duration-300 ease-in-out md:hidden bg-sidebar text-sidebar-foreground ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className="p-5 border-b border-border">
          <h2 className="text-xl font-semibold">Menú</h2>
        </div>
        <nav className="flex-grow p-5 space-y-2 overflow-y-auto h-[calc(100vh-140px)]">
          {navLinks.map((link) => {
            if (link.id === 'services-menu') {
              return (
                <div key={link.name}>
                  <button
                    onClick={() => setIsMobileServicesSubMenuOpen(!isMobileServicesSubMenuOpen)}
                    className="w-full flex items-center justify-between py-2 text-left text-sidebar-foreground hover:text-primary transition-colors duration-200"
                  >
                    <div className="flex items-center">
                      <link.icon className="mr-3 h-5 w-5" />
                      {link.name}
                    </div>
                    <ChevronDown className={`ml-2 h-5 w-5 transition-transform duration-200 ${isMobileServicesSubMenuOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {isMobileServicesSubMenuOpen && (
                    <div className="pl-4 mt-1 space-y-1 border-l border-border ml-3">
                      {categoriesData.map((category: ServiceCategory) => (
                        <NavLink
                          key={category.id}
                          to={`/servicios/${category.path}`}
                          onClick={toggleMobileMenu} // Cierra todo el menú móvil al seleccionar una categoría
                          className={({ isActive }) =>
                            `block py-2 pr-2 text-sm whitespace-normal ${isActive ? 'text-primary font-semibold' : 'text-sidebar-foreground hover:text-primary'}`
                          }
                        >
                          {category.name}
                        </NavLink>
                      ))}
                    </div>
                  )}
                </div>
              );
            }
            return (
              <NavLink
                key={link.name}
                to={link.to}
                onClick={toggleMobileMenu}
                className={({ isActive }) =>
                  `flex items-center py-2 text-sidebar-foreground hover:text-primary transition-colors duration-200 ${isActive ? 'text-primary font-semibold' : ''}`
                }
              >
                <link.icon className="mr-3 h-5 w-5" />
                {link.name}
              </NavLink>
            );
          })}
        </nav>
        <div className="p-5 border-t border-border">
          <Button 
            variant="primary"
            size="cta"
            className="w-full"
            onClick={() => { navigate('/contact'); toggleMobileMenu(); }}
            aria-label="Ir a la página de contacto"
          >
            Empezar Proyecto
          </Button>
        </div>
      </div>
    </>
  );
};



export default Header;
