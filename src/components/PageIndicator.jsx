import { motion } from 'framer-motion';
import clsx from 'clsx';

export default function PageIndicator({ pages, current, onSelect, className }) {
  return (
    <motion.nav
      aria-label="Page indicator"
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.4 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      className={clsx(className)}
    >
      <ul className="pointer-events-auto relative flex items-center justify-center gap-2">
        {pages.map((page, i) => (
          <li key={page} className="relative">
            {current === i && (
              <motion.span
                layoutId="active-dot"
                className="absolute inset-0 rounded-full bg-accent"
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              />
            )}
            <button
              type="button"
              onClick={() => onSelect(i)}
              aria-label={`Go to page ${i + 1}`}
              className={clsx(
                'relative h-2 w-2 rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-accent',
                current === i ? 'opacity-100' : 'bg-platinum/40 opacity-60'
              )}
            >
              <span className="sr-only">{`Page ${i + 1}`}</span>
            </button>
          </li>
        ))}
      </ul>
    </motion.nav>
  );
}
