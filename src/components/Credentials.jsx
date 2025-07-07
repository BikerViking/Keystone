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
      {/* Heading and badge inline with decorative line behind */}
      <div
        className="relative mb-4 pb-2 flex items-center justify-between w-full before:absolute before:bottom-0 before:left-0 before:right-0 before:h-px before:bg-gray-700 before:content-['']"
      >
        <h2 className="text-3xl font-serif font-semibold tracking-wide text-silver">Credentials</h2>
        <img
          src="/nna-badge.png"
          alt="Certified NNA Notary Signing Agent 2025 badge"
          className="w-24 sm:w-28 lg:w-32 shrink-0 z-10"
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
