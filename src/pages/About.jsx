import { Link } from 'react-router-dom';
import { MotionSection, SEO } from '../components';

export default function About() {
  return (
    <MotionSection className="relative w-full py-8 px-4 sm:px-8">
      <SEO
        title="About Keystone Notary Group | Professional Mobile Notaries"
        description="Learn about Keystone Notary Group, our mission, and the services we provide across the Greater Philadelphia area."
        path="/about"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-20 [background:radial-gradient(circle_at_center,_rgba(255,255,255,0.05),_transparent)]"
      />
      <div className="mx-auto w-full max-w-3xl flex flex-col gap-8">
        <h1 className="text-4xl font-serif font-semibold tracking-wide heading-gradient text-silver">
          About Us
        </h1>
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-silver">Mission</h2>
          <p className="text-lg text-platinum">
            Keystone Notary Group, LLC is a Pennsylvania-commissioned mobile notary company providing reliable mobile notarization throughout the Greater Philadelphia area.
            Our commitment is to accuracy, confidentiality and convenience for every signing.
          </p>
        </section>
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-silver">Service Area</h2>
          <ul className="list-disc pl-6 text-platinum">
            <li>Bucks County</li>
            <li>Montgomery County</li>
            <li>Philadelphia County</li>
            <li>Delaware County</li>
            <li>Chester County</li>
          </ul>
        </section>
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-silver">Our Team</h2>
          <p className="text-lg text-platinum">
            Commissioned by the Commonwealth of Pennsylvania, every notary is an NNA Certified Signing Agent who is bonded and insured with up-to-date background checks and extensive signing experience.
          </p>
        </section>
        <Link
          to="/"
          className="cta-button mt-4 inline-block"
        >
          Back to Home
        </Link>
      </div>
    </MotionSection>
  );
}
