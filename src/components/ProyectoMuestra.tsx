import { motion } from "framer-motion";

const images = [
  { src: "/images/portfolio/proyectos/gyb5.png", alt: "Home GYB" },
  { src: "/images/portfolio/proyectos/gyb3.png", alt: "Pricing GYB" },
  { src: "/images/portfolio/proyectos/gyb1.png", alt: "Contact GYB" },
  { src: "/images/portfolio/proyectos/gyb10.png", alt: "Contact 2 GYB" },
  { src: "/images/portfolio/proyectos/gyb6.png", alt: "Front page GYB" },
  { src: "/images/portfolio/proyectos/gyb2.png", alt: "Logo mockup wall" },
  { src: "/images/portfolio/proyectos/gyb4.png", alt: "GYB branding 1" },
  { src: "/images/portfolio/proyectos/gyb7.png", alt: "GYB branding 2" },
  { src: "/images/portfolio/proyectos/gyb8.png", alt: "GYB Terminal" },
];

export default function ProyectoMuestra() {
  return (
    <section className="w-full py-16 px-4 md:px-10 bg-background text-foreground">
      <div className="max-w-6xl mx-auto space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.4 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">GYB CONNECT</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Diseñamos la identidad y sitio web de GYB Connect, una plataforma fintech que necesitaba destacar frente a grandes competidores.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: false, amount: 0.4 }}
          className="prose prose-invert mx-auto text-lg"
        >
          <h3 className="text-2xl font-bold">Identidad Visual y Presencia Web para el Mundo Fintech</h3>
          <p>
            GYB Connect necesitaba una imagen fuerte y profesional para competir en el sector de pagos digitales. Creamos una identidad visual completa (logo, branding y tarjetas) y un sitio web moderno, claro y animado, enfocado en destacar su propuesta de valor.
          </p>
          <p>
            Priorizamos la comprensión del servicio y el rendimiento digital para futuras campañas. La marca hoy se presenta como una alternativa real y profesional ante los gigantes del sector.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((img, i) => (
            <motion.div
              key={i}
              className="overflow-hidden rounded-xl shadow-lg bg-card"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: false, amount: 0.3 }}
            >
            <img
            src={img.src}
            alt={img.alt}
            className="w-full aspect-[4/3] object-cover hover:scale-105 transition-transform duration-300"
            />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
