import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { demos } from '@/data/demos';
import { siteContent } from '@/data/siteContent';

const navItems = [
  { label: 'ホーム', fullLabel: 'ホーム', path: '/' },
  ...demos.map((d) => ({ label: d.label, fullLabel: d.fullLabel, path: d.path })),
];

function GlobalHeader() {
  const [open, setOpen] = useState(false);

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `text-base font-medium transition-colors ${
      isActive ? 'text-accent' : 'text-white/90 hover:text-accent-light'
    }`;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-navy-dark shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link
            to="/"
            className="text-xl font-bold text-white tracking-wide hover:text-accent-light transition-colors"
          >
            {siteContent.siteName}
          </Link>

          {/* PC nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <NavLink key={item.path} to={item.path} className={linkClass} end={item.path === '/'}>
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setOpen(!open)}
            aria-label="メニューを開く"
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="md:hidden bg-navy-dark border-t border-white/10 px-4 py-4 space-y-3">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === '/'}
              className={({ isActive }) =>
                `block text-lg font-medium py-2 transition-colors ${
                  isActive ? 'text-accent' : 'text-white/90 hover:text-accent-light'
                }`
              }
              onClick={() => setOpen(false)}
            >
              {item.fullLabel}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  );
}

export default GlobalHeader;
