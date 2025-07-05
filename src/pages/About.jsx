import { Link } from 'react-router-dom';
import { MotionSection } from '../components';

export default function About() {
  return (
    <MotionSection className="relative container space-y-8 py-8">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-20 [background:radial-gradient(circle_at_center,_rgba(255,255,255,0.05),_transparent)]"
      />
      <h1 className="text-4xl font-serif font-semibold tracking-wide heading-gradient text-silver">
        About Us
      </h1>
      <p className="text-lg text-platinum">
        Keystone Notary Group, LLC is a Pennsylvania-commissioned mobile notary
        company serving the Greater Philadelphia area.
      </p>
      <p className="text-lg text-platinum">
        We provide in-person notarizations to individuals, attorneys, financial
        institutions, and the general public. All agents are NNA Certified
        Notary Signing Agents with current background checks and are bonded and
        insured.
      </p>
      <p className="text-lg text-platinum">
        Known for professionalism, punctuality, confidentiality, and document
        accuracy, we also offer after-hours and emergency notarizations for
        time-sensitive needs.
      </p>
      <h2 className="text-3xl font-serif font-semibold tracking-wide heading-gradient text-silver">
        Service Area
      </h2>
      <p className="text-lg text-platinum">
        Our notaries travel throughout Bucks, Montgomery, Philadelphia, Delaware,
        and Chester Counties.
      </p>
      <Link
        to="/"
        className="cta-button mt-4 inline-block hover:border-silver hover:text-silver"
      >
        Back to Home
      </Link>
    </MotionSection>
  );
}
