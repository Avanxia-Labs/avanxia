import { useCallback, useEffect, useRef, useState } from 'react';
import { Layers, MessageSquare, Bot, Clock, Users, Settings, Zap, Download, Palette, Code, Search, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SEOHelmet from '@/components/SEOHelmet';
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { Container, Engine } from "@tsparticles/engine";
import { pdf } from '@react-pdf/renderer';
import GybConnectPDF from '@/components/GybConnectPDF';

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

const CotizacionGybConnect = () => {
  const [init, setInit] = useState(false);
  const isMobile = useIsMobile();
  const particlesRef = useRef<Container | null>(null);
  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false);

  const handleParticlesLoaded = useCallback(async (container?: Container): Promise<void> => {
    particlesRef.current = container ?? null;
  }, []);

  const generatePDF = async () => {
    setIsGeneratingPDF(true);
    try {
      const blob = await pdf(<GybConnectPDF />).toBlob();
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'Propuesta-GYB-Connect-Avanxia.pdf';
      document.body.appendChild(link);
      link.click();
      
      // Cleanup after a short delay to ensure download starts
      setTimeout(() => {
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
      }, 100);
    } catch (error) {
      console.error('Error generando PDF:', error);
      alert('Error al generar el PDF. Por favor, inténtalo de nuevo.');
    } finally {
      setIsGeneratingPDF(false);
    }
  };

  useEffect(() => {
    initParticlesEngine(async (engine: Engine) => {
      await loadSlim(engine);
    }).then(() => setInit(true));
  }, []);

  const interactivity = isMobile
    ? { events: { onClick: { enable: true, mode: "repulse" } }, modes: { repulse: { distance: 80 } } }
    : { events: { onHover: { enable: true, mode: "repulse" } }, modes: { repulse: { distance: 70 } } };

  return (
    <>
      <SEOHelmet />
      
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-20 pb-16 px-4">
          {init && (
            <Particles
              id="tsparticles-cotizacion"
              particlesLoaded={handleParticlesLoaded}
              options={{
                fullScreen: { enable: false },
                background: { color: { value: "transparent" } },
                fpsLimit: 120,
                interactivity,
                particles: {
                  color: { value: "#00e0ff" },
                  links: { color: "#00e0ff", distance: 150, enable: true, opacity: 0.3, width: 1 },
                  move: { direction: "none", enable: true, outModes: { default: "bounce" }, speed: 1.5 },
                  number: { density: { enable: true, width: 800 }, value: 60 },
                  opacity: { value: 0.6 },
                  shape: { type: "circle" },
                  size: { value: { min: 1, max: 3 } },
                },
                detectRetina: true,
              }}
              className="absolute inset-0 w-full h-full z-0 pointer-events-none"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/2 to-secondary/2 dark:from-primary/5 dark:to-secondary/5" />
          <div className="relative max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Zap className="w-4 h-4" />
                Propuesta de Desarrollo Web Avanzado
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
                Sitio Web de Alto Impacto para <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">GYB Connect</span>
              </h1>
              <p className="text-xl text-foreground/70 max-w-3xl mx-auto mb-8">
                Una herramienta educativa y de ventas diseñada para la generación de prospectos cualificados, con un innovador enfoque de 3 niveles de información.
              </p>
              <div className="flex justify-center">
                <Button 
                  size="cta" 
                  className="bg-gradient-to-r from-secondary to-primary hover:from-secondary/90 hover:to-primary/90 text-white h-12 flex items-center justify-center"
                  onClick={generatePDF}
                  disabled={isGeneratingPDF}
                >
                  <Download className="w-4 h-4 mr-2 flex-shrink-0" />
                  {isGeneratingPDF ? 'Generando PDF...' : 'Descargar Propuesta PDF'}
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Project Info */}
        <section className="py-16 px-4 relative">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Información del Proyecto
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Users className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-foreground">Cliente</h3>
                      <p className="text-foreground/70">GYB Connect</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-foreground">Fecha de Inicio</h3>
                      <p className="text-foreground/70">Lunes, 24 de junio de 2025</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-foreground">Duración Estimada</h3>
                      <p className="text-foreground/70">4 semanas</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Settings className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-foreground">Resumen del Proyecto</h3>
                      <p className="text-foreground/70">El objetivo es desarrollar un sitio web extenso y de alto impacto para GYB Connect, enfocado en la generación de prospectos cualificados y diseñado para funcionar como una herramienta educativa y de ventas. El sitio se inspirará en la fluidez de animaciones y presentación de información de líderes en la industria como Helcim y Green Payments.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8 backdrop-blur-sm border border-primary/20">
                  <div className="grid grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-3">
                        <Palette className="w-8 h-8 text-primary" />
                      </div>
                      <h4 className="font-semibold text-foreground">Diseño UI/UX</h4>
                      <p className="text-sm text-foreground/70">Interfaz de vanguardia</p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-3">
                        <Code className="w-8 h-8 text-secondary" />
                      </div>
                      <h4 className="font-semibold text-foreground">Desarrollo</h4>
                      <p className="text-sm text-foreground/70">Next.js/React</p>
                    </div>
                     <div className="text-center">
                      <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-3">
                        <Search className="w-8 h-8 text-primary" />
                      </div>
                      <h4 className="font-semibold text-foreground">SEO</h4>
                      <p className="text-sm text-foreground/70">Posicionamiento</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Three-Level Approach Section */}
        <section className="py-20 px-4 bg-background">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground">Un Enfoque Innovador en Tres Niveles</h2>
                    <p className="mt-4 text-lg text-foreground/70 max-w-3xl mx-auto">Maximizamos la comprensión y confianza del usuario con una estructura de información única.</p>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="glass-panel p-6 rounded-xl text-center">
                        <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl flex items-center justify-center mb-4 text-primary mx-auto"><Layers className="w-8 h-8" /></div>
                        <h3 className="text-xl font-semibold text-foreground mb-3">Nivel 1: Diseño Principal</h3>
                        <p className="text-foreground/70">Experiencia de usuario intuitiva con un diseño de vanguardia que presenta claramente los servicios y propuestas de valor.</p>
                    </div>
                    <div className="glass-panel p-6 rounded-xl text-center">
                        <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl flex items-center justify-center mb-4 text-primary mx-auto"><MessageSquare className="w-8 h-8" /></div>
                        <h3 className="text-xl font-semibold text-foreground mb-3">Nivel 2: Tooltips Interactivos</h3>
                        <p className="text-foreground/70">Explicaciones concisas integradas en términos técnicos o frases clave para educar al usuario sin saturar la página, aclarando conceptos complejos del sector fintech.</p>
                    </div>
                    <div className="glass-panel p-6 rounded-xl text-center">
                        <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl flex items-center justify-center mb-4 text-primary mx-auto"><Bot className="w-8 h-8" /></div>
                        <h3 className="text-xl font-semibold text-foreground mb-3">Nivel 3: Chatbot con IA</h3>
                        <p className="text-foreground/70">Un asistente virtual alimentado con la información de los servicios de GYB Connect, capaz de resolver dudas específicas, guiar a los usuarios y capturar prospectos.</p>
                    </div>
                </div>
            </div>
        </section>

        {/* Alcance del Proyecto y Entregables */}
        <section className="py-20 px-4">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground">Alcance del Proyecto y Entregables</h2>
                    <p className="mt-4 text-lg text-foreground/70 max-w-3xl mx-auto">Detalle de las fases y los resultados que puede esperar en cada etapa.</p>
                </div>
                <div className="grid md:grid-cols-2 gap-8 items-start">
                    <div className="glass-panel p-8 rounded-xl">
                        <h3 className="text-2xl font-semibold text-foreground mb-4">Fase 1: Estrategia y Diseño UI/UX (1.5 semanas)</h3>
                        <ul className="space-y-3 text-foreground/70">
                            <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" /><span>Sesión de descubrimiento para alinear objetivos y levantamiento de información.</span></li>
                            <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" /><span>Clasificación de la Información en los 3 niveles descritos.</span></li>
                            <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" /><span>Diseño de la arquitectura de la información y mapa del sitio (10-15 secciones).</span></li>
                            <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" /><span>Diseño completo de UI/UX en Figma con especificaciones detalladas.</span></li>
                            <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" /><span>Prototipo interactivo para validación del flujo de navegación.</span></li>
                        </ul>
                    </div>
                    <div className="glass-panel p-8 rounded-xl">
                        <h3 className="text-2xl font-semibold text-foreground mb-4">Fase 2: Desarrollo e Implementación (2.5 semanas)</h3>
                        <ul className="space-y-3 text-foreground/70">
                            <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" /><span>Desarrollo Frontend con Next.js/React para animaciones fluidas y SEO.</span></li>
                            <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" /><span>Integración de los tooltips interactivos en todo el sitio.</span></li>
                            <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" /><span>Desarrollo e integración del chatbot con IA entrenado.</span></li>
                            <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" /><span>Creación de vistas: Home, Soluciones, Marketing, Terminales, Gateway, Sobre nosotros, Contacto.</span></li>
                            <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" /><span>Configuración de formularios de contacto optimizados para Google Ads.</span></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        {/* Presupuesto y Plan de Pagos */}
        <section className="py-20 px-4 bg-background">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground">Presupuesto y Plan de Pagos</h2>
                    <p className="mt-4 text-lg text-foreground/70">Un plan de pagos transparente y alineado con el progreso del proyecto.</p>
                </div>
                <div className="glass-panel rounded-xl overflow-hidden">
                    <div className="grid grid-cols-3 font-semibold text-foreground bg-primary/10 p-4">
                        <div>Hito</div>
                        <div className="text-center">Monto</div>
                        <div className="text-right">Fecha Límite de Pago</div>
                    </div>
                    <div className="divide-y divide-primary/10 text-foreground/80">
                        <div className="grid grid-cols-3 p-4 items-center">
                            <div>Primer Pago</div>
                            <div className="text-center font-bold text-lg">$700 USD</div>
                            <div className="text-right">Viernes, 4 de julio de 2025</div>
                        </div>
                        <div className="grid grid-cols-3 p-4 items-center">
                            <div>Segundo Pago</div>
                            <div className="text-center font-bold text-lg">$800 USD</div>
                            <div className="text-right">Martes, 15 de julio de 2025</div>
                        </div>
                        <div className="grid grid-cols-3 p-4 items-center">
                            <div>Tercer Pago</div>
                            <div className="text-center font-bold text-lg">$1,000 USD</div>
                            <div className="text-right">Martes, 22 de julio de 2025</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Signature */}
        <section className="pt-20 pb-10 px-4">
          <div className="max-w-4xl mx-auto text-center border-t border-border pt-10">
            <p className="text-lg text-foreground/70 mb-2">Atentamente,</p>
            <p className="text-2xl font-bold text-foreground mb-1">Ismael LSG</p>
            <p className="text-lg text-foreground/70 mb-6">Socio Operativo • Avanxia Labs</p>
            <img 
              src="/images/cotizaciones/ismael-lsg-signature.png" 
              alt="Firma de Ismael LSG" 
              className="mx-auto h-20 object-contain dark:brightness-0 dark:invert"
            />
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">¿Listos para empezar?</h2>
            <p className="text-xl text-foreground/70 max-w-3xl mx-auto mb-8">
              Descargue la propuesta completa en formato PDF o contáctenos para dar el siguiente paso.
            </p>
            <div className="flex justify-center">
              <Button 
                size="cta" 
                className="bg-gradient-to-r from-secondary to-primary hover:from-secondary/90 hover:to-primary/90 text-white h-12 flex items-center justify-center"
                onClick={generatePDF}
                disabled={isGeneratingPDF}
              >
                <Download className="w-4 h-4 mr-2 flex-shrink-0" />
                {isGeneratingPDF ? 'Generando PDF...' : 'Descargar Propuesta PDF'}
              </Button>
            </div>
          </div>
        </section>

      </div>
    </>
  );
};

export default CotizacionGybConnect;
