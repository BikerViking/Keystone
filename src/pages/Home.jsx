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

      {/* Separate section with explicit landmarks for accessibility */}
      <MotionSection
        aria-labelledby="why-heading"
        className="container flex flex-col items-center gap-6 py-8 text-center"
      >
        <h2
          id="why-heading"
          className="why-heading text-3xl font-serif font-semibold tracking-wide heading-gradient text-silver"
        >
          Why Choose Us?
        </h2>
        <p className="text-lg text-platinum">
          Keystone Notary Group, LLC provides professional, reliable, and
          convenient mobile notary services. We bring the notary public to you.
        </p>
      </MotionSection>

      {/* Apply margin and border to visually separate from the text above */}
      <Credentials />    </>  );}