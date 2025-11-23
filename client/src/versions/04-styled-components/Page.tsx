import { useState, useEffect } from "react";
import styled, { ThemeProvider } from "styled-components";
import { products, Product } from "@/data/products";
import { useThemeMode } from "@/hooks/useThemeMode";
import { Navbar } from "./Navbar";
import { ProductCard } from "./ProductCard";
import { ProductCardSkeleton } from "./Skeleton";
import { lightTheme, darkTheme, Theme } from "./theme";

const PageWrapper = styled.div<{ theme: Theme }>`
  background-color: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.foreground};
  transition: background-color ${(props) => props.theme.transitions.base},
    color ${(props) => props.theme.transitions.base};
  min-height: 100vh;
`;

const MainContent = styled.main<{ theme: Theme }>`
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem 1rem;
  padding-top: 7rem;
`;

const PageHeader = styled.div`
  margin-bottom: 2rem;
  text-align: center;

  h1 {
    margin: 0 0 0.5rem 0;
    font-size: 2rem;
    font-weight: 700;
  }

  p {
    margin: 0;
    font-size: 1.125rem;
    color: var(--color-muted);
  }
`;

const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  margin-top: 2rem;

  @media (min-width: 481px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 769px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 1025px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export function StyledComponentsPage() {
  const { theme, toggleTheme, isLoaded } = useThemeMode();
  const [cartCount, setCartCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [loadingProductId, setLoadingProductId] = useState<string | null>(null);

  const currentTheme = theme === "light" ? lightTheme : darkTheme;

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const handleAddToCart = (product: Product) => {
    setLoadingProductId(product.id);
    setTimeout(() => {
      setCartCount((prev) => prev + 1);
      setLoadingProductId(null);
    }, 800);
  };

  if (!isLoaded) {
    return null;
  }

  return (
    <ThemeProvider theme={currentTheme}>
      <PageWrapper>
        <Navbar theme={theme} onThemeToggle={toggleTheme} cartCount={cartCount} />

        <MainContent>
          <PageHeader>
            <h1>styled-components</h1>
            <p>Versão 4: Estilização com styled-components</p>
          </PageHeader>

          <ProductsGrid>
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
          </ProductsGrid>
        </MainContent>
      </PageWrapper>
    </ThemeProvider>
  );
}
