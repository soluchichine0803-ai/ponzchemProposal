import React from "react";
import { cn } from "../../lib/utils";

const Button = React.forwardRef(({ className, variant = "primary", size = "md", ...props }, ref) => {
  const variants = {
    primary: "bg-accent-blue text-white hover:bg-accent-blue/90 glow-blue",
    secondary: "bg-background-slate text-text-primary border border-white/10 hover:bg-white/5",
    ghost: "bg-transparent text-text-primary hover:bg-white/5",
    danger: "bg-status-failed text-white hover:bg-status-failed/90",
  };

  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2",
    lg: "px-6 py-3 text-lg font-semibold",
  };

  return (
    <button
      ref={ref}
      className={cn(
        "inline-flex items-center justify-center rounded-lg transition-all active:scale-95 disabled:opacity-50 disabled:pointer-events-none",
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    />
  );
});

Button.displayName = "Button";

export default Button;
