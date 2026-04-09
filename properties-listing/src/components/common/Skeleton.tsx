import type { ReactElement } from 'react';

interface SkeletonProps {
  className?: string;
}

export function Skeleton({ className = '' }: SkeletonProps): ReactElement {
  return (
    <div
      className={`animate-pulse rounded-lg bg-zinc-200/90 ${className}`}
      aria-hidden
    />
  );
}
