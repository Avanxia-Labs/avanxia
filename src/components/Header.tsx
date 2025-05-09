import { useState, useEffect, useRef } from 'react';
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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('#hero');
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  const navLinks = [
    { name: 'Inicio', href: '#hero', icon: Home },
    { name: 'Servicios', href: '#services', icon: Briefcase },
    { name: 'Precios', href: '#pricing', icon: Tag },
    { name: 'Portafolio', href: '#portfolio', icon: LayoutGrid },
    { name: 'Equipo', href: '#team', icon: Users },
    { name: 'Proceso', href: '#process', icon: Workflow },
  ];

  const linkGroup1 = navLinks.slice(0, 3);
  const linkGroup2 = navLinks.slice(3);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLinkClick = (href: string) => {
    setActiveLink(href);
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    navLinks.forEach(link => {
      sectionRefs.current[link.href] = document.querySelector(link.href);
    });
    sectionRefs.current['#contact'] = document.querySelector('#contact');

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const detectionOffset = window.innerHeight / 3;
      const topThreshold = 50;

      let currentActiveLink = '#hero';

      if (scrollPosition < topThreshold) {
        currentActiveLink = '#hero';
      } else {
        const allSections = [...navLinks.map(l => l.href), '#contact'];
        for (let i = allSections.length - 1; i >= 0; i--) {
          const href = allSections[i];
          const section = sectionRefs.current[href];
          if (section && section.offsetTop <= scrollPosition + detectionOffset) {
            currentActiveLink = href;
            break;
          }
        }
      }

      if (activeLink !== currentActiveLink) {
        setActiveLink(currentActiveLink);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [navLinks]);

  return (
    <>
<header className="fixed top-0 left-0 w-full z-[60] bg-card border-b border-border overflow-x-hidden">
  <nav className="w-full max-w-screen-xl mx-auto px-4 py-4 flex justify-between items-center overflow-x-hidden">
            <div className="text-xl font-bold text-foreground">
            Avanxia Labs
          </div>

          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`group relative flex items-center transition duration-300 pb-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-primary after:scale-x-0 after:origin-center after:transition-transform after:duration-300 after:ease-out hover:after:scale-x-100 ${
                  activeLink === link.href
                    ? 'after:scale-x-100 text-primary'
                    : 'text-sidebar-foreground'
                }`}
                onClick={(e) => { e.preventDefault(); handleLinkClick(link.href); }}
              >
                <link.icon className="mr-2 h-4 w-4" />
                {link.name}
              </a>
            ))}
            <ThemeSwitcher />
          </div>

          <Button
            size="tight"
            /* clases específicas de este caso */
            className="hidden md:inline-block font-semibold py-2 px-4 ml-4
                      bg-primary text-primary-foreground hover:bg-[--gradient-btn]"
            asChild
          >
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick('#contact');
              }}
            >
              Contacto
            </a>
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
            {linkGroup1.map((link) => {
              const isActive = activeLink === link.href;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`flex items-center rounded-md px-3 py-2.5 text-base font-medium transition-colors duration-200 ${
                    isActive
                      ? 'bg-[--gradient-btn] text-primary-foreground'
                      : 'text-sidebar-foreground hover:bg-sidebar-hover hover:text-primary'
                  }`}
                  onClick={(e) => { e.preventDefault(); handleLinkClick(link.href); }}
                >
                  <link.icon className={`mr-3 h-5 w-5 flex-shrink-0 ${isActive ? 'text-primary-foreground' : 'text-inherit'}`} />
                  {link.name}
                </a>
              );
            })}
          </div>

          <hr className="border-border my-2" />

          <div className="space-y-1 mb-4">
            {linkGroup2.map((link) => {
              const isActive = activeLink === link.href;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`flex items-center rounded-md px-3 py-2.5 text-base font-medium transition-colors duration-200 ${
                    isActive
                      ? 'bg-[--gradient-btn] text-primary-foreground'
                      : 'text-sidebar-foreground hover:bg-sidebar-hover hover:text-primary'
                  }`}
                  onClick={(e) => { e.preventDefault(); handleLinkClick(link.href); }}
                >
                  <link.icon className={`mr-3 h-5 w-5 flex-shrink-0 ${isActive ? 'text-primary-foreground' : 'text-inherit'}`} />
                  {link.name}
                </a>
              );
            })}
          </div>

          <hr className="border-border my-2" />

          <a
            href="#contact"
            className="flex items-center rounded-md px-3 py-2.5 text-base font-medium text-sidebar-foreground transition-colors duration-200 hover:bg-sidebar-hover hover:text-primary"
            onClick={(e) => { e.preventDefault(); handleLinkClick('#contact'); }}
          >
            <Mail className="mr-3 h-5 w-5 flex-shrink-0" />
            Contacto
          </a>

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
