import { Suspense, useEffect, useState } from 'react';
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';
import { MODULE, SECTIONS, SITE_PAGES } from './content/module';
import { useProgress } from './context/ProgressContext';
import { isSectionUnlocked } from './features/progress/gating';

export default function App() {
  const location = useLocation();
  const { markVisited, resetAll, isComplete } = useProgress();
  const [navOpen, setNavOpen] = useState(false);

  useEffect(() => {
    setNavOpen(false);
    window.scrollTo({ top: 0, behavior: 'auto' });

    let cancelled = false;
    let frame = 0;
    let attempts = 0;

    const focusHeading = () => {
      if (cancelled) {
        return;
      }

      const heading = document.querySelector<HTMLElement>(
        '[data-page-heading]',
      );

      if (heading) {
        heading.focus({ preventScroll: true });
        return;
      }

      attempts += 1;

      if (attempts < 300) {
        frame = window.requestAnimationFrame(focusHeading);
      }
    };

    frame = window.requestAnimationFrame(focusHeading);

    return () => {
      cancelled = true;
      window.cancelAnimationFrame(frame);
    };
  }, [location.pathname]);

  useEffect(() => {
    const section = SECTIONS.find((item) => item.path === location.pathname);

    if (section && isSectionUnlocked(section.id, isComplete)) {
      markVisited(section.id);
    }
  }, [location.pathname, markVisited, isComplete]);

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

  const handleReset = () => {
    const confirmed = window.confirm(
      'Clear your saved progress and drafts on this device? This cannot be undone.',
    );

    if (confirmed) {
      resetAll();
    }
  };

  return (
    <div className="app">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>

      <header className="site-header">
        <div className="site-header-inner">
          <Link
            className="brand"
            to="/"
            aria-label={`${MODULE.shortTitle} — return to Home`}
          >
            <span className="brand-mark" aria-hidden="true">
              ED
            </span>
            <span className="brand-text">
              <span className="brand-subject">{MODULE.subject}</span>
              <span className="brand-title">{MODULE.shortTitle}</span>
            </span>
          </Link>

          <button
            type="button"
            className="nav-toggle"
            aria-expanded={navOpen}
            aria-controls="site-nav"
            onClick={() => setNavOpen((open) => !open)}
          >
            <svg
              aria-hidden="true"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
            {navOpen ? 'Close' : 'Menu'}
          </button>

          <nav
            id="site-nav"
            className="site-nav"
            aria-label="Main navigation"
            data-open={navOpen}
          >
            <ul className="nav-list">
              {SITE_PAGES.map((page) => (
                <li key={page.path}>
                  <NavLink
                    to={page.path}
                    end={page.path === '/'}
                    className="nav-link"
                  >
                    {page.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      <main id="main-content" className="site-main" tabIndex={-1}>
        <Suspense
          fallback={
            <div className="page">
              <div className="card card-quiet" role="status">
                <p>Loading lesson…</p>
              </div>
            </div>
          }
        >
          <Outlet />
        </Suspense>
      </main>

      <footer className="site-footer">
        <div className="site-footer-inner">
          <p className="footer-title">{MODULE.title}</p>
          <p>
            {MODULE.subject} · {MODULE.kind}
          </p>
          <p className="footer-note">
            Module progress and drafts are saved in this browser only.
          </p>
          <button type="button" className="link-button" onClick={handleReset}>
            Clear saved progress
          </button>
        </div>
      </footer>
    </div>
  );
}
