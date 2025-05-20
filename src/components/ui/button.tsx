import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

/* ───────────────────────────
   Variantes y tamaños
   ─────────────────────────── */
const buttonVariants = cva(
  // BASE: igual que el <a> original
  "inline-block whitespace-nowrap rounded text-base font-bold " +
    "transition duration-300 focus-visible:outline-none " +
    "focus-visible:ring-1 focus-visible:ring-zinc-950 " +
    "disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        /* Azul idéntico */
        primary: "bg-blue-600 text-white shadow-lg hover:bg-blue-700",
        secondaryDark: "bg-gray-700 text-white font-bold hover:bg-gray-800",
        

        /* Otros estilos opcionales */
        secondary:
          "bg-zinc-100 text-zinc-900 shadow-sm hover:bg-zinc-100/80 dark:bg-zinc-800 dark:text-zinc-50 dark:hover:bg-zinc-800/80",
        link:
          "text-zinc-900 underline-offset-4 hover:underline dark:text-zinc-50",
      },

      size: {
        /* Igual que el <a>: alto = py‑3, ancho relativo = px‑8 */
        tight: "py-2.5 px-4",
        cta:   "py-2.5 px-8",
      },
    },

    /* defaults → justo lo que necesitamos */
    defaultVariants: {
      variant: "primary",
      size: "cta",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        ref={ref}
        className={cn(buttonVariants({ variant, size, className }))}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
