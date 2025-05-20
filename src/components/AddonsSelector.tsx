import React, { useState } from "react";
import { Check, ShoppingCart, PackageCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ServiceAddon } from "@/data/servicesData";

export interface ItemWithMeta extends ServiceAddon {
  planName: string;
  group: "addon" | "bonus";
}

interface Props {
  items: ItemWithMeta[];
  selectedIds: string[];
  onAdd: (a: ServiceAddon) => void;
  onRemove: (id: string) => void;
}

const AddonsSelector: React.FC<Props> = ({
  items,
  selectedIds,
  onAdd,
  onRemove,
}) => {
  /* ──────────────────────────────────────────────── */
  const [idx, setIdx] = useState(0);
  const current = items[idx];
  const isSelected = selectedIds.includes(current.id);

  /* Resumen (cuenta + total) */
  const selectedItems = items.filter((i) => selectedIds.includes(i.id));
  const count = selectedItems.length;
  const total = selectedItems.reduce(
    (sum, i) => (typeof i.price === "number" ? sum + i.price : sum),
    0
  );
  /* ──────────────────────────────────────────────── */

  const heading =
    current.group === "addon"
      ? `Para el plan: ${current.planName}\nMejora tu Solución con Addons Personalizados`
      : "Bonuses Incluidos en Tu Plan";

  const toggle = () => (isSelected ? onRemove(current.id) : onAdd(current));

  return (
    <div className="w-full flex flex-col items-center">
      {/* ——— título ——— */}
      <p className="text-center whitespace-pre-line mb-6 font-semibold">
        {heading}
      </p>

      {/* ——— tarjeta ——— */}
      <div className="glass-panel rounded-2xl p-8 shadow-lg w-full lg:max-w-4xl mx-auto min-h-[260px] flex flex-col">
        <h4 className="text-lg font-semibold mb-2">{current.name}</h4>

        <p className="text-sm mb-4 whitespace-pre-line">{current.description}</p>

        {current.benefits?.length > 0 && (
          <ul className="list-disc pl-4 space-y-1 text-sm mb-6 text-left">
            {current.benefits.map((b, k) => (
              <li key={k} className="flex gap-1">
                <Check className="h-4 w-4 text-primary mt-0.5" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        )}

        {/* ——— botón ———  */}
        <Button
          onClick={toggle}
          size="tight"
          variant={isSelected ? "secondary" : "primary"}
          className="mt-auto mx-auto px-6"
        >
          {isSelected ? "Quitar" : "Añadir"}
        </Button>
      </div>

      {/* ——— paginación ——— */}
      <div className="mt-6 flex gap-3">
        <Button disabled={idx === 0} onClick={() => setIdx(idx - 1)} variant="secondary">
          Anterior
        </Button>

        <Button disabled={idx === items.length - 1} onClick={() => setIdx(idx + 1)} variant="secondary">
          Siguiente
        </Button>
      </div>

      {/* ——— resumen fijo (sticky bottom bar) ——— */}
      {count > 0 && (
        <div className="fixed bottom-0 inset-x-0 z-50 bg-background/80 backdrop-blur-md border-t border-border/20">
          <div className="max-w-4xl mx-auto px-4 py-3 flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="flex items-center">
              <ShoppingCart className="h-5 w-5 text-primary mr-2" />
              <span className="text-foreground/90 font-medium">
                {count === 1 ? "1 elemento en tu paquete" : `${count} elementos en tu paquete`}
              </span>

              {/* Si solo hay el bonus gratis -> FREE, si hay addons de pago -> total */}
              {total === 0 ? (
                <span className="mx-3 text-primary font-bold uppercase">FREE</span>
              ) : (
                <>
                  <span className="mx-3 text-foreground/40">|</span>
                  <span className="text-foreground font-bold">+${total.toLocaleString("en-US")}</span>
                </>
              )}
            </div>

            <Button
              onClick={() => {
                /* abre PackageCartModal o navega al checkout */
              }}
              className="w-full sm:w-auto flex items-center justify-center"
            >
              <PackageCheck className="h-4 w-4 mr-2" />
              Ver paquete
            </Button>

            
          </div>
        </div>
      )}
    </div>
  );
};

export default AddonsSelector;
