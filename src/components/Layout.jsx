import { useRef, useState } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { AnimatePresence, motion, useMotionValue, animate } from 'framer-motion';
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
  const [showIndicator, setShowIndicator] = useState(true);

  // Define page order to allow sequential navigation via swipes
  const pages = ['/', '/about', '/services', '/faq', '/prices', '/contact'];
  const index = pages.indexOf(location.pathname);

  function goNext() {
    if (index === -1) return;
    const nextIndex = (index + 1) % pages.length;
    setDirection(-1); // Slide left when moving forward
    setShowIndicator(false);
    navigate(pages[nextIndex]);
  }

  function goPrev() {
    if (index === -1) return;
    const prevIndex = (index - 1 + pages.length) % pages.length;
    setDirection(1); // Slide right when moving backward
    setShowIndicator(false);
    navigate(pages[prevIndex]);
  }

  function goTo(i) {
    if (i === index || index === -1) return;
    setDirection(i > index ? -1 : 1);
    setShowIndicator(false);
    navigate(pages[i]);
  }


  // Track horizontal drag offset in real time
  const dragX = useMotionValue(0);
  const dragState = useRef({
    startX: 0,
    startY: 0,
    time: 0,
    dragging: false,
    horizontal: false,
  });

  // Normalize pointer and touch events to get client coordinates
  function point(event) {
    if ('touches' in event && event.touches.length) return event.touches[0];
    if ('changedTouches' in event && event.changedTouches.length)
      return event.changedTouches[0];
    return event;
  }

  // Start tracking on pointer down to later decide if it's a swipe or scroll
  function handleStart(event) {
    const p = point(event);
    dragState.current = {
      startX: p.clientX,
      startY: p.clientY,
      time: event.timeStamp,
      dragging: true,
      horizontal: false,
    };
  }

  // Update motion value during horizontal drag; cancel if user scrolls vertically
  function handleMove(event) {
    const state = dragState.current;
    if (!state.dragging) return;
    const p = point(event);
    const dx = p.clientX - state.startX;
    const dy = p.clientY - state.startY;
    if (!state.horizontal) {
      if (Math.abs(dx) > 10 && Math.abs(dx) > Math.abs(dy)) {
        state.horizontal = true;
      } else if (Math.abs(dy) > 10) {
        // User moved more vertically than horizontally, allow scrolling
        state.dragging = false;
        return;
      }
    }
    if (state.horizontal) {
      // Prevent vertical scrolling once horizontal intent is confirmed
      event.preventDefault();
      dragX.set(dx);
    }
  }

  // On release, decide whether to navigate or snap back based on distance/speed
  function handleEnd(event) {
    const state = dragState.current;
    if (!state.dragging && !state.horizontal) return;
    const p = point(event);
    const dx = p.clientX - state.startX;
    const dt = event.timeStamp - state.time;
    const velocity = dx / dt;
    state.dragging = false;
    const threshold = 80;
    const speed = 0.5;
    if (state.horizontal && (Math.abs(dx) > threshold || Math.abs(velocity) > speed)) {
      const dir = dx < 0 ? -1 : 1;
      // Continue motion off screen before navigating to the next page
      animate(dragX, dir * window.innerWidth, {
        type: 'spring',
        stiffness: 260,
        damping: 30,
        duration: 0.35,
      }).then(() => {
        dir < 0 ? goNext() : goPrev();
        dragX.set(0);
      });
    } else {
      // Not enough momentum: return to starting position
      animate(dragX, 0, { type: 'spring', stiffness: 300, damping: 30, duration: 0.35 });
    }
  }

  const variants = {
    enter: (dir) => ({ x: dir > 0 ? -window.innerWidth : window.innerWidth, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir) => ({ x: dir > 0 ? window.innerWidth : -window.innerWidth, opacity: 0 }),
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
            onPointerDown={handleStart}
            onPointerMove={handleMove}
            onPointerUp={handleEnd}
            onTouchStart={handleStart}
            onTouchMove={handleMove}
            onTouchEnd={handleEnd}
            style={{ x: dragX }}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            custom={direction}
            transition={{ type: 'tween', duration: 0.4, ease: 'easeInOut' }}
            onAnimationComplete={() => {
              setDirection(0);
              setShowIndicator(true);
            }}
            id="content"
            className="flex-grow pt-16"
          >
            <Outlet />
          </motion.main>
        </AnimatePresence>
        <AnimatePresence initial={false}>
          {showIndicator && (
            <PageIndicator
              key={location.pathname}
              pages={pages}
              current={index}
              onSelect={goTo}
              className="fixed inset-x-0 bottom-10 pointer-events-none md:hidden"
            />
          )}
        </AnimatePresence>
        <Footer />
        <ScrollToTopButton />
        <ChatWidget />
      </div>
    </>
  );
}
