// src/components/layout/ProjectLayout.tsx
import { motion } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { Container, Engine } from "@tsparticles/engine";


/** ----- 1. Tipos de ayuda  --------------------------------------- */
export type Media =
  | { type: "img"; src: string; alt: string }
  | { type: "video"; src: string; poster?: string };

export interface ProjectData {
  title: string;
  intro: string;
  mediaMain: Media;          
  mediaSecondary?: Media;   
  mediaExtra?: Media[]  
  caption: string;
  description: string;   // ← nuevo
  challenge: string;
  solution: string;
  result: string;
}

/* ---------- tarjeta estilo “Valor” ------------------------- */
import { useGlassCardActiveOnView } from "@/hooks/use-section-underline"; // misma ruta que ya usas

const InfoCard = ({ title, text }: { title: string; text: string }) => {
  const glassRef = useGlassCardActiveOnView<HTMLDivElement>();

  return (
    <div
      ref={glassRef}
      className="glass-panel relative w-full p-8 md:p-10 flex flex-col"
    >
      <h4 className="text-xl md:text-2xl font-semibold mb-3">{title}</h4>
      <p className="opacity-90 leading-relaxed">{text}</p>
    </div>
  );
};


/** ----- 2. Renderizador de media  -------------------------------- */
const renderMedia = (m: Media, isMain = false) =>
  m.type === "img" ? (
    isMain ? (
      <motion.img
        src={m.src}
        alt={m.alt}
        className="w-full max-w-4xl h-auto object-contain mx-auto"
        animate={{ 
          y: [0, -10, 0],  // Movimiento sutil hacia arriba y abajo
        }}
        transition={{ 
          duration: 6,     // Un ciclo completo toma 6 segundos
          ease: "easeInOut", 
          repeat: Infinity,  // Repetir indefinidamente
          repeatType: "reverse"  // Alternar dirección para un movimiento suave
        }}
      />
    ) : (
      <img
        src={m.src}
        alt={m.alt}
        className="w-full max-w-4xl h-auto object-contain mx-auto"
      />
    )
  ) : (
    <video
      src={m.src}
      poster={m.poster}
      controls
      className="w-full max-w-4xl h-auto mx-auto rounded"
    />
  );

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

