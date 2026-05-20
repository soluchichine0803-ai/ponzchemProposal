import React from "react";
import { cn } from "../../lib/utils";

const Card = ({ className, children, glow = false, gradient = false, ...props }) => {
  return (
    <div
      className={cn(
        "glass rounded-2xl p-6 transition-all",
        glow && "glow-blue",
        gradient && "bg-gradient-to-br from-white/10 to-transparent",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
