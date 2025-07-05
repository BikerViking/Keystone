import MotionSection from '../components/MotionSection';

export default function Services() {
  const services = [
    'Acknowledgements',
    'Jurats',
    'Loan Signings',
    'Apostille Facilitation',
  ];

  return (
    <MotionSection className="container space-y-8">
      <h1 className="text-4xl font-serif font-semibold tracking-wide heading-gradient text-silver">Services</h1>
      <ul className="grid gap-4 md:grid-cols-2">
        {services.map((service) => (
          <li key={service} className="rounded border border-platinum bg-deepgray p-4">
            {service}
          </li>
        ))}
      </ul>
    </MotionSection>
  );
}