/** ----- 3. Layout reusable  -------------------------------------- */
const ProjectLayout = ({ data }: { data: ProjectData }) => {
  // Partículas de fondo
  const [init, setInit] = useState(false);
  const isMobile = useIsMobile();
  const particlesRef = useRef<Container | null>(null);

  const handleParticlesLoaded = useCallback(async (container?: Container): Promise<void> => {
    particlesRef.current = container ?? null;
  }, []);

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
          onTap: { enable: true, mode: "repulse" },
          resize: { enable: true },
        },
        modes: {
          repulse: { distance: 80, duration: 1.2 },
        },
      }
    : {
        events: {
          onHover: { enable: true, mode: "repulse" },
          resize: { enable: true },
        },
        modes: {
          repulse: { distance: 70, duration: 5.2 },
        },
      };
      
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
return (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1.5, ease: [0.25, 0.1, 0.25, 1] }}
    className="bg-background text-foreground font-sans"
  >
   <div className="bg-background text-foreground font-sans">
      {/* project_hero: sección completa con estilo glass-panel que incluye título, descripción e imagen principal */}
      <section className="glass-panel relative w-full py-20 md:pt-28 pb-20 px-4 mb-0 overflow-hidden !rounded-none" style={{ borderRadius: 0 }}>
        {/* Partículas interactivas que ocupan todo el ancho y alto */}
        {init && (
          <div className="absolute inset-0 w-full h-full overflow-hidden" style={{ borderRadius: 0 }}>
            <Particles
              id="tsparticles-hero"
              particlesLoaded={handleParticlesLoaded}
              options={{
                fullScreen: { enable: false },
                background: {
                  color: { value: "transparent" },
                },
                fpsLimit: 120,
                interactivity,
                particles: {
                  color: { value: "#00a6d6" },
                  links: {
                    color: "#00a6d6",
                    distance: 150,
                    enable: true,
                    opacity: 0.4,
                    width: 1.5,
                  },
                  move: {
                    direction: "none",
                    enable: true,
                    outModes: { default: "bounce" },
                    random: false,
                    speed: 1.5,
                    straight: false,
                  },
                  number: {
                    density: { enable: true, width: 800 },
                    value: 60,
                  },
                  opacity: { value: 0.6 },
                  shape: { type: "circle" },
                  size: { value: { min: 1, max: 4 } },
                },
                detectRetina: true,
              }}
              className="w-full h-full"
              style={{ borderRadius: 0 }}
            />
          </div>
        )}
        
        {/* Contenido sobre las partículas: título, descripción e imagen principal */}
        <div className="relative z-10 flex flex-col items-center">
          {/* Título y descripción */}
          <div className="text-center max-w-4xl mx-auto mb-10">
            <h1 className="text-3xl md:text-5xl font-bold drop-shadow-sm">{data.title}</h1>
            <p className="text-lg max-w-2xl mx-auto mt-4 opacity-90 leading-relaxed drop-shadow-sm">{data.intro}</p>
          </div>
          
          {/* Imagen principal integrada dentro de la misma sección */}
          <div className="relative z-10 w-full">
            {renderMedia(data.mediaMain, true)}
          </div>
        </div>
      </section>
  
      {/* bloque oscuro --------------------------------------------- */}
      <section className="bg-[#0f172a] dark:bg-card text-white dark:text-foreground text-center px-6 py-16">
        <h2 className="text-xl md:text-2xl font-bold mb-6">{data.caption}</h2>
        <p className="max-w-3xl mx-auto text-base md:text-lg">{data.description}</p>
      </section>

        
      {/* descripción detallada ------------------------------------- */}
      <section className="py-16 px-6 text-center">
        <h3 className="text-2xl font-bold mb-12">Descripción Detallada</h3>

        <div className="grid gap-8 md:gap-10 grid-cols-1 md:grid-cols-3 max-w-6xl mx-auto">
          <InfoCard title="Desafío"   text={data.challenge} />
          <InfoCard title="Solución"  text={data.solution}  />
          <InfoCard title="Resultado" text={data.result}    />
        </div>
      </section>
  
      {/* media secundaria (solo imágenes) ----------------------------- */}
      {data.mediaSecondary?.type === "img" && (
        <section className="flex justify-center items-center py-10">
          <div>
            {renderMedia(data.mediaSecondary, false)}
          </div>
        </section>
      )}
      {/* medios extra (0‑n) ---------------------------------------- */}
{data.mediaExtra && data.mediaExtra.length === 1 && data.mediaExtra[0].type === "video" && (
  <section className="flex justify-center items-center py-10">
    <div className="w-full sm:w-4/5 md:w-3/4 lg:w-2/3 aspect-video overflow-hidden rounded-2xl shadow-2xl">
      <video
        src={data.mediaExtra[0].src}
        poster={data.mediaExtra[0].poster}
        controls
        className="w-full h-full object-cover"
      />
    </div>
  </section>
)}

{data.mediaExtra && data.mediaExtra.filter(m => m.type === "video").length > 1 && (
  <section className="bg-background py-10 px-6">
    <div className="flex justify-center items-start flex-wrap gap-8">
      {data.mediaExtra
        .filter((m): m is Extract<Media, { type: "video" }> => m.type === "video")
        .map((m, i) => (
          <div
            key={i}
            className="w-full sm:w-1/2 md:w-1/3 aspect-video overflow-hidden rounded-lg shadow-lg"
          >
            <video
              src={m.src}
              poster={m.poster}
              controls
              className="w-full h-full object-cover"
            />
          </div>
        ))}
    </div>
  </section>
)}

      {/* footer ----------------------------------------------------- */}
      <footer className="bg-[#0f172a] dark:bg-card text-white dark:text-foreground text-center py-10 mt-16 border-t border-border">
        <p className="text-sm">© AVANXIA – Todos los derechos reservados</p>
        <div className="flex justify-center gap-6 text-sm mt-2">
          <span>Inicio</span>
          <span>Portafolio</span>
          <span>Contacto</span>
        </div>
      </footer>
    </div>  </motion.div>
 
  );
};

export default ProjectLayout;
