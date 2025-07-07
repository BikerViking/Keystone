import CheckIcon from './CheckIcon';
import MotionSection from './MotionSection';

export default function Credentials() {
  const credentials = [
    'Licensed & Bonded',
    'Certified Signing Agent',
    'Member of National Notary Association',
  ];

  return (
    <MotionSection className="container space-y-6 text-center md:text-left">
      {/* Divider background */}
      <div className="relative mb-6">
        <div className="absolute inset-0 flex items-center pointer-events-none">
          <div className="w-full border-b border-gray-700" />
        </div>

        {/* Heading and badge (exact mockup layout) */}
        <div className="relative z-10 inline-flex items-center gap-4 flex-wrap">
          <h2 className="text-3xl sm:text-4xl font-serif font-semibold tracking-wide text-silver whitespace-nowrap">
            Credentials
          </h2>
          <img
            src="/nna-badge.png"
            alt="Certified NNA Notary Signing Agent 2025 badge"
            className="h-20 sm:h-24 md:h-28 w-auto max-w-[160px] -mb-4"
          />
        </div>
      </div>

      <ul className="space-y-4">
        {credentials.map((cred) => (
          <li key={cred} className="flex items-start">
            <CheckIcon className="mr-2 h-5 w-5 text-silver" />
            <span className="text-platinum">{cred}</span>
          </li>
        ))}
      </ul>
    </MotionSection>
  );
}