import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center bg-hero bg-cover bg-center text-center">
      <div className="absolute inset-0 bg-black/80" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 space-y-6"
      >
        <div className="mx-auto flex h-40 w-40 items-center justify-center rounded-md bg-black text-platinum shadow-2xl">
          Logo Reveal Coming Soon
        </div>
        <h1 className="text-4xl font-serif font-semibold tracking-wide heading-gradient md:text-6xl">Keystone Notary Group</h1>
        <p className="text-lg font-light md:text-2xl">Reliable Mobile Notary Services</p>
        <a
          href="#contact"
          className="inline-block rounded border border-platinum bg-[#1a1a1a] px-8 py-3 text-lg font-medium text-white transition hover:text-silver hover:border-silver hover:shadow-lg"
        >
          Request Notary
        </a>
      </motion.div>
    </section>
  );
}
