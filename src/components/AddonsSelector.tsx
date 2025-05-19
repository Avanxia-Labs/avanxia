import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Check, Plus, ShoppingCart, PackageCheck } from 'lucide-react';
import { ServiceAddon, ServicePlan } from '../data/servicesData';

// ── Animaciones con Framer Motion ─────────────────────────────────────────
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

interface AddonsProps {
  plan: ServicePlan;
  addons: ServiceAddon[];
  bonuses: ServiceAddon[];
}

const AddonsSelector: React.FC<AddonsProps> = ({ addons, bonuses }) => {
  const [selectedAddons, setSelectedAddons] = useState<string[]>([]);
  const [totalAdditionalCost, setTotalAdditionalCost] = useState<number>(0);

  // Actualizar el coste total cuando cambian los addons seleccionados
  useEffect(() => {
    const additionalCost = addons
      .filter(addon => selectedAddons.includes(addon.id))
      .reduce((sum, addon) => sum + addon.price, 0);
    
    setTotalAdditionalCost(additionalCost);
  }, [selectedAddons, addons]);

  // Manejar la selección/deselección de un addon
  const toggleAddonSelection = (addonId: string) => {
    setSelectedAddons(prev => 
      prev.includes(addonId)
        ? prev.filter(id => id !== addonId)
        : [...prev, addonId]
    );
  };

  // Verificar si un addon está seleccionado
  const isAddonSelected = (addonId: string) => {
    return selectedAddons.includes(addonId);
  };

  return (
    <div className="w-full">
      {/* Sección de Addons */}
      {addons.length > 0 && (
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-6 text-center text-primary/90">
            Mejora tu Solución con Addons Personalizados
          </h3>
          
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerAnimation}
            initial="hidden"
            animate="visible"
          >
            {addons.map(addon => (
              <motion.div
                key={addon.id}
                variants={cardAnimation}
                className={`glass-panel rounded-xl shadow-lg flex flex-col overflow-hidden transition-all duration-300 ease-in-out relative 
                  ${isAddonSelected(addon.id) 
                    ? 'border-2 border-primary/60 scale-[1.01] shadow-lg' 
                    : 'border border-transparent hover:shadow-md hover:translate-y-[-3px]'}`}
                style={{ 
                  background: 'var(--glass-bg)',
                  backdropFilter: 'blur(var(--glass-blur))',
                  WebkitBackdropFilter: 'blur(var(--glass-blur))'
                }}
              >
                {addon.highlighted && (
                  <div className="bg-primary text-primary-foreground px-3 py-1 text-xs font-semibold absolute top-0 right-0 rounded-bl-lg z-10 tracking-wide">
                    RECOMENDADO
                  </div>
                )}

                <div className="absolute top-2 left-2">
                  <button 
                    className={`w-6 h-6 rounded-full flex items-center justify-center ${isAddonSelected(addon.id) ? 'bg-primary text-primary-foreground' : 'bg-foreground/10 text-foreground/60'}`}
                    onClick={() => toggleAddonSelection(addon.id)}
                  >
                    {isAddonSelected(addon.id) ? <Check className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                  </button>
                </div>

                {/* Contenido de la tarjeta */}
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-start mb-3">
                    <div className="text-3xl mr-3">{addon.iconEmoji}</div>
                    <div>
                      <h4 className="text-lg font-semibold text-primary">{addon.name}</h4>
                      <div className="text-lg font-bold text-foreground mt-1">
                        +${addon.price}
                      </div>
                    </div>
                  </div>

                  <p className="text-foreground/80 text-sm mb-4">
                    {addon.description}
                  </p>

                  {/* Beneficios */}
                  {addon.benefits.length > 0 && (
                    <div className="mb-4">
                      <p className="text-sm font-semibold mb-2 text-foreground/90">Incluye:</p>
                      <ul className="space-y-2">
                        {addon.benefits.map((benefit, index) => (
                          <li key={index} className="flex items-start text-sm text-foreground/80">
                            <Check className="h-4 w-4 text-primary flex-shrink-0 mr-2 mt-0.5" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Botón */}
                  <div className="mt-auto">
                    <button
                      className={`w-full font-semibold py-2 px-4 rounded-lg transition-colors duration-300 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 flex items-center justify-center
                        ${isAddonSelected(addon.id) 
                          ? 'bg-primary/20 text-primary border border-primary/30' 
                          : 'bg-foreground/5 text-foreground/70 hover:bg-foreground/10 border border-transparent'}`}
                      onClick={() => toggleAddonSelection(addon.id)}
                    >
                      {isAddonSelected(addon.id) ? (
                        <>
                          <Check className="h-4 w-4 mr-2" />
                          Seleccionado
                        </>
                      ) : (
                        <>
                          <Plus className="h-4 w-4 mr-2" />
                          Añadir
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      )}

      {/* Sección de Bonuses */}
      {bonuses.length > 0 && (
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-6 text-center text-primary/90">
            Bonuses Incluidos en Tu Plan
          </h3>
          
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerAnimation}
            initial="hidden"
            animate="visible"
          >
            {bonuses.map(bonus => (
              <motion.div
                key={bonus.id}
                variants={cardAnimation}
                className="glass-panel rounded-xl shadow-md flex flex-col overflow-hidden transition-all duration-300 ease-in-out relative border border-primary/20"
                style={{ 
                  background: 'var(--glass-bg)',
                  backdropFilter: 'blur(var(--glass-blur))',
                  WebkitBackdropFilter: 'blur(var(--glass-blur))'
                }}
              >
                {bonus.highlighted && (
                  <div className="bg-primary text-primary-foreground px-3 py-1 text-xs font-semibold absolute top-0 right-0 rounded-bl-lg z-10 tracking-wide">
                    DESTACADO
                  </div>
                )}

                <div className="absolute top-2 right-2">
                  <div className="w-6 h-6 rounded-full flex items-center justify-center bg-primary/20 text-primary">
                    <Check className="h-4 w-4" />
                  </div>
                </div>

                {/* Contenido de la tarjeta */}
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-start mb-3">
                    <div className="text-3xl mr-3">{bonus.iconEmoji}</div>
                    <div>
                      <h4 className="text-lg font-semibold text-primary">{bonus.name}</h4>
                      <div className="inline-block bg-primary/10 text-primary px-2 py-1 rounded-md text-xs font-semibold mt-1">
                        INCLUIDO GRATIS
                      </div>
                    </div>
                  </div>

                  <p className="text-foreground/80 text-sm mb-4">
                    {bonus.description}
                  </p>

                  {/* Beneficios */}
                  {bonus.benefits.length > 0 && (
                    <div className="mb-4">
                      <p className="text-sm font-semibold mb-2 text-foreground/90">Incluye:</p>
                      <ul className="space-y-2">
                        {bonus.benefits.map((benefit, index) => (
                          <li key={index} className="flex items-start text-sm text-foreground/80">
                            <Check className="h-4 w-4 text-primary flex-shrink-0 mr-2 mt-0.5" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      )}

      {/* Resumen de la selección */}
      {selectedAddons.length > 0 && (
        <motion.div 
          className="fixed bottom-0 left-0 right-0 bg-background/95 backdrop-blur-md border-t border-foreground/10 shadow-lg z-50 p-4"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 260, damping: 20 }}
        >
          <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
            <div className="flex items-center mb-4 sm:mb-0">
              <ShoppingCart className="h-5 w-5 text-primary mr-2" />
              <span className="text-foreground/90 font-medium">
                {selectedAddons.length} {selectedAddons.length === 1 ? 'addon' : 'addons'} seleccionado{selectedAddons.length !== 1 ? 's' : ''}
              </span>
              <span className="mx-3 text-foreground/40">|</span>
              <span className="text-foreground font-bold">+${totalAdditionalCost}</span>
            </div>
            
            <button
              className="w-full sm:w-auto bg-primary text-primary-foreground font-semibold py-2.5 px-5 rounded-lg hover:bg-primary/90 transition-colors duration-300 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 flex items-center justify-center"
            >
              <PackageCheck className="h-4 w-4 mr-2" />
              Continuar con los addons seleccionados
            </button>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default AddonsSelector;
