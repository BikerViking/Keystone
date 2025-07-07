import CheckIcon from './CheckIcon';
import MotionSection from './MotionSection';

export default function Credentials() {
  const credentials = [
    'Licensed & Bonded',
    'Certified Signing Agent',
    'Member of National Notary Association',
  ];

  return (
    <MotionSection className="container space-y-6 text-center">
      {/* Divider line behind header block */}
      <div className="relative mb-6 flex flex-col items-center">
        {/* Full-width divider line */}
        <div className="absolute inset-x-0 top-1/2 h-px bg-gray-700 z-0" />

        {/* Heading + badge overlay */}
        <div className="relative z-10 flex items-center justify-center gap-4 flex-wrap">
          <h2 className="text-3xl sm:text-4xl font-serif font-semibold tracking-wide text-silver whitespace-nowrap">
            Credentials
          </h2>
          <img
            src="/nna-badge.png"
            alt="Certified NNA Notary Signing Agent 2025 badge"
            className="h-[160px] sm:h-[180px] md:h-[192px] w-auto max-w-[200px] -mb-6"
          />
        </div>
      </div>

      {/* Credential list */}
      <ul className="space-y-4 text-center sm:text-left">
        {credentials.map((cred) => (
          <li
            key={cred}
            className="flex items-start justify-center sm:justify-start gap-3"
          >
            <CheckIcon className="h-5 w-5 text-silver mt-1 flex-shrink-0" />
            <span className="text-platinum text-base sm:text-lg font-medium leading-relaxed tracking-normal">
              {cred}
            </span>
          </li>
        ))}
      </ul>
    </MotionSection>
  );
}