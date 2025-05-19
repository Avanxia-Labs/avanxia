import React from 'react';
import { useParams, Link as RouterLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { categoriesData } from '../../../data/categoriesData';
import type { ServiceCategory } from '../../../data/categoriesData';
import { servicesData } from '../../../data/servicesData';
import type { ServicePlan } from '../../../data/servicesData';
// import { ArrowLeftIcon } from '@heroicons/react/24/solid'; // Descomentar si se usa

const ServiceCategoryPage: React.FC = () => {
  const { categorySlug } = useParams<{ categorySlug: string }>();
  console.log('ServiceCategoryPage renderizado con slug:', categorySlug);

  const category = categoriesData.find(cat => cat.slug === categorySlug);
  console.log('Categoría encontrada:', category);
  
  const categoryPlans = servicesData.filter(
    plan => plan.categoryId === category?.id && plan.type === 'plan'
  );
  console.log('Planes de categoría encontrados:', categoryPlans.length);

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

  const sectionAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.1 } },
  };

  if (!category) {
    return (
      <div className="container mx-auto px-4 py-12 text-center text-foreground min-h-screen">
        <h1 className="text-3xl font-bold text-destructive mb-4">Categoría no encontrada</h1>
        <RouterLink to="/soluciones" className="text-primary hover:underline">
          Volver a Soluciones
        </RouterLink>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12 sm:py-16 md:py-20 text-foreground min-h-screen">
      {/* Botón para Volver */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="mb-6 md:mb-8"
      >
        <RouterLink 
          to="/soluciones" 
          className="inline-flex items-center text-sm text-primary hover:text-primary/80 transition-colors duration-300 group"
        >
          {/* <ArrowLeftIcon className="h-4 w-4 mr-1.5 transition-transform group-hover:-translate-x-0.5" /> */}
          <span className="mr-1.5">←</span> Volver a todas las Soluciones
        </RouterLink>
      </motion.div>

      {/* A. Título de la Categoría */}
      <motion.h1 
        className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center mb-6 text-primary"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {category.name}
      </motion.h1>

      {/* B. Introducción Persuasiva de la Categoría */}
      <motion.p 
        className="text-base sm:text-lg text-foreground/80 text-center mb-12 sm:mb-16 md:mb-20 max-w-3xl mx-auto"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        {category.description}
      </motion.p>

      {/* C. Sección "Nuestros Paquetes de [Categoría]" */}
      {categoryPlans.length > 0 && (
        <motion.section className="mb-12 sm:mb-16 md:mb-20" variants={sectionAnimation} initial="hidden" animate="visible">
          <h2 
            className="text-3xl sm:text-4xl font-semibold text-center mb-10 sm:mb-12 text-primary/90"
          >
            Nuestros Paquetes de {category.name}
          </h2>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
            variants={containerAnimation} // Animación para el contenedor de tarjetas
            // initial="hidden" // No es necesario si sectionAnimation ya lo hace
            // animate="visible"
          >
            {categoryPlans.map((plan) => (
              <motion.div 
                key={plan.id} 
                variants={cardAnimation} // Animación individual para cada tarjeta
                className={`glass-panel rounded-xl shadow-lg flex flex-col overflow-hidden
                            transition-all duration-300 ease-in-out hover:shadow-2xl group
                            ${plan.featured ? 'border-2 border-primary/60 scale-[1.01]' : 'border border-transparent'}`}
              >
                {plan.featured && (
                  <div className="bg-primary text-primary-foreground px-3 py-1 text-xs font-semibold absolute top-0 right-0 rounded-bl-lg z-10 tracking-wide">
                    RECOMENDADO
                  </div>
                )}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl lg:text-2xl font-bold text-primary mb-2 min-h-[56px] lg:min-h-[64px]">{plan.name}</h3>
                  <div className="mb-3">
                    <span className="text-2xl lg:text-3xl font-extrabold text-foreground">
                      {typeof plan.price === 'number' ? `$${plan.price.toLocaleString('en-US')}` : plan.price}
                    </span>
                    {plan.priceType && (
                      <span className="text-xs text-foreground/70 ml-1">
                         {plan.priceType}
                      </span>
                    )}
                  </div>
                  <p 
                    className="text-foreground/80 text-sm mb-5 flex-grow min-h-[60px]"
                    style={{ display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}
                  >
                    {plan.shortDescription}
                  </p>
                  <div className="mt-auto">
                    <button 
                      className="w-full bg-primary text-primary-foreground font-semibold py-2.5 px-5 rounded-lg
                                 hover:bg-primary/90 transition-colors duration-300 text-sm
                                 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 focus:ring-offset-background"
                    >
                      Añadir a Solución
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>
      )}

      {/* D. Sección "Argumentos de Venta / Por qué elegirnos para [Categoría]" */}
      <motion.section className="mb-12 sm:mb-16 md:mb-20" variants={sectionAnimation} initial="hidden" animate="visible">
        <h2 className="text-3xl sm:text-4xl font-semibold text-center mb-10 sm:mb-12 text-primary/90">
          Nuestra Propuesta de Valor para {category.name}
        </h2>
        <div className="prose prose-lg dark:prose-invert max-w-none mx-auto text-foreground/90">
          {/* Aquí puedes agregar un párrafo introductorio si lo deseas */} 
          {categoryPlans.map(plan => (
            <div key={`selling-${plan.id}`} className="mb-8 p-6 rounded-lg bg-card/50 shadow">
              <h4 className="text-xl font-semibold text-primary mb-2">{plan.name}</h4>
              {plan.longDescription && (
                <p className="mb-3 text-base text-foreground/80 italic">{plan.longDescription}</p>
              )}
              <ul className="list-disc list-inside space-y-1 text-base">
                {plan.sellingPoints.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
           {/* Si no hay planes pero sí quieres mostrar argumentos generales de la categoría, considera obtenerlos de category.description o un nuevo campo */}
          {categoryPlans.length === 0 && (
             <p className="text-center text-foreground/70">Contáctanos para discutir cómo podemos ayudarte específicamente en {category.name}.</p>
          )}
        </div>
      </motion.section>

      {/* E. Casos de Éxito / Portafolio Relevante */}
      <motion.section className="mb-12 sm:mb-16 md:mb-20" variants={sectionAnimation} initial="hidden" animate="visible">
        <h2 className="text-3xl sm:text-4xl font-semibold text-center mb-10 sm:mb-12 text-primary/90">
          Casos de Éxito en {category.name}
        </h2>
        <div className="text-center text-foreground/70">
          <p>(Contenido de portafolio próximamente)</p>
        </div>
      </motion.section>

      {/* F. (Opcional) Servicios Individuales/Add-ons */}
      {/* 
      <motion.section className="mb-12 sm:mb-16 md:mb-20" variants={sectionAnimation} initial="hidden" animate="visible">
        <h2 className="text-3xl sm:text-4xl font-semibold text-center mb-10 sm:mb-12 text-primary/90">
          Servicios Adicionales para {category.name}
        </h2>
        <div className="text-center text-foreground/70">
          <p>(Información sobre add-ons próximamente)</p>
        </div>
      </motion.section>
      */}

      {/* G. Llamada a la Acción (CTA) Específica de la Categoría */}
      <motion.section variants={sectionAnimation} initial="hidden" animate="visible" className="py-10 sm:py-16 bg-gradient-to-r from-primary/5 via-background to-primary/5 rounded-xl">
        <div className="max-w-3xl mx-auto text-center px-6">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-primary">
                ¿Listo para potenciar tu negocio con {category.name}?
            </h2>
            <p className="text-lg text-foreground/80 mb-8">
                Hablemos de tus metas y cómo nuestras soluciones de {category.name} pueden ayudarte a alcanzarlas. 
                Ofrecemos una consulta inicial sin compromiso.
            </p>
            <RouterLink 
                to="/contacto" 
                className="inline-block bg-accent text-accent-foreground font-semibold py-3.5 px-8 rounded-lg text-lg
                           hover:bg-accent/90 transition-colors duration-300 shadow-lg hover:shadow-xl
                           focus:outline-none focus:ring-2 focus:ring-accent/50 focus:ring-offset-2 focus:ring-offset-background"
            >
                Contacta con un Especialista
            </RouterLink>
        </div>
      </motion.section>

    </div>
  );
};

export default ServiceCategoryPage;
