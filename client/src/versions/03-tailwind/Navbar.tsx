import { Moon, Sun, ShoppingCart } from "lucide-react";
import { ThemeMode } from "@/hooks/useThemeMode";

interface NavbarProps {
  theme: ThemeMode;
  onThemeToggle: () => void;
  cartCount: number;
}

export function Navbar({ theme, onThemeToggle, cartCount }: NavbarProps) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-1000 bg-background border-b border-border shadow-sm transition-colors duration-200">
      <div className="max-w-5xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3 font-bold text-xl text-foreground transition-colors duration-200">
          <span className="text-2xl">🛍️</span>
          <span className="hidden md:inline">E-Commerce</span>
        </div>

        <div className="flex items-center gap-4">
          <button
            className="relative flex items-center justify-center w-10 h-10 bg-transparent border-2 border-border rounded-md text-foreground cursor-pointer transition-all duration-200 hover:bg-card hover:border-accent hover:text-accent hover:shadow-md focus:outline-none focus:shadow-[0_0_0_3px_var(--color-accent),var(--shadow-md)] active:scale-95"
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
            className="relative flex items-center justify-center w-10 h-10 bg-transparent border-2 border-border rounded-md text-foreground cursor-pointer transition-all duration-200 hover:bg-card hover:border-accent hover:text-accent hover:shadow-md focus:outline-none focus:shadow-[0_0_0_3px_var(--color-accent),var(--shadow-md)] active:scale-95"
            aria-label={`Carrinho com ${cartCount} itens`}
            title={`Carrinho (${cartCount})`}
          >
            <ShoppingCart size={20} />
            {cartCount > 0 && (
              <span className="absolute top-[-0.5rem] right-[-0.5rem] flex items-center justify-center min-w-6 h-6 bg-accent text-accent-foreground rounded-full text-xs font-bold animate-[badgePulse_200ms_ease-in-out]" aria-label={`${cartCount} itens no carrinho`}>
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}
