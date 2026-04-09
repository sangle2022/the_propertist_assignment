import type { ReactElement } from 'react';
import type { BhkFilterValue, ListingType } from '../../types';

interface PropertyFiltersProps {
  listingType: ListingType;
  onListingTypeChange: (value: ListingType) => void;
  bhkFilter: BhkFilterValue | null;
  onBhkFilterChange: (value: BhkFilterValue | null) => void;
}

const bhkOptions: { label: string; value: BhkFilterValue | null }[] = [
  { label: 'All', value: null },
  { label: '1 BHK', value: 1 },
  { label: '2 BHK', value: 2 },
  { label: '3 BHK', value: 3 },
  { label: '4+ BHK', value: '4+' },
];

export function PropertyFilters({
  listingType,
  onListingTypeChange,
  bhkFilter,
  onBhkFilterChange,
}: PropertyFiltersProps): ReactElement {
  return (
    <div className="rounded-2xl bg-white p-4 shadow-card ring-1 ring-zinc-100 sm:p-6">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
            Listing type
          </p>
          <div
            className="mt-2 inline-flex rounded-full bg-zinc-100 p-1"
            role="group"
            aria-label="Buy or rent"
          >
            <button
              type="button"
              onClick={() => onListingTypeChange('buy')}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
                listingType === 'buy'
                  ? 'bg-white text-brand shadow-sm'
                  : 'text-zinc-600 hover:text-zinc-900'
              }`}
            >
              Buy
            </button>
            <button
              type="button"
              onClick={() => onListingTypeChange('rent')}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
                listingType === 'rent'
                  ? 'bg-white text-brand shadow-sm'
                  : 'text-zinc-600 hover:text-zinc-900'
              }`}
            >
              Rent
            </button>
          </div>
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
            BHK
          </p>
          <div className="mt-2 flex flex-wrap gap-2">
            {bhkOptions.map((opt) => {
              const isActive: boolean = bhkFilter === opt.value;
              return (
                <button
                  key={opt.label}
                  type="button"
                  onClick={() => onBhkFilterChange(opt.value)}
                  className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
                    isActive
                      ? 'border-brand bg-brand-muted text-brand'
                      : 'border-zinc-200 bg-white text-zinc-700 hover:border-zinc-300'
                  }`}
                >
                  {opt.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
