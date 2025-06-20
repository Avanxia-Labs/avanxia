import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { CheckCircle, Clock, Shield, Smartphone, Users, BarChart3, Settings, Zap, Globe, Star, Download } from 'lucide-react';
import { Button } from '../../ui/button';
import SEOHelmet from '../../SEOHelmet';
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { Container, Engine } from "@tsparticles/engine";
import { pdf } from '@react-pdf/renderer';
import TicketValetPDF from '../../TicketValetPDF';

// Componente para las cards animadas con efecto de intersección
interface AnimatedFeatureCardProps {
  feature: {
    icon: React.ReactNode;
    title: string;
    description: string;
    features?: string[];
  };
  index: number;
}

const AnimatedFeatureCard: React.FC<AnimatedFeatureCardProps> = ({ feature }) => {
  const [ref, inView] = useInView({ 
    triggerOnce: false, 
    threshold: 0.6, // La card debe estar 60% visible
    rootMargin: '-20% 0px -20% 0px' // Solo cuando esté en el centro de la pantalla
  });

  // Detectar si es móvil
  const [isMobile, setIsMobile] = useState(false);
  const [showAllFeatures, setShowAllFeatures] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div 
      ref={ref}
      className={`glass-panel p-6 rounded-xl shadow-xl text-center transition-all duration-500 transform
        ${isMobile && inView 
          ? 'shadow-[0_0_20px_rgba(46,104,255,0.4)] ring-2 ring-primary scale-105' 
          : 'hover:shadow-[0_0_20px_rgba(46,104,255,0.4)] hover:ring-2 hover:ring-primary hover:scale-105'
        }`}
    >
      <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl flex items-center justify-center mb-4 text-primary mx-auto">
        {feature.icon}
      </div>
      <h3 className="text-xl font-semibold text-foreground mb-3">{feature.title}</h3>
      <p className="text-foreground/70 leading-relaxed">{feature.description}</p>
      
      {/* Características clave - Mostrar automáticamente en móvil */}
      {feature.features && (
        <div className={`mt-4 transition-all duration-300 ${
          isMobile 
            ? 'opacity-100' // Siempre visible en móvil
            : showAllFeatures 
              ? 'opacity-100' 
              : 'opacity-0 group-hover:opacity-100' // Hover en desktop
        }`}>
          <div className="flex flex-wrap gap-2 justify-center">
             {(isMobile ? feature.features.slice(0, 1) : feature.features).map((feat, idx) => (
               <span key={idx} className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full border border-primary/20">
                 {feat}
               </span>
             ))}
           </div>
           
           {/* Botón "Ver más" solo en móvil si hay más de 1 característica */}
           {isMobile && feature.features.length > 1 && (
             <button 
               onClick={() => setShowAllFeatures(!showAllFeatures)}
               className="mt-3 text-primary text-sm font-medium hover:text-primary/80 transition-colors"
             >
               {showAllFeatures ? 'Ver menos' : `Ver todas (${feature.features.length})`}
             </button>
           )}
           
           {/* Mostrar características adicionales en móvil cuando se expande */}
           {isMobile && showAllFeatures && feature.features.length > 1 && (
             <div className="mt-3 flex flex-wrap gap-2 justify-center">
               {feature.features.slice(1).map((feat, idx) => (
                 <span key={idx + 1} className="px-3 py-1 bg-secondary/10 text-secondary text-sm rounded-full border border-secondary/20">
                   {feat}
                 </span>
               ))}
             </div>
           )}
        </div>
      )}
    </div>
  );
};

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

