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
      <div className="relative mb-6 flex items-center justify-center gap-4 pb-4 after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-gray-700/60 md:justify-start">
        <h2 className="text-3xl font-serif font-semibold tracking-wide heading-gradient text-silver">
          Credentials
        </h2>
        <img
          src="/nna-badge.png"
          alt="Certified NNA Notary Signing Agent 2025 badge"
          className="h-[5rem] w-auto flex-none"
        />
      </div>

      <ul className="space-y-4">
        {credentials.map((cred) => (
          <li key={cred} className="flex items-start">
            <CheckIcon className="mr-2 h-5 w-5 text-silver" aria-hidden="true" />
            <span className="text-platinum">{cred}</span>
          </li>
        ))}
      </ul>
    </MotionSection>
  );
}

