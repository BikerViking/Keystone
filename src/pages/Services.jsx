import { MotionSection, SEO } from '../components';

export default function Services() {
  const services = [
    {
      title: 'Mobile Notary Services',
      desc:
        'Convenient on-site notarization at your home, office, or other location.',
      icon: (
        <svg viewBox="0 0 24 24" className="h-6 w-6 text-silver" aria-hidden="true">
          <path
            d="M12 2a7 7 0 00-7 7c0 5 7 13 7 13s7-8 7-13a7 7 0 00-7-7z"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="12" cy="9" r="2" fill="currentColor" />
        </svg>
      ),
    },
    {
      title: 'Oaths & Affirmations',
      desc:
        'Administer legally binding oaths and affirmations for affidavits, statements, and declarations.',
      icon: (
        <svg viewBox="0 0 24 24" className="h-6 w-6 text-silver" aria-hidden="true">
          <path
            d="M12 6v6l3 3"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
          />
          <path d="M5 19h14" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      title: 'Affidavits & Sworn Statements',
      desc: 'Preparation and notarization of affidavits and sworn statements.',
      icon: (
        <svg viewBox="0 0 24 24" className="h-6 w-6 text-silver" aria-hidden="true">
          <path d="M4 4h16v16H4z" fill="none" stroke="currentColor" strokeWidth="2" />
          <path d="M8 8h8M8 12h8M8 16h4" stroke="currentColor" strokeWidth="2" fill="none" />
        </svg>
      ),
    },
    {
      title: 'Legal Filings',
      desc: 'Assistance with notarizing and submitting legal documents and filings.',
      icon: (
        <svg viewBox="0 0 24 24" className="h-6 w-6 text-silver" aria-hidden="true">
          <path d="M6 3h12v18H6z" fill="none" stroke="currentColor" strokeWidth="2" />
          <path d="M6 7h12" stroke="currentColor" strokeWidth="2" />
        </svg>
      ),
    },
    {
      title: 'Deed Transfers',
      desc: 'Notarization services for property deeds and title transfers.',
      icon: (
        <svg viewBox="0 0 24 24" className="h-6 w-6 text-silver" aria-hidden="true">
          <path d="M4 12l8-8 8 8v8H4z" fill="none" stroke="currentColor" strokeWidth="2" />
        </svg>
      ),
    },
    {
      title: 'Wills & Trusts',
      desc: 'Execution of wills, living wills, and trust documents.',
      icon: (
        <svg viewBox="0 0 24 24" className="h-6 w-6 text-silver" aria-hidden="true">
          <path d="M6 4h12v16H6z" fill="none" stroke="currentColor" strokeWidth="2" />
          <path d="M8 8h8" stroke="currentColor" strokeWidth="2" />
        </svg>
      ),
    },
    {
      title: 'Contracts',
      desc: 'Witnessing and notarizing contract agreements and amendments.',
      icon: (
        <svg viewBox="0 0 24 24" className="h-6 w-6 text-silver" aria-hidden="true">
          <path d="M5 5h14v14H5z" fill="none" stroke="currentColor" strokeWidth="2" />
          <path d="M9 9h6M9 13h6" stroke="currentColor" strokeWidth="2" />
        </svg>
      ),
    },
    {
      title: 'Power of Attorney',
      desc: 'Preparation and notarization of power of attorney forms.',
      icon: (
        <svg viewBox="0 0 24 24" className="h-6 w-6 text-silver" aria-hidden="true">
          <path d="M12 2v20" stroke="currentColor" strokeWidth="2" />
          <path d="M5 9l7-7 7 7" fill="none" stroke="currentColor" strokeWidth="2" />
        </svg>
      ),
    },
    {
      title: 'Medical Directives',
      desc: 'Notarization of healthcare directives and related documents.',
      icon: (
        <svg viewBox="0 0 24 24" className="h-6 w-6 text-silver" aria-hidden="true">
          <path d="M12 2v20" stroke="currentColor" strokeWidth="2" />
          <path d="M5 12h14" stroke="currentColor" strokeWidth="2" />
        </svg>
      ),
    },
    {
      title: 'General Acknowledgements',
      desc: 'Verification of signatures for a variety of documents.',
      icon: (
        <svg viewBox="0 0 24 24" className="h-6 w-6 text-silver" aria-hidden="true">
          <path d="M5 13l4 4L19 7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      title: 'Loan Signing Appointments',
      desc: 'Professional handling of mortgage closings and refinance packages.',
      icon: (
        <svg viewBox="0 0 24 24" className="h-6 w-6 text-silver" aria-hidden="true">
          <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      title: 'Document Certification',
      desc: 'Certify copies of documents as true and accurate when allowed by law.',
      icon: (
        <svg viewBox="0 0 24 24" className="h-6 w-6 text-silver" aria-hidden="true">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2" stroke="currentColor" strokeWidth="2" fill="none" />
          <path d="M3 9h18M9 21V9" stroke="currentColor" strokeWidth="2" fill="none" />
        </svg>
      ),
    },
    {
      title: 'I-9 Employment Verification',
      desc: 'Authorized completion of Form I-9 as an employer agent.',
      icon: (
        <svg viewBox="0 0 24 24" className="h-6 w-6 text-silver" aria-hidden="true">
          <path d="M4 4h16v16H4z" fill="none" stroke="currentColor" strokeWidth="2" />
          <path d="M9 12h6" stroke="currentColor" strokeWidth="2" />
        </svg>
      ),
    },
    {
      title: 'After-Hours & Emergency Notary',
      desc:
        'Provide notary services outside regular business hours or on short notice, subject to availability and applicable surcharges.',
      icon: (
        <svg viewBox="0 0 24 24" className="h-6 w-6 text-silver" aria-hidden="true">
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" />
          <path d="M12 6v6l3 3" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
        </svg>
      ),
    },
  ];

  return (
    <MotionSection className="flex w-full flex-col gap-8 px-4 py-8 sm:px-8">
      <SEO
        title="Notary Services | Keystone Notary Group"
        description="Explore our full range of notary services including loan signings, apostilles, and more."
        path="/services"
      />
      <div className="mx-auto w-full max-w-3xl flex flex-col gap-8">
        <h1 className="text-4xl font-serif font-semibold tracking-wide heading-gradient text-silver">
          Services
        </h1>
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {services.map(({ title, desc, icon }) => (
            <li
              key={title}
              className="rounded border border-platinum bg-deepgray p-4 shadow-sm transition-transform transition-colors hover:-translate-y-1 hover:bg-charcoal hover:shadow-lg"
            >
              <div className="flex flex-wrap items-start gap-2">
                {icon}
                <h2 className="min-w-0 break-words text-lg font-semibold text-platinum sm:text-xl">{title}</h2>
              </div>
              <p className="mt-2 break-words text-sm text-platinum sm:text-base">{desc}</p>
            </li>
          ))}
        </ul>
        <a
          href="https://forms.gle/b1Xg8pYkZABk4wN96"
          target="_blank"
          rel="noopener noreferrer"
          className="cta-button mt-8 mb-8 self-center"
        >
          Book Now
        </a>
      </div>
    </MotionSection>
  );
}
