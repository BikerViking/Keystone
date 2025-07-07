import CheckIcon from './CheckIcon';
import MotionSection from './MotionSection';

export default function Credentials() {
  const credentials = [
    'Licensed & Bonded',
    'Certified Signing Agent',
    'Member of National Notary Association',
  ];

  return (
    <MotionSection className="container text-center space-y-10">
      <div className="flex flex-col items-center space-y-10">
        {/* Heading + Badge + Divider */}
        <div className="relative w-full flex justify-center items-center">
          {/* Divider Line */}
          <div className="absolute inset-x-0 h-px bg-gray-700 top-1/2 -z-10" />

          {/* Credentials title */}
          <div className="flex items-center gap-4 bg-black px-2">
            <h2 className="text-3xl sm:text-4xl font-serif font-semibold tracking-wide text-silver whitespace-nowrap">
              Credentials
            </h2>
            <img
              src="/nna-badge.png"
              alt="Certified NNA Notary Signing Agent 2025 badge"
              className="w-16 sm:w-24 md:w-28 lg:w-32"
            />
          </div>
        </div>

        {/* Credential list */}
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
      </div>
    </MotionSection>
  );
}
