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
      {/* Align block with the 'K' in Keystone */}
      <div className="ml-[1.25rem] sm:ml-[2.5rem] md:ml-[3rem] lg:ml-[3.75rem] max-w-2xl">

        {/* Header & badge aligned horizontally */}
        <div className="relative mb-8">
          <div className="absolute inset-x-0 top-1/2 h-px bg-gray-700 -z-10" />
          <div className="flex items-center justify-start gap-6">
            <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-silver whitespace-nowrap">
              Credentials
            </h2>
            <img
              src="/nna-badge.png"
              alt="Certified NNA Notary Signing Agent 2025"
              className="w-16 sm:w-20 md:w-24 lg:w-24"
            />
          </div>
        </div>

        {/* Credential List */}
        <ul className="space-y-4 pl-1">
          {credentials.map((cred) => (
            <li key={cred} className="flex items-start text-platinum">
              <CheckIcon className="h-5 w-5 mt-1 mr-2 text-silver" />
              <span className="text-lg sm:text-xl leading-relaxed">{cred}</span>
            </li>
          ))}
        </ul>
      </div>
    </MotionSection>
  );
}