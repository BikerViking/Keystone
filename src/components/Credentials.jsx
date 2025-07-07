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
      <div className="max-w-xl mx-auto text-left">
        {/* Heading with badge */}
        <div className="flex items-center justify-between gap-4">
          <h2 className="text-3xl sm:text-4xl font-serif font-semibold tracking-wide text-silver whitespace-nowrap">
            Credentials
          </h2>
          <img
            src="/nna-badge.png"
            alt="Certified NNA Notary Signing Agent 2025 badge"
            className="w-16 sm:w-20 md:w-24 lg:w-28"
          />
        </div>

        {/* Divider */}
        <div className="h-px bg-gray-700 my-4 sm:my-6" />

        {/* Credential List */}
        <ul className="space-y-4">
          {credentials.map((cred) => (
            <li key={cred} className="flex items-start text-platinum text-lg sm:text-xl">
              <CheckIcon className="h-5 w-5 mt-1 mr-2 text-silver" />
              <span>{cred}</span>
            </li>
          ))}
        </ul>
      </div>
    </MotionSection>
  );
}