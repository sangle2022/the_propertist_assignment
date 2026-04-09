import { useState, type ReactElement } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Logo } from '../common/Logo';

export function Header(): ReactElement {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const location = useLocation();
  const isHome: boolean = location.pathname === '/';
  return (
    <header className="sticky top-0 z-[100] border-b border-zinc-100 bg-white/95 shadow-sm backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Logo />
        <nav
          className="hidden items-center gap-6 md:flex"
          aria-label="Primary"
        >
          <div className="relative">
            <button
              type="button"
              className="flex items-center gap-1 text-sm font-medium text-zinc-700 transition-colors hover:text-brand"
              aria-expanded="false"
              aria-haspopup="true"
            >
              AGENTS
              <svg className="h-4 w-4 text-zinc-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.94a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
          <button
            type="button"
            className="rounded-full bg-brand px-6 py-2 text-sm font-semibold uppercase tracking-wide text-white shadow-md transition hover:bg-brand-dark"
          >
            Login
          </button>
        </nav>
        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 text-zinc-700 md:hidden"
          aria-expanded={menuOpen}
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="sr-only">Menu</span>
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>
      {menuOpen && (
        <div className="border-t border-zinc-100 bg-white px-4 py-4 md:hidden">
          <button
            type="button"
            className="mb-3 w-full rounded-lg border border-zinc-200 py-2 text-sm font-medium text-zinc-700"
          >
            AGENTS
          </button>
          <button
            type="button"
            className="w-full rounded-full bg-brand py-2.5 text-sm font-semibold uppercase text-white"
          >
            Login
          </button>
          {!isHome && (
            <Link
              to="/"
              className="mt-3 block text-center text-sm font-medium text-brand"
              onClick={() => setMenuOpen(false)}
            >
              Browse properties
            </Link>
          )}
        </div>
      )}
    </header>
  );
}
