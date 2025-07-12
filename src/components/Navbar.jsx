import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import clsx from "clsx";
import { navLinkStyles } from "./variants";
import GridIcon from "./GridIcon";

// Slide down for mobile menu with subtle fade
const menuVariants = {
  closed: { height: 0, opacity: 0 },
  open: {
    height: "auto",
    opacity: 1,
    transition: { duration: 0.3, staggerChildren: 0.05 },
  },
};

const itemVariants = {
  closed: { opacity: 0, y: -10 },
  open: { opacity: 1, y: 0 },
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
  const [scrolled, setScrolled] = useState(false);
  const toggle = () => setOpen((prev) => !prev);
  const closeMenu = () => setOpen(false);

  // Close menu on Escape key for accessibility
  useEffect(() => {
    if (!open) return;
    function handleKey(event) {
      if (event.key === "Escape") closeMenu();
    }
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
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
        'fixed inset-x-0 top-0 z-50 border-b border-silver bg-charcoal/90 backdrop-blur-md transition-shadow',
        scrolled && 'shadow-md',
      )}
    >
      <nav className="mx-auto grid max-w-5xl grid-cols-3 items-center px-4 py-3 sm:px-6 md:py-4">
        <div className="flex md:hidden">
          <button
            onClick={toggle}
            aria-label="Toggle navigation"
            aria-expanded={open}
            className="flex items-center justify-center p-2 focus:outline-none focus:ring-2 focus:ring-platinum"
          >
            <GridIcon className="h-6 w-6 text-platinum transition-colors hover:text-silver" />
          </button>
        </div>
        <Link
          to="/"
          className="justify-self-center whitespace-nowrap rounded border border-transparent px-3 font-serif text-xl font-semibold text-white transition-colors hover:border-silver hover:text-silver"
        >
          Keystone Notary Group, LLC
        </Link>
        <ul className="hidden items-center justify-end gap-x-8 md:flex">
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
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="overflow-hidden border-b border-silver bg-charcoal md:hidden"
          >
            <motion.nav aria-label="Mobile navigation" className="px-4">
              <motion.ul
                className="flex flex-col items-center gap-4 py-4"
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
