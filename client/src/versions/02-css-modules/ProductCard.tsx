import { Star } from "lucide-react";
import { Product } from "@/data/products";
import { Button } from "./Button";
import styles from "./styles/product-card.module.css";

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

  const tagClass = product.tag
    ? `${styles.productTag} ${styles[`productTag${product.tag.toLowerCase()}`]}`
    : "";

  return (
    <article className={styles.productCard}>
      <div className={styles.productImageContainer}>
        <img
          src={product.image}
          alt={product.title}
          className={styles.productImage}
          loading="lazy"
        />
        {product.tag && <span className={tagClass}>{product.tag}</span>}
      </div>

      <div className={styles.productContent}>
        <h3 className={styles.productTitle}>{product.title}</h3>

        <div className={styles.productRating}>
          <div className={styles.ratingStars}>
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={16}
                className={
                  i < Math.floor(product.rating)
                    ? styles.starFilled
                    : styles.starEmpty
                }
              />
            ))}
          </div>
          <span className={styles.ratingValue}>{product.rating}</span>
        </div>

        <div className={styles.productFooter}>
          <span className={styles.productPrice}>
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
            className={styles.addToCartBtn}
          >
            Adicionar
          </Button>
        </div>
      </div>
    </article>
  );
}
