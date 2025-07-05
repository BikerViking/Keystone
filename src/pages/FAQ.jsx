import MotionSection from '../components/MotionSection';

export default function FAQ() {
  const faqs = [
    { q: 'Do you offer mobile services?', a: 'Yes, we travel to your location.' },
    { q: 'What areas do you cover?', a: 'We serve the greater metropolitan area.' },
  ];

  return (
    <MotionSection className="container space-y-8">
      <h1 className="text-4xl font-serif font-semibold tracking-wide heading-gradient text-silver">Frequently Asked Questions</h1>
      <ul className="space-y-4">
        {faqs.map(({ q, a }) => (
          <li key={q}>
            <h2 className="text-xl font-medium">{q}</h2>
            <p className="text-platinum">{a}</p>
          </li>
        ))}
      </ul>
    </MotionSection>
  );
}
