import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-card text-foreground border-t border-border pt-10 pb-6">
      {/* Íconos sociales */}
      <div className="flex justify-center gap-4 mb-6">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-card p-3 rounded-full shadow hover:scale-105 transition"
        >
          <Facebook className="w-5 h-5 text-foreground" />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-card p-3 rounded-full shadow hover:scale-105 transition"
        >
          <Instagram className="w-5 h-5 text-foreground" />
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-card p-3 rounded-full shadow hover:scale-105 transition"
        >
          <Twitter className="w-5 h-5 text-foreground" />
        </a>
        <a
          href="https://youtube.com"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-card p-3 rounded-full shadow hover:scale-105 transition"
        >
          <Youtube className="w-5 h-5 text-foreground" />
        </a>
      </div>

      {/* Enlaces de navegación */}
      <div className="flex flex-wrap justify-center gap-6 text-sm font-medium mb-4">
        <a href="#hero" className="hover:text-primary transition">Inicio</a>
        <a href="#portfolio" className="hover:text-primary transition">Portafolio</a>
        <a href="#services" className="hover:text-primary transition">Servicios</a>
        <a href="#pricing" className="hover:text-primary transition">Precios</a>
        <a href="#team" className="hover:text-primary transition">Equipo</a>
        <a href="#contact" className="hover:text-primary transition">Contacto</a>
      </div>

      {/* Derechos y autoría */}
      <p className="text-center text-xs text-muted-foreground">
        &copy; {currentYear} Avanxia Labs. Diseñado con 💡 en México.
      </p>
    </footer>
  );
};

export default Footer;
