import CheckIcon from './CheckIcon';
import MotionSection from './MotionSection';

export default function Credentials() {
  const credentials = [
    'Licensed & Bonded',
    'Certified Signing Agent',
    'Member of National Notary Association',
  ];

  return (
    <MotionSection className="w-full px-4 py-16 flex flex-col items-center">
      {/* Centered Title + Badge + Divider block */}
      <div className="relative flex flex-col items-center">
        {/* Divider line behind block */}
        <div className="absolute inset-x-0 top-1/2 h-px bg-gray-700 z-0" />
        
        {/* Unified badge + heading block */}
        <div className="relative z-10 inline-flex items-center gap-4 px-4 bg-black">
          <h2 className="text-3xl sm:text-4xl font-serif font-semibold tracking-wide text-silver whitespace-nowrap">
            Credentials
          </h2>
          <img
            src="/nna-badge.png"
            alt="Certified NNA Notary Signing Agent 2025 badge"
            className="h-[64px] sm:h-[72px] w-auto object-contain"
          />
        </div>
      </div>

      {/* Bullet list below the centered block */}
      <ul className="mt-8 space-y-4 text-left">
        {credentials.map((cred) => (
          <li key={cred} className="flex items-start justify-center">
            <CheckIcon className="mr-2 h-5 w-5 text-silver mt-1" />
            <span className="text-lg text-platinum leading-relaxed">
              {cred}
            </span>
          </li>
        ))}
      </ul>
    </MotionSection>
  );
}