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
      <div className="max-w-4xl mx-auto w-full">
        <div className="flex flex-col items-start sm:flex-row sm:items-center justify-between">
          {/* Heading */}
          <h2 className="text-3xl font-serif font-semibold tracking-wide text-silver">
            Credentials
          </h2>

          {/* Badge */}
          <img
            src="/nna-badge.png"
            alt="Certified NNA Notary Signing Agent 2025 badge"
            className="w-16 sm:w-20 mt-4 sm:mt-0"
          />
        </div>

        {/* Divider */}
        <div className="my-4 h-px bg-gray-700" />

        {/* Credential List */}
        <ul className="space-y-4 pl-1">
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