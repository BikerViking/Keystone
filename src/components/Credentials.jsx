import CheckIcon from './CheckIcon';
import MotionSection from './MotionSection';

export default function Credentials() {
  const credentials = [
    'Licensed & Bonded',
    'Certified Signing Agent',
    'Member of National Notary Association',
  ];

  return (
    <MotionSection className="container mx-auto px-4 text-center space-y-10">
      {/* Unified Header + Badge Block */}
      <div className="flex flex-col items-center justify-center w-full">
        {/* Divider behind */}
        <div className="relative w-full flex justify-center items-center">
          <div className="absolute w-full h-px bg-gray-700 -z-10 top-1/2" />

          <div className="flex items-center justify-center space-x-4 px-4">
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
      </div>

      {/* Centered Credential List */}
      <ul className="space-y-4">
        {credentials.map((cred) => (
          <li
            key={cred}
            className="flex items-center justify-center text-platinum text-lg sm:text-xl"
          >
            <CheckIcon className="h-5 w-5 mr-2 text-silver" />
            <span>{cred}</span>
          </li>
        ))}
      </ul>
    </MotionSection>
  );
}
