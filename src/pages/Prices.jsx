import { MotionSection, SEO } from '../components';

const feeSchedule = [
  {
    category: 'Notarial Acts',
    items: [
      { name: 'Acknowledgment (first signature)', price: '$5' },
      { name: 'Each additional signature', price: '$2' },
      { name: 'Oath or affirmation', price: '$5' },
      { name: 'Certified copy', price: '$5' },
    ],
  },
  {
    category: 'Travel',
    items: [
      { name: '0–10 miles', price: '$25' },
      { name: '10–20 miles', price: '$40' },
      { name: 'Over 20 miles (per mile)', price: '$2' },
    ],
  },
  {
    category: 'After-Hours',
    items: [
      { name: 'Weekdays after 6pm', price: '$20' },
      { name: 'Weekends', price: '$30' },
    ],
  },
  {
    category: 'Emergency',
    items: [{ name: 'Less than 4 hours notice', price: '$40' }],
  },
  {
    category: 'Loan Signings',
    items: [
      { name: 'Standard package', price: '$150' },
      { name: 'Each additional signer', price: '$25' },
    ],
  },
];

export default function Prices() {
  return (
    <MotionSection className="w-full py-8 px-4 sm:px-8">
      <SEO
        title="Fee Schedule | Keystone Notary Group"
        description="Complete pricing for notary acts, travel and loan signing services."
        path="/prices"
      />
      <div className="mx-auto w-full max-w-3xl flex flex-col gap-8">
        <h1 className="text-4xl font-serif font-semibold tracking-wide heading-gradient text-silver">
          Fee Schedule
        </h1>
        {feeSchedule.map(({ category, items }) => (
          <section key={category} aria-labelledby={`${category}-heading`}>
            <h2
              id={`${category}-heading`}
              className="mb-2 text-2xl font-semibold text-silver"
            >
              {category}
            </h2>
            <table className="w-full border-collapse text-left">
              <thead className="sr-only">
                <tr>
                  <th scope="col">Service</th>
                  <th scope="col">Price</th>
                </tr>
              </thead>
              <tbody>
                {items.map(({ name, price }) => (
                  <tr key={name} className="border-b border-platinum last:border-0">
                    <td className="py-2 pr-4 text-platinum">{name}</td>
                    <td className="py-2 text-platinum">{price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        ))}
        <p className="text-sm text-platinum">
          Travel fees apply within the Greater Philadelphia area. After-hours and
          emergency services are subject to availability. All notarial acts comply
          with Pennsylvania fee statutes.
        </p>
      </div>
    </MotionSection>
  );
}
