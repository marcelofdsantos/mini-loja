import { useState, useEffect } from "react";
import { products, Product } from "@/data/products";
import { useThemeMode } from "@/hooks/useThemeMode";
import { Navbar } from "./Navbar";
import { ProductCard } from "./ProductCard";
import { ProductCardSkeleton } from "./Skeleton";

export function TailwindPage() {
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
    <div className="bg-background text-foreground transition-colors duration-200 min-h-screen">
      <Navbar theme={theme} onThemeToggle={toggleTheme} cartCount={cartCount} />

      <main className="max-w-5xl mx-auto px-4 py-8 pt-28">
        <div className="mb-8 text-center">
          <h1 className="m-0 mb-2 text-4xl font-bold">Tailwind CSS</h1>
          <p className="m-0 text-lg text-muted">Versão 3: Estilização com Tailwind CSS</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
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
