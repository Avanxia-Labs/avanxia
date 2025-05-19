import React from 'react';
import { useSectionUnderlineOnView } from "../hooks/use-section-underline";
import { motion } from 'framer-motion';

const TeamVideo: React.FC = () => {
  const underlineRef = useSectionUnderlineOnView<HTMLSpanElement>();

  return (
    <section id="teamvideo" className="py-20 bg-background text-foreground">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <h2 className="text-4xl md:text-6xl font-extrabold text-center mb-6">
          <span ref={underlineRef} className="section-title-underline">
            Conoce al Equipo
          </span>
        </h2>
        <p className="text-center text-foreground/70 mb-12 max-w-3xl mx-auto">
          Disfruta de un vistazo dinámico a nuestro equipo y descubre quiénes están detrás de Avanxia.
        </p>

        {/* Animated Video Container */}
        <motion.div
          className="max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-xl dark:shadow-[0_0_20px_rgba(46,104,255,0.4)]"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <video
            src="/videos/videoteam.mp4"
            controls
            className="w-full h-auto object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default TeamVideo;
