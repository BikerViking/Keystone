export default function Services() {
  const services = [
    'Acknowledgements',
    'Jurats',
    'Loan Signings',
    'Apostille Facilitation',
  ];

  return (
    <section className="container py-16 space-y-8">
      <h1 className="text-4xl font-serif font-bold">Services</h1>
      <ul className="grid gap-4 md:grid-cols-2">
        {services.map((service) => (
          <li key={service} className="rounded bg-gray-800 p-4">
            {service}
          </li>
        ))}
      </ul>
    </section>
  );
}
