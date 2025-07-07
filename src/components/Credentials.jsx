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
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Container aligned with hero title */}
        <div className="ml-[5%] sm:ml-[8%] md:ml-[10%] lg:ml-[12%] xl:ml-[14%]">

          {/* Title + Badge with Divider */}
          <div className="relative flex items-center mb-4">
            {/* Divider Behind */}
            <div className="absolute inset-y-0 left-0 right-0 h-px bg-gray-700 top-1/2 -z-10" />

            {/* Title */}
            <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-silver whitespace-nowrap pr-4">
              Credentials
            </h2>

            {/* Badge */}
            <img
              src="/nna-badge.png"
              alt="Certified NNA Notary Signing Agent 2025"
              className="w-20 sm:w-24 md:w-28 lg:w-32"
            />
          </div>

          {/* Left-aligned List */}
          <ul className="space-y-4">
            {credentials.map((cred) => (
              <li key={cred} className="flex items-start text-platinum">
                <CheckIcon className="h-5 w-5 mt-1 mr-2 text-silver" />
                <span className="text-lg sm:text-xl leading-relaxed">{cred}</span>
              </li>
            ))}
          </ul>

        </div>
      </div>
    </MotionSection>
  );
}