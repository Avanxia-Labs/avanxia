// src/components/ViewPortfolio.tsx
import { useState, Fragment } from 'react';
import { useNavigate } from 'react-router-dom';
import { Dialog, Transition } from '@headlessui/react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioData, PortfolioItem } from '@/data/portfolioData';
import { X } from 'lucide-react';

import { useRef } from 'react';

export default function ViewPortfolio() {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeItem, setActiveItem] = useState<PortfolioItem | null>(null);
  const underlineRef = useRef<HTMLSpanElement>(null);

  const categories = Array.from(
    new Set(portfolioData.flatMap((item) => item.categories))
  );

  const itemsToShow =
    selectedCategory === 'all'
      ? portfolioData
      : portfolioData.filter((item) =>
          item.categories.includes(selectedCategory)
        );

  return (
    // Fullscreen container
    <div
      className="
        fixed inset-0
        overflow-auto
        bg-[rgb(var(--color-background))]
        text-[rgb(var(--color-foreground))]
      "
    >
      {/* Centered content */}
      <div className="px-6 py-24 max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-extrabold text-center mb-8">
          <span ref={underlineRef} className="section-title-underline">Nuestro Portafolio</span>
        </h2>

        {/* Filtros */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {['all', ...categories].map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`
                px-4 py-2 rounded-full text-sm font-medium
                ${
                  selectedCategory === cat
                    ? 'bg-[rgb(var(--color-primary))] text-[rgb(var(--color-primary-foreground))]'
                    : 'bg-[rgb(var(--color-card))] text-[rgb(var(--color-card-foreground))] hover:bg-[rgb(var(--color-sidebar-hover))]'
                }
              `}
            >
              {cat === 'all' ? 'Todas' : cat.replace(/-/g, ' ')}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div
          className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          animate="visible"
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
        >
          {itemsToShow.map((item) => (
            <motion.div
              key={item.id}
              className={`
                relative rounded-lg overflow-hidden shadow-lg cursor-pointer
                bg-[rgb(var(--color-card))] text-[rgb(var(--color-card-foreground))]
              `}
              onClick={() => setActiveItem(item)}
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              whileHover={{ scale: 1.03 }}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-0 left-0 p-4">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                {item.subtitle && <p className="text-sm">{item.subtitle}</p>}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Modal Detalle */}
        <AnimatePresence>
          {activeItem && (
            <Transition.Root show as={Fragment}>
              <Dialog
                as="div"
                className="fixed inset-0 z-50 overflow-y-auto"
                onClose={() => setActiveItem(null)}
              >
                {/* Overlay que cierra modal al hacer clic afuera */}
                <div className="fixed inset-0 bg-black/30 z-10" aria-hidden="true" />

                <div className="flex items-center justify-center min-h-screen px-4 relative z-20">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                  >
                    {/* Panel modal: detiene propagación de clics internos */}
                    <Dialog.Panel
                      onClick={(e) => e.stopPropagation()}
                      as={motion.div}
                      className="
                        bg-[rgb(var(--color-card))] rounded-xl overflow-hidden shadow-xl
                        max-w-3xl w-full mx-auto text-[rgb(var(--color-card-foreground))]
                        pointer-events-auto z-20
                      "
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                    >
                      <div className="relative">
                        <button
                          onClick={() => setActiveItem(null)}
                          className="
                            absolute top-4 right-4
                            bg-gray-200/80 hover:bg-gray-200 rounded-full
                            w-8 h-8 flex items-center justify-center
                          "
                        >
                          <X size={20} className="text-gray-600" />
                        </button>
                        <img
                          src={activeItem.image}
                          alt={activeItem.title}
                          className="w-full h-64 object-cover"
                        />
                      </div>
                      <div className="p-6 space-y-4">
                        <h2 className="text-2xl font-bold">{activeItem.title}</h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                          {activeItem.descriptionsOverride?.[selectedCategory] ??
                            activeItem.description}
                        </p>

                        {activeItem.videos?.[selectedCategory] && (
                          <video
                            controls
                            src={activeItem.videos[selectedCategory]!}
                            className="w-full rounded-md"
                          />
                        )}

                        {/* Botón Ver más (omitido para los 2 proyectos) */}
                        {activeItem.id !== 'startup-ppc-launch' &&
                          activeItem.id !== 'acme-seo-audit' && (
                            <div className="pt-4">
                              <button
                                onClick={() =>
                                  navigate(`/proyectos/${activeItem.slug}`)
                                }
                                className="
                                  px-5 py-2 rounded-md font-medium
                                  bg-[rgb(var(--color-primary))] text-[rgb(var(--color-primary-foreground))]
                                  hover:opacity-90 transition-opacity
                                "
                              >
                                Ver más
                              </button>
                            </div>
                          )}
                      </div>
                    </Dialog.Panel>
                  </Transition.Child>
                </div>
              </Dialog>
            </Transition.Root>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
