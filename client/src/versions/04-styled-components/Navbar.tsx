import styled from "styled-components";
import { Moon, Sun, ShoppingCart } from "lucide-react";
import { Theme } from "./theme";
import { ThemeMode } from "@/hooks/useThemeMode";

const NavbarWrapper = styled.nav<{ theme: Theme }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background-color: ${(props) => props.theme.colors.background};
  border-bottom: 1px solid ${(props) => props.theme.colors.border};
  box-shadow: ${(props) => props.theme.shadows.sm};
  transition: background-color ${(props) => props.theme.transitions.base},
    border-color ${(props) => props.theme.transitions.base};
`;

const NavbarContainer = styled.div<{ theme: Theme }>`
  max-width: 1280px;
  margin: 0 auto;
  padding: ${(props) => props.theme.spacing.md};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavbarLogo = styled.div<{ theme: Theme }>`
  display: flex;
  align-items: center;
  gap: ${(props) => props.theme.spacing.lg};
  font-weight: 700;
  font-size: 1.25rem;
  color: ${(props) => props.theme.colors.foreground};
  transition: color ${(props) => props.theme.transitions.base};
`;

const LogoIcon = styled.span`
  font-size: 1.75rem;
`;

const LogoText = styled.span`
  display: none;

  @media (min-width: 768px) {
    display: inline;
  }
`;

const NavbarActions = styled.div<{ theme: Theme }>`
  display: flex;
  align-items: center;
  gap: ${(props) => props.theme.spacing.lg};
`;

const IconButton = styled.button<{ theme: Theme }>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  background-color: transparent;
  border: 2px solid ${(props) => props.theme.colors.border};
  border-radius: ${(props) => props.theme.radius.md};
  color: ${(props) => props.theme.colors.foreground};
  cursor: pointer;
  transition: all ${(props) => props.theme.transitions.base};
  font-size: 1rem;

  &:hover {
    background-color: ${(props) => props.theme.colors.card};
    border-color: ${(props) => props.theme.colors.accent};
    color: ${(props) => props.theme.colors.accent};
    box-shadow: ${(props) => props.theme.shadows.md};
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px ${(props) => props.theme.colors.accent},
      ${(props) => props.theme.shadows.md};
  }

  &:active {
    transform: scale(0.95);
  }
`;

const CartBadge = styled.span<{ theme: Theme }>`
  position: absolute;
  top: -0.5rem;
  right: -0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 1.5rem;
  height: 1.5rem;
  background-color: ${(props) => props.theme.colors.accent};
  color: ${(props) => props.theme.colors.accentForeground};
  border-radius: 50%;
  font-size: 0.75rem;
  font-weight: 700;
  animation: badgePulse 200ms ease-in-out;

  @keyframes badgePulse {
    0% {
      transform: scale(0.8);
      opacity: 0;
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
  }
`;

interface NavbarProps {
  theme: ThemeMode;
  onThemeToggle: () => void;
  cartCount: number;
}

export function Navbar({ theme, onThemeToggle, cartCount }: NavbarProps) {
  return (
    <NavbarWrapper>
      <NavbarContainer>
        <NavbarLogo>
          <LogoIcon>🛍️</LogoIcon>
          <LogoText>E-Commerce</LogoText>
        </NavbarLogo>

        <NavbarActions>
          <IconButton
            onClick={onThemeToggle}
            aria-label={`Mudar para tema ${theme === "light" ? "escuro" : "claro"}`}
            title={`Tema ${theme === "light" ? "escuro" : "claro"}`}
          >
            {theme === "light" ? (
              <Moon size={20} />
            ) : (
              <Sun size={20} />
            )}
          </IconButton>

          <IconButton
            aria-label={`Carrinho com ${cartCount} itens`}
            title={`Carrinho (${cartCount})`}
          >
            <ShoppingCart size={20} />
            {cartCount > 0 && (
              <CartBadge aria-label={`${cartCount} itens no carrinho`}>
                {cartCount}
              </CartBadge>
            )}
          </IconButton>
        </NavbarActions>
      </NavbarContainer>
    </NavbarWrapper>
  );
}
