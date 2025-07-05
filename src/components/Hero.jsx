import { motion } from 'framer-motion';

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
        <div className="mx-auto flex h-40 w-40 items-center justify-center rounded-md bg-black text-platinum shadow-lg">
          Logo Reveal Coming Soon
        </div>
        <h1 className="text-4xl font-serif font-semibold tracking-wide heading-gradient md:text-6xl">Keystone Notary Group</h1>
        <p className="text-lg font-light md:text-2xl">Reliable Mobile Notary Services</p>
        <motion.a
          href="#contact"
          whileHover={{ y: -2, boxShadow: '0 4px 15px rgba(255,255,255,0.15)' }}
          className="cta-button hover:border-silver hover:text-silver"
        >
          Schedule Appointment
        </motion.a>
      </motion.div>
    </section>
  );
}
