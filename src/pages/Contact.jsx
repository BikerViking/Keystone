import MotionSection from '../components/MotionSection';

export default function Contact() {
  return (
    <MotionSection id="contact" className="container space-y-6">
      <h1 className="text-4xl font-serif font-semibold tracking-wide heading-gradient text-silver">Contact Us</h1>
      <p className="text-lg text-platinum">
        Email us at{' '}
        <a href="mailto:info@keystonenotarygroup.com" className="underline transition-colors hover:text-silver">
          info@keystonenotarygroup.com
        </a>
      </p>
    </MotionSection>
  );
}
