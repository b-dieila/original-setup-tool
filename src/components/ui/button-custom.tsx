
import * as React from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

export interface ButtonCustomProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost" | "link" | "primary" | "secondary";
  size?: "default" | "sm" | "lg" | "icon";
  children: React.ReactNode;
  asChild?: boolean;
}

const ButtonCustom = React.forwardRef<HTMLButtonElement, ButtonCustomProps>(
  ({ className, variant = "default", size = "default", children, ...props }, ref) => {
    const getVariantClasses = () => {
      switch (variant) {
        case "primary":
          return "bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300";
        case "secondary":
          return "bg-secondary text-secondary-foreground hover:bg-secondary/80 hover:scale-[1.02] transition-all duration-300";
        default:
          return "";
      }
    };

    return (
      <Button
        ref={ref}
        variant={["primary", "secondary"].includes(variant) ? "default" : variant}
        size={size}
        className={cn(getVariantClasses(), className)}
        {...props}
      >
        {children}
      </Button>
    );
  }
);

ButtonCustom.displayName = "ButtonCustom";

export { ButtonCustom };
