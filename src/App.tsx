import { Link, NavLink, Outlet } from 'react-router-dom';

type NavItem = {
  to: string;
  label: string;
  end?: boolean;
};

const navItems: NavItem[] = [
  { to: '/', label: 'Home', end: true },
  { to: '/about', label: 'About' },
  { to: '/modules', label: 'Modules' },
];

export default function App() {
  return (
    <div className="app">
      <header className="site-header">
        <Link to="/" className="brand">
          Modules
        </Link>
        <nav className="nav" aria-label="Main navigation">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              className={({ isActive }) =>
                isActive ? 'nav-link nav-link-active' : 'nav-link'
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </header>

      <main className="site-main">
        <Outlet />
      </main>

      <footer className="site-footer">
        <p>School project &middot; {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
}
