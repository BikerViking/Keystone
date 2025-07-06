import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const MotionLink = motion(Link);

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center bg-charcoal text-center px-4">
      <div className="absolute inset-0 bg-black/80" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 space-y-6"
      >
        <div className="mx-auto h-40 w-40 md:h-48 md:w-48 flex items-center justify-center">
          {/* Use a picture element so browsers lacking SVG animation support fall back to the static logo */}
          <picture>
            <source srcSet="/logo-animated.svg" type="image/svg+xml" />
            <img
              src="/logo.svg"
              alt="Keystone Notary Group Logo"
              className="h-full w-full"
            />
          </picture>
        </div>
        <h1 className="text-4xl font-serif font-semibold tracking-wide heading-gradient md:text-6xl">
          Keystone Notary Group, LLC
        </h1>
        <p className="text-lg font-light md:text-2xl">Reliable Mobile Notary Services</p>
        <MotionLink
          to="/contact#contact"
          whileHover={{ y: -2, boxShadow: '0 4px 15px rgba(255,255,255,0.15)' }}
          className="cta-button hover:border-silver hover:text-silver"
        >
          Schedule Appointment
        </MotionLink>
      </motion.div>
    </section>
  );
}
