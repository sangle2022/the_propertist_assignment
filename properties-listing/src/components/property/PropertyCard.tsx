import type { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import type { Property } from '../../types';

interface PropertyCardProps {
  property: Property;
}

export function PropertyCard({ property }: PropertyCardProps): ReactElement {
  return (
    <article className="group relative z-0 overflow-hidden rounded-2xl shadow-card ring-1 ring-zinc-100 transition-transform duration-300 ease-out will-change-transform hover:z-10 hover:-translate-y-1 hover:shadow-xl">
      <Link
        to={`/property/${property.id}`}
        className="block overflow-hidden rounded-2xl bg-white outline-none focus-visible:ring-2 focus-visible:ring-brand/35 focus-visible:ring-offset-0"
      >
        <div className="relative aspect-[4/3] overflow-hidden bg-zinc-100">
          <img
            src={property.imageUrl}
            alt=""
            className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
            loading="lazy"
          />
          {property.hasOffer && (
            <span className="absolute left-3 top-3 z-[1] rounded bg-brand px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-white shadow-md">
              Offers
            </span>
          )}
          <div className="absolute bottom-3 left-3 right-3 z-[1] rounded-xl bg-white/95 p-4 shadow-lg backdrop-blur-sm transition-colors duration-300 group-hover:bg-white">
            <div className="flex gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-muted text-xs font-bold text-brand">
                {property.developer?.charAt(0) ?? 'P'}
              </div>
              <div className="min-w-0 flex-1">
                <h2 className="truncate text-base font-semibold text-property-title">
                  {property.title}
                </h2>
                <p className="mt-1 flex items-start gap-1 text-xs text-zinc-500">
                  <svg
                    className="mt-0.5 h-3.5 w-3.5 shrink-0"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    aria-hidden
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                  </svg>
                  <span className="line-clamp-2">{property.location}</span>
                </p>
                <p className="mt-2 text-lg font-bold text-zinc-900">{property.priceDisplay}</p>
                <div className="mt-2 flex flex-wrap items-center gap-3 text-xs text-zinc-600">
                  <span className="inline-flex items-center gap-1">
                    <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                      <path d="M3 10.5V19a1 1 0 001 1h4v-5h4v5h4a1 1 0 001-1v-8.5l-7-5.5-7 5.5z" />
                    </svg>
                    {property.bhkLabel}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                      <rect x="4" y="4" width="16" height="16" rx="2" />
                    </svg>
                    {property.areaSqFt}
                  </span>
                </div>
                <span className="mt-3 inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wide text-brand">
                  Enquire now
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
}
