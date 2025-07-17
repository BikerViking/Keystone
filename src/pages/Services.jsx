import {
  MotionSection,
  SEO,
  ServiceItem,
  DocumentIcon,
  UsersIcon,
  BriefcaseIcon,
  HomeIcon,
} from '../components';
import { sectionSpacing } from '../components/variants';

export default function Services() {
  const categories = [
    {
      heading: 'General Notary',
      Icon: DocumentIcon,
      items: [
        'Mobile Notary Services',
        'General Acknowledgements',
        'After-Hours & Emergency Notary',
      ],
    },
    {
      heading: 'Personal & Family',
      Icon: UsersIcon,
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
      Icon: BriefcaseIcon,
      items: [
        'Contracts',
        'Legal Filings',
        'Document Certification',
        'I-9 Employment Verification',
      ],
    },
    {
      heading: 'Real Estate',
      Icon: HomeIcon,
      items: [
        'Deed Transfers',
        'Loan Signing Appointments',
      ],
    },
  ];

  return (
    <>
      <MotionSection className={`w-full px-4 text-center sm:px-8 ${sectionSpacing}`}>
        <SEO
          title="Notary Services | Keystone Notary Group"
          description="Explore our full range of notary services including loan signings, apostilles, and more."
          path="/services"
        />
        <h1 className="relative z-10 text-4xl font-serif font-semibold tracking-wide heading-gradient text-silver">
          Our Professional Services
        </h1>
      </MotionSection>
      <MotionSection className={`flex w-full flex-col gap-12 px-4 sm:px-8 ${sectionSpacing}`}> 
        <div className="mx-auto w-full max-w-5xl space-y-12">
          {categories.map(({ heading, items, Icon }) => (
            <section key={heading} className="flex flex-col gap-6">
              <h2 className="flex items-center gap-2 text-2xl font-semibold text-silver">
                <Icon className="h-6 w-6 text-silver" aria-hidden="true" />
                {heading}
              </h2>
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
