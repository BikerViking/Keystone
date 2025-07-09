import { motion } from 'framer-motion';
import clsx from 'clsx';

// Animate sections as they enter the viewport to draw subtle attention
export default function MotionSection({ children, className = '', ...props }) {
  return (
    <motion.section
      {...props}
      className={clsx(className)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
    >
      {children}
    </motion.section>  );
}
