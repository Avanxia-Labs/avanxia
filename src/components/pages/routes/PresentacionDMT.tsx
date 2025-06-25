import { useCallback, useEffect, useRef, useState } from 'react';
import { Zap, Download, CheckCircle2, ArrowRight, Briefcase, Filter, ShieldCheck, TrendingUp, Users, Code, Target, BarChart2, FileText, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import SEOHelmet from '@/components/SEOHelmet';
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { Container, Engine } from "@tsparticles/engine";

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

const PresentacionDMT = () => {
  const [init, setInit] = useState(false);
  const isMobile = useIsMobile();
  const particlesRef = useRef<Container | null>(null);

  const handleParticlesLoaded = useCallback(async (container?: Container): Promise<void> => {
    particlesRef.current = container ?? null;
  }, []);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/cotizaciones/DMT - AVANXIA.pdf'; // Ruta al PDF en la carpeta public
    link.download = 'Presentacion-DMT-Avanxia.pdf'; // Nombre que tendrá el archivo descargado
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  useEffect(() => {
    initParticlesEngine(async (engine: Engine) => {
      await loadSlim(engine);
    }).then(() => setInit(true));
  }, []);

  const interactivity = isMobile
    ? { events: { onClick: { enable: true, mode: "repulse" } }, modes: { repulse: { distance: 80 } } }
    : { events: { onHover: { enable: true, mode: "repulse" } }, modes: { repulse: { distance: 70 } } };

  const StickyCTA = () => (
    <motion.div
      className="sticky top-20 z-50 w-full bg-primary shadow-lg"
      initial={{ y: -150, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut", delay: 0.5 }}
    >
      <div className="container mx-auto px-4 flex items-center justify-center gap-4 md:gap-8 flex-wrap py-3">
          <p className="text-primary-foreground text-center text-sm md:text-base flex-grow">
            <span className="font-semibold">Le invito a agendar una reunión</span> para explorar cómo podemos aumentar sus oportunidades de venta.
          </p>
          <a
            href="mailto:info@avanxia.com?subject=Reunión sobre oportunidades de venta"
            className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-primary bg-primary-foreground rounded-md hover:bg-primary-foreground/90 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 transition-colors"
          >
            <Mail className="w-4 h-4 mr-2" />
            Agendar Reunión
          </a>
      </div>
    </motion.div>
  );

  return (
    <>
      <SEOHelmet />
      
      <div className="min-h-screen bg-background">
        <StickyCTA />
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-20 pb-16 px-4">
          {init && (
            <Particles
              id="tsparticles-presentacion"
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
                Propuesta Estratégica para DMT Logística y Almacenamiento
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
                Motor de Generación de Demanda B2B
              </h1>
              <p className="text-xl text-foreground/70 max-w-3xl mx-auto mb-8">
                Convertimos el Ruido Digital en Oportunidades de Negocio Reales.
              </p>
              <div className="flex justify-center">
                <Button 
                  size="cta" 
                  className="bg-gradient-to-r from-secondary to-primary hover:from-secondary/90 hover:to-primary/90 text-white h-12 flex items-center justify-center"
                  onClick={handleDownload}
                >
                  <Download className="w-4 h-4 mr-2 flex-shrink-0" />
                  Descargar Presentación PDF
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* The Challenge */}
        <section className="py-20 px-4 bg-background">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground">El Desafío: Más Allá de la "Presencia Digital"</h2>
                    <p className="mt-4 text-lg text-foreground/70 max-w-3xl mx-auto">El verdadero desafío es triple. La mayoría de las agencias se detienen en la "visibilidad". Nosotros vemos eso como el punto de partida.</p>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="glass-panel p-6 rounded-xl text-center">
                        <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl flex items-center justify-center mb-4 text-primary mx-auto"><Filter className="w-8 h-8" /></div>
                        <h3 className="text-xl font-semibold text-foreground mb-3">Filtrar el Ruido</h3>
                        <p className="text-foreground/70">Atraer a prospectos de empresas que necesitan servicios logísticos de alto valor.</p>
                    </div>
                    <div className="glass-panel p-6 rounded-xl text-center">
                        <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl flex items-center justify-center mb-4 text-primary mx-auto"><ShieldCheck className="w-8 h-8" /></div>
                        <h3 className="text-xl font-semibold text-foreground mb-3">Generar Confianza Instantánea</h3>
                        <p className="text-foreground/70">Su imagen digital debe destacar por el uso de tendencias de diseño modernas para generar interés de compra.</p>
                    </div>
                    <div className="glass-panel p-6 rounded-xl text-center">
                        <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl flex items-center justify-center mb-4 text-primary mx-auto"><Briefcase className="w-8 h-8" /></div>
                        <h3 className="text-xl font-semibold text-foreground mb-3">Optimizar el Tiempo Comercial</h3>
                        <p className="text-foreground/70">Su equipo de ventas debe invertir tiempo en cerrar negocios con prospectos calificados, no en perseguir contactos fríos.</p>
                    </div>
                </div>
            </div>
        </section>

        {/* Our Solution */}
        <section className="py-20 px-4">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground">Nuestra Solución: El Motor de Generación de Prospectos Calificados</h2>
                    <p className="mt-4 text-lg text-foreground/70 max-w-3xl mx-auto">Un sistema integral que construimos y operamos para entregarle a su equipo comercial prospectos listos para una conversación de cierre.</p>
                </div>
                <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
                    <div className="glass-panel p-4 rounded-xl text-center flex-1">
                        <h3 className="font-semibold text-foreground">Atracción</h3>
                        <p className="text-sm text-foreground/70">Anuncios de Precisión en Google y Meta.</p>
                    </div>
                    <ArrowRight className="w-8 h-8 text-primary flex-shrink-0" />
                    <div className="glass-panel p-4 rounded-xl text-center flex-1">
                        <h3 className="font-semibold text-foreground">Confianza y Conversión</h3>
                        <p className="text-sm text-foreground/70">Plataforma Digital de Élite.</p>
                    </div>
                    <ArrowRight className="w-8 h-8 text-primary flex-shrink-0" />
                    <div className="glass-panel p-4 rounded-xl text-center flex-1">
                        <h3 className="font-semibold text-foreground">Filtro Avanxia</h3>
                        <p className="text-sm text-foreground/70">Calificación de prospectos.</p>
                    </div>
                    <ArrowRight className="w-8 h-8 text-primary flex-shrink-0" />
                    <div className="bg-gradient-to-r from-primary to-secondary p-4 rounded-xl text-center flex-1">
                        <h3 className="font-semibold text-white">Resultado</h3>
                        <p className="text-sm text-white/80">Prospecto Caliente entregado a DMT.</p>
                    </div>
                </div>
            </div>
        </section>

        {/* Phases */}
        <section className="py-20 px-4 bg-background">
            <div className="max-w-6xl mx-auto">
                <div className="grid md:grid-cols-2 gap-8 items-start">
                    <div className="glass-panel p-8 rounded-xl">
                        <h3 className="text-2xl font-semibold text-foreground mb-4">Fase 1: Construcción de Plataforma (30-45 días)</h3>
                        <p className="text-foreground/70 mb-6">No podemos colocar un motor de Fórmula 1 sobre una estructura genérica. Por ello, nuestra alianza comienza con una fase única e integral.</p>
                        <ul className="space-y-3 text-foreground/70">
                            <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" /><span><b>Reconstrucción Web Estratégica:</b> Sitio de alto rendimiento (Next.js/React) enfocado en UX y conversión.</span></li>
                            <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" /><span><b>Levantamiento de Imagen:</b> Sesión de foto y video profesional para crear un banco de contenido auténtico.</span></li>
                            <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" /><span><b>Renovación del Ecosistema Digital:</b> Implementación de nueva línea gráfica en Redes Sociales y Google Business.</span></li>
                            <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" /><span><b>Configuración Tecnológica Completa:</b> Puesta a punto de Analytics, Google Ads, etc.</span></li>
                        </ul>
                    </div>
                    <div className="glass-panel p-8 rounded-xl">
                        <h3 className="text-2xl font-semibold text-foreground mb-4">Fase 2: Operación y Crecimiento (3 meses)</h3>
                        <p className="text-foreground/70 mb-6">Una vez construida la plataforma, activamos el motor con un compromiso inicial de 3 meses para garantizar la calibración y optimización.</p>
                        <ul className="space-y-3 text-foreground/70">
                            <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" /><span><b>Gestión de Campañas:</b> Operación en Google Ads, Meta Ads y Email marketing.</span></li>
                            <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" /><span><b>Contenido de Autoridad:</b> 2 Artículos mensuales y gestión de Redes Sociales para posicionamiento.</span></li>
                            <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" /><span><b>Generación de Oportunidades:</b> Objetivo de hasta 15 contactos calientes al mes.</span></li>
                            <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" /><span><b>Reporte y Estrategia:</b> Reporte quincenal y reunión de revisión de avances.</span></li>
                            <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" /><span><b>Mantenimiento y Optimización:</b> Soporte y mejora continua de la plataforma web.</span></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        {/* Investment */}
        <section className="py-20 px-4">
            <div className="max-w-5xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground">La Inversión: Construyendo su Activo de Crecimiento</h2>
                    <p className="mt-4 text-lg text-foreground/70 max-w-3xl mx-auto">No es un gasto de marketing, es la inversión en un activo que le pertenece y trabajará para usted 24/7.</p>
                </div>
                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    <div className="glass-panel p-8 rounded-xl border border-primary/20">
                        <h3 className="text-2xl font-semibold text-foreground mb-2">Inversión Estándar</h3>
                        <p className="text-4xl font-bold text-foreground mb-6">$3,409 <span className="text-lg font-normal text-foreground/70">USD/mes</span></p>
                        <ul className="space-y-3 text-foreground/70">
                            <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-primary/70 mr-3 mt-1 flex-shrink-0" /><span>Reconstrucción Web Estratégica</span></li>
                            <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-primary/70 mr-3 mt-1 flex-shrink-0" /><span>Levantamiento de Imagen y Autoridad Visual</span></li>
                            <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-primary/70 mr-3 mt-1 flex-shrink-0" /><span>Renovación del Ecosistema Digital</span></li>
                            <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-primary/70 mr-3 mt-1 flex-shrink-0" /><span>Configuración Tecnológica Completa</span></li>
                            <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-primary/70 mr-3 mt-1 flex-shrink-0" /><span>Activación de campañas y prospección</span></li>
                            <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-primary/70 mr-3 mt-1 flex-shrink-0" /><span>Seguimiento activo y reportes</span></li>
                        </ul>
                    </div>
                    <div className="glass-panel p-8 rounded-xl border-2 border-primary ring-4 ring-primary/10 relative">
                        <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2">
                            <div className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">Recomendado</div>
                        </div>
                        <h3 className="text-2xl font-semibold text-primary mb-2">Precio Especial (Clientes Referidos TSC)</h3>
                        <p className="text-4xl font-bold text-foreground mb-6">$2,999 <span className="text-lg font-normal text-foreground/70">USD/mes</span></p>
                        <ul className="space-y-3 text-foreground/70">
                            <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" /><span>Todos los beneficios estándar</span></li>
                            <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" /><span>12% de descuento en la inversión inicial</span></li>
                            <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" /><span><b>Cliente Prioritario</b></span></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        {/* KPIs */}
        <section className="py-20 px-4 bg-background">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground">¿Cómo Mediremos el Éxito?</h2>
                    <p className="mt-4 text-lg text-foreground/70 max-w-3xl mx-auto">Nos enfocamos en Métricas de Negocio, No de Vanidad. Su éxito está directamente ligado al nuestro.</p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="glass-panel p-6 rounded-xl"><Target className="w-8 h-8 text-primary mb-3" /><h3 className="text-xl font-semibold text-foreground mb-2">Prospectos Calificados (SQLs)</h3><p className="text-foreground/70">La métrica principal: oportunidades reales de negocio generadas.</p></div>
                    <div className="glass-panel p-6 rounded-xl"><BarChart2 className="w-8 h-8 text-primary mb-3" /><h3 className="text-xl font-semibold text-foreground mb-2">Costo por Prospecto (CP-SQL)</h3><p className="text-foreground/70">¿Cuánto nos cuesta generar cada oportunidad valiosa?</p></div>
                    <div className="glass-panel p-6 rounded-xl"><TrendingUp className="w-8 h-8 text-primary mb-3" /><h3 className="text-xl font-semibold text-foreground mb-2">Tasa de Conversión (Lead a SQL)</h3><p className="text-foreground/70">La eficiencia de nuestro proceso de calificación.</p></div>
                    <div className="glass-panel p-6 rounded-xl"><FileText className="w-8 h-8 text-primary mb-3" /><h3 className="text-xl font-semibold text-foreground mb-2">Retorno de Inversión (ROI)</h3><p className="text-foreground/70">El valor de los negocios cerrados contra la inversión total.</p></div>
                </div>
            </div>
        </section>

        {/* Why Avanxia */}
        <section className="py-20 px-4">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground">¿Por Qué Avanxia es el Socio Adecuado?</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="glass-panel p-6 rounded-xl"><Users className="w-8 h-8 text-primary mb-3" /><h3 className="text-xl font-semibold text-foreground mb-2">Socio Tecnológico, No Proveedor</h3><p className="text-foreground/70">Construimos y operamos su infraestructura de crecimiento. Su éxito es nuestro único KPI.</p></div>
                    <div className="glass-panel p-6 rounded-xl"><Code className="w-8 h-8 text-primary mb-3" /><h3 className="text-xl font-semibold text-foreground mb-2">ADN Dual = Ventaja Competitiva</h3><p className="text-foreground/70">Combinamos marketing de precisión con desarrollo de software a medida. Si lo necesita, lo podemos crear.</p></div>
                    <div className="glass-panel p-6 rounded-xl"><Users className="w-8 h-8 text-primary mb-3" /><h3 className="text-xl font-semibold text-foreground mb-2">Equipo Senior Full-Stack In-House</h3><p className="text-foreground/70">Quien diseña la estrategia es quien la ejecuta. Sin intermediarios.</p></div>
                    <div className="glass-panel p-6 rounded-xl"><Target className="w-8 h-8 text-primary mb-3" /><h3 className="text-xl font-semibold text-foreground mb-2">Enfoque en B2B de Alto Valor</h3><p className="text-foreground/70">Hemos diseñado una metodología con un solo objetivo: construir la estrategia que genera ventas reales.</p></div>
                </div>
            </div>
        </section>

        {/* Next Steps */}
        <section className="py-20 px-4 bg-background">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground">Pasos Siguientes</h2>
                    <p className="mt-4 text-lg text-foreground/70">Proponemos una hoja de ruta clara para iniciar nuestra alianza.</p>
                </div>
                <ol className="space-y-8 relative pl-8">
                    <div className="absolute left-4 top-2 bottom-2 w-0.5 bg-primary/20"></div>
                    <li className="relative"><div className="absolute -left-11 top-1.5 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">1</div><h3 className="text-xl font-semibold text-foreground">Sesión de Alineación</h3><p className="text-foreground/70">Resolver todas sus dudas sobre este modelo.</p></li>
                    <li className="relative"><div className="absolute -left-11 top-1.5 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">2</div><h3 className="text-xl font-semibold text-foreground">Acuerdo y Firma</h3><p className="text-foreground/70">Formalizar la alianza y el contrato inicial por 3 meses.</p></li>
                    <li className="relative"><div className="absolute -left-11 top-1.5 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">3</div><h3 className="text-xl font-semibold text-foreground">Pago de la Fase 1</h3><p className="text-foreground/70">Para dar inicio oficial al proyecto.</p></li>
                    <li className="relative"><div className="absolute -left-11 top-1.5 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">4</div><h3 className="text-xl font-semibold text-foreground">Kick-off de Inmersión Estratégica</h3><p className="text-foreground/70">Agendamos las sesiones para que nuestro equipo aprenda de los expertos: ustedes.</p></li>
                </ol>
            </div>
        </section>

        {/* Contact */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto text-center border-t border-border pt-10">
            <h2 className="text-3xl font-bold text-foreground mb-8">Hablemos de cómo empezar</h2>
            <div className="flex flex-col items-center justify-center gap-4">
              <div className="w-32 h-32 rounded-full overflow-hidden mb-4 border-2 border-primary">
                <img src="/images/portfolio/socioop.jpg" alt="Ismael Silvero" className="w-full h-full object-cover" />
              </div>
              <p className="text-2xl font-bold text-foreground mb-1">Ismael Silvero</p>
              <p className="text-lg text-foreground/70">CEO de Avanxia</p>

              <p className="text-2xl font-semibold text-foreground mt-6 max-w-2xl mx-auto">
                Le invito a agendar una reunión para conocer más a fondo tu operación y explorar cómo podemos colaborar para aumentar sus oportunidades de venta.
              </p>

              <div className="flex items-center justify-center gap-6 mt-6">
                <a href="mailto:info@avanxia.com" className="text-lg text-primary hover:underline">
                  info@avanxia.com
                </a>
                <a href="tel:+5212202834673" className="text-lg text-primary hover:underline flex items-center gap-2">
                  <Phone size={16} /> +52 1 220 283 4673
                </a>
                <a href="https://avanxia.com" target="_blank" rel="noopener noreferrer" className="text-lg text-primary hover:underline">
                  avanxia.com
                </a>
              </div>
            </div>
          </div>
        </section>

      </div>
    </>
  );
};

export default PresentacionDMT;
