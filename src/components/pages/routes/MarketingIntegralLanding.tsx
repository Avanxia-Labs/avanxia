import { useState } from 'react';
import { CheckCircle2, ArrowRight, Target, TrendingUp, Users, BarChart2, Phone, Bot, Rocket, Brain, Shield, Zap, MessageSquare, ChevronRight, Mail, Award, Calculator, Sparkles } from 'lucide-react';
import SEOHelmet from '@/components/SEOHelmet';

const MarketingIntegralLanding = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    empresa: '',
    email: '',
    telefono: '',
    mensaje: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          subject: 'DNM Gratuito - Marketing Integral con IA'
        })
      });

      if (response.ok) {
        setSubmitMessage('¡Gracias! Te contactaremos en las próximas 24 horas para tu DNM gratuito.');
        setFormData({ nombre: '', empresa: '', email: '', telefono: '', mensaje: '' });
      } else {
        setSubmitMessage('Hubo un error. Por favor intenta nuevamente.');
      }
    } catch (error) {
      setSubmitMessage('Hubo un error. Por favor intenta nuevamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      <SEOHelmet 
        title="Marketing Integral con IA - Convierte Leads Fríos en Ventas | Avanxia"
        description="Transformamos tu estrategia de marketing con IA. Análisis de competencia, campañas automatizadas y conversión de leads. DNM gratuito incluido."
        keywords="marketing integral, inteligencia artificial marketing, conversión leads, análisis competencia, campañas google ads, automatización marketing, DNM gratuito"
      />
      
      <div className="min-h-screen bg-background">
        
        {/* Hero Section con Video de Fondo */}
        <section className="relative overflow-hidden pt-20 pb-16 px-4 min-h-[80vh] flex items-center">
          <div className="absolute inset-0 z-0">
            <video 
              autoPlay 
              loop 
              muted 
              playsInline
              className="absolute w-full h-full object-cover opacity-20"
            >
              <source src="/videos/ai-marketing-bg.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/70 to-background" />
          </div>
          
          <div className="relative z-10 max-w-6xl mx-auto w-full">
            <div className="text-center">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/20 to-secondary/20 backdrop-blur-sm text-primary px-6 py-3 rounded-full text-sm font-bold mb-6 animate-pulse">
                <Sparkles className="w-5 h-5" />
                DETECCIÓN DE NECESIDADES DE MARKETING GRATIS
                <Sparkles className="w-5 h-5" />
              </div>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
                Transforma <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Leads Fríos</span><br />
                en <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-500">Clientes Calientes</span><br />
                con IA
              </h1>
              
              <p className="text-xl md:text-2xl text-foreground/80 max-w-3xl mx-auto mb-8">
                Marketing integral que crece tus ventas: estrategia, análisis de competencia y campañas que convierten. 
                <span className="font-bold text-primary"> +300% ROI garantizado.</span>
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <a href="#dnm-form" className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-secondary text-white px-8 py-4 rounded-full text-lg font-bold hover:scale-105 transition-transform shadow-xl">
                  <Calculator className="w-6 h-6" />
                  Obtén tu DNM Gratuito
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a href="#como-funciona" className="inline-flex items-center justify-center gap-2 bg-background/80 backdrop-blur-sm border-2 border-primary text-primary px-8 py-4 rounded-full text-lg font-bold hover:bg-primary hover:text-white transition-colors">
                  <Brain className="w-6 h-6" />
                  Ver Cómo Funciona
                </a>
              </div>

              <div className="flex flex-wrap justify-center gap-6 text-sm">
                <div className="flex items-center gap-2 text-foreground/70">
                  <Shield className="w-5 h-5 text-green-500" />
                  Sin compromisos
                </div>
                <div className="flex items-center gap-2 text-foreground/70">
                  <Zap className="w-5 h-5 text-yellow-500" />
                  Resultados en 6 semanas
                </div>
                <div className="flex items-center gap-2 text-foreground/70">
                  <Award className="w-5 h-5 text-blue-500" />
                  +50 empresas transformadas
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Problema-Solución Rápida */}
        <section className="py-20 px-4 bg-gradient-to-b from-background to-background/50">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  ¿Tu Marketing No Genera Ventas?
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-red-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-red-500 text-lg">✗</span>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Gastas en publicidad sin resultados claros</p>
                      <p className="text-foreground/70 text-sm">Miles en Google Ads que no convierten</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-red-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-red-500 text-lg">✗</span>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Leads que nunca compran</p>
                      <p className="text-foreground/70 text-sm">Consultas que no se convierten en ventas</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-red-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-red-500 text-lg">✗</span>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Competencia te gana clientes</p>
                      <p className="text-foreground/70 text-sm">No sabes qué están haciendo mejor</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Nosotros Lo <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Solucionamos</span>
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle2 className="w-5 h-5 text-green-500" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">IA que califica leads automáticamente</p>
                      <p className="text-foreground/70 text-sm">Solo hablas con prospectos listos para comprar</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle2 className="w-5 h-5 text-green-500" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Estrategia basada en datos reales</p>
                      <p className="text-foreground/70 text-sm">Análisis profundo de tu competencia y mercado</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle2 className="w-5 h-5 text-green-500" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">ROI medible desde el día 1</p>
                      <p className="text-foreground/70 text-sm">Dashboard en tiempo real con métricas de negocio</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Cómo Funciona */}
        <section id="como-funciona" className="py-20 px-4 bg-background">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                El Sistema que <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Multiplica tus Ventas</span>
              </h2>
              <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
                4 pilares que trabajan juntos para convertir cada lead en una oportunidad de venta
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="glass-panel p-6 rounded-xl hover:scale-105 transition-transform">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-4 mx-auto">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3 text-center">1. Estrategia Inteligente</h3>
                <ul className="space-y-2 text-foreground/70 text-sm">
                  <li>• Análisis profundo de tu negocio</li>
                  <li>• Estudio de competencia con IA</li>
                  <li>• Plan personalizado de crecimiento</li>
                  <li>• KPIs claros y medibles</li>
                </ul>
              </div>

              <div className="glass-panel p-6 rounded-xl hover:scale-105 transition-transform">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-4 mx-auto">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3 text-center">2. IA que Convierte</h3>
                <ul className="space-y-2 text-foreground/70 text-sm">
                  <li>• Chatbot que pre-califica 24/7</li>
                  <li>• Nurturing automatizado</li>
                  <li>• Scoring de leads en tiempo real</li>
                  <li>• Respuestas personalizadas</li>
                </ul>
              </div>

              <div className="glass-panel p-6 rounded-xl hover:scale-105 transition-transform">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-4 mx-auto">
                  <Rocket className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3 text-center">3. Campañas que Venden</h3>
                <ul className="space-y-2 text-foreground/70 text-sm">
                  <li>• Google Ads optimizado</li>
                  <li>• Meta Ads segmentado</li>
                  <li>• Remarketing inteligente</li>
                  <li>• A/B testing continuo</li>
                </ul>
              </div>

              <div className="glass-panel p-6 rounded-xl hover:scale-105 transition-transform">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mb-4 mx-auto">
                  <BarChart2 className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3 text-center">4. Análisis Continuo</h3>
                <ul className="space-y-2 text-foreground/70 text-sm">
                  <li>• Dashboard en tiempo real</li>
                  <li>• Reportes semanales</li>
                  <li>• Optimización basada en datos</li>
                  <li>• ROI transparente</li>
                </ul>
              </div>
            </div>

            <div className="mt-12 text-center">
              <div className="inline-block bg-gradient-to-r from-primary/10 to-secondary/10 p-6 rounded-xl">
                <p className="text-2xl font-bold text-foreground mb-2">
                  Resultado: <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">+300% ROI</span> en 6 semanas
                </p>
                <p className="text-foreground/70">
                  Sistema probado con +50 empresas en México y Latinoamérica
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Servicios Incluidos */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Todo lo que Necesitas para <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Dominar tu Mercado</span>
              </h2>
              <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
                Un equipo completo de marketing trabajando para ti, potenciado con IA
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="glass-panel p-8 rounded-xl border-2 border-primary/20 hover:border-primary/40 transition-colors">
                <h3 className="text-2xl font-bold text-foreground mb-6">Estrategia & Análisis</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-foreground/80">Auditoría completa de marketing digital</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-foreground/80">Análisis profundo de competencia con IA</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-foreground/80">Buyer personas y customer journey</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-foreground/80">Plan estratégico trimestral</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-foreground/80">KPIs y métricas de negocio</span>
                  </li>
                </ul>
              </div>

              <div className="glass-panel p-8 rounded-xl border-2 border-secondary/20 hover:border-secondary/40 transition-colors">
                <h3 className="text-2xl font-bold text-foreground mb-6">Automatización con IA</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                    <span className="text-foreground/80">Chatbot inteligente 24/7</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                    <span className="text-foreground/80">Lead scoring automático</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                    <span className="text-foreground/80">Email marketing personalizado</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                    <span className="text-foreground/80">CRM integrado con IA</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                    <span className="text-foreground/80">Workflows de nurturing</span>
                  </li>
                </ul>
              </div>

              <div className="glass-panel p-8 rounded-xl border-2 border-green-500/20 hover:border-green-500/40 transition-colors">
                <h3 className="text-2xl font-bold text-foreground mb-6">Campañas & Contenido</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-foreground/80">Google Ads gestionado</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-foreground/80">Meta Ads (Facebook/Instagram)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-foreground/80">LinkedIn Ads B2B</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-foreground/80">Contenido SEO optimizado</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-foreground/80">Landing pages que convierten</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Casos de Éxito */}
        <section className="py-20 px-4 bg-background">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Resultados <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Comprobados</span>
              </h2>
              <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
                Empresas que transformaron sus ventas con nuestro sistema
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="glass-panel p-6 rounded-xl">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-2xl font-bold">E</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground">E-commerce B2B</h3>
                    <p className="text-sm text-foreground/70">Industria: Tecnología</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-foreground/70">Leads mensuales</span>
                    <div className="flex items-center gap-2">
                      <span className="text-foreground/50 line-through">45</span>
                      <ArrowRight className="w-4 h-4 text-green-500" />
                      <span className="font-bold text-green-500">312</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-foreground/70">Tasa conversión</span>
                    <div className="flex items-center gap-2">
                      <span className="text-foreground/50 line-through">2.1%</span>
                      <ArrowRight className="w-4 h-4 text-green-500" />
                      <span className="font-bold text-green-500">8.7%</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-foreground/70">ROI</span>
                    <span className="font-bold text-green-500">+420%</span>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-border">
                  <p className="text-sm text-foreground/70 italic">
                    "En 2 meses multiplicamos x7 nuestros leads calificados"
                  </p>
                </div>
              </div>

              <div className="glass-panel p-6 rounded-xl">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-2xl font-bold">S</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground">SaaS Startup</h3>
                    <p className="text-sm text-foreground/70">Industria: Software</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-foreground/70">CAC (Costo Adquisición)</span>
                    <div className="flex items-center gap-2">
                      <span className="text-foreground/50 line-through">$850</span>
                      <ArrowRight className="w-4 h-4 text-green-500" />
                      <span className="font-bold text-green-500">$195</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-foreground/70">Demos agendados</span>
                    <div className="flex items-center gap-2">
                      <span className="text-foreground/50 line-through">8/mes</span>
                      <ArrowRight className="w-4 h-4 text-green-500" />
                      <span className="font-bold text-green-500">47/mes</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-foreground/70">ROI</span>
                    <span className="font-bold text-green-500">+335%</span>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-border">
                  <p className="text-sm text-foreground/70 italic">
                    "La IA cambió completamente nuestro funnel de ventas"
                  </p>
                </div>
              </div>

              <div className="glass-panel p-6 rounded-xl">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-2xl font-bold">M</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground">Manufactura</h3>
                    <p className="text-sm text-foreground/70">Industria: Industrial</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-foreground/70">Cotizaciones B2B</span>
                    <div className="flex items-center gap-2">
                      <span className="text-foreground/50 line-through">3/mes</span>
                      <ArrowRight className="w-4 h-4 text-green-500" />
                      <span className="font-bold text-green-500">28/mes</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-foreground/70">Ticket promedio</span>
                    <div className="flex items-center gap-2">
                      <span className="text-foreground/50 line-through">$8k</span>
                      <ArrowRight className="w-4 h-4 text-green-500" />
                      <span className="font-bold text-green-500">$15k</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-foreground/70">ROI</span>
                    <span className="font-bold text-green-500">+580%</span>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-border">
                  <p className="text-sm text-foreground/70 italic">
                    "Pasamos de perder dinero a ser líderes del mercado"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Formulario DNM */}
        <section id="dnm-form" className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="glass-panel p-8 md:p-12 rounded-2xl border-2 border-primary/20">
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/20 to-secondary/20 text-primary px-4 py-2 rounded-full text-sm font-bold mb-4">
                  <Sparkles className="w-4 h-4" />
                  OFERTA LIMITADA - SOLO 10 LUGARES ESTE MES
                  <Sparkles className="w-4 h-4" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Obtén tu <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">DNM Gratuito</span>
                </h2>
                <p className="text-xl text-foreground/70">
                  Detección de Necesidades de Marketing valorada en $500 USD - <span className="font-bold">100% GRATIS</span>
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="space-y-3">
                  <h3 className="font-bold text-foreground mb-3">Incluye:</h3>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-500" />
                      <span className="text-foreground/80">Auditoría completa de tu marketing</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-500" />
                      <span className="text-foreground/80">Análisis de 3 competidores</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-500" />
                      <span className="text-foreground/80">Reporte de oportunidades</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-500" />
                      <span className="text-foreground/80">Plan de acción personalizado</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <h3 className="font-bold text-foreground mb-3">Recibirás:</h3>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <ChevronRight className="w-5 h-5 text-primary" />
                      <span className="text-foreground/80">Sesión estratégica de 45 min</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <ChevronRight className="w-5 h-5 text-primary" />
                      <span className="text-foreground/80">Documento PDF con hallazgos</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <ChevronRight className="w-5 h-5 text-primary" />
                      <span className="text-foreground/80">Proyección de ROI potencial</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <ChevronRight className="w-5 h-5 text-primary" />
                      <span className="text-foreground/80">Sin compromisos ni ventas</span>
                    </div>
                  </div>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="nombre" className="block text-sm font-medium text-foreground mb-2">
                      Nombre Completo *
                    </label>
                    <input
                      type="text"
                      id="nombre"
                      name="nombre"
                      value={formData.nombre}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Juan Pérez"
                    />
                  </div>
                  <div>
                    <label htmlFor="empresa" className="block text-sm font-medium text-foreground mb-2">
                      Empresa *
                    </label>
                    <input
                      type="text"
                      id="empresa"
                      name="empresa"
                      value={formData.empresa}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Mi Empresa S.A."
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email Corporativo *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="juan@empresa.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="telefono" className="block text-sm font-medium text-foreground mb-2">
                      WhatsApp *
                    </label>
                    <input
                      type="tel"
                      id="telefono"
                      name="telefono"
                      value={formData.telefono}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="+52 1234567890"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="mensaje" className="block text-sm font-medium text-foreground mb-2">
                    ¿Cuál es tu principal desafío de marketing? (Opcional)
                  </label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    value={formData.mensaje}
                    onChange={handleChange}
                    rows={3}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Ej: Necesito más leads calificados, mi competencia me está ganando clientes..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-primary to-secondary text-white px-8 py-4 rounded-full text-lg font-bold hover:scale-105 transition-transform shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>Enviando...</>
                  ) : (
                    <>
                      <Mail className="w-5 h-5" />
                      Solicitar DNM Gratuito Ahora
                      <ArrowRight className="w-5 h-5" />
                    </>
                  )}
                </button>

                {submitMessage && (
                  <div className={`p-4 rounded-lg text-center ${submitMessage.includes('Gracias') ? 'bg-green-500/20 text-green-500' : 'bg-red-500/20 text-red-500'}`}>
                    {submitMessage}
                  </div>
                )}
              </form>

              <p className="text-center text-sm text-foreground/50 mt-6">
                Al enviar este formulario aceptas ser contactado por nuestro equipo. Sin spam, solo valor.
              </p>
            </div>
          </div>
        </section>

        {/* Garantía y CTA Final */}
        <section className="py-20 px-4 bg-gradient-to-b from-background to-primary/5">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-gradient-to-r from-green-500/20 to-emerald-500/20 px-6 py-3 rounded-full mb-6">
              <p className="text-green-500 font-bold flex items-center gap-2">
                <Shield className="w-5 h-5" />
                GARANTÍA DE RESULTADOS
                <Shield className="w-5 h-5" />
              </p>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Si No Generas <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">+300% ROI</span> en 90 Días
            </h2>
            <p className="text-2xl text-foreground/80 mb-8">
              Te devolvemos el 100% de tu inversión
            </p>

            <div className="glass-panel p-8 rounded-xl max-w-2xl mx-auto mb-8">
              <h3 className="text-xl font-bold text-foreground mb-4">¿Por qué podemos garantizar esto?</h3>
              <div className="space-y-3 text-left">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-foreground/80">Sistema probado con +50 empresas exitosas</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-foreground/80">IA que optimiza campañas 24/7 automáticamente</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-foreground/80">Equipo senior con +10 años de experiencia</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-foreground/80">Medimos resultados reales, no métricas de vanidad</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#dnm-form" className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-secondary text-white px-8 py-4 rounded-full text-lg font-bold hover:scale-105 transition-transform shadow-xl">
                <Rocket className="w-6 h-6" />
                Quiero Mi DNM Gratuito
                <ArrowRight className="w-5 h-5" />
              </a>
              <a href="https://wa.me/5212202834673?text=Hola,%20quiero%20información%20sobre%20el%20Marketing%20Integral%20con%20IA" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-green-500 text-white px-8 py-4 rounded-full text-lg font-bold hover:scale-105 transition-transform shadow-xl">
                <MessageSquare className="w-6 h-6" />
                Hablar por WhatsApp
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>

            <div className="mt-12 flex flex-wrap justify-center gap-8 text-sm">
              <div className="flex items-center gap-2 text-foreground/70">
                <Users className="w-5 h-5 text-primary" />
                <span><strong>+50</strong> empresas transformadas</span>
              </div>
              <div className="flex items-center gap-2 text-foreground/70">
                <TrendingUp className="w-5 h-5 text-green-500" />
                <span><strong>+300%</strong> ROI promedio</span>
              </div>
              <div className="flex items-center gap-2 text-foreground/70">
                <Bot className="w-5 h-5 text-blue-500" />
                <span><strong>24/7</strong> IA trabajando</span>
              </div>
              <div className="flex items-center gap-2 text-foreground/70">
                <Award className="w-5 h-5 text-yellow-500" />
                <span><strong>100%</strong> garantizado</span>
              </div>
            </div>
          </div>
        </section>

        {/* Footer Contacto */}
        <section className="py-16 px-4 border-t border-border">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-foreground mb-6">
              ¿Listo para Multiplicar tus Ventas?
            </h3>
            <p className="text-lg text-foreground/70 mb-8">
              Contacta directamente con nuestro equipo
            </p>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <a href="mailto:info@avanxia.com?subject=DNM Gratuito - Marketing Integral con IA" className="text-lg text-primary hover:underline flex items-center gap-2">
                <Mail className="w-5 h-5" />
                info@avanxia.com
              </a>
              <a href="tel:+5212202834673" className="text-lg text-primary hover:underline flex items-center gap-2">
                <Phone className="w-5 h-5" />
                +52 1 220 283 4673
              </a>
              <a href="https://avanxia.com" target="_blank" rel="noopener noreferrer" className="text-lg text-primary hover:underline flex items-center gap-2">
                <Rocket className="w-5 h-5" />
                avanxia.com
              </a>
            </div>
          </div>
        </section>

      </div>
    </>
  );
};

export default MarketingIntegralLanding;