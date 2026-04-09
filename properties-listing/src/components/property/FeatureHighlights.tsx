import type { ReactElement } from 'react';

const highlights: { title: string; body: string; icon: ReactElement }[] = [
  {
    title: 'Discover suitable properties',
    body: 'Interactive search across localities and projects tailored to your needs.',
    icon: (
      <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-muted text-brand" aria-hidden>
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M11 18a7 7 0 100-14 7 7 0 000 14z" />
        </svg>
      </span>
    ),
  },
  {
    title: 'Find trusted agents',
    body: 'Expert assistance from registered professionals in your preferred locality.',
    icon: (
      <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-muted text-brand" aria-hidden>
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      </span>
    ),
  },
  {
    title: 'Connect with genuine buyers',
    body: 'List for free and reach active home seekers across the city.',
    icon: (
      <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-muted text-brand" aria-hidden>
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      </span>
    ),
  },
  {
    title: 'Get property alerts',
    body: 'Tell us your requirement and get notified when a match is listed.',
    icon: (
      <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-muted text-brand" aria-hidden>
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
        </svg>
      </span>
    ),
  },
];

export function FeatureHighlights(): ReactElement {
  return (
    <div className="relative z-0 -mt-14 mx-auto max-w-7xl px-4 sm:-mt-16 sm:px-6 lg:px-8">
      <div className="grid gap-6 rounded-2xl bg-white p-6 shadow-card ring-1 ring-zinc-100 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8 lg:p-8">
        {highlights.map((item) => (
          <div key={item.title} className="flex gap-4">
            {item.icon}
            <div>
              <h3 className="text-sm font-bold text-zinc-900">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-600">{item.body}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
