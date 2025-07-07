import CheckIcon from './CheckIcon';
import MotionSection from './MotionSection';

export default function Credentials() {
  const credentials = [
    'Licensed & Bonded',
    'Certified Signing Agent',
    'Member of National Notary Association',
  ];

  return (
    <MotionSection className="container mx-auto px-4 space-y-8">
      {/* Heading + Badge inline */}
      <div className="flex flex-col items-start md:flex-row md:items-center md:justify-between">
        <div className="flex items-center space-x-4">
          <h2 className="text-3xl font-serif font-semibold tracking-wide text-silver border-b border-gray-700 pb-1">
            Credentials
          </h2>
          <img
            src="/nna-badge.png"
            alt="Certified NNA Notary Signing Agent 2025 badge"
            className="h-16 w-auto md:h-24"
          />
        </div>
      </div>

      {/* Credential list aligned to heading */}
      <ul className="space-y-4 pl-1 md:pl-0">
        {credentials.map((cred) => (
          <li key={cred} className="flex items-start">
            <CheckIcon className="h-5 w-5 text-silver mt-1 mr-2 flex-shrink-0" />
            <span className="text-platinum text-lg leading-relaxed">
              {cred}
            </span>
          </li>
        ))}
      </ul>
    </MotionSection>
  );
}