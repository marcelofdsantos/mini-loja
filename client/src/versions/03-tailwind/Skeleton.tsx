interface SkeletonProps {
  className?: string;
}

export function Skeleton({ className = "" }: SkeletonProps) {
  return (
    <div
      className={`bg-gradient-to-r from-card via-border to-card bg-[length:200%_100%] animate-shimmer rounded-md ${className}`}
    ></div>
  );
}

export function ProductCardSkeleton() {
  return (
    <div className="flex flex-col gap-4 p-4 bg-card border border-border rounded-lg">
      <Skeleton className="w-full aspect-square rounded-md" />
      <div className="flex flex-col gap-3">
        <Skeleton className="w-full h-4" />
        <Skeleton className="w-4/5 h-4" />
        <div className="flex justify-between items-center gap-4 mt-2">
          <Skeleton className="w-16 h-6" />
          <Skeleton className="flex-1 h-10" />
        </div>
      </div>
    </div>
  );
}
