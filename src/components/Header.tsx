import React, { useState } from 'react';
import { Menu, X } from 'lucide-react'; // Import icons

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Define navigation links based on section IDs
  const navLinks = [
    { name: 'Inicio', href: '#hero' },
    { name: 'Servicios', href: '#services' },
    { name: 'Precios', href: '#pricing' },
    { name: 'Portafolio', href: '#portfolio' },
    { name: 'Equipo', href: '#team' },
    { name: 'Proceso', href: '#process' },
    // Add other sections as needed
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Function to close menu when a link is clicked
  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    // Added relative positioning for the mobile menu container
    <header className="bg-white shadow-sm sticky top-0 z-50 relative">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo Placeholder */}
        <div className="text-xl font-bold text-gray-800">
          Avanxia Labs {/* Placeholder Text */}
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative text-gray-600 hover:text-blue-600 transition duration-300 pb-1
                         after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px]
                         after:bg-blue-600 after:scale-x-0 after:origin-center
                         after:transition-transform after:duration-300 after:ease-out
                         hover:after:scale-x-100"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Desktop Contact Button */}
        <a
          href="#contact"
          className="hidden md:inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition duration-300"
        >
          Contacto
        </a>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-600 hover:text-blue-600"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu" // Accessibility improvement
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu Panel */}
      {/* Uses transition for smooth appearance */}
      <div
        className={`absolute top-full left-0 right-0 bg-white shadow-lg md:hidden transition-all duration-300 ease-in-out transform ${
          isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden`} // Use max-h and opacity for transition
      >
        <div className="flex flex-col px-4 py-4 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-blue-600"
              onClick={handleLinkClick} // Close menu on link click
            >
              {link.name}
            </a>
          ))}
          <hr className="border-gray-200 my-2" />
          <a
            href="#contact"
            className="block w-full text-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition duration-300"
            onClick={handleLinkClick} // Close menu on link click
          >
            Contacto
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
