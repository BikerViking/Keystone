import { Hero, Credentials, MotionSection, SEO } from '../components';
import { sectionSpacing } from '../components/variants';

export default function Home() {
  return (
    <>
      <SEO
        title="Keystone Notary Group | Mobile Notary Services in Philadelphia"
        description="Professional mobile notary services serving Philadelphia and surrounding counties."
        path="/"
      />
      <Hero />

      {/* Why Choose Us section explains our value prop */}
      <MotionSection
        aria-labelledby="why-heading"
        className={`flex w-full flex-col items-center gap-6 px-4 sm:px-8 text-center ${sectionSpacing}`}
      >
        <h2
          id="why-heading"
          className="why-heading w-full text-3xl font-serif font-semibold tracking-wide heading-gradient text-silver"
        >
          Why Choose Us?
        </h2>
        <p className="text-lg text-lightgray">
          Keystone Notary Group, LLC provides professional, reliable, and
          convenient mobile notary services. We bring the notary public to you.
        </p>
      </MotionSection>
      <Credentials />
    </>
  );
}
