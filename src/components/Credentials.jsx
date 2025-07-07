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
      {/* Outer centered block */}
      <div className="mx-auto w-full max-w-2xl px-4 flex flex-col items-start space-y-6">
        {/* Header with badge and line */}
        <div className="relative w-full">
          {/* Divider behind */}
          <div className="absolute top-1/2 left-0 w-full h-px bg-gray-700 -z-10" />

          {/* Header + Badge */}
          <div className="flex items-center justify-between w-full">
            <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-silver whitespace-nowrap">
              Credentials
            </h2>
            <img
              src="/nna-badge.png"
              alt="Certified NNA Notary Signing Agent 2025"
              className="w-16 sm:w-24 md:w-28 lg:w-32"
            />
          </div>
        </div>

        {/* Credential list - left aligned */}
        <ul className="space-y-4">
          {credentials.map((cred) => (
            <li key={cred} className="flex items-start text-platinum">
              <CheckIcon className="h-5 w-5 mr-2 mt-1 text-silver" />
              <span className="text-lg sm:text-xl">{cred}</span>
            </li>
          ))}
        </ul>
      </div>
    </MotionSection>
  );
}
