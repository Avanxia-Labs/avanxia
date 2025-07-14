import { useCallback, useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  Zap, CheckCircle2, ArrowRight, TrendingUp, Clock, Shield, 
  Users, Phone, Mail, MessageSquare, AlertCircle, Sparkles,
  Target, BarChart2, Code, Headphones, Star, ChevronDown
} from 'lucide-react';
import SEOHelmet from '@/components/SEOHelmet';
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { Container, Engine } from "@tsparticles/engine";
import { useSearchParams } from 'react-router-dom';

// Hook para detectar mobile
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

const RevolucionAILanding = () => {
  const [init, setInit] = useState(false);
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [timeLeft, setTimeLeft] = useState({ hours: 48, minutes: 0, seconds: 0 });
  const isMobile = useIsMobile();
  const particlesRef = useRef<Container | null>(null);
  const [searchParams] = useSearchParams();
  
  // Pre-llenar datos si vienen del email
  const [formData, setFormData] = useState({
    company: searchParams.get('empresa') || '',
    name: searchParams.get('nombre') || '',
    email: searchParams.get('email') || '',
    phone: '',
    contactMethod: 'email',
    message: ''
  });

  // Countdown timer para urgencia
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.hours === 0 && prev.minutes === 0 && prev.seconds === 0) {
          return prev;
        }
        
        let newSeconds = prev.seconds - 1;
        let newMinutes = prev.minutes;
        let newHours = prev.hours;
        
        if (newSeconds < 0) {
          newSeconds = 59;
          newMinutes -= 1;
        }
        
        if (newMinutes < 0) {
          newMinutes = 59;
          newHours -= 1;
        }
        
        return { hours: newHours, minutes: newMinutes, seconds: newSeconds };
      });
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);

  const handleParticlesLoaded = useCallback(async (container?: Container): Promise<void> => {
    particlesRef.current = container ?? null;
  }, []);

  useEffect(() => {
    initParticlesEngine(async (engine: Engine) => {
      await loadSlim(engine);
    }).then(() => setInit(true));
  }, []);

  // Configuración de interactividad para móviles
  const mobileInteractivity = {
    events: {
      onClick: { enable: true, mode: "repulse" as const },
      onHover: { 
        enable: true, 
        mode: "grab" as const, 
        parallax: { enable: true, force: 60 } 
      },
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
      onHover: { 
        enable: true, 
        mode: "grab" as const, 
        parallax: { enable: true, force: 60 } 
      },
      resize: { enable: true }
    },
    modes: {
      grab: { distance: 140, links: { opacity: 0.8 } }
    }
  };

  // Usar la configuración de interactividad según el dispositivo
  const interactivity = isMobile ? mobileInteractivity : desktopInteractivity;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('sending');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          selectedList: [],
          total: 0,
          category: 'Campaña Email - Revolución AI',
          plan: 'Consulta desde Landing'
        }),
      });

      if (!res.ok) throw new Error('Error en la petición');
      setFormStatus('success');
      
      // Redirigir a página de agradecimiento después de 2 segundos
      setTimeout(() => {
        window.location.href = '/gracias-revolucion-ai';
      }, 2000);
      
    } catch (err) {
      console.error(err);
      setFormStatus('error');
    }
  };

  return (
    <>
      <SEOHelmet />
      
      <div className="min-h-screen bg-background">
        {/* Urgency Bar */}
        <motion.div 
          className="bg-gradient-to-r from-red-600 to-orange-600 text-white py-2 text-center sticky top-16 z-40 mt-4"
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="container mx-auto px-4 flex items-center justify-center gap-2">
            <AlertCircle className="w-4 h-4 animate-pulse" />
            <p className="text-sm font-semibold">
              Oferta Especial termina en: {String(timeLeft.hours).padStart(2, '0')}:
              {String(timeLeft.minutes).padStart(2, '0')}:
              {String(timeLeft.seconds).padStart(2, '0')}
            </p>
            <span className="text-xs">(10% descuento + Análisis Digital Gratis)</span>
          </div>
        </motion.div>

        {/* Hero Section */}
        <section className="relative overflow-hidden pt-16 pb-20 px-4">
          {init && (
            <Particles
              id="tsparticles-landing"
              particlesLoaded={handleParticlesLoaded}
              options={{
                fullScreen: { enable: false },
                background: { color: { value: "transparent" } },
                fpsLimit: 120,
                interactivity,
                particles: { 
                  color: { value: "#00e0ff" }, 
                  links: { 
                    color: "#00e0ff",
                    distance: 150,
                    enable: true,
                    opacity: 0.4,
                    width: 1
                  },
                  move: {
                    direction: "none",
                    enable: true,
                    outModes: { default: "bounce" },
                    random: false,
                    speed: 1,
                    straight: false,
                  },
                  number: { 
                    density: { 
                      enable: true, 
                      width: 800 
                    },
                    value: 100
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
                detectRetina: true,
              }}
              className="absolute inset-0 w-full h-full z-0 pointer-events-none"
            />
          )}
          
          <div className="relative max-w-6xl mx-auto">
            <div className="text-center">
              {/* Pre-headline con personalización */}
              {formData.company && (
                <motion.div 
                  className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <Sparkles className="w-4 h-4" />
                  Hola {formData.name || 'Empresario'} de {formData.company}
                </motion.div>
              )}
              
              {/* Headline principal */}
              <motion.h1 
                className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                ¿Cansado de <span className="text-red-500">Perder Tiempo</span> con Leads Fríos?
                <br />
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Revolucione su Negocio con IA
                </span>
              </motion.h1>
              
              {/* Subheadline con beneficio claro */}
              <motion.p 
                className="text-xl text-foreground/70 max-w-3xl mx-auto mb-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Mientras usted lee esto, su competencia está cerrando ventas con prospectos calificados por IA. 
                <span className="font-semibold text-foreground"> Nosotros le entregamos solo clientes listos para comprar.</span>
              </motion.p>
              
              {/* Social Proof */}
              <motion.div 
                className="flex flex-wrap items-center justify-center gap-6 mb-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium text-foreground">+50 Empresas Confían en Nosotros</span>
                </div>
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-green-500" />
                  <span className="text-sm font-medium text-foreground">30% Más Ventas en Promedio</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-yellow-500" />
                  <span className="text-sm font-medium text-foreground">4.9/5 Satisfacción</span>
                </div>
              </motion.div>
              
              {/* CTA Principal */}
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Button 
                  size="cta" 
                  className="bg-gradient-to-r from-secondary to-primary hover:from-secondary/90 hover:to-primary/90 text-white h-14 px-8 text-lg group flex items-center justify-center"
                  onClick={() => document.getElementById('formulario')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Solicitar Mi Análisis Gratis
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <span className="text-sm text-foreground/60">
                  Sin compromiso • Resultados en 48h • Cupos limitados
                </span>
              </motion.div>
              
              {/* Scroll indicator */}
              <motion.div 
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
              >
                <ChevronDown className="w-6 h-6 text-foreground/40" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Sección de Problemas - Agitar el Dolor */}
        <section className="py-20 px-4 bg-background">
          <div className="max-w-6xl mx-auto">
            <motion.div 
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                ¿Reconoce Estos Problemas en su Negocio?
              </h2>
              <p className="text-lg text-foreground/70">
                Si respondió "SÍ" a alguno, está perdiendo dinero cada día que pasa sin actuar.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {[
                {
                  icon: <Clock className="w-8 h-8" />,
                  title: "Tiempo Perdido en Leads Fríos",
                  description: "Su equipo gasta 80% del tiempo persiguiendo contactos que nunca comprarán.",
                  stat: "6 horas/día desperdiciadas"
                },
                {
                  icon: <TrendingUp className="w-8 h-8" />,
                  title: "Competencia Más Visible",
                  description: "Sus competidores aparecen primero en Google y redes sociales, robándole clientes.",
                  stat: "70% de clientes perdidos"
                },
                {
                  icon: <Target className="w-8 h-8" />,
                  title: "Sin Sistema de Seguimiento",
                  description: "Prospectos interesados se enfrían porque nadie les da seguimiento a tiempo.",
                  stat: "45% de oportunidades muertas"
                }
              ].map((problem, idx) => (
                <motion.div
                  key={idx}
                  className="glass-panel p-6 rounded-xl text-center hover:border-red-500/50 transition-colors"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-16 h-16 bg-red-500/10 rounded-xl flex items-center justify-center mb-4 text-red-500 mx-auto">
                    {problem.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{problem.title}</h3>
                  <p className="text-foreground/70 mb-3">{problem.description}</p>
                  <p className="text-red-500 font-bold">{problem.stat}</p>
                </motion.div>
              ))}
            </div>

            <motion.div 
              className="text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <p className="text-xl font-semibold text-foreground mb-4">
                La buena noticia: <span className="text-primary">Tenemos la solución completa.</span>
              </p>
            </motion.div>
          </div>
        </section>

        {/* Sección de Soluciones - Los 3 Servicios */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div 
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Su Sistema Completo de <span className="text-primary">Crecimiento con IA</span>
              </h2>
              <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
                No vendemos servicios sueltos. Entregamos un ecosistema que trabaja 24/7 para hacer crecer su negocio.
              </p>
            </motion.div>

            <div className="space-y-16">
              {/* Servicio 1: Marketing Orientado a Ventas */}
              <motion.div 
                className="grid md:grid-cols-2 gap-8 items-center"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div>
                  <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
                    <Zap className="w-4 h-4" />
                    Servicio #1
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    🚀 Marketing Orientado a Ventas con IA
                  </h3>
                  <p className="text-foreground/70 mb-6">
                    Mientras otros generan "leads" que nunca compran, nosotros:
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span className="text-foreground">Nos capacitamos en su negocio para responder como expertos</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span className="text-foreground">Hacemos seguimiento automático (emails, WhatsApp, llamadas)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span className="text-foreground">Calificamos prospectos con IA según sus criterios</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span className="text-foreground">Le entregamos solo clientes con intención real de compra</span>
                    </li>
                  </ul>
                  <div className="bg-primary/10 p-4 rounded-lg">
                    <p className="text-sm font-semibold text-primary">
                      Resultado: Su equipo solo habla con prospectos listos para cerrar
                    </p>
                  </div>
                </div>
                <div className="glass-panel p-6 rounded-xl">
                  <div className="text-center">
                    <BarChart2 className="w-16 h-16 text-primary mx-auto mb-4" />
                    <p className="text-3xl font-bold text-foreground mb-2">15-30</p>
                    <p className="text-foreground/70">Prospectos Calificados/Mes</p>
                    <div className="mt-4 pt-4 border-t border-border">
                      <p className="text-sm text-foreground/60">ROI Promedio</p>
                      <p className="text-2xl font-bold text-green-500">+380%</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Servicio 2: Saneamiento Digital */}
              <motion.div 
                className="grid md:grid-cols-2 gap-8 items-center"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="order-2 md:order-1 glass-panel p-6 rounded-xl">
                  <div className="text-center">
                    <Shield className="w-16 h-16 text-primary mx-auto mb-4" />
                    <p className="text-3xl font-bold text-foreground mb-2">97%</p>
                    <p className="text-foreground/70">Tasa de Confianza Digital</p>
                    <div className="mt-4 pt-4 border-t border-border">
                      <p className="text-sm text-foreground/60">Velocidad de Carga</p>
                      <p className="text-2xl font-bold text-green-500">&lt; 2 seg</p>
                    </div>
                  </div>
                </div>
                <div className="order-1 md:order-2">
                  <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
                    <Shield className="w-4 h-4" />
                    Servicio #2
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    🔧 Saneamiento Digital - Presencia que Vende
                  </h3>
                  <p className="text-foreground/70 mb-6">
                    Cuando un prospecto lo busque, verá un líder confiable:
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span className="text-foreground">Web ultra-rápida con IA integrada (Next.js/React)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span className="text-foreground">Fotos y videos profesionales mensuales</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span className="text-foreground">Redes sociales activas con contenido de autoridad</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span className="text-foreground">Google Business optimizado para búsquedas locales</span>
                    </li>
                  </ul>
                  <div className="bg-primary/10 p-4 rounded-lg">
                    <p className="text-sm font-semibold text-primary">
                      Resultado: Gana la confianza antes que su competencia
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Servicio 3: Desarrollo y Mantenimiento */}
              <motion.div 
                className="grid md:grid-cols-2 gap-8 items-center"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div>
                  <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
                    <Code className="w-4 h-4" />
                    Servicio #3
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    💻 Su Departamento de Tecnología con IA
                  </h3>
                  <p className="text-foreground/70 mb-6">
                    Somos su equipo tech paralelo con experiencia global:
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span className="text-foreground">Desarrollos a medida con IA (chatbots, automatización)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span className="text-foreground">Mantenimiento de servidores y seguridad 24/7</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span className="text-foreground">Soporte técnico y capacitación continua</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span className="text-foreground">Integración con sus sistemas actuales</span>
                    </li>
                  </ul>
                  <div className="bg-primary/10 p-4 rounded-lg">
                    <p className="text-sm font-semibold text-primary">
                      Resultado: Tecnología que impulsa, no que estorba
                    </p>
                  </div>
                </div>
                <div className="glass-panel p-6 rounded-xl">
                  <div className="text-center">
                    <Code className="w-16 h-16 text-primary mx-auto mb-4" />
                    <p className="text-3xl font-bold text-foreground mb-2">24/7</p>
                    <p className="text-foreground/70">Soporte Continuo</p>
                    <div className="mt-4 pt-4 border-t border-border">
                      <p className="text-sm text-foreground/60">Tiempo de Respuesta</p>
                      <p className="text-2xl font-bold text-green-500">&lt; 2 horas</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* CTA después de servicios */}
            <motion.div 
              className="text-center mt-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <p className="text-xl font-semibold text-foreground mb-6">
                Todo esto por menos de lo que cuesta un empleado junior
              </p>
              <Button 
                size="cta" 
                className="bg-gradient-to-r from-secondary to-primary hover:from-secondary/90 hover:to-primary/90 text-white h-14 px-8 text-lg group flex items-center justify-center"
                onClick={() => document.getElementById('formulario')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Quiero Mi Sistema de Crecimiento
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </div>
        </section>
        {/* Sección de Testimonios/Casos de Éxito - COMENTADO TEMPORALMENTE */}
        {/* 
        <section className="py-20 px-4 bg-background">
          <div className="max-w-6xl mx-auto">
            <motion.div 
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Empresas Como la Suya Ya Están <span className="text-primary">Creciendo</span>
              </h2>
              <p className="text-lg text-foreground/70">
                No tome solo nuestra palabra. Vea los resultados reales.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  company: "Logística Monterrey",
                  industry: "Transporte",
                  result: "+45% más contratos",
                  testimonial: "En 3 meses pasamos de perseguir clientes a elegir con cuáles trabajar.",
                  metric: "De 3 a 15 prospectos calificados/mes"
                },
                {
                  company: "Industrias TechMex",
                  industry: "Manufactura",
                  result: "+380% ROI",
                  testimonial: "La inversión se pagó sola en el primer mes. Ahora es pura ganancia.",
                  metric: "Reducción 70% en costo por lead"
                },
                {
                  company: "Grupo Servicios Plus",
                  industry: "Servicios B2B",
                  result: "30% más ventas",
                  testimonial: "Mi equipo ahora cierra ventas en lugar de hacer llamadas frías.",
                  metric: "Ciclo de venta reducido 50%"
                }
              ].map((testimonial, idx) => (
                <motion.div
                  key={idx}
                  className="glass-panel p-6 rounded-xl hover:ring-2 hover:ring-primary transition-all"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center gap-2 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-500 text-yellow-500" />
                    ))}
                  </div>
                  <p className="text-foreground/80 italic mb-4">"{testimonial.testimonial}"</p>
                  <div className="border-t border-border pt-4">
                    <p className="font-semibold text-foreground">{testimonial.company}</p>
                    <p className="text-sm text-foreground/60">{testimonial.industry}</p>
                    <div className="mt-2">
                      <p className="text-2xl font-bold text-primary">{testimonial.result}</p>
                      <p className="text-sm text-foreground/70">{testimonial.metric}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        */}

        {/* Sección de Proceso Simple */}
        <section className="py-20 px-4">
          <div className="max-w-5xl mx-auto">
            <motion.div 
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Tan Simple Como <span className="text-primary">1-2-3</span>
              </h2>
              <p className="text-lg text-foreground/70">
                En menos de 48 horas puede estar generando prospectos calificados
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  step: "1",
                  title: "Agenda su Videollamada",
                  description: "Complete el formulario abajo. Nos contactaremos en menos de 2 horas.",
                  time: "Hoy mismo"
                },
                {
                  step: "2",
                  title: "Reciba su Plan Personalizado",
                  description: "Analizamos su negocio y creamos una estrategia específica para usted.",
                  time: "En 24-48 horas"
                },
                {
                  step: "3",
                  title: "Empiece a Recibir Prospectos",
                  description: "Activamos su sistema y comienza a recibir clientes calificados.",
                  time: "Desde el día 15"
                }
              ].map((step, idx) => (
                <motion.div
                  key={idx}
                  className="relative"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                >
                  {idx < 2 && (
                    <div className="hidden md:block absolute top-12 left-full w-full">
                      <ArrowRight className="w-8 h-8 text-primary/30" />
                    </div>
                  )}
                  <div className="glass-panel p-6 rounded-xl text-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                      {step.step}
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">{step.title}</h3>
                    <p className="text-foreground/70 mb-3">{step.description}</p>
                    <p className="text-sm font-semibold text-primary">{step.time}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Sección de Garantías */}
        <section className="py-20 px-4 bg-background">
          <div className="max-w-4xl mx-auto">
            <motion.div 
              className="glass-panel p-8 rounded-2xl border-2 border-primary/20"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="text-center mb-8">
                <Shield className="w-16 h-16 text-primary mx-auto mb-4" />
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  Sin Riesgo, Solo Resultados
                </h2>
                <p className="text-lg text-foreground/70">
                  Estamos tan seguros de nuestros resultados que le ofrecemos:
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {/* COMENTADO TEMPORALMENTE - Garantías que no podemos cumplir actualmente */}
                {/*
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Garantía de Satisfacción 30 Días</h3>
                    <p className="text-foreground/70 text-sm">Si no ve resultados en el primer mes, le devolvemos su dinero.</p>
                  </div>
                </div>
                */}
                {/*
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Sin Contratos de Permanencia</h3>
                    <p className="text-foreground/70 text-sm">Cancele cuando quiera. Trabajamos mes a mes.</p>
                  </div>
                </div>
                */}
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Soporte Técnico Dedicado</h3>
                    <p className="text-foreground/70 text-sm">Respuesta en menos de 24 horas en días hábiles.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Propiedad Total del Código</h3>
                    <p className="text-foreground/70 text-sm">Todo lo que desarrollamos es 100% suyo.</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 text-center">
                <p className="text-sm text-foreground/60">
                  + Bono especial: <span className="font-semibold text-primary">10% descuento primeros 3 meses</span> para quienes agenden hoy
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Sección del Formulario */}
        <section id="formulario" className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div 
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Agenda su Videollamada <span className="text-primary">Gratuita</span>
              </h2>
              <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
                Complete este formulario para solicitar una videollamada gratuita. 
                Nos contactaremos pronto para agendarla.
              </p>
              <div className="mt-4 inline-flex items-center gap-2 bg-red-500/10 text-red-500 px-4 py-2 rounded-full text-sm font-medium">
                <AlertCircle className="w-4 h-4" />
                Oferta limitada: 10% descuento + Análisis Digital Gratis
              </div>
            </motion.div>

            <motion.div 
              className="glass-panel p-8 rounded-2xl shadow-xl border-2 border-primary/20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium mb-2 text-foreground">
                      Nombre de la Empresa *
                    </label>
                    <Input
                      id="company"
                      name="company"
                      type="text"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Su empresa"
                      required
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2 text-foreground">
                      Nombre de la Persona *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Su nombre completo"
                      required
                      className="w-full"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2 text-foreground">
                      Correo Electrónico *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="su@email.com"
                      required
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2 text-foreground">
                      Número de Teléfono
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+52 1234567890"
                      className="w-full"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="contactMethod" className="block text-sm font-medium mb-2 text-foreground">
                    Método Preferido de Contacto
                  </label>
                  <select
                    id="contactMethod"
                    name="contactMethod"
                    value={formData.contactMethod}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[rgb(var(--color-card))] rounded-lg border"
                  >
                    <option value="phone">Teléfono</option>
                    <option value="email">Correo Electrónico</option>
                    <option value="whatsapp">WhatsApp</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2 text-foreground">
                    Cuéntenos más sobre su empresa o necesidades
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describa brevemente su empresa y qué desafíos enfrenta..."
                    rows={4}
                    className="w-full"
                  />
                </div>

                <AnimatePresence mode="wait">
                  {formStatus === 'idle' && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <Button
                        type="submit"
                        size="cta"
                        className="w-full bg-gradient-to-r from-secondary to-primary hover:from-secondary/90 hover:to-primary/90 text-white h-14 text-lg group flex items-center justify-center"
                      >
                        Solicitar Mi Videollamada Gratuita
                        <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </motion.div>
                  )}

                  {formStatus === 'sending' && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="text-center py-4"
                    >
                      <div className="inline-flex items-center gap-3">
                        <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-primary"></div>
                        <span className="text-lg">Enviando su solicitud...</span>
                      </div>
                    </motion.div>
                  )}

                  {formStatus === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      className="text-center py-4"
                    >
                      <CheckCircle2 className="w-12 h-12 text-green-500 mx-auto mb-3" />
                      <p className="text-lg font-semibold text-green-500">¡Solicitud Enviada con Éxito!</p>
                      <p className="text-foreground/70 mt-2">Nos contactaremos en menos de 2 horas.</p>
                    </motion.div>
                  )}

                  {formStatus === 'error' && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="text-center py-4"
                    >
                      <AlertCircle className="w-12 h-12 text-red-500 mx-auto mb-3" />
                      <p className="text-lg font-semibold text-red-500">Error al enviar</p>
                      <p className="text-foreground/70 mt-2">Por favor, intente nuevamente.</p>
                      <Button
                        type="button"
                        onClick={() => setFormStatus('idle')}
                        className="mt-4"
                        variant="secondary"
                      >
                        Intentar de Nuevo
                      </Button>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="mt-6 flex items-center justify-center gap-6 text-sm text-foreground/60">
                  <div className="flex items-center gap-2">
                    <Shield className="w-4 h-4" />
                    <span>Datos 100% seguros</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Headphones className="w-4 h-4" />
                    <span>Respuesta en 2 horas</span>
                  </div>
                </div>
              </form>
            </motion.div>

            {/* Información de contacto adicional */}
            <motion.div 
              className="mt-8 text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <p className="text-foreground/70 mb-4">¿Prefiere contactarnos directamente?</p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a 
                  href="mailto:info@avanxia.com" 
                  className="flex items-center gap-2 text-primary hover:underline"
                >
                  <Mail className="w-4 h-4" />
                  info@avanxia.com
                </a>
                <a 
                  href="tel:+5212202834673" 
                  className="flex items-center gap-2 text-primary hover:underline"
                >
                  <Phone className="w-4 h-4" />
                  +52 1 220 283 4673
                </a>
                <a 
                  href="https://wa.me/5212202834673" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-primary hover:underline"
                >
                  <MessageSquare className="w-4 h-4" />
                  WhatsApp
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Footer mínimo */}
        <footer className="py-8 px-4 border-t border-border">
          <div className="max-w-6xl mx-auto text-center text-sm text-foreground/60">
            <p>© 2024 Avanxia Labs. Todos los derechos reservados.</p>
            <p className="mt-2">
              Transformando negocios con tecnología e inteligencia artificial desde 2019.
            </p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default RevolucionAILanding;