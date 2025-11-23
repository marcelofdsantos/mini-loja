import { Moon, Sun, ShoppingCart } from "lucide-react";
import { ThemeMode } from "@/hooks/useThemeMode";
import styles from "./styles/navbar.module.css";

interface NavbarProps {
  theme: ThemeMode;
  onThemeToggle: () => void;
  cartCount: number;
}

export function Navbar({ theme, onThemeToggle, cartCount }: NavbarProps) {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarContainer}>
        <div className={styles.navbarLogo}>
          <span className={styles.logoIcon}>🛍️</span>
          <span className={styles.logoText}>E-Commerce</span>
        </div>

        <div className={styles.navbarActions}>
          <button
            className={styles.themeToggle}
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
            className={styles.cartButton}
            aria-label={`Carrinho com ${cartCount} itens`}
            title={`Carrinho (${cartCount})`}
          >
            <ShoppingCart size={20} />
            {cartCount > 0 && (
              <span className={styles.cartBadge} aria-label={`${cartCount} itens no carrinho`}>
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}
