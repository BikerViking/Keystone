import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import clsx from 'clsx';

export default function ServiceItem({ id, title, desc }) {
  const [open, setOpen] = useState(false);
  return (
    <li className="overflow-hidden rounded border border-platinum">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls={`service-desc-${id}`}
        id={`service-header-${id}`}
        className="flex w-full items-center justify-between bg-deepgray px-4 py-3 text-left text-platinum hover:bg-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-silver"
      >
        <span className="font-medium">{title}</span>
        <svg
          className={clsx('h-5 w-5 transform transition-transform', open ? 'rotate-180 text-silver' : 'text-platinum')}
          viewBox="0 0 20 20"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        >
          <path d="M6 8l4 4 4-4" />
        </svg>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={`service-desc-${id}`}
            role="region"
            aria-labelledby={`service-header-${id}`}
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="px-4 pb-4 pt-2 text-sm text-platinum"
          >
            <p>{desc}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  );
}
