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
      {/* Precisely aligned block */}
      <div className="ml-[1.25rem] sm:ml-[2.5rem] md:ml-[3.25rem] lg:ml-[4.25rem] max-w-2xl">

        {/* Heading + badge side-by-side, aligned to 'K' in Keystone */}
        <div className="relative mb-8">
          <div className="absolute inset-x-0 top-1/2 h-px bg-gray-700 -z-10" />
          <div className="flex items-center gap-6">
            <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-silver whitespace-nowrap">
              Credentials
            </h2>
            <img
              src="/nna-badge.png"
              alt="Certified NNA Notary Signing Agent 2025"
              className="w-20 sm:w-24 md:w-28 lg:w-28"
            />
          </div>
        </div>

        {/* Aligned credential list */}
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