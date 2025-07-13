import { MotionSection, SEO, ServiceItem } from '../components';

export default function Services() {
  const categories = [
    {
      heading: 'General Notary',
      items: [
        {
          title: 'Mobile Notary Services',
          desc: 'Convenient on-site notarization at your home, office, or other location.',
        },
        {
          title: 'General Acknowledgements',
          desc: 'Verification of signatures for a variety of documents.',
        },
        {
          title: 'After-Hours & Emergency Notary',
          desc: 'Provide notary services outside regular business hours or on short notice, subject to availability and applicable surcharges.',
        },
      ],
    },
    {
      heading: 'Personal & Family',
      items: [
        {
          title: 'Oaths & Affirmations',
          desc: 'Administer legally binding oaths and affirmations for affidavits, statements, and declarations.',
        },
        {
          title: 'Affidavits & Sworn Statements',
          desc: 'Preparation and notarization of affidavits and sworn statements.',
        },
        {
          title: 'Wills & Trusts',
          desc: 'Execution of wills, living wills, and trust documents.',
        },
        {
          title: 'Power of Attorney',
          desc: 'Preparation and notarization of power of attorney forms.',
        },
        {
          title: 'Medical Directives',
          desc: 'Notarization of healthcare directives and related documents.',
        },
      ],
    },
    {
      heading: 'Business & Legal',
      items: [
        {
          title: 'Contracts',
          desc: 'Witnessing and notarizing contract agreements and amendments.',
        },
        {
          title: 'Legal Filings',
          desc: 'Assistance with notarizing and submitting legal documents and filings.',
        },
        {
          title: 'Document Certification',
          desc: 'Certify copies of documents as true and accurate when allowed by law.',
        },
        {
          title: 'I-9 Employment Verification',
          desc: 'Authorized completion of Form I-9 as an employer agent.',
        },
      ],
    },
    {
      heading: 'Real Estate',
      items: [
        {
          title: 'Deed Transfers',
          desc: 'Notarization services for property deeds and title transfers.',
        },
        {
          title: 'Loan Signing Appointments',
          desc: 'Professional handling of mortgage closings and refinance packages.',
        },
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
              <ul className="grid grid-flow-dense gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
                {items.map(({ title, desc }, idx) => (
                  <ServiceItem key={title} id={`${heading}-${idx}`} title={title} desc={desc} />
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
