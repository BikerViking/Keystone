function Services() {
  const services = [
    'Real estate closings',
    'Loan signings',
    'Power of attorney',
    'Apostille processing',
    'General notary work',
  ];

  return (
    <section className="space-y-6">
      <h1 className="text-4xl font-semibold">Our Services</h1>
      <ul className="list-disc space-y-2 pl-5">
        {services.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  );
}

export default Services;
