import { useState, useEffect } from "react";
import { Moon, Sun, ShoppingCart } from "lucide-react";
import { Tabs, TabItem } from "@/components/Tabs";
import { CSSGlobalPage } from "@/versions/01-css-global/Page";
import { CSSModulesPage } from "@/versions/02-css-modules/Page";
import { TailwindPage } from "@/versions/03-tailwind/Page";
import { StyledComponentsPage } from "@/versions/04-styled-components/Page";
import { useThemeMode } from "@/hooks/useThemeMode";

export default function UnifiedStore() {
  const { theme, toggleTheme, isLoaded } = useThemeMode();
  const [cartCount, setCartCount] = useState(0);

  if (!isLoaded) {
    return null;
  }

  const tabs: TabItem[] = [
    {
      id: "css-global",
      label: "CSS Global",
      content: <CSSGlobalPage />,
    },
    {
      id: "css-modules",
      label: "CSS Modules",
      content: <CSSModulesPage />,
    },
    {
      id: "tailwind",
      label: "Tailwind CSS",
      content: <TailwindPage />,
    },
    {
      id: "styled-components",
      label: "styled-components",
      content: <StyledComponentsPage />,
    },
  ];

  return (
    <div className="bg-background text-foreground transition-colors duration-200 min-h-screen">
      {/* Global Navbar */}
      <nav className="sticky top-0 z-50 bg-card border-b border-border shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <span className="text-3xl">🛍️</span>
            <div>
              <h1 className="text-xl font-bold text-foreground">
                E-commerce Store
              </h1>
              <p className="text-xs text-muted">4 Técnicas de Estilização CSS</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button
              className="flex items-center justify-center w-10 h-10 bg-background border-2 border-border rounded-md text-foreground cursor-pointer transition-all duration-200 hover:bg-card hover:border-accent hover:text-accent hover:shadow-md focus:outline-none focus:shadow-[0_0_0_3px_var(--color-accent)]"
              onClick={toggleTheme}
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
              className="relative flex items-center justify-center w-10 h-10 bg-background border-2 border-border rounded-md text-foreground cursor-pointer transition-all duration-200 hover:bg-card hover:border-accent hover:text-accent hover:shadow-md focus:outline-none focus:shadow-[0_0_0_3px_var(--color-accent)]"
              aria-label={`Carrinho com ${cartCount} itens`}
              title={`Carrinho (${cartCount})`}
            >
              <ShoppingCart size={20} />
              {cartCount > 0 && (
                <span className="absolute top-[-0.5rem] right-[-0.5rem] flex items-center justify-center min-w-6 h-6 bg-accent text-accent-foreground rounded-full text-xs font-bold">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Tabs */}
      <div className="max-w-7xl mx-auto">
        <Tabs tabs={tabs} defaultTabId="css-global" />
      </div>
    </div>
  );
}
