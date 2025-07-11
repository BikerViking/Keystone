import { useState, useRef, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import clsx from 'clsx';
import { navLinkStyles } from './variants';

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "FAQ", path: "/faq" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);
  const [scrolled, setScrolled] = useState(false);
  const toggle = () => setOpen((prev) => !prev);
  const closeMenu = () => setOpen(false);

  // Close menu on outside click or orientation change for mobile UX
  useEffect(() => {
    if (!open) return;

    function handlePointerDown(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        closeMenu();
      }
    }

    function handleKey(event) {
      if (event.key === "Escape") {
        closeMenu();
      }
    }

    function handleResize() {
      closeMenu();
    }

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("touchstart", handlePointerDown);
    document.addEventListener("keydown", handleKey);
    window.addEventListener("orientationchange", handleResize);
    window.addEventListener("resize", handleResize);
    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("touchstart", handlePointerDown);
      document.removeEventListener("keydown", handleKey);
      window.removeEventListener("orientationchange", handleResize);
      window.removeEventListener("resize", handleResize);
    };
  }, [open]);

  const linkClasses = ({ isActive }) => navLinkStyles({ active: isActive });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      role="banner"
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={clsx(
        'fixed inset-x-0 top-0 z-50 backdrop-blur-md transition-shadow',
        scrolled ? 'bg-black/90 shadow-md' : 'bg-black/80'
      )}
    >
      <nav className="flex w-full items-center justify-between py-3 px-4 sm:px-8 md:py-4">
        <Link
          to="/"
          className="flex flex-shrink-0 items-center rounded border border-transparent px-3 text-xl font-semibold font-serif tracking-wide text-white transition-colors hover:border-silver hover:text-silver"
        >
          <span className="hidden nav:inline whitespace-nowrap">Keystone Notary Group, LLC</span>
          <span className="nav:hidden whitespace-nowrap">Keystone Notary</span>
        </Link>
        <button
          className="nav:hidden flex flex-col items-center justify-center p-2 focus:outline-none focus:ring-2 focus:ring-platinum"
          /* Focus ring ensures mobile menu trigger is keyboard accessible */
          onClick={toggle}
          aria-label="Toggle navigation"
          aria-expanded={open}
        >
          <span className="mb-1 block h-0.5 w-6 bg-platinum transition-colors hover:bg-silver" />
          <span className="mb-1 block h-0.5 w-6 bg-platinum transition-colors hover:bg-silver" />
          <span className="block h-0.5 w-6 bg-platinum transition-colors hover:bg-silver" />
        </button>
        <ul className="hidden items-center gap-3 nav:flex">
          {navItems.map((item) => (
            <li key={item.name}>
              <NavLink to={item.path} className={linkClasses} end>
                {item.name}
              </NavLink>
            </li>
          ))}
          <li>
            <a
              href="https://forms.gle/b1Xg8pYkZABk4wN96"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button px-4 py-2 text-sm"
            >
              Book Now
            </a>
          </li>
        </ul>
      </nav>
      <AnimatePresence>
        {open && (
          <div className="relative fixed inset-0 z-40 bg-black nav:hidden">
            <button
              type="button"
              aria-label="Close menu overlay"
              onClick={closeMenu}
              className="absolute inset-0"
            />
            {/* eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions */}
            <nav
              ref={menuRef}
              aria-label="Mobile navigation"
              onMouseDown={(e) => e.stopPropagation()}
              /* Center drawer and limit width so it never spans edge to edge */
              className="relative mx-auto mt-8 w-full max-w-[96vw] sm:max-w-sm p-6"
            >
              <button
                className="absolute top-4 right-4 text-platinum"
                onClick={closeMenu}
                aria-label="Close navigation"
              >
                ✕
              </button>
              {/* Mobile menu with a solid background behind item gaps */}
              <ul className="flex flex-col gap-4 bg-black">
                {navItems.map((item) => (
                  <li key={item.name}>
                    <NavLink
                      to={item.path}
                      className={linkClasses}
                      onClick={closeMenu}
                      end
                    >
                      {item.name}
                    </NavLink>
                  </li>
                ))}
                <li>
                  <a
                    href="https://forms.gle/b1Xg8pYkZABk4wN96"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cta-button px-4 py-2 text-sm"
                  >
                    Book Now
                  </a>
                </li>
              </ul>
              </nav>
            </div>
          )}
        </AnimatePresence>
    </motion.header>
  );
}
