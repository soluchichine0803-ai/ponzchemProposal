import React from "react";
import { cn } from "../../lib/utils";

const Input = React.forwardRef(({ className, label, error, icon: Icon, ...props }, ref) => {
  return (
    <div className="w-full space-y-1.5">
      {label && <label className="text-sm font-medium text-text-secondary">{label}</label>}
      <div className="relative group">
        {Icon && (
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted group-focus-within:text-accent-blue transition-colors">
            <Icon size={18} />
          </div>
        )}
        <input
          ref={ref}
          className={cn(
            "w-full bg-background-slate border border-white/10 rounded-lg py-2 transition-all outline-none",
            "focus:border-accent-blue/50 focus:ring-1 focus:ring-accent-blue/50",
            Icon ? "pl-10 pr-4" : "px-4",
            error && "border-status-failed focus:ring-status-failed/50",
            className
          )}
          {...props}
        />
      </div>
      {error && <p className="text-xs text-status-failed mt-1">{error}</p>}
    </div>
  );
});

Input.displayName = "Input";

export default Input;
