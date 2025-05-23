import { Button } from "./ui/button";

const SpecialOffer = () => {
  return (
    <section id="offer" className="w-full py-16 bg-blue-700 text-white">
      <div className="container mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 leading-snug">
          ¡Impulsa tu Crecimiento con Nuestra Oferta de Lanzamiento!
        </h2>
        <p className="mb-6 max-w-2xl mx-auto text-base sm:text-lg">
          Para ayudarte a comenzar con el pie derecho, tenemos una oferta especial por tiempo limitado.
        </p>

        <div className="bg-white text-blue-800 rounded-xl shadow-xl px-4 py-6 sm:px-8 sm:py-8 max-w-lg w-full mx-auto">
          <h3 className="text-xl sm:text-2xl font-bold mb-3">¡10% de Descuento!</h3>
          <p className="mb-3 font-semibold text-base sm:text-lg">En tu primer retainer trimestral</p>
          <p className="text-sm sm:text-base mb-4 leading-relaxed">
          Queremos que compruebes el valor que Avanxia Labs puede aportar a tu negocio. Por eso, a nuestros nuevos clientes les ofrecemos un descuento especial en su primer compromiso trimestral de servicios mensuales.
          </p>
          <p className="text-xs text-gray-600 mb-6 leading-snug">
            <strong>Condiciones:</strong> Válido para nuevos contratos firmados antes del <strong>1 de enero de 2026</strong>. Aplicable a compromisos trimestrales
            .
          </p>

          <Button
            size="tight"
            asChild
            className="w-full sm:w-auto text-sm sm:text-base whitespace-normal leading-snug text-center"
          >
            <a href="#contact">Contacta ahora y aprovecha la oferta</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
