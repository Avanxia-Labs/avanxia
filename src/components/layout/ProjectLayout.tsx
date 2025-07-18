// =================================================================
// 1. IMPORTS
// =================================================================
import { motion } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { Container, Engine } from "@tsparticles/engine";
import { portfolioData, PortfolioItem } from "@/data/portfolioData";
import { useGlassCardActiveOnView } from "@/hooks/use-section-underline";
import Footer from "../Footer";

// =================================================================
// 2. TYPE DEFINITIONS
// =================================================================
export type Media =
  | { type: "img"; src: string; alt: string }
  | { type: "video"; src: string; poster?: string };

export interface ProjectData {
  title: string;
  intro: string;
  mediaMain: Media;
  mediaSecondary?: Media;
  mediaExtra?: Media[];
  caption: string;
  description: string;
  challenge: string;
  solution: string;
  result: string;
}

// =================================================================
// 3. HELPER COMPONENTS & HOOKS
// =================================================================
const InfoCard = ({ title, text }: { title: string; text: string }) => {
  const glassRef = useGlassCardActiveOnView<HTMLDivElement>();
  return (
    <div ref={glassRef} className="glass-panel relative w-full p-8 md:p-10 flex flex-col">
      <h4 className="text-xl md:text-2xl font-semibold mb-3">{title}</h4>
      <p className="opacity-90 leading-relaxed">{text}</p>
    </div>
  );
};

const renderMedia = (m: Media, isMain = false) =>
  m.type === "img" ? (
    isMain ? (
      <motion.img src={m.src} alt={m.alt} className="w-full max-w-4xl h-auto object-contain mx-auto" animate={{ y: [0, -25, 0], scale: [1, 1.03, 1] }} transition={{ duration: 4, ease: [0.45, 0, 0.55, 1], repeat: Infinity, repeatType: "mirror" }}/>
    ) : (
      <img src={m.src} alt={m.alt} className="w-full max-w-4xl h-auto object-contain mx-auto"/>
    )
  ) : (
    <video src={m.src} poster={m.poster} controls className="w-full max-w-4xl h-auto mx-auto rounded"/>
  );

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


