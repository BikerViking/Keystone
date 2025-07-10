import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import PhoneIcon from './PhoneIcon';

// framer-motion 11 deprecates `motion()` in favor of `motion.create()`
// Use the new API to avoid deprecation warnings during tests
const MotionLink = motion.create(Link);
const MotionAnchor = motion.a;

export default function Hero() {
  return (
    <section className="relative flex min-h-screen w-full items-center justify-center bg-black px-4 text-center sm:px-8">
      {/* Semi-transparent overlay for better text readability over the background */}
      <div className="absolute inset-0 bg-black/80" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center gap-8 px-4 sm:px-8 lg:gap-10"
      >
        {/*
          Group brand elements for easier layout tuning and animation hooks.
          The wrapper also keeps logo and heading aligned across breakpoints.
        */}
        <header className="flex flex-col items-center">
          {/* Fade in logo separately so future animations can target it */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
            <img
              src="/hero-logo.PNG"
              alt="Keystone Notary Group logo on parchment"
              width="1024"
              height="1024"
              className="mx-auto mt-6 mb-6 h-auto w-[300px] max-w-full sm:w-[350px] md:w-[400px] lg:w-[450px] drop-shadow-lg"
              draggable={false}
            />
          </motion.div>
          <h1 className="hero-heading w-full text-4xl font-serif font-semibold tracking-wide heading-gradient lg:text-6xl">
            Keystone Notary Group, LLC
          </h1>
        </header>
        <p className="text-lg font-light text-silver lg:text-2xl">Reliable Mobile Notary Services</p>
        <a
          href="tel:2673099000"
          aria-label="Call or text 267-309-9000"
          className="flex items-center justify-center gap-2 py-2 text-platinum hover:text-silver focus:outline-none focus:ring focus:ring-platinum"
        >
          <PhoneIcon className="h-5 w-5" />
          <span className="whitespace-nowrap">Call or Text: (267) 309-9000</span>
        </a>
        <MotionAnchor
          href="https://forms.gle/b1Xg8pYkZABk4wN96"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ y: -2, boxShadow: '0 4px 15px rgba(255,255,255,0.15)' }}
          className="cta-button hover:border-silver hover:text-silver"
        >
          Book Appointment
        </MotionAnchor>
        <p className="text-xs italic text-platinum">
          Bookings are reviewed and confirmed before they’re official.
        </p>
      </motion.div>
    </section>
  );
}
