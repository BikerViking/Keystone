import { MotionSection } from '../components';

export default function Services() {
  const services = [
    {
      title: 'Acknowledgements & Oaths',
      desc:
        'Official witnessing of signatures, affirmations, and acknowledgements as required by Pennsylvania law.',
    },
    {
      title: 'Loan Signing Services',
      desc: 'Professional handling of mortgage closings and refinance packages.',
    },
    {
      title: 'After-Hours & Emergency Notary',
      desc:
        'Provide notary services outside regular business hours or on short notice, subject to availability and applicable surcharges.',
    },
    {
      title: 'Oaths & Affirmations',
      desc:
        'Administer legally binding oaths and affirmations for affidavits, statements, and declarations.',
    },
    {
      title: 'Document Certifications',
      desc:
        'Certify copies of documents as true and accurate representations of the original when allowed by law.',
    },
  ];

  return (
    <MotionSection className="container space-y-8">
      <h1 className="text-4xl font-serif font-semibold tracking-wide heading-gradient text-silver">
        Services
      </h1>
      <ul className="grid gap-6 min-[568px]:grid-cols-2">
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
