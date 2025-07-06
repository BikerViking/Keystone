import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

// framer-motion 11 deprecates `motion()` in favor of `motion.create()`
// Use the new API to avoid deprecation warnings during tests
const MotionLink = motion.create(Link);

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center bg-charcoal text-center">
      {/* Semi-transparent overlay for better text readability over the background */}
      <div className="absolute inset-0 bg-black/80" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container relative z-10 flex flex-col items-center space-y-6 px-4"
      >
        {/* Display static logo image until animated version is finalized */}
        <img
          src="/logo.svg"
          alt="Keystone Notary Group logo"
          className="h-40 w-40 md:h-48 md:w-48"
        />
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
