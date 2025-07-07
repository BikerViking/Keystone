import CheckIcon from './CheckIcon';
import MotionSection from './MotionSection';

export default function Credentials() {
  const credentials = [
    'Licensed & Bonded',
    'Certified Signing Agent',
    'Member of National Notary Association',
  ];

  return (
    <MotionSection className="container px-4 py-12 text-center mx-auto">
      {/* Header + badge + divider */}
      <div className="relative mx-auto max-w-4xl">
        <div className="absolute inset-x-0 top-1/2 border-t border-gray-700 z-0"></div>

        <div className="relative z-10 flex flex-wrap justify-center items-center gap-4 bg-black px-4">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold tracking-wide text-silver whitespace-nowrap">
            Credentials
          </h2>
          <img
            src="/nna-badge.png"
            alt="Certified NNA Notary Signing Agent 2025 badge"
            className="h-16 w-16 md:h-20 md:w-20 object-contain"
          />
        </div>
      </div>

      {/* Credential list */}
      <ul className="mt-8 space-y-4 text-center max-w-xl mx-auto">
        {credentials.map((cred) => (
          <li key={cred} className="flex items-start justify-center">
            <CheckIcon className="mr-2 h-5 w-5 text-silver mt-1" />
            <span className="text-platinum text-lg md:text-xl">{cred}</span>
          </li>
        ))}
      </ul>
    </MotionSection>
  );
}