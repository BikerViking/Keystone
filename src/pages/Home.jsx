import Hero from '../components/Hero';
import Credentials from '../components/Credentials';
import MotionSection from '../components/MotionSection';

export default function Home() {
  return (
    <>
      <Hero />
      <MotionSection className="container space-y-8">
        <h2 className="text-3xl font-serif font-semibold tracking-wide heading-gradient text-silver">Why Choose Us?</h2>
        <p className="text-lg text-platinum">
          Keystone Notary Group provides professional, reliable, and convenient mobile
          notary services. We bring the notary public to you.
        </p>
      </MotionSection>
      <Credentials />
    </>
  );
}
