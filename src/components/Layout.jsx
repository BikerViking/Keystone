import { Outlet, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './Navbar';
import Footer from './Footer';
import ScrollToTopButton from './ScrollToTopButton';
import StructuredData from './StructuredData';

export default function Layout() {
  const location = useLocation();

  return (
    <> 
      <StructuredData />
      <div className="flex min-h-screen flex-col bg-charcoal text-platinum">
        <Navbar />
        <AnimatePresence mode="wait">
          <motion.main
            key={location.pathname}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="flex-grow pt-16"
          >
            <Outlet />
          </motion.main>
        </AnimatePresence>
        <Footer />
        <ScrollToTopButton />
      </div>
    </>
  );
}
