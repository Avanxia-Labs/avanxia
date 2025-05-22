// src/components/SolutionsLandingPage.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { categoriesData, ServiceCategory } from '../../../data/categoriesData';

const SolutionsLandingPage: React.FC = () => {
  const containerAnimation = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const cardAnimation = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 90,
      },
    },
  };

  return (
    <div className="bg-background text-foreground min-h-screen">
      <div className="container mx-auto px-4 py-12 sm:py-16 md:py-20">
        {/* Título */}
        <motion.h1
          className="text-4xl sm:text-5xl font-bold text-center mb-10 sm:mb-12 md:mb-16 text-primary"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Explora Nuestras Soluciones
        </motion.h1>

        {/* Grid de tarjetas */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8"
          variants={containerAnimation}
          initial="hidden"
          animate="visible"
        >
          {categoriesData.map((category: ServiceCategory) => (
            <motion.div key={category.id} variants={cardAnimation} className="h-full">
              <Link to={category.path} className="block h-full group">
                <div className="glass-panel p-6 rounded-xl shadow-lg h-full flex flex-col transition-all duration-300 ease-in-out group-hover:shadow-2xl group-hover:scale-[1.02]">
                  {/* Imagen */}
                  <div className="w-full h-40 mb-4 overflow-hidden rounded-md bg-black/10">
                    <img
                      src={
                        category.imagePlaceholder ||
                        '/images/placeholders/default-category.jpg'
                      }
                      alt={`Imagen de ${category.name}`}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      onError={(e) => {
                        const img = e.currentTarget as HTMLImageElement;
                        img.onerror = null;
                        img.src = '/images/placeholders/default-category.jpg';
                      }}
                    />
                  </div>

                  {/* Contenido */}
                  <div className="flex flex-col flex-grow">
                    <h2 className="text-xl lg:text-2xl font-semibold text-primary mb-2">
                      {category.name}
                    </h2>
                    <p
                      className="text-foreground/80 text-sm mb-4 flex-grow"
                      style={{
                        display: '-webkit-box',
                        WebkitLineClamp: 4,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                      }}
                    >
                      {category.description}
                    </p>

                    <div className="mt-auto pt-2">
                      <span className="inline-flex items-center font-medium text-primary hover:text-primary/80 transition-colors duration-300">
                        Conocer más
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default SolutionsLandingPage;
