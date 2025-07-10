import { useState } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { useSwipeable } from 'react-swipeable';
import Navbar from './Navbar';
import Footer from './Footer';
import ScrollToTopButton from './ScrollToTopButton';
import StructuredData from './StructuredData';
import ChatWidget from './ChatWidget';
import PageIndicator from './PageIndicator';

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

  function goTo(i) {
    if (i === index || index === -1) return;
    setDirection(i > index ? -1 : 1);
    navigate(pages[i]);
  }

  const handlers = useSwipeable({
    onSwipedLeft: goNext,
    onSwipedRight: goPrev,
    trackMouse: true,
    delta: 40,
  });

  const variants = {
    enter: (dir) => ({ x: dir > 0 ? -30 : 30, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir) => ({ x: dir > 0 ? 30 : -30, opacity: 0 }),
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
            {...handlers}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            custom={direction}
            transition={{ type: 'tween', duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
            onAnimationComplete={() => setDirection(0)}
            id="content"
            className="flex-grow pt-16"
          >
            <Outlet />
          </motion.main>
        </AnimatePresence>
        <PageIndicator pages={pages} current={index} onSelect={goTo} />
        <Footer />
        <ScrollToTopButton />
        <ChatWidget />
      </div>
    </>
  );
}
