import { useState, useRef, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import clsx from "clsx";
import { navLinkStyles } from "./variants";
import HamburgerIcon from "./HamburgerIcon";

// Animation variants for the sliding mobile menu
const menuVariants = {
  closed: { x: "100%" },
  open: {
    x: 0,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 24,
      staggerChildren: 0.05,
    },
  },
};

const itemVariants = {
  closed: { opacity: 0, x: 20 },
  open: { opacity: 1, x: 0 },
};

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

  // Keep menu open unless overlay or close icon are activated
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

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("touchstart", handlePointerDown);
    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("touchstart", handlePointerDown);
      document.removeEventListener("keydown", handleKey);
    };
  }, [open]);

  const linkClasses = ({ isActive }) => navLinkStyles({ active: isActive });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      role="banner"
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={clsx(
        "fixed inset-x-0 top-0 z-50 backdrop-blur-md transition-shadow",
        scrolled ? "bg-black/90 shadow-md" : "bg-black/80",
      )}
    >
      <nav className="flex w-full items-center justify-between py-3 px-4 sm:px-8 md:py-4">
        <Link
          to="/"
          className="flex flex-shrink-0 items-center rounded border border-transparent px-3 text-xl font-semibold font-serif tracking-wide text-white transition-colors hover:border-silver hover:text-silver"
        >
          <span className="hidden nav:inline whitespace-nowrap">
            Keystone Notary Group, LLC
          </span>
          <span className="nav:hidden whitespace-nowrap">Keystone Notary Group, LLC</span>
        </Link>
        <button
          className="nav:hidden flex items-center justify-center p-2 focus:outline-none focus:ring-2 focus:ring-platinum"
          /* Focus ring ensures mobile menu trigger is keyboard accessible */
          onClick={toggle}
          aria-label="Toggle navigation"
          aria-expanded={open}
        >
          <HamburgerIcon className="h-6 w-6 text-platinum transition-colors hover:text-silver" />
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
          <motion.div
            className="fixed inset-0 z-40 bg-black/90 backdrop-blur-sm nav:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.9 }}
            exit={{ opacity: 0 }}
          >
            <button
              type="button"
              aria-label="Close menu overlay"
              onClick={closeMenu}
              className="absolute inset-0"
            />
            {/* eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions */}
            <motion.nav
              ref={menuRef}
              aria-label="Mobile navigation"
              onMouseDown={(e) => e.stopPropagation()}
              className="ml-auto h-full w-full max-w-xs sm:max-w-sm bg-black/90 backdrop-blur-lg border-l border-white/20 p-6 shadow-xl"
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
            >
              <button
                className="absolute top-4 right-4 text-platinum"
                onClick={closeMenu}
                aria-label="Close navigation"
              >
                ✕
              </button>
              <motion.ul
                className="mt-8 flex flex-col divide-y divide-platinum/20 border-t border-platinum/20"
                variants={{ open: { transition: { staggerChildren: 0.05 } } }}
              >
                {navItems.map((item) => (
                  <motion.li key={item.name} variants={itemVariants}>
                    <NavLink
                      to={item.path}
                      className={linkClasses}
                      onClick={closeMenu}
                      end
                    >
                      {item.name}
                    </NavLink>
                  </motion.li>
                ))}
                <motion.li variants={itemVariants}>
                  <a
                    href="https://forms.gle/b1Xg8pYkZABk4wN96"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cta-button px-4 py-2 text-sm"
                  >
                    Book Now
                  </a>
                </motion.li>
              </motion.ul>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
