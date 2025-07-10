import { useState } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { useSwipeable } from 'react-swipeable';
import Navbar from './Navbar';
import Footer from './Footer';
import ScrollToTopButton from './ScrollToTopButton';
import StructuredData from './StructuredData';
import ChatWidget from './ChatWidget';

export default function Layout() {
  const location = useLocation();
  const navigate = useNavigate();
  const [direction, setDirection] = useState(0);

  // Define page order to allow sequential navigation via swipes
  const pages = ['/', '/about', '/services', '/faq', '/prices', '/contact'];
  const index = pages.indexOf(location.pathname);

  function goNext() {
    if (index === -1) return;
    const nextIndex = (index + 1) % pages.length;
    setDirection(-1); // Slide left when moving forward
    navigate(pages[nextIndex]);
  }

  function goPrev() {
    if (index === -1) return;
    const prevIndex = (index - 1 + pages.length) % pages.length;
    setDirection(1); // Slide right when moving backward
    navigate(pages[prevIndex]);
  }

  const isTouch = typeof window !== 'undefined' &&
    ('ontouchstart' in window || navigator.maxTouchPoints > 0);
  const handlers = useSwipeable({ onSwipedLeft: goNext, onSwipedRight: goPrev });

  const variants = {
    enter: (dir) => ({ x: dir > 0 ? -50 : 50, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir) => ({ x: dir > 0 ? 50 : -50, opacity: 0 }),
  };

  return (
    <>
      <StructuredData />
      <div className="flex min-h-screen flex-col bg-charcoal text-platinum">
        {/* Accessibility skip link lets keyboard users bypass repetitive navigation */}
        <a
          href="#content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 rounded bg-deepgray px-3 py-2 focus:outline-none focus:ring-2 focus:ring-platinum"
        >
          Skip to content
        </a>
        <Navbar />
        <AnimatePresence mode="wait" custom={direction}>
          <motion.main
            key={location.pathname}
            {...(isTouch ? handlers : {})}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            custom={direction}
            transition={{ type: 'tween', duration: 0.3 }}
            onAnimationComplete={() => setDirection(0)}
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
