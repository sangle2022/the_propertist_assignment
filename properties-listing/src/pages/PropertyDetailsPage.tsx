import { useMemo, useState, type ReactElement } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ScrollReveal } from '../components/common/ScrollReveal';
import { Skeleton } from '../components/common/Skeleton';
import { useProperties } from '../hooks/useProperties';

const tabs: string[] = [
  'Overview',
  'Floor Plan & Pricing',
  'Amenities',
  'Location',
  'EMI Calculator',
  'Q & A',
];

export function PropertyDetailsPage(): ReactElement {
  const { id } = useParams<{ id: string }>();
  const { properties, isLoading } = useProperties();
  const [activeTab, setActiveTab] = useState<string>('Overview');
  const property = useMemo(
    () => properties.find((p) => p.id === id),
    [properties, id]
  );
  if (isLoading) {
    return (
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <Skeleton className="mb-6 h-4 w-48" />
        <Skeleton className="aspect-[21/9] w-full rounded-2xl" />
        <div className="mt-8 grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-4">
            <Skeleton className="h-8 w-2/3" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-5/6" />
          </div>
          <Skeleton className="h-80 rounded-2xl" />
        </div>
      </div>
    );
  }
  if (!property) {
    return (
      <div className="mx-auto max-w-lg px-4 py-24 text-center">
        <h1 className="text-2xl font-bold text-zinc-900">Property not found</h1>
        <p className="mt-2 text-zinc-600">This listing may have been removed.</p>
        <Link
          to="/"
          className="mt-6 inline-flex rounded-full bg-brand px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-dark"
        >
          Back to listings
        </Link>
      </div>
    );
  }
  return (
    <div>
      <div className="border-b border-zinc-100 bg-zinc-50">
        <div className="mx-auto max-w-7xl px-4 py-3 text-xs text-zinc-500 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb">
            <ol className="flex flex-wrap gap-1">
              <li>
                <Link to="/" className="hover:text-brand">
                  Home
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li>
                <span className="text-zinc-400">Buy</span>
              </li>
              <li aria-hidden>/</li>
              <li>
                <span className="text-zinc-400">New Projects</span>
              </li>
              <li aria-hidden>/</li>
              <li className="font-medium text-zinc-700">{property.title}</li>
            </ol>
          </nav>
        </div>
      </div>
      <section className="relative bg-zinc-800 text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-900/90 to-zinc-800/80" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:grid lg:grid-cols-12 lg:gap-10 lg:px-8 lg:py-14">
          <div className="lg:col-span-7">
            <div className="flex flex-wrap items-start gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white text-lg font-bold text-brand shadow-lg">
                {property.developer?.charAt(0) ?? 'P'}
              </div>
              <div className="min-w-0 flex-1">
                <h1 className="text-2xl font-semibold sm:text-3xl">{property.title}</h1>
                {property.developer && (
                  <p className="mt-1 text-sm text-zinc-300">By {property.developer}</p>
                )}
                <div className="mt-4 flex flex-wrap items-center gap-3">
                  {property.hasOffer && (
                    <span className="rounded-full bg-brand px-3 py-1 text-xs font-bold uppercase tracking-wide">
                      Offers
                    </span>
                  )}
                  <button
                    type="button"
                    className="rounded-full border border-white/30 p-2 text-white/90 transition hover:bg-white/10"
                    aria-label="Save property"
                  >
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </button>
                </div>
                <p className="mt-6 text-3xl font-bold tracking-tight">{property.priceDisplay}</p>
                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div className="flex gap-3 rounded-xl bg-white/5 p-3 ring-1 ring-white/10">
                    <svg className="h-6 w-6 shrink-0 text-brand" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    </svg>
                    <div>
                      <p className="text-xs uppercase tracking-wide text-zinc-400">Location</p>
                      <p className="text-sm font-medium">{property.location}</p>
                    </div>
                  </div>
                  <div className="flex gap-3 rounded-xl bg-white/5 p-3 ring-1 ring-white/10">
                    <svg className="h-6 w-6 shrink-0 text-brand" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                      <path d="M3 10.5V19a1 1 0 001 1h4v-5h4v5h4a1 1 0 001-1v-8.5l-7-5.5-7 5.5z" />
                    </svg>
                    <div>
                      <p className="text-xs uppercase tracking-wide text-zinc-400">Configuration</p>
                      <p className="text-sm font-medium">{property.bhkLabel}</p>
                    </div>
                  </div>
                  <div className="flex gap-3 rounded-xl bg-white/5 p-3 ring-1 ring-white/10">
                    <svg className="h-6 w-6 shrink-0 text-brand" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
                      <rect x="4" y="4" width="16" height="16" rx="2" />
                    </svg>
                    <div>
                      <p className="text-xs uppercase tracking-wide text-zinc-400">Size</p>
                      <p className="text-sm font-medium">{property.areaSqFt}</p>
                    </div>
                  </div>
                  <div className="flex gap-3 rounded-xl bg-white/5 p-3 ring-1 ring-white/10">
                    <svg className="h-6 w-6 shrink-0 text-brand" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <div>
                      <p className="text-xs uppercase tracking-wide text-zinc-400">Listing</p>
                      <p className="text-sm font-medium capitalize">{property.listingType}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-10 lg:col-span-5 lg:mt-0">
            <div className="rounded-2xl bg-white p-6 text-zinc-900 shadow-card ring-1 ring-zinc-100">
              <h2 className="text-lg font-semibold text-brand">Request details</h2>
              <form className="mt-5 space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label htmlFor="lead-name" className="text-xs font-medium text-zinc-500">
                    Name
                  </label>
                  <input
                    id="lead-name"
                    type="text"
                    placeholder="Enter full name"
                    className="mt-1 w-full rounded-xl border border-zinc-200 px-4 py-2.5 text-sm outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/20"
                  />
                </div>
                <div>
                  <label htmlFor="lead-email" className="text-xs font-medium text-zinc-500">
                    Email ID
                  </label>
                  <input
                    id="lead-email"
                    type="email"
                    placeholder="Enter email ID"
                    className="mt-1 w-full rounded-xl border border-zinc-200 px-4 py-2.5 text-sm outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/20"
                  />
                </div>
                <div>
                  <label htmlFor="lead-phone" className="text-xs font-medium text-zinc-500">
                    Phone no.
                  </label>
                  <input
                    id="lead-phone"
                    type="tel"
                    placeholder="Enter mobile no."
                    className="mt-1 w-full rounded-xl border border-zinc-200 px-4 py-2.5 text-sm outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/20"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-full bg-brand py-3 text-sm font-bold uppercase tracking-wide text-white shadow-md transition hover:bg-brand-dark"
                >
                  Get more details
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <div className="sticky top-[68px] z-40 border-b border-zinc-100 bg-white/95 backdrop-blur">
        <div className="mx-auto max-w-7xl overflow-x-auto px-4 sm:px-6 lg:px-8">
          <div className="flex min-w-max gap-6 py-3" role="tablist" aria-label="Property sections">
            {tabs.map((tab) => {
              const isActive: boolean = tab === activeTab;
              return (
                <button
                  key={tab}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveTab(tab)}
                  className={`whitespace-nowrap border-b-2 pb-2 text-sm font-medium transition ${
                    isActive
                      ? 'border-brand text-brand'
                      : 'border-transparent text-zinc-500 hover:text-zinc-800'
                  }`}
                >
                  {tab}
                </button>
              );
            })}
          </div>
        </div>
      </div>
      <ScrollReveal className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <div className="relative overflow-hidden rounded-2xl shadow-card ring-1 ring-zinc-100">
              <img
                src={property.imageUrl}
                alt=""
                className="aspect-[16/9] w-full object-cover"
              />
              <button
                type="button"
                className="absolute right-4 top-4 rounded-full bg-white/90 p-2 text-zinc-700 shadow-md backdrop-blur transition hover:bg-white"
                aria-label="Zoom image"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                </svg>
              </button>
            </div>
            <div className="mt-10">
              <h2 className="text-xl font-bold uppercase tracking-wide text-zinc-900 sm:text-2xl">
                About {property.title}
              </h2>
              <p className="mt-4 leading-relaxed text-zinc-600">{property.description}</p>
              <div className="mt-8 grid gap-6 sm:grid-cols-2">
                <div className="flex gap-3 rounded-xl border border-zinc-100 bg-zinc-50/80 p-4">
                  <span className="text-brand" aria-hidden>
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase text-zinc-500">Type</p>
                    <p className="text-sm font-medium text-zinc-900">
                      {property.listingType === 'rent' ? 'Rental' : 'New launch'} ·{' '}
                      {property.city}
                    </p>
                  </div>
                </div>
                <div className="flex gap-3 rounded-xl border border-zinc-100 bg-zinc-50/80 p-4">
                  <span className="text-brand" aria-hidden>
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase text-zinc-500">RERA</p>
                    <p className="text-sm font-medium text-brand">Sample ID · P51800000000</p>
                  </div>
                </div>
              </div>
              {property.hasOffer && (
                <div className="mt-8 rounded-2xl border border-dashed border-brand/40 bg-brand-muted/40 p-6">
                  <h3 className="text-sm font-bold uppercase tracking-wide text-brand">
                    Offers &amp; updates
                  </h3>
                  <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-zinc-700">
                    <li>25:25:25:25 payment plan on select units (illustrative).</li>
                  </ul>
                </div>
              )}
            </div>
          </div>
          <aside className="hidden lg:col-span-4 lg:block">
            <div className="sticky top-36 rounded-2xl border border-zinc-100 bg-white p-6 shadow-card">
              <h3 className="text-sm font-semibold text-zinc-900">Share</h3>
              <div className="mt-4 flex gap-3">
                {['Facebook', 'WhatsApp', 'SMS'].map((label) => (
                  <span
                    key={label}
                    className="rounded-full border border-zinc-200 px-3 py-1.5 text-xs font-medium text-zinc-600"
                  >
                    {label}
                  </span>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </ScrollReveal>
    </div>
  );
}
