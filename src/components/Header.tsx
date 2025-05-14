import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { NavLink } from "react-router-dom";
import {
  Menu,
  X,
  Home, // Icon for Inicio
  Briefcase, // Icon for Servicios
  Tag, // Icon for Precios
  LayoutGrid, // Icon for Portafolio
  Users, // Icon for Equipo
  Workflow, // Icon for Proceso
  Mail, // Icon for Contacto
} from 'lucide-react';
import ThemeSwitcher from './ThemeSwitcher'; // Import the new component
import { Button } from './ui/button';

const Header = () => {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

const navLinks = [
  { name: 'Inicio', to: '/', icon: Home },
  { name: 'Servicios', to: '/services', icon: Briefcase },
  { name: 'Sobre Nosotros', to: '/about', icon: Users },
  { name: 'precios', to: '/precios', icon: Users },
];


  const linkGroup1 = navLinks.slice(0, 3);
  const linkGroup2 = navLinks.slice(3);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
<header className="fixed top-0 left-0 w-full z-[60] bg-card border-b border-border overflow-x-hidden">
  <nav className="w-full max-w-screen-xl mx-auto px-4 py-4 flex justify-between items-center overflow-x-hidden">
      <div className="w-[250px] h-auto cursor-pointer">
        <a 
          href="/"
          onClick={(e) => { 
            e.preventDefault(); 
            // Si ya estamos en la página principal, solo desplazamos al hero
            if (window.location.pathname === '/') {
              const heroSection = document.querySelector('#hero');
              if (heroSection) {
                heroSection.scrollIntoView({ behavior: 'smooth' });
              }
            } else {
              // Si estamos en otra página, primero navegamos al home
              navigate('/');
              // Añadimos un pequeño retraso para asegurar que la navegación se completa
              setTimeout(() => {
                const heroSection = document.querySelector('#hero');
                if (heroSection) {
                  heroSection.scrollIntoView({ behavior: 'smooth' });
                }
              }, 100);
            }
          }}
        >
          <img
            src="/images/portfolio/proyectos/logo.png"
            alt="Avanxia Labs Logo"
            className="w-full h-auto object-contain"
          />
        </a>
      </div>
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.to}
                className={({ isActive }) =>
                  `group relative flex items-center transition duration-300 pb-1
                  after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px]
                  after:bg-primary after:scale-x-0 after:origin-center after:transition-transform after:duration-300 after:ease-out
                  hover:after:scale-x-100 ${
                    isActive ? 'after:scale-x-100 text-primary' : 'text-sidebar-foreground'
                  }`
                }
              >
                <link.icon className="mr-2 h-4 w-4" />
                {link.name}
              </NavLink>
            ))}

            <ThemeSwitcher />
          </div>

          <Button
            size="tight"
            className="hidden md:inline-block font-semibold py-2 px-4 ml-4
                      bg-primary text-primary-foreground"
            asChild
          >
            <NavLink to="/contact">
              Contacto
            </NavLink>
          </Button>



          <div className="md:hidden flex items-center space-x-4">
            <ThemeSwitcher />
            <button
              className="text-sidebar-foreground hover:text-primary"
              onClick={toggleMobileMenu}
              aria-label="Open menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </nav>
      </header>

      <div
        className={`fixed inset-0 bg-black/30 z-40 transition-opacity duration-300 ease-in-out md:hidden ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={toggleMobileMenu}
        aria-hidden="true"
      />

     <div
  className={`fixed top-0 left-0 bottom-0 z-50 max-w-[90vw] w-full sm:w-64 shadow-xl transform transition-transform duration-300 ease-in-out md:hidden bg-sidebar text-sidebar-foreground ${
    isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
  }`}
>
        <div className="flex justify-between items-center p-4 border-b border-border">
          <div className="text-lg font-bold text-foreground">
            Avanxia Labs
          </div>
          <button
            className="text-sidebar-foreground hover:text-primary"
            onClick={toggleMobileMenu}
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>
        <nav className="flex flex-col p-3 mt-4 flex-grow">
          <div className="space-y-1 mb-4">
            {linkGroup1.map((link) => (
              <NavLink
                key={link.name}
                to={link.to}
                onClick={() => setIsMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `flex items-center rounded-md px-3 py-2.5 text-base font-medium transition-colors duration-200 ${
                    isActive
                      ? 'bg-[--gradient-btn] text-primary-foreground'
                      : 'text-sidebar-foreground hover:bg-sidebar-hover hover:text-primary'
                  }`
                }
              >
                <link.icon className="mr-3 h-5 w-5 flex-shrink-0" />
                {link.name}
              </NavLink>
            ))}
          </div>

          <hr className="border-border my-2" />

          <div className="space-y-1 mb-4">
            {linkGroup2.map((link) => (
              <NavLink
                key={link.name}
                to={link.to}
                onClick={() => setIsMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `flex items-center rounded-md px-3 py-2.5 text-base font-medium transition-colors duration-200 ${
                    isActive
                      ? 'bg-[--gradient-btn] text-primary-foreground'
                      : 'text-sidebar-foreground hover:bg-sidebar-hover hover:text-primary'
                  }`
                }
              >
                <link.icon className="mr-3 h-5 w-5 flex-shrink-0" />
                {link.name}
              </NavLink>
            ))}
          </div>

          <hr className="border-border my-2" />

          <NavLink
            to="/contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className={({ isActive }) =>
              `flex items-center rounded-md px-3 py-2.5 text-base font-medium transition-colors duration-200 ${
                isActive
                  ? 'bg-[--gradient-btn] text-primary-foreground'
                  : 'text-sidebar-foreground hover:bg-sidebar-hover hover:text-primary'
              }`
            }
          >
            <Mail className="mr-3 h-5 w-5 flex-shrink-0" />
            Contacto
          </NavLink>

          <div className="mt-auto pt-4 border-t border-border">
            <div className="flex justify-center">
              <ThemeSwitcher />
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;
