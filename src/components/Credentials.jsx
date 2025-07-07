import CheckIcon from './CheckIcon';
import MotionSection from './MotionSection';

export default function Credentials() {
  const credentials = [
    'Licensed & Bonded',
    'Certified Signing Agent',
    'Member of National Notary Association',
  ];

  return (
    <MotionSection className="container space-y-6">
      {/* Header and badge over divider */}
      <div className="relative mb-8">
        {/* Divider line */}
        <div className="absolute inset-x-0 top-1/2 h-px bg-gray-700 z-0" />

        {/* Header with badge, left-aligned */}
        <div className="relative z-10 flex items-center gap-4">
          <h2 className="text-3xl sm:text-4xl font-serif font-semibold tracking-wide text-silver whitespace-nowrap">
            Credentials
          </h2>
          <img
            src="/nna-badge.png"
            alt="Certified NNA Notary Signing Agent 2025 badge"
            className="h-[130px] sm:h-[140px] w-auto -mb-4"
          />
        </div>
      </div>

      {/* Credential bullets, aligned with heading */}
      <ul className="space-y-4">
        {credentials.map((cred) => (
          <li key={cred} className="flex items-start gap-3">
            <CheckIcon className="h-5 w-5 text-silver mt-1 flex-shrink-0" />
            <span className="text-platinum text-lg font-medium leading-relaxed tracking-normal">
              {cred}
            </span>
          </li>
        ))}
      </ul>
    </MotionSection>
  );
}