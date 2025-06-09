import { useState, Fragment, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Dialog, Transition } from '@headlessui/react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioData, PortfolioItem } from '@/data/portfolioData';
import { X } from 'lucide-react';

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
    <div className="fixed inset-0 overflow-auto bg-[rgb(var(--color-background))] text-[rgb(var(--color-foreground))]">
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
                px-4 py-2 rounded-full text-sm font-medium transition-colors
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
              className="relative rounded-lg overflow-hidden shadow-lg cursor-pointer bg-[rgb(var(--color-card))] text-white" // Forzamos texto blanco aquí
              onClick={() => setActiveItem(item)}
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              whileHover={{ scale: 1.03 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover"
              />
              {/* ✅ CAMBIO CLAVE: Capa oscura siempre visible para mejorar contraste */}
              <div className="absolute inset-0 bg-black/40 hover:bg-black/60 transition-colors" />
              
              <div className="absolute bottom-0 left-0 p-4">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                {item.subtitle && <p className="text-sm opacity-90">{item.subtitle}</p>}
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
                {/* Overlay */}
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black/50" aria-hidden="true" />
                </Transition.Child>


                <div className="flex items-center justify-center min-h-screen p-4 text-center">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                  >
                    <Dialog.Panel
                      className="relative inline-block w-full max-w-3xl my-8 overflow-hidden text-left align-middle transition-all transform bg-[rgb(var(--color-card))] shadow-xl rounded-2xl"
                    >
                      <div className="relative">
                        <button
                          onClick={() => setActiveItem(null)}
                          className="absolute top-3 right-3 z-10 p-1 bg-gray-200/80 hover:bg-gray-200 rounded-full transition-colors"
                          aria-label="Cerrar modal"
                        >
                          <X size={20} className="text-gray-700" />
                        </button>
                        <img
                          src={activeItem.image}
                          alt={activeItem.title}
                          className="w-full h-64 object-cover"
                        />
                      </div>
                      <div className="p-6 space-y-4">
                        <Dialog.Title as="h3" className="text-2xl font-bold leading-6 text-[rgb(var(--color-card-foreground))]">
                            {activeItem.title}
                        </Dialog.Title>
                        <p className="text-base text-[rgba(var(--color-card-foreground))]">
                          {activeItem.descriptionsOverride?.[selectedCategory] ??
                            activeItem.description}
                        </p>

                        {activeItem.videos?.[selectedCategory] && (
                          <div className="pt-2">
                            <video
                                controls
                                src={activeItem.videos[selectedCategory]!}
                                className="w-full rounded-md"
                            />
                          </div>
                        )}

                        <div className="pt-4">
                          <button
                            onClick={() => {
                              setActiveItem(null); // Cierra el modal antes de navegar
                              navigate(`/proyectos/${activeItem.slug}`);
                            }}
                            className="px-5 py-2 rounded-md font-medium bg-[rgb(var(--color-primary))] text-[rgb(var(--color-primary-foreground))] hover:opacity-90 transition-opacity"
                          >
                            Ver más
                          </button>
                        </div>
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