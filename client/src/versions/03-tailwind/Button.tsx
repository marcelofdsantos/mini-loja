import { ReactNode } from "react";

type ButtonVariant = "solid" | "outline" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  disabled?: boolean;
  loading?: boolean;
  onClick?: () => void;
  className?: string;
}

const variantClasses = {
  solid: "bg-accent text-accent-foreground shadow-sm hover:opacity-90 hover:shadow-md hover:-translate-y-0.5 focus:outline-none focus:shadow-[0_0_0_3px_var(--color-accent),var(--shadow-md)] active:translate-y-0",
  outline: "bg-transparent text-accent border-2 border-accent hover:bg-accent hover:text-accent-foreground hover:shadow-md hover:-translate-y-0.5 focus:outline-none focus:shadow-[0_0_0_3px_var(--color-accent),var(--shadow-md)] active:translate-y-0",
  ghost: "bg-transparent text-foreground border border-transparent hover:bg-card hover:border-border hover:shadow-sm hover:-translate-y-0.25 focus:outline-none focus:shadow-[0_0_0_3px_var(--color-accent),var(--shadow-sm)] active:translate-y-0",
};

const sizeClasses = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

export function Button({
  children,
  variant = "solid",
  size = "md",
  disabled = false,
  loading = false,
  onClick,
  className = "",
}: ButtonProps) {
  const baseClasses = "inline-flex items-center justify-center gap-2 font-semibold border-none rounded-md cursor-pointer transition-all duration-200 font-inherit relative overflow-hidden";
  const variantClass = variantClasses[variant];
  const sizeClass = sizeClasses[size];
  const disabledClass = (disabled || loading) ? "opacity-50 cursor-not-allowed" : "";

  return (
    <button
      className={`${baseClasses} ${variantClass} ${sizeClass} ${disabledClass} ${className}`}
      disabled={disabled || loading}
      onClick={onClick}
      aria-busy={loading}
    >
      {loading ? (
        <>
          <span className="inline-block w-[1em] h-[1em] border-2 border-current border-r-transparent rounded-full animate-spin"></span>
          <span className="sr-only">Carregando...</span>
        </>
      ) : (
        children
      )}
    </button>
  );
}
