const SpecialOffer = () => {
  return (
    <section id="offer" className="w-full py-16 bg-blue-700 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">¡Impulsa tu Crecimiento con Nuestra Oferta de Lanzamiento!</h2>
        <p className="mb-6 max-w-2xl mx-auto">
          Para celebrar el lanzamiento de Avanxia Labs y ayudarte a comenzar con el pie derecho, tenemos una oferta especial por tiempo limitado.
        </p>
        <div className="bg-white text-blue-800 rounded-lg shadow-xl p-8 inline-block max-w-lg">
          <h3 className="text-2xl font-bold mb-3">¡10% de Descuento!</h3>
          <p className="mb-4 font-semibold">En tu primer retainer trimestral</p>
          <p className="text-sm mb-4">
            Contrata cualquiera de nuestros planes de servicios recurrentes (Growth Leads o Full 360°) por un periodo inicial de tres meses y disfruta de un 10% de descuento sobre el total de ese primer trimestre.
          </p>
          <p className="text-xs text-gray-600 mb-6">
            <strong>Condiciones:</strong> Válido para nuevos contratos firmados antes del <strong>31 de julio de 2025</strong>. Aplicable a planes Growth Leads y Full 360°.
          </p>
          <a 
            href="#contact" // Link to contact section later
            className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold py-3 px-6 rounded transition duration-300"
          >
            Contacta ahora y aprovecha la oferta
          </a>
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;

