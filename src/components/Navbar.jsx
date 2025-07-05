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
    `block px-3 py-2 text-lg font-medium hover:text-primary-400 ${
      isActive ? 'text-primary-400' : 'text-white'
    }`;

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-gray-950/70 backdrop-blur">
      <nav className="container flex items-center justify-between py-4">
        <Link to="/" className="flex items-center text-xl font-semibold">
          <img src={logo} alt="Keystone Notary Group" className="h-8 w-8 mr-2" />
          Keystone
        </Link>
        <button
          className="md:hidden"
          onClick={toggle}
          aria-label="Toggle navigation"
          aria-expanded={open}
        >
          <span className="block h-0.5 w-6 bg-white mb-1" />
          <span className="block h-0.5 w-6 bg-white mb-1" />
          <span className="block h-0.5 w-6 bg-white" />
        </button>
        <ul className="hidden md:flex space-x-6">
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
            className="fixed inset-0 z-40 bg-gray-900/90 p-6 md:hidden"
          >
            <button
              className="absolute top-4 right-4 text-white"
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