// =================================================================
// 4. MAIN PROJECT LAYOUT COMPONENT
// =================================================================
const ProjectLayout = ({ data }: { data: ProjectData }) => {

  // --- A. Hooks, Estado y Referencias ---
  const [init, setInit] = useState(false);
  const isMobile = useIsMobile();
  const location = useLocation();
  const particlesRef = useRef<Container | null>(null);
  const underlineRef = useRef<HTMLSpanElement>(null);

  // --- B. Lógica y Datos Derivados ---
  const pathParts = location.pathname.split("/");
  const slug = pathParts[pathParts.length - 1] || "";
  const currentIndex = portfolioData.findIndex((p) => p.slug === slug);
  const prevItem: PortfolioItem | null = currentIndex > 0 ? portfolioData[currentIndex - 1] : null;
  const nextItem: PortfolioItem | null = currentIndex < portfolioData.length - 1 ? portfolioData[currentIndex + 1] : null;
  
  // Configuración de interactividad para móviles
  const mobileInteractivity = {
    events: {
      onClick: { enable: true, mode: "repulse" as const },
      onHover: { enable: true, mode: "grab" as const, parallax: { enable: true, force: 60 } },
      resize: { enable: true }
    },
    modes: {
      repulse: { distance: 100, duration: 0.8 },
      grab: { distance: 140, links: { opacity: 0.8 } }
    }
  };

  // Configuración de interactividad para escritorio
  const desktopInteractivity = {
    events: {
      onHover: { enable: true, mode: "grab" as const, parallax: { enable: true, force: 60 } },
      resize: { enable: true }
    },
    modes: {
      grab: { distance: 140, links: { opacity: 0.8 } }
    }
  };

  // --- C. Callbacks y Efectos ---
  const handleParticlesLoaded = useCallback(async (container?: Container): Promise<void> => { particlesRef.current = container ?? null; }, []);
  
  useEffect(() => { initParticlesEngine(async (engine: Engine) => { await loadSlim(engine); }).then(() => { setInit(true); }); }, []);

  useEffect(() => { window.scrollTo({ top: 0, behavior: "smooth" }); }, [location.pathname]);

  // --- D. Renderizado JSX ---
  return (
    <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.5, ease: [0.25, 0.1, 0.25, 1] }} className="bg-background text-foreground font-sans">
      {/* ... (Otras secciones sin cambios) ... */}
      <section className="relative w-full py-16 md:py-24 px-4 overflow-hidden group">
        {/* Fondo con efecto glass mejorado */}
        <div className="absolute inset-0 w-full h-full">
          <div className="glass-panel w-full h-full !rounded-none bg-background/60 backdrop-blur-lg border border-border/20 transition-all duration-300 group-hover:backdrop-blur-xl group-hover:bg-background/70" />
        </div>
        
        {/* Partículas interactivas */}
        {init && (
          <div className="absolute inset-0 w-full h-full z-10">
            <Particles 
              id="tsparticles-hero" 
              particlesLoaded={handleParticlesLoaded} 
              options={{
                fullScreen: { enable: false },
                background: { color: { value: "transparent" } },
                fpsLimit: 120,
                interactivity: isMobile ? mobileInteractivity : desktopInteractivity,
                particles: { 
                  color: { value: "#00a6d6" }, 
                  links: { 
                    color: "#00a6d6", 
                    distance: 150, 
                    enable: true, 
                    opacity: 0.4, 
                    width: 1.5 
                  },
                  move: { 
                    direction: "none", 
                    enable: true, 
                    outModes: { default: "bounce" }, 
                    random: false, 
                    speed: 1.5, 
                    straight: false 
                  },
                  number: { 
                    density: { 
                      enable: true, 
                      width: 800 
                    }, 
                    value: 60 
                  },
                  opacity: { 
                    value: 0.6,
                    animation: {
                      enable: true,
                      speed: 1,
                      sync: false
                    }
                  }, 
                  shape: { type: "circle" }, 
                  size: { 
                    value: { min: 1, max: 4 },
                    animation: {
                      enable: true,
                      speed: 2,
                      sync: false
                    }
                  }
                },
                detectRetina: true 
              }} 
              className="absolute inset-0 w-full h-full"
            />
          </div>
        )}
        
        {/* Contenido principal en la capa superior */}
        <div className="relative z-20 max-w-7xl mx-auto w-full">
          <div className="flex flex-col items-center">
            <div className="text-center max-w-4xl mx-auto mb-10">
              <h2 className="text-4xl md:text-6xl font-extrabold text-center mb-8">
                <span ref={underlineRef} className="section-title-underline">{data.title}</span>
              </h2>
              <p 
                className="text-lg max-w-2xl mx-auto mt-4 opacity-90 leading-relaxed drop-shadow-sm" 
                dangerouslySetInnerHTML={{ __html: data.intro }}
              />
            </div>
            <div className="relative w-full">
              {renderMedia(data.mediaMain, true)}
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#0f172a] dark:bg-card text-white dark:text-foreground text-center px-6 py-16"><h2 className="text-xl md:text-2xl font-bold mb-6">{data.caption}</h2><p className="max-w-3xl mx-auto text-base md:text-lg">{data.description}</p></section>
      <section className="py-16 px-6 text-center"><h2 className="text-4xl md:text-6xl font-extrabold text-center mb-8"><span ref={underlineRef} className="section-title-underline">Descripción Detallada</span></h2><div className="grid gap-8 md:gap-10 grid-cols-1 md:grid-cols-3 max-w-6xl mx-auto"><InfoCard title="Desafío" text={data.challenge} /><InfoCard title="Solución" text={data.solution} /><InfoCard title="Resultado" text={data.result} /></div></section>
      {data.mediaSecondary?.type === "img" && (<section className="flex justify-center items-center py-10"><div>{renderMedia(data.mediaSecondary, false)}</div></section>)}

      {/* ----- SINGLE EXTRA VIDEO ----- */}
      {data.mediaExtra && data.mediaExtra.length === 1 && data.mediaExtra[0].type === "video" && (
        <section className="flex justify-center items-center py-10 px-4">
          <div className="w-full max-w-2xl mx-auto">
            <div className="relative aspect-video w-full overflow-hidden rounded-2xl shadow-2xl bg-black">
              {/* Video de fondo desenfocado */}
              <video src={data.mediaExtra[0].src} className="absolute inset-0 w-full h-full object-cover blur-2xl opacity-40" autoPlay muted loop playsInline/>
              {/* Video principal sin cortes */}
              <video src={data.mediaExtra[0].src} poster={data.mediaExtra[0].poster} controls className="relative w-full h-full object-contain"/>
            </div>
          </div>
        </section>
      )}

      {/* ----- MULTIPLE EXTRA VIDEOS ----- */}
      {data.mediaExtra && data.mediaExtra.filter((m) => m.type === "video").length > 1 && (
        <section className="bg-background py-10 px-6">
          <div className="flex justify-center items-start flex-wrap gap-8">
            {data.mediaExtra.filter((m): m is Extract<Media, { type: "video" }> => m.type === "video").map((m, i) => (
              // Se mantiene la distribución original de 3 por fila
              <div key={i} className="w-full sm:w-1/2 md:w-1/3">
                {/* ✅ LA SOLUCIÓN FINAL: Contenedor rectangular con fondo desenfocado */}
                <div className="relative aspect-video w-full overflow-hidden rounded-lg shadow-lg bg-black">
                  {/* Video de fondo desenfocado */}
                  <video src={m.src} className="absolute inset-0 w-full h-full object-cover blur-2xl opacity-40" autoPlay muted loop playsInline/>
                  {/* Video principal sin cortes */}
                  <video src={m.src} poster={m.poster} controls className="relative w-full h-full object-contain"/>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ----- PAGINATION & FOOTER (sin cambios) ----- */}
      <section className="py-10 px-6">
        <div className="max-w-4xl mx-auto flex justify-between items-center gap-4">
          {prevItem ? (<Link to={`/proyectos/${prevItem.slug}`} className="inline-flex items-center justify-center text-center p-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors w-1/3"> <span className="text-2xl mr-2">←</span> <span>{prevItem.title}</span> </Link>) : (<div className="w-1/3" />)}
          <Link to="/portfolio" className="inline-flex items-center justify-center text-center p-3 rounded-lg bg-gray-200 text-gray-800 hover:bg-gray-300 transition-colors flex-shrink-0">Volver a Proyectos</Link>
          {nextItem ? (<Link to={`/proyectos/${nextItem.slug}`} className="inline-flex items-center justify-center text-center p-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors w-1/3"> <span>{nextItem.title}</span> <span className="text-2xl ml-2">→</span> </Link>) : (<div className="w-1/3" />)}
        </div>
      </section>
      <Footer />
    </motion.div>
  );
};

export default ProjectLayout;