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
      {/* Full-width wrapper allows the decorative line to extend behind the badge */}
      <div className="relative">
        <h2 className="text-3xl font-serif font-semibold tracking-wide heading-gradient text-silver w-full">
          Credentials
        </h2>
        <img
          src="/nna-badge.png"
          alt="Certified NNA Notary Signing Agent 2025 badge"
          className="absolute right-2 md:right-4 lg:right-8 top-full -translate-y-1/2 w-40 md:w-48 md:top-auto md:bottom-0 md:translate-y-[25%] z-10"
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
