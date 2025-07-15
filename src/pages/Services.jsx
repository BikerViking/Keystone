import { MotionSection, SEO, ServiceItem } from '../components';

export default function Services() {
  const categories = [
    {
      heading: 'General Notary',
      items: [
        'Mobile Notary Services',
        'General Acknowledgements',
        'After-Hours & Emergency Notary',
      ],
    },
    {
      heading: 'Personal & Family',
      items: [
        'Oaths & Affirmations',
        'Affidavits & Sworn Statements',
        'Wills & Trusts',
        'Power of Attorney',
        'Medical Directives',
      ],
    },
    {
      heading: 'Business & Legal',
      items: [
        'Contracts',
        'Legal Filings',
        'Document Certification',
        'I-9 Employment Verification',
      ],
    },
    {
      heading: 'Real Estate',
      items: [
        'Deed Transfers',
        'Loan Signing Appointments',
      ],
    },
  ];

  return (
    <>
      <MotionSection className="relative w-full py-12 px-4 text-center sm:px-8">
        <SEO
          title="Notary Services | Keystone Notary Group"
          description="Explore our full range of notary services including loan signings, apostilles, and more."
          path="/services"
        />
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-20 [background:radial-gradient(circle_at_center,_rgba(255,255,255,0.05),_transparent)]" />
        <h1 className="relative z-10 text-4xl font-serif font-semibold tracking-wide heading-gradient text-silver">
          Our Professional Services
        </h1>
      </MotionSection>
      <MotionSection className="flex w-full flex-col gap-12 px-4 pb-8 sm:px-8">
        <div className="mx-auto w-full max-w-5xl space-y-12">
          {categories.map(({ heading, items }) => (
            <section key={heading} className="flex flex-col gap-6">
              <h2 className="text-2xl font-semibold text-silver">{heading}</h2>
              <ul className="flex flex-col gap-4">
                {items.map((title) => (
                  <ServiceItem key={title} title={title} />
                ))}
              </ul>
            </section>
          ))}
          <a
            href="https://forms.gle/b1Xg8pYkZABk4wN96"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-button mt-4 self-center"
          >
            Book Now
          </a>
        </div>
      </MotionSection>
    </>
  );
}
