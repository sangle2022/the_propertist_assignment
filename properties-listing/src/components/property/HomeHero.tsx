import type { MouseEvent, ReactElement } from 'react';
import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import type { Property } from '../../types';

interface HomeHeroProps {
  locationQuery: string;
  onLocationQueryChange: (value: string) => void;
  suggestions: Property[];
  showSuggestions: boolean;
  onPickSuggestion: () => void;
}

export function HomeHero({
  locationQuery,
  onLocationQueryChange,
  suggestions,
  showSuggestions,
  onPickSuggestion,
}: HomeHeroProps): ReactElement {
  const [isInputFocused, setIsInputFocused] = useState<boolean>(false);
  const blurTimeoutRef = useRef<number | null>(null);
  const clearBlurTimeout = (): void => {
    if (blurTimeoutRef.current !== null) {
      window.clearTimeout(blurTimeoutRef.current);
      blurTimeoutRef.current = null;
    }
  };
  const handleInputFocus = (): void => {
    clearBlurTimeout();
    setIsInputFocused(true);
  };
  const handleInputBlur = (): void => {
    blurTimeoutRef.current = window.setTimeout(() => {
      setIsInputFocused(false);
    }, 180);
  };
  const openPanel: boolean =
    showSuggestions && isInputFocused && locationQuery.trim().length > 0;
  const hasSuggestions: boolean = suggestions.length > 0;
  return (
    <section className="relative ">
      <div className="absolute inset-0 overflow-hidden" aria-hidden>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1529253355930-ddbe423a2ac7?w=1920&q=80)',
          }}
        />
        <div className="absolute inset-0 bg-zinc-900/70" />
      </div>
      <div className="relative mx-auto max-w-7xl overflow-visible px-4 pb-28 pt-16 text-center sm:px-6 sm:pb-32 sm:pt-20 lg:px-8 lg:pt-28">
        <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
          Connecting People <span className="text-brand-muted">&amp;</span> Property
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-sm text-zinc-200 sm:text-base">
          Search by locality, project, or builder. Discover homes and offices curated for
          Mumbai MMR.
        </p>
        <div className="mx-auto mt-10 max-w-3xl text-left">
          <label htmlFor="hero-location-search" className="sr-only">
            Search by location
          </label>
          <div className="relative z-10">
            <div className="flex flex-col gap-3 rounded-2xl bg-white p-3 shadow-card sm:flex-row sm:items-center sm:gap-0 sm:rounded-full sm:p-2 sm:pl-4 sm:pr-2">
              <div className="inline-flex w-fit shrink-0 items-center gap-2 rounded-full bg-zinc-100 px-3 py-2 text-sm font-medium text-zinc-700 sm:bg-transparent sm:px-0 sm:py-0">
                <svg
                  className="h-5 w-5 shrink-0 text-brand"
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
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Mumbai
              </div>
              <div className="flex min-w-0 flex-1 items-center gap-2 sm:gap-0">
                <input
                  id="hero-location-search"
                  type="search"
                  autoComplete="off"
                  role="combobox"
                  aria-expanded={openPanel}
                  aria-controls="search-suggestions"
                  aria-autocomplete="list"
                  placeholder="Locality, project, or builder"
                  value={locationQuery}
                  onChange={(e) => onLocationQueryChange(e.target.value)}
                  onFocus={handleInputFocus}
                  onBlur={handleInputBlur}
                  className="min-w-0 flex-1 rounded-xl border border-zinc-200 bg-zinc-50/90 px-3 py-2.5 text-sm text-zinc-900 placeholder:text-zinc-500 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20 sm:rounded-full sm:border-0 sm:bg-transparent sm:px-4 sm:py-2 sm:placeholder:text-zinc-400 sm:focus:border-transparent sm:focus:ring-0"
                />
                <button
                  type="button"
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand text-white shadow-md transition hover:bg-brand-dark sm:h-12 sm:w-12"
                  aria-label="Search"
                >
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </div>
            {openPanel && (
              <div
                id="search-suggestions"
                role="listbox"
                aria-label="Property suggestions"
                className="absolute left-0 right-0 top-full z-[60] mt-0 max-h-72 overflow-y-auto rounded-2xl border border-zinc-200/80 bg-white py-1 shadow-xl ring-1 ring-black/5"
                onMouseDown={clearBlurTimeout}
              >
                {hasSuggestions ? (
                  <ul className="divide-y divide-zinc-100">
                    {suggestions.map((property: Property) => (
                      <li key={property.id} role="option">
                        <Link
                          to={`/property/${property.id}`}
                          className="flex flex-col gap-0.5 px-4 py-3 transition hover:bg-zinc-50 active:bg-zinc-100"
                          onMouseDown={(e: MouseEvent<HTMLAnchorElement>) => {
                            e.preventDefault();
                          }}
                          onClick={() => {
                            clearBlurTimeout();
                            setIsInputFocused(false);
                            onPickSuggestion();
                          }}
                        >
                          <span className="font-semibold text-property-title">{property.title}</span>
                          <span className="text-xs text-zinc-500">{property.location}</span>
                          <span className="text-sm font-medium text-zinc-900">{property.priceDisplay}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="px-4 py-5 text-center text-sm text-zinc-500">
                    No properties match this search. Try another keyword.
                  </p>
                )}
              </div>
            )}
          </div>
          <p className="mt-3 text-center text-xs leading-relaxed text-zinc-300 sm:px-0">
            <span className="sm:hidden">Suggestions as you type · grid filters after a short pause.</span>
            <span className="hidden sm:inline">
              Grid updates use a 500ms debounce; suggestions appear instantly as you type.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
