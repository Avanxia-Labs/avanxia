import React, { useState, useEffect, useRef } from 'react';
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

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('#hero');
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  // Define navigation links with icons
  const navLinks = [
    { name: 'Inicio', href: '#hero', icon: Home },
    { name: 'Servicios', href: '#services', icon: Briefcase },
    { name: 'Precios', href: '#pricing', icon: Tag },
    { name: 'Portafolio', href: '#portfolio', icon: LayoutGrid },
    { name: 'Equipo', href: '#team', icon: Users },
    { name: 'Proceso', href: '#process', icon: Workflow },
  ];

  // Group links logically for separators (example grouping)
  const linkGroup1 = navLinks.slice(0, 3); // Inicio, Servicios, Precios
  const linkGroup2 = navLinks.slice(3); // Portafolio, Equipo, Proceso

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Modified handleLinkClick to also scroll smoothly
  const handleLinkClick = (href: string) => {
    setActiveLink(href);
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    // Store section refs
    navLinks.forEach(link => {
      sectionRefs.current[link.href] = document.querySelector(link.href);
    });
    // Add contact section ref if it exists
    sectionRefs.current['#contact'] = document.querySelector('#contact');

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const detectionOffset = window.innerHeight / 3;
      // Define a threshold for the top of the page
      const topThreshold = 50; 

      let currentActiveLink = '#hero'; // Default to top section

      // Force active link to #hero if scrolled near the top
      if (scrollPosition < topThreshold) {
        currentActiveLink = '#hero';
      } else {
        // Iterate through navLinks + contact section only if not at the very top
        const allSections = [...navLinks.map(l => l.href), '#contact'];
        for (let i = allSections.length - 1; i >= 0; i--) {
          const href = allSections[i];
          const section = sectionRefs.current[href];
          // Check if section exists and its top is within the detection range
          if (section && section.offsetTop <= scrollPosition + detectionOffset) {
            currentActiveLink = href;
            break; // Found the current section
          }
        }
        // If no section is found in the loop (e.g., scrolled past the last section but not back to top)
        // We might need a fallback, but defaulting to #hero initially handles the top case.
        // If scrolled below the last section, the last section should remain active based on the loop logic.
      }

      // Only update state if the active link has actually changed
      if (activeLink !== currentActiveLink) {
        setActiveLink(currentActiveLink);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    // Cleanup listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [navLinks]); // Rerun effect if navLinks change (though unlikely here)

  return (
    <>
      {/* Main Header - Use CSS variables for background and border */}
      <header
        className="shadow-sm sticky top-0 z-30 border-b"
        style={{ background: 'rgb(var(--color-card))', borderColor: 'rgb(var(--color-border))' }}
      >
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          {/* Logo Placeholder - Use CSS variable */}
          <div className="text-xl font-bold" style={{ color: 'rgb(var(--color-foreground))' }}>
            Avanxia Labs
          </div>

          {/* Desktop Navigation Links - Differentiate Hover and Active */}
          <div className="hidden md:flex space-x-6 items-center"> 
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                // Underline animation on hover, text color change only on active
                className={`group relative flex items-center transition duration-300 pb-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-[rgb(var(--color-primary))] after:scale-x-0 after:origin-center after:transition-transform after:duration-300 after:ease-out hover:after:scale-x-100 ${
                  activeLink === link.href ? 'after:scale-x-100' : '' // Underline visible when active
                }`}
                style={{
                  // Text color changes only when active
                  color: activeLink === link.href ? 'rgb(var(--color-primary))' : 'rgb(var(--color-sidebar-foreground))',
                }}
                // Remove onMouseOver/onMouseOut for text color change, handled by style prop now
                onClick={(e) => { e.preventDefault(); handleLinkClick(link.href); }} 
              >
                <link.icon
                  className="mr-2 h-4 w-4"
                  style={{
                    color: 'inherit' // Icon color inherits from text
                  }}
                />
                {link.name}
              </a>
            ))}
          </div>

          {/* Desktop Contact Button - Use CSS variables and gradient hover */}
          <a
            href="#contact"
            className="hidden md:inline-block font-semibold py-2 px-4 rounded-lg transition duration-300"
            style={{
              background: 'rgb(var(--color-primary))',
              color: 'rgb(var(--color-primary-foreground))'
            }}
            // Apply gradient on hover using inline style manipulation or a dedicated CSS class
            onMouseOver={e => { e.currentTarget.style.background = 'var(--gradient-btn)'; }}
            onMouseOut={e => { e.currentTarget.style.background = 'rgb(var(--color-primary))'; }}
            onClick={(e) => { e.preventDefault(); handleLinkClick('#contact'); }} // Prevent default and use smooth scroll
          >
            Contacto
          </a>

          {/* Mobile Menu Button - Use CSS variables */}
          <button
            className="md:hidden"
            style={{ color: 'rgb(var(--color-sidebar-foreground))' }}
            onMouseOver={e => { e.currentTarget.style.color = 'rgb(var(--color-primary))' }}
            onMouseOut={e => { e.currentTarget.style.color = 'rgb(var(--color-sidebar-foreground))' }}
            onClick={toggleMobileMenu}
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>
        </nav>
      </header>

      {/* Sidebar Overlay/Backdrop */}
      <div
        className={`fixed inset-0 bg-black/30 z-40 transition-opacity duration-300 ease-in-out md:hidden ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={toggleMobileMenu} // Close menu when clicking backdrop
        aria-hidden="true"
      />

      {/* Sidebar Panel - Use new color variables and structure */}
      <div
        className={`fixed top-0 left-0 bottom-0 z-50 w-64 shadow-xl transform transition-transform duration-300 ease-in-out md:hidden ${
          isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        style={{ background: 'rgb(var(--color-sidebar))', color: 'rgb(var(--color-sidebar-foreground))' }}
      >
        {/* Sidebar Header */}
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

        {/* Sidebar Navigation */}
        <nav className="flex flex-col p-3 mt-4">
          {/* Link Group 1 */}
          <div className="space-y-1 mb-4">
            {linkGroup1.map((link) => {
              const isActive = activeLink === link.href;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  style={isActive ? {
                    background: 'var(--gradient-btn)', 
                    color: 'rgb(var(--color-primary-foreground))', 
                    borderRadius: '0.5rem',
                    fontWeight: 500,
                    fontSize: '1rem',
                    display: 'flex',
                    alignItems: 'center',
                    padding: '0.625rem 0.75rem',
                    transition: 'background 0.2s, color 0.2s',
                  } : {
                    color: 'rgb(var(--color-sidebar-foreground))', 
                    borderRadius: '0.5rem',
                    fontWeight: 500,
                    fontSize: '1rem',
                    display: 'flex',
                    alignItems: 'center',
                    padding: '0.625rem 0.75rem',
                    transition: 'background 0.2s, color 0.2s',
                  }}
                  onClick={(e) => { e.preventDefault(); handleLinkClick(link.href); }}
                  onMouseOver={e => { if (!isActive) { e.currentTarget.style.background = 'rgb(var(--color-sidebar-hover))'; e.currentTarget.style.color = 'rgb(var(--color-primary))'; } }}
                  onMouseOut={e => { if (!isActive) { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'rgb(var(--color-sidebar-foreground))'; } }}
                >
                  <link.icon style={{ marginRight: '0.75rem', color: isActive ? 'rgb(var(--color-primary-foreground))' : 'inherit', flexShrink: 0, width: 20, height: 20 }} />
                  {link.name}
                </a>
              );
            })}
          </div>

          {/* Separator */}
          <hr style={{ borderColor: 'rgb(var(--color-border))', margin: '0.5rem 0' }} />

          {/* Link Group 2 */}
          <div className="space-y-1 mb-4">
            {linkGroup2.map((link) => {
              const isActive = activeLink === link.href;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  style={isActive ? {
                    background: 'var(--gradient-btn)', 
                    color: 'rgb(var(--color-primary-foreground))', 
                    borderRadius: '0.5rem',
                    fontWeight: 500,
                    fontSize: '1rem',
                    display: 'flex',
                    alignItems: 'center',
                    padding: '0.625rem 0.75rem',
                    transition: 'background 0.2s, color 0.2s',
                  } : {
                    color: 'rgb(var(--color-sidebar-foreground))', 
                    borderRadius: '0.5rem',
                    fontWeight: 500,
                    fontSize: '1rem',
                    display: 'flex',
                    alignItems: 'center',
                    padding: '0.625rem 0.75rem',
                    transition: 'background 0.2s, color 0.2s',
                  }}
                  onClick={(e) => { e.preventDefault(); handleLinkClick(link.href); }}
                  onMouseOver={e => { if (!isActive) { e.currentTarget.style.background = 'rgb(var(--color-sidebar-hover))'; e.currentTarget.style.color = 'rgb(var(--color-primary))'; } }}
                  onMouseOut={e => { if (!isActive) { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'rgb(var(--color-sidebar-foreground))'; } }}
                >
                  <link.icon style={{ marginRight: '0.75rem', color: isActive ? 'rgb(var(--color-primary-foreground))' : 'inherit', flexShrink: 0, width: 20, height: 20 }} />
                  {link.name}
                </a>
              );
            })}
          </div>

          {/* Separator */}
          <hr className="border-border my-2" />

          {/* Contact Link/Button */}
          <a
            href="#contact"
            style={{
              color: 'rgb(var(--color-sidebar-foreground))',
              borderRadius: '0.5rem',
              padding: '0.625rem 0.75rem',
              fontWeight: 500,
              fontSize: '1rem',
              display: 'flex',
              alignItems: 'center',
              transition: 'background 0.2s, color 0.2s',
            }}
            onClick={(e) => { e.preventDefault(); handleLinkClick('#contact'); }}
            onMouseOver={e => { e.currentTarget.style.background = 'rgb(var(--color-sidebar-hover))'; e.currentTarget.style.color = 'rgb(var(--color-primary))'; }}
            onMouseOut={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'rgb(var(--color-sidebar-foreground))'; }}
          >
            <Mail style={{ marginRight: '0.75rem', color: 'inherit', flexShrink: 0, width: 20, height: 20 }} />
            Contacto
          </a>
        </nav>
      </div>
    </>
  );
};

export default Header;
