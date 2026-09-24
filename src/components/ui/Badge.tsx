import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "accent" | "outline" | "subtle";
  className?: string;
}

export function Badge({
  children,
  variant = "default",
  className = "",
}: BadgeProps) {
  const baseStyles =
    "inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-mono font-medium rounded-md transition-all duration-150 cursor-default hover:scale-103";

  const variants = {
    default:
      "bg-slate-100 dark:bg-slate-800/90 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700/60 hover:border-slate-300 dark:hover:border-slate-600 hover:bg-slate-200/70 dark:hover:bg-slate-800",
    accent:
      "bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-900/50 hover:border-blue-300 dark:hover:border-blue-800 hover:bg-blue-100/60 dark:hover:bg-blue-900/40",
    outline:
      "bg-transparent text-slate-700 dark:text-slate-300 border border-slate-300 dark:border-slate-700 hover:border-slate-400 dark:hover:border-slate-600",
    subtle:
      "bg-slate-100/60 dark:bg-slate-800/40 text-slate-600 dark:text-slate-400 border border-transparent hover:bg-slate-100 dark:hover:bg-slate-800/80",
  };

  return (
    <span className={`${baseStyles} ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
}
