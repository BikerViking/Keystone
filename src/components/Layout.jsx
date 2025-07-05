import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';

function Layout() {
  const location = useLocation();
  const MotionMain = motion.main;
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 font-sans">
      <Header />
      <AnimatePresence mode="wait" initial={false}>
        <MotionMain
          key={location.pathname}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="mx-auto max-w-6xl px-4 py-8"
        >
          <Outlet />
        </MotionMain>
      </AnimatePresence>
      <Footer />
    </div>
  );
}

export default Layout;
