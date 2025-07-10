import { MotionSection, SEO } from '../components';

const feeSchedule = [
  {
    category: 'Standard Fees',
    items: [
      { name: 'Notarial Act (per signature/stamp)', price: '$5' },
      { name: 'Oath or affirmation', price: '$5' },
      { name: 'Document/copy certification', price: '$5' },
    ],
  },
  {
    category: 'Travel / Mobile Fee',
    items: [
      { name: 'Up to 10 miles', price: '$60' },
      { name: '11–20 miles', price: '$80' },
      { name: '21–30 miles', price: '$100' },
      { name: 'Over 30 miles', price: 'Quoted' },
    ],
  },
  {
    category: 'Surcharges',
    items: [
      { name: 'After-hours/weekend', price: '+$35' },
      { name: 'Late night/holiday', price: '+$60' },
      { name: 'Emergency/rush (within 2 hours)', price: '+$100' },
      { name: 'Additional wait time (per 30 min over first 30)', price: '+$25' },
    ],
  },
  {
    category: 'Specialized Services',
    items: [
      {
        name: 'Loan signing / real estate closing',
        price: '$135',
      },
      { name: 'Complex signings', price: '$150–$175' },
      { name: 'Deed-only appointments', price: '$85' },
    ],
  },
];

export default function Prices() {
  return (
    <MotionSection className="w-full py-8 px-4 sm:px-8">
      <SEO
        title="Keystone Notary Group – Fee Schedule"
        description="Official fee schedule for all services."
        path="/prices"
      />
      <div className="mx-auto w-full max-w-3xl flex flex-col gap-8">
        <h1 className="text-4xl font-serif font-semibold tracking-wide heading-gradient text-silver">
          Keystone Notary Group – Fee Schedule
        </h1>
        {feeSchedule.map(({ category, items }) => (
          <section key={category} aria-labelledby={`${category}-heading`}>
            <h2
              id={`${category}-heading`}
              className="mb-2 text-2xl font-semibold text-silver"
            >
              {category}
            </h2>
            <ul className="grid gap-4 sm:grid-cols-2">
              {items.map(({ name, price }) => (
                <li
                  key={name}
                  className="rounded border border-platinum bg-deepgray p-4 shadow-sm"
                >
                  <h3
                    className="flex items-center justify-between text-platinum"
                  >
                    <span>{name}</span>
                    <span
                      className={
                        name.includes('Loan signing') ? 'text-accent font-semibold' : ''
                      }
                    >
                      {price}
                    </span>
                  </h3>
                </li>
              ))}
            </ul>
          </section>
        ))}
        <p className="text-sm text-platinum">
          All fees comply with Pennsylvania law and are quoted in advance. Valid
          ID is required and appointments are confirmed upon acceptance. Payment
          is accepted by cash, check, card or Venmo.
        </p>
        <p className="text-sm text-platinum">
          Questions? Call{' '}
          <a href="tel:2673099000" className="underline hover:text-silver">
            (267) 309-9000
          </a>{' '}
          or email{' '}
          <a
            href="mailto:info@keystonenotarygroup.com"
            className="underline hover:text-silver"
          >
            info@KeystoneNotaryGroup.com
          </a>
          .
        </p>
        <a
          href="mailto:info@keystonenotarygroup.com"
          className="cta-button mt-2 w-max"
        >
          Contact Us
        </a>
      </div>
    </MotionSection>
  );
}
