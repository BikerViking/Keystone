import MotionSection from '../components/MotionSection';

export default function About() {
  return (
    <MotionSection className="container space-y-6">
      <h1 className="text-4xl font-serif font-semibold tracking-wide heading-gradient text-silver">About Us</h1>
      <p className="text-lg text-platinum">
        Keystone Notary Group is dedicated to providing high-quality notary services
        with integrity and professionalism.
      </p>
    </MotionSection>
  );
}