const CotizacionTicketValet = () => {
  const [init, setInit] = useState(false);
  const isMobile = useIsMobile();
  const particlesRef = useRef<Container | null>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false);
  const handleParticlesLoaded = useCallback(async (container?: Container): Promise<void> => {
    particlesRef.current = container ?? null;
  }, []);

  const generatePDF = async () => {
    setIsGeneratingPDF(true);
    
    try {
      const blob = await pdf(<TicketValetPDF />).toBlob();
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'Propuesta-Ticket-Valet-Avanxia.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
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

  return (
    <>
      <SEOHelmet />
      
      <div ref={contentRef} className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-20 pb-16 px-4">
          {/* Partículas solo en la sección hero */}
          {init && (
            <Particles
              id="tsparticles-cotizacion"
              particlesLoaded={handleParticlesLoaded}
              options={{
                fullScreen: { enable: false },
                background: {
                  color: { value: "transparent" },
                },
                fpsLimit: 120,
                interactivity,
                particles: {
                  color: { value: "#00e0ff" },
                  links: {
                    color: "#00e0ff",
                    distance: 150,
                    enable: true,
                    opacity: 0.3,
                    width: 1,
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
                Propuesta de Desarrollo
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
                Sistema de <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Ticket Digital</span>
                <br />para Valet Parking
              </h1>
              <p className="text-xl text-foreground/70 max-w-3xl mx-auto mb-8">
                Solución propietaria completa que reemplaza SmarterValet.app con control total, 
                reducción de costos y flexibilidad para futuras modificaciones.
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
                      <p className="text-foreground/70">Nahim Garduño Yacaman</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-foreground">Fecha</h3>
                      <p className="text-foreground/70">6 de junio de 2025</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Settings className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-foreground">Objetivo</h3>
                      <p className="text-foreground/70">Reemplazar SmarterValet.app por un sistema propietario con control total y reducción de costos operativos</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8 backdrop-blur-sm border border-primary/20">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-3">
                        <Smartphone className="w-8 h-8 text-primary" />
                      </div>
                      <h4 className="font-semibold text-foreground">Digital</h4>
                      <p className="text-sm text-foreground/70">Tickets QR, SMS, WhatsApp</p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-3">
                        <Globe className="w-8 h-8 text-secondary" />
                      </div>
                      <h4 className="font-semibold text-foreground">Multi-Sucursal</h4>
                      <p className="text-sm text-foreground/70">Múltiples ubicaciones</p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-3">
                        <BarChart3 className="w-8 h-8 text-primary" />
                      </div>
                      <h4 className="font-semibold text-foreground">Analytics</h4>
                      <p className="text-sm text-foreground/70">Dashboard y reportes</p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-3">
                        <Shield className="w-8 h-8 text-secondary" />
                      </div>
                      <h4 className="font-semibold text-foreground">Seguro</h4>
                      <p className="text-sm text-foreground/70">Roles y permisos</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 bg-gradient-to-r from-primary/5 to-secondary/5 dark:from-primary/10 dark:to-secondary/10 relative">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Funcionalidades Principales
              </h2>
              <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
                Sistema completo que centraliza la operación en una plataforma intuitiva y eficiente
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Smartphone className="w-8 h-8" />,
                  title: "Registro de Vehículo Digital",
                  description: "Formulario intuitivo para capturar marca, modelo, color, placas (obligatorio). Campos opcionales: nombre del cliente, teléfono, observaciones. Generación automática de ticket con folio único, QR y link personalizado.",
                  features: ["Captura rápida de datos", "QR automático", "Folio único", "Validación en tiempo real"]
                },
                {
                  icon: <BarChart3 className="w-8 h-8" />,
                  title: "Ticket Digital Interactivo",
                  description: "Página web personalizada que el cliente abre con su QR. Muestra folio, datos del vehículo, hora de entrada y estatus en tiempo real: En resguardo → Listo para entregar → Entregado.",
                  features: ["Estatus en tiempo real", "Solicitud de entrega", "Datos del vehículo", "Interfaz responsive"]
                },
                {
                  icon: <Users className="w-8 h-8" />,
                  title: "Sistema de Entrega Eficiente",
                  description: "Buscador rápido por folio, QR o placas. Botón de 'Entregado' que registra la hora exacta de salida. Panel optimizado para valets con acceso rápido a todas las funciones.",
                  features: ["Búsqueda múltiple", "Registro de salida", "Interfaz optimizada", "Acceso rápido"]
                },
                {
                  icon: <Zap className="w-8 h-8" />,
                  title: "Panel Administrativo Completo",
                  description: "Dashboard con gráficas y totales de tickets activos y entregados. Filtros por día, hora, evento o sucursal. Exportación a Excel/CSV. Control de usuarios con diferentes permisos y logs de auditoría.",
                  features: ["Dashboard visual", "Exportación Excel/CSV", "Filtros avanzados", "Control de usuarios"]
                },
                {
                  icon: <Globe className="w-8 h-8" />,
                  title: "Notificaciones Automatizadas",
                  description: "Envío automático del ticket digital por WhatsApp o SMS al registrar el vehículo. Notificación automática cuando el coche está listo para recoger. Sistema de comunicación bidireccional.",
                  features: ["WhatsApp integrado", "SMS automático", "Notificaciones push", "Comunicación bidireccional"]
                },
                {
                  icon: <Shield className="w-8 h-8" />,
                  title: "Arquitectura Multi-Sucursal",
                  description: "Soporte nativo para múltiples ubicaciones con gestión centralizada. Administración de diferentes puntos de acceso. Filtros por sucursal y reportes consolidados. Seguridad avanzada con cifrado de datos.",
                  features: ["Múltiples sucursales", "Gestión centralizada", "Reportes consolidados", "Seguridad avanzada"]
                }
              ].map((feature, index) => (
                <div key={index} className="group">
                  <AnimatedFeatureCard feature={feature} index={index} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Módulos Principales */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Módulos Principales del Sistema
              </h2>
              <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
                Componentes especializados que conforman la solución completa de valet parking
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
              {[
                {
                  number: "01",
                  title: "Registro de Vehículo (El Valet)",
                  description: "Módulo principal para la captura de información del vehículo y cliente",
                  features: [
                    "Formulario optimizado para captura rápida",
                    "Campos obligatorios: Marca, modelo, color, placas",
                    "Campos opcionales: Nombre, teléfono, observaciones",
                    "Generación automática de ticket con folio único",
                    "Código QR y link único para cada vehículo",
                    "Validación en tiempo real de datos"
                  ],
                  color: "from-blue-500 to-cyan-500"
                },
                {
                  number: "02",
                  title: "Ticket Digital (El Cliente)",
                  description: "Interfaz web personalizada para el cliente con seguimiento en tiempo real",
                  features: [
                    "Página web responsive accesible vía QR",
                    "Visualización de folio y datos del vehículo",
                    "Hora de entrada registrada automáticamente",
                    "Estatus en tiempo real: En resguardo → Listo → Entregado",
                    "Botón para solicitar entrega del vehículo",
                    "Notificaciones push integradas"
                  ],
                  color: "from-green-500 to-emerald-500"
                },
                {
                  number: "03",
                  title: "Entrega del Vehículo (El Valet)",
                  description: "Sistema de búsqueda y entrega optimizado para operaciones rápidas",
                  features: [
                    "Buscador múltiple: folio, QR o placas",
                    "Interfaz optimizada para dispositivos móviles",
                    "Botón de 'Entregado' con registro de hora exacta",
                    "Historial de movimientos del vehículo",
                    "Confirmación automática al cliente",
                    "Integración con sistema de notificaciones"
                  ],
                  color: "from-purple-500 to-violet-500"
                },
                {
                  number: "04",
                  title: "Panel Administrativo (Supervisor/Admin)",
                  description: "Centro de control completo con analytics y gestión de usuarios",
                  features: [
                    "Dashboard con gráficas y métricas en tiempo real",
                    "Filtros avanzados: día, hora, evento, sucursal",
                    "Exportación de datos a Excel/CSV (requerimiento clave)",
                    "Control de usuarios: valets, supervisores, administradores",
                    "Logs de auditoría para seguridad y trazabilidad",
                    "Reportes personalizables y programables"
                  ],
                  color: "from-orange-500 to-red-500"
                }
              ].map((module, index) => (
                <div key={index} className="group relative">
                  <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-4 sm:p-6 lg:p-8 border border-border shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                    <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                      <div className={`bg-gradient-to-r ${module.color} text-white rounded-xl p-3 sm:p-4 font-bold text-xl sm:text-2xl min-w-[3rem] sm:min-w-[4rem] text-center shadow-lg flex-shrink-0`}>
                        {module.number}
                      </div>
                      <div className="flex-1 w-full">
                        <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2 sm:mb-3">
                          {module.title}
                        </h3>
                        <p className="text-foreground/70 mb-4 sm:mb-6 text-base sm:text-lg">
                          {module.description}
                        </p>
                        <div className="space-y-2 sm:space-y-3">
                          {module.features.map((feature, idx) => (
                            <div key={idx} className="flex items-start gap-2 sm:gap-3">
                              <div className={`bg-gradient-to-r ${module.color} rounded-full p-1 mt-1 flex-shrink-0`}>
                                <div className="w-2 h-2 bg-white rounded-full"></div>
                              </div>
                              <span className="text-foreground/80 text-sm sm:text-base">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tech Stack */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Stack Tecnológico
              </h2>
              <p className="text-xl text-foreground/70">
                Tecnologías modernas para garantizar un sistema rápido, escalable y seguro
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-2xl p-8 mb-4">
                  <h3 className="text-xl font-bold text-foreground mb-4">Frontend</h3>
                  <div className="space-y-2 text-foreground/70">
                    <p>Next.js 14 (React)</p>
                    <p>TypeScript</p>
                    <p>Tailwind CSS</p>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-gradient-to-br from-green-500/20 to-green-600/20 rounded-2xl p-8 mb-4">
                  <h3 className="text-xl font-bold text-foreground mb-4">Backend</h3>
                  <div className="space-y-2 text-foreground/70">
                    <p>Supabase</p>
                    <p>PostgreSQL</p>
                    <p>Real-time</p>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-gradient-to-br from-purple-500/20 to-purple-600/20 rounded-2xl p-8 mb-4">
                  <h3 className="text-xl font-bold text-foreground mb-4">Servicios</h3>
                  <div className="space-y-2 text-foreground/70">
                    <p>Vercel (Hosting)</p>
                    <p>WhatsApp Business API</p>
                    <p>Twilio (SMS)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Video Demo Section */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Nuestras Aplicaciones Desarrolladas
              </h2>
              <p className="text-xl text-foreground/70 mb-8">
                Descubre por qué elegirnos para construir aplicaciones y otros proyectos exitosos
              </p>
            </div>
            <div className="w-full max-w-3xl mx-auto mb-12 overflow-hidden rounded-xl shadow-lg">
              <video 
                src="/videos/desapps.mp4" 
                controls 
                autoPlay 
                loop 
                muted 
                playsInline 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </section>

        {/* Pricing Plans */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Planes de Desarrollo
              </h2>
              <p className="text-xl text-foreground/70">
                Dos opciones para adaptarse a sus necesidades y tiempos
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Plan Acelerado */}
              <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-foreground mb-2">Plan Acelerado (MVP)</h3>
                  <p className="text-foreground/70 mb-4">Sprint de desarrollo para lanzar rápidamente</p>
                  <div className="text-4xl font-bold text-primary mb-2">$5,850 USD</div>
                  <p className="text-sm text-foreground/60">+ IVA</p>
                </div>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-foreground/80">Duración: 4 Semanas</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-foreground/80">Flujo operativo para una sucursal</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-foreground/80">Funciones esenciales para iniciar</span>
                  </div>
                  <div className="mb-4">
                    <p className="text-sm font-medium text-orange-500 mb-2">Funcionalidades que se sacrifican:</p>
                    <div className="space-y-1 text-sm text-foreground/60">
                      <div>• Arquitectura Multi-Sucursal</div>
                      <div>• Exportación avanzada de reportes</div>
                      <div>• Filtros avanzados en dashboard</div>
                      <div>• Notificaciones por SMS</div>
                      <div>• Panel de métricas avanzadas</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-foreground/80">Funcionalidades completas en segunda fase</span>
                  </div>
                </div>

              </div>

              {/* Plan Integral */}
              <div className="bg-card/50 backdrop-blur-sm border-2 border-primary rounded-2xl p-8 relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-primary to-secondary text-white px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2">
                    <Star className="w-4 h-4" />
                    Recomendado
                  </div>
                </div>
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-foreground mb-2">Plan Integral</h3>
                  <p className="text-foreground/70 mb-4">Desarrollo completo con máxima calidad</p>
                  <div className="text-4xl font-bold text-primary mb-2">$9,650 USD</div>
                  <p className="text-sm text-foreground/60">+ IVA</p>
                </div>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-foreground/80">Duración: 8 Semanas</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-foreground/80">Todas las funcionalidades</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-foreground/80">Arquitectura Multi-Sucursal completa</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-foreground/80">Pruebas exhaustivas</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-foreground/80">Máxima calidad y confiabilidad</span>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* Support Plans */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Mantenimiento y Soporte
              </h2>
              <p className="text-xl text-foreground/70">
                Garantiza el óptimo funcionamiento y evolución de tu sistema
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-foreground mb-4">Plan Mensual</h3>
                <div className="text-3xl font-bold text-primary mb-4">$500 USD/mes</div>
                <p className="text-foreground/70 mb-6">+ IVA • Pago mensual adelantado</p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-foreground/80">Soporte Técnico Prioritario</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-foreground/80">Monitoreo Proactivo</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-foreground/80">Actualizaciones de Seguridad</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-foreground/80">Gestión de Copias de Seguridad</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-foreground/80">2 horas mensuales de ajustes</span>
                  </div>
                </div>
              </div>

              <div className="bg-card/50 backdrop-blur-sm border-2 border-primary rounded-2xl p-8 relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-primary to-secondary text-white px-4 py-2 rounded-full text-sm font-medium">
                    Recomendado
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Plan Anual</h3>
                <div className="text-3xl font-bold text-primary mb-4">$450 USD/mes</div>
                <p className="text-foreground/70 mb-6">+ IVA • Compromiso de 12 meses</p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-foreground/80">Todo lo del Plan Mensual</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-foreground/80">Ahorro de $50 USD/mes</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-foreground/80">Prioridad máxima en soporte</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-foreground/80">Consultoría estratégica incluida</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Avanxia */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                ¿Por Qué Elegir a Avanxia Labs?
              </h2>
              <p className="text-xl text-foreground/70">
                Más allá de la tecnología, entregamos productos de clase mundial
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Star className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">Diseño de Vanguardia</h3>
                <p className="text-foreground/70 leading-relaxed">
                  Creamos diseños personalizados aplicando las últimas técnicas de UI/UX, desde minimalismo hasta glasmorfismo y neomorfismo.
                </p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Zap className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">Tecnología de Punta</h3>
                <p className="text-foreground/70 leading-relaxed">
                  Utilizamos tecnologías de última generación como Next.js para tiempos de carga mínimos y máxima seguridad.
                </p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Globe className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">Calidad Internacional</h3>
                <p className="text-foreground/70 leading-relaxed">
                  Diseñadores y desarrolladores con experiencia en proyectos para Norteamérica, Europa y México.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              ¿Listo para Comenzar?
            </h2>
            <p className="text-xl text-foreground/70 mb-8">
              Construyamos juntos una herramienta que optimizará tu operación y generará un excelente retorno de inversión.
            </p>
            
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 mb-8">
              <div className="grid md:grid-cols-2 gap-6 text-left">
                <div>
                  <h3 className="font-bold text-foreground mb-2">Contacto</h3>
                  <div className="space-y-2 text-foreground/70">
                    <p>📱 +52 1 220 283 4673</p>
                    <p>📞 +52 722 957 0084 / 85</p>
                    <p>📍 307 Local 10-B, Miguel Alemán</p>
                    <p>San Mateo Otzacatipan, CP. 50220</p>
                    <p>Toluca, Edo. Mex.</p>
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-2">Siguientes Pasos</h3>
                  <div className="space-y-2 text-foreground/70">
                    <p>1. Revisión de propuesta</p>
                    <p>2. Selección de plan</p>
                    <p>3. Firma de contrato</p>
                    <p>4. Pago de anticipo (50%)</p>
                    <p>5. Reunión de kickoff</p>
                  </div>
                </div>
              </div>
            </div>
            
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
            
            <div className="mt-8 text-center">
              <p className="text-foreground/60 mb-2">Atentamente,</p>
              <p className="font-semibold text-foreground">Ismael LSG</p>
              <p className="text-foreground/70">Socio Operativo • Avanxia Labs</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CotizacionTicketValet;