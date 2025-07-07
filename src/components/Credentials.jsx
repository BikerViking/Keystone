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
      <div className="relative inline-flex w-full flex-wrap items-end gap-4 px-2 pb-4 mb-6 after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-gray-700 after:z-0">
        <h2 className="credentials-heading relative z-10 whitespace-nowrap text-3xl font-serif font-semibold tracking-wide text-silver">
          Credentials
        </h2>
        <img
          src="/nna-badge.png"
          alt="Certified NNA Notary Signing Agent 2025 badge"
          className="relative z-10 h-14 flex-none -mb-2"
        />
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