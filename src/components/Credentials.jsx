import CheckIcon from './CheckIcon';
import MotionSection from './MotionSection';

export default function Credentials() {
  const credentials = [
    'Licensed & Bonded',
    'Certified Signing Agent',
    'Member of National Notary Association',
  ];

  return (
    <MotionSection className="px-4">
      <div className="max-w-4xl mx-auto">
        {/* Heading + Badge */}
        <div className="flex items-center gap-6 mb-4">
          <h2 className="text-3xl sm:text-4xl font-serif font-semibold tracking-wide text-silver whitespace-nowrap">
            Credentials
          </h2>
          <img
            src="/nna-badge.png"
            alt="Certified NNA Notary Signing Agent 2025 badge"
            className="w-20 sm:w-24 md:w-28"
          />
        </div>

        {/* Divider */}
        <div className="h-px bg-gray-700 mb-6" />

        {/* Credential List */}
        <ul className="space-y-4 text-left">
          {credentials.map((cred) => (
            <li
              key={cred}
              className="flex items-start text-platinum text-lg sm:text-xl"
            >
              <CheckIcon className="h-5 w-5 mt-1 mr-2 text-silver" />
              <span>{cred}</span>
            </li>
          ))}
        </ul>
      </div>
    </MotionSection>
  );
}