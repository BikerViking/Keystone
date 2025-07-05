function FAQ() {
  const faqs = [
    {
      q: 'Do you offer mobile services?',
      a: 'Yes, our agents travel to your location for maximum convenience.',
    },
    {
      q: 'What areas do you cover?',
      a: 'We serve the entire metropolitan region with flexible scheduling.',
    },
    {
      q: 'How do I schedule an appointment?',
      a: 'Call us or use our contact form to request a specific time.',
    },
  ];

  return (
    <section className="space-y-6">
      <h1 className="text-4xl font-semibold">Frequently Asked Questions</h1>
      <div className="space-y-4">
        {faqs.map(({ q, a }) => (
          <details key={q} className="rounded border border-gray-700 p-4">
            <summary className="cursor-pointer font-medium">{q}</summary>
            <p className="mt-2 text-sm text-gray-300">{a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

export default FAQ;
