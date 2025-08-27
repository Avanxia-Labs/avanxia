import { useCallback, useEffect, useRef, useState } from 'react';
import { ShoppingCart, CreditCard, Mail, BarChart3, Clock, Users, Settings, Zap, Download, Palette, Code, Search, CheckCircle2, DollarSign, Shield, Smartphone, Globe, Database, Webhook } from 'lucide-react';
import { Button } from '@/components/ui/button';
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


function CotizacionECommerce() {

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
            const { pdf } = await import('@react-pdf/renderer');
            const { default: CotizacionECommercePDF } = await import('../../ui/CotizacionECommercePDF');
            
            const blob = await pdf(<CotizacionECommercePDF />).toBlob();
            const url = URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.download = 'Propuesta-ECommerce-Productos-Digitales-Avanxia.pdf';
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
        <div className="min-h-screen bg-background">
            {/* Hero Section */}
            <section className="relative overflow-hidden pt-20 pb-16 px-4">
                {init && (
                    <Particles
                        id="tsparticles-ecommerce"
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
                        <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6 ">
                            <ShoppingCart className="w-7 h-7 shrink-0" />
                            Propuesta de Desarrollo para Plataforma E-commerce
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
                           <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Un Negocio Digital Completo</span>
                        </h1>
                        <p className="text-xl text-foreground/70 max-w-3xl mx-auto mb-8">
                            Sistema integral de venta de productos digitales con pagos automatizados, entrega por email y dashboard administrativo para gestionar tu negocio desde el día uno.
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

            {/* Why More Than Landing Page */}
            <section className="py-16 px-4 relative">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                            ¿Por qué necesita más que un landing page?
                        </h2>
                        <p className="text-lg text-foreground/70 max-w-4xl mx-auto">
                            Un landing page tradicional solo captura leads, pero para vender productos digitales necesita un ecosistema completo que maneje pagos, entregas automáticas y administración del negocio.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="glass-panel p-6 rounded-xl text-center">
                            <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl flex items-center justify-center mb-4 text-primary mx-auto">
                                <Globe className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-semibold text-foreground mb-3">Landing Page Tradicional</h3>
                            <p className="text-foreground/70 mb-4">Solo captura información de contacto y deriva a procesos manuales</p>
                            <ul className="text-sm text-foreground/60 space-y-2">
                                <li>• Procesos de venta manuales</li>
                                <li>• Sin sistema de pagos</li>
                                <li>• Entrega manual de productos</li>
                                <li>• Sin control administrativo</li>
                            </ul>
                        </div>
                        <div className="glass-panel p-6 rounded-xl text-center border-2 border-primary/30">
                            <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl flex items-center justify-center mb-4 text-primary mx-auto">
                                <ShoppingCart className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-semibold text-foreground mb-3">E-commerce Completo</h3>
                            <p className="text-foreground/70 mb-4">Plataforma integral que automatiza todo el proceso de venta</p>
                            <ul className="text-sm text-foreground/60 space-y-2">
                                <li>• Pagos automatizados con Stripe</li>
                                <li>• Entrega automática por email</li>
                                <li>• Dashboard administrativo con autenticación y base de datos</li>
                                <li>• Control total del negocio</li>
                            </ul>
                        </div>
                        <div className="glass-panel p-6 rounded-xl text-center">
                            <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl flex items-center justify-center mb-4 text-primary mx-auto">
                                <BarChart3 className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-semibold text-foreground mb-3">Escalabilidad</h3>
                            <p className="text-foreground/70 mb-4">Sistema que crece con su negocio sin intervención manual</p>
                            <ul className="text-sm text-foreground/60 space-y-2">
                                <li>• Ventas 24/7 automáticas</li>
                                <li>• Escalable sin límites</li>
                                <li>• Reportes y estadísticas</li>
                                <li>• ROI medible y optimizable</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Project Info */}
            <section className="py-16 px-4 bg-background">
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
                                        <h3 className="font-semibold text-foreground">Tipo de Proyecto</h3>
                                        <p className="text-foreground/70">E-commerce de Productos Digitales Completo</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <Clock className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-semibold text-foreground">Duración Estimada</h3>
                                        <p className="text-foreground/70">4 semanas de desarrollo intensivo</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <DollarSign className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-semibold text-foreground">Inversión Total</h3>
                                        <p className="text-foreground/70 text-2xl font-bold text-primary">$1,790 USD</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <Settings className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-semibold text-foreground">Stack Tecnológico</h3>
                                        <p className="text-foreground/70">Next.js 14, React, TypeScript, Tailwind CSS, Supabase, Stripe, Resend</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8 backdrop-blur-sm border border-primary/20">
                                <div className="grid grid-cols-2 gap-6">
                                    <div className="text-center">
                                        <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-3">
                                            <CreditCard className="w-8 h-8 text-primary" />
                                        </div>
                                        <h4 className="font-semibold text-foreground">Pagos</h4>
                                        <p className="text-sm text-foreground/70">Stripe Integration</p>
                                    </div>
                                    <div className="text-center">
                                        <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-3">
                                            <Mail className="w-8 h-8 text-secondary" />
                                        </div>
                                        <h4 className="font-semibold text-foreground">Emails</h4>
                                        <p className="text-sm text-foreground/70">Entrega Automática</p>
                                    </div>
                                    <div className="text-center">
                                        <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-3">
                                            <BarChart3 className="w-8 h-8 text-primary" />
                                        </div>
                                        <h4 className="font-semibold text-foreground">Dashboard</h4>
                                        <p className="text-sm text-foreground/70">Admin Panel</p>
                                    </div>
                                    <div className="text-center">
                                        <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-3">
                                            <Database className="w-8 h-8 text-secondary" />
                                        </div>
                                        <h4 className="font-semibold text-foreground">Base de Datos</h4>
                                        <p className="text-sm text-foreground/70">Supabase Cloud</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* How It Works Flow */}
            <section className="py-20 px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground">Flujo Automatizado del Sistema</h2>
                        <p className="mt-4 text-lg text-foreground/70 max-w-3xl mx-auto">Desde que el cliente llega hasta que recibe su producto, todo funciona de manera completamente automática.</p>
                    </div>
                    <div className="grid md:grid-cols-5 gap-6">
                        <div className="glass-panel p-6 rounded-xl text-center relative">
                            <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="font-bold text-primary">1</span>
                            </div>
                            <h3 className="text-lg font-semibold text-foreground mb-3">Landing</h3>
                            <p className="text-foreground/70 text-sm">El cliente, a traves de un anuncio, llega a su landing page animada y profesional que presenta sus productos digitales.</p>
                            <div className="absolute -right-3 top-1/2 transform -translate-y-1/2 hidden md:block">
                                <div className="w-6 h-6 text-primary/50">→</div>
                            </div>
                        </div>
                        <div className="glass-panel p-6 rounded-xl text-center relative">
                            <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="font-bold text-secondary">2</span>
                            </div>
                            <h3 className="text-lg font-semibold text-foreground mb-3">Pago Seguro</h3>
                            <p className="text-foreground/70 text-sm">Al seleccionar el producto deseado y clickar en comprar, el usuario es reenviado al sistema de checkout con Stripe que acepta tarjetas de crédito/débito internacionalmente con máxima seguridad.</p>
                            <div className="absolute -right-3 top-1/2 transform -translate-y-1/2 hidden md:block">
                                <div className="w-6 h-6 text-primary/50">→</div>
                            </div>
                        </div>
                        <div className="glass-panel p-6 rounded-xl text-center relative">
                            <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="font-bold text-primary">3</span>
                            </div>
                            <h3 className="text-lg font-semibold text-foreground mb-3">Entrega Automática</h3>
                            <p className="text-foreground/70 text-sm">Al confirmarse el pago, el sistema envía automáticamente el producto digital por email en segundos.</p>
                            <div className="absolute -right-3 top-1/2 transform -translate-y-1/2 hidden md:block">
                                <div className="w-6 h-6 text-primary/50">→</div>
                            </div>
                        </div>
                        <div className="glass-panel p-6 rounded-xl text-center">
                            <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="font-bold text-secondary">4</span>
                            </div>
                            <h3 className="text-lg font-semibold text-foreground mb-3">Control Total</h3>
                            <p className="text-foreground/70 text-sm">Usted ve todas las ventas, clientes y estadísticas en tiempo real desde su dashboard administrativo.</p>
                        </div>
                        <div className="glass-panel p-6 rounded-xl text-center">
                            <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="font-bold text-secondary">5</span>
                            </div>
                            <h3 className="text-lg font-semibold text-foreground mb-3">Administración</h3>
                            <p className="text-foreground/70 text-sm">Desde su dashboard administrativo, además de ver estadisticas, puede añadir todos sus infoproductos.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Cronograma Semanal */}
            <section className="py-20 px-4 bg-background">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground">Cronograma de Desarrollo</h2>
                        <p className="mt-4 text-lg text-foreground/70">Desarrollo estructurado en 4 semanas con entregables específicos cada semana.</p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="glass-panel p-8 rounded-xl">
                            <h3 className="text-2xl font-semibold text-foreground mb-4 flex items-center gap-3">
                                Semana 1: Setup + Landing Page
                            </h3>
                            <ul className="space-y-3 text-foreground/70">
                                <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" /><span>Configuración completa del proyecto Next.js 14 con todas las tecnologías</span></li>
                                <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" /><span>Diseño y estructura de la base de datos en Supabase</span></li>
                                <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" /><span>Landing page con animaciones y hero section impactante</span></li>
                                <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" /><span>Sección de productos y formulario de captura inicial</span></li>
                                <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" /><span>Diseño responsive completo y componentes reutilizables</span></li>
                            </ul>
                        </div>
                        <div className="glass-panel p-8 rounded-xl">
                            <h3 className="text-2xl font-semibold text-foreground mb-4 flex items-center gap-3">

                                Semana 2: Sistema de Pagos
                            </h3>
                            <ul className="space-y-3 text-foreground/70">
                                <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" /><span>Integración completa de Stripe con productos y precios</span></li>
                                <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" /><span>Formularios con validaciones avanzadas (React Hook Form + Zod)</span></li>
                                <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" /><span>Estados de loading, success y error manejados con Zustand</span></li>
                                <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" /><span>Checkout Sessions API y webhooks para confirmar pagos</span></li>
                                <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" /><span>Páginas de confirmación y cancelación de compra</span></li>
                            </ul>
                        </div>
                        <div className="glass-panel p-8 rounded-xl">
                            <h3 className="text-2xl font-semibold text-foreground mb-4 flex items-center gap-3">

                                Semana 3: Automatización + Dashboard
                            </h3>
                            <ul className="space-y-3 text-foreground/70">
                                <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" /><span>Sistema de emails automático con Resend y templates profesionales</span></li>
                                <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" /><span>Trigger automático post-pago para entrega de productos</span></li>
                                <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" /><span>Sistema de login administrativo con Supabase Auth</span></li>
                                <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" /><span>Dashboard con estadísticas esenciales y KPIs</span></li>
                                <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" /><span>Lista de órdenes y gestión básica de clientes</span></li>
                            </ul>
                        </div>
                        <div className="glass-panel p-8 rounded-xl">
                            <h3 className="text-2xl font-semibold text-foreground mb-4 flex items-center gap-3">

                                Semana 4: Testing + Deploy
                            </h3>
                            <ul className="space-y-3 text-foreground/70">
                                <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" /><span>Testing end-to-end completo de todo el flujo</span></li>
                                <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" /><span>Validaciones de seguridad y manejo robusto de errores</span></li>
                                <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" /><span>Deploy en Vercel con configuración de webhooks en producción</span></li>
                                <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" /><span>Testing en ambiente real con transacciones de prueba</span></li>
                                <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" /><span>Documentación completa y entrega del proyecto funcional</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Costos Operativos */}
            {/* <section className="py-20 px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground">Costos Operativos Reales</h2>
                        <p className="mt-4 text-lg text-foreground/70">Transparencia total: estos son los costos mensuales que tendrá por las herramientas.</p>
                    </div>
                    <div className="glass-panel rounded-xl overflow-hidden mb-8">
                        <div className="grid grid-cols-4 font-semibold text-foreground bg-primary/10 p-4 text-sm">
                            <div>Servicio</div>
                            <div className="text-center">Plan Inicial</div>
                            <div className="text-center">Costo/Mes</div>
                            <div className="text-center">Cuándo Pagar</div>
                        </div>
                        <div className="divide-y divide-primary/10 text-foreground/80 text-sm">
                            <div className="grid grid-cols-4 p-4 items-center">
                                <div className="font-medium">Supabase</div>
                                <div className="text-center">Gratis</div>
                                <div className="text-center font-bold text-green-600">$0</div>
                                <div className="text-center">Hasta 50k usuarios</div>
                            </div>
                            <div className="grid grid-cols-4 p-4 items-center">
                                <div className="font-medium">Stripe</div>
                                <div className="text-center">Pay-per-use</div>
                                <div className="text-center font-bold text-blue-600">2.9% + $0.30</div>
                                <div className="text-center">Por cada venta</div>
                            </div>
                            <div className="grid grid-cols-4 p-4 items-center">
                                <div className="font-medium">Resend</div>
                                <div className="text-center">Gratis</div>
                                <div className="text-center font-bold text-green-600">$0</div>
                                <div className="text-center">Hasta 3k emails/mes</div>
                            </div>
                            <div className="grid grid-cols-4 p-4 items-center">
                                <div className="font-medium">Vercel</div>
                                <div className="text-center">Hobby</div>
                                <div className="text-center font-bold text-green-600">$0</div>
                                <div className="text-center">Para siempre</div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-xl p-6 border border-green-500/20">
                        <h3 className="text-xl font-semibold text-foreground mb-4">Resumen de Costos Reales</h3>
                        <div className="grid md:grid-cols-3 gap-4 text-center">
                            <div>
                                <h4 className="font-semibold text-green-600">Primeros 6 meses</h4>
                                <p className="text-2xl font-bold text-foreground">$0/mes</p>
                                <p className="text-sm text-foreground/70">Solo comisiones por ventas</p>
                            </div>
                            <div>
                                <h4 className="font-semibold text-blue-600">Con 100+ ventas/mes</h4>
                                <p className="text-2xl font-bold text-foreground">~$45/mes</p>
                                <p className="text-sm text-foreground/70">Cuando ya esté vendiendo mucho</p>
                            </div>
                            <div>
                                <h4 className="font-semibold text-primary">Escalado grande</h4>
                                <p className="text-2xl font-bold text-foreground">$65-90/mes</p>
                                <p className="text-sm text-foreground/70">Solo cuando genere mucho dinero</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}

            {/* Presupuesto y Plan de Pagos */}
            <section className="py-20 px-4 bg-background">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground">Inversión Total y Plan de Pagos</h2>
                        <p className="mt-4 text-lg text-foreground/70">Pago estructurado según avance del proyecto para su tranquilidad.</p>
                    </div>
                    <div className="glass-panel rounded-xl overflow-hidden">
                        <div className="grid grid-cols-3 font-semibold text-foreground bg-primary/10 p-4">
                            <div>Hito</div>
                            <div className="text-center">Monto</div>
                            <div className="text-right">Entregables</div>
                        </div>
                        <div className="divide-y divide-primary/10 text-foreground/80">
                            <div className="grid grid-cols-3 p-4 items-center">
                                <div className="font-medium">Inicio del Proyecto</div>
                                <div className="text-center font-bold text-lg text-primary">$560 USD</div>
                                <div className="text-right text-sm">Setup + Landing Page</div>
                            </div>
                            <div className="grid grid-cols-3 p-4 items-center">
                                <div className="font-medium">Sistema de Pagos</div>
                                <div className="text-center font-bold text-lg text-secondary">$560 USD</div>
                                <div className="text-right text-sm">Stripe + Checkout Funcional</div>
                            </div>
                            <div className="grid grid-cols-3 p-4 items-center">
                                <div className="font-medium">Entrega Final</div>
                                <div className="text-center font-bold text-lg text-primary">$670 USD</div>
                                <div className="text-right text-sm">Dashboard + Deploy Completo</div>
                            </div>
                        </div>
                        <div className="bg-gradient-to-r from-primary/5 to-secondary/5 p-4 border-t border-primary/10">
                            <div className="flex justify-between items-center">
                                <span className="text-lg font-semibold text-foreground">Total de Inversión</span>
                                <span className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">$1,790 USD</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Qué Incluye */}
            <section className="py-20 px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground">¿Qué Incluye Su Inversión?</h2>
                        <p className="mt-4 text-lg text-foreground/70">Un negocio digital completo listo para generar ingresos desde el día uno.</p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="glass-panel p-6 rounded-xl">
                            <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mb-4">
                                <Globe className="w-6 h-6 text-primary" />
                            </div>
                            <h3 className="text-lg font-semibold text-foreground mb-3">Landing Page Profesional</h3>
                            <p className="text-foreground/70 text-sm">Diseño moderno con animaciones fluidas, optimizado para conversiones y completamente responsive.</p>
                        </div>
                        <div className="glass-panel p-6 rounded-xl">
                            <div className="w-12 h-12 bg-secondary/20 rounded-xl flex items-center justify-center mb-4">
                                <CreditCard className="w-6 h-6 text-secondary" />
                            </div>
                            <h3 className="text-lg font-semibold text-foreground mb-3">Sistema de Pagos Stripe</h3>
                            <p className="text-foreground/70 text-sm">Integración completa con Stripe para aceptar pagos internacionales de forma segura.</p>
                        </div>
                        <div className="glass-panel p-6 rounded-xl">
                            <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mb-4">
                                <Mail className="w-6 h-6 text-primary" />
                            </div>
                            <h3 className="text-lg font-semibold text-foreground mb-3">Entrega Automática</h3>
                            <p className="text-foreground/70 text-sm">Sistema de emails que envía automáticamente los productos digitales tras confirmar el pago.</p>
                        </div>
                        <div className="glass-panel p-6 rounded-xl">
                            <div className="w-12 h-12 bg-secondary/20 rounded-xl flex items-center justify-center mb-4">
                                <BarChart3 className="w-6 h-6 text-secondary" />
                            </div>
                            <h3 className="text-lg font-semibold text-foreground mb-3">Dashboard Administrativo</h3>
                            <p className="text-foreground/70 text-sm">Panel de control para ver ventas, clientes, estadísticas y gestionar su negocio.</p>
                        </div>
                        <div className="glass-panel p-6 rounded-xl">
                            <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mb-4">
                                <Database className="w-6 h-6 text-primary" />
                            </div>
                            <h3 className="text-lg font-semibold text-foreground mb-3">Base de Datos Cloud</h3>
                            <p className="text-foreground/70 text-sm">Configuración completa en Supabase para almacenar clientes, pedidos y productos.</p>
                        </div>
                        <div className="glass-panel p-6 rounded-xl">
                            <div className="w-12 h-12 bg-secondary/20 rounded-xl flex items-center justify-center mb-4">
                                <Webhook className="w-6 h-6 text-secondary" />
                            </div>
                            <h3 className="text-lg font-semibold text-foreground mb-3">Deploy en Producción</h3>
                            <p className="text-foreground/70 text-sm">Sitio web publicado en Vercel con dominio personalizado y configuración completa.</p>
                        </div>
                        <div className="glass-panel p-6 rounded-xl">
                            <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mb-4">
                                <Shield className="w-6 h-6 text-primary" />
                            </div>
                            <h3 className="text-lg font-semibold text-foreground mb-3">Seguridad Avanzada</h3>
                            <p className="text-foreground/70 text-sm">Autenticación, validaciones y manejo seguro de datos financieros.</p>
                        </div>
                        <div className="glass-panel p-6 rounded-xl">
                            <div className="w-12 h-12 bg-secondary/20 rounded-xl flex items-center justify-center mb-4">
                                <Smartphone className="w-6 h-6 text-secondary" />
                            </div>
                            <h3 className="text-lg font-semibold text-foreground mb-3">Diseño Responsive</h3>
                            <p className="text-foreground/70 text-sm">Funciona perfectamente en móviles, tablets y computadoras.</p>
                        </div>
                        <div className="glass-panel p-6 rounded-xl">
                            <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mb-4">
                                <Code className="w-6 h-6 text-primary" />
                            </div>
                            <h3 className="text-lg font-semibold text-foreground mb-3">Código Moderno</h3>
                            <p className="text-foreground/70 text-sm">Desarrollado con las mejores prácticas y tecnologías más actuales del mercado.</p>
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
                    <h2 className="text-3xl font-bold text-foreground mb-4">¿Listo para automatizar su negocio digital?</h2>
                    <p className="text-xl text-foreground/70 max-w-3xl mx-auto mb-8">
                        Transformemos su idea en un negocio digital rentable que funcione 24/7. Descargue la propuesta completa o contáctenos para comenzar.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
    )
}

export default CotizacionECommerce;
