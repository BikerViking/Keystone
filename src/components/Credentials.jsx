import CheckIcon from './CheckIcon';
import MotionSection from './MotionSection';

export default function Credentials() {
  const credentials = [
    'Licensed & Bonded',
    'Certified Signing Agent',
    'Member of National Notary Association',
  ];

  return (
    <MotionSection className="container mx-auto px-4 py-12 text-center">
      {/* Header with badge and divider */}
      <div className="relative flex flex-col items-center justify-center">
        <div className="relative flex items-center justify-center w-full max-w-3xl">
          <hr className="absolute top-1/2 left-0 w-full border-t border-gray-700" />
          <h2 className="relative z-10 bg-black px-4 text-3xl font-serif font-semibold tracking-wide text-silver">
            Credentials
          </h2>
          <img
            src="/nna-badge.png"
            alt="Certified NNA Notary Signing Agent 2025 badge"
            className="relative z-10 ml-4 h-16 w-16 md:h-20 md:w-20 object-contain bg-black px-2"
          />
        </div>
      </div>

      {/* Credential list */}
      <ul className="mt-8 space-y-4 text-center max-w-xl mx-auto">
        {credentials.map((cred) => (
          <li key={cred} className="flex items-start justify-center">
            <CheckIcon className="mr-2 h-5 w-5 text-silver mt-1" />
            <span className="text-platinum text-lg">{cred}</span>
          </li>
        ))}
      </ul>
    </MotionSection>
  );
}