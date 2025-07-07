import CheckIcon from './CheckIcon';
import MotionSection from './MotionSection';

export default function Credentials() {
  const credentials = [
    'Licensed & Bonded',
    'Certified Signing Agent',
    'Member of National Notary Association',
  ];

  return (
    <MotionSection className="container mx-auto px-4">
      <div className="ml-2 sm:ml-4 lg:ml-8 flex flex-col items-start space-y-6">
        {/* Heading with badge */}
        <div className="relative w-full flex items-center">
          {/* Divider line behind */}
          <div className="absolute inset-x-0 top-1/2 h-px bg-gray-700 -z-10" />

          <h2 className="text-3xl sm:text-4xl font-serif font-semibold tracking-wide text-silver">
            Credentials
          </h2>

          <img
            src="/nna-badge.png"
            alt="Certified NNA Notary Signing Agent 2025 badge"
            className="ml-4 w-20 sm:w-24 md:w-24 lg:w-28"
          />
        </div>

        {/* Credential List */}
        <ul className="space-y-4">
          {credentials.map((cred) => (
            <li key={cred} className="flex items-center text-platinum">
              <CheckIcon className="h-5 w-5 mr-2 text-silver" />
              <span className="text-lg sm:text-xl">{cred}</span>
            </li>
          ))}
        </ul>
      </div>
    </MotionSection>
  );
}