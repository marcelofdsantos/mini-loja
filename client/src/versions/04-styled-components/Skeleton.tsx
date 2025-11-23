import styled, { keyframes } from "styled-components";
import { Theme } from "./theme";

const shimmer = keyframes`
  0% {
    background-position: 200% 0;
  }
  100% {
    background-position: -200% 0;
  }
`;

const SkeletonBase = styled.div<{ theme: Theme }>`
  background: linear-gradient(
    90deg,
    ${(props) => props.theme.colors.card} 25%,
    ${(props) => props.theme.colors.border} 50%,
    ${(props) => props.theme.colors.card} 75%
  );
  background-size: 200% 100%;
  animation: ${shimmer} 2s infinite;
  border-radius: ${(props) => props.theme.radius.md};
`;

interface SkeletonProps {
  className?: string;
}

export function Skeleton({ className = "" }: SkeletonProps) {
  return <SkeletonBase className={className}></SkeletonBase>;
}

const ProductCardSkeletonWrapper = styled.div<{ theme: Theme }>`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.spacing.lg};
  padding: ${(props) => props.theme.spacing.md};
  background-color: ${(props) => props.theme.colors.card};
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: ${(props) => props.theme.radius.lg};
`;

const SkeletonImage = styled(SkeletonBase)`
  width: 100%;
  aspect-ratio: 1;
`;

const SkeletonContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const SkeletonTitle = styled(SkeletonBase)`
  width: 100%;
  height: 1rem;

  &:last-of-type {
    width: 80%;
  }
`;

const SkeletonFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  margin-top: 0.5rem;
`;

const SkeletonPrice = styled(SkeletonBase)`
  width: 4rem;
  height: 1.5rem;
`;

const SkeletonButton = styled(SkeletonBase)`
  flex: 1;
  height: 2.5rem;
`;

export function ProductCardSkeleton() {
  return (
    <ProductCardSkeletonWrapper>
      <SkeletonImage />
      <SkeletonContent>
        <SkeletonTitle />
        <SkeletonTitle />
        <SkeletonFooter>
          <SkeletonPrice />
          <SkeletonButton />
        </SkeletonFooter>
      </SkeletonContent>
    </ProductCardSkeletonWrapper>
  );
}
