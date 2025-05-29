// src/components/SolutionsLandingPage.tsx
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import type { Engine } from '@tsparticles/engine';
import { loadFull } from 'tsparticles';
import { categoriesData, ServiceCategory } from '../../../data/categoriesData';
import Footer from '@/components/Footer';

// Animation variants
const carouselVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const cardVariants = {
  hidden: (i: number) => ({
    opacity: 0,
    x: i % 2 === 0 ? -100 : 100,
  }),
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const SolutionsLandingPage: React.FC = () => {
  const [particlesReady, setParticlesReady] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    initParticlesEngine(async (engine: Engine) => await loadFull(engine)).then(() =>
      setParticlesReady(true)
    );
  }, []);

  return (
    <motion.div
      className="flex flex-col bg-[rgb(var(--color-background))] text-[rgb(var(--color-foreground))] min-h-screen"
      initial="hidden"
      animate="visible"
    >
      {/* Header */}
      <div className="container mx-auto px-4 text-center pt-16 mb-16">
        <motion.h1
          className="text-4xl sm:text-5xl font-bold text-primary mb-4 py-8"
          variants={carouselVariants}
        >
          Explora Nuestras Soluciones
        </motion.h1>
        <motion.p
          className="text-lg text-[rgb(var(--color-foreground))]/70 max-w-2xl mx-auto"
          variants={carouselVariants}
        >
          Descubre cómo podemos impulsar tu negocio con servicios digitales hechos a tu medida.
        </motion.p>
      </div>

      {/* Carousel */}
      <div className="container mx-auto px-4 mb-16 relative overflow-visible">
        {particlesReady && (
          <Particles
            id="tsparticles-carousel-bg"
            className="absolute inset-0 w-full h-full z-0 pointer-events-none"
            options={{ /* tus opciones */ }}
          />
        )}
        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          spaceBetween={0}
          slidesPerView={1}
          centeredSlides
          loop
          autoplay={{ delay: 5000 }}
          navigation
          pagination={{ clickable: true }}
          className="relative z-10"
        >
          {categoriesData.map((cat) => (
            <SwiperSlide key={cat.id}>
               <div
                 className="
                   relative w-full 
                   lg:h-screen      /* altura full en desktop grande */
                   md:h-[75vh]       /* 75% de viewport en pantallas medianas */
                   sm:h-[60vh]       /* 60% en pantallas pequeñas */
                   overflow-hidden 
                   rounded-xl
                 "
               >                
               {cat.videoUrl && (
                  <>
                    <video
                      src={cat.videoUrl}
                      autoPlay
                      muted
                      loop
                      className="absolute inset-0 w-full h-full object-cover opacity-50 pointer-events-none"
                    />
                    {/* Overlay opcional para mayor contraste */}
                    <div className="absolute inset-0 bg-black/20 pointer-events-none" />
                  </>
                )}
                <motion.div
                  className="
                    relative z-10 flex flex-col items-center justify-center h-full 
                    px-4 py-6      /* menos padding en móvil */
                    md:px-8 md:py-8 /* padding original en md                */
                    text-center gap-4
                  "       
                  variants={carouselVariants}
                >
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
                  {cat.name}
                </h2>                  
                 <p className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-2xl">
                   {cat.description}
                 </p>                  
                 <button
                    onClick={() => navigate(cat.path.replace(/^\//, ''))}
                    className="bg-[rgb(var(--color-primary))] text-[rgb(var(--color-primary-foreground))] py-3 px-6 rounded-full hover:opacity-90 transition-opacity text-base sm:text-lg"
                  >
                    Conocer más
                  </button>
                </motion.div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Grid of Animated Cards */}
      <div className="container mx-auto px-4 mb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categoriesData.map((cat, i) => (
            <AnimatedCard key={cat.id} category={cat} index={i} />
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="relative z-10">
        <Footer />
      </div>
    </motion.div>
  );
};

type AnimatedCardProps = {
  category: ServiceCategory;
  index: number;
};

const AnimatedCard: React.FC<AnimatedCardProps> = ({ category, index }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.3 });
  const navigate = useNavigate();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      custom={index}
      variants={cardVariants}
      initial="hidden"
      animate={controls}
      className="group glass-panel p-4 rounded-2xl shadow-xl flex flex-col items-center text-center"
      whileHover={{ scale: 1.03, boxShadow: '0 8px 20px rgba(0,0,0,0.2)' }}
    >
      <div className="w-16 h-16 mb-3 mx-auto overflow-hidden rounded-md bg-black/10">
        <img
          src={category.imagePlaceholder}
          alt={category.name}
          className="w-full h-full object-contain"
        />
      </div>
      <h3 className="text-base font-semibold text-primary mb-1">{category.name}</h3>
      <p className="text-xs text-[rgb(var(--color-foreground))]/80 mb-3 line-clamp-3">
        {category.description}
      </p>
      <button
        onClick={() => navigate(category.path.replace(/^\//, ''))}
        className="bg-primary text-background py-1 px-4 rounded-full text-sm hover:bg-primary/90 transition"
      >
        Ver más
      </button>
    </motion.div>
  );
};

export default SolutionsLandingPage;
