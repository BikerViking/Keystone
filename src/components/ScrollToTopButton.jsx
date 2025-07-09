import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          key="scroll"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
          onClick={handleClick}
          aria-label="Scroll to top"
          className="fixed bottom-4 right-4 rounded-full bg-deepgray p-3 text-white transition hover:text-silver shadow-lg focus:outline-none focus:ring focus:ring-platinum"
        >
          ↑
        </motion.button>
      )}
    </AnimatePresence>
  );
}
