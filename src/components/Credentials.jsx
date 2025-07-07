import CheckIcon from './CheckIcon';
import MotionSection from './MotionSection';

export default function Credentials() {
  const credentials = [
    'Licensed & Bonded',
    'Certified Signing Agent',
    'Member of National Notary Association',
  ];

  return (
    <MotionSection className="container space-y-6">
      {/* Heading and badge aligned in a single row with line behind */}
      <div className="relative mb-2">
        <div className="relative z-10 flex w-full items-end justify-between gap-4">
          <h2 className="text-3xl font-serif font-semibold tracking-wide text-silver">
            Credentials
          </h2>
          <img
            src="/nna-badge.png"
            alt="Certified NNA Notary Signing Agent 2025 badge"
            className="shrink-0 w-20 sm:w-24 md:w-28 lg:w-32"
          />
        </div>
        {/* Full-width line positioned behind the heading and badge */}
        <hr
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 border-0 border-b border-gray-600"
        />
      </div>
      <ul className="space-y-4">
        {credentials.map((cred) => (
          <li key={cred} className="flex items-start">
            <CheckIcon className="mr-2 h-5 w-5 text-silver" />
            <span className="text-platinum">{cred}</span>
          </li>
        ))}
      </ul>
    </MotionSection>
  );
}
