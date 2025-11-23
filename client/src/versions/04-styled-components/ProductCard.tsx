import styled from "styled-components";
import { Star } from "lucide-react";
import { Product } from "@/data/products";
import { Button } from "./Button";
import { Theme } from "./theme";

const ProductCardWrapper = styled.article<{ theme: Theme }>`
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: ${(props) => props.theme.colors.card};
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: ${(props) => props.theme.radius.lg};
  overflow: hidden;
  transition: all ${(props) => props.theme.transitions.base};

  &:hover {
    box-shadow: ${(props) => props.theme.shadows.lg};
    transform: translateY(-4px);
    border-color: ${(props) => props.theme.colors.accent};
  }

  &:focus-within {
    outline: 2px solid ${(props) => props.theme.colors.accent};
    outline-offset: 2px;
  }
`;

const ProductImageContainer = styled.div<{ theme: Theme }>`
  position: relative;
  width: 100%;
  aspect-ratio: 1;
  overflow: hidden;
  background-color: ${(props) => props.theme.colors.background};
`;

const ProductImage = styled.img<{ theme: Theme }>`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform ${(props) => props.theme.transitions.slow};

  ${ProductCardWrapper}:hover & {
    transform: scale(1.05);
  }
`;

const ProductTag = styled.span<{ theme: Theme; $tagType: string }>`
  position: absolute;
  top: 0.75rem;
  right: 0.75rem;
  padding: 0.375rem 0.75rem;
  border-radius: ${(props) => props.theme.radius.sm};
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  animation: slideIn 200ms ease-in-out;
  background-color: ${(props) => (props.$tagType === "novo" ? "#10b981" : "#f59e0b")};
  color: white;

  @keyframes slideIn {
    from {
      transform: translateX(100%);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
`;

const ProductContent = styled.div<{ theme: Theme }>`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: ${(props) => props.theme.spacing.md};
  gap: 0.75rem;
`;

const ProductTitle = styled.h3<{ theme: Theme }>`
  font-size: 1rem;
  font-weight: 600;
  color: ${(props) => props.theme.colors.foreground};
  margin: 0;
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  min-height: 2.8em;
`;

const ProductRating = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const RatingStars = styled.div`
  display: flex;
  gap: 0.25rem;
`;

const StarIcon = styled(Star)<{ $filled: boolean }>`
  color: ${(props) => (props.$filled ? "#fbbf24" : "var(--color-border)")};
  fill: ${(props) => (props.$filled ? "#fbbf24" : "var(--color-border)")};
`;

const RatingValue = styled.span<{ theme: Theme }>`
  font-size: 0.875rem;
  color: ${(props) => props.theme.colors.muted};
  font-weight: 600;
`;

const ProductFooter = styled.div<{ theme: Theme }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${(props) => props.theme.spacing.lg};
  margin-top: auto;
  padding-top: 0.75rem;
  border-top: 1px solid ${(props) => props.theme.colors.border};
`;

const ProductPrice = styled.span<{ theme: Theme }>`
  font-size: 1.25rem;
  font-weight: 700;
  color: ${(props) => props.theme.colors.accent};
`;

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
  loading?: boolean;
}

export function ProductCard({
  product,
  onAddToCart,
  loading = false,
}: ProductCardProps) {
  const handleAddClick = () => {
    onAddToCart(product);
  };

  return (
    <ProductCardWrapper>
      <ProductImageContainer>
        <ProductImage
          src={product.image}
          alt={product.title}
          loading="lazy"
        />
        {product.tag && (
          <ProductTag $tagType={product.tag.toLowerCase()}>
            {product.tag}
          </ProductTag>
        )}
      </ProductImageContainer>

      <ProductContent>
        <ProductTitle>{product.title}</ProductTitle>

        <ProductRating>
          <RatingStars>
            {[...Array(5)].map((_, i) => (
              <StarIcon
                key={i}
                size={16}
                $filled={i < Math.floor(product.rating)}
              />
            ))}
          </RatingStars>
          <RatingValue>{product.rating}</RatingValue>
        </ProductRating>

        <ProductFooter>
          <ProductPrice>
            {new Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
            }).format(product.price)}
          </ProductPrice>
          <Button
            variant="solid"
            size="md"
            onClick={handleAddClick}
            loading={loading}
          >
            Adicionar
          </Button>
        </ProductFooter>
      </ProductContent>
    </ProductCardWrapper>
  );
}
