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
      <div className="flex flex-col items-center space-y-4">
        {/* Centered heading + badge with divider */}
        <div className="relative flex flex-col items-center">
          <div className="absolute inset-x-0 top-1/2 h-px bg-gray-700 -z-10" />
          <div className="flex flex-col items-center space-y-3">
            <h2 className="text-3xl sm:text-4xl font-serif font-semibold tracking-wide text-silver">
              Credentials
            </h2>
            <img
              src="/nna-badge.png"
              alt="Certified NNA Notary Signing Agent 2025 badge"
              className="w-32 sm:w-36 md:w-40 lg:w-44"
            />
          </div>
        </div>

        {/* Centered credential list */}
        <ul className="space-y-4">
          {credentials.map((cred) => (
            <li key={cred} className="flex items-center justify-center text-platinum">
              <CheckIcon className="h-5 w-5 mr-2 text-silver" />
              <span className="text-lg sm:text-xl">{cred}</span>
            </li>
          ))}
        </ul>
      </div>
    </MotionSection>
  );
}