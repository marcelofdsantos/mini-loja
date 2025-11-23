import { Star } from "lucide-react";
import { Product } from "@/data/products";
import { Button } from "./Button";

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

  const tagColor = product.tag === "Novo" ? "bg-green-500" : "bg-amber-500";

  return (
    <article className="flex flex-col h-full bg-card border border-border rounded-lg overflow-hidden transition-all duration-200 hover:shadow-lg hover:-translate-y-1 hover:border-accent focus-within:outline focus-within:outline-2 focus-within:outline-accent focus-within:outline-offset-2">
      <div className="relative w-full aspect-square overflow-hidden bg-background">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-cover transition-transform duration-250 group-hover:scale-105"
          loading="lazy"
        />
        {product.tag && (
          <span className={`absolute top-3 right-3 px-3 py-1.5 rounded-sm text-xs font-bold text-white uppercase tracking-wider ${tagColor} animate-[slideIn_200ms_ease-in-out]`}>
            {product.tag}
          </span>
        )}
      </div>

      <div className="flex flex-col flex-1 p-4 gap-3">
        <h3 className="text-base font-semibold text-foreground m-0 leading-snug line-clamp-2 min-h-[2.8em]">
          {product.title}
        </h3>

        <div className="flex items-center gap-2">
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={16}
                className={
                  i < Math.floor(product.rating)
                    ? "text-amber-400 fill-amber-400"
                    : "text-border fill-border"
                }
              />
            ))}
          </div>
          <span className="text-sm text-muted font-semibold">{product.rating}</span>
        </div>

        <div className="flex justify-between items-center gap-4 mt-auto pt-3 border-t border-border">
          <span className="text-xl font-bold text-accent">
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
            className="flex-1"
          >
            Adicionar
          </Button>
        </div>
      </div>
    </article>
  );
}
