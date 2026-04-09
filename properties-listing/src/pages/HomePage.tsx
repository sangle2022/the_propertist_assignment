import { useMemo, useState, type ReactElement } from 'react';
import { ScrollReveal } from '../components/common/ScrollReveal';
import { SkeletonPropertyCard } from '../components/common/SkeletonPropertyCard';
import { FeatureHighlights } from '../components/property/FeatureHighlights';
import { HomeHero } from '../components/property/HomeHero';
import { PropertyCard } from '../components/property/PropertyCard';
import { PropertyFilters } from '../components/property/PropertyFilters';
import { useDebounce } from '../hooks/useDebounce';
import { useProperties } from '../hooks/useProperties';
import type { BhkFilterValue, ListingType } from '../types';
import { filterProperties } from '../utils/filterProperties';

const SUGGESTION_LIMIT = 8;

export function HomePage(): ReactElement {
  const { properties, isLoading } = useProperties();
  const [locationQuery, setLocationQuery] = useState<string>('');
  const debouncedLocationQuery: string = useDebounce<string>(locationQuery, 500);
  const [listingType, setListingType] = useState<ListingType>('buy');
  const [bhkFilter, setBhkFilter] = useState<BhkFilterValue | null>(null);
  const searchSuggestions = useMemo(() => {
    const trimmed: string = locationQuery.trim();
    if (trimmed.length === 0) {
      return [];
    }
    return filterProperties(properties, {
      locationQuery: trimmed,
      listingType,
      bhkFilter,
    }).slice(0, SUGGESTION_LIMIT);
  }, [properties, locationQuery, listingType, bhkFilter]);
  const filtered: typeof properties = useMemo(
    () =>
      filterProperties(properties, {
        locationQuery: debouncedLocationQuery,
        listingType,
        bhkFilter,
      }),
    [properties, debouncedLocationQuery, listingType, bhkFilter]
  );
  return (
    <div>
      <HomeHero
        locationQuery={locationQuery}
        onLocationQueryChange={setLocationQuery}
        suggestions={searchSuggestions}
        showSuggestions={!isLoading}
        onPickSuggestion={() => setLocationQuery('')}
      />
      <FeatureHighlights />
      <section className="mx-auto max-w-7xl px-4 pb-20 pt-12 sm:px-6 lg:px-8 lg:pt-16">
        <div className="mb-8 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
              Trending
            </p>
            <h2 className="text-2xl font-bold uppercase tracking-tight text-zinc-900 sm:text-3xl">
              Properties
            </h2>
          </div>
          {!isLoading && (
            <p className="text-sm text-zinc-500">
              Showing <span className="font-semibold text-zinc-800">{filtered.length}</span>{' '}
              {listingType === 'buy' ? 'buy' : 'rental'} listings
            </p>
          )}
        </div>
        <div className="mb-10">
          <PropertyFilters
            listingType={listingType}
            onListingTypeChange={setListingType}
            bhkFilter={bhkFilter}
            onBhkFilterChange={setBhkFilter}
          />
        </div>
        {isLoading ? (
          <div className="grid gap-8 overflow-visible py-2 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, index) => (
              <SkeletonPropertyCard key={index} />
            ))}
          </div>
        ) : filtered.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-zinc-200 bg-zinc-50/80 px-6 py-16 text-center">
            <p className="text-lg font-semibold text-zinc-800">No properties match</p>
            <p className="mt-2 text-sm text-zinc-600">
              Try another locality keyword or adjust BHK / listing type filters.
            </p>
          </div>
        ) : (
          <div className="grid gap-8 overflow-visible py-2 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((property) => (
              <ScrollReveal key={property.id} className="overflow-visible">
                <PropertyCard property={property} />
              </ScrollReveal>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
