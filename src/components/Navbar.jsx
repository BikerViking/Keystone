import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/logo.svg';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'FAQ', path: '/faq' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(!open);

  const linkClasses = ({ isActive }) =>
    `block w-full rounded bg-black px-4 py-3 text-lg font-medium transition-colors hover:bg-deepgray hover:text-silver md:w-auto md:bg-deepgray md:px-3 md:py-2 ${
      isActive ? 'text-silver shadow-inner' : 'text-platinum'
    }`;

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-charcoal/70 backdrop-blur">
      <nav className="container flex items-center justify-between py-4">
        <Link
          to="/"
          className="flex items-center rounded border border-transparent px-2 text-xl font-semibold transition-colors hover:border-silver hover:text-silver"
        >
          <img src={logo} alt="Keystone Notary Group" className="h-8 w-8 mr-2" />
          Keystone
        </Link>
        <button
          className="md:hidden flex h-10 w-10 flex-col items-center justify-center rounded focus:outline-none focus:ring-2 focus:ring-silver"
          onClick={toggle}
          aria-label="Toggle navigation"
          aria-expanded={open}
        >
          <span className="mb-1 block h-0.5 w-6 bg-platinum transition-colors hover:bg-silver" />
          <span className="mb-1 block h-0.5 w-6 bg-platinum transition-colors hover:bg-silver" />
          <span className="block h-0.5 w-6 bg-platinum transition-colors hover:bg-silver" />
        </button>
        <ul className="hidden md:flex space-x-3">
          {navItems.map((item) => (
            <li key={item.name}>
              <NavLink to={item.path} className={linkClasses} end>
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween' }}
            className="fixed inset-0 z-40 bg-black p-6 md:hidden overflow-auto"
          >
            <button
              className="absolute top-4 right-4 h-10 w-10 rounded text-platinum focus:outline-none focus:ring-2 focus:ring-silver"
              onClick={toggle}
              aria-label="Close navigation"
            >
              ✕
            </button>
            <ul className="mt-8 space-y-4">
              {navItems.map((item) => (
                <li key={item.name}>
                  <NavLink
                    to={item.path}
                    className={linkClasses}
                    onClick={() => setOpen(false)}
                    end
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
