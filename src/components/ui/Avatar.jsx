import React from "react";
import { cn } from "../../lib/utils";

const Avatar = ({ src, fallback, size = "md", className }) => {
  const sizes = {
    sm: "w-8 h-8 text-xs",
    md: "w-10 h-10 text-sm",
    lg: "w-14 h-14 text-base",
  };

  return (
    <div
      className={cn(
        "relative flex shrink-0 overflow-hidden rounded-full border border-white/10 bg-white/5",
        sizes[size],
        className
      )}
    >
      {src ? (
        <img src={src} alt="Avatar" className="aspect-square h-full w-full object-cover" />
      ) : (
        <div className="flex h-full w-full items-center justify-center font-semibold text-text-secondary uppercase">
          {fallback?.slice(0, 2) || "U"}
        </div>
      )}
    </div>
  );
};

export default Avatar;
