import { ReactNode } from "react";
import styles from "./styles/button.module.css";

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
  const buttonClass = [
    styles.button,
    styles[`button${variant.charAt(0).toUpperCase()}${variant.slice(1)}`],
    styles[`button${size.charAt(0).toUpperCase()}${size.slice(1)}`],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button
      className={buttonClass}
      disabled={disabled || loading}
      onClick={onClick}
      aria-busy={loading}
    >
      {loading ? (
        <>
          <span className={styles.spinner}></span>
          <span className={styles.srOnly}>Carregando...</span>
        </>
      ) : (
        children
      )}
    </button>
  );
}
