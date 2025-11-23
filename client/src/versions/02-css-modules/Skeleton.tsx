import styles from "./styles/skeleton.module.css";

interface SkeletonProps {
  className?: string;
}

export function Skeleton({ className = "" }: SkeletonProps) {
  return <div className={`${styles.skeleton} ${className}`}></div>;
}

export function ProductCardSkeleton() {
  return (
    <div className={styles.productCardSkeleton}>
      <Skeleton className={styles.skeletonImage} />
      <div className={styles.skeletonContent}>
        <Skeleton className={styles.skeletonTitle} />
        <Skeleton className={styles.skeletonTitle} />
        <div className={styles.skeletonFooter}>
          <Skeleton className={styles.skeletonPrice} />
          <Skeleton className={styles.skeletonButton} />
        </div>
      </div>
    </div>
  );
}
