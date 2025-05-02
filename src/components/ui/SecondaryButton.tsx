import * as React from "react";
import { Button, type ButtonProps } from "@/components/ui/button";

export const SecondaryButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, size = "cta", asChild, ...props }, ref) => (
    <Button
      ref={ref}
      variant="secondaryDark"
      size={size}
      asChild={asChild}
      {...props}
    >
      {children}
    </Button>
  )
);
SecondaryButton.displayName = "SecondaryButton";
