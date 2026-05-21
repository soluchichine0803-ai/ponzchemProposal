import React from "react";
import { cn } from "../../lib/utils";

const Badge = ({ className, variant = "info", children, ...props }) => {
  const variants = {
    success: "bg-status-success/20 text-status-success border-status-success/30",
    pending: "bg-status-pending/20 text-status-pending border-status-pending/30",
    failed: "bg-status-failed/20 text-status-failed border-status-failed/30",
    info: "bg-status-info/20 text-status-info border-status-info/30",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
};

export default Badge;
