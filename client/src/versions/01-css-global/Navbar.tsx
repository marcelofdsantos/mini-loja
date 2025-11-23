import { Moon, Sun, ShoppingCart } from "lucide-react";
import { ThemeMode } from "@/hooks/useThemeMode";
import "./styles/navbar.css";

interface NavbarProps {
  theme: ThemeMode;
  onThemeToggle: () => void;
  cartCount: number;
}

export function Navbar({ theme, onThemeToggle, cartCount }: NavbarProps) {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <span className="logo-icon">🛍️</span>
          <span className="logo-text">E-Commerce</span>
        </div>

        <div className="navbar-actions">
          <button
            className="theme-toggle"
            onClick={onThemeToggle}
            aria-label={`Mudar para tema ${theme === "light" ? "escuro" : "claro"}`}
            title={`Tema ${theme === "light" ? "escuro" : "claro"}`}
          >
            {theme === "light" ? (
              <Moon size={20} />
            ) : (
              <Sun size={20} />
            )}
          </button>

          <button
            className="cart-button"
            aria-label={`Carrinho com ${cartCount} itens`}
            title={`Carrinho (${cartCount})`}
          >
            <ShoppingCart size={20} />
            {cartCount > 0 && (
              <span className="cart-badge" aria-label={`${cartCount} itens no carrinho`}>
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}
