const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-8 bg-gray-900 text-gray-400">
      <div className="container mx-auto px-4 text-center text-sm">
        <p>&copy; {currentYear} Avanxia Labs. Todos los derechos reservados.</p>
        {/* Puedes añadir más enlaces o información aquí si lo necesitas */}
        {/* Ejemplo:
        <div className="mt-2">
          <a href="/privacy-policy" className="hover:text-white mx-2">Política de Privacidad</a>
          <a href="/terms-of-service" className="hover:text-white mx-2">Términos de Servicio</a>
        </div>
        */}
      </div>
    </footer>
  );
};

export default Footer;
