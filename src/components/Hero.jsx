import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import PhoneIcon from './PhoneIcon';

const MotionAnchor = motion.a;

export default function Hero() {
  // Parallax effect: move logo slightly slower than scroll for depth
  const reduce = useReducedMotion();
  const { scrollY } = useScroll();
  // Parallax values keep logo and tagline subtly offset for depth
  const logoY = useTransform(scrollY, [0, 300], [0, reduce ? 0 : -40]);
  const taglineY = useTransform(scrollY, [0, 200], [0, reduce ? 0 : -10]);
  return (
    <section className="hero-layer relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-black px-4 text-center sm:px-8">
      {/* Gradient overlay improves text legibility without obscuring background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/70 to-transparent" />
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center gap-8 px-4 sm:px-8 lg:gap-10"
      >
        {/*
          Group brand elements for easier layout tuning and animation hooks.
          The wrapper also keeps logo and heading aligned across breakpoints.
        */}
        <header className="flex flex-col items-center">
          {/* Logo shifts with scroll for a subtle parallax effect */}
          <motion.div
            style={{ y: reduce ? 0 : logoY }}
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="logo-wrapper mx-auto mb-6 mt-6"
          >
            <img
              src="/hero-logo.webp"
              alt="Keystone Notary Group logo"
              width="1024"
              height="1024"
              className="h-auto w-72 max-w-full sm:w-80 md:w-96 lg:w-[30rem]"
              draggable={false}
            />
          </motion.div>
          <h1 className="sr-only">Keystone Notary Group, LLC</h1>
        </header>
        <motion.p
          style={{ y: reduce ? 0 : taglineY }}
          className="text-lg font-light text-silver lg:text-2xl"
        >
          Reliable Mobile Notary Services
        </motion.p>
        <a
          href="tel:2673099000"
          aria-label="Call or text 267-309-9000"
          className="flex items-center justify-center gap-2 py-2 text-lightgray hover:text-silver focus:outline-none focus:ring focus:ring-platinum"
        >
          <PhoneIcon className="h-5 w-5" />
          <span className="whitespace-nowrap">Call or Text: (267) 309-9000</span>
        </a>
        <MotionAnchor
          href="https://forms.gle/b1Xg8pYkZABk4wN96"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ y: -2 }}
          className="cta-button"
        >
          Book Appointment
        </MotionAnchor>
        <p className="text-xs italic text-lightgray">
          Bookings are reviewed and confirmed before they’re official.
        </p>
        <a
          href="#why-heading"
          className="scroll-hint mt-4 text-silver focus:outline-none focus:ring-2 focus:ring-silver"
          aria-label="Scroll for more"
        >
          <span aria-hidden="true">↓</span>
        </a>
      </motion.div>
    </section>
  );
}
