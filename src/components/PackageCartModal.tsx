import React, { useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ServicePlan } from "@/data/servicesData";

interface PackageCartModalProps {
  /** Controla si el modal está visible */
  open: boolean;
  /** Lista de planes añadidos por el usuario */
  items: ServicePlan[];
  /** Cerrar modal */
  onClose: () => void;
  /** Eliminar plan por id */
  onRemove: (id: string) => void;
  /** Acción primaria (p.ej. continuar al checkout) */
  onContinue: () => void;
}

const backdrop = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.25 } },
  exit: { opacity: 0, transition: { duration: 0.2 } },
};

const modal = {
  hidden: { y: 100, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.35, type: "spring", stiffness: 80 } },
  exit: { y: 100, opacity: 0, transition: { duration: 0.25 } },
};

const PackageCartModal: React.FC<PackageCartModalProps> = ({ open, items, onClose, onRemove, onContinue }) => {
  // Calcular total memoizado
  const total = useMemo(() => {
    return items.reduce((sum, item) => (typeof item.price === "number" ? sum + item.price : sum), 0);
  }, [items]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="overlay"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
          variants={backdrop}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <motion.div
            key="modal"
            className="glass-panel w-full max-w-lg mx-4 sm:mx-0 rounded-2xl shadow-xl overflow-hidden flex flex-col bg-background relative"
            variants={modal}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={(e) => e.stopPropagation()} // evitar cierre si clic dentro
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-border/20">
              <h2 className="text-xl font-semibold text-primary">Resumen de tu Solución</h2>
              <button onClick={onClose} className="text-foreground/70 hover:text-primary transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Body */}
            <div className="p-6 space-y-4 max-h-[60vh] overflow-y-auto">
              {items.length === 0 ? (
                <p className="text-center text-foreground/70">Aún no has agregado paquetes.</p>
              ) : (
                items.map((plan) => (
                  <div key={plan.id} className="flex items-start justify-between gap-4 border border-border/20 rounded-lg p-3">
                    <div>
                      <p className="font-medium text-foreground/90">{plan.name}</p>
                      {typeof plan.price === "number" ? (
                        <p className="text-sm text-foreground/70">${plan.price.toLocaleString("en-US")}</p>
                      ) : (
                        <p className="text-sm text-foreground/70">{plan.price}</p>
                      )}
                    </div>
                    <button onClick={() => onRemove(plan.id)} className="text-destructive hover:text-destructive/80 transition-colors">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))
              )}
            </div>

            {/* Footer */}
            <div className="p-6 border-t border-border/20 flex flex-col gap-4">
              <div className="flex items-center justify-between text-lg font-semibold">
                <span>Total</span>
                <span>{`$${total.toLocaleString("en-US")}`}</span>
              </div>
              <Button disabled={items.length === 0} onClick={onContinue} variant="primary" size="cta">
                Continuar
              </Button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PackageCartModal;
