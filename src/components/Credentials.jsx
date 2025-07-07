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
      <div className="flex items-center justify-between border-b border-gray-700 pb-2 mb-4 relative">
        <h2 className="text-3xl font-serif font-semibold tracking-wide text-silver">Credentials</h2>
        <img
          src="/nna-badge.png"
          alt="Certified NNA Notary Signing Agent 2025 badge"
          className="w-24 sm:w-28 lg:w-32 -mb-5 z-10"
          style={{ transform: 'translateY(10%)' }}
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
