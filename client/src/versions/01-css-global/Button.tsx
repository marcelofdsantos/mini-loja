import { ReactNode } from "react";
import "./styles/button.css";

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

export function Button({
  children,
  variant = "solid",
  size = "md",
  disabled = false,
  loading = false,
  onClick,
  className = "",
}: ButtonProps) {
  return (
    <button
      className={`button button-${variant} button-${size} ${className}`}
      disabled={disabled || loading}
      onClick={onClick}
      aria-busy={loading}
    >
      {loading ? (
        <>
          <span className="spinner"></span>
          <span className="sr-only">Carregando...</span>
        </>
      ) : (
        children
      )}
    </button>
  );
}
