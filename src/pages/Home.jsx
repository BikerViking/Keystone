import Hero from '../components/Hero';

export default function Home() {
  return (
    <>
      <Hero />
      <section className="container py-16 space-y-8">
        <h2 className="text-3xl font-serif font-semibold tracking-wide">Why Choose Us?</h2>
        <p className="text-lg text-gray-300">
          Keystone Notary Group provides professional, reliable, and convenient mobile
          notary services. We bring the notary public to you.
        </p>
      </section>
    </>
  );
}
