import React, { useState } from 'react';
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
  const [activeLink, setActiveLink] = useState('#hero'); // Placeholder for active link state

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

  const handleLinkClick = (href: string) => {
    setActiveLink(href); // Set active link on click (basic implementation)
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Main Header - Use new color variables */}
      <header className="bg-card shadow-sm sticky top-0 z-30 border-b border-border">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          {/* Logo Placeholder */}
          <div className="text-xl font-bold text-foreground">
            Avanxia Labs
          </div>

          {/* Desktop Navigation Links - Use new color variables */}
          <div className="hidden md:flex space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                // Use new color variables for hover/underline
                className={`relative text-sidebar-foreground hover:text-primary transition duration-300 pb-1 ${
                  activeLink === link.href ? 'text-primary' : '' // Highlight active link text
                }
                           after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px]
                           after:bg-primary after:scale-x-0 after:origin-center
                           after:transition-transform after:duration-300 after:ease-out
                           hover:after:scale-x-100 ${
                             activeLink === link.href ? 'after:scale-x-100' : '' // Show underline for active link
                           }`}
                onClick={() => setActiveLink(link.href)} // Update active link on click
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Desktop Contact Button - Use new color variables */}
          <a
            href="#contact"
            className="hidden md:inline-block bg-primary hover:opacity-90 text-primary-foreground font-semibold py-2 px-4 rounded-lg transition duration-300"
          >
            Contacto
          </a>

          {/* Mobile Menu Button - Use new color variables */}
          <button
            className="md:hidden text-sidebar-foreground hover:text-primary"
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
        className={`fixed top-0 left-0 bottom-0 z-50 w-64 bg-sidebar shadow-xl transform transition-transform duration-300 ease-in-out md:hidden ${
          isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
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
                  // Apply active styles: background, text color, rounded corners
                  className={`flex items-center px-3 py-2.5 rounded-lg text-sm font-medium transition-colors duration-200 group ${
                    isActive
                      ? 'bg-sidebar-active text-sidebar-active-foreground'
                      : 'text-sidebar-foreground hover:bg-sidebar-hover hover:text-foreground'
                  }`}
                  onClick={() => handleLinkClick(link.href)}
                >
                  <link.icon
                    className={`flex-shrink-0 w-5 h-5 mr-3 ${
                      isActive ? 'text-sidebar-active-foreground' : 'text-sidebar-foreground group-hover:text-foreground'
                    }`}
                  />
                  {link.name}
                </a>
              );
            })}
          </div>

          {/* Separator */}
          <hr className="border-border my-2" />

          {/* Link Group 2 */}
          <div className="space-y-1 mb-4">
            {linkGroup2.map((link) => {
              const isActive = activeLink === link.href;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`flex items-center px-3 py-2.5 rounded-lg text-sm font-medium transition-colors duration-200 group ${
                    isActive
                      ? 'bg-sidebar-active text-sidebar-active-foreground'
                      : 'text-sidebar-foreground hover:bg-sidebar-hover hover:text-foreground'
                  }`}
                  onClick={() => handleLinkClick(link.href)}
                >
                  <link.icon
                    className={`flex-shrink-0 w-5 h-5 mr-3 ${
                      isActive ? 'text-sidebar-active-foreground' : 'text-sidebar-foreground group-hover:text-foreground'
                    }`}
                  />
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
            className="flex items-center px-3 py-2.5 rounded-lg text-sm font-medium transition-colors duration-200 group text-sidebar-foreground hover:bg-sidebar-hover hover:text-foreground"
            onClick={() => handleLinkClick('#contact')} // Treat contact as a link for consistency
          >
            <Mail className="flex-shrink-0 w-5 h-5 mr-3 text-sidebar-foreground group-hover:text-foreground" />
            Contacto
          </a>
        </nav>
      </div>
    </>
  );
};

export default Header;
