import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import PhoneIcon from './PhoneIcon';

// framer-motion 11 deprecates `motion()` in favor of `motion.create()`
// Use the new API to avoid deprecation warnings during tests
const MotionLink = motion.create(Link);

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center text-center">
      {/* Semi-transparent overlay for better text readability over the background */}
      <div className="absolute inset-0 bg-black/80" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container relative z-10 flex flex-col items-center space-y-8 px-4 lg:space-y-10"
      >
        <h1 className="text-4xl font-serif font-semibold tracking-wide heading-gradient lg:text-6xl">
          Keystone Notary Group, LLC
        </h1>
        <p className="text-lg font-light lg:text-2xl">Reliable Mobile Notary Services</p>
        <a
          href="tel:2673099000"
          aria-label="Call or text 267-309-9000"
          className="flex items-center justify-center gap-2 py-2 text-platinum hover:text-silver focus:outline-none focus:ring focus:ring-platinum"
        >
          <PhoneIcon className="h-5 w-5" />
          <span className="whitespace-nowrap">Call or Text: (267) 309-9000</span>
        </a>
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
