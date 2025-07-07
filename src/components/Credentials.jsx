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
      <div className="mx-auto w-full max-w-2xl space-y-6">
        {/* Heading + Badge row */}
        <div className="relative w-full flex justify-center">
          {/* Divider line */}
          <div className="absolute top-1/2 left-0 w-full h-px bg-gray-700 -z-10" />

          <div className="flex items-center justify-center space-x-4">
            <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-silver whitespace-nowrap text-center">
              Credentials
            </h2>
            <img
              src="/nna-badge.png"
              alt="Certified NNA Notary Signing Agent 2025"
              className="w-20 sm:w-24 md:w-28 lg:w-32 xl:w-36 -mt-2"
            />
          </div>
        </div>

        {/* Credential list - left aligned under centered block */}
        <ul className="mx-auto w-full max-w-md space-y-4 pl-1">
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