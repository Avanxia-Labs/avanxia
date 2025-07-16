import { useCallback, useEffect, useRef, useState } from 'react';
import { CheckCircle2, ArrowRight, Target, TrendingUp, Users, Code, BarChart2, Phone, Factory, Bot, Rocket, Eye, MessageSquare, Star, Zap } from 'lucide-react';
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

const PresentacionLaserShop = () => {
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
      <SEOHelmet />
      
      <div className="min-h-screen bg-background">
        
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-20 pb-16 px-4">
          {init && (
            <Particles
              id="tsparticles-lasershop"
              particlesLoaded={handleParticlesLoaded}
              options={{
                fullScreen: { enable: false },
                background: { color: { value: "transparent" } },
                fpsLimit: 120,
                interactivity,
                particles: {
                  color: { value: "#ff6b35" },
                  links: { color: "#ff6b35", distance: 150, enable: true, opacity: 0.3, width: 1 },
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
                Propuesta Estratégica para LasserShop Uruguay
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
                Motor de Generación de<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Clientes Mayoristas B2B</span>
              </h1>
              <p className="text-xl text-foreground/70 max-w-3xl mx-auto mb-8">
                Transformamos su base digital estática en un sistema que atrae 15-20 prospectos mayoristas mensuales y optimiza cada consulta minorista.
              </p>

            </div>
          </div>
        </section>

        {/* Objetivos Medibles */}
        <section className="py-20 px-4">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground">Objetivos Medibles: Resultados de Negocio</h2>
                    <p className="mt-4 text-lg text-foreground/70 max-w-3xl mx-auto">Nos alineamos con los resultados del negocio, no solo métricas de marketing. Objetivos alcanzables a la 6ta semana.</p>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="glass-panel p-6 rounded-xl text-center">
                        <Factory className="w-12 h-12 text-primary mb-3 mx-auto" />
                        <h3 className="text-3xl font-bold text-foreground mb-2">15-20</h3>
                        <p className="text-lg font-semibold text-foreground mb-2">Prospectos Mayoristas</p>
                        <p className="text-foreground/70">Empresas calificadas mensualmente con necesidad real de compra</p>
                    </div>
                    
                    <div className="glass-panel p-6 rounded-xl text-center">
                        <MessageSquare className="w-12 h-12 text-secondary mb-3 mx-auto" />
                        <h3 className="text-3xl font-bold text-foreground mb-2">300</h3>
                        <p className="text-lg font-semibold text-foreground mb-2">Mensajes/Mes</p>
                        <p className="text-foreground/70">Consultas minoristas calificadas (no spam)</p>
                    </div>
                    
                    <div className="glass-panel p-6 rounded-xl text-center">
                        <TrendingUp className="w-12 h-12 text-green-500 mb-3 mx-auto" />
                        <h3 className="text-3xl font-bold text-foreground mb-2">200%</h3>
                        <p className="text-lg font-semibold text-foreground mb-2">ROI Objetivo</p>
                        <p className="text-foreground/70">Retorno sobre inversión publicitaria conservador</p>
                    </div>
                    
                    <div className="glass-panel p-6 rounded-xl text-center">
                        <Bot className="w-12 h-12 text-blue-500 mb-3 mx-auto" />
                        <h3 className="text-3xl font-bold text-foreground mb-2">80%</h3>
                        <p className="text-lg font-semibold text-foreground mb-2">Reducción Tiempo</p>
                        <p className="text-foreground/70">Chatbot IA pre-califica y responde automáticamente</p>
                    </div>
                </div>

                <div className="mt-8 text-center">
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl max-w-3xl mx-auto">
                        <p className="text-foreground font-semibold mb-2">🎯 Compromiso con Resultados de Negocio</p>
                        <p className="text-foreground/70">Necesitaremos acceso a métricas de negocio (ventas, conversión, ticket promedio) para optimizar según resultados reales, no solo métricas de marketing.</p>
                    </div>
                </div>
            </div>
        </section>

        {/* Analytics Dashboard */}
        <section className="py-20 px-4">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground">Análisis Digital Actual: Datos Reales</h2>
                    <p className="mt-4 text-lg text-foreground/70 max-w-3xl mx-auto">Situación actual de LasserShop basada en reportes detallados de cada plataforma.</p>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    {/* Instagram */}
                    <div className="glass-panel p-6 rounded-xl text-center">
                        <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Eye className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold text-foreground mb-2">Instagram</h3>
                        <div className="space-y-2">
                            <p className="text-lg font-semibold text-foreground">3,500 seguidores</p>
                            <p className="text-sm text-red-500">0.06% engagement</p>
                            <p className="text-sm text-foreground/70">2 likes promedio</p>
                        </div>
                        <div className="mt-4 w-full bg-red-100 rounded-full h-2">
                            <div className="bg-red-500 h-2 rounded-full" style={{width: '6%'}}></div>
                        </div>
                    </div>
                    
                    {/* TikTok */}
                    <div className="glass-panel p-6 rounded-xl text-center">
                        <div className="w-16 h-16 bg-gradient-to-r from-black to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                            <MessageSquare className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold text-foreground mb-2">TikTok</h3>
                        <div className="space-y-2">
                            <p className="text-lg font-semibold text-foreground">432 seguidores</p>
                            <p className="text-sm text-red-500">0% engagement</p>
                            <p className="text-sm text-foreground/70">Sin actividad</p>
                        </div>
                        <div className="mt-4 w-full bg-red-100 rounded-full h-2">
                            <div className="bg-red-500 h-2 rounded-full" style={{width: '0%'}}></div>
                        </div>
                    </div>
                    
                    {/* YouTube */}
                    <div className="glass-panel p-6 rounded-xl text-center">
                        <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Rocket className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold text-foreground mb-2">YouTube</h3>
                        <div className="space-y-2">
                            <p className="text-lg font-semibold text-foreground">119 suscriptores</p>
                            <p className="text-sm text-yellow-600">3.33% engagement</p>
                            <p className="text-sm text-foreground/70">37 views promedio</p>
                        </div>
                        <div className="mt-4 w-full bg-yellow-100 rounded-full h-2">
                            <div className="bg-yellow-500 h-2 rounded-full" style={{width: '33%'}}></div>
                        </div>
                    </div>
                    
                    {/* SEO */}
                    <div className="glass-panel p-6 rounded-xl text-center">
                        <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                            <BarChart2 className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold text-foreground mb-2">SEO</h3>
                        <div className="space-y-2">
                            <p className="text-lg font-semibold text-foreground">Domain Rank 5</p>
                            <p className="text-sm text-blue-600">270 visitas</p>
                            <p className="text-sm text-foreground/70">24 keywords</p>
                        </div>
                        <div className="mt-4 w-full bg-blue-100 rounded-full h-2">
                            <div className="bg-blue-500 h-2 rounded-full" style={{width: '20%'}}></div>
                        </div>
                    </div>
                </div>

                {/* Reportes Visuales con Imágenes Reales */}
                <div className="space-y-12">
                    <div className="text-center">
                        <h3 className="text-2xl font-bold text-foreground mb-8">Evidencia Visual: Reportes Reales</h3>
                    </div>
                    
                    {/* Fila 1: Google Business + Instagram */}
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="glass-panel p-6 rounded-xl">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                                    <span className="text-white text-lg">✓</span>
                                </div>
                                <h4 className="text-lg font-bold text-foreground">Google Business: Base Sólida</h4>
                            </div>
                            <div className="mb-4">
                                <img 
                                    src="/Memoria/presentacion_lassershop/Google_businnes.png" 
                                    alt="Google Business LasserShop - 4.8 estrellas, 112 opiniones"
                                    className="w-full rounded-lg shadow-md"
                                />
                            </div>
                            <p className="text-foreground/70 text-sm">
                                <span className="font-semibold text-green-600">✅ Fortaleza:</span> 4.8 estrellas con 112 opiniones, ubicación establecida en Montevideo
                            </p>
                        </div>
                        
                        <div className="glass-panel p-6 rounded-xl">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                                    <span className="text-white text-lg">⚠</span>
                                </div>
                                <h4 className="text-lg font-bold text-foreground">Instagram: Problema Crítico</h4>
                            </div>
                            <div className="mb-4">
                                <img 
                                    src="/Memoria/presentacion_lassershop/Instagram.png" 
                                    alt="Instagram LasserShop - 3.5k seguidores, 0.06% engagement"
                                    className="w-full rounded-lg shadow-md"
                                />
                            </div>
                            <p className="text-foreground/70 text-sm">
                                <span className="font-semibold text-red-600">🚨 Problema:</span> 0.06% engagement rate con seguidores falsos confirmados
                            </p>
                        </div>
                    </div>
                    
                    {/* Fila 2: Mercado Libre + Page Speed */}
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="glass-panel p-6 rounded-xl">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                                    <span className="text-white text-lg">✓</span>
                                </div>
                                <h4 className="text-lg font-bold text-foreground">Mercado Libre: MercadoLíder</h4>
                            </div>
                            <div className="mb-4">
                                <img 
                                    src="/Memoria/presentacion_lassershop/mercado_libre.png" 
                                    alt="Mercado Libre LasserShop - +500 ventas, MercadoLíder"
                                    className="w-full rounded-lg shadow-md"
                                />
                            </div>
                            <p className="text-foreground/70 text-sm">
                                <span className="font-semibold text-blue-600">✅ Oportunidad:</span> +500 ventas, status MercadoLíder, base de clientes establecida
                            </p>
                        </div>
                        
                        <div className="glass-panel p-6 rounded-xl">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                                    <span className="text-white text-lg">⚠</span>
                                </div>
                                <h4 className="text-lg font-bold text-foreground">Web Performance: Lenta</h4>
                            </div>
                            <div className="mb-4">
                                <img 
                                    src="/Memoria/presentacion_lassershop/Page_speed_mobile_56.png" 
                                    alt="PageSpeed Mobile 56/100"
                                    className="w-full rounded-lg shadow-md"
                                />
                            </div>
                            <p className="text-foreground/70 text-sm">
                                <span className="font-semibold text-orange-600">⚠️ A mejorar:</span> 56/100 en mobile, First Contentful Paint 5.9s (debe ser &lt;2.5s)
                            </p>
                        </div>
                    </div>
                </div>

                {/* Resumen de Insights */}
                <div className="mt-12 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-8 rounded-xl">
                    <h3 className="text-xl font-bold text-foreground mb-6 text-center">📊 Diagnóstico Integral</h3>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3">
                                <span className="text-white text-2xl font-bold">✓</span>
                            </div>
                            <h4 className="font-semibold text-foreground">Fortalezas</h4>
                            <p className="text-sm text-foreground/70">Google Business sólido, MercadoLíder establecido</p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-3">
                                <span className="text-white text-2xl font-bold">!</span>
                            </div>
                            <h4 className="font-semibold text-foreground">Problemas Críticos</h4>
                            <p className="text-sm text-foreground/70">Redes sociales inactivas, web lenta, SEO limitado</p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-3">
                                <span className="text-white text-2xl font-bold">→</span>
                            </div>
                            <h4 className="font-semibold text-foreground">Potencial Enorme</h4>
                            <p className="text-sm text-foreground/70">Base sólida + estrategia = motor B2B</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Current Situation Analysis */}
        <section className="py-20 px-4 bg-background">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground">Diagnóstico Actual: Buenos Cimientos, Motor Parado</h2>
                    <p className="mt-4 text-lg text-foreground/70 max-w-3xl mx-auto">Su análisis revela una base digital sólida pero subutilizada. Es hora de activar el motor.</p>
                </div>
                
                {/* Metrics Grid */}
                <div className="grid md:grid-cols-3 gap-8 mb-12">
                    <div className="glass-panel p-6 rounded-xl">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
                                <CheckCircle2 className="w-6 h-6 text-green-500" />
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-foreground">Mercado Libre</h3>
                                <p className="text-sm text-foreground/70">100+ seguidores, buena reputación</p>
                            </div>
                        </div>
                        <p className="text-foreground/70">Base sólida de confianza establecida</p>
                    </div>

                    <div className="glass-panel p-6 rounded-xl">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center">
                                <Star className="w-6 h-6 text-yellow-500" />
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-foreground">Google Business</h3>
                                <p className="text-sm text-foreground/70">Opiniones positivas</p>
                            </div>
                        </div>
                        <p className="text-foreground/70">Credibilidad local establecida</p>
                    </div>

                    <div className="glass-panel p-6 rounded-xl">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                                <BarChart2 className="w-6 h-6 text-blue-500" />
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-foreground">SEO Base Sólida</h3>
                                <p className="text-sm text-foreground/70">Domain Rank: 5 | 270 visitas | 39 backlinks</p>
                            </div>
                        </div>
                        <p className="text-foreground/70">Mejor que competidores que no optimizaron correctamente en Uruguay, pero aún no alcanza el potencial de 25-35 que debería tener</p>
                    </div>
                </div>

                {/* Problems Grid */}
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="glass-panel p-6 rounded-xl border border-red-200 dark:border-red-800">
                        <div className="w-16 h-16 bg-red-500/20 rounded-xl flex items-center justify-center mb-4 text-red-500 mx-auto">
                            <Eye className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-semibold text-foreground mb-3 text-center">Engagement Crítico</h3>
                        <ul className="text-foreground/70 space-y-2">
                            <li>• Instagram: 0.06% engagement (3.5k seguidores)</li>
                            <li>• TikTok: 0% engagement (432 seguidores)</li>
                            <li>• Promedio: 2 likes por post</li>
                            <li>• Seguidores estáticos desde enero</li>
                        </ul>
                    </div>
                    
                    <div className="glass-panel p-6 rounded-xl border border-orange-200 dark:border-orange-800">
                        <div className="w-16 h-16 bg-orange-500/20 rounded-xl flex items-center justify-center mb-4 text-orange-500 mx-auto">
                            <TrendingUp className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-semibold text-foreground mb-3 text-center">SEO Limitado</h3>
                        <ul className="text-foreground/70 space-y-2">
                            <li>• Solo 24 keywords posicionadas</li>
                            <li>• 270 visitantes mensuales</li>
                            <li>• Página lenta afecta ranking</li>
                            <li>• Enlaces rotos en redes</li>
                        </ul>
                    </div>

                    <div className="glass-panel p-6 rounded-xl border border-yellow-200 dark:border-yellow-800">
                        <div className="w-16 h-16 bg-yellow-500/20 rounded-xl flex items-center justify-center mb-4 text-yellow-500 mx-auto">
                            <MessageSquare className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-semibold text-foreground mb-3 text-center">Oportunidad Perdida</h3>
                        <ul className="text-foreground/70 space-y-2">
                            <li>• Sin segmentación B2B vs B2C</li>
                            <li>• Consultas manuales sobrecargadas</li>
                            <li>• Sin filtrado de prospectos</li>
                            <li>• Competidores ganando terreno</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        {/* Our Solution */}
        <section className="py-20 px-4">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground">Nuestra Solución: El Motor LasserShop B2B</h2>
                    <p className="mt-4 text-lg text-foreground/70 max-w-3xl mx-auto">Un sistema integral que convierte su presencia digital en un imán para clientes mayoristas de alto valor.</p>
                </div>
                
                <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 mb-12">
                    <div className="glass-panel p-4 rounded-xl text-center flex-1">
                        <Bot className="w-8 h-8 text-primary mx-auto mb-2" />
                        <h3 className="font-semibold text-foreground">Chatbot IA</h3>
                        <p className="text-sm text-foreground/70">Filtra mayoristas vs minoristas automáticamente</p>
                    </div>
                    <ArrowRight className="w-8 h-8 text-primary flex-shrink-0" />
                    <div className="glass-panel p-4 rounded-xl text-center flex-1">
                        <Rocket className="w-8 h-8 text-primary mx-auto mb-2" />
                        <h3 className="font-semibold text-foreground">Contenido Viral B2B</h3>
                        <p className="text-sm text-foreground/70">Reels enfocados en resultados mayoristas</p>
                    </div>
                    <ArrowRight className="w-8 h-8 text-primary flex-shrink-0" />
                    <div className="glass-panel p-4 rounded-xl text-center flex-1">
                        <Target className="w-8 h-8 text-primary mx-auto mb-2" />
                        <h3 className="font-semibold text-foreground">Campañas Segmentadas</h3>
                        <p className="text-sm text-foreground/70">Google (B2B) + Meta (B2C)</p>
                    </div>
                    <ArrowRight className="w-8 h-8 text-primary flex-shrink-0" />
                    <div className="bg-gradient-to-r from-primary to-secondary p-4 rounded-xl text-center flex-1">
                        <Factory className="w-8 h-8 text-white mx-auto mb-2" />
                        <h3 className="font-semibold text-white">Prospectos Calificados</h3>
                        <p className="text-sm text-white/80">15-20 mayoristas/mes entregados</p>
                    </div>
                </div>

                {/* Three Pillars */}
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="glass-panel p-8 rounded-xl">
                        <h3 className="text-2xl font-semibold text-foreground mb-4">Pilar 1: Optimización + IA</h3>
                        <ul className="space-y-3 text-foreground/70">
                            <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" /><span><b>Chatbot Centralizado con IA:</b> Alimentado por datos del negocio, deriva leads a WhatsApp, filtra por volumen (+50 unidades)</span></li>
                            <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" /><span><b>Landing B2B:</b> Calculadora de precios por volumen integrada</span></li>
                            <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" /><span><b>Velocidad Web:</b> Next.js para scores 90/100</span></li>
                            <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" /><span><b>Upselling IA:</b> Sugiere servicios adicionales automáticamente</span></li>
                        </ul>
                    </div>
                    
                    <div className="glass-panel p-8 rounded-xl">
                        <h3 className="text-2xl font-semibold text-foreground mb-4">Pilar 2: Contenido Estratégico</h3>
                        <ul className="space-y-3 text-foreground/70">
                            <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" /><span><b>Reels "Resultado-Viral":</b> "50 a 500 termos en 1 día"</span></li>
                            <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" /><span><b>Trends & Pop Culture:</b> Películas, series, productos sublimables, mates uruguayos</span></li>
                            <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" /><span><b>LinkedIn B2B:</b> Targeting importadores y distribuidores</span></li>
                            <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" /><span><b>SEO Accionables:</b> "grabado laser", "llaveros personalizados" (1.6k búsquedas)</span></li>
                        </ul>
                    </div>
                    
                    <div className="glass-panel p-8 rounded-xl">
                        <h3 className="text-2xl font-semibold text-foreground mb-4">Pilar 3: Prospección Dual</h3>
                        <ul className="space-y-3 text-foreground/70">
                            <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" /><span><b>Google Ads B2B:</b> Keywords mayoristas específicos</span></li>
                            <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" /><span><b>Meta Ads B2C:</b> Segmentación minoristas locales</span></li>
                            <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" /><span><b>Seguimiento IA:</b> Calificación automática de leads</span></li>
                            <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" /><span><b>WhatsApp Unificado:</b> Todas las consultas centralizadas</span></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        {/* Three Phases */}
        <section className="py-20 px-4 bg-background">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground">Implementación en 3 Fases Estratégicas</h2>
                    <p className="mt-4 text-lg text-foreground/70 max-w-3xl mx-auto">Cada fase construye sobre la anterior para garantizar resultados sostenibles.</p>
                </div>
                
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="glass-panel p-8 rounded-xl">
                        <div className="text-center mb-6">
                            <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl font-bold text-primary">1</span>
                            </div>
                            <h3 className="text-2xl font-semibold text-foreground">Construcción de Activos</h3>
                            <p className="text-foreground/70 text-sm">Semanas 1-4</p>
                        </div>
                        <ul className="space-y-3 text-foreground/70">
                            <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" /><span>Desarrollo del Chatbot con IA</span></li>
                            <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" /><span>Landing B2B con calculadora</span></li>
                            <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" /><span>Optimización web completa</span></li>
                            <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" /><span>Saneamiento redes sociales</span></li>
                            <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" /><span>Setup campaña publicitaria</span></li>
                        </ul>
                    </div>
                    
                    <div className="glass-panel p-8 rounded-xl">
                        <div className="text-center mb-6">
                            <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl font-bold text-secondary">2</span>
                            </div>
                            <h3 className="text-2xl font-semibold text-foreground">Captación Activa</h3>
                            <p className="text-foreground/70 text-sm">Semanas 5-12</p>
                        </div>
                        <ul className="space-y-3 text-foreground/70">
                            <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-secondary mr-3 mt-1 flex-shrink-0" /><span>Gestión dual: RRSS Dominante</span></li>
                            <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-secondary mr-3 mt-1 flex-shrink-0" /><span>Campañas Google + Meta activas</span></li>
                            <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-secondary mr-3 mt-1 flex-shrink-0" /><span>Contenido viral B2B mensual</span></li>
                            <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-secondary mr-3 mt-1 flex-shrink-0" /><span>Calificación y seguimiento IA</span></li>
                            <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-secondary mr-3 mt-1 flex-shrink-0" /><span>Entrega de prospectos calientes</span></li>
                        </ul>
                    </div>
                    
                    <div className="glass-panel p-8 rounded-xl">
                        <div className="text-center mb-6">
                            <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl font-bold text-green-500">3</span>
                            </div>
                            <h3 className="text-2xl font-semibold text-foreground">Optimización Continua</h3>
                            <p className="text-foreground/70 text-sm">Semana 6+ en adelante</p>
                        </div>
                        <ul className="space-y-3 text-foreground/70">
                            <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" /><span>Medición ROI vs objetivos</span></li>
                            <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" /><span>Ajuste estratégico basado en datos</span></li>
                            <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" /><span>Escalado de campañas exitosas</span></li>
                            <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" /><span>Reportes quincenales detallados</span></li>
                            <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" /><span>Reuniones estratégicas mensuales</span></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        {/* Investment */}
        <section className="py-20 px-4">
            <div className="max-w-5xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground">Inversión: Motor de Crecimiento Completo</h2>
                    <p className="mt-4 text-lg text-foreground/70 max-w-3xl mx-auto">Dos planes perfectamente integrados para cubrir todo el espectro: mayoristas y minoristas.</p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-8">
                    <div className="glass-panel p-8 rounded-xl border border-primary/20">
                        <h3 className="text-2xl font-semibold text-foreground mb-2">RRSS Dominante</h3>
                        <p className="text-4xl font-bold text-foreground mb-4">$980 <span className="text-lg font-normal text-foreground/70">USD/mes</span></p>
                        <a href="/servicios/redes-sociales-marketing" target="_blank" className="text-primary hover:underline text-sm mb-4 inline-block">Ver detalles completos →</a>
                        <ul className="space-y-2 text-foreground/70 text-sm">
                            <li className="flex items-start"><CheckCircle2 className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" /><span>Estrategia Digital Integral y Adaptativa</span></li>
                            <li className="flex items-start"><CheckCircle2 className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" /><span>Gestión Completa hasta 6-7 canales</span></li>
                            <li className="flex items-start"><CheckCircle2 className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" /><span>22-25 posts mensuales de alta calidad</span></li>
                            <li className="flex items-start"><CheckCircle2 className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" /><span>3-4 Videos/Reels mensuales (30-60 seg)</span></li>
                            <li className="flex items-start"><CheckCircle2 className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" /><span>1 Video Premium mensual (hasta 2 min)</span></li>
                            <li className="flex items-start"><CheckCircle2 className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" /><span>Gestión de Comunidad VIP</span></li>
                            <li className="flex items-start"><CheckCircle2 className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" /><span>2 Artículos de Blog/Contenidos Longform SEO</span></li>
                            <li className="flex items-start"><CheckCircle2 className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" /><span>Campaña Meta Ads</span></li>
                            <li className="flex items-start"><CheckCircle2 className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" /><span>Análisis y Reportes Premium</span></li>
                        </ul>
                    </div>
                    
                    <div className="glass-panel p-8 rounded-xl border border-secondary/20">
                        <h3 className="text-2xl font-semibold text-foreground mb-2">PPC Gestión Mensual</h3>
                        <p className="text-4xl font-bold text-foreground mb-4">$580 <span className="text-lg font-normal text-foreground/70">USD/mes</span></p>
                        <a href="/servicios/publicidad-pagada-ppc" target="_blank" className="text-secondary hover:underline text-sm mb-4 inline-block">Ver detalles completos →</a>
                        <ul className="space-y-2 text-foreground/70 text-sm">
                            <li className="flex items-start"><CheckCircle2 className="w-4 h-4 text-secondary mr-2 mt-1 flex-shrink-0" /><span>Gestión Profesional Google Ads</span></li>
                            <li className="flex items-start"><CheckCircle2 className="w-4 h-4 text-secondary mr-2 mt-1 flex-shrink-0" /><span>Landing Page B2B incluida (Next.js)</span></li>
                            <li className="flex items-start"><CheckCircle2 className="w-4 h-4 text-secondary mr-2 mt-1 flex-shrink-0" /><span>Optimización continua y A/B testing</span></li>
                            <li className="flex items-start"><CheckCircle2 className="w-4 h-4 text-secondary mr-2 mt-1 flex-shrink-0" /><span>Audiencias personalizadas y remarketing</span></li>
                            <li className="flex items-start"><CheckCircle2 className="w-4 h-4 text-secondary mr-2 mt-1 flex-shrink-0" /><span>Formulario de contacto/captura integrado</span></li>
                            <li className="flex items-start"><CheckCircle2 className="w-4 h-4 text-secondary mr-2 mt-1 flex-shrink-0" /><span>Reportes mensuales detallados</span></li>
                            <li className="flex items-start"><CheckCircle2 className="w-4 h-4 text-secondary mr-2 mt-1 flex-shrink-0" /><span>Comunicación y soporte continuo</span></li>
                        </ul>
                    </div>
                </div>

                <div className="text-center">
                    <div className="inline-block bg-gradient-to-r from-primary to-secondary p-8 rounded-xl text-white mb-6">
                        <h3 className="text-3xl font-bold mb-2">Total Motor Completo</h3>
                        <p className="text-5xl font-bold mb-4">$1,560 <span className="text-2xl font-normal">USD/mes</span></p>
                        <p className="text-lg opacity-90">+ Desarrollo inicial de infraestructura (costo único)</p>
                    </div>
                    
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl max-w-2xl mx-auto">
                        <p className="text-foreground font-semibold mb-2">💡 Modalidad de Pago Flexible</p>
                        <p className="text-foreground/70">Puede dividir los pagos mensuales en cuotas semanales sin costo adicional. Su presupuesto publicitario adicional se estima en $500 USD/mes mínimo.</p>
                    </div>
                </div>
            </div>
        </section>

        {/* KPIs y Objetivos */}
        <section className="py-20 px-4 bg-background">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground">Objetivos Medibles: Resultados, No Vanidad</h2>
                    <p className="mt-4 text-lg text-foreground/70 max-w-3xl mx-auto">Métricas específicas que transforman su negocio, alcanzables a la 6ta semana.</p>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="glass-panel p-6 rounded-xl text-center">
                        <Factory className="w-12 h-12 text-primary mb-3 mx-auto" />
                        <h3 className="text-3xl font-bold text-foreground mb-2">15-20</h3>
                        <p className="text-lg font-semibold text-foreground mb-2">Prospectos Mayoristas</p>
                        <p className="text-foreground/70">Empresas calificadas buscando cotización mensual</p>
                    </div>
                    
                    <div className="glass-panel p-6 rounded-xl text-center">
                        <MessageSquare className="w-12 h-12 text-secondary mb-3 mx-auto" />
                        <h3 className="text-3xl font-bold text-foreground mb-2">10</h3>
                        <p className="text-lg font-semibold text-foreground mb-2">Mensajes/Día</p>
                        <p className="text-foreground/70">Incremento en mercado minorista vía redes sociales</p>
                    </div>
                    
                    <div className="glass-panel p-6 rounded-xl text-center">
                        <TrendingUp className="w-12 h-12 text-green-500 mb-3 mx-auto" />
                        <h3 className="text-3xl font-bold text-foreground mb-2">200%</h3>
                        <p className="text-lg font-semibold text-foreground mb-2">ROI Objetivo</p>
                        <p className="text-foreground/70">Retorno sobre inversión publicitaria conservador</p>
                    </div>
                    
                    <div className="glass-panel p-6 rounded-xl text-center">
                        <BarChart2 className="w-12 h-12 text-blue-500 mb-3 mx-auto" />
                        <h3 className="text-3xl font-bold text-foreground mb-2">80%</h3>
                        <p className="text-lg font-semibold text-foreground mb-2">Reducción Consultas</p>
                        <p className="text-foreground/70">Chatbot IA pre-califica automáticamente</p>
                    </div>
                </div>

                <div className="mt-12 bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 p-8 rounded-xl">
                    <h3 className="text-2xl font-bold text-foreground mb-4 text-center">Ventaja Competitiva vs SuperArte</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <h4 className="font-semibold text-foreground mb-2">Su Fortaleza Actual:</h4>
                            <ul className="text-foreground/70 space-y-1">
                                <li>• Mejor estructura digital que la mayoría</li>
                                <li>• Base de confianza establecida</li>
                                <li>• Precios competitivos por volumen</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold text-foreground mb-2">Nuestra Estrategia:</h4>
                            <ul className="text-foreground/70 space-y-1">
                                <li>• Enfocar Google SEO vs su LinkedIn</li>
                                <li>• Contenido viral B2B específico</li>
                                <li>• Automatización que ellos no tienen</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Why Avanxia */}
        <section className="py-20 px-4">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground">¿Por Qué Avanxia para LaserShop?</h2>
                    <p className="mt-4 text-lg text-foreground/70 max-w-3xl mx-auto">Entendemos tanto el B2B manufacturero como el marketing digital de alta conversión.</p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="glass-panel p-6 rounded-xl">
                        <Code className="w-8 h-8 text-primary mb-3" />
                        <h3 className="text-xl font-semibold text-foreground mb-2">Desarrollo + Marketing = Ventaja</h3>
                        <p className="text-foreground/70">Creamos el chatbot, la calculadora y las integraciones que necesita. No dependemos de terceros para soluciones técnicas.</p>
                    </div>
                    
                    <div className="glass-panel p-6 rounded-xl">
                        <Target className="w-8 h-8 text-primary mb-3" />
                        <h3 className="text-xl font-semibold text-foreground mb-2">Especialistas en B2B Manufacturero</h3>
                        <p className="text-foreground/70">Entendemos la diferencia entre vender 1 termo personalizado vs 500. Cada estrategia necesita un enfoque distinto.</p>
                    </div>
                    
                    <div className="glass-panel p-6 rounded-xl">
                        <Users className="w-8 h-8 text-primary mb-3" />
                        <h3 className="text-xl font-semibold text-foreground mb-2">Equipo Senior Full-Stack</h3>
                        <p className="text-foreground/70">Quien diseña la estrategia es quien la ejecuta. Sin subcontrataciones que diluyan la calidad.</p>
                    </div>
                    
                    <div className="glass-panel p-6 rounded-xl">
                        <BarChart2 className="w-8 h-8 text-primary mb-3" />
                        <h3 className="text-xl font-semibold text-foreground mb-2">Enfoque en Resultados de Negocio</h3>
                        <p className="text-foreground/70">No medimos likes ni impresiones. Medimos prospectos calificados, conversiones y retorno real sobre inversión.</p>
                    </div>
                </div>
            </div>
        </section>

        {/* Next Steps */}
        <section className="py-20 px-4 bg-background">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground">Siguientes Pasos para Comenzar</h2>
                    <p className="mt-4 text-lg text-foreground/70">Un proceso claro para activar su motor de generación B2B.</p>
                </div>
                
                <ol className="space-y-8 relative pl-8">
                    <div className="absolute left-4 top-2 bottom-2 w-0.5 bg-primary/20"></div>
                    
                    <li className="relative">
                        <div className="absolute -left-11 top-1.5 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">1</div>
                        <h3 className="text-xl font-semibold text-foreground">Envío de Cotización</h3>
                        <p className="text-foreground/70">Recibe cotización detallada ajustada según las necesidades específicas de LasserShop.</p>
                    </li>
                    
                    <li className="relative">
                        <div className="absolute -left-11 top-1.5 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">2</div>
                        <h3 className="text-xl font-semibold text-foreground">Firma de Contrato</h3>
                        <p className="text-foreground/70">Formalizamos el acuerdo con modalidad de pago flexible (mensual o semanal).</p>
                    </li>
                    
                    <li className="relative">
                        <div className="absolute -left-11 top-1.5 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">3</div>
                        <h3 className="text-xl font-semibold text-foreground">Pago Inicial (50%)</h3>
                        <p className="text-foreground/70">Pago inicial del 50% para comenzar el desarrollo de infraestructura.</p>
                    </li>
                    
                    <li className="relative">
                        <div className="absolute -left-11 top-1.5 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">4</div>
                        <h3 className="text-xl font-semibold text-foreground">Kick-off e Inmersión</h3>
                        <p className="text-foreground/70">Nuestro equipo aprende sobre sus procesos, clientes y objetivos específicos del negocio.</p>
                    </li>
                </ol>
            </div>
        </section>

        {/* Contact */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto text-center border-t border-border pt-10">
            <h2 className="text-3xl font-bold text-foreground mb-8">Activemos el Motor LasserShop</h2>
            
            <div className="flex flex-col items-center justify-center gap-4">
              <div className="w-32 h-32 rounded-full overflow-hidden mb-4 border-2 border-primary">
                <img src="/images/portfolio/socioop.jpg" alt="Ismael Silvero" className="w-full h-full object-cover" />
              </div>
              <p className="text-2xl font-bold text-foreground mb-1">Ismael Silvero</p>
              <p className="text-lg text-foreground/70">CEO de Avanxia</p>

              <p className="text-2xl font-semibold text-foreground mt-6 max-w-2xl mx-auto">
                Transformemos su presencia digital en un motor que genere 15-20 prospectos mayoristas mensuales.
              </p>

              <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 mt-6">
                <a href="mailto:info@avanxia.com?subject=LasserShop - Motor de Generación B2B" className="text-lg text-primary hover:underline">
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

export default PresentacionLaserShop; 