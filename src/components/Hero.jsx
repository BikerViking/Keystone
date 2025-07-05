import { motion } from 'framer-motion';
import logo from '../assets/logo.svg';

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center bg-hero bg-cover bg-center text-center">
      <div className="absolute inset-0 bg-gray-950/80" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 space-y-6"
      >
        <img src={logo} alt="Keystone Notary Group" className="mx-auto h-24 w-24" />
        <h1 className="text-4xl font-serif font-bold md:text-6xl">Keystone Notary Group</h1>
        <p className="text-lg font-light md:text-2xl">Reliable Mobile Notary Services</p>
        <a
          href="#contact"
          className="inline-block rounded bg-primary-600 px-8 py-3 text-lg font-medium text-white transition hover:bg-primary-500"
        >
          Request Notary
        </a>
      </motion.div>
    </section>
  );
}
