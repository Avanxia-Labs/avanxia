import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { Engine } from "@tsparticles/engine";

// Hook simple para detectar mobile
function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);
  return isMobile;
}

const Hero = () => {
  const [init, setInit] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    initParticlesEngine(async (engine: Engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  // Opciones de interactividad según dispositivo
  const interactivity = isMobile
    ? {
        events: {
          onClick: { enable: true, mode: "repulse" },
          resize: { enable: true },
        },
        modes: {
          repulse: { distance: 150, duration: 0.4 },
        },
      }
    : {
        events: {
          onHover: { enable: true, mode: "repulse" },
          resize: { enable: true },
        },
        modes: {
          repulse: { distance: 150, duration: 0.4 },
        },
      };

  return (
    <section id="hero" className="w-full bg-gray-900 text-white py-20 relative overflow-hidden">
      {/* Partículas como background solo si el engine está listo */}
      {init && (
        <Particles
          id="tsparticles"
          options={{
            fullScreen: { enable: false },
            background: {
              color: { value: "#101828" },
            },
            fpsLimit: 120,
            interactivity,
            particles: {
              color: { value: "#00e0ff" },
              links: {
                color: "#00e0ff",
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 2,
              },
              move: {
                direction: "none",
                enable: true,
                outModes: { default: "bounce" },
                random: false,
                speed: 2,
                straight: false,
              },
              number: {
                density: { enable: true, width: 800 },
                value: 80,
              },
              opacity: { value: 0.8 },
              shape: { type: "circle" },
              size: { value: { min: 1, max: 5 } },
            },
            detectRetina: true,
          }}
          className="absolute inset-0 w-full h-full z-0 pointer-events-none"
        />
      )}
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-8 relative z-20">
        {/* Texto a la izquierda */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
            Transformamos tu Negocio con Estrategias Digitales de Alto Impacto
          </h1>
          <p className="text-lg md:text-2xl mb-8 max-w-3xl">
            Agencia Integral de Marketing, Diseño y Desarrollo Web. Talento Latino con Estándares Internacionales y Precios Competitivos para Norteamérica.
          </p>
          <a 
            href="#contact"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded transition duration-300 text-lg shadow-lg"
          >
            Descubre cómo podemos impulsar tus ventas
          </a>
        </div>
        {/* Video a la derecha en desktop */}
        <div className="flex-1 w-full max-w-2xl hidden md:flex items-center justify-center">
          <video
            src="/videos/avanxia_hq.webm"
            autoPlay
            loop
            muted
            playsInline
            className="rounded-full w-[340px] h-[340px] md:w-[420px] md:h-[420px] lg:w-[520px] lg:h-[520px] object-cover bg-gray-800"
            poster="/images/portfolio/poolquality/HOME.jpg"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
