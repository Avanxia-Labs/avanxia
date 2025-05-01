import React from 'react';

const Hero = () => {
  return (
    <section id="hero" className="w-full bg-gray-900 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Transformamos tu Negocio con Estrategias Digitales de Alto Impacto
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">
          Agencia Integral de Marketing, Diseño y Desarrollo Web. Talento Latino con Estándares Internacionales y Precios Competitivos para Norteamérica.
        </p>
        <a 
          href="#contact" // Link to contact section later
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded transition duration-300"
        >
          Descubre cómo podemos impulsar tus ventas
        </a>
        {/* Placeholder for background image/video */}
      </div>
    </section>
  );
};

export default Hero;

