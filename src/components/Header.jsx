import { useState } from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(!open);

  return (
    <header className="sticky top-0 z-50 bg-gray-900/80 backdrop-blur" data-testid="header">
      <nav className="mx-auto flex max-w-6xl items-center justify-between p-4 text-white" aria-label="Main navigation">
        <Link to="/" className="text-lg font-bold">Keystone Notary Group</Link>
        <button
          className="md:hidden" onClick={toggle} aria-label="Toggle navigation" aria-expanded={open}
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <ul className={`absolute right-0 top-full mt-2 flex w-48 flex-col rounded bg-gray-800 md:static md:mt-0 md:w-auto md:flex-row md:space-x-6 md:bg-transparent ${open ? 'block' : 'hidden md:flex'}`}
          onClick={() => setOpen(false)}>
          {['Home', 'About', 'Services', 'FAQ', 'Contact'].map((page) => (
            <li key={page}>
              <Link to={page === 'Home' ? '/' : `/${page.toLowerCase()}`} className="block px-4 py-2 hover:text-teal-300">
                {page}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
