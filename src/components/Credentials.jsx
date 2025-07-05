import CheckIcon from './CheckIcon';

export default function Credentials() {
  const credentials = [
    'Licensed & Bonded',
    'Certified Signing Agent',
    'Member of National Notary Association',
  ];

  return (
    <section className="container py-16 space-y-6">
      <h2 className="text-3xl font-serif font-semibold tracking-wide heading-gradient">
        Credentials
      </h2>
      <ul className="space-y-4">
        {credentials.map((cred) => (
          <li key={cred} className="flex items-start">
            <CheckIcon className="mr-2 h-5 w-5 text-silver-600" />
            <span className="text-gray-300">{cred}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
