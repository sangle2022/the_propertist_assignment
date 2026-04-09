import type { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { Logo } from '../common/Logo';

const companyLinks: string[] = [
  'About us',
  'Contact us',
  'Blogs',
  'Careers',
  'Advertise with Us',
  'Privacy policy',
  'Terms & Conditions',
];

const serviceLinks: string[] = [
  'Search property online',
  'Find Real Estate Agents',
  'Post your Requirement',
  'List property for free',
];

const localityLinks: string[] = [
  'Thane',
  'Navi Mumbai',
  'Kalyan',
  'Powai',
  'Mulund',
  'Bandra',
];

export function Footer(): ReactElement {
  return (
    <footer className="mt-auto border-t border-zinc-100 bg-zinc-50">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo variant="footer" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-zinc-600">
              Connecting people and property across Mumbai MMR with curated listings and a
              streamlined discovery experience.
            </p>
            <div className="mt-6 flex gap-3">
              {['f', 't', 'in', 'ig'].map((label) => (
                <span
                  key={label}
                  className="flex h-10 w-10 cursor-default items-center justify-center rounded-full border border-zinc-200 bg-white text-xs font-semibold uppercase text-zinc-500 shadow-sm"
                  aria-hidden
                >
                  {label}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-zinc-900">
              Company
            </h3>
            <ul className="mt-4 space-y-2">
              {companyLinks.map((label) => (
                <li key={label}>
                  <Link
                    to="/"
                    className="text-sm text-zinc-600 transition hover:text-brand"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-zinc-900">
              Our services
            </h3>
            <ul className="mt-4 space-y-2">
              {serviceLinks.map((label) => (
                <li key={label}>
                  <Link
                    to="/"
                    className="text-sm text-zinc-600 transition hover:text-brand"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-zinc-900">
              Contact us
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-zinc-600">
              Monday - Saturday
              <br />
              10:00 AM to 6:00 PM IST
            </p>
            <h3 className="mt-8 text-sm font-semibold uppercase tracking-wide text-zinc-900">
              Most searched localities
            </h3>
            <ul className="mt-3 flex flex-wrap gap-2">
              {localityLinks.map((label) => (
                <li key={label}>
                  <Link
                    to="/"
                    className="rounded-full bg-white px-3 py-1 text-xs font-medium text-zinc-600 shadow-sm ring-1 ring-zinc-200 transition hover:text-brand"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-10 border-t border-zinc-200 pt-6 text-center text-xs text-zinc-500">
          Copyright © 2026 | The Propertist. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
