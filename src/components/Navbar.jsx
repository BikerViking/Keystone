import { useState, useRef, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

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

  const linkClasses = ({ isActive }) =>
    // Deep gray items stand out against the black overlay
    `block rounded border border-transparent bg-deepgray px-3 py-2 text-lg font-medium transition-colors hover:bg-charcoal hover:border-silver hover:text-silver hover:shadow ${
      isActive ? "text-silver shadow-inner" : "text-platinum"
    }`;

  return (
    <header
      role="banner"
      className="fixed inset-x-0 top-0 z-50 bg-black/80 backdrop-blur-md"
    >
      <nav className="container flex items-center justify-between py-3 md:py-4">
        <Link
          to="/"
          className="flex items-center rounded border border-transparent px-3 text-xl font-semibold font-serif tracking-wide text-white transition-colors hover:border-silver hover:text-silver"
        >
          Keystone Notary Group, LLC
        </Link>
        <button
          className="md:hidden flex flex-col items-center justify-center"
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
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween" }}
            className="fixed inset-0 z-40 bg-black md:hidden"
            onClick={closeMenu}
            role="presentation"
          >
            <nav
              ref={menuRef}
              aria-label="Mobile navigation"
              onClick={(e) => e.stopPropagation()}
              className="relative h-full p-6 mt-8"
            >
              <button
                className="absolute top-4 right-4 text-platinum"
                onClick={closeMenu}
                aria-label="Close navigation"
              >
                ✕
              </button>
              {/* Mobile menu with a solid background behind item gaps */}
              <ul className="space-y-4 bg-black">
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
                </ul>
              </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
