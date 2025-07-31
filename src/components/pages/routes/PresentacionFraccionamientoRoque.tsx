import { useCallback, useEffect, useRef, useState } from 'react';
import { ShieldCheck, CheckCircle2, ArrowRight, QrCode, Users, Code, Target, BarChart2, FileText, Phone, LayoutDashboard, Smartphone, Server, DollarSign } from 'lucide-react';
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

const PresentacionSanRoque = () => {
  const [init, setInit] = useState(false);
  const isMobile = useIsMobile();
  const particlesRef = useRef<Container | null>(null);

  const handleParticlesLoaded = useCallback(async (container?: Container): Promise<void> => {
    particlesRef.current = container ?? null;
  }, []);

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
      <SEOHelmet
        // title="Propuesta de Control de Acceso | Fraccionamiento Isla San Roque"
        // description="Plataforma integral de control de acceso, gestión de residentes y facturación para Fraccionamiento Isla San Roque."
      />
      
      <div className="min-h-screen bg-background">
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
                  color: { value: "#0ea5e9" }, // Azul profesional
                  links: { color: "#0ea5e9", distance: 150, enable: true, opacity: 0.3, width: 1 },
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
                <ShieldCheck className="w-4 h-4" />
                Propuesta para Fraccionamiento Isla San Roque
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
                Plataforma de Control de Acceso y Gestión de Residentes
              </h1>
              <p className="text-xl text-foreground/70 max-w-3xl mx-auto mb-8">
                Modernice la seguridad, optimice la administración y eleve la experiencia de sus residentes con una solución tecnológica a la medida.
              </p>
            </div>
          </div>
        </section>

        {/* The Challenge */}
        <section className="py-20 px-4 bg-background">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground">El Desafío: Más Allá de la Caseta de Vigilancia</h2>
                    <p className="mt-4 text-lg text-foreground/70 max-w-3xl mx-auto">Los sistemas tradicionales presentan fricciones que impactan la seguridad, la eficiencia administrativa y la calidad de vida del residente.</p>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="glass-panel p-6 rounded-xl text-center">
                        <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl flex items-center justify-center mb-4 text-primary mx-auto"><QrCode className="w-8 h-8" /></div>
                        <h3 className="text-xl font-semibold text-foreground mb-3">Control de Acceso Ineficiente</h3>
                        <p className="text-foreground/70">Procesos manuales lentos, falta de un registro digital confiable y una experiencia fragmentada para visitas y personal de mantenimiento.</p>
                    </div>
                    <div className="glass-panel p-6 rounded-xl text-center">
                        <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl flex items-center justify-center mb-4 text-primary mx-auto"><Users className="w-8 h-8" /></div>
                        <h3 className="text-xl font-semibold text-foreground mb-3">Gestión Desconectada</h3>
                        <p className="text-foreground/70">Dificultad para gestionar y comunicar estados de cuenta (morosidad), resultando en procesos de cobranza manuales y poco efectivos.</p>
                    </div>
                    <div className="glass-panel p-6 rounded-xl text-center">
                        <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl flex items-center justify-center mb-4 text-primary mx-auto"><Server className="w-8 h-8" /></div>
                        <h3 className="text-xl font-semibold text-foreground mb-3">Dependencia de Terceros</h3>
                        <p className="text-foreground/70">Las soluciones de renta no son propiedad del fraccionamiento, carecen de personalización y representan un gasto recurrente y creciente.</p>
                    </div>
                </div>
            </div>
        </section>

        {/* Our Solution */}
        <section className="py-20 px-4">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground">Nuestra Solución: Ecosistema de Gestión Inteligente</h2>
                    <p className="mt-4 text-lg text-foreground/70 max-w-3xl mx-auto">Un sistema integral y a la medida, compuesto por un dashboard web para administración y aplicaciones móviles para residentes y guardias.</p>
                </div>
                <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
                    <div className="glass-panel p-4 rounded-xl text-center flex-1">
                        <h3 className="font-semibold text-foreground">Admin (Dashboard Web)</h3>
                        <p className="text-sm text-foreground/70">Gestiona residentes, morosidad y reportes.</p>
                    </div>
                    <ArrowRight className="w-8 h-8 text-primary flex-shrink-0" />
                    <div className="glass-panel p-4 rounded-xl text-center flex-1">
                        <h3 className="font-semibold text-foreground">Residente (App Móvil)</h3>
                        <p className="text-sm text-foreground/70">Genera accesos QR para visitas con vencimiento.</p>
                    </div>
                    <ArrowRight className="w-8 h-8 text-primary flex-shrink-0" />
                    <div className="glass-panel p-4 rounded-xl text-center flex-1">
                        <h3 className="font-semibold text-foreground">Guardia (App Móvil)</h3>
                        <p className="text-sm text-foreground/70">Escanea y valida QR en tiempo real.</p>
                    </div>
                    <ArrowRight className="w-8 h-8 text-primary flex-shrink-0" />
                    <div className="bg-gradient-to-r from-primary to-secondary p-4 rounded-xl text-center flex-1">
                        <h3 className="font-semibold text-white">Resultado</h3>
                        <p className="text-sm text-white/80">Acceso seguro, eficiente y 100% registrado.</p>
                    </div>
                </div>
            </div>
        </section>

        {/* Features */}
        <section className="py-20 px-4 bg-background">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground">Funcionalidades Clave</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-8 items-start">
                    <div className="glass-panel p-8 rounded-xl">
                        <h3 className="text-2xl font-semibold text-foreground mb-4">Plataforma de Control de Acceso</h3>
                        <p className="text-foreground/70 mb-6">El núcleo del sistema, diseñado para máxima seguridad y eficiencia.</p>
                        <ul className="space-y-4 text-foreground/70">
                            <li className="flex items-start"><LayoutDashboard className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" /><span><b>Dashboard de Administración Web:</b> Gestione residentes, propiedades (privada/casa), y cree usuarios para guardias con rol "Empleado".</span></li>
                            <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" /><span><b>Control de Morosidad:</b> Marque a un residente como "moroso" con un clic, bloqueando su acceso a la app y notificándole automáticamente.</span></li>
                            <li className="flex items-start"><Smartphone className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" /><span><b>App Móvil (iOS/Android) para Residentes:</b> Genere códigos QR para visitas y personal de mantenimiento con tiempo de vencimiento (1 hora) y compártalos fácilmente.</span></li>
                            <li className="flex items-start"><ShieldCheck className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" /><span><b>App Móvil para Guardias:</b> Rol "Empleado" con capacidad para escanear y validar códigos QR, viendo a qué residente y hora corresponde.</span></li>
                            <li className="flex items-start"><FileText className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" /><span><b>Reportes y Analítica:</b> Descargue resúmenes diarios, semanales y mensuales de todos los accesos para un control total.</span></li>
                        </ul>
                    </div>
                    <div className="glass-panel p-8 rounded-xl">
                        <h3 className="text-2xl font-semibold text-foreground mb-4">Módulo Opcional: Facturación Integrada</h3>
                        <p className="text-foreground/70 mb-6">Añada un módulo de facturación para automatizar la cobranza y centralizar los pagos de los residentes, convirtiendo el sistema en una solución de gestión completa.</p>
                        <ul className="space-y-4 text-foreground/70">
                            <li className="flex items-start"><DollarSign className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" /><span><b>Portal de Pagos para Residentes:</b> Los colonos pueden consultar su historial de pagos y adeudos directamente en la aplicación.</span></li>
                            <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" /><span><b>Pasarela de Pago Segura:</b> Integramos una plataforma para que puedan realizar sus pagos de forma segura con tarjeta de crédito/débito.</span></li>
                            <li className="flex items-start"><Users className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" /><span><b>Automatización de Morosidad:</b> El estatus "moroso" se activa y desactiva automáticamente basado en el estado de sus pagos, liberando a la administración de esta tarea.</span></li>
                            <li className="flex items-start"><BarChart2 className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" /><span><b>Reportes Financieros:</b> Genere reportes de pagos, adeudos y flujo de caja para una visión clara de las finanzas del fraccionamiento.</span></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>


        
        {/* Comparación con Competidores */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">¿Por qué elegir Avanxia sobre la competencia?</h2>
              <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
                Compare nuestra propuesta de valor con las principales alternativas del mercado
              </p>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full bg-background rounded-lg shadow-lg border border-border">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left p-6 font-semibold text-foreground bg-muted/50">Característica</th>
                    <th className="text-center p-6 font-semibold text-primary bg-primary/5">Nuestra Solución (Avanxia)</th>
                    <th className="text-center p-6 font-semibold text-foreground bg-muted/50">Competidores<br/><span className="text-sm font-normal text-foreground/60">(Residentia, Neivor, Comunidad Feliz, etc.)</span></th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border hover:bg-muted/20 transition-colors">
                    <td className="p-6 font-medium text-foreground">Modelo de Pago</td>
                    <td className="p-6 text-center">
                      <div className="flex flex-col items-center justify-center gap-1">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="text-green-500" size={20} />
                          <span className="font-semibold text-primary">Pago Único</span>
                        </div>
                        <span className="text-sm text-foreground/60">Una sola inversión</span>
                      </div>
                    </td>
                    <td className="p-6 text-center">
                      <div className="flex flex-col items-center justify-center gap-1">
                        <span className="font-semibold text-red-600">Renta Mensual</span>
                        <span className="text-sm text-foreground/60">Pago recurrente perpetuo</span>
                      </div>
                    </td>
                  </tr>
                  <tr className="border-b border-border hover:bg-muted/20 transition-colors">
                    <td className="p-6 font-medium text-foreground">Propiedad del Sistema</td>
                    <td className="p-6 text-center">
                      <div className="flex flex-col items-center justify-center gap-1">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="text-green-500" size={20} />
                          <span className="font-semibold text-primary">100% Suyo</span>
                        </div>
                        <span className="text-sm text-foreground/60">Es de su propiedad para siempre</span>
                      </div>
                    </td>
                    <td className="p-6 text-center">
                      <div className="flex flex-col items-center justify-center gap-1">
                        <span className="font-semibold text-red-600">Nunca es suyo</span>
                        <span className="text-sm text-foreground/60">Solo renta el uso</span>
                      </div>
                    </td>
                  </tr>
                  <tr className="border-b border-border hover:bg-muted/20 transition-colors">
                    <td className="p-6 font-medium text-foreground">Costo a 3 Años</td>
                    <td className="p-6 text-center">
                      <div className="flex flex-col items-center justify-center gap-1">
                        <div className="flex items-center gap-2">
                          <DollarSign className="text-green-500" size={20} />
                          <span className="font-semibold text-primary">$4,000 USD</span>
                        </div>
                        <span className="text-sm text-foreground/60">(Ejemplo - Pago único)</span>
                      </div>
                    </td>
                    <td className="p-6 text-center">
                      <div className="flex flex-col items-center justify-center gap-1">
                        <span className="font-semibold text-red-600">$4,000 - $6,000+ USD</span>
                        <span className="text-sm text-foreground/60">(Aproximado - Y sigue contando...)</span>
                      </div>
                    </td>
                  </tr>
                  <tr className="hover:bg-muted/20 transition-colors">
                    <td className="p-6 font-medium text-foreground">Personalización</td>
                    <td className="p-6 text-center">
                      <div className="flex items-center justify-center gap-2">
                        <CheckCircle2 className="text-green-500" size={20} />
                        <span className="font-semibold text-primary">Totalmente a la Medida</span>
                      </div>
                    </td>
                    <td className="p-6 text-center text-foreground/70">Limitada o Nula</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div className="text-center mt-8">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-6 py-3 rounded-lg">
                <ShieldCheck size={20} />
                <span className="font-semibold">Inversión inteligente: Pague una vez, sea dueño para siempre</span>
              </div>
            </div>
          </div>
        </section>


        {/* Investment */}
        <section className="py-20 px-4">
            <div className="max-w-5xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground">La Inversión: Un Activo Digital para el Fraccionamiento</h2>
                    <p className="mt-4 text-lg text-foreground/70 max-w-3xl mx-auto">Es una inversión única en un sistema a la medida que les pertenece. No más rentas mensuales ni dependencia de terceros.</p>
                </div>
                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    <div className="glass-panel p-8 rounded-xl border border-primary/20">
                        <h3 className="text-2xl font-semibold text-foreground mb-2">Sistema de Control de Acceso</h3>
                        <p className="text-4xl font-bold text-foreground mb-6">$3,000 <span className="text-lg font-normal text-foreground/70">USD (Pago Único)</span></p>
                        <ul className="space-y-3 text-foreground/70">
                            <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-primary/70 mr-3 mt-1 flex-shrink-0" /><span>Dashboard de Administración Web</span></li>
                            <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-primary/70 mr-3 mt-1 flex-shrink-0" /><span>App Móvil para Residentes y Guardias</span></li>
                            <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-primary/70 mr-3 mt-1 flex-shrink-0" /><span>Generación y Validación de QR</span></li>
                            <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-primary/70 mr-3 mt-1 flex-shrink-0" /><span>Gestión de Morosidad Manual</span></li>
                             <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-primary/70 mr-3 mt-1 flex-shrink-0" /><span>Reportes de Acceso</span></li>
                        </ul>
                    </div>
                    <div className="glass-panel p-8 rounded-xl border-2 border-primary ring-4 ring-primary/10 relative">
                        <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2">
                            <div className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">Recomendado</div>
                        </div>
                        <h3 className="text-2xl font-semibold text-primary mb-2">Sistema Completo (+ Facturación)</h3>
                        <p className="text-4xl font-bold text-foreground mb-6">$4,000 <span className="text-lg font-normal text-foreground/70">USD (Pago Único)</span></p>
                        <ul className="space-y-3 text-foreground/70">
                            <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" /><span><b>Todo lo del Sistema de Acceso</b></span></li>
                            <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" /><span>Módulo de Facturación Integrado</span></li>
                            <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" /><span>Portal de Pagos para Residentes</span></li>
                            <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" /><span>Automatización de Morosidad</span></li>
                            <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" /><span>Reportes Financieros</span></li>
                        </ul>
                    </div>
                </div>
                 <div className="mt-8 text-center text-foreground/70 max-w-3xl mx-auto">
                    <p><b>Ambos planes incluyen:</b> Licencia de por vida (el código es suyo), 3 meses de soporte técnico gratuito y montaje en sus servidores (costo de servidores no incluido). Como cliente referido de TSC, recibe actualizaciones gratuitas durante el primer año.</p>
                </div>
            </div>
        </section>
        
        {/* Why Avanxia */}
        <section className="py-20 px-4 bg-background">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground">¿Por Qué Avanxia es el Socio Adecuado?</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="glass-panel p-6 rounded-xl"><Code className="w-8 h-8 text-primary mb-3" /><h3 className="text-xl font-semibold text-foreground mb-2">Solución a la Medida, Código Suyo</h3><p className="text-foreground/70">No es una renta. Construimos un activo digital que le pertenece para siempre. Lo adaptamos 100% a sus reglas de negocio.</p></div>
                    <div className="glass-panel p-6 rounded-xl"><Target className="w-8 h-8 text-primary mb-3" /><h3 className="text-xl font-semibold text-foreground mb-2">ADN Dual: Software y Negocio</h3><p className="text-foreground/70">Entendemos la lógica de la administración de condominios y la traducimos en un software robusto y fácil de usar para todos los roles.</p></div>
                    <div className="glass-panel p-6 rounded-xl"><Users className="w-8 h-8 text-primary mb-3" /><h3 className="text-xl font-semibold text-foreground mb-2">Equipo Senior Full-Stack</h3><p className="text-foreground/70">Quien diseña la estrategia es quien la ejecuta. Sin intermediarios, garantizando calidad y una comunicación directa y eficiente.</p></div>
                     <div className="glass-panel p-6 rounded-xl"><Server className="w-8 h-8 text-primary mb-3" /><h3 className="text-xl font-semibold text-foreground mb-2">Soporte y Evolución Continua</h3><p className="text-foreground/70">Ofrecemos 3 meses de soporte gratuito y un plan de actualizaciones claras, especialmente para clientes referidos por TSC.</p></div>
                </div>
            </div>
        </section>

        {/* Next Steps */}
        <section className="py-20 px-4">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground">Pasos Siguientes</h2>
                    <p className="mt-4 text-lg text-foreground/70">Proponemos una hoja de ruta clara para iniciar nuestra alianza.</p>
                </div>
                <ol className="space-y-8 relative pl-8">
                    <div className="absolute left-4 top-2 bottom-2 w-0.5 bg-primary/20"></div>
                    <li className="relative"><div className="absolute -left-11 top-1.5 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">1</div><h3 className="text-xl font-semibold text-foreground">Sesión de Alineación</h3><p className="text-foreground/70">Resolver todas sus dudas sobre este modelo y ajustar el alcance final.</p></li>
                    <li className="relative"><div className="absolute -left-11 top-1.5 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">2</div><h3 className="text-xl font-semibold text-foreground">Acuerdo y Firma</h3><p className="text-foreground/70">Formalizar la alianza y el contrato de desarrollo.</p></li>
                    <li className="relative"><div className="absolute -left-11 top-1.5 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">3</div><h3 className="text-xl font-semibold text-foreground">Pago Inicial</h3><p className="text-foreground/70">Para dar inicio oficial al proyecto de desarrollo.</p></li>
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
                Estoy a su disposición para agendar una reunión, presentarle un demo y definir los detalles para construir el futuro de la gestión de Isla San Roque.
              </p>

              <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 mt-6">
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

export default PresentacionSanRoque;