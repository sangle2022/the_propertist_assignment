import type { ReactElement } from 'react';
import { Skeleton } from './Skeleton';

export function SkeletonPropertyCard(): ReactElement {
  return (
    <article className="rounded-2xl bg-white shadow-card">
      <Skeleton className="aspect-[4/3] w-full rounded-none rounded-t-2xl" />
      <div className="space-y-3 p-5">
        <Skeleton className="h-4 w-2/3" />
        <Skeleton className="h-3 w-full" />
        <Skeleton className="h-6 w-1/2" />
        <div className="flex gap-3">
          <Skeleton className="h-3 w-20" />
          <Skeleton className="h-3 w-24" />
        </div>
      </div>
    </article>
  );
}
