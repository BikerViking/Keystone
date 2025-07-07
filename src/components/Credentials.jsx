import CheckIcon from './CheckIcon';
import MotionSection from './MotionSection';

export default function Credentials() {
  const credentials = [
    'Licensed & Bonded',
    'Certified Signing Agent',
    'Member of National Notary Association',
  ];

  return (
    <MotionSection className="container text-center space-y-8">
      {/* Heading and badge stacked */}
      <div className="relative flex flex-col items-center gap-4">
        {/* Divider line behind */}
        <div className="absolute inset-x-0 top-1/2 h-px bg-gray-700 z-0" />
        {/* Heading + badge */}
        <div className="relative z-10 flex flex-col items-center">
          <h2 className="text-3xl sm:text-4xl font-serif font-semibold tracking-wide text-silver">
            Credentials
          </h2>
          <img
            src="/nna-badge.png"
            alt="Certified NNA Notary Signing Agent 2025 badge"
            className="w-28 sm:w-32 md:w-36 lg:w-40 xl:w-44 mt-2"
          />
        </div>
      </div>

      {/* List of credentials */}
      <ul className="space-y-4 max-w-xl mx-auto text-left">
        {credentials.map((cred) => (
          <li key={cred} className="flex items-start">
            <CheckIcon className="h-5 w-5 text-silver mt-1 mr-2 flex-shrink-0" />
            <span className="text-platinum text-lg font-medium leading-relaxed">
              {cred}
            </span>
          </li>
        ))}
      </ul>
    </MotionSection>
  );
}