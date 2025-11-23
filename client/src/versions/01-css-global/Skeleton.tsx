import "./styles/skeleton.css";

interface SkeletonProps {
  className?: string;
}

export function Skeleton({ className = "" }: SkeletonProps) {
  return <div className={`skeleton ${className}`}></div>;
}

export function ProductCardSkeleton() {
  return (
    <div className="product-card-skeleton">
      <Skeleton className="skeleton-image" />
      <div className="skeleton-content">
        <Skeleton className="skeleton-title" />
        <Skeleton className="skeleton-title" />
        <div className="skeleton-footer">
          <Skeleton className="skeleton-price" />
          <Skeleton className="skeleton-button" />
        </div>
      </div>
    </div>
  );
}
