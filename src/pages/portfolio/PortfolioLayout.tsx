import { Suspense, useEffect, useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { LIVE_MODULE_URL, NAV_ITEMS, PORTFOLIO } from '../../content/portfolio';
import '@fontsource/instrument-serif/400.css';
import '../../styles/portfolio.css';

function ArrowUpRight() {
  return (
    <svg
      aria-hidden="true"
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7 17 17 7M8 7h9v9" />
    </svg>
  );
}

export default function PortfolioLayout() {
  const location = useLocation();
  const [navOpen, setNavOpen] = useState(false);

  useEffect(() => {
    setNavOpen(false);
  }, [location.pathname, location.hash]);

  useEffect(() => {
    if (!navOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setNavOpen(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [navOpen]);

  useEffect(() => {
    if (location.hash) {
      const target = document.getElementById(location.hash.slice(1));

      if (target) {
        const reducedMotion = window.matchMedia(
          '(prefers-reduced-motion: reduce)',
        ).matches;

        window.requestAnimationFrame(() => {
          target.scrollIntoView({
            behavior: reducedMotion ? 'auto' : 'smooth',
            block: 'start',
          });
        });
      }

      return;
    }

    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [location.pathname, location.hash]);

  useEffect(() => {
    if (location.hash) {
      return;
    }

    const heading = document.querySelector<HTMLElement>(
      '[data-page-heading]',
    );

    heading?.focus({ preventScroll: true });
  }, [location.pathname, location.hash]);

  return (
    <div className="pf-shell">
      <a className="pf-skip-link" href="#portfolio-main">
        Skip to portfolio content
      </a>

      <header className="pf-header">
        <div className="pf-header-inner">
          <Link className="pf-brand" to="/portfolio" aria-label="Portfolio home">
            <span className="pf-brand-mark" aria-hidden="true">
              AT
            </span>
            <span className="pf-brand-text">
              <span className="pf-brand-name">Andrea Gabrielle Tenorio</span>
              <span className="pf-brand-sub">Instructional Design Portfolio</span>
            </span>
          </Link>

          <button
            type="button"
            className="pf-menu-toggle"
            aria-expanded={navOpen}
            aria-controls="pf-nav"
            onClick={() => setNavOpen((open) => !open)}
          >
            {navOpen ? 'Close' : 'Menu'}
            <svg
              aria-hidden="true"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            >
              {navOpen ? (
                <path d="m6 6 12 12M18 6 6 18" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>

          <nav
            id="pf-nav"
            className="pf-nav"
            aria-label="Portfolio navigation"
            data-open={navOpen}
          >
            {NAV_ITEMS.map((item) => (
              <Link className="pf-nav-link" to={item.href} key={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      <main id="portfolio-main" className="pf-main" tabIndex={-1}>
        <Suspense
          fallback={
            <div className="pf-loading" role="status">
              Loading portfolio…
            </div>
          }
        >
          <Outlet />
        </Suspense>
      </main>

      <footer className="pf-footer">
        <div className="pf-footer-inner">
          <div className="pf-footer-brand">
            <p className="pf-footer-title">Instructional Design Portfolio</p>
            <p>{PORTFOLIO.name}</p>
            <p className="pf-footer-note">
              {PORTFOLIO.course}
              <br />
              {PORTFOLIO.program}
            </p>
          </div>

          <div className="pf-footer-links">
            <a href={LIVE_MODULE_URL} target="_blank" rel="noreferrer">
              Live module <ArrowUpRight />
            </a>
            <Link to="/portfolio#artifacts">Worksheets & artifacts</Link>
            <Link to="/">Return to the learning module</Link>
          </div>

          <p className="pf-footer-meta">
            {PORTFOLIO.year} · {PORTFOLIO.location}
            <br />
            Screenshots are shared with the knowledge of the people involved.
            Names and other personally identifiable information are masked.
          </p>
        </div>
      </footer>
    </div>
  );
}
