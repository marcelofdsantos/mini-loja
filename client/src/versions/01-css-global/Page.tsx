import { useState, useEffect } from "react";
import { products, Product } from "@/data/products";
import { useThemeMode } from "@/hooks/useThemeMode";
import { Navbar } from "./Navbar";
import { ProductCard } from "./ProductCard";
import { ProductCardSkeleton } from "./Skeleton";
import "./styles/page.css";

export function CSSGlobalPage() {
  const { theme, toggleTheme, isLoaded } = useThemeMode();
  const [cartCount, setCartCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [loadingProductId, setLoadingProductId] = useState<string | null>(null);

  useEffect(() => {
    // Simular carregamento inicial
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const handleAddToCart = (product: Product) => {
    setLoadingProductId(product.id);
    // Simular delay de adição ao carrinho
    setTimeout(() => {
      setCartCount((prev) => prev + 1);
      setLoadingProductId(null);
    }, 800);
  };

  if (!isLoaded) {
    return null;
  }

  return (
    <div className="css-global-page">
      <Navbar theme={theme} onThemeToggle={toggleTheme} cartCount={cartCount} />

      <main className="main-content">
        <div className="page-header">
          <h1>CSS Global</h1>
          <p>Versão 1: Estilização com CSS Global</p>
        </div>

        <div className="products-grid">
          {isLoading
            ? Array.from({ length: 6 }).map((_, i) => (
                <ProductCardSkeleton key={i} />
              ))
            : products.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onAddToCart={handleAddToCart}
                  loading={loadingProductId === product.id}
                />
              ))}
        </div>
      </main>
    </div>
  );
}
