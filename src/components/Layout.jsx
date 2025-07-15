import { Outlet, useLocation } from 'react-router-dom';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import Navbar from './Navbar';
import Footer from './Footer';
import ScrollToTopButton from './ScrollToTopButton';
import StructuredData from './StructuredData';
import ChatWidget from './ChatWidget';

export default function Layout() {
  const location = useLocation();
  const reduce = useReducedMotion();

  return (
    <>
      <StructuredData />
      <div className="flex min-h-screen flex-col bg-offwhite text-charcoal">
        {/* Accessibility skip link lets keyboard users bypass repetitive navigation */}
        <a
          href="#content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 rounded bg-deepgray px-3 py-2 focus:outline-none focus:ring-2 focus:ring-platinum"
        >
          Skip to content
        </a>
        <Navbar />
        <AnimatePresence mode="wait">
          <motion.main
            key={location.pathname}
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={reduce ? false : { opacity: 0 }}
            transition={{ duration: 0.3 }}
            id="content"
            className="flex-grow pt-16"
          >
            <Outlet />
          </motion.main>
        </AnimatePresence>
        <Footer />
        <ScrollToTopButton />
        <ChatWidget />
      </div>
    </>
  );
}
