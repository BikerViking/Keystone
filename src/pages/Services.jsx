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
      title: 'Acknowledgements & Oaths',
      desc:
        'Official witnessing of signatures, affirmations, and acknowledgements as required by Pennsylvania law.',
      icon: (
        <svg viewBox="0 0 24 24" className="h-6 w-6 text-silver" aria-hidden="true">
          <path
            d="M5 13l4 4L19 7"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      title: 'Loan Signing Services',
      desc: 'Professional handling of mortgage closings and refinance packages.',
      icon: (
        <svg viewBox="0 0 24 24" className="h-6 w-6 text-silver" aria-hidden="true">
          <path
            d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
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
      title: 'Document Certifications',
      desc:
        'Certify copies of documents as true and accurate representations of the original when allowed by law.',
      icon: (
        <svg viewBox="0 0 24 24" className="h-6 w-6 text-silver" aria-hidden="true">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2" stroke="currentColor" strokeWidth="2" fill="none" />
          <path d="M3 9h18M9 21V9" stroke="currentColor" strokeWidth="2" fill="none" />
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
              className="rounded border border-platinum bg-deepgray p-4 shadow-sm transition-transform transition-colors hover:-translate-y-1 hover:bg-charcoal hover:shadow-lg overflow-hidden"
            >
              <div className="flex flex-wrap items-start gap-2">
                {icon}
                <h2 className="break-words text-lg font-semibold text-platinum sm:text-xl">{title}</h2>
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
