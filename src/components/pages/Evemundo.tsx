const Evemundo = () => {
  return (
    <div className="bg-white text-black font-sans">
    <section className="text-center pt-24 pb-12 px-4">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">GYB</h1>
        <p className="text-lg max-w-2xl mx-auto">
          Diseñamos la identidad y sitio web para GYB Connect, una plataforma fintech que necesita destacar frente a la
          ignorancia, competencia, y escepticismo.
        </p>
      </section>

      <section className="flex justify-center items-center py-10">
        <div className="w-full max-w-4xl h-64 bg-gray-200 flex items-center justify-center text-gray-500 text-lg">
          Imagen principal
        </div>
      </section>

      <section className="bg-gray-900 text-white text-center px-6 py-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">
          Identidad Visual y Presencia Web para el Mundo Fintech
        </h2>
        <p className="max-w-3xl mx-auto text-base md:text-lg">
          GYB Connect necesitaba una imagen fuerte y profesional para emerger en el rubro de servicios digitales.
          Obtuvimos una identidad con carácter propio, tipografía y logos que inspiran modernidad y criterio, además
          de una estética de procesos muy web. Producción completa con spot creativo y wireframes ágiles para futuras campañas.
        </p>
      </section>

      <section className="py-16 px-6 text-center">
        <h3 className="text-2xl font-bold mb-8">Descripción Detallada</h3>
        <div className="grid gap-6 grid-cols-1 md:grid-cols-3 max-w-6xl mx-auto">
          <div className="bg-gray-100 p-6 rounded shadow">
            <h4 className="text-lg font-semibold mb-2">Desafío</h4>
            <p>
              Diseñar una experiencia visual que destacara entre la competencia y proyectara confianza.
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded shadow">
            <h4 className="text-lg font-semibold mb-2">Solución</h4>
            <p>
              Branding moderno, interfaz clara, producción visual profesional y concepto digital potente.
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded shadow">
            <h4 className="text-lg font-semibold mb-2">Resultado</h4>
            <p>
              Una identidad clara y fuerte que impulsa la proyección de GYB como actor relevante en el sector.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 px-6 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        <div className="h-96 bg-gray-200 flex items-center justify-center text-gray-500">Imagen</div>
        <div className="h-96 bg-gray-200 flex items-center justify-center text-gray-500">Imagen</div>
        <div className="h-96 bg-gray-200 flex items-center justify-center text-gray-500">Imagen</div>
      </section>

      <footer className="bg-black text-white text-center py-10 mt-16">
        <p className="text-sm">© AVANXIA - Todos los derechos reservados</p>
        <div className="flex justify-center gap-6 text-sm mt-2">
          <span>Inicio</span>
          <span>Portafolio</span>
          <span>Contacto</span>
        </div>
      </footer>
    </div>
  );
};

export default Evemundo;
