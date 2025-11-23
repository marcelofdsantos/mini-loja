import { Star } from "lucide-react";
import { Product } from "@/data/products";
import { Button } from "./Button";
import "./styles/product-card.css";

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
    <article className="product-card">
      <div className="product-image-container">
        <img
          src={product.image}
          alt={product.title}
          className="product-image"
          loading="lazy"
        />
        {product.tag && (
          <span className={`product-tag product-tag-${product.tag.toLowerCase()}`}>
            {product.tag}
          </span>
        )}
      </div>

      <div className="product-content">
        <h3 className="product-title">{product.title}</h3>

        <div className="product-rating">
          <div className="rating-stars">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={16}
                className={i < Math.floor(product.rating) ? "star-filled" : "star-empty"}
              />
            ))}
          </div>
          <span className="rating-value">{product.rating}</span>
        </div>

        <div className="product-footer">
          <span className="product-price">
            {new Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
            }).format(product.price)}
          </span>
          <Button
            variant="solid"
            size="md"
            onClick={handleAddClick}
            loading={loading}
            className="add-to-cart-btn"
          >
            Adicionar
          </Button>
        </div>
      </div>
    </article>
  );
}
