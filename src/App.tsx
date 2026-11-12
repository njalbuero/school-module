import { Suspense, useEffect, useState } from 'react';
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';
import { MODULE, SECTIONS, SITE_PAGES } from './content/module';
import { useProgress } from './context/ProgressContext';

export default function App() {
  const location = useLocation();
  const { isUnlocked, markVisited, resetAll } = useProgress();
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

    if (section && isUnlocked(section.id)) {
      markVisited(section.id);
    }
  }, [location.pathname, isUnlocked, markVisited]);

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
            aria-label={`${MODULE.title} — return to Home`}
          >
            <span className="brand-mark" aria-hidden="true">
              <svg
                className="brand-icon"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 1.5c-2.1 2.4-3.2 4.3-3.2 5.8 0 1.8 1.4 3.1 3.2 3.1s3.2-1.3 3.2-3.1c0-1.5-1.1-3.4-3.2-5.8Z" />
                <path d="M12 4.4c-.9 1.1-1.4 1.9-1.4 2.7 0 .8.6 1.4 1.4 1.4s1.4-.6 1.4-1.4c0-.8-.5-1.6-1.4-2.7Z" />
                <path d="M8 10.6h8l-1.2 3.4H9.2L8 10.6Z" />
                <path d="M10.8 14h2.4l-.4 8h-1.6l-.4-8Z" />
              </svg>
            </span>
            <span className="brand-text">
              <span className="brand-subject">{MODULE.subject}</span>
              <span className="brand-title">{MODULE.title}</span>
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
