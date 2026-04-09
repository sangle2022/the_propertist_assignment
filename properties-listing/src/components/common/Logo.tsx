import type { ReactElement } from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  variant?: 'default' | 'footer';
}

export function Logo({ variant = 'default' }: LogoProps): ReactElement {
  const isFooter: boolean = variant === 'footer';
  return (
    <Link
      to="/"
      className="inline-flex flex-col leading-tight transition-opacity hover:opacity-90"
      aria-label="The Propertist home"
    >
      <span
        className={`font-bold tracking-tight ${isFooter ? 'text-2xl' : 'text-xl sm:text-2xl'}`}
      >
        <span className="text-zinc-900">THE </span>
        <span className="text-brand">PROPERTIST</span>
      </span>
      <span
        className={`font-semibold text-brand ${isFooter ? 'text-sm' : 'text-xs sm:text-sm'}`}
      >
        .com
      </span>
    </Link>
  );
}
