import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight, Phone, Mail, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import SEOHelmet from '@/components/SEOHelmet';

const GraciasRevolucionAI = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirigir a home después de 10 segundos
    const timer = setTimeout(() => {
      navigate('/');
    }, 10000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <>
      <SEOHelmet />
      
      <div className="min-h-screen bg-background flex items-center justify-center px-4">
        <motion.div 
          className="max-w-2xl w-full text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <CheckCircle2 className="w-24 h-24 text-green-500 mx-auto mb-6" />
          </motion.div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            ¡Gracias por su Interés!
          </h1>
          
          <p className="text-xl text-foreground/70 mb-8">
            Su solicitud ha sido recibida exitosamente. 
            Nuestro equipo se pondrá en contacto con usted en las próximas <span className="font-semibold text-primary">2 horas</span>.
          </p>
          
          <div className="glass-panel p-6 rounded-xl mb-8">
            <h2 className="text-lg font-semibold text-foreground mb-4">
              ¿Qué sigue ahora?
            </h2>
            <div className="space-y-3 text-left max-w-md mx-auto">
              <div className="flex items-start gap-3">
                <span className="text-primary font-bold">1.</span>
                <p className="text-foreground/70">Revisaremos su información y prepararemos un análisis preliminar de su negocio.</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-primary font-bold">2.</span>
                <p className="text-foreground/70">Le contactaremos para agendar la videollamada en el horario que más le convenga.</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-primary font-bold">3.</span>
                <p className="text-foreground/70">En la llamada, le mostraremos exactamente cómo podemos hacer crecer su negocio.</p>
              </div>
            </div>
          </div>
          
          <div className="mb-8">
            <p className="text-foreground/60 mb-4">Mientras tanto, puede contactarnos directamente:</p>
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
          </div>
          
          <Button 
            onClick={() => navigate('/')}
            className="bg-gradient-to-r from-secondary to-primary hover:from-secondary/90 hover:to-primary/90 text-white"
          >
            Volver al Inicio
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
          
          <p className="text-sm text-foreground/40 mt-6">
            Será redirigido automáticamente en 10 segundos...
          </p>
        </motion.div>
      </div>
    </>
  );
};

export default GraciasRevolucionAI; 