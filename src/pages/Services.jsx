import { MotionSection } from '../components';

export default function Services() {
  const services = [
    {
      title: 'Acknowledgements & Jurats',
      desc: 'Official witnessing of signatures and sworn statements.',
    },
    {
      title: 'Loan Signing Services',
      desc: 'Professional handling of mortgage closings and refinance packages.',
    },
    {
      title: 'Apostille Facilitation',
      desc: 'Guidance obtaining apostilles for documents destined for foreign use.',
    },
    {
      title: 'I-9 Employment Verification',
      desc: 'Authorized representative services for remote employee onboarding.',
    },
    {
      title: 'Remote Notarization',
      desc: 'Online notarization where permitted by Pennsylvania law.',
    },
  ];

  return (
    <MotionSection className="container space-y-8">
      <h1 className="text-4xl font-serif font-semibold tracking-wide heading-gradient text-silver">
        Services
      </h1>
      <ul className="grid gap-6 md:grid-cols-2">
        {services.map(({ title, desc }) => (
          <li
            key={title}
            className="rounded border border-platinum bg-deepgray p-4 shadow-sm"
          >
            <h2 className="text-xl font-semibold text-platinum">{title}</h2>
            <p className="mt-2 text-platinum">{desc}</p>
          </li>
        ))}
      </ul>
    </MotionSection>
  );
}
