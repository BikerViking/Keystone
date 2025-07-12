import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import clsx from "clsx";
import { navLinkStyles } from "./variants";
import GridIcon from "./GridIcon";

// Menu reveal with gentle spring for a premium feel
const menuVariants = {
  closed: {
    height: 0,
    opacity: 0,
    transition: {
      height: { type: "spring", stiffness: 80, damping: 20 },
      opacity: { duration: 0.2 },
      staggerChildren: 0.04,
      staggerDirection: -1,
    },
  },
  open: {
    height: "auto",
    opacity: 1,
    transition: {
      height: { type: "spring", stiffness: 80, damping: 15 },
      opacity: { duration: 0.25 },
      staggerChildren: 0.06,
    },
  },
};

const itemVariants = {
  closed: { opacity: 0, y: -10 },
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 80, damping: 20 },
  },
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

  // Close mobile menu when orientation or viewport width changes
  useEffect(() => {
    const closeOnChange = () => {
      if (window.innerWidth >= 768) setOpen(false);
    };
    window.addEventListener("orientationchange", closeOnChange);
    window.addEventListener("resize", closeOnChange);
    return () => {
      window.removeEventListener("orientationchange", closeOnChange);
      window.removeEventListener("resize", closeOnChange);
    };
  }, []);

  // Dismiss mobile menu when tapping outside
  useEffect(() => {
    if (!open) return;
    function handleClick(event) {
      if (
        event.target.closest(".landscape-menu") ||
        event.target.closest(".landscape-toggle")
      ) {
        return;
      }
      closeMenu();
    }
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [open]);

  return (
    <motion.header
      role="banner"
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={clsx(
        "fixed inset-x-0 top-0 z-50 border-b border-silver bg-charcoal/90 backdrop-blur-md transition-shadow",
        scrolled && "shadow-md",
      )}
    >
      <nav className="mx-auto grid max-w-5xl grid-cols-[1fr_auto_1fr] items-center px-4 py-3 sm:px-6 md:py-4">
        <div className="col-start-3 flex justify-self-end md:hidden landscape-toggle">
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
          className="col-start-2 justify-self-center whitespace-nowrap rounded border border-transparent px-3 font-serif text-xl font-semibold text-white transition-colors hover:border-silver hover:text-silver landscape-brand"
        >
          Keystone Notary Group, LLC
        </Link>
        <ul className="hidden items-center justify-end gap-x-8 md:flex landscape-links col-start-3 justify-self-end">
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
            className="landscape-menu overflow-hidden border-b border-silver bg-charcoal md:hidden"
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
