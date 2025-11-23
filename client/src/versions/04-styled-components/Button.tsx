import { ReactNode } from "react";
import styled from "styled-components";
import { Theme } from "./theme";

type ButtonVariant = "solid" | "outline" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

const getSizeStyles = (size: ButtonSize, theme: Theme) => {
  switch (size) {
    case "sm":
      return `padding: ${theme.spacing.sm} ${theme.spacing.md}; font-size: 0.875rem;`;
    case "md":
      return `padding: ${theme.spacing.md} ${theme.spacing.lg}; font-size: 1rem;`;
    case "lg":
      return `padding: ${theme.spacing.lg} ${theme.spacing.xl}; font-size: 1.125rem;`;
  }
};

const getVariantStyles = (variant: ButtonVariant, theme: Theme) => {
  switch (variant) {
    case "solid":
      return `
        background-color: ${theme.colors.accent};
        color: ${theme.colors.accentForeground};
        box-shadow: ${theme.shadows.sm};

        &:hover:not(:disabled) {
          opacity: 0.9;
          box-shadow: ${theme.shadows.md};
          transform: translateY(-2px);
        }

        &:focus {
          outline: none;
          box-shadow: 0 0 0 3px ${theme.colors.accent}, ${theme.shadows.md};
        }

        &:active:not(:disabled) {
          transform: translateY(0);
        }
      `;
    case "outline":
      return `
        background-color: transparent;
        color: ${theme.colors.accent};
        border: 2px solid ${theme.colors.accent};

        &:hover:not(:disabled) {
          background-color: ${theme.colors.accent};
          color: ${theme.colors.accentForeground};
          box-shadow: ${theme.shadows.md};
          transform: translateY(-2px);
        }

        &:focus {
          outline: none;
          box-shadow: 0 0 0 3px ${theme.colors.accent}, ${theme.shadows.md};
        }

        &:active:not(:disabled) {
          transform: translateY(0);
        }
      `;
    case "ghost":
      return `
        background-color: transparent;
        color: ${theme.colors.foreground};
        border: 1px solid transparent;

        &:hover:not(:disabled) {
          background-color: ${theme.colors.card};
          border-color: ${theme.colors.border};
          box-shadow: ${theme.shadows.sm};
          transform: translateY(-1px);
        }

        &:focus {
          outline: none;
          box-shadow: 0 0 0 3px ${theme.colors.accent}, ${theme.shadows.sm};
        }

        &:active:not(:disabled) {
          transform: translateY(0);
        }
      `;
  }
};

const BaseButton = styled.button<{ theme: Theme; $variant: ButtonVariant; $size: ButtonSize }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${(props) => props.theme.spacing.sm};
  font-weight: 600;
  border: none;
  border-radius: ${(props) => props.theme.radius.md};
  cursor: pointer;
  transition: all ${(props) => props.theme.transitions.base};
  font-family: inherit;
  position: relative;
  overflow: hidden;

  ${(props) => getSizeStyles(props.$size, props.theme)}
  ${(props) => getVariantStyles(props.$variant, props.theme)}

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const Spinner = styled.span`
  display: inline-block;
  width: 1em;
  height: 1em;
  border: 2px solid currentColor;
  border-right-color: transparent;
  border-radius: 50%;
  animation: spin 0.6s linear infinite;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;

const SrOnly = styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
`;

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
    <BaseButton
      $variant={variant}
      $size={size}
      disabled={disabled || loading}
      onClick={onClick}
      aria-busy={loading}
      className={className}
    >
      {loading ? (
        <>
          <Spinner></Spinner>
          <SrOnly>Carregando...</SrOnly>
        </>
      ) : (
        children
      )}
    </BaseButton>
  );
}
