import { Hero, Credentials, MotionSection, SEO } from '../components';

export default function Home() {
  return (
    <>
      <SEO
        title="Keystone Notary Group | Mobile Notary Services in Philadelphia"
        description="Professional mobile notary services serving Philadelphia and surrounding counties."
        path="/"
      />
      <Hero />
      <MotionSection className="container space-y-6 text-center">
        <h2 className="why-heading text-3xl font-serif font-semibold tracking-wide heading-gradient text-silver">
          Why Choose Us?
        </h2>
        <p className="text-lg text-platinum">
          Keystone Notary Group, LLC provides professional, reliable, and
          convenient mobile notary services. We bring the notary public to you.
        </p>
      </MotionSection>
      <Credentials />
    </>
  );
}
